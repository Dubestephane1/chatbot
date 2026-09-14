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
    defaultResponse: "I can tell you about any project on this hub — try 'MapleMind', 'Agent Evidence', 'Pomodoro', 'Tetris', or the 'Scratch' games. Or type 'help'."
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
      { terms: ['about the author', 'who made you', 'who created you', 'who is the author', 'about author', 'about stephane', 'who is stephane', 'about you maker'], answer: "Stephane Dube is a Canadian developer and AI enthusiast based in Southeast Asia, specializing in Python, web development, and AI. He built this hub to showcase his projects — AI tools, games, and education apps." },
      { terms: ['contact', 'reach', 'email', 'hire', 'get in touch', 'linkedin', 'github'], answer: "Email Stephane at contact@stephanedube.dev, or find him on LinkedIn (linkedin.com/in/dubestephane) and GitHub (github.com/Dubestephane1). Open to new opportunities." },
      { terms: ['build an ai', 'build ai', 'make an ai', 'create an ai', 'can you build', 'can he build', 'ai agent'], answer: "Yes! He specializes in Python AI agents — he built 'Odin', a custom agent with multi-step reasoning, tool use, planning, and autonomous execution, and works professionally as an AI Agent Operator. He can build custom agents, integrations, and automation workflows." },
      { terms: ['maple mind', 'maplemind', 'maple', 'real estate', 'document'], answer: "MapleMind is a private AI document intelligence platform for real estate and professional firms. 100% local, no cloud — ask plain-language questions about contracts, reports, and policies. Try it: https://maplemind.netlify.app/" },
      { terms: ['agent evidence', 'agentevidence', 'safety review'], answer: "Agent Evidence is an independent safety & governance review service for AI agents — structured risk reports with file:line evidence and a 3-day turnaround. Check it out: https://agentevidence.netlify.app/" },
      { terms: ['nostradamus', 'quatrains', 'prophecies'], answer: "Nostradamus Prophecies lets you explore all 942 quatrains of the famous 16th-century prophet, organized for easy browsing and searching. Visit https://nostradamus.stephanedube.dev" },
      { terms: ['pomodoro'], answer: "The Pomodoro tool is a productivity app that implements the Pomodoro Technique — timed focus sessions with short breaks to help you get more done. Try it at https://pomodoro.stephanedube.dev/" },
      { terms: ['personal website', 'personal site', 'stephanedube', 'stephane dube', 'portfolio', 'portfolio site', 'website'], answer: "The personal website is Stephane Dube's portfolio, showcasing his work as a developer, Python programmer, and AI builder — including an about section, featured projects, and skills. See it at https://stephane.stephanedube.dev" },
      { terms: ['restaurant'], answer: "The Restaurant Template is a fully responsive restaurant website template that includes a built-in chat bot — great as a starting point for any food business site. Preview it at https://restaurant.stephanedube.dev/" },
      { terms: ['multiplication', 'math table', 'multiplication table'], answer: "Multiplication Table is an educational app to practice multiplication and learn the easy way, complete with a scoreboard to beat other students. Perfect for young learners. Try it at https://bellamath.netlify.app/" },
      { terms: ['abacus'], answer: "The Abacus Simulator is an educational tool that recreates the classic manual calculating device, used to teach students arithmetic calculations. Try it at https://abacus.stephanedube.dev/" },
      { terms: ['tic tac toe', 'tictactoe', 'tic tac'], answer: "Tic Tac Toe Game is a classic game for one or two players, with two game modes and ten skins to choose from. Play it at https://tictactoe.stephanedube.dev/" },
      { terms: ['tetris'], answer: "Tetris Game is the classic puzzle game where you rotate and arrange falling blocks to clear lines. Play it at https://tetris.stephanedube.dev/" },
      { terms: ['hangman'], answer: "Kids Hangman is a fun and educational game that helps children practice their vocabulary while playing. Play it at https://hangman.stephanedube.dev/" },
      { terms: ['scratch', 'mit scratch'], answer: "Three M.I.T. Scratch games: 'Add, Subtract, Multiply' (math practice, ages 7-10), 'Guess the Number' (1-100 in 10 tries), and 'Firefly Chase' (guide the firefly, avoid the frozen ball)." },
      { terms: ['nexus hub', 'this hub', 'this site', 'odin hub', 'hub'], answer: "Welcome to the Odin Nexus Hub — a curated collection of projects, tools, and games built by Stephane Dube. You can search the cards above, or ask me about any project here." }
    ],
    topics: {
      ai: {
        keywords: ['ai', 'a.i', 'artificial intelligence', 'intelligence'],
        answer: "Two AI projects: MapleMind (private local AI document intelligence) and Agent Evidence (safety & governance reviews for AI agents). Ask me about either!"
      },
      games: {
        keywords: ['games', 'game'],
        answer: "Games: Tic Tac Toe, Tetris, and Kids Hangman, plus three M.I.T. Scratch games: Add/Subtract/Multiply, Guess the Number, and Firefly Chase."
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