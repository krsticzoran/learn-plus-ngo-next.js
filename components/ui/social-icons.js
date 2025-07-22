"use client";

import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";

const icons = [
  {
    name: "Facebook",
    href: "#",
    Icon: IconBrandFacebook,
  },
  {
    name: "Instagram",
    href: "#",
    Icon: IconBrandInstagram,
  },
  {
    name: "YouTube",
    href: "#",
    Icon: IconBrandYoutube,
  },
];

export default function SocialIcons({ variant = "dark", className = "" }) {
  const bgClass =
    variant === "light" ? "bg-[#e0e6f7]" : "bg-[rgba(255,255,255,0.13)]";

  const iconClass = variant === "light" ? "text-primary" : "text-white";

  return (
    <ul className={`flex gap-6 ${className}`}>
      {icons.map(({ name, href, Icon }) => (
        <li key={name}>
          <Link
            href={href}
            rel="noreferrer"
            target="_blank"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-secondary ${bgClass} ${iconClass}`}
          >
            <span className="sr-only">{name}</span>
            <Icon className="h-6 w-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
