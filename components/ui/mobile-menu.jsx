"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import { headerLinks, contactInfo } from "@/data/header-links";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./social-icons";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-transparent xl:hidden"
          aria-label="Open mobile menu"
        >
          <Menu className="!h-8 !w-8 text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="sm:w-120 w-full [&>button:last-child]:hidden"
      >
        <div className="relative flex w-full">
          {/* Logo */}
          <Link href="/">
            <Image
              src={contactInfo.logo}
              alt="logo Learn Plus"
              width={112}
              height={48}
              className="h-[38px] w-[90px] object-contain lg:w-[112px] xl:h-[48px]"
            />
          </Link>

          {/* Close Button */}
          <SheetClose asChild>
            <button className="absolute right-4 text-primary">
              <X className="h-8 w-8" />
              <span className="sr-only">Close menu</span>
            </button>
          </SheetClose>
        </div>
        <SheetHeader>
          <VisuallyHidden>
            <SheetTitle>Mobile navigation menu</SheetTitle>
          </VisuallyHidden>
        </SheetHeader>

        {/* Contact Phone Number */}
        <nav className="mt-8">
          <ul className="flex flex-col gap-4">
            {headerLinks.map((link, index) => (
              <li key={index}>
                <SheetClose asChild>
                  <Link
                    href={link.href}
                    className="text-lg font-medium hover:underline"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <SocialIcons variant="light" className="absolute bottom-6" />
      </SheetContent>
    </Sheet>
  );
}
