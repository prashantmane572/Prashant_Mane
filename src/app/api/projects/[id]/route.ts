import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const project = await prisma.project.findUnique({
      where: { id }
    });
    
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    
    return NextResponse.json(project);
  } catch (error) {
    console.error("GET Project Error:", error);
    return NextResponse.json({ error: "Failed to fetch project" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log("Attempting to delete project:", id);
    
    const project = await prisma.project.delete({
      where: { id }
    });
    
    console.log("Project deleted successfully:", project.id);
    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("DELETE Project Error:", error);
    return NextResponse.json({ 
      error: "Failed to delete project",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await req.json();
    
    const project = await prisma.project.update({
      where: { id },
      data: {
        title: data.title,
        summary: data.summary,
        tools: data.tools,
        image: data.image || null,
        githubUrl: data.githubUrl || null,
        zipUrl: data.zipUrl || null,
        content: data.content
      }
    });
    
    return NextResponse.json(project);
  } catch (error) {
    console.error("PATCH Project Error:", error);
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}
