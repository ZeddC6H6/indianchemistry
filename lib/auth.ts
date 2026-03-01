import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const COOKIE_NAME = "ic_admin_token";

export async function verifyAdminCredentials(username: string, password: string) {
  const adminUser = process.env.ADMIN_USERNAME;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminUser || !passwordHash) return false;
  if (username !== adminUser) return false;

  return bcrypt.compare(password, passwordHash);
}

export function createAdminSession(username: string) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is missing");

  const token = jwt.sign({ sub: username, role: "admin" }, secret, { expiresIn: "12h" });
  cookies().set(COOKIE_NAME, token, { httpOnly: true, sameSite: "strict", secure: true, path: "/" });
}

export function ensureAdminSession() {
  const token = cookies().get(COOKIE_NAME)?.value;
  if (!token) return false;

  const secret = process.env.JWT_SECRET;
  if (!secret) return false;

  try {
    jwt.verify(token, secret);
    return true;
  } catch {
    return false;
  }
}
