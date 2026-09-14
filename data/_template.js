/**
 * Chatbot data template — copy this to data/<site>.js and fill in.
 * Load BEFORE chatbot.js to set window.ChatBotData and window.ChatBotConfig.
 */
window.ChatBotData = {
  labels: {
    headerTitle: 'Assistant',
    headerSub: '',
    placeholder: 'Type a message...',
    welcome: 'Hello! How can I help you?',
    thinking: ['Thinking...', 'Let me check...', 'One sec...'],
    defaultResponse: "I don't have an answer for that yet. Try a suggestion below or type 'help'.",
  },
  suggestions: [
    { label: 'Help', q: 'help' },
  ],
  interactions: {
    greeting: {
      terms: ['hello', 'hi', 'hey'],
      answers: ['Hello! How can I help you today?'],
    },
    help: {
      terms: ['help', 'what can you do'],
      answers: ["I can answer questions about this site. Try a suggestion below."],
    },
  },
  knowledge: {
    intents: [
      { terms: ['example', 'sample'], answer: 'This is the answer to a specific example question.' },
    ],
    topics: {
      sample: {
        keywords: ['topic', 'keyword'],
        answer: 'This is a fuzzy-matched answer for the sample topic.',
      },
    },
  },
};

window.ChatBotConfig = {
  storageKey: 'uchs-site-chat-open',
  position: 'bottom-right',
  themeClass: 'uchat-theme-default',
  avatarHtml: '<span class="uchat-avatar">🤖</span>',
};