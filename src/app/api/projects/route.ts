// app/api/projects/route.ts
import { NextResponse } from "next/server";
import { getOngoingProjects } from "@/lib/queries";

export async function GET() {
  const projects = await getOngoingProjects();
  return NextResponse.json(projects);
}
