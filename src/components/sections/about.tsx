import { Container } from "@/components/layout/container";
import Osijek from "@/assets/images/osijek.webp";
import Image from "next/image";
import { aboutSections as data } from "@/data/about-data";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <Container
      as="section"
      aria-labelledby="about-heading"
      className="rounded-4xl bg-white p-6"
    >
      <div className="my-2.5 flex flex-col gap-[10px] sm:text-lg lg:flex-row">
        {data.slice(0, 2).map((section) => (
          <div
            key={section.id}
            className={cn(
              "flex h-[360px] sm:h-80 w-full flex-col rounded-3xl p-4 sm:p-6 lg:w-1/2",
              section.bgClass,
            )}
          >
            {section.category && (
              <div className="border-border-muted hidden w-fit rounded-4xl border px-6 py-1 text-sm sm:block">
                <p className={section.textClass}>{section.category}</p>
              </div>
            )}
            {section.id === "who-we-are" ? (
              <h2
                id="about-heading"
                className="text-2xl font-medium sm:mt-3 sm:text-4xl xl:text-5xl"
              >
                {section.title}
              </h2>
            ) : (
              <h3 className="text-2xl sm:text-3xl">{section.title}</h3>
            )}
            <p className="mt-auto">{section.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2.5 sm:text-lg lg:flex-row">
        <div className="bg-black-muted flex h-[360px] sm:h-80 w-full flex-col rounded-3xl p-4 text-white sm:p-6 lg:w-1/2">
          <h3 className="text-2xl sm:text-3xl">{data[2].title}</h3>

          <p className="mt-auto">{data[2].text}</p>
        </div>
        <div className="bg-background relative h-[360px] sm:h-80 w-full overflow-hidden rounded-3xl lg:w-1/2">
          <Image
            fill
            src={Osijek}
            alt="Photo of Osijek, where the main office is located"
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="rounded-3xl object-cover"
          />
          <div className="absolute inset-0 z-10 rounded-3xl bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute top-4 left-4 z-20 w-fit rounded-4xl border border-white px-6 py-1 text-sm sm:top-6 sm:left-6">
            <p className="text-white">{data[3].title}</p>
          </div>
          <p className="absolute bottom-4 left-4 z-20 w-[90%] font-medium text-white sm:bottom-6 sm:left-6 sm:w-[95%]">
            {data[3].text}
          </p>
        </div>
      </div>
    </Container>
  );
}
