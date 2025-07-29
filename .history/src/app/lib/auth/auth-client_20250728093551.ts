'use client';

import { createAuthClient } from "better-auth/react";
import { auth } from "./index"; // points to your existing auth.ts

export const { signIn, signOut, useSession, getSession } = createAuthClient(auth);
