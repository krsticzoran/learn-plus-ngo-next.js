import { Container } from "@/components/layout/container";
import Image from "next/image";
import { previousErasmusProjects as project } from "@/data/erasmus";
import { notFound } from "next/navigation";

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
    <Container>
      <h1>{id}</h1>
      <Image src={projectData.image} alt={projectData.title} />
    </Container>
  );
}
