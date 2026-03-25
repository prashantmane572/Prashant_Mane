import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Basic mock login for MVP. Unsecured demo.
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    
    // Hardcoded simple admin check for MVP demo purposes.
    // In production, use next-auth or bcrypt password comparison.
    if (email === "admin@pmane.com" && password === "Admin123!") {
      return NextResponse.json({ success: true, token: "admin-session-token" });
    }

    // fallback to DB check
    const user = await prisma.user.findUnique({ where: { email } });
    if (user && user.password === password) {
       return NextResponse.json({ success: true, token: "admin-session-token" });
    }

    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
