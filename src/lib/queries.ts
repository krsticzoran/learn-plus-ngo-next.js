import { fetchFromStrapi } from "./strapi";
import { OngoingProject, PastProject } from "./types";

export async function getOngoingProjects(): Promise<OngoingProject[]> {
  const projects = await fetchFromStrapi<OngoingProject>(
    "/ongoing-projects?populate=*",
  );

  return projects.sort((a, b) => b.id - a.id);
}

export async function getPastProjects(): Promise<PastProject[]> {
  const projects = await fetchFromStrapi<PastProject>(
    "/past-projects?populate=*",
  );
  return projects.sort((a, b) => b.id - a.id);
}

export async function getPastProjectBySlug(
  slug: string,
): Promise<PastProject | null> {
  const encodedSlug = encodeURIComponent(slug);

  const projects = await fetchFromStrapi<PastProject>(
    `/past-projects?populate=*&filters[slug][$eq]=${encodedSlug}`,
  );

  return projects.length > 0 ? projects[0] : null;
}
