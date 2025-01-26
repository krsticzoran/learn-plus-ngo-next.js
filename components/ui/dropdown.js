"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Dropdown({ items, setIsMenuOpen }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLargerThanXL, setIsLargerThanXL] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargerThanXL(window.innerWidth > 1280);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div
      className={`relative py-2 xl:py-7 font-poppins font-poppins uppercase xl:capitalize ${
        !isLargerThanXL && "flex flex-col"
      }`}
      onMouseEnter={() => isLargerThanXL && setIsHovered(true)}
      onMouseLeave={() => isLargerThanXL && setIsHovered(false)}
    >
      <Link
        href={items[0].href}
        onClick={() => !isLargerThanXL && setIsOpen((prev) => !prev)}
        className="flex items-center text-primary w-full  px-3  rounded hover:text-secondary hover:bg-transparent xl:border-0  xl:p-0 xl:w-auto  "
      >
        <div
          onClick={() => {
            setIsMenuOpen(false);
          }}
          className={` ${
            pathname == "/about" ? "text-secondary" : ""
          } block py-2 px-3 rounded xl:bg-transparent xl:p-0  hover:text-secondary `}
        >
          {items[0].label}
        </div>
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
            className={` ${pathname == "/about" ? "text-secondary" : ""}`}
          />
        </svg>
      </Link>

      {(isHovered || isOpen) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`${
            isLargerThanXL
              ? "absolute top-[83px] z-50 font-normal  divide-y divide-gray-100 rounded-lg shadow  xl:bg-secondary"
              : "font-normal bg-white-one"
          } ${isLargerThanXL ? "w-[230px]" : "w-full"}`}
        >
          <ul className="text-base font-medium text-primary xl:text-white leading-6 ">
            {items.map(
              (item, index) =>
                index !== 0 && (
                  <li
                    key={index}
                    style={{
                      ...(isLargerThanXL && {
                        textShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                        transition: "transform 0.3s ease",
                      }),
                    }}
                    className={`${
                      index === items.length - 1
                        ? ""
                        : "border-b border-solid border-white border-opacity-10"
                    } xl:hover:text-primary xl:hover:scale-105 pl-4 xl:pl-0`}
                  >
                    <Link
                      href={item.href}
                      className="block px-6 py-[10px]  font-poppins font-poppins text-base"
                      onClick={() => {
                        !isLargerThanXL && setIsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
