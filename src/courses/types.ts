import type { ExamQuestion, Slide } from "@/lib/types";

export type CourseId = "azure" | "comptia";

/**
 * Everything that differs between courses. The deck, presenter view, practice test and
 * flashcards are shared components that read the active course from context, so each
 * course stays fully separate: its own slides, question bank, glossary and sync channel.
 */
export type Course = {
  id: CourseId;
  /** Short code shown in footers and headers, e.g. "AI-901". */
  code: string;
  name: string;
  vendor: string;
  tagline: string;
  /** Route prefix, e.g. "/azure". */
  base: string;
  slides: Slide[];
  bank: ExamQuestion[];
  /** e.g. "AI-901 practice exam". */
  bankLabel: string;
  glossaries: { label: string; terms: string[][] }[];
  /** Score that counts as passing in the practice test. */
  passMark: number;
};
