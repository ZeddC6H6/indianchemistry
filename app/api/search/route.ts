import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Reaction } from "@/models/reaction";

export async function GET(request: NextRequest) {
  await connectDB();
  const { searchParams } = new URL(request.url);

  const q = searchParams.get("q") || "";
  if (!q.trim()) {
    return NextResponse.json({ suggestions: [], results: [] });
  }

  const [suggestions, results] = await Promise.all([
    Reaction.find(
      {
        $or: [
          { reactionName: { $regex: q, $options: "i" } },
          { tags: { $regex: q, $options: "i" } },
          { searchableText: { $regex: q, $options: "i" } }
        ]
      },
      { reactionName: 1, slug: 1 }
    )
      .limit(6)
      .lean(),
    Reaction.find(
      {
        $or: [{ $text: { $search: q } }, { reactionName: { $regex: q, $options: "i" } }, { tags: { $regex: q, $options: "i" } }]
      },
      { score: { $meta: "textScore" }, reactionName: 1, chapterName: 1, bookName: 1, category: 1, slug: 1 }
    )
      .sort({ score: { $meta: "textScore" } })
      .limit(25)
      .lean()
  ]);

  return NextResponse.json({ suggestions, results });
}
