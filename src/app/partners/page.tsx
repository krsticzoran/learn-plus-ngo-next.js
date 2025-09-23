import Image from "next/image";
import { Container } from "@/components/layout/container";
import { partnersData } from "@/data/partner-data";

export default function Partners() {
  return (
    <Container
      as="main"
      className="mb-2.5 grid grid-cols-1 gap-2.5 md:grid-cols-2 xl:grid-cols-3"
    >
      <h1 className="sr-only">Our partners</h1>

      {partnersData.map((partner, index) => (
        <article
          key={index}
          className="flex h-[440px] flex-col rounded-4xl bg-white p-6 md:h-[480px] lg:p-12"
        >
          <div className="flex h-32 max-h-40 justify-between gap-4 md:h-40">
            <h2 className="mt-2 max-w-3/5 font-semibold">{partner.name}</h2>
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-2/5"
            >
              <Image
                src={partner.image}
                height={160}
                width={160}
                className="rounded-xl"
                alt={partner.alt}
              />
            </a>
          </div>

          <p className="my-4">{partner.description}</p>
          {/* don't forget to refactor links*/}
          <div className="mt-auto flex gap-2">
            <a
              href={`mailto:${partner.email}`}
              className="xs:text-sm bg-background-muted hover:bg-background-muted/50 text-foreground cursor-pointer rounded-full px-4 py-2 text-xs capitalize duration-300 sm:px-6 sm:py-3"
            >
              email us
            </a>

            <a
              href={`tel:${partner.phone}`}
              className="xs:text-sm bg-green-muted hover:bg-green-muted/70 text-foreground cursor-pointer rounded-full px-4 py-2 text-xs capitalize duration-300 sm:px-6 sm:py-3"
            >
              Reach Us
            </a>
          </div>
        </article>
      ))}
      {[1, 2, 3, 4].map((num) => (
        <div
          key={num}
          className="hidden h-[480px] rounded-4xl bg-white md:block"
        ></div>
      ))}
    </Container>
  );
}
