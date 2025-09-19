import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import Image from "next/image";
import { previousErasmusProjects as project } from "@/data/erasmus";
import { notFound } from "next/navigation";
import { SanitizedMarkdown } from "@/components/sanitized-markdown";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const projectData = project.find((p) => p.id === id);

  if (!projectData) {
    return {
      title: "Project not found",
      description: "Details about this project are currently unavailable.",
    };
  }

  return {
    title: `Learn Plus - ${projectData.title}`,
    description: projectData.description,
  };
}

export default async function ErasmusProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectData = project.find((p) => p.id === id);

  if (!projectData) {
    notFound();
  }

  return (
    <Container className="mb-2.5 flex flex-col gap-2.5" as="article">
      <div className="relative h-[500px] w-full overflow-hidden rounded-4xl">
        <Image
          src={projectData.image}
          alt={projectData.title}
          priority
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white sm:bottom-12 sm:left-12">
          <h1 className="mr-6 mb-4 text-3xl font-medium sm:mr-12 lg:text-5xl">
            {projectData.title}
          </h1>
          <p className="text-sm sm:text-base">{`Duration: ${projectData.start} - ${projectData.end}`}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-4xl bg-white p-6 sm:p-12 sm:text-lg">
        {projectData.text.map((block, i) => (
          <SanitizedMarkdown key={i} content={block} />
        ))}

        {projectData.images && (
          <div className="mx-auto mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectData.images.map((image, i) => (
              <Image
                src={image}
                alt={`${projectData.title} - photo ${i + 1}`}
                key={i}
                className="h-[520px] w-full rounded-4xl object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
