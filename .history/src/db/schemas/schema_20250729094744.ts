import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  jsonb,
} from "drizzle-orm/pg-core";

// USER
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  username: text("username").unique(),
  image: text("image"),
  emailVerified: timestamp("email_verified").defaultNow(),
  password: text("password"),
  provider: text("provider"),
  providerAccountId: text("provider_account_id"),
  role: text("role").default("CLIENT").notNull(),
  status: text("status").default("ACTIVE").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// SESSION
export const session = pgTable("session", {
  id: text("id").primaryKey(),
  sessionToken: text("session_token").unique().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  expires: timestamp("expires").notNull(),
  refreshToken: text("refresh_token").unique(),
  refreshTokenExpires: timestamp("refresh_token_expires"),
});

// ACCOUNT
export const account = pgTable("account", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  provider: text("provider").notNull(),
  providerAccountId: text("provider_account_id").notNull(),
  type: text("type").notNull(),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  refresh_token: text("refresh_token"),
  refresh_expires_in: integer("refresh_expires_in"),
  scope: text("scope"),
  token_type: text("token_type"),
  id_token: text("id_token"),
  not_before_policy: integer("not-before-policy"),
});

// VERIFICATION TOKEN
export const verificationToken = pgTable("verification_token", {
  id: text("id").primaryKey(),
  token: text("token").unique().notNull(),
  identifier: text("identifier").notNull(),
  expires: timestamp("expires").notNull(),
});

// PROJECT
export const project = pgTable("project", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  repoUrl: text("repo_url"),
  webhookSecret: text("webhook_secret"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// EVENT
export const event = pgTable("event", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  projectId: text("project_id")
    .notNull()
    .references(() => project.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  scanMode: text("scan_mode").notNull(),
  status: text("status").default("PENDING").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// SCAN
export const scan = pgTable("scan", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  projectId: text("project_id")
    .notNull()
    .references(() => project.id, { onDelete: "cascade" }),
  toolId: text("tool_id").notNull(),
  toolName: text("tool_name").notNull(),
  category: text("category").notNull(),
  targetUrl: text("target_url").notNull(),
  summary: jsonb("summary"),
  results: jsonb("results"),
  status: text("status").default("PENDING").notNull(),
  scanId: text("scan_id"),
  reportPath: text("report_path"),
  mode: text("mode").default("manual").notNull(),
  eventId: text("event_id").references(() => event.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// API TOKEN
export const apiToken = pgTable("api_token", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  tokenHash: text("token_hash").notNull(),
  label: text("label"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at"),
  revoked: boolean("revoked").default(false).notNull(),
});
