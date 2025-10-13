import { fetchFromStrapi } from "./strapi";
import {
  OngoingProject,
  PastProject,
  OngoingProjectPreview,
  PastProjectPreview,
} from "./types";

export async function getOngoingProjectsForHomepage(): Promise<
  OngoingProjectPreview[]
> {
  const projects = await fetchFromStrapi<OngoingProject>(
    "/past-projects?fields[0]=title&fields[1]=slug&fields[2]=type&fields[3]=startDate&filters[type][$eq]=o",
  );

  return projects.sort(
    (a, b) => Date.parse(b.startDate) - Date.parse(a.startDate),
  );
}

export async function getPastProjectsForHomepage(): Promise<
  PastProjectPreview[]
> {
  const projects = await fetchFromStrapi<PastProject>(
    "/past-projects?fields[0]=title&fields[1]=slug&fields[2]=startDate&fields[3]=endDate&fields[4]=type&filters[type][$eq]=p",
  );

  return projects.sort(
    (a, b) => Date.parse(b.startDate) - Date.parse(a.startDate),
  );
}

export async function getOngoingProjects(): Promise<OngoingProject[]> {
  const projects = await fetchFromStrapi<OngoingProject>(
    "/past-projects?populate=*",
  );

  const ongoingOnly = projects.filter((p) => p.type === "o");

  return ongoingOnly.sort(
    (a, b) => Date.parse(b.startDate) - Date.parse(a.startDate),
  );
}

export async function getPastProjects(): Promise<PastProject[]> {
  const projects = await fetchFromStrapi<PastProject>(
    "/past-projects?populate=*",
  );

  const pastOnly = projects.filter((p) => p.type === "p");

  return pastOnly.sort(
    (a, b) => Date.parse(b.startDate) - Date.parse(a.startDate),
  );
}

export async function getPastProjectBySlug(
  slug: string,
): Promise<PastProject | null> {
  const encodedSlug = encodeURIComponent(slug);
  const pastProjects = await fetchFromStrapi<PastProject>(
    `/past-projects?populate=*&filters[slug][$eq]=${encodedSlug}`,
  );

  return pastProjects[0] || null;
}
