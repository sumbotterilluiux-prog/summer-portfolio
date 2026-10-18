"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { CursorChip } from "@/components/ui/CursorChip";
import { CaseStudyThumbnail } from "@/components/ui/CaseStudyThumbnail";
import { CaseStudy } from "@/lib/mdx";

interface WorkGridProps {
  caseStudies: CaseStudy[];
}

/**
 * Case studies as a stacked deck: each card pins below the header and
 * recedes (--p: 0 → 1) as the next card slides over it.
 */
export function WorkGrid({ caseStudies }: WorkGridProps) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    let queued = false;
    const update = () => {
      queued = false;
      const items = itemRefs.current;
      items.forEach((item, i) => {
        const next = items[i + 1];
        const card = item?.firstElementChild as HTMLElement | null;
        if (!item || !next || !card) return;
        const cur = item.getBoundingClientRect();
        const nxt = next.getBoundingClientRect();
        // 0 when the next card is a full card-height below, 1 when it has landed on top
        const p = Math.min(1, Math.max(0, 1 - (nxt.top - cur.top) / cur.height));
        card.style.setProperty("--p", p.toFixed(3));
      });
    };
    const onScroll = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [reduceMotion]);

  return (
    <div>
      <div className="mb-12 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Selected work · {caseStudies.length} case studies
        </p>
        <h1 className="mt-3 text-4xl font-medium tracking-[-0.03em] sm:text-5xl">Work</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Case studies and projects showcasing product design for enterprise
          applications, design systems, and data-heavy workflows.
        </p>
      </div>

      <ol className="flex flex-col gap-6">
        {caseStudies.map((caseStudy, i) => (
          <li
            key={caseStudy.slug}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="sticky"
            style={{ top: `calc(5.5rem + ${i * 14}px)` }}
          >
            <Link
              href={`/work/${caseStudy.slug}`}
              className="group grid origin-top grid-cols-1 items-center gap-6 rounded-3xl border border-border bg-secondary p-5 shadow-[0_-12px_40px_-24px_hsl(var(--foreground)/0.35)] [--p:0] [filter:brightness(calc(1-var(--p)*0.12))] [transform:scale(calc(1-var(--p)*0.05))] sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10"
            >
              <div className="flex min-w-0 flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {caseStudy.domain}
                </p>
                <h2 className="text-balance text-2xl font-medium leading-tight tracking-[-0.025em] transition-colors group-hover:text-primary sm:text-3xl">
                  {caseStudy.title}
                </h2>
                <p className="line-clamp-3 text-muted-foreground">{caseStudy.excerpt}</p>
                <dl className="mt-2 grid grid-cols-2 gap-4 border-t border-border pt-4 text-sm">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Role</dt>
                    <dd className="mt-0.5">{caseStudy.role}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Timeline</dt>
                    <dd className="mt-0.5">{caseStudy.timeframe}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Impact</dt>
                    <dd className="mt-0.5 font-medium">{caseStudy.impact}</dd>
                  </div>
                </dl>
              </div>
              <CursorChip label="View case study">
                <CaseStudyThumbnail
                  title={caseStudy.title}
                  thumbnail={caseStudy.thumbnail}
                  thumbnailDark={caseStudy.thumbnailDark}
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="aspect-[4/3]"
                />
              </CursorChip>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
