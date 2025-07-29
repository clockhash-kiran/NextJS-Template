import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

export const signIn = async () => {
  await authClient.signIn.social({
    provider: "github",
  });
};

export const logout = async () => {
  await authClient.signOut();
};
