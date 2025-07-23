"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import earth from "@/assets/images/earth.webp";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <motion.div
        initial={{ y: "5%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="fixed bottom-0 right-0"
      >
        <Image src={earth} alt="earth planet" priority />
      </motion.div>
    </div>
  );
}
