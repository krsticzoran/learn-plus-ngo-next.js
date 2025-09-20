import { fetchFromStrapi } from "./strapi";
import { OngoingProject } from "./types";

export async function getOngoingProjects(): Promise<OngoingProject[]> {
  const projects = await fetchFromStrapi<OngoingProject>(
    "/ongoing-projects?populate=*",
  );

  return projects.sort((a, b) => b.id - a.id);
}
