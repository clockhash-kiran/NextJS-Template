import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
const authClient = createAuthClient();
export default async function LogoutPage() {
  await authClient.signOut(); // This safely calls BetterAuth's sign-out
  redirect("/"); // Redirect to homepage (or /login if preferred)
}
