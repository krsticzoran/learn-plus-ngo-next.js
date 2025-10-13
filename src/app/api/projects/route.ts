import { NextResponse } from "next/server";
import { getOngoingProjectsForHomepage } from "@/lib/queries";

export async function GET() {
  const projects = await getOngoingProjectsForHomepage();
  return NextResponse.json(projects);
}
