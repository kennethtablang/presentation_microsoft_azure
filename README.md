# AI-901 · AI Concepts & AI Applications on Azure

A web slide deck (Next.js 16) for the module discussion in `../materials`. It has 98 slides covering both parts, all 14 modules, the examples, activities, both quizzes and both glossaries.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
# or
npm run build && npm start
```

## Presenting

| Key | Action |
| --- | --- |
| → Space PgDn | Next slide (reveals hidden answers first) |
| ← PgUp | Previous slide |
| Home / End | First / last slide |
| F | Full screen |
| P | Presenter view: opens `/presenter` in a new window and stays in sync |
| N | Speaker notes drawer |
| S | Slide list sidebar, with search |
| G | Overview grid |
| T | Dark / light mode |
| R | Reveal / hide answers |
| B | Blank the screen |
| E | Practice test & flashcards (new tab) |
| ? | Shortcut help |

- **Presenter view** shows the current slide, the next slide, a timer, the clock, and the notes. You can change the notes size. Both windows can control the deck.
- **Notes** for each slide have a *Talk track*, *Ask the class* prompts with expected answers, and *Go deeper* points.
- The URL hash (`#12`) tracks the slide, so a refresh or a shared link opens the same slide.

## Review center: practice test & flashcards

Open it with **E**, the graduation-cap toolbar button, or the "Practice test and flashcards" slide near the end. You can also go straight to `/review/test` or `/review/flashcards`.

- **Practice test** uses the 200-item `AI901_Practice_Exam` (9 domains, 29 "select two" items).
  - Choose 1–200 questions and which domains.
  - Practice mode explains every answer as you go; exam mode scores you at the end.
  - Every start or retake draws a new random set, and the answer choices are reshuffled too.
  - Results show your score against a 70% target, a per-domain breakdown, a review of missed questions, and a "Retry missed" option.
- **Flashcards** draw from the glossary terms (52) and/or exam questions (200).
  - Choose how many cards; flip with Space; grade with 1 ("Still learning") or 2 ("Got it").
  - Drill the still-learning cards in another round.
  - Every start or restart reshuffles the deck.

The question bank lives in `src/content/practice-exam.json` (parsed from the docx); the logic is in `src/lib/review.ts`.

## Editing content

- `src/content/part1.ts`, `src/content/part2.ts`: the slides for each part
- `src/content/slides.ts`: intro, quizzes, glossaries, closing, and the final slide order
- `src/content/extraNotes.ts`: extra discussion notes, merged into slides by id
- `src/lib/types.ts`: the block types you can use (cards, table, flow, quiz, bars, code, …)

## Design

The liquid-glass look comes from `src/app/globals.css`: backdrop blur + saturation, a specular rim highlight, and a sheen that follows the pointer over animated color fields. Apple devices use SF Pro (via `-apple-system`); other systems fall back to Inter.
