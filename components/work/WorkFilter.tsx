"use client";

import { useState } from "react";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { CaseStudy } from "@/lib/mdx";

interface WorkFilterProps {
  caseStudies: CaseStudy[];
  allTags: string[];
}

type GridView = "2-col" | "3-col";

export function WorkFilter({ caseStudies, allTags }: WorkFilterProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [gridView, setGridView] = useState<GridView>("2-col");

  const filteredCaseStudies = selectedTag
    ? caseStudies.filter((cs) => cs.tags.includes(selectedTag))
    : caseStudies;

  return (
    <div>
      {/* Filter and View Controls */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              selectedTag === null
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background hover:bg-secondary"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:bg-secondary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid View Toggle */}
        <div className="flex items-center gap-1 rounded-lg border border-border bg-background p-1">
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

      {/* Case Study Grid */}
      <div
        className={`grid gap-6 ${
          gridView === "2-col"
            ? "grid-cols-1 lg:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {filteredCaseStudies.map((caseStudy) => (
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

      {filteredCaseStudies.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">
          No case studies found for this filter.
        </div>
      )}
    </div>
  );
}
