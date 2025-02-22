import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { inputPassword, storedHash } = await req.json();

    // ✅ 비밀번호 비교
    const match = await bcrypt.compare(inputPassword, storedHash);
    if (match) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
