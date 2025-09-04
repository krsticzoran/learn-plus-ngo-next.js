import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo/logo.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { links } from "@/data/links";

export default function MobileNav() {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="cursor-pointer hover:bg-transparent"
          >
            <Menu className="h-7! w-7!" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="bg-background w-full p-6 [&>button:last-child]:hidden"
        >
          <div className="mb-6 flex items-center justify-between">
            <SheetTitle>
              <div className="relative flex h-8 w-24 items-center lg:h-10 lg:w-[120px]">
                <Image
                  src={Logo}
                  fill
                  alt="learn plus logo"
                  sizes="(min-width: 1024px) 120px, 96px"
                  className="object-contain"
                />
              </div>
            </SheetTitle>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                className="cursor-pointer hover:bg-transparent"
              >
                <X className="h-7! w-7!" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetClose>
          </div>

          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-blue-muted text-base font-medium transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
