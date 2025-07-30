"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Hero from "@/assets/images/hero.jpg";

export default function HeroImg() {
  return (
    <div className="bg-background h-full rounded-4xl w-1/3 relative overflow-hidden">
      <Parallax className="absolute inset-0 " scale={[2, 0.5]}>
        <Image
          fill
          src={Hero}
          alt="Hero Image"
          className="object-cover  rounded-4xl"
        />
      </Parallax>
    </div>
  );
}
