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

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

export const db = new Database(dbPath, {
    readonly: process.env.NODE_ENV === "production",
    fileMustExist: true
});

db.pragma("foreign_keys = ON");
db.pragma("busy_timeout = 2000");
db.pragma("journal_mode = WAL");


const tables = db
  .prepare(`SELECT name FROM sqlite_master WHERE type='table' ORDER BY name`)
  .all();
console.log("TABLES IN DB:", tables.map((t: any) => t.name));

