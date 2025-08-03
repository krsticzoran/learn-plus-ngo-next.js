// components/ui/custom-button.tsx
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const baseStyles =
  "rounded-full py-3 px-6 duration-300 cursor-pointer text-foreground";

const variants: Record<Variant, string> = {
  primary: "bg-green-muted hover:bg-green-muted/70",
  secondary: "bg-background-muted hover:bg-background-muted/50",
};

export default function CustomButton({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: CustomButtonProps) {
  const combined = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
}
