// components/Header.tsx
import Link from "next/link";
import { links } from "@/data/links";
import MobileNav from "./mobile-nav";
import Image from "next/image";
import Logo from "@/assets/logo/logo.png";

import { Container } from "./container";

export default function Header() {
  return (
    <Container
      as="header"
      className="bg-background my-[10px] flex h-[70px] items-center justify-between rounded-3xl px-4 lg:h-[80px] lg:px-6"
    >
      {/* Logo */}
      <Link href="/" className="font-bold tracking-wide uppercase">
        <Image src={Logo} height={150} width={150} alt="learn plus logo" />
      </Link>

      {/* Nav */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-10">
          {links.slice(1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-blue-muted capitalize duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA */}
      <div className="hidden lg:block">
        <a
          href="tel:+385992476644"
          className="bg-blue-muted hover:bg-blue-muted/70 cursor-pointer rounded-full px-6 py-3 text-white! capitalize duration-300"
        >
          Ask About Erasmus+
        </a>
      </div>

      {/* Mobile Nav */}
      <MobileNav />
    </Container>
  );
}
