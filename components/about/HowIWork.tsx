// "How I Work" interactive cards. Moved from the landing page; will be re-added on the About page.
export function HowIWork() {
  return (
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
  );
}
