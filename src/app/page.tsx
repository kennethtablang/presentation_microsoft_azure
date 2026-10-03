import type { Metadata } from "next";
import { CoursePicker } from "@/components/CoursePicker";

export const metadata: Metadata = {
  title: "Choose your course",
  description: "Microsoft Azure AI-901 or CompTIA Data Analysis Essentials: presentations, practice tests and flashcards.",
};

export default function Home() {
  return <CoursePicker />;
}
