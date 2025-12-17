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
    //Fail, db should be created on build
    throw new Error(
        `Database directory ${dbDir} does not exist. Please run the build script to create it.`
    );
}

export const db = new Database(dbPath, {
    readonly: process.env.NODE_ENV === "production",
    fileMustExist: true
});

db.pragma("foreign_keys = ON");
db.pragma("busy_timeout = 2000");
db.pragma("journal_mode = WAL");

