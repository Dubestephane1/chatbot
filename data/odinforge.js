/**
 * Chatbot data — odinforge (Nexus Hub / project showcase)
 * Load this BEFORE chatbot.js to set window.ChatBotData and window.ChatBotConfig.
 */
window.ChatBotData = {
  labels: {
    headerTitle: 'Nexus Assistant',
    headerSub: 'OdinForge hub',
    placeholder: 'Enter a message...',
    welcome: "Hi there! I'm the Nexus Hub assistant. Ask me about any project here, like MapleMind, the games, or the author. Type 'help' to see what I can do.",
    thinking: ['Thinking...', 'Let me check...', 'One sec...', "Hmm, good question..."],
    defaultResponse: "I don't know about that yet, but I can tell you about any project on this hub. Try 'MapleMind', 'Agent Evidence', 'Pomodoro', 'Tetris', or the 'Scratch' games — or type 'help'. If you'd like, you can ask the author directly at dubestephane@protonmail.com"
  },
  suggestions: [
    { label: 'What is MapleMind?', q: 'What is MapleMind?' },
    { label: 'Tell me about the Scratch games', q: 'Tell me about the Scratch games' },
    { label: 'Who are you?', q: 'Who are you?' },
  ],
  interactions: {
    greeting: {
      terms: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy'],
      answers: [
        "Hi there! I'm the Nexus Hub assistant. Ask me about any project here, like MapleMind, the games, or the author.",
        "Hello! I can tell you about every project, tool, and game on this hub. What would you like to know?",
        "Hey! Ask me about MapleMind, Agent Evidence, the games, or the author — or tap a suggestion below."
      ]
    },
    goodbye: {
      terms: ['bye', 'goodbye', 'see you', 'see ya', 'farewell', 'good night'],
      answers: [
        'Goodbye! Thanks for visiting the Odin Nexus Hub. Come back anytime!'
      ]
    },
    thanks: {
      terms: ['thanks', 'thank you', 'thx'],
      answers: [
        "You're welcome! Happy to help. Ask me about any project on this hub."
      ]
    },
    whoareyou: {
      terms: ['who are you', 'what are you', 'who are u', 'your name', 'what is your name'],
      answers: [
        "I'm the Nexus Hub assistant, a simple chatbot built by Stephane Dube. I can tell you about every project, tool, and game in this hub."
      ]
    },
    help: {
      terms: ['help', 'what can you do', 'commands', 'what can i ask', 'assist', 'capabilities'],
      answers: [
        "I can tell you about any project on this hub. Try asking about 'MapleMind', 'Agent Evidence', 'Pomodoro', 'Nostradamus', 'Tetris', or the 'Scratch' games. I also answer 'hello', 'who are you', and 'about the author'."
      ]
    }
  },
  knowledge: {
    intents: [
      { terms: ['about the author', 'who made you', 'who created you', 'who is the author', 'about author', 'about stephane', 'who is stephane', 'about you maker'], answer: "Stephane Dube is a Canadian developer and AI enthusiast based in Southeast Asia, specializing in Python, web development, and integrating AI into practical applications. He built the Odin Nexus Hub to showcase his projects, including AI tools, games, and education apps." },
      { terms: ['contact', 'reach', 'email', 'hire', 'get in touch', 'linkedin', 'github'], answer: "You can reach Stephane by email at dubestephane@protonmail.com, or message him on LinkedIn at https://www.linkedin.com/in/dubestephane/ . He's also on GitHub at https://github.com/Dubestephane1 — always open to new opportunities and collaborations!" },
      { terms: ['build an ai', 'build ai', 'make an ai', 'create an ai', 'can you build', 'can he build', 'ai agent'], answer: "Yes! Stephane can definitely build AI agents. He specializes in Python and AI agent development, and built 'Odin', a custom AI agent from scratch that handles multi-step reasoning, tool use, planning, and autonomous task execution. He also works professionally as an AI Agent Operator. He can build custom agents, integrations, and automation workflows for you." },
      { terms: ['maple mind', 'maplemind', 'maple', 'real estate', 'document'], answer: "MapleMind is a private AI document intelligence platform built for real estate offices and professional firms. It runs 100% locally with no cloud dependency, indexing contracts, inspection reports, and policies so you can find anything in seconds by asking in plain language. Try it at https://maplemind.netlify.app/" },
      { terms: ['agent evidence', 'agentevidence', 'safety review'], answer: "Agent Evidence is an independent safety and governance review service for AI agents. It provides structured risk reports with file:line evidence, prioritized recommendations, and a 3-day turnaround — built to help teams close enterprise deals faster. Check it out at https://agentevidence.netlify.app/" },
      { terms: ['nostradamus', 'quatrains', 'prophecies'], answer: "Nostradamus Prophecies lets you explore all 942 quatrains of the famous 16th-century prophet, organized for easy browsing and searching. Visit https://nostradamus.stephanedube.dev" },
      { terms: ['pomodoro'], answer: "The Pomodoro tool is a productivity app that implements the Pomodoro Technique — timed focus sessions with short breaks to help you get more done. Try it at https://pomodoro.stephanedube.dev/" },
      { terms: ['personal website', 'personal site', 'stephanedube', 'stephane dube', 'portfolio', 'portfolio site', 'website'], answer: "The personal website is Stephane Dube's portfolio, showcasing his work as a developer, Python programmer, and AI builder — including an about section, featured projects, and skills. See it at https://stephane.stephanedube.dev" },
      { terms: ['restaurant'], answer: "The Restaurant Template is a fully responsive restaurant website template that includes a built-in chat bot — great as a starting point for any food business site. Preview it at https://restaurant.stephanedube.dev/" },
      { terms: ['multiplication', 'math table', 'multiplication table'], answer: "Multiplication Table is an educational app to practice multiplication and learn the easy way, complete with a scoreboard to beat other students. Perfect for young learners. Try it at https://bellamath.netlify.app/" },
      { terms: ['abacus'], answer: "The Abacus Simulator is an educational tool that recreates the classic manual calculating device, used to teach students arithmetic calculations. Try it at https://abacus.stephanedube.dev/" },
      { terms: ['tic tac toe', 'tictactoe', 'tic tac'], answer: "Tic Tac Toe Game is a classic game for one or two players, with two game modes and ten skins to choose from. Play it at https://tictactoe.stephanedube.dev/" },
      { terms: ['tetris'], answer: "Tetris Game is the classic puzzle game where you rotate and arrange falling blocks to clear lines. Play it at https://tetris.stephanedube.dev/" },
      { terms: ['hangman'], answer: "Kids Hangman is a fun and educational game that helps children practice their vocabulary while playing. Play it at https://hangman.stephanedube.dev/" },
      { terms: ['scratch', 'mit scratch'], answer: "There are three M.I.T. Scratch games on this hub: 'Add, Subtract, Multiply' for practicing math (great for 7 to 10 year olds), 'Guess the Number' (guess between 1 and 100 in 10 tries or less), and 'Firefly Chase' (guide the firefly with your mouse and avoid the frozen ball)." },
      { terms: ['nexus hub', 'this hub', 'this site', 'odin hub', 'hub'], answer: "Welcome to the Odin Nexus Hub — a curated collection of projects, tools, and games built by Stephane Dube. You can search the cards above, or ask me about any project here." }
    ],
    topics: {
      ai: {
        keywords: ['ai', 'a.i', 'artificial intelligence', 'intelligence'],
        answer: "The AI section features two projects: MapleMind, a private local AI document intelligence platform for real estate and professional firms, and Agent Evidence, a safety and governance review service for AI agents. Ask me about either for more detail!"
      },
      games: {
        keywords: ['games', 'game'],
        answer: "We have several games! Tic Tac Toe, Tetris, and Kids Hangman in the Games section, plus three M.I.T. Scratch games: Add/Subtract/Multiply, Guess the Number, and Firefly Chase."
      },
      tools: {
        keywords: ['tools', 'tool', 'websites'],
        answer: "The Websites & Tools section includes the personal portfolio, Nostradamus Prophecies, the Pomodoro timer, and the Restaurant Template."
      },
      education: {
        keywords: ['education', 'learning', 'learn', 'school', 'students'],
        answer: "The Education section has two great tools: Multiplication Table for practicing math (with a scoreboard to beat other students) and the Abacus Simulator for learning arithmetic. There are also M.I.T. Scratch games perfect for young learners."
      },
      reference: {
        keywords: ['reference', 'prophets', 'history', 'historical'],
        answer: "In the Reference section you'll find Nostradamus Prophecies, which lets you explore all 942 quatrains of the famous 16th-century prophet."
      }
    }
  }
};

window.ChatBotConfig = {
  storageKey: 'nexus-hub-chat-open',
  position: 'bottom-right',
  themeClass: 'uchat-theme-odinforge',
  avatarHtml: '<span class="uchat-avatar">🤖</span>',
  iconOpen: '<span class="material-symbols-outlined">mode_comment</span>',
  iconClose: '<span class="material-symbols-outlined">close</span>',
  sendIcon: '<span class="material-symbols-outlined">send</span>',
};