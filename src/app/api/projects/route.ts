import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function isDatabaseUnavailable(error: unknown) {
  if (!(error instanceof Error)) return false;
  const message = error.message.toLowerCase();
  return message.includes("can\'t reach database server") || message.includes("p1001") || message.includes("econnrefused") || message.includes("timeout") || message.includes("connection") && message.includes("refused");
}

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" }
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error("GET Projects Error:", error);

    if (isDatabaseUnavailable(error)) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json({ error: "Failed to fetch projects", details: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const project = await prisma.project.create({
      data: {
        title: data.title,
        summary: data.summary,
        tools: data.tools,
        image: data.image || null,
        githubUrl: data.githubUrl || null,
        zipUrl: data.zipUrl || null,
        content: data.content || ""
      }
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("POST Project Error:", error);

    if (isDatabaseUnavailable(error)) {
      return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
    }

    return NextResponse.json({ error: "Failed to create project", details: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
