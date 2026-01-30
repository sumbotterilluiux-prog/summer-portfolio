import { Metadata } from "next";
import { getCaseStudies, getAllTags } from "@/lib/mdx";
import { WorkFilter } from "@/components/work/WorkFilter";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Product design case studies showcasing enterprise UX, design systems, and data-heavy interface work.",
};

export default async function WorkPage() {
  const caseStudies = await getCaseStudies();
  const allTags = await getAllTags();

  return (
    <div className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-content-xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Work</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Case studies and projects showcasing product design for enterprise
            applications, design systems, and data-heavy workflows.
          </p>
        </div>

        <WorkFilter caseStudies={caseStudies} allTags={allTags} />
      </div>
    </div>
  );
}
