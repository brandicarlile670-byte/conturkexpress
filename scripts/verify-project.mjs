import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const required = [
  "package.json",
  "package-lock.json",
  "next.config.ts",
  "tsconfig.json",
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/tracking/page.tsx",
  "src/lib/tracking-repository.ts",
  "src/data/tracking.json",
  "supabase-schema.sql",
];

const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));
const tracking = JSON.parse(fs.readFileSync(path.join(root, "src/data/tracking.json"), "utf8"));

if (!Array.isArray(tracking)) throw new Error("src/data/tracking.json must contain an array.");
if (tracking.some((record) => !record?.trackingNo)) throw new Error("Every local tracking record needs a trackingNo.");
if (missing.length) throw new Error(`Missing required project files:\n${missing.map((x) => `- ${x}`).join("\n")}`);

console.log(`Project structure OK. Found ${tracking.length} local tracking records.`);
console.log("No secrets were inspected or printed.");
