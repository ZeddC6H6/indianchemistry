import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Reaction } from "@/models/reaction";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const reaction = await Reaction.findById(params.id);

  if (!reaction) {
    return NextResponse.json({ error: "Reaction not found" }, { status: 404 });
  }

  return NextResponse.json({ reaction });
}
