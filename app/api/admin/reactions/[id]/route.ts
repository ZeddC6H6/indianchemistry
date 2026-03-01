import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { ensureAdminSession } from "@/lib/auth";
import { Reaction } from "@/models/reaction";

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  if (!ensureAdminSession()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  const payload = await request.json();
  const updated = await Reaction.findByIdAndUpdate(params.id, { ...payload, updatedBy: "admin" }, { new: true });

  if (!updated) {
    return NextResponse.json({ error: "Reaction not found" }, { status: 404 });
  }

  return NextResponse.json({ reaction: updated });
}
