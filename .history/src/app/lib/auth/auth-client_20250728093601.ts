'use client';

import { createAuthClient } from "better-auth/react";


export const { signIn, signOut, useSession, getSession } = createAuthClient({
  baseUrl: "/api/auth", // or full URL if needed
});
