import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/mdx";
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
import { MobileGifShowcase } from "@/components/ui/MobileGifShowcase";

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
  MobileGifShowcase,
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
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transition-none"
            >
              ←
            </span>
            <span className="link-draw">All work</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <p className="mt-12 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {caseStudy.domain}
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {caseStudy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              {caseStudy.excerpt}
            </p>

            {/* Hero Image - Below excerpt, above metadata for non-confidential case studies */}
            {!caseStudy.confidential && (caseStudy.slug === "orchid-b" || caseStudy.slug === "sustainable-trades" || caseStudy.slug === "najaa") && (
              <div className="mt-12">
                <CaseStudyHero slug={caseStudy.slug} />
              </div>
            )}

            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-border py-6 md:grid-cols-4">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Company</dt>
                <dd className="mt-1.5 text-[15px]">{caseStudy.company || caseStudy.domain}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Role</dt>
                <dd className="mt-1.5 text-[15px]">{caseStudy.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Timeline</dt>
                <dd className="mt-1.5 text-[15px]">{caseStudy.timeframe}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Reading time</dt>
                <dd className="mt-1.5 text-[15px]">{caseStudy.readingTime}</dd>
              </div>
            </dl>

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
          </header>

          {/* Content: running text keeps a readable measure, visuals use the full width */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-h2:mb-4 prose-h2:mt-20 prose-h2:text-3xl prose-h3:mt-8 prose-h3:text-xl prose-li:marker:text-muted-foreground [&>:is(p,ul,ol,h2,h3,h4,blockquote)]:max-w-3xl [&>h2+p]:mt-0 [&>h2+div]:mt-0 [&>h2+h3]:mt-3">
            <MDXRemote source={caseStudy.content} components={components} />
          </div>

          {/* Footer CTA - only show for confidential case studies */}
          {caseStudy.confidential && (
            <div className="mt-24 rounded-3xl border border-border bg-secondary p-8 sm:p-12">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Want to learn more?
              </p>
              <h2 className="mt-3 max-w-xl text-balance text-3xl font-medium tracking-[-0.025em]">
                I can walk you through the details that aren&apos;t public.
              </h2>
              <p className="mt-3 max-w-xl text-lg text-muted-foreground">
                I'd be happy to walk through this project in more detail and discuss
                how my approach could benefit your team.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[15px] font-medium text-background transition-shadow hover:shadow-[0_10px_24px_-12px_hsl(var(--foreground)/0.6)]"
              >
                Get in touch
                <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                  →
                </span>
              </Link>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
