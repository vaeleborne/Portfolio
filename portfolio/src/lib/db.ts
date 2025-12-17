// src/lib/db.ts
import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "../../..");

const dbDir = path.join(repoRoot, "db");
const dbPath = path.join(dbDir, "portfolio.sqlite");

// Next build sets NODE_ENV=production, but we still need RW access while prerendering.
// Use NEXT_PHASE to detect build-time execution.
const isBuildTime = process.env.NEXT_PHASE === "phase-production-build";
const readonly = process.env.NODE_ENV === "production" && !isBuildTime;


if (!fs.existsSync(dbDir)) {
    //Fail, db should be created on build
    throw new Error(
        `Database directory ${dbDir} does not exist. Please run the build script to create it.`
    );
}

export const db = new Database(dbPath, {
    readonly,
    fileMustExist: true
});

db.pragma("foreign_keys = ON");
db.pragma("busy_timeout = 2000");

// WAL requires write access; don't do it when readonly.
if (!readonly) {
  db.pragma("journal_mode = WAL");
}