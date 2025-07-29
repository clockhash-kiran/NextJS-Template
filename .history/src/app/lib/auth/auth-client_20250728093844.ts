'use client';

import { createAuthClient } from "better-auth/react";

// Optional: baseUrl if auth server is external
export const { signIn, signOut, useSession, getSession } = createAuthClient({
  baseUrl: "/api/auth", // Adjust if deployed under a different path or domain
});
