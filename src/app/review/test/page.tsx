import type { Metadata } from "next";
import { PracticeTest } from "@/components/review/PracticeTest";

export const metadata: Metadata = { title: "Practice test · AI-901" };

export default function PracticeTestPage() {
  return <PracticeTest />;
}
