import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SanitizedMarkdown } from "@/components/sanitized-markdown";
import { getPastProjectBySlug } from "@/lib/queries";
import { formatDate } from "@/lib/date";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const projectData = await getPastProjectBySlug(id);

  if (!projectData) {
    return {
      title: "Project not found",
      description: "Details about this project are currently unavailable.",
    };
  }

  return {
    title: `Learn Plus - ${projectData.title}`,
    description: projectData.description,
    openGraph: {
      title: `Learn Plus - ${projectData.title}`,
      description: projectData.description,
      url: `https://learn-plus.org/${projectData.slug}`,
      images: projectData.cover,
    },
  };
}

export default async function ErasmusProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectData = await getPastProjectBySlug(id);

  if (!projectData) {
    notFound();
  }

  return (
    <Container className="mb-2.5 flex flex-col gap-2.5" as="article">
      <div className="relative h-[500px] w-full overflow-hidden rounded-4xl">
        <Image
          src={projectData.cover.url}
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
          <p className="text-sm sm:text-base">
            Duration: {formatDate(projectData.startDate)} -{" "}
            {formatDate(projectData.endDate)}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-4xl bg-white p-6 sm:p-12 sm:text-lg">
        {projectData.content && (
          <SanitizedMarkdown content={projectData.content} />
        )}

        {projectData.gallery && (
          <div className="mx-auto mt-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectData.gallery.map((image, i) => (
              <div
                key={i}
                className="relative h-[520px] w-full overflow-hidden rounded-4xl"
              >
                <Image
                  fill
                  src={image.url}
                  alt={`${projectData.title} - photo ${i + 1}`}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
