// src/index.ts
import { drizzle } from 'drizzle-orm/node-postgres'; // or your DB dialect
import { Pool } from 'pg'; // or 'mysql2' / 'better-sqlite3'
import * as schema from './db/schema';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
