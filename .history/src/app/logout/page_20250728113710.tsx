import { redirect } from "next/navigation";

import { createAuthClient } from "better-auth/client";
const authClient = createAuthClient();
export default async function LogoutPage() {
  await authClient.signOut(); // This safely calls BetterAuth's sign-out
  redirect("/"); // Redirect to homepage (or /login if preferred)
}
