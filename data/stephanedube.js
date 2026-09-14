/**
 * Chatbot data — stephanedube (portfolio / recruiting site)
 * Load this BEFORE chatbot.js to set window.ChatBotData and window.ChatBotConfig.
 */
window.ChatBotData = {
  labels: {
    headerTitle: 'Odin Assistant',
    headerSub: 'Stephane\'s AI demo',
    placeholder: 'Ask about Stephane...',
    welcome: "Hello! I'm Odin, Stephane's AI assistant. Ask me about his AI experience, certifications, projects, or how to hire him — or tap a suggestion below.",
    thinking: ['Thinking...', 'Let me check...', 'One sec...', 'Hmm, good question...'],
    defaultResponse: "I can help with: skills, AI experience, certifications, projects, availability, rates, and contact. Tap a suggestion or try 'help'."
  },
  suggestions: [
    { label: 'Skills', q: 'What are Stephane\'s skills?' },
    { label: 'AI Experience', q: 'What is his experience with AI?' },
    { label: 'Certifications', q: 'Tell me about his certifications' },
    { label: 'Projects', q: 'What has he built?' },
    { label: 'Availability', q: 'Is he available for work?' },
    { label: 'Rates', q: 'What are his rates?' },
  ],
  interactions: {
    greeting: {
      terms: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'howdy'],
      answers: [
        "Hello! I'm Odin, Stephane's AI assistant. Ask me about his AI experience, certifications, projects, or how to hire him.",
        "Hi there! I can tell you about Stephane's skills, rates, or availability. What would you like to know?",
        "Hey! If you're recruiting, ask me about his experience, certifications, or how to reach him — or tap a suggestion below."
      ]
    },
    thanks: {
      terms: ['thanks', 'thank you', 'thx', 'appreciate', 'merci'],
      answers: [
        "You're very welcome! Anything else you'd like to know?",
        'Happy to help! Ask me about his projects or certifications anytime.',
        "Anytime! Is there anything else I can tell you?"
      ]
    },
    ok: {
      terms: ['ok', 'okay', 'great', 'nice', 'cool', 'awesome', 'got it'],
      answers: [
        'Sounds good! Feel free to ask anything else.',
        "Got it! I'm here if you have more questions.",
        "Alright! Let me know if there's anything else."
      ]
    },
    identity: {
      terms: ['who are you', 'what are you', 'are you ai', 'are you a bot', 'your name', 'who is odin'],
      answers: [
        "I'm Odin, Stephane's AI assistant — a lightweight in-browser demo of the agentic work he does. Ask me about his skills, experience, or projects.",
        "I'm Odin — Stephane's portfolio assistant. I answer questions about his background and work, entirely in the browser."
      ]
    },
    farewell: {
      terms: ['bye', 'goodbye', 'see you', 'farewell', 'later', 'au revoir'],
      answers: [
        "Thanks for visiting! Feel free to reach out to Stephane anytime.",
        "Goodbye! Explore the portfolio and don't hesitate to get in touch."
      ]
    },
    help: {
      terms: ['help', 'assist', 'what can you do', 'capabilities', 'commands'],
      answers: [
        "I can tell you about his skills, AI experience, certifications, projects, availability, rates, and contact. Try a suggestion or ask anything.",
        "Ask about Stephane's background, certifications, projects, or how to reach him."
      ]
    }
  },
  knowledge: {
    intents: [
      { terms: ['who is stephane', 'who is he', 'about him', 'about stephane', 'tell me about stephane', 'about the developer', 'about the owner'], answer: function () {
        const p = window.ChatBotData.person;
        return `${p.name} is a ${p.nationality.toLowerCase()} ${p.role.toLowerCase()} based in ${p.location}. ${p.work} He has ${p.experience}, and his focus is ${p.focus}. ${p.tagline}.`;
      } },
      { terms: ['resume', 'resumé', 'cv', 'curriculum', 'download resume', 'printable'], answer: function () {
        const p = window.ChatBotData.person;
        return `You can grab ${p.name}'s résumé right here on the site:\n\n• ${p.resume} (open in a new tab)\n\nOr reach him directly at ${p.contactEmail}`;
      } },
      { terms: ['hire', 'hiring', 'rate', 'rates', 'cost', 'price', 'pricing', 'freelance', 'consult', 'consulting', 'contract', 'recruit', 'opportunit', 'available', 'open to work', 'work with him', 'work with stephane'], answer: function () {
        const p = window.ChatBotData.person;
        return `${p.hiring}\n\nAvailability: ${p.availability}\n\nRates: ${p.rates}`;
      } },
      { terms: ['certif', 'certificate', 'certification', 'credly', 'badge', 'harvard', 'cs50', 'ibm', 'coursera', 'google skills', 'training', 'education', 'studied', 'course'], answer: function () {
        const p = window.ChatBotData.person;
        return `${p.name} holds:\n\n${p.certificates.map((c) => `• ${c}`).join('\n')}\n\nAll verified badges are on Credly: ${p.credly}`;
      } },
      { terms: ['invisible', 'who does he work for', 'what company', 'company', 'employer', 'where does he work', 'current job', 'current role', 'what does he do for work'], answer: function () {
        const p = window.ChatBotData.person;
        return `${p.work} ${p.workDetail} He's evaluated and refined LLM responses against strict technical specifications for a leading AI provider.`;
      } },
      { terms: ['experience', 'career', 'background', 'timeline', 'jobs', 'job', 'worked', 'work history', 'history'], answer: function () {
        const p = window.ChatBotData.person;
        return `Career timeline:\n\n` +
          `• AI Agent Operator — Invisible Technologies (remote), May 2025–present\n` +
          `• AI Developer & Full-Stack Engineer — OdinForge (founder), Jan 2015–present\n` +
          `• Python & ESL Tutor — OMG Language Center (Thailand), Feb 2021–present\n` +
          `• Digital Marketing & Dive Instructor — Dolphin Divers (Thailand), 2018–2020\n` +
          `• Automobile Sales — Mercedes-Benz, Ford, Audi (Canada), 2004–2014\n\n` +
          `20 years of client-facing work, now focused on AI agents and automation.`;
      } },
      { terms: ['skill', 'expertise', 'technolog', 'stack', 'languages', 'language', 'tools', 'knows', 'know', 'what does he know', 'capable', 'program', 'code', 'write code'], answer: function () {
        const s = window.ChatBotData.person.skills;
        return `Core skills:\n\n` +
          `• AI & LLM: ${s.ai}\n` +
          `• Programming: ${s.programming}\n` +
          `• Tools: ${s.tools}\n` +
          `• Data & Automation: ${s.data}`;
      } },
      { terms: ['project', 'portfolio', 'built', 'made', 'odinforge', 'maplemind', 'agent evidence', 'what has he built', 'work he has done', 'what is odin', 'odin agent', 'the agent', 'ai agent'], answer: function () {
        const p = window.ChatBotData.person;
        let out = `What ${p.name} has built:\n\n`;
        p.projects.forEach((pr, i) => { out += `${i + 1}. ${pr.name} — ${pr.desc}\n`; });
        out += `\nFull collection: https://odinforge.stephanedube.dev`;
        return out;
      } },
      { terms: ['location', 'where is he', 'where is stephane', 'based', 'live', 'lives', 'country', 'timezone', 'remote'], answer: function () {
        const p = window.ChatBotData.person;
        return `${p.name} is a ${p.nationality.toLowerCase()} ${p.role.toLowerCase()} based in ${p.location}. He works remotely and is comfortable across time zones.`;
      } },
      { terms: ['age', 'how old'], answer: function () {
        return `${window.ChatBotData.person.name} is an experienced developer bringing decades of practical, client-facing work to the field.`;
      } },
      { terms: ['contact', 'email', 'reach', 'get in touch', 'message', 'talk to', 'connect', 'mail'], answer: function () {
        const p = window.ChatBotData.person;
        return `Reach ${p.name} at:\n\n` +
          `Email: ${p.contactEmail}\n` +
          `LinkedIn: ${p.links.linkedin}\n` +
          `GitHub: ${p.links.github}\n` +
          `YouTube: ${p.links.youtube}\n` +
          `Credly: ${p.links.credly}\n\n` +
          `${p.availability}`;
      } },
      { terms: ['github', 'linkedin', 'twitter', 'social', 'x profile', 'x.com', 'youtube', 'white hair', 'channel', 'video', 'videos'], answer: function () {
        const p = window.ChatBotData.person;
        return `Profiles:\n` +
          `• YouTube — ${p.links.youtube}\n` +
          `• GitHub — ${p.links.github}\n` +
          `• LinkedIn — ${p.links.linkedin}\n` +
          `• Credly — ${p.links.credly}\n\n` +
          `Or email: ${p.contactEmail}`;
      } }
    ],
    topics: {
      python: {
        keywords: ['python', 'flask'],
        answer: 'Yes — Python is his core language. He builds AI agents, automation scripts, and data pipelines in it, and his Odin agent is written from scratch in Python.'
      },
      javascript: {
        keywords: ['javascript', 'js', 'node'],
        answer: "Yes — JavaScript is a daily tool: vanilla ES6+, Node.js, and DOM work. This portfolio's chatbot itself runs on vanilla JavaScript."
      },
      php: {
        keywords: ['php'],
        answer: 'Yes — PHP from his web development years, including WordPress client work.'
      },
      sql: {
        keywords: ['sql', 'mysql', 'database'],
        answer: 'Yes — SQL/MySQL for web apps and data pipelines.'
      },
      htmlcss: {
        keywords: ['html', 'css', 'tailwind', 'bootstrap'],
        answer: 'Yes — HTML5 and CSS3 are second nature after 10+ years of web development, plus Tailwind and Bootstrap.'
      },
      docker: {
        keywords: ['docker', 'kubernetes', 'k8s', 'devops'],
        answer: 'In progress — Docker and Kubernetes are part of his current IBM DevOps program.'
      },
      n8n: {
        keywords: ['n8n', 'automation', 'workflow'],
        answer: 'Yes — he uses n8n for workflow automation.'
      },
      ollama: {
        keywords: ['ollama', 'open webui', 'local llm'],
        answer: 'Yes — local LLM deployment with Ollama and Open WebUI is part of his AI tooling.'
      },
      react: {
        keywords: ['react', 'typescript', 'django'],
        answer: "Not in his current stack — his front-end work is vanilla JS with Tailwind and Bootstrap, and his Python web work focuses on Flask."
      }
    }
  }
};

