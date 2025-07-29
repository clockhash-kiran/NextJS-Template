import { createAuthClient } from "better-auth/client";
import { useRouter } from "next/navigation";
const authClient = createAuthClient();

export const signIn = async () => {
  await authClient.signIn.social({
    provider: "github",
  });
};

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <Button onClick={handleLogout} size="sm" className="text-sm">
      Sign Out
    </Button>
  );
}
