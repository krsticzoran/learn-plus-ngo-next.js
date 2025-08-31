import { Container } from "@/components/layout/container";
import ParallaxImg from "@/components/ui/parallax-img";
import Image from "next/image";
import ContactImage from "@/assets/images/contact.jpg";

import { IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";

export default function ContactPage() {
  return (
    <Container
      as="main"
      className="my-2.5 grid h-full grid-cols-1 gap-2.5 lg:grid-cols-2"
    >
      {/* LEFT COLUMN */}
      <div className="flex min-h-80 flex-col justify-center gap-8 rounded-4xl bg-white p-6 sm:p-12">
        <h2 className="text-2xl font-bold sm:text-3xl">Contact Us</h2>

        <ul className="space-y-4 sm:text-lg">
          <li className="flex items-center gap-3">
            <IconMapPin className="text-blue-muted h-6 w-6" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Josipa+Jurja+Strossmayera+65a,+31000+Osijek"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Josipa Jurja Strossmayera 65a, 31000 Osijek
            </a>
          </li>

          <li className="flex items-center gap-3">
            <IconPhone className="text-blue-muted h-6 w-6" />
            <a href="tel:+385992476644" className="hover:underline">
              +385 99 247 66 44
            </a>
          </li>

          <li className="flex items-center gap-3">
            <IconMail className="text-blue-muted h-6 w-6" />
            <a
              href="mailto:krunoslav.vukelic@gmail.com"
              className="hover:underline"
            >
              krunoslav.vukelic@gmail.com
            </a>
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="bg-background relative min-h-80 overflow-hidden rounded-4xl lg:min-h-[500px]">
        <ParallaxImg>
          <Image
            src={ContactImage}
            alt="Contact us"
            fill
            className="rounded-4xl object-cover"
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority
          />
        </ParallaxImg>
      </div>
    </Container>
  );
}
