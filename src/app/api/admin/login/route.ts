import { NextResponse } from "next/server";
import { createAdminSessionToken, COOKIE_NAME, getAdminCredentials } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { username?: unknown; password?: unknown };
    const { email, password } = getAdminCredentials();

    if (body.username?.toString().trim() !== email || body.password !== password) {
      return NextResponse.json({ error: "Invalid admin credentials." }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: COOKIE_NAME,
      value: createAdminSessionToken(),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Admin authentication is not configured correctly." }, { status: 500 });
  }
}
