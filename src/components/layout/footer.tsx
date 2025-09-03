import { Container } from "./container";
import { links } from "@/data/links";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo/logo.png";
import { socialLinks } from "@/data/links";

export default function Footer() {
  return (
    <Container as="footer" className="mb-2.5 rounded-4xl bg-white p-6 sm:p-12">
      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        {/* Left section */}
        <div className="flex flex-col sm:max-w-[80%] lg:max-w-[350px] xl:max-w-[440px] 2xl:max-w-[480px]">
          <div className="flex min-h-fit items-center justify-start">
            <div className="relative flex h-8 w-24 items-center sm:h-12 sm:w-36">
              <Link href="/" aria-label="Home">
                <Image
                  src={Logo}
                  fill
                  alt="Learn Plus organization logo"
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
          <p className="text-black-muted/80 mt-6 text-sm sm:text-base">
            Learn Plus engages in Erasmus+ projects, promoting knowledge
            exchange, cultural diversity, and meaningful lifelong learning
            opportunities for people of all ages.
          </p>
        </div>

        {/* Right section */}
        <div className="flex w-full flex-col justify-between sm:flex-row lg:w-fit lg:gap-12 xl:gap-24 2xl:gap-32">
          <div className="mb-6 flex flex-col sm:mb-0">
            <h3 className="mb-4 text-lg font-medium sm:text-xl">Quick Links</h3>
            <ul className="flex flex-col">
              {links.slice(1).map(
                (
                  link, // Skip homepage link
                ) => (
                  <li key={link.label} className="mb-2 text-sm sm:text-base">
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="mb-6 flex flex-col sm:mb-0">
            <h3 className="mb-4 text-lg font-medium sm:text-xl">Site Info</h3>
            <Link href="/terms" className="mb-2 text-sm sm:text-base">
              Terms and Conditions
            </Link>
            <Link href="/privacy" className="mb-2 text-sm sm:text-base">
              Privacy Policy
            </Link>
            <p className="text-sm sm:text-base">
              Created by{" "}
              <a href="https://zkrstic.dev/" className="text-blue-muted!">
                zkrstic
              </a>
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium sm:text-xl">
              Connect With Us
            </h3>
            <div className="mb-4 flex gap-4">
              {socialLinks.map(({ id, href, label, icon: Icon }) => (
                <a
                  key={id}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  <Icon size={24} stroke={2} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-black-muted/20 mt-8 border-t pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Learn Plus - All rights reserved.
        </p>
      </div>
    </Container>
  );
}
