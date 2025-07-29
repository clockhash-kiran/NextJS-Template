import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function LogoutPage() {
  await auth.api.signOut(); // This safely calls BetterAuth's sign-out
  redirect("/"); // Redirect to homepage (or /login if preferred)
}
