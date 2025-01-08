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
      className={`relative font-spartan ${!isLargerThanXL && "flex flex-col"}`}
      onMouseEnter={() => isLargerThanXL && setIsHovered(true)}
      onMouseLeave={() => isLargerThanXL && setIsHovered(false)}
    >
      <Link
        href={items[0].href}
        onClick={() => !isLargerThanXL && setIsOpen((prev) => !prev)}
        className="flex items-center  w-full py-2 px-3  rounded hover:text-secondary hover:bg-transparent xl:border-0  xl:p-0 xl:w-auto  "
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
              ? "absolute  z-50 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow xl:bg-secondary"
              : "font-normal"
          } ${isLargerThanXL ? "w-44" : "w-full"}`}
        >
          <ul className="text-base font-medium text-white leading-6 capitalize">
            {items.map(
              (item, index) =>
                index !== 0 && (
                  <li
                    key={index}
                    className=" border-b border-solid border-white border-opacity-10 hover:text-dark font-spartan"
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
