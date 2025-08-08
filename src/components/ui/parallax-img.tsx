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
      <Image
        fill
        src={src}
        alt={alt}
        className="rounded-4xl object-cover"
        sizes="(max-width: 1023px) 100vw, 33vw"
        priority
      />
    </Parallax>
  );
}
