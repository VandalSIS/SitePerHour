import { redirect } from "next/navigation";

// Fallback if middleware doesn't run: root → English homepage
export default function RootPage() {
  redirect("/ro");
}
