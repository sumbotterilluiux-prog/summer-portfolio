import Image from "next/image";

interface CaseStudyThumbnailProps {
  title: string;
  thumbnail?: string;
  thumbnailDark?: string;
  sizes: string;
  className?: string;
}

export function CaseStudyThumbnail({
  title,
  thumbnail,
  thumbnailDark,
  sizes,
  className = "aspect-[16/10]",
}: CaseStudyThumbnailProps) {
  const imageClass =
    "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-secondary ring-1 ring-inset ring-border ${className}`}
    >
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes={sizes}
          quality={90}
          className={`${imageClass} ${thumbnailDark ? "dark:hidden" : ""}`}
        />
      )}
      {thumbnailDark && (
        <Image
          src={thumbnailDark}
          alt={title}
          fill
          sizes={sizes}
          quality={90}
          className={`${imageClass} hidden dark:block`}
        />
      )}
    </div>
  );
}
