// components/Header.tsx
import Link from "next/link";
import { links } from "@/data/links";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      <Container className="py-[10px] px-3 flex items-center justify-between mt-[30px] bg-background rounded-xl ">
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
                  className="text-sm font-medium uppercase"
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
