"use client";
import Link from "next/link";
import { ongoingErasmusProjects as projects } from "@/data/erasmus";

export default function ScrollingText() {
  return (
    <div className="group overflow-hidden bg-transparent py-4 whitespace-nowrap text-black lg:py-6">
      <ul className="animate-scroll inline-block min-w-full">
        {[...projects, ...projects].map((project, index) => (
          <li
            key={index}
            className="pointer-events-auto mx-6 inline-block font-medium hover:underline sm:text-lg lg:text-xl"
          >
            <Link href="/erasmus" className="text-blue-muted!">
              {project.title}
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
          animation: scroll 50s linear infinite;
        }

        .group:hover .animate-scroll {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
}
