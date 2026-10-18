import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { CaseStudy } from "@/lib/mdx";

interface WorkGridProps {
  caseStudies: CaseStudy[];
}

export function WorkGrid({ caseStudies }: WorkGridProps) {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Work</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Case studies and projects showcasing product design for enterprise
          applications, design systems, and data-heavy workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
            excerpt={caseStudy.excerpt}
            thumbnail={caseStudy.thumbnail}
            thumbnailDark={caseStudy.thumbnailDark}
          />
        ))}
      </div>
    </div>
  );
}
