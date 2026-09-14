/**
 * UniversalChatbot — one embeddable chatbot engine for any website.
 *
 * Usage:
 *   1. Load a data file first:  <script src="data/<site>.js"></script>
 *      which sets window.ChatBotData (knowledge) and window.ChatBotConfig (theme/brand).
 *   2. Load this engine:         <script src="chatbot.js"></script>
 *   3. Optionally a theme:       <link rel="stylesheet" href="theme/<site>.css">
 *
 * The engine injects its own widget DOM into <body> — no markup needed in the page.
 * It merges:
 *   - data-driven knowledge base + intent routing (from the OdinAgent v2.1.0 concept)
 *   - fuzzy keyword scoring with levenshtein + stopwords (from the Nexus Hub bot)
 *   - typing indicator, suggestion chips, linkify, session memory, config themes
 *
 * Internationalization: data files may provide `labels` for UI strings and
 * `interactionPatterns` for greeting/thanks/help variants per language.
 */
(function (global) {
  'use strict';

  /* ------------------------------------------------------------
     Levenshtein distance + stopwords (fuzzy matching helpers)
     ------------------------------------------------------------ */
  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
      }
    }
    return dp[m][n];
  }

  const STOPWORDS = new Set([
    'a', 'an', 'the', 'and', 'or', 'of', 'to', 'for', 'with', 'on', 'in', 'at',
    'about', 'is', 'are', 'was', 'were', 'am', 'be', 'do', 'does', 'did', 'can',
    'could', 'would', 'should', 'will', 'what', 'which', 'who', 'whom', 'whose',
    'why', 'how', 'where', 'when', 'this', 'that', 'these', 'those', 'it', 'its',
    'i', 'you', 'your', 'me', 'my', 'we', 'our', 'us', 'they', 'them', 'their',
    'he', 'she', 'him', 'her', 'not', 'no', 'yes', 'get', 'got', 'have', 'has',
    'had', 'there', 'here', 'so', 'too', 'very', 'just', 'also', 'as', 'if',
    'then', 'than', 'but', 'tell', 'show', 'make', 'made', 'like', 'want',
    'please', 'know', 'please', 'le', 'la', 'les', 'un', 'une', 'des', 'du',
    'de', 'et', 'ou', 'mais', 'est', 'sont', 'pour', 'avec', 'sur', 'dans',
    'ne', 'pas', 'je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles',
    'comment', 'quoi', 'qui', 'que', 'quel', 'quelle', 'où', 'quand', 'pourquoi',
    'ce', 'cet', 'cette', 'ces', 'mon', 'ton', 'son', 'notre', 'votre', 'leur',
    'moi', 'toi', 'lui', 'nous', 'vous', 'eux', 'a', 'ai', 'avez', 'avons',
  ]);

  function wordMatches(word, keyword) {
    if (word === keyword) return true;
    if (word.length < 4 || keyword.length < 4) return false;
    return levenshtein(word, keyword) <= Math.max(1, Math.floor(keyword.length / 3));
  }

  /** Word-boundary-aware substring match with safe prefixing.
   * - "hi" (short term) must NOT match "his"  → no continuation allowed
   * - "skill" (len>=4) SHOULD match "skills" → prefix continuation allowed */
  function containsTerm(q, term) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const continuation = term.length >= 4 ? '[a-zà-ÿ]*' : '';
    try {
      return new RegExp(`(^|[^a-z0-9à-ÿ])${escaped}${continuation}(?=[^a-z0-9à-ÿ]|$)`, 'i').test(q);
    } catch (e) {
      return q.includes(term);
    }
  }

  function scoreTopic(message, keywords) {
    const lower = message.toLowerCase();
    const words = lower.split(/\s+/).filter((w) => w.length > 2 && !STOPWORDS.has(w));
    let score = 0;
    for (const kw of keywords) {
      if (lower.includes(kw)) { score += 3; continue; }
      const kwWords = kw.split(/\s+/).filter((w) => w.length > 2 && !STOPWORDS.has(w));
      for (const word of words) {
        if (kwWords.some((k) => wordMatches(word, k))) { score += 1; break; }
      }
    }
    return score;
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function linkify(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    return escapeHtml(text)
      .replace(/https?:\/\/[^\s<]+/g, (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`)
      .replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, (email) => `<a href="mailto:${email}">${email}</a>`);
  }

  /* ------------------------------------------------------------
     Engine
     ------------------------------------------------------------ */
  class UniversalChatbot {
    constructor(data, config) {
      this.data = data || {};
      this.config = config || {};
      this.labels = Object.assign(
        {
          headerTitle: 'Chatbot',
          headerSub: '',
          placeholder: 'Type a message...',
          openLabel: 'Open chat',
          closeLabel: 'Close chat',
          welcome: 'Hello! How can I help you?',
          thinking: ['Thinking...', 'Let me check...', 'One sec...', 'Hmm, good question...'],
          defaultResponse: "I don't have an answer for that yet. Try a suggestion below or type 'help'.",
        },
        this.data.labels || {},
      );
      this.suggestions = this.data.suggestions || [];
      this.knowledge = this.data.knowledge || {};
      this.interactions = this.data.interactions || {};
      this.storageKey = this.config.storageKey || 'universal-chat-open';
      this.sessionId = this.getSessionId();
      this.history = [];
    }

    getSessionId() {
      try {
        let id = localStorage.getItem('universal-chat-session');
        if (!id) {
          id = Math.random().toString(36).substr(2, 9);
          localStorage.setItem('universal-chat-session', id);
        }
        return id;
      } catch (e) { return Math.random().toString(36).substr(2, 9); }
    }

    /* ---------------- DOM / widget ---------------- */

    mount() {
      if (document.getElementById('uchat-root')) return;
      const cfg = this.config;

      const root = document.createElement('div');
      root.id = 'uchat-root';
      root.className = 'uchat ' + (cfg.themeClass || 'uchat-theme-default');
      root.setAttribute('data-position', cfg.position || 'bottom-right');

      const toggler = document.createElement('button');
      toggler.className = 'uchat-toggler';
      toggler.setAttribute('aria-label', this.labels.openLabel);
      toggler.innerHTML =
        '<span class="uchat-toggler-icon-open">' + (cfg.iconOpen || '💬') + '</span>' +
        '<span class="uchat-toggler-icon-close">' + (cfg.iconClose || '✕') + '</span>';

      const windowEl = document.createElement('div');
      windowEl.className = 'uchat-window';

      const header = document.createElement('div');
      header.className = 'uchat-header';
      header.innerHTML =
        '<div class="uchat-header-info">' +
        (cfg.avatarHtml || '<span class="uchat-avatar">🤖</span>') +
        '<div class="uchat-header-text">' +
        '<span class="uchat-title">' + escapeHtml(this.labels.headerTitle) + '</span>' +
        (this.labels.headerSub ? '<span class="uchat-sub">' + escapeHtml(this.labels.headerSub) + '</span>' : '') +
        '</div></div>' +
        '<button class="uchat-close" aria-label="' + this.labels.closeLabel + '">✕</button>';

      const body = document.createElement('div');
      body.className = 'uchat-body';

      const messages = document.createElement('div');
      messages.className = 'uchat-messages';
      body.appendChild(messages);

      const suggestionsWrap = document.createElement('div');
      suggestionsWrap.className = 'uchat-suggestions';
      body.appendChild(suggestionsWrap);

      const footer = document.createElement('div');
      footer.className = 'uchat-footer';
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'uchat-input';
      input.placeholder = this.labels.placeholder;
      input.autocomplete = 'off';
      const send = document.createElement('button');
      send.className = 'uchat-send';
      send.setAttribute('aria-label', 'Send');
      send.innerHTML = cfg.sendIcon || '➤';
      footer.appendChild(input);
      footer.appendChild(send);

      windowEl.appendChild(header);
      windowEl.appendChild(body);
      windowEl.appendChild(footer);

      root.appendChild(toggler);
      root.appendChild(windowEl);
      document.body.appendChild(root);

      this.el = {
        root, toggler, windowEl, header, body, messages, suggestionsWrap, footer, input, send,
      };
      this.bindEvents();
      this.addMessage(this.labels.welcome, 'bot');
      this.toggleSuggestions(true);
      this.restoreOpenState();
    }

    bindEvents() {
      const that = this;
      this.el.toggler.addEventListener('click', () => this.toggleOpen());
      const closeBtn = this.el.header.querySelector('.uchat-close');
      if (closeBtn) closeBtn.addEventListener('click', () => this.toggleOpen());
      this.el.send.addEventListener('click', () => this.handleSend());
      this.el.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.handleSend(); }
      });
      this.el.input.addEventListener('input', () => {
        this.el.input.style.height = 'auto';
        this.el.input.style.height = (this.el.input.scrollHeight) + 'px';
      });
    }

    toggleOpen() {
      const open = !this.el.root.classList.contains('uchat-open');
      this.el.root.classList.toggle('uchat-open', open);
      this.el.toggler.setAttribute('aria-expanded', String(open));
      try { localStorage.setItem(this.storageKey, open ? '1' : '0'); } catch (e) {}
      if (open) { this.el.input.focus(); this.toggleSuggestions(this.messagesEmpty()); }
    }

    restoreOpenState() {
      try {
        if (localStorage.getItem(this.storageKey) === '1') {
          this.toggleOpen();
        }
      } catch (e) {}
    }

    messagesEmpty() {
      // Chips stay visible until the user has actually sent a message.
      // The welcome bot-message must not count as "engaged".
      return !this.el.messages.querySelector('.user-msg');
    }

    /* ---------------- messages ---------------- */

    addMessage(text, sender) {
      const div = document.createElement('div');
      div.className = 'uchat-msg ' + sender + '-msg';
      if (sender === 'bot') {
        div.innerHTML = '<span class="uchat-msg-avatar">' + (this.config.avatarHtml || '🤖') + '</span><div class="uchat-msg-bubble">' + linkify(text) + '</div>';
      } else {
        div.innerHTML = '<div class="uchat-msg-bubble">' + escapeHtml(text) + '</div>';
      }
      this.el.messages.appendChild(div);
      this.el.messages.scrollTop = this.el.messages.scrollHeight;
      return div;
    }

    addTyping() {
      const div = document.createElement('div');
      div.className = 'uchat-msg bot-msg';
      div.innerHTML = '<span class="uchat-msg-avatar">' + (this.config.avatarHtml || '🤖') + '</span><div class="uchat-msg-bubble"><span class="uchat-typing"><span></span><span></span><span></span></span></div>';
      this.el.messages.appendChild(div);
      this.el.messages.scrollTop = this.el.messages.scrollHeight;
      return div;
    }

    handleSend(overrideText) {
      const text = (overrideText != null ? overrideText : this.el.input.value).trim();
      if (!text) return;
      this.el.input.value = '';
      this.el.input.style.height = 'auto';
      this.addMessage(text, 'user');
      this.toggleSuggestions(false);
      this.record({ type: 'query', query: text });

      const typing = this.addTyping();
      const delay = 700 + Math.floor(Math.random() * 500);
      setTimeout(() => {
        typing.remove();
        const answer = this.respond(text);
        this.addMessage(answer, 'bot');
        this.record({ type: 'response', response: answer });
      }, delay);
    }

    record(entry) {
      this.history.push(Object.assign({ ts: Date.now(), sessionId: this.sessionId }, entry));
      if (this.history.length > 500) this.history = this.history.slice(-250);
    }

    toggleSuggestions(show) {
      if (!this.el.suggestionsWrap) return;
      this.el.suggestionsWrap.style.display = show ? 'flex' : 'none';
      if (show && !this.el.suggestionsWrap.dataset.rendered) {
        this.renderSuggestions();
        this.el.suggestionsWrap.dataset.rendered = '1';
      }
    }

    renderSuggestions() {
      this.el.suggestionsWrap.innerHTML = this.suggestions
        .map((s) => `<button type="button" class="uchat-chip" data-q="${escapeHtml(s.q || s)}">${escapeHtml(s.label || s)}</button>`)
        .join('');
      this.el.suggestionsWrap.querySelectorAll('.uchat-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          const q = chip.getAttribute('data-q');
          this.handleSend(q);
          this.el.input.focus();
        });
      });
    }

    /* ---------------- response logic ---------------- */

    respond(query) {
      const q = query.toLowerCase().trim();

      // 1. interaction patterns (greeting, thanks, identity, help, farewell, ok)
      const patternHit = this.matchInteraction(q);
      if (patternHit !== null) return patternHit;

      // 2. knowledge-base intents — ordered list, first match wins
      const knowledge = this.knowledge;
      const intents = knowledge.intents || [];
      const intentResponse = matchIntents(q, intents);
      if (intentResponse) return intentResponse;

      // 3. fuzzy topic scoring over knowledge.topics
      const topics = knowledge.topics || {};
      let bestKey = null, bestScore = 0;
      for (const key of Object.keys(topics)) {
        const score = scoreTopic(q, (topics[key].keywords || []));
        if (score > bestScore) { bestScore = score; bestKey = key; }
      }
      if (bestKey && bestScore > 0) {
        const topic = topics[bestKey];
        return typeof topic.answer === 'function' ? topic.answer(q, this) : (topic.answer || this.labels.defaultResponse);
      }

      return this.labels.defaultResponse;
    }

    matchInteraction(q) {
      const patterns = this.interactions || {};
      const keys = Object.keys(patterns);
      for (const key of keys) {
        const terms = patterns[key].terms || [];
        if (terms.some((t) => containsTerm(q, t))) {
          const answers = patterns[key].answers || [];
          if (answers.length) return answers[Math.floor(Math.random() * answers.length)];
        }
      }
      return null;
    }
  }

  /* Intent matcher: ordered intents each with terms + answer or function */
  function matchIntents(q, intents) {
    for (const intent of intents) {
      const terms = intent.terms || [];
      if (terms.some((t) => containsTerm(q, t))) {
        if (typeof intent.answer === 'function') return intent.answer(q);
        return intent.answer || null;
      }
    }
    return null;
  }

  /* ---------------- boot ---------------- */

  function boot() {
    const data = global.ChatBotData || {};
    const config = global.ChatBotConfig || {};
    const chat = new UniversalChatbot(data, config);
    chat.mount();
    global.ChatBot = chat;
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', boot);
    } else {
      boot();
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UniversalChatbot, linkify, levenshtein, scoreTopic };
  }
})(window);