import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/date";

interface ErasmusProjectCardProps {
  id: string | number;
  slug: string;
  title: string;
  coverUrl: string;
  projectCode?: string;
  startDate: string;
  endDate: string;
}

export function ErasmusProjectCard({
  id,
  slug,
  title,
  coverUrl,
  projectCode,
  startDate,
  endDate,
}: ErasmusProjectCardProps) {
  return (
    <article
      key={id}
      className="group relative cursor-pointer overflow-hidden rounded-4xl bg-white"
    >
      <div className="relative h-80 lg:h-96">
        <Link href={`/erasmus/${slug}`}>
          <Image
            src={coverUrl}
            alt={`Erasmus Project ${title}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
            {projectCode && (
              <div className="absolute top-6 right-6">
                <span className="rounded-full bg-white/20 px-3 py-1 font-mono text-xs text-white/80 backdrop-blur-sm">
                  {projectCode}
                </span>
              </div>
            )}

            <div className="text-white">
              <h3 className="mb-3 text-2xl font-bold text-white drop-shadow-lg lg:text-3xl">
                {title}
              </h3>

              <p className="mb-6 text-white/90 drop-shadow-md">
                <span className="font-medium">Duration: </span>
                {formatDate(startDate)} - {formatDate(endDate)}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
}
