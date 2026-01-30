import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/mdx";
import { TagChip } from "@/components/ui/TagChip";
import { Callout } from "@/components/ui/Callout";
import { Quote } from "@/components/ui/Quote";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { OutcomeCard, OutcomeCardGrid } from "@/components/ui/OutcomeCard";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { HeroImage } from "@/components/ui/HeroImage";
import { FeatureThumbnail } from "@/components/ui/FeatureThumbnail";
import { ReadingProgress } from "@/components/ui/ReadingProgress";
import { CaseStudyHero } from "@/components/ui/CaseStudyHero";
import { ProblemIllustration } from "@/components/ui/ProblemIllustration";
import { ProblemSection } from "@/components/ui/ProblemSection";
import { ProductFlowDiagram } from "@/components/ui/ProductFlowDiagram";
import { ScrollableImage } from "@/components/ui/ScrollableImage";
import { PrototypeDemo } from "@/components/ui/PrototypeDemo";
import { OutcomeWithFeedback } from "@/components/ui/OutcomeWithFeedback";

const components = {
  Callout,
  Quote,
  ImageFrame,
  BeforeAfterSlider,
  OutcomeCard,
  OutcomeCardGrid,
  SectionDivider,
  HeroImage,
  FeatureThumbnail,
  ProblemIllustration,
  ProblemSection,
  ProductFlowDiagram,
  ScrollableImage,
  PrototypeDemo,
  OutcomeWithFeedback,
};

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.excerpt,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <ReadingProgress slug={caseStudy.slug} />
      <article className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-content-lg">
          {/* Back Link */}
          <Link
            href="/work"
            className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Work
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-primary lg:text-6xl">
              {caseStudy.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-foreground lg:text-2xl">
              {caseStudy.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <TagChip key={tag}>{tag}</TagChip>
              ))}
            </div>

            {/* Hero Image - Below tags, above metadata for non-confidential case studies */}
            {!caseStudy.confidential && (caseStudy.slug === "orchid-b" || caseStudy.slug === "sustainable-trades" || caseStudy.slug === "najaa") && (
              <div className="mt-10">
                <CaseStudyHero slug={caseStudy.slug} />
              </div>
            )}

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Company
                </div>
                <div className="mt-1 text-base font-medium text-foreground">
                  {caseStudy.company || caseStudy.domain}
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Role
                </div>
                <div className="mt-1 text-base font-medium text-foreground">
                  {caseStudy.role}
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Timeline
                </div>
                <div className="mt-1 text-base font-medium text-foreground">
                  {caseStudy.timeframe}
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Team
                </div>
                <div className="mt-1 text-base font-medium text-foreground">
                  {caseStudy.team || caseStudy.readingTime}
                </div>
              </div>
            </div>

            {caseStudy.confidential && (
              <div className="mt-10">
                <Callout type="info">
                  <strong>Confidentiality Note:</strong> This case study contains
                  sanitized information to respect confidentiality agreements.
                  Specific metrics, screenshots, and proprietary details have been
                  generalized or redacted.{" "}
                  <Link href="/contact" className="font-medium underline">
                    Contact me
                  </Link>{" "}
                  for a deeper walkthrough.
                </Callout>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-h2:mb-3 prose-h2:mt-16 prose-h2:text-3xl prose-h3:mt-4 prose-h3:text-xl prose-h3:text-foreground [&>h2+p]:mt-0 [&>h2+div]:mt-0 [&>h2+h3]:mt-3">
            <MDXRemote source={caseStudy.content} components={components} />
          </div>

          {/* Footer CTA - only show for confidential case studies */}
          {caseStudy.confidential && (
            <div className="mt-20 rounded-lg border border-border bg-secondary/50 p-10 text-center">
              <h2 className="text-3xl font-bold text-primary">Want to learn more?</h2>
              <p className="mt-3 text-lg text-muted-foreground">
                I'd be happy to walk through this project in more detail and discuss
                how my approach could benefit your team.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-lg bg-accent px-8 py-4 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Get in Touch
              </Link>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
