import { Container } from "@/components/layout/container";
import ParallaxImg from "@/components/ui/parallax-img";
import Image from "next/image";
import ContactImage from "@/assets/images/contact.jpg";
import { aboutOsijekData, contactData } from "@/data/contact-data";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Plus - Contact Us",
  description:
    "Get in touch with Learn Plus for inquiries, support, or collaboration opportunities.",
};

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
            {contactData.map(({ type, value, href, Icon }) => (
              <a
                key={type}
                href={href}
                target={type === "address" ? "_blank" : undefined}
                rel={type === "address" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 hover:underline sm:gap-3"
              >
                <Icon className="text-blue-muted h-6 w-6" />
                {value}
              </a>
            ))}
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

      {/* BOTTOM SECTION */}
      <Container className="my-2.5 grid h-full grid-cols-1 gap-2.5 lg:grid-cols-2">
        {aboutOsijekData.map(({ id, title, text, bgColor }) => (
          <section
            key={id}
            aria-labelledby={`${id}-heading`}
            className={cn(
              "flex min-h-[400px] flex-col justify-between rounded-4xl px-6 py-6 text-white sm:min-h-80 sm:px-12 lg:min-h-[400px]",
              bgColor,
            )}
          >
            <h2
              className="text-2xl font-medium sm:text-3xl"
              id={`${id}-heading`}
            >
              {title}
            </h2>
            <p className="leading-relaxed sm:text-lg">{text}</p>
          </section>
        ))}
      </Container>
    </>
  );
}
