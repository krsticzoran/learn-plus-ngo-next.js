import Image from "next/image";
import { Container } from "@/components/layout/container";
import { partnersData } from "@/data/partner-data";

export default function Partners() {
  return (
    <Container
      as="main"
      className="mb-2.5 grid grid-cols-1 gap-2.5 md:grid-cols-2 xl:grid-cols-3"
    >
      <article className="bg-blue-muted h-[440px] rounded-4xl p-6 text-white md:h-[480px] lg:p-12">
        <div className="flex h-36 items-center justify-center md:h-44">
          <h1 className="text-center text-2xl font-medium sm:text-3xl">
            Global Network of Trusted Partners
          </h1>
        </div>
        <p>
          All our services and activities can be also organized in different
          countries with our reliable partners. That means that we can provide
          you the same or sometimes even higher standard of our services.
        </p>
      </article>
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
          <div className="mt-auto flex gap-2">
            <a
              href={`https://wa.me/${partner.phone}?text=Hello%2C%20I%20am%20reaching%20out%20regarding%20potential%20Erasmus%2B%20partnership%20opportunities.%20Let%E2%80%99s%20connect%20and%20explore%20possibilities%20for%20collaboration.`}
              target="_blank"
              className="xs:text-sm bg-green-muted hover:bg-green-muted/70 text-foreground cursor-pointer rounded-full px-4 py-2 text-xs capitalize duration-300 sm:px-6 sm:py-3"
            >
              WhatsApp
            </a>

            <a
              href={`mailto:${partner.email}`}
              className="xs:text-sm bg-background-muted hover:bg-background-muted/50 text-foreground cursor-pointer rounded-full px-4 py-2 text-xs capitalize duration-300 sm:px-6 sm:py-3"
            >
              email us
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
