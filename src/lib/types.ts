import type { IconName } from "@/components/Icon";

export type Tone = "blue" | "teal" | "violet" | "pink" | "amber" | "green";

export type BulletItem = string | { text: string; sub?: string[] };

export type Block =
  | { type: "bullets"; items: BulletItem[]; numbered?: boolean; title?: string }
  | {
      type: "cards";
      cols?: 2 | 3 | 4;
      items: { icon?: IconName; title: string; text?: string; tag?: string; tone?: Tone }[];
    }
  | {
      type: "table";
      head: string[];
      rows: string[][];
      /** Column index whose cells stay hidden until the slide is revealed. */
      revealCol?: number;
      emphasisCol?: number;
      compact?: boolean;
      caption?: string;
    }
  | {
      type: "flow";
      steps: { label: string; sub?: string; icon?: IconName }[];
      /** "arrow" = horizontal chain, "steps" = numbered wrap grid. */
      variant?: "arrow" | "steps";
      caption?: string;
    }
  | { type: "code"; code: string; label?: string }
  | {
      type: "bars";
      title?: string;
      items: { label: string; value: number; highlight?: boolean; note?: string }[];
      max?: number;
    }
  | { type: "equation"; result: string; parts: { label: string; sub?: string; icon?: IconName }[] }
  | {
      type: "callout";
      tone: "say" | "ask" | "tip" | "warn" | "board";
      text: string;
      /** Hidden until reveal. */
      answer?: string;
    }
  | {
      type: "quiz";
      start: number;
      questions: { q: string; options: string[]; answer: number; why: string }[];
    }
  | {
      type: "compare";
      left: { title: string; icon?: IconName; items: string[] };
      right: { title: string; icon?: IconName; items: string[] };
    }
  | {
      type: "pixels";
      title?: string;
      matrix: number[][];
      /** Render numbers as a kernel (signed values) instead of grayscale. */
      kernel?: boolean;
    }
  | { type: "scatter"; points: { label: string; x: number; y: number; group: number }[]; caption?: string }
  | { type: "glossary"; terms: { term: string; def: string }[] }
  | { type: "columns"; ratio?: string; cols: Block[][] }
  | { type: "probability"; prompt: string; items: { token: string; p: number }[] }
  | {
      type: "launch";
      /** `href` is relative to the course (e.g. "review/test") unless it starts with "/". */
      items: { href: string; icon: IconName; title: string; text: string; cta: string; tone?: Tone }[];
    }
  | {
      /** A spreadsheet-style grid with column letters, row numbers and an optional formula bar. */
      type: "sheet";
      title?: string;
      formula?: string;
      head: string[];
      rows: string[][];
      /** Cells to highlight, as "row:col" (0-based, data rows) → tone. */
      mark?: Record<string, "good" | "bad" | "focus">;
      caption?: string;
    }
  | {
      /** Small illustrative chart drawn in SVG (shape only, not real data). */
      type: "minicharts";
      items: { kind: "bar" | "line" | "pie" | "scatter" | "histogram" | "column3d"; title: string; text: string; ok?: boolean }[];
    }
  | { type: "image"; src: string; alt: string; width: number; height: number; caption?: string };

export type Notes = {
  time?: string;
  /**
   * The v2 conversational talk track, in order. Plain lines are spoken;
   * lines starting with "[" are cues (what to do, write, or expect).
   */
  script?: string[];
  say?: string[];
  ask?: { q: string; a?: string }[];
  deeper?: string[];
};

export type Slide = {
  id: string;
  section: string;
  part?: "Part 1" | "Part 2" | "Intro" | "Close";
  variant?: "title" | "section" | "default" | "end";
  kicker?: string;
  title: string;
  subtitle?: string;
  /** Pills shown under the title on a "title" slide. */
  meta?: string[];
  icon?: IconName;
  blocks?: Block[];
  notes: Notes;
};

/** One multiple-choice item from a course's question bank. */
export type ExamQuestion = {
  id: number;
  domain: string;
  /** Optional item type, e.g. "Knowledge" or "Situational". */
  part?: string;
  q: string;
  options: string[];
  /** Indices into `options`; more than one for "(Select two.)" items. */
  answer: number[];
  why: string;
};
