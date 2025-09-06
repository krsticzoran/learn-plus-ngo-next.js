import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo/logo.png";
import { clsx } from "clsx";

interface NavLogoProps {
  isDesktop?: boolean;
}

export default function NavLogo({ isDesktop = true }: NavLogoProps) {
  const content = (
    <Image
      src={Logo}
      fill
      alt="learn plus logo"
      sizes="(min-width: 1024px) 120px, 96px"
      className="object-contain"
      priority
    />
  );

  return (
    <div
      className={clsx(
        "relative flex h-8 w-24 items-center lg:h-10 lg:w-[120px]",
        isDesktop && "cursor-pointer",
      )}
    >
      {isDesktop ? (
        <Link href="/" aria-label="Learn Plus homepage">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}
