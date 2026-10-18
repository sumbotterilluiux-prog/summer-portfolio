import Link from "next/link";
import { CursorChip } from "@/components/ui/CursorChip";
import { CaseStudyThumbnail } from "@/components/ui/CaseStudyThumbnail";

export interface CaseStudyCardProps {
  title: string;
  slug: string;
  domain: string;
  impact: string;
  role: string;
  timeframe: string;
  excerpt?: string;
  thumbnail?: string;
  thumbnailDark?: string;
}

export function CaseStudyCard({
  title,
  slug,
  domain,
  impact,
  role,
  timeframe,
  excerpt,
  thumbnail,
  thumbnailDark,
}: CaseStudyCardProps) {
  return (
    <Link href={`/work/${slug}`} className="group block rounded-2xl">
      <CursorChip label="View case study">
        <CaseStudyThumbnail
          title={title}
          thumbnail={thumbnail}
          thumbnailDark={thumbnailDark}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </CursorChip>

      <div className="mt-5 flex flex-col gap-2">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-primary">
            {title}
          </h3>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {timeframe}
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          {role} · {domain}
        </p>

        {excerpt && (
          <p className="line-clamp-2 text-[15px] leading-relaxed text-foreground/80">{excerpt}</p>
        )}

        <p className="mt-1 text-sm">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Impact
          </span>{" "}
          <span className="font-medium">{impact}</span>
        </p>
      </div>
    </Link>
  );
}
