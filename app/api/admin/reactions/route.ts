import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { ensureAdminSession } from "@/lib/auth";
import { Reaction } from "@/models/reaction";

export async function POST(request: NextRequest) {
  if (!ensureAdminSession()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  const payload = await request.json();

  const searchableText = [
    payload.reactionName,
    payload.chapterName,
    payload.bookName,
    ...(payload.tags ?? []),
    ...(payload.conditionsAndReagents ?? [])
  ]
    .join(" ")
    .toLowerCase();

  const reaction = await Reaction.create({ ...payload, searchableText, createdBy: "admin" });
  return NextResponse.json({ reaction }, { status: 201 });
}
