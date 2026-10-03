import { ReviewShell } from "@/components/review/ReviewShell";

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return <ReviewShell>{children}</ReviewShell>;
}
