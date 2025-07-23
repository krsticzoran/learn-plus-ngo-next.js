import { ChevronRight } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

export default function CtaButton({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link href={href} className="w-fit">
      <Button
        type="button"
        className="text-[#CFCFF1] group font-medium !px-6 !py-3 rounded-full backdrop-blur-md bg-[linear-gradient(135deg,_#A3C2E5_0%,_#4C5B85_30%,_#4F63A0_70%,_#B6D3F5_100%)] hover:opacity-90 transition-all cursor-pointer mb-4 w-fit"
      >
        <span className="flex items-center">
          {title}
          <ChevronRight className="!w-5 !h-5 ml-[2px] mt-[2px] transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Button>
    </Link>
  );
}
