// components/Header.tsx
import Link from "next/link";
import { links } from "@/data/links";
import MobileNav from "./mobile-nav";

import { Container } from "./container";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      <Container className="px-4 lg:px-6 flex items-center justify-between mt-[10px] lg:mt-[15px] bg-background rounded-3xl h-[70px] lg:h-[80px]">
        {/* Logo */}
        <Link href="/" className=" font-bold tracking-wide uppercase ">
          Learn Plus
        </Link>

        {/* Nav */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-10">
            {links.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="capitalize text-black-muted hover:text-blue-muted duration-300"
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
            className="bg-blue-muted hover:bg-blue-muted/90 text-white capitalize rounded-full cursor-pointer py-4 px-6 duration-300 "
          >
            Ask About Erasmus+
          </a>
        </div>
        {/* Mobile Nav */}

        <MobileNav />
      </Container>
    </header>
  );
};
