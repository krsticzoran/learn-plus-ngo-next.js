import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavLogo from "../ui/nav-logo";
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
              <NavLogo isDesktop={false} />
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
