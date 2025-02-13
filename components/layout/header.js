"use client";
import { useState } from "react";
import Link from "next/link";
import Dropdown from "../ui/dropdown";
import { headerLinks, aboutItems } from "@/data/header-links";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute bg-transparent  z-50  w-full  ">
      <nav className="flex items-center justify-between mx-auto max-w-screen-xl  text-lg leading-7 font-medium xl:font-semibold font-poppins xl:font-spartan uppercase xl:capitalize ">
        <Link href="/">
          <p>LOGO</p>
        </Link>

        <div className="  flex flex-wrap   px-5 sm:px-8 xl:px-0  ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
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
            } w-full xl:block xl:w-auto `}
            id="navbar-dropdown"
          >
            <ul className="  flex xl:items-center flex-col font-medium xl:p-0    xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0  font-poppins ml-28 ">
              {headerLinks.map(
                (el, i) =>
                  (i == 3 && (
                    <li key={aboutItems[0].label}>
                      <Dropdown
                        setIsMenuOpen={setIsMenuOpen}
                        items={aboutItems}
                      />
                    </li>
                  )) ||
                  (i !== 3 && (
                    <li key={el.label} onClick={() => setIsMenuOpen(false)}>
                      <Link
                        href={el.href}
                        className={`${
                          pathname === "/contact" &&
                          el.href === "/contact" &&
                          "text-white"
                        }  py-2 px-3 rounded xl:bg-transparent xl:p-0 hover:text-secondary `}
                      >
                        {el.label}
                      </Link>
                    </li>
                  )),
              )}
            </ul>
          </div>
        </div>

        <p
          className={`${
            pathname == "/contact"
              ? "text-white border-white"
              : "text-primary border-primaryd"
          } mr-5 border  px-4 py-2 rounded-full `}
        >
          +385 99 247 66 44
        </p>
      </nav>
    </header>
  );
}
