import bank from "@/content/practice-exam.json";
import { glossary1, glossary2 } from "@/content/glossary";
import { slides } from "@/content/slides";
import type { ExamQuestion } from "@/lib/types";
import type { Course } from "./types";

export const azure: Course = {
  id: "azure",
  code: "AI-901",
  name: "Azure AI Fundamentals",
  vendor: "Microsoft",
  tagline: "AI concepts, then AI applications and agents in Microsoft Foundry.",
  base: "/azure",
  slides,
  bank: bank as ExamQuestion[],
  bankLabel: "AI-901 practice exam",
  glossaries: [
    { label: "Part 1 glossary", terms: glossary1 },
    { label: "Part 2 glossary", terms: glossary2 },
  ],
  passMark: 0.7,
};
