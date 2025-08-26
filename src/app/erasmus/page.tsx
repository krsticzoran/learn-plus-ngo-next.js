import { Container } from "@/components/layout/container";

import { ongoingErasmusProjects as projects } from "@/data/erasmus";
import Image from "next/image";
import { previousErasmusProjects as previous } from "@/data/erasmus";
import Link from "next/link";

import Erasmus1 from "@/assets/images/erasmus1.jpeg";

export const metadata = {
  description:
    "Overview of past and current Erasmus+ projects by Learn Plus organization",
  openGraph: {
    title: "Learn Plus - Erasmus+ Projects Overview",
    description:
      "Discover all past and ongoing Erasmus+ projects by Learn Plus and learn how to get involved.",
    url: "https://learn-plus-ngo-next-js.vercel.app/erasmus",
    images: ["/erasmus-social.jpg"],
  },
};

export default function ErasmusPage() {
  return (
    <Container className="mb-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
      <h1 className="sr-only">Erasmus Projects</h1>
      <section className="bg-green-muted xxl:text-5xl flex h-80 items-center justify-center rounded-4xl p-6 text-3xl font-medium sm:text-4xl lg:h-96 lg:p-12">
        <h2>Ongoing Projects</h2>
      </section>

      {projects.map((proj, id) => (
        <article
          key={id}
          className="h-80 rounded-4xl bg-white p-6 lg:h-96 lg:p-12"
        >
          <div className="no-scrollbar h-full overflow-auto">
            <h3 className="mb-2 text-xl font-semibold">{proj.title}</h3>
            {proj.projectCode && (
              <p className="mb-2 text-sm text-gray-500">{proj.projectCode}</p>
            )}
            <p className="mb-2 text-sm">
              <span className="font-medium">Duration:</span> {proj.start} -{" "}
              {proj.end}
            </p>
            <p className="mb-2 text-sm">
              <span className="font-medium">Coordinator:</span>{" "}
              {proj.coordinator}
            </p>
            <div className="text-sm">
              <span className="font-medium">Partners:</span>
              <ul className="mt-1 ml-5 list-disc">
                {proj.partners.map((partner, i) => (
                  <li key={i}>{partner}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}

      <section className="bg-blue-muted xxl:text-5xl flex h-80 items-center justify-center rounded-4xl p-6 text-3xl font-medium text-white sm:text-4xl lg:h-96 lg:p-12">
        <h2>Previous Projects</h2>
      </section>
      {previous.map((proj) => (
        <article
          key={proj.id}
          className="group relative cursor-pointer overflow-hidden rounded-4xl bg-white"
        >
          <div className="relative h-80 lg:h-96">
            <Link href={`/erasmus/${proj.id}`}>
              <Image
                src={Erasmus1}
                alt={`Erasmus Project `}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                {proj.projectCode && (
                  <div className="absolute top-6 right-6">
                    <span className="rounded-full bg-white/20 px-3 py-1 font-mono text-xs text-white/80 backdrop-blur-sm">
                      {proj.projectCode}
                    </span>
                  </div>
                )}

                <div className="text-white">
                  <h3 className="mb-3 text-2xl font-bold text-white drop-shadow-lg lg:text-3xl">
                    {proj.title}
                  </h3>

                  <p className="mb-6 text-white/90 drop-shadow-md">
                    <span className="font-medium">Duration:</span> {proj.start}{" "}
                    - {proj.end}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </article>
      ))}
      {[1, 2].map((i) => (
        <div
          key={i}
          className="hidden h-96 rounded-4xl bg-white xl:block"
        ></div>
      ))}
    </Container>
  );
}
