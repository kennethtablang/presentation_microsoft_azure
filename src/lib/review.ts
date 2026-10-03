import bank from "@/content/practice-exam.json";
import { glossary1, glossary2 } from "@/content/glossary";

/** One item from the AI-901 practice exam (materials/AI901_Practice_Exam). */
export type ExamQuestion = {
  id: number;
  domain: string;
  q: string;
  options: string[];
  /** Indices into `options`; more than one for "(Select two.)" items. */
  answer: number[];
  why: string;
};

export const examBank = bank as ExamQuestion[];

export const domains: { name: string; count: number }[] = Array.from(
  examBank.reduce((m, q) => m.set(q.domain, (m.get(q.domain) ?? 0) + 1), new Map<string, number>()),
  ([name, count]) => ({ name, count }),
);

/** Unbiased Fisher–Yates shuffle; returns a new array. Uses crypto randomness when available. */
export function shuffle<T>(items: readonly T[]): T[] {
  const a = items.slice();
  const rand = (n: number) => {
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
      const buf = new Uint32Array(1);
      crypto.getRandomValues(buf);
      return buf[0] % n;
    }
    return Math.floor(Math.random() * n);
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = rand(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Shuffles a question's options and remaps its answer indices to match. */
export function shuffleOptions(q: ExamQuestion): ExamQuestion {
  const order = shuffle(q.options.map((_, i) => i));
  return {
    ...q,
    options: order.map((i) => q.options[i]),
    answer: q.answer.map((a) => order.indexOf(a)).sort((x, y) => x - y),
  };
}

/** Builds a fresh test: a random subset of the chosen domains, with options reshuffled too. */
export function buildTest(count: number, chosenDomains: string[]): ExamQuestion[] {
  const pool = examBank.filter((q) => chosenDomains.includes(q.domain));
  return shuffle(pool)
    .slice(0, Math.max(1, Math.min(count, pool.length)))
    .map(shuffleOptions);
}

/** Strips the "(Select two.)" marker; the UI shows its own hint. */
export function stem(q: ExamQuestion): string {
  return q.q.replace(/\s*\(Select (two|three)\.\)\s*$/, "");
}

/** Points earned: one per correct option chosen (the exam's rule for multi-select items). */
export function pointsFor(q: ExamQuestion, picked: number[]): number {
  return picked.filter((p) => q.answer.includes(p)).length;
}

export function isFullyCorrect(q: ExamQuestion, picked: number[]): boolean {
  return picked.length === q.answer.length && q.answer.every((a) => picked.includes(a));
}

/* ───────────────────────── Flashcards ───────────────────────── */

export type Flashcard = {
  key: string;
  kind: "term" | "question";
  tag: string;
  front: string;
  back: string;
  detail?: string;
};

export const glossaryCards: Flashcard[] = [
  ...glossary1.map(([term, def]) => ({ key: `g1-${term}`, kind: "term" as const, tag: "Part 1 glossary", front: term, back: def })),
  ...glossary2.map(([term, def]) => ({ key: `g2-${term}`, kind: "term" as const, tag: "Part 2 glossary", front: term, back: def })),
];

export const questionCards: Flashcard[] = examBank.map((q) => ({
  key: `q-${q.id}`,
  kind: "question",
  tag: q.domain,
  front: q.q,
  back: q.answer.map((a) => q.options[a]).join("  ·  "),
  detail: q.why,
}));
