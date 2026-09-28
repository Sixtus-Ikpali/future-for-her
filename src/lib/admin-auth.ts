import "server-only";

import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "ffh_admin_session";
const SESSION_SECONDS = 12 * 60 * 60;

function getConfig() {
  const password = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!password || password.length < 12 || !sessionSecret || sessionSecret.length < 32) {
    throw new Error("Admin authentication is not configured.");
  }

  return { password, sessionSecret };
}

export function isAdminConfigured() {
  try {
    getConfig();
    return true;
  } catch {
    return false;
  }
}

export function verifyAdminPassword(candidate: string) {
  const { password } = getConfig();
  const actual = createHash("sha256").update(password).digest();
  const submitted = createHash("sha256").update(candidate).digest();
  return timingSafeEqual(actual, submitted);
}

function signature(expires: string, secret: string) {
  return createHmac("sha256", secret).update(expires).digest("hex");
}

export async function createAdminSession() {
  const { sessionSecret } = getConfig();
  const expires = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
  (await cookies()).set(COOKIE_NAME, `${expires}.${signature(expires, sessionSecret)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: SESSION_SECONDS,
  });
}

export async function hasAdminSession() {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token || !isAdminConfigured()) return false;

  const [expires, providedSignature, extra] = token.split(".");
  if (extra || !/^\d{10}$/.test(expires ?? "") || !/^[a-f0-9]{64}$/.test(providedSignature ?? "")) {
    return false;
  }
  if (Number(expires) <= Math.floor(Date.now() / 1000)) return false;

  const expected = Buffer.from(signature(expires, getConfig().sessionSecret), "hex");
  return timingSafeEqual(expected, Buffer.from(providedSignature, "hex"));
}

export async function clearAdminSession() {
  (await cookies()).delete(COOKIE_NAME);
}