// Person facts shared by the describers above
window.ChatBotData.person = {
  name: 'Stephane Dube',
  role: 'AI Engineer & Full-Stack Developer',
  tagline: 'AI Engineer • Full-Stack Developer • Automation',
  nationality: 'Canadian',
  location: 'Thailand (Southeast Asia)',
  remote: true,
  languages: ['English (fluent)', 'French (fluent)'],
  experience: '10+ years building software and automating workflows',
  focus: 'AI agents, LLM fine-tuning (SFT/RLHF), web applications, and automation',
  work: 'AI Agent Operator at Invisible Technologies (San Francisco, remote).',
  workDetail: 'Creates instruction-aligned training data (SFT), ranks/preferences model outputs (RLHF), and evaluates LLM responses to strict specs — with a 100% accuracy record on time-sensitive workflows.',
  skills: {
    ai: 'SFT, RLHF, prompt engineering, AI agent orchestration, local LLM deployment (Ollama, Open WebUI), Gemini agents & CLI',
    programming: 'Python, JavaScript, PHP, SQL/MySQL, HTML5, CSS3, PineScript',
    tools: 'Git/GitHub, Cloudflare Pages, n8n, WordPress, Bootstrap, Tailwind, Google Workspace AI, Docker/K8s (studying)',
    data: 'Web scraping, API integration, data pipelines, analytics reporting (Google Analytics)'
  },
  projects: [
    { name: 'Odin', desc: 'A custom autonomous AI agent built from scratch in Python — multi-step reasoning, tool use, planning, and memory.' },
    { name: 'OdinForge', desc: 'A collection of working apps built from scratch (Pomodoro, Tic Tac Toe, Abacus, Tetris, Notion-style app).' },
    { name: 'MapleMind', desc: 'A private local AI document intelligence platform for real estate and professional firms.' },
    { name: 'Agent Evidence', desc: 'An AI agent safety & governance review service delivering structured risk reports with file:line evidence.' }
  ],
  certificates: [
    'CS50 Introduction to AI — Harvard (2023)',
    'CS50 Programming with Python — Harvard (2022)',
    'Google IT Support Professional — Coursera (2026)',
    'Google IT Automation with Python Professional Certificate — Coursera (2026)',
    'Microsoft IT Support Specialist Professional Certificate — Microsoft (2026)',
    'IBM DevOps & Software Engineering — IBM/Coursera (all 15 courses complete)',
    'Preparing for Google Cloud Certification: Cloud Engineer — Google Cloud/Coursera (all 6 courses complete)',
    '60+ Google skill badges (Gemini, LLMs, Generative AI, Responsible AI)'
  ],
  certSummary: 'Harvard CS50 (AI + Python), Google IT Support, Google IT Automation with Python, Microsoft IT Support, and an IBM DevOps & Software Engineering certificate (all courses complete) — plus 60+ Google skill badges and 41 course-level certificates inside those programs.',
  googleBadges: {
    count: 60,
    platform: 'Google Skills',
    focus: 'Gemini across Workspace, Generative AI, LLMs, Responsible AI, and the SDLC',
    url: 'https://www.skills.google/public_profiles/04a83f8f-3acf-40f5-9893-2fe1a235a5d3'
  },
  credly: 'https://www.credly.com/users/stephanedube',
  contactEmail: 'stephane@stephanedube.dev',
  links: {
    github: 'https://github.com/Dubestephane1',
    linkedin: 'https://www.linkedin.com/in/dubestephane/',
    credly: 'https://www.credly.com/users/stephanedube',
    youtube: 'https://www.youtube.com/channel/UCM1Jn1OxNLAX1_63gok7UQA'
  },
  resume: 'Stephane_Dube.html',
  availability: 'Open to new opportunities and collaborations — full-time, freelance, or contract, remote-first.',
  hiring: "For hiring, the fastest path is email: stephane@stephanedube.dev. His résumé is one click away (the Resume button in the menu), and all verified badges are on Credly.",
  rates: 'Rates are tailored to each project\'s scope — reach out at stephane@stephanedube.dev for a quote.'
};

window.ChatBotConfig = {
  storageKey: 'odin-assistant-chat-open',
  position: 'bottom-right',
  themeClass: 'uchat-theme-stephanedube',
  avatarHtml: '<span class="uchat-avatar">🤖</span>',
  iconOpen: '<i class="fas fa-comment-dots"></i>',
  sendIcon: '<i class="fa-solid fa-paper-plane"></i>',
};