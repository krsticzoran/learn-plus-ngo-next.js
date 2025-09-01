import { Container } from "@/components/layout/container";
import ParallaxImg from "@/components/ui/parallax-img";
import Image from "next/image";
import ContactImage from "@/assets/images/contact.jpg";

import { IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";

export default function ContactPage() {
  return (
    <>
      <Container
        as="main"
        aria-labelledby="contact-heading"
        className="my-2.5 grid h-full grid-cols-1 gap-2.5 lg:grid-cols-2"
      >
        {/* LEFT COLUMN */}
        <div className="flex h-[400px] flex-col justify-between rounded-4xl bg-white px-6 py-6 sm:h-80 sm:px-12 lg:h-[400px]">
          <h1
            className="text-2xl font-medium sm:text-4xl xl:text-5xl"
            id="contact-heading"
          >
            CONTACT US
          </h1>

          <address className="xs:text-base flex flex-col gap-4 text-sm not-italic sm:gap-5 sm:text-lg">
            <a
              href="tel:+385992476644"
              className="flex items-center gap-2 hover:underline sm:gap-3"
            >
              <IconPhone className="text-blue-muted h-6 w-6" />
              +385 99 247 66 44
            </a>

            <a
              href="mailto:krunoslav.vukelic@gmail.com"
              className="flex items-center gap-2 hover:underline sm:gap-3"
            >
              <IconMail className="text-blue-muted h-6 w-6" />
              krunoslav.vukelic@gmail.com
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Josipa+Jurja+Strossmayera+65a,+31000+Osijek"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline sm:gap-3"
            >
              <IconMapPin className="text-blue-muted h-6 w-6" />
              Josipa Jurja Strossmayera 65a Osijek
            </a>
          </address>
        </div>
        {/* RIGHT COLUMN */}
        <div className="bg-background relative flex h-[400px] flex-col overflow-hidden rounded-4xl sm:h-80 lg:h-[400px]">
          <ParallaxImg>
            <Image
              src={ContactImage}
              alt="contact page illustration with man writing notes"
              fill
              className="rounded-4xl object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
              priority
            />
          </ParallaxImg>
        </div>
      </Container>
      <Container className="my-2.5 grid h-full grid-cols-1 gap-2.5 lg:grid-cols-2">
        <section
          aria-labelledby="find-us-heading"
          className="bg-blue-muted flex h-[400px] flex-col justify-between rounded-4xl px-6 py-6 text-white sm:h-80 sm:px-12 lg:h-[400px]"
        >
          <h2
            className="mb-4 text-2xl font-medium sm:text-3xl"
            id="find-us-heading"
          >
            How to Find Us
          </h2>
          <div>
            <p className="leading-relaxed sm:text-lg">
              Osijek is located in eastern Croatia, right on the banks of the
              Drava River. The city is well connected by road and rail, and the
              nearest airport is in Osijek, just a short drive away. It can also
              be reached in under three hours from the airports in Zagreb,
              Belgrade, and Budapest.
            </p>
          </div>
        </section>
        <section
          aria-labelledby="about-osijek-heading"
          className="bg-black-muted relative flex h-[400px] flex-col justify-between overflow-hidden rounded-4xl px-6 py-6 text-white sm:h-80 sm:px-12 lg:h-[400px]"
        >
          <h2
            className="text-2xl font-medium sm:text-3xl"
            id="about-osijek-heading"
          >
            About Osijek
          </h2>
          <p className="leading-relaxed sm:text-lg">
            Osijek is the fourth largest city in Croatia, with around 100,000
            residents, serving as the economic, cultural, and educational center
            of the Slavonia region. Known for its rich history, green parks, and
            distinctive Central European architecture, the city offers a unique
            blend of tradition and modern life.
          </p>
        </section>
      </Container>
    </>
  );
}
