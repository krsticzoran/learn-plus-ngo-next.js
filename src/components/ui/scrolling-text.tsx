"use client";
import Link from "next/link";

const links = [
  { href: "/", label: "Job Shadowing in Italy – April 2024" },
  { href: "/", label: "Digital Skills Mobility – Poland 2024" },
  { href: "/", label: "Teacher Training – Germany, September 2024" },
  { href: "/", label: "Soft Skills Development – Spain 2023" },
  { href: "/", label: "Green Education Online Seminar" },
  { href: "/", label: "Women in Tech Mobility – Belgium 2024" },
  { href: "/", label: "Youth Career Guidance – Croatia 2023" },
  { href: "/", label: "Inclusive Education Workshop – Slovenia" },
  { href: "/", label: "Leadership for Youth – Romania 2024" },
  { href: "/", label: "Non-formal Learning in Practice – Greece" },
  { href: "/", label: "Entrepreneurship for Beginners – Portugal" },
  { href: "/", label: "Digital Tools for Educators – France" },
];

export default function ScrollingText() {
  return (
    <div className="bg-transparent text-black py-4 lg:py-6 overflow-hidden whitespace-nowrap group">
      <ul className="animate-scroll inline-block min-w-full">
        {[...links, ...links].map((link, index) => (
          <li
            key={index}
            className="mx-6 text-lg lg:text-xl font-medium inline-block hover:underline pointer-events-auto"
          >
            <Link href={link.href} className="text-blue-muted">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 150s linear infinite;
        }

        .group:hover .animate-scroll {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
}
