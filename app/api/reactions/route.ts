import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Reaction } from "@/models/reaction";

export async function GET(request: NextRequest) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const book = searchParams.get("book");
  const chapter = searchParams.get("chapter");
  const category = searchParams.get("category");

  const query: Record<string, string> = {};
  if (book) query.bookName = book;
  if (chapter) query.chapterName = chapter;
  if (category) query.category = category;

  const reactions = await Reaction.find(query).sort({ updatedAt: -1 }).limit(100);
  return NextResponse.json({ reactions });
}
