import type { Metadata } from "next";
import { Flashcards } from "@/components/review/Flashcards";

export const metadata: Metadata = { title: "Flashcards · AI-901" };

export default function FlashcardsPage() {
  return <Flashcards />;
}
