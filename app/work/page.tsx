import { Metadata } from "next";
import { getCaseStudies } from "@/lib/mdx";
import { WorkGrid } from "@/components/work/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Product design case studies showcasing enterprise UX, design systems, and data-heavy interface work.",
};

export default async function WorkPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-content-xl">
        <WorkGrid caseStudies={caseStudies} />
      </div>
    </div>
  );
}
