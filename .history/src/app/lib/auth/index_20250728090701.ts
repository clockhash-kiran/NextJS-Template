import { betterAuth } from "better-auth";
import { db } from "../db";
import { users, sessions } from "../db/schema";
import { eq, SQLWrapper, SQLWrapper, Placeholder, SQL, SQLWrapper, SQLWrapper } from "drizzle-orm";
import { z } from "zod";
import { randomUUID } from "crypto";

export const auth = betterAuth({
  adapter: {
    async getUserById(id: string | SQLWrapper) {
      const [user] = await db.select().from(users).where(eq(users.id, id));
      return user || null;
    },
    async getUserByEmail(email: string | SQLWrapper) {
      const [user] = await db.select().from(users).where(eq(users.email, email));
      return user || null;
    },
    async createUser(data: { email: any; hashedPassword: any; }) {
      await db.insert(users).values({
        id: randomUUID(),
        email: data.email,
        hashedPassword: data.hashedPassword,
      });
    },
    async createSession(session: { id: string | SQL<unknown> | Placeholder<string, any>; userId: string | SQL<unknown> | Placeholder<string, any>; expiresAt: Date | SQL<unknown> | Placeholder<string, any>; }) {
      await db.insert(sessions).values(session);
    },
    async getSession(sessionId: string | SQLWrapper) {
      const [session] = await db.select().from(sessions).where(eq(sessions.id, sessionId));
      return session || null;
    },
    async deleteSession(sessionId: string | SQLWrapper) {
      await db.delete(sessions).where(eq(sessions.id, sessionId));
    },
  },
  session: {
    secret: process.env.AUTH_SECRET!,
  },
  validation: {
    register: z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }),
    login: z.object({
      email: z.string().email(),
      password: z.string(),
    }),
  },
});
