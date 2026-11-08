# Draw & Recall

A local browser game built with React, TypeScript, and Vite. No backend or database is required.

## Requirements

- Node.js 20.19+ or 22.12+ (the current LTS release is recommended).
- npm, which is installed with Node.js.

## Run in development mode

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`. Open it in your browser.

## Type checking and production build

```bash
npm run typecheck
npm run build
npm run preview
```

The production build will be created in the `dist/` directory. You can deploy that directory to any static host that supports serving a single-page application. A backend is not required.

## Rules in this version

1. The game randomly selects 20 distinct words from the built-in word bank.
2. The player has exactly 4 seconds for each word. The drawing is saved automatically when the game advances to the next word.
3. After the drawing phase, the game randomly selects 10 of the 20 drawings.
4. All 10 drawings are displayed on one screen, with an answer field under each card.
5. Answers are checked without case sensitivity and without whitespace or punctuation. Words of 1–3 characters require an exact match; words of 4–7 characters allow one edit; words of 8 or more characters allow two edits.
6. The results screen shows the total score and a review of every card.

The word bank is stored in `src/data/words.json`. Game settings are stored in `src/game/config.ts`.