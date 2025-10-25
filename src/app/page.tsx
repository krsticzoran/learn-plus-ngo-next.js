import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Membership from "@/components/sections/ membership";
import { Container } from "@/components/layout/container";
import { getPastProjectsForHomepage } from "@/lib/queries";
import { ErasmusProjectCard } from "@/components/ui/erasmus-project-card";

export default async function Home() {
  const pastProjects = await getPastProjectsForHomepage();

  return (
    <>
      <Hero />

      <Container className="mb-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
        {pastProjects.slice(0, 4).map((proj, index) => (
          <div
            key={proj.id}
            className={index === 3 ? "hidden sm:block xl:hidden" : ""}
          >
            <ErasmusProjectCard
              id={proj.id}
              slug={proj.slug}
              title={proj.title}
              coverUrl={proj.cover.url}
              projectCode={proj.projectCode}
              startDate={proj.startDate}
              endDate={proj.endDate}
            />
          </div>
        ))}
      </Container>

      <About />
      <Membership />
    </>
  );
}
