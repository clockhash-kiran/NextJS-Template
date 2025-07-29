import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogoutPage() {
  const h = await headers(); // ✅ resolve the Promise

  await auth.api.signOut({
    headers: h,
  });

  redirect("/");
}
