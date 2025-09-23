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
          className="flex h-[480px] flex-col rounded-4xl bg-white p-6 md:h-[520px] lg:h-[480px] lg:p-12"
        >
          <div className="flex justify-between gap-4">
            <p className="mt-2 max-w-3/5">{partner.name}</p>
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

          <p className="mt-auto mb-4">{partner.description}</p>

          <a
            href={`mailto:${partner.email}`}
            className="hover:!text-blue-muted mb-2 inline-block transition-colors duration-200"
          >
            email: {partner.email}
          </a>

          <a
            href={`tel:${partner.phone}`}
            className="hover:!text-blue-muted transition-colors duration-200"
          >
            tel: {partner.phone}
          </a>
        </article>
      ))}
      {[1, 2, 3, 4].map((num) => (
        <div
          key={num}
          className="hidden h-100 rounded-4xl bg-white md:block md:h-[520px] lg:h-[480px]"
        ></div>
      ))}
    </Container>
  );
}
