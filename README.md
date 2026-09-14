# UniversalChatbot

One embeddable chatbot engine that adapts to any website — different look, different knowledge, same engine.

## Files

| File | Purpose |
|------|---------|
| `chatbot.js` | The engine — injects the widget, routes queries (intents + fuzzy scoring), linkify, typing indicator, suggestions, session memory |
| `chatbot.css` | Base widget layout + default theme (CSS variables) |
| `data/<site>.js` | Per-site knowledge: labels, suggestions, interactions, intents, topics |
| `theme/<site>.css` | Per-site skin: only overrides `--uchat-*` variables |

## Embed on any site

```html
<link rel="stylesheet" href="https://chatbot.stephanedube.dev/chatbot.css">
<link rel="stylesheet" href="https://chatbot.stephanedube.dev/theme/<site>.css">
<script src="https://chatbot.stephanedube.dev/data/<site>.js"></script>
<script src="https://chatbot.stephanedube.dev/chatbot.js"></script>
```

No markup needed — the engine mounts its own widget into `<body>`.

## Adding a new site

1. Copy `data/_template.js` → `data/<site>.js`, fill in labels/suggestions/interactions/knowledge.
2. Copy `theme/_template.css` → `theme/<site>.css`, override the `--uchat-*` variables.
3. Embed with the four tags above.

## Data model

- `labels` — UI strings (header title, placeholder, welcome, thinking, default response)
- `suggestions` — suggestion chips `[{label, q}]`
- `interactions` — conversational patterns `{ terms: [], answers: [] }` (greeting, thanks, help…)
- `knowledge.intents` — ordered intents `{ terms: [], answer: string|fn }` (most specific first)
- `knowledge.topics` — fuzzy-scored topics `{ keywords: [], answer: string|fn }`

## Notes

- The engine runs fully client-side; no API key, no backend.
- To upgrade to a real LLM later: replace `respond()` inside `chatbot.js` with a single API call using a per-site system prompt. Nothing on the embedded sites changes.
- Themes demo: see `demo/index.html` (open locally or on the deployed site).