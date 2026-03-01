import { NextRequest, NextResponse } from "next/server";
import { createAdminSession, verifyAdminCredentials } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const isValid = await verifyAdminCredentials(body.username, body.password);

  if (!isValid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  createAdminSession(body.username);
  return NextResponse.json({ ok: true });
}
