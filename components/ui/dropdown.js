"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Dropdown({ items }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLargerThanXL, setIsLargerThanXL] = useState(false);

  // Determine if the screen size is larger than `xl`
  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargerThanXL(window.innerWidth > 1280);
    };

    updateScreenSize(); // Check on mount
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div
      className={`relative ${!isLargerThanXL && "flex flex-col"}`}
      onMouseEnter={() => isLargerThanXL && setIsHovered(true)}
      onMouseLeave={() => isLargerThanXL && setIsHovered(false)}
    >
      {/* Button to toggle dropdown */}
      <button
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
      </button>

      {/* Dropdown menu */}
      {(isHovered || isOpen) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`${
            isLargerThanXL
              ? "absolute z-50 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              : "font-normal"
          } ${isLargerThanXL ? "w-44" : "w-full"}`}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
            {items.map(
              (item, index) =>
                index !== 0 && (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                      onClick={() => !isLargerThanXL && setIsOpen(false)} // Close on click for smaller screens
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
