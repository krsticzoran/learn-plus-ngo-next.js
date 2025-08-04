"use client";
import Image, { StaticImageData } from "next/image";
import { Parallax } from "react-scroll-parallax";

interface ParallaxImgProps {
  src: StaticImageData;
  alt: string;
}

export default function ParallaxImg({ src, alt }: ParallaxImgProps) {
  return (
    <Parallax className="absolute inset-0" scale={[2, 0.5]}>
      <Image fill src={src} alt={alt} className="object-cover rounded-4xl" />
    </Parallax>
  );
}
