// components/Header.tsx
import Link from "next/link";
import { links } from "@/data/links";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      <Container className="py-5 px-3 flex items-center justify-between mt-[10px] lg:mt-[15px] bg-background rounded-3xl h-[70px] lg:h-[80px] ">
        {/* Logo */}
        <Link href="/" className=" font-bold tracking-wide uppercase ">
          Learn Plus
        </Link>

        {/* Nav */}
        <nav className="hidden md:block ">
          <ul className="flex space-x-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium uppercase text-black-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div>
          <Button variant="outline" className="border-0 uppercase text-sm">
            Call Us
          </Button>
        </div>
      </Container>
    </header>
  );
};
