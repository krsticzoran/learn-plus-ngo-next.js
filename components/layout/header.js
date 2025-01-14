"use client";
import { useState } from "react";
import Link from "next/link";
import Dropdown from "../ui/dropdown";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="flex justify-between items-center  px-[70px] bg-primary">
        <div className="flex  gap-2">
          <Link
            href="mailto:example@example.com"
            className="flex items-center gap-2 py-4 text-white hover:text-secondary mr-6"
          >
            <svg
              className="w-5 h-5"
              fill="#EC4E4F"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
            </svg>
            e-mail us
          </Link>
          <div
            className=" w-[1px]"
            style={{
              backgroundColor: "rgba(247, 245, 245, 0.1)",
            }}
          ></div>

          <Link
            href="tel:+385992476644"
            className="flex items-center gap-2 py-4 text-white hover:text-secondary ml-6"
          >
            <svg
              className="w-5 h-5"
              fill="#EC4E4F"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.092 15.092 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.69c0 .55-.45 1-1 1-10.02 0-18-7.98-18-18 0-.55.45-1 1-1H5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.36.03.74-.24 1.02l-2.2 2.2z" />
            </svg>
            +385 99 247 66 44
          </Link>
        </div>

        <ul className=" flex gap-6">
          <li>
            <a
              href="https://www.facebook.com"
              rel="noreferrer"
              target="_blank"
              className="flex items-center justify-center w-9 h-9 bg-[rgba(255,255,255,0.13)] rounded-full text-white transition hover:bg-secondary"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com"
              rel="noreferrer"
              target="_blank"
              className="flex items-center justify-center w-9 h-9 bg-[rgba(255,255,255,0.13)] rounded-full text-white transition hover:bg-secondary"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com"
              rel="noreferrer"
              target="_blank"
              className="flex items-center justify-center w-9 h-9 bg-[rgba(255,255,255,0.13)] rounded-full text-white transition hover:bg-secondary"
            >
              <span className="sr-only">YouTube</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.615 3.184C20.44 3.414 21.1 4.078 21.328 4.903c.452 1.69.672 3.802.672 6.097 0 2.295-.22 4.406-.672 6.097-.228.825-.888 1.489-1.713 1.72C17.638 19.997 12 20 12 20s-5.638-.003-7.615-.183c-.825-.231-1.485-.895-1.713-1.72C2.22 15.406 2 13.295 2 11c0-2.295.22-4.406.672-6.097.228-.825.888-1.489 1.713-1.72C6.362 3.003 12 3 12 3s5.638.003 7.615.184zM10 8v8l6-4-6-4z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <nav className="bg-white border-gray-200  text-primary text-lg leading-7 font-medium xl:font-semibold font-poppins xl:font-spartan uppercase xl:capitalize ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto px-5 sm:px-8 xl:px-0 ">
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
              <li onClick={() => setIsMenuOpen(false)}>
                <Link
                  href="/"
                  className="block py-2 px-3 rounded xl:bg-transparent xl:p-0 hover:text-secondary  "
                >
                  Home
                </Link>
              </li>

              <li onClick={() => setIsMenuOpen(false)}>
                <Link
                  href="/services"
                  className="block py-2 px-3 rounded xl:bg-transparent xl:p-0  hover:text-secondary "
                >
                  Our Services
                </Link>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link
                  href="/erasmus"
                  className="block py-2 px-3 rounded xl:bg-transparent xl:p-0 hover:text-secondary  "
                >
                  Erasmus+
                </Link>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link
                  href="/partners"
                  className="block py-2 px-3 rounded xl:bg-transparent xl:p-0  hover:text-secondary "
                >
                  Our Partners
                </Link>
              </li>
              <li>
                <Dropdown
                  items={[
                    { label: "About Us", href: "/about" },
                    { label: "Learn Plus", href: "/about#learn-plus" },
                    { label: "What We Do", href: "/about#what-we-do" },
                    { label: "What We Offer", href: "/about#what-we-offer" },
                    { label: "Membership", href: "/about#membership" },
                  ]}
                  setIsMenuOpen={setIsMenuOpen}
                />
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
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
    </header>
  );
}
