import bank from "@/content/dae-reviewer.json";
import { daeGlossary } from "@/content/comptia/glossary";
import { slidesA } from "@/content/comptia/slides-a";
import { slidesB } from "@/content/comptia/slides-b";
import { slidesC } from "@/content/comptia/slides-c";
import type { ExamQuestion, Slide } from "@/lib/types";
import type { Course } from "./types";

const reviewer = bank as ExamQuestion[];

/** Which reviewer items appear on each in-deck quiz slide (ids from the 150-item reviewer). */
const quizItems: Record<string, number[]> = {
  "m1-pre": [2, 85, 96],
  "m2-check": [3, 25, 105],
  "m3-check": [50, 65, 120],
  "m4-check": [73, 80, 135],
  "m5-check": [88, 92, 143],
  "m6-check": [97, 99, 149],
  "final-1": [110, 128, 138],
  "final-2": [144, 147, 150],
};

/** Fills quiz slides with reviewer items and adds the answer key to the speaker notes. */
function withQuizzes(slides: Slide[]): Slide[] {
  return slides.map((s) => {
    const ids = quizItems[s.id];
    if (!ids) return s;
    const items = ids.map((id) => {
      const q = reviewer.find((r) => r.id === id);
      if (!q) throw new Error(`Reviewer item ${id} not found`);
      return q;
    });
    return {
      ...s,
      blocks: s.blocks?.map((b) =>
        b.type === "quiz" ? { ...b, questions: items.map((q) => ({ q: q.q, options: q.options, answer: q.answer[0], why: q.why })) } : b,
      ),
      notes: {
        ...s.notes,
        ask: [
          ...(s.notes.ask ?? []),
          ...items.map((q) => ({
            q: `Reviewer #${q.id}: ${q.q}`,
            a: `${"ABCD"[q.answer[0]]}. ${q.options[q.answer[0]]}: ${q.why}`,
          })),
        ],
      },
    };
  });
}

function glossarySlides(terms: string[][]): Slide[] {
  const per = 15;
  const out: Slide[] = [];
  for (let i = 0; i < terms.length; i += per) {
    out.push({
      id: `glossary-${i / per + 1}`,
      section: "Review & close",
      kicker: `Glossary · ${i / per + 1} of ${Math.ceil(terms.length / per)}`,
      title: "Key terms",
      blocks: [{ type: "glossary", terms: terms.slice(i, i + per).map(([term, def]) => ({ term, def })) }],
      notes: {
        script: [`Use this as a reference. Pick any term and ask a student to explain it in their own words, with a Bayan Coffee example.`],
      },
    });
  }
  return out;
}

const closing: Slide[] = [
  {
    id: "review-center",
    section: "Review & close",
    kicker: "Review · on your own or in class",
    title: "Practice test and flashcards",
    subtitle: "Built from the 150-item CompTIA DAE reviewer and the course glossary. Everything reshuffles on every start.",
    blocks: [
      {
        type: "launch",
        items: [
          {
            href: "review/test",
            icon: "list",
            title: "Practice test",
            text: "Choose how many questions (1–150), which domains, and knowledge or situational items. Practice mode explains every answer.",
            cta: "Start a practice test",
            tone: "blue",
          },
          {
            href: "review/flashcards",
            icon: "layers",
            title: "Flashcards",
            text: "Flip through key terms and reviewer questions. Sort cards into “got it” and “still learning”, then drill the ones you missed.",
            cta: "Open flashcards",
            tone: "violet",
          },
        ],
      },
    ],
    notes: {
      script: [
        `Before we close: everything you need to review is in one place. The practice test uses all 150 items from the course reviewer: 100 knowledge items and 50 situational ones, like the assessment.`,
        `My suggestion: tonight, do 25 questions in practice mode so you see the explanations. Before the assessment, do a timed run in exam mode.`,
      ],
      deeper: ["Press E during the deck to open the review center in a new tab. Questions and answer choices reshuffle on every start."],
    },
  },
  {
    id: "thanks",
    section: "Review & close",
    variant: "end",
    kicker: "Salamat!",
    title: "Clean data, clear answers, honest charts.",
    subtitle: "Next: finish the CertMaster Learn modules, practice with the reviewer, then take the 30-minute competency assessment.",
    icon: "cap",
    notes: {
      script: [
        `Remember the hardest-sounding outcome you picked on day one? Does it still feel hard?`,
        `[Take a few answers.]`,
        `You now know the full workflow: ask, import, clean, combine, analyze, visualize, and share responsibly. Finish the modules in CertMaster Learn, practice with the reviewer, and go earn that CompCert. Salamat, everyone!`,
      ],
    },
  },
];

export const comptia: Course = {
  id: "comptia",
  code: "CompTIA DAE",
  name: "Data Analysis Essentials",
  vendor: "CompTIA",
  tagline: "Organize, clean, analyze, and visualize data with spreadsheets, then share it responsibly.",
  base: "/comptia",
  slides: [...withQuizzes([...slidesA, ...slidesB, ...slidesC]), ...glossarySlides(daeGlossary), ...closing],
  bank: reviewer,
  bankLabel: "CompTIA DAE reviewer",
  glossaries: [{ label: "DAE glossary", terms: daeGlossary }],
  passMark: 0.7,
};
