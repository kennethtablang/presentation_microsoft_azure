import type { Course } from "@/courses/types";
import type { ExamQuestion } from "./types";

export type { ExamQuestion };

/** Domains in a bank, in first-seen order, with question counts. */
export function domainsOf(bank: ExamQuestion[]): { name: string; count: number }[] {
  return Array.from(
    bank.reduce((m, q) => m.set(q.domain, (m.get(q.domain) ?? 0) + 1), new Map<string, number>()),
    ([name, count]) => ({ name, count }),
  );
}

/** Item types in a bank (e.g. Knowledge / Situational); empty when the bank has none. */
export function partsOf(bank: ExamQuestion[]): { name: string; count: number }[] {
  return Array.from(
    bank.reduce((m, q) => (q.part ? m.set(q.part, (m.get(q.part) ?? 0) + 1) : m), new Map<string, number>()),
    ([name, count]) => ({ name, count }),
  );
}

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

/** Questions matching the chosen domains (and item types, when the bank has them). */
export function filterBank(bank: ExamQuestion[], chosenDomains: string[], chosenParts?: string[]): ExamQuestion[] {
  return bank.filter((q) => chosenDomains.includes(q.domain) && (!q.part || !chosenParts || chosenParts.includes(q.part)));
}

/** Builds a fresh test: a random subset of the pool, with options reshuffled too. */
export function buildTest(pool: ExamQuestion[], count: number): ExamQuestion[] {
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

export function glossaryCardsFor(course: Course): Flashcard[] {
  return course.glossaries.flatMap((g, gi) =>
    g.terms.map(([term, def]) => ({ key: `g${gi}-${term}`, kind: "term" as const, tag: g.label, front: term, back: def })),
  );
}

export function questionCardsFor(course: Course): Flashcard[] {
  return course.bank.map((q) => ({
    key: `q-${q.id}`,
    kind: "question" as const,
    tag: q.domain,
    front: q.q,
    back: q.answer.map((a) => q.options[a]).join("  ·  "),
    detail: q.why,
  }));
}
