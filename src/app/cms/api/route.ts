import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";

export async function GET(request: NextRequest) {
  const db = await fs.readFile("src/app/cms/db.json", "utf8");
  return NextResponse.json(JSON.parse(db));
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  await fs.writeFile("src/app/cms/db.json", JSON.stringify(body, null, 2));
  return NextResponse.json({ success: true });
}
