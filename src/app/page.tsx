"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import earth from "@/assets/images/earth.webp";

export default function Home() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative min-h-screen flex justify-center items-center">
        <h1 className="text-white font-jetbrains  text-5xl uppercase">
          kruno evo ti ga naslov
        </h1>
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
      </div>
      <div className="min-h-screen">
        <p className="text-white mt-20 text-center font-outfit text-2xl">
          ja sam text
        </p>
      </div>
    </>
  );
}
