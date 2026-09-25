import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const COOKIE_NAME = "conturk_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (value) return value;
  if (process.env.NODE_ENV === "production") {
    throw new Error(`${name} must be configured in production.`);
  }
  return name === "CONTURK_ADMIN_SESSION_SECRET" ? "local-demo-session-secret" : "";
}

function secret() {
  return requiredEnv("CONTURK_ADMIN_SESSION_SECRET") || "local-demo-session-secret";
}

export function getAdminCredentials() {
  const email = process.env.CONTURK_ADMIN_EMAIL?.trim();
  const password = process.env.CONTURK_ADMIN_PASSWORD;

  if (email && password) return { email, password };
  if (process.env.NODE_ENV === "production") {
    throw new Error("CONTURK_ADMIN_EMAIL and CONTURK_ADMIN_PASSWORD must be configured in production.");
  }

  return { email: "admin@conturk.local", password: "ConturkDemo123!" };
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export function createAdminSessionToken() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS;
  const payload = `admin:${expiresAt}`;
  return `${payload}.${sign(payload)}`;
}

export function isValidAdminSession(token?: string) {
  if (!token) return false;

  const index = token.lastIndexOf(".");
  if (index < 1) return false;

  const payload = token.slice(0, index);
  const provided = token.slice(index + 1);
  const expected = sign(payload);

  if (provided.length !== expected.length) return false;
  if (!timingSafeEqual(Buffer.from(provided), Buffer.from(expected))) return false;

  const match = /^admin:(\d+)$/.exec(payload);
  if (!match) return false;

  const expiresAt = Number(match[1]);
  return Number.isSafeInteger(expiresAt) && expiresAt > Math.floor(Date.now() / 1000);
}

export async function isAdminAuthenticated() {
  try {
    const cookieStore = await cookies();
    return isValidAdminSession(cookieStore.get(COOKIE_NAME)?.value);
  } catch {
    return false;
  }
}
