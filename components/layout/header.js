"use client";

import Link from "next/link";
import { headerLinks, contactInfo } from "@/data/header-links";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Container } from "../ui/container";
import MobileMenu from "../ui/mobile-menu";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="absolute z-50 w-full bg-transparent text-primary">
      <Container
        as="nav"
        className={`flex items-center justify-between font-poppins text-lg font-medium uppercase leading-7 xl:font-spartan xl:font-semibold xl:capitalize ${pathname === "/contact" ? "lg:mt-10" : "mt-5 lg:mt-[60px]"}`}
      >
        {/*Logo*/}
        <Link href="/">
          <Image
            src={contactInfo.logo}
            alt="logo Learn Plus"
            width={112}
            height={48}
            className="h-[38px] w-[90px] object-contain lg:w-[112px] xl:h-[48px]"
          />
        </Link>

        <div className="flex flex-wrap px-5 sm:px-8 xl:px-0">
          {/*Desktop Navigation Links*/}
          <ul
            className={` ${pathname === "/contact" && "ml-36"} ${pathname === "" && "text-white"} hidden flex-col font-poppins font-medium xl:mt-0 xl:flex xl:flex-row xl:items-center xl:space-x-8 xl:border-0 xl:p-0 rtl:space-x-reverse`}
          >
            {headerLinks.map((el, i) => (
              <li key={i}>
                <Link
                  href={el.href}
                  className={`${
                    pathname === "/contact" &&
                    (el.href === "/contact" || el.href === "/partners") &&
                    "text-white"
                  } rounded px-3 py-2 hover:text-secondary xl:bg-transparent xl:p-0`}
                >
                  {el.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/*Mobile Menu*/}
        <MobileMenu />

        {/*Contact Phone Number*/}
        <Link href={`tel:${contactInfo.phone}`} className="hidden xl:block">
          <p
            className={`${
              pathname == "/contact" || pathname == ""
                ? "border-white text-white"
                : "border-primary text-primary"
            } mr-5 rounded-full border px-4 py-2`}
          >
            {contactInfo.phone}
          </p>
        </Link>
      </Container>
    </header>
  );
}
