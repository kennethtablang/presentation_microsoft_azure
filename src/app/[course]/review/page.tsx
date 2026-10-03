import { redirect } from "next/navigation";

export default async function ReviewIndex({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params;
  redirect(`/${course}/review/test`);
}
