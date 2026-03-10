"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export interface CaseStudyCardProps {
  title: string;
  slug: string;
  domain: string;
  impact: string;
  role: string;
  timeframe: string;
  tags: string[];
  excerpt?: string;
  thumbnail?: string;
  thumbnailDark?: string;
  compact?: boolean;
}

export function CaseStudyCard({
  title,
  slug,
  impact,
  role,
  timeframe,
  tags,
  excerpt,
  thumbnail,
  thumbnailDark,
  compact = false,
}: CaseStudyCardProps) {
  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-full"
      >
        <Link
          href={`/work/${slug}`}
          className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background transition-all hover:border-primary hover:shadow-lg"
        >
          {thumbnail && (
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={thumbnail}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
                className={`object-cover transition-transform group-hover:scale-105 ${thumbnailDark ? "dark:hidden" : ""}`}
              />
              {thumbnailDark && (
                <Image
                  src={thumbnailDark}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  className="object-cover transition-transform group-hover:scale-105 hidden dark:block"
                />
              )}
            </div>
          )}
          <div className="flex flex-1 flex-col gap-2 p-4">
            <h3 className="text-base font-semibold tracking-tight group-hover:text-primary line-clamp-1">
              {title}
            </h3>

            <p className="mt-auto text-xs text-muted-foreground line-clamp-1">
              <span className="font-medium">Impact:</span> {impact}
            </p>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Link
        href={`/work/${slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background transition-all hover:border-primary hover:shadow-lg"
      >
        {thumbnail && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={thumbnail}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={90}
              className={`object-cover transition-transform group-hover:scale-105 ${thumbnailDark ? "dark:hidden" : ""}`}
            />
            {thumbnailDark && (
              <Image
                src={thumbnailDark}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
                className="object-cover transition-transform group-hover:scale-105 hidden dark:block"
              />
            )}
          </div>
        )}
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary">
              {title}
            </h3>

            {excerpt && (
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
            )}
          </div>

          <div className="flex items-center gap-4 border-t border-border pt-4 text-sm">
            <div>
              <span className="text-muted-foreground">Impact:</span>{" "}
              <span className="font-medium">{impact}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div>
              <span className="font-medium">Role:</span> {role}
            </div>
            <div>
              <span className="font-medium">Timeline:</span> {timeframe}
            </div>
          </div>

          {/* Spacer to push remaining space to bottom */}
          <div className="mt-auto" />
        </div>
      </Link>
    </motion.div>
  );
}
