import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
            className="hover:bg-transparent cursor-pointer"
          >
            <Menu className="w-7! h-7!" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="bg-background p-6  [&>button:last-child]:hidden w-full"
        >
          <div className="flex items-center justify-between mb-6">
            <SheetTitle className="text-lg font-bold">Learn Plus</SheetTitle>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                className="hover:bg-transparent cursor-pointer"
              >
                <X className="w-7! h-7!" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetClose>
          </div>

          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-medium hover:text-blue-muted transition-colors duration-300"
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
