"use client";

import { useState } from "react";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { CaseStudy } from "@/lib/mdx";

interface WorkGridProps {
  caseStudies: CaseStudy[];
}

type GridView = "2-col" | "3-col";

export function WorkGrid({ caseStudies }: WorkGridProps) {
  const [gridView, setGridView] = useState<GridView>("2-col");

  return (
    <div>
      {/* Header with title and grid toggle */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Work</h1>
        <div className="mt-4 flex items-start justify-between gap-4">
          <p className="text-lg text-muted-foreground">
            Case studies and projects showcasing product design for enterprise
            applications, design systems, and data-heavy workflows.
          </p>

          {/* Grid View Toggle */}
          <div className="flex shrink-0 items-center gap-1 rounded-lg border border-border bg-background p-1">
          <button
            onClick={() => setGridView("2-col")}
            className={`flex items-center justify-center rounded-md p-2 transition-colors ${
              gridView === "2-col"
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="2 column grid view"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <rect x="3" y="3" width="8" height="18" rx="1" />
              <rect x="13" y="3" width="8" height="18" rx="1" />
            </svg>
          </button>
          <button
            onClick={() => setGridView("3-col")}
            className={`flex items-center justify-center rounded-md p-2 transition-colors ${
              gridView === "3-col"
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="3 column grid view"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <rect x="2" y="3" width="5" height="18" rx="1" />
              <rect x="9.5" y="3" width="5" height="18" rx="1" />
              <rect x="17" y="3" width="5" height="18" rx="1" />
            </svg>
          </button>
          </div>
        </div>
      </div>

      {/* Case Study Grid */}
      <div
        className={`grid gap-6 ${
          gridView === "2-col"
            ? "grid-cols-1 lg:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard
            key={caseStudy.slug}
            title={caseStudy.title}
            slug={caseStudy.slug}
            domain={caseStudy.domain}
            impact={caseStudy.impact}
            role={caseStudy.role}
            timeframe={caseStudy.timeframe}
            tags={caseStudy.tags}
            excerpt={gridView === "2-col" ? caseStudy.excerpt : undefined}
            thumbnail={caseStudy.thumbnail}
            thumbnailDark={caseStudy.thumbnailDark}
            compact={gridView === "3-col"}
          />
        ))}
      </div>
    </div>
  );
}
