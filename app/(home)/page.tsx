import Link from "next/link";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { getFeaturedCaseStudies } from "@/lib/mdx";

export default async function Home() {
  const featuredCaseStudies = await getFeaturedCaseStudies();

  return (
    <div className="flex flex-col">
      {/* Hero Section - Inspired by Carol Chu's minimal, warm aesthetic */}
      <section className="border-b border-border/40 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-6">
            {/* Greeting with personality */}
            <h1 className="flex items-center gap-3 text-5xl font-bold tracking-tight text-primary lg:text-6xl">
              Hey there, I'm Summer
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block text-accent"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </h1>

            {/* Value proposition with warm, human tone */}
            <p className="text-xl leading-relaxed text-foreground lg:text-2xl">
              Product designer bridging research & strategy to drive user adoption and business growth.
            </p>

            {/* Detailed description */}
            <p className="text-lg leading-relaxed text-muted-foreground">
              For the past three years, I've worked on end-to-end experiences across mobile and web platforms, shaping tools that empower users and align with business KPIs. From leading research and redesign efforts to improving usability and engagement. I focus on solving real user problems through data, insights, and thoughtful designs.
            </p>

          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="border-b border-border/40 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-4xl font-bold tracking-tight text-primary">
              Featured Work
            </h2>
            <Link
              href="/work"
              className="text-sm font-medium text-accent hover:underline"
            >
              View all projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featuredCaseStudies.map((caseStudy) => (
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
      </section>

      {/* How I Work Section - Interactive Cards */}
      <section className="border-b border-border/40 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-primary">
            How I Work
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/30 p-8 transition-all hover:border-accent hover:bg-secondary/50 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-accent">
                Strip away everything that doesn't help
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                My work focuses on turning messy workflows into intuitive
                experiences by removing everything that doesn't directly help
                users do their jobs and support business goals.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/30 p-8 transition-all hover:border-accent hover:bg-secondary/50 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-accent">
                Understand the real problem first
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Utilizing research to identify pain points, usage patterns,
                and gaps between what users need and what exists. This helps
                ensure solutions address root causes, not symptoms.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/30 p-8 transition-all hover:border-accent hover:bg-secondary/50 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-accent">
                Design for consistency and scale
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                I build reusable patterns and components that work across
                products, collaborating with engineers to create documentation
                that speeds up delivery while maintaining quality.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/30 p-8 transition-all hover:border-accent hover:bg-secondary/50 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-accent">
                Measure what matters
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                I focus on metrics that reflect real user and business value:
                task completion, error reduction, feature utilization, and
                satisfaction improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
