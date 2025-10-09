import { fetchFromStrapi } from "./strapi";
import { OngoingProject, PastProject } from "./types";

export async function getOngoingProjects(): Promise<OngoingProject[]> {
  const projects = await fetchFromStrapi<OngoingProject>(
    "/ongoing-projects?populate=*",
  );

  return projects.sort(
    (a, b) => Date.parse(b.startDate) - Date.parse(a.startDate),
  );
}

export async function getPastProjects(): Promise<PastProject[]> {
  const projects = await fetchFromStrapi<PastProject>(
    "/past-projects?populate=*",
  );

  console.log(projects);
  const pastOnly = projects.filter((p) => p.type === "p");

  return pastOnly.sort(
    (a, b) => Date.parse(b.startDate) - Date.parse(a.startDate),
  );
}

export async function getPastProjectBySlug(
  slug: string,
): Promise<PastProject | OngoingProject | null> {
  const encodedSlug = encodeURIComponent(slug);
  const [pastProjects, ongoingProjects] = await Promise.all([
    fetchFromStrapi<PastProject>(
      `/past-projects?populate=*&filters[slug][$eq]=${encodedSlug}`,
    ),
    fetchFromStrapi<OngoingProject>(
      `/ongoing-projects?populate=*&filters[slug][$eq]=${encodedSlug}`,
    ),
  ]);

  return pastProjects[0] || ongoingProjects[0] || null;
}
