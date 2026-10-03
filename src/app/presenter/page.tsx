import type { Metadata } from "next";
import { Presenter } from "@/components/Presenter";

export const metadata: Metadata = {
  title: "Presenter view · AI-901",
};

export default function PresenterPage() {
  return <Presenter />;
}
