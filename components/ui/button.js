import Link from "next/link";

export default function Button() {
  return (
    <Link href="/contact">
      <button className="py-4 px-8 mt-12 mb-10 bg-secondary rounded-md text-white text-base font-semibold flex items-center justify-center space-x-2">
        <span>Contact Us</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    </Link>
  );
}
