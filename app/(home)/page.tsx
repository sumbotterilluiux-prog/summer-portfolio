import { getCaseStudies } from "@/lib/mdx";
import { DeviceSketch } from "@/components/home/DeviceSketch";
import { ToolLogos } from "@/components/home/ToolLogos";
import { CaseStudyDeck } from "@/components/work/CaseStudyDeck";

export default async function Home() {
  const caseStudies = await getCaseStudies();

  return (
    // Pulled up under the floating header so the blueprint grid runs behind it, through every section
    <div className="relative isolate -mt-[var(--header-height)] flex flex-col pt-[var(--header-height)]">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 -z-10" />

      {/* Hero */}
      <section className="border-b border-border/60 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl pb-20 pt-16 sm:px-4 sm:pt-20 lg:pb-24">
          <h1 className="text-center">
            <span className="block text-2xl font-normal tracking-[-0.02em] sm:text-3xl lg:text-4xl">
              Hi, I&apos;m Summer, a
            </span>
            <span className="mt-1 block font-serif text-6xl italic leading-[1] tracking-[-0.02em] sm:text-7xl lg:text-8xl">
              Product Designer<span className="text-primary">.</span>
            </span>
          </h1>

          <DeviceSketch className="mx-auto mt-10 max-w-2xl lg:mt-12 lg:max-w-[44rem]" />

          <p className="mx-auto mt-14 max-w-3xl text-balance text-center text-xl font-medium leading-relaxed tracking-[-0.015em] sm:text-2xl lg:mt-16 lg:text-[1.75rem] lg:leading-[1.45]">
            I design digital experiences{" "}
            <mark className="hero-highlight">around the people who use them.</mark>{" "}
            By understanding their needs, I create clearer workflows and more
            intuitive apps. By bringing usability and visual design together to
            make everyday tasks easier and deliver{" "}
            <mark className="hero-highlight">measurable business results.</mark>
          </p>

          <div className="mt-12 lg:mt-14">
            <ToolLogos />
          </div>
        </div>
      </section>

      {/* Work: the nav's "Work" link scrolls here (/#work) */}
      <section id="work" className="scroll-mt-[var(--header-height)] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center lg:mb-16">
            <h2>
              <span className="block text-2xl font-normal tracking-[-0.02em] sm:text-3xl lg:text-4xl">
                A closer look at my
              </span>
              <span className="mt-1 block font-serif text-5xl italic leading-[1] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
                Recent Work<span className="text-primary">.</span>
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground">
              Case studies across enterprise platforms, B2B SaaS, and mobile,
              from early research to shipped product.
            </p>
          </div>

          <CaseStudyDeck caseStudies={caseStudies} />
        </div>
      </section>

    </div>
  );
}
