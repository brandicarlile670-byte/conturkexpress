import { NextResponse } from "next/server";

export const runtime = "nodejs";

export function GET() {
  const production = process.env.NODE_ENV === "production";
  const databaseConfigured = Boolean(
    process.env.SUPABASE_URL?.trim() && process.env.SUPABASE_SECRET_KEY?.trim(),
  );

  return NextResponse.json({
    ok: true,
    environment: production ? "production" : "development",
    databaseConfigured,
  });
}
