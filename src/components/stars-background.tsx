"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
}

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars: Star[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const centerX = width / 2;
    const centerY = height / 2;

    const starsCount = 400;

    for (let i = 0; i < starsCount; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width,
        y: (Math.random() - 0.5) * height,
        z: Math.random() * width,
        size: Math.random() * 1.5 + 0.5,
        speed: 0.1 + Math.random() * 0.4,
      });
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "white";

      for (let star of stars) {
        star.z -= star.speed;
        if (star.z <= 0) {
          star.z = width;
          star.x = (Math.random() - 0.5) * width;
          star.y = (Math.random() - 0.5) * height;
          star.speed = 0.1 + Math.random() * 0.4;
          star.size = Math.random() * 1.5 + 0.5;
        }

        const sx = centerX + (star.x / star.z) * width;
        const sy = centerY + (star.y / star.z) * height;
        const starSize = Math.max((1 - star.z / width) * star.size * 3, 0.1);

        ctx.beginPath();
        ctx.arc(sx, sy, starSize, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none bg-black"
    />
  );
}
