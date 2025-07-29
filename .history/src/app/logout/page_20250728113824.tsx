import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogoutPage() {
  await auth.api.signOut({
    headers: headers(), // ✅ required context for signOut
  });

  redirect("/"); // or "/login"
}
