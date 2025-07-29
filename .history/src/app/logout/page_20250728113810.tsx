// app/logout/page.tsx

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function LogoutPage() {
  await auth.api.signOut(); // ✅ server-side sign-out
  redirect("/"); // or redirect("/login")
}
