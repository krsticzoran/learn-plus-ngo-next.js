"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function FacebookShare() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullUrl =
        window.location.origin +
        pathname +
        (searchParams.toString() ? `?${searchParams}` : "");

      setShareUrl(fullUrl);
    }
  }, [pathname, searchParams]);

  return (
    <a
      href={
        shareUrl
          ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareUrl,
            )}`
          : "#"
      }
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-xl bg-[#1877F2] px-3 py-2 text-white hover:bg-[#145dbf]"
    >
      <FacebookSVG className="h-5 w-5 fill-white" />
      <span>Share</span>
    </a>
  );
}

function FacebookSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.03 3.66 9.2 8.44 9.93v-7.03H7.9v-2.9h2.54V9.74c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.73 8.44-4.9 8.44-9.93z" />
    </svg>
  );
}
