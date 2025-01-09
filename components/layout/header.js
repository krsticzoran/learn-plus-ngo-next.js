"use client";
import { useState } from "react";
import Link from "next/link";
import Dropdown from "../ui/dropdown";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200  text-dark text-lg leading-7 font-semibold font-spartan ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-5 sm:px-8 xl:px-0 ">
        <Link
          href="/"
          className="flex py-4 items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Flowbite
          </span>
        </Link>

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
          } w-full xl:block xl:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex xl:items-center flex-col font-medium xl:p-0    xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 rounded xl:bg-transparent xl:p-0 hover:text-secondary  "
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="block py-2 px-3 rounded xl:bg-transparent xl:p-0  hover:text-secondary "
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/erasmus"
                className="block py-2 px-3 rounded xl:bg-transparent xl:p-0 hover:text-secondary  "
              >
                Erasmus+
              </Link>
            </li>
            <li>
              <Link
                href="/partners"
                className="block py-2 px-3 rounded xl:bg-transparent xl:p-0  hover:text-secondary "
              >
                Our Partners
              </Link>
            </li>
            <li className="">
              <Dropdown
                items={[
                  { label: "About Us", href: "/about" },
                  { label: "Learn Plus", href: "/about#learn-plus" },
                  { label: "What We Do", href: "/about#what-we-do" },
                  { label: "What We Offer", href: "/about#what-we-offer" },
                  { label: "Membership", href: "/about#membership" },
                ]}
              />
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 rounded xl:bg-transparent xl:p-0  hover:text-secondary "
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
