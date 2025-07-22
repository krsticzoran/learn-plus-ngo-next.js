"use client";
import { useState } from "react";
import Link from "next/link";
import { headerLinks, contactInfo } from "@/data/header-links";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute z-50 w-full bg-transparent text-primary">
      <nav
        className={`mx-auto flex max-w-screen-xl items-center justify-between px-4 font-poppins text-lg font-medium uppercase leading-7 sm:px-6 lg:px-8 xl:font-spartan xl:font-semibold xl:capitalize ${pathname === "/contact" ? "mt-10" : "mt-[60px]"}`}
      >
        <Link href="/">
          {contactInfo.logo ? (
            <Image src={contactInfo.logo} width={112} height={48} alt="logo" />
          ) : (
            <p className={`${pathname === "" && "text-white"}`}>LOGO</p>
          )}
        </Link>

        <div className="flex flex-wrap px-5 sm:px-8 xl:px-0">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 xl:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full xl:block xl:w-auto`}
            id="navbar-dropdown"
          >
            <ul
              className={` ${pathname === "/contact" && "ml-36"} ${pathname === "" && "text-white"} flex flex-col font-poppins font-medium xl:mt-0 xl:flex-row xl:items-center xl:space-x-8 xl:border-0 xl:p-0 rtl:space-x-reverse`}
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
        </div>
        <Link href={`tel:${contactInfo.phone}`}>
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
      </nav>
    </header>
  );
}
