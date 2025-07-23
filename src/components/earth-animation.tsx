"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import earth from "@/assets/images/earth.webp";

export default function EarthAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY === 0;
      setShow((prev) => (prev === atTop ? prev : atTop));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "5%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="fixed bottom-0 right-0"
        >
          <Image src={earth} alt="earth planet" priority />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
