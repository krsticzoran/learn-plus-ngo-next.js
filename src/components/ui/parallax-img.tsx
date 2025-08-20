"use client";

import { Parallax } from "react-scroll-parallax";

interface ParallaxImgProps {
  children?: React.ReactNode;
}

export default function ParallaxImg({ children }: ParallaxImgProps) {
  return (
    <Parallax className="absolute inset-0" scale={[2, 0.5]}>
      {children}
    </Parallax>
  );
}
