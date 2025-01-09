"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Dropdown({ items }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLargerThanXL, setIsLargerThanXL] = useState(false);

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
      className={`relative py-2 xl:py-7 font-poppins xl:font-spartan ${
        !isLargerThanXL && "flex flex-col"
      }`}
      onMouseEnter={() => isLargerThanXL && setIsHovered(true)}
      onMouseLeave={() => isLargerThanXL && setIsHovered(false)}
    >
      <Link
        href={items[0].href}
        onClick={() => !isLargerThanXL && setIsOpen((prev) => !prev)}
        className="flex items-center  w-full  px-3  rounded hover:text-secondary hover:bg-transparent xl:border-0  xl:p-0 xl:w-auto  "
      >
        {items[0].label}
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
              ? "absolute top-[83px] z-50 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow xl:bg-secondary"
              : "font-normal"
          } ${isLargerThanXL ? "w-44" : "w-full"}`}
        >
          <ul className="text-base font-medium text-dark xl:text-white leading-6 capitalize">
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
                    className=" border-b border-solid border-white border-opacity-10 font-poppins xl:font-spartan xl:hover:scale-105 pl-4 xl:pl-0 "
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-2 "
                      onClick={() => !isLargerThanXL && setIsOpen(false)}
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
