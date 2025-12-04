import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { getAllProjectsGrouped } from "@/lib/queries";
import { ErasmusProjectCard } from "@/components/ui/erasmus-project-card";
import { Reveal } from "@/components/animations/reveal";

export const metadata: Metadata = {
  title: "Learn Plus - Erasmus+ Projects Overview",
  description:
    "Overview of past and current Erasmus+ projects by Learn Plus organization",
  openGraph: {
    title: "Learn Plus - Erasmus+ Projects Overview",
    description:
      "Discover all past and ongoing Erasmus+ projects by Learn Plus and learn how to get involved.",
    url: "https://learn-plus.org/erasmus",
    images: ["/erasmus-social.jpg"],
  },
};

export default async function ErasmusPage() {
  const { ongoing: ongoingProjects, past: pastProjects } =
    await getAllProjectsGrouped();

  return (
    <>
      <Container className="mb-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
        <h1 className="sr-only">Erasmus Projects</h1>
        <Reveal>
          <section className="bg-green-muted xxl:text-5xl flex h-80 items-center justify-center rounded-4xl p-6 text-3xl font-medium sm:text-4xl lg:h-96 lg:p-12">
            <h2>Ongoing Projects</h2>
          </section>
        </Reveal>

        {ongoingProjects.map((proj) => (
          <Reveal key={proj.id}>
            <ErasmusProjectCard
              id={proj.id}
              slug={proj.slug}
              title={proj.title}
              coverUrl={proj.cover.url}
              projectCode={proj.projectCode}
              startDate={proj.startDate}
              endDate={proj.endDate}
            />
          </Reveal>
        ))}
      </Container>
      <Container className="mb-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
        <Reveal>
          <section className="bg-blue-muted xxl:text-5xl flex h-80 items-center justify-center rounded-4xl p-6 text-3xl font-medium text-white sm:text-4xl lg:h-96 lg:p-12">
            <h2>Previous Activities</h2>
          </section>
        </Reveal>
        {pastProjects.map((proj) => (
          <Reveal key={proj.id}>
            <ErasmusProjectCard
              id={proj.id}
              slug={proj.slug}
              title={proj.title}
              coverUrl={proj.cover.url}
              projectCode={proj.projectCode}
              startDate={proj.startDate}
              endDate={proj.endDate}
            />
          </Reveal>
        ))}
      </Container>
    </>
  );
}
