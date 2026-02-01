import { Metadata } from "next";
// import Image from "next/image"; // Uncomment when adding images

export const metadata: Metadata = {
  title: "About",
};

// Experience data - chronological order (oldest to newest for left-to-right display)
const experience = [
  {
    company: "Orchid B",
    role: "UX/UI Designer",
    period: "Aug 2022 – Jan 2023",
    description: "B2B SaaS Business admin platform",
    type: "Web App",
  },
  {
    company: "Despark",
    role: "UX/UI Designer",
    period: "Feb 2023 – Apr 2023",
    description: "Web3 platform",
    type: "Web App",
  },
  {
    company: "Sustainable Trades",
    role: "UX/UI Designer",
    period: "Jun 2023 – Nov 2023",
    description: "Retail eCommerce web platform",
    type: "Web App",
  },
  {
    company: "Najaa",
    role: "UX/UI Designer",
    period: "Dec 2023 – Mar 2024",
    description: "Mental health iOS application",
    type: "Mobile App",
  },
  {
    company: "Anheuser-Busch",
    role: "Product Designer",
    period: "May 2024 – Present",
    description: "Various enterprise applications",
    type: "Enterprise",
  },
];

export default function AboutPage() {
  return (
    <div className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-content-lg">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          A <span className="text-lg text-accent">little</span> about me
        </h1>

        {/* Bio */}
        <section>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm Summer, a product designer who believes the best design work happens when you truly understand the people you're designing for.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether I'm conducting research to uncover what users are actually trying to
              accomplish or redesigning a platform based on deep user insights, I lead with curiosity and
              strategic thinking. I've learned that the most impactful design solutions come from understanding
              the "why" before jumping to the "what."
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
             My journey started with hands-on execution at early-stage startups, where I learned to move fast,
             adapt to changing requirements, and deliver measurable outcomes. Those experiences building features
             from the ground up gave me a foundation in craft and process that still shapes how I work today.
             Now, I'm focused on the bigger picture: leading research initiatives, influencing product strategy,
             and designing systems that scale.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
             I'm drawn to problems that require both analytical thinking and creative problem-solving;
             the kind where success means understanding user behavior, business goals, and technical
             constraints all at once.
            </p>
          </div>
        </section>

        {/* Experience - Horizontal Timeline */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight">Experience</h2>

          {/* Horizontal timeline container */}
          <div className="mt-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 right-0 top-[7px] h-0.5 bg-border" />

              {/* Timeline items - evenly distributed */}
              <div className="grid grid-cols-5 gap-2">
                {experience.map((exp, index) => {
                  const isLast = index === experience.length - 1;
                  return (
                    <div key={exp.company} className="relative flex flex-col items-start">
                      {/* Timeline dot */}
                      <div className="relative z-10 mb-4">
                        <div className={`h-4 w-4 rounded-full border-2 border-accent ${isLast ? 'bg-accent' : 'bg-background'}`} />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap items-center gap-1">
                          <h4 className="font-semibold text-foreground text-sm">{exp.company}</h4>
                          {isLast && (
                            <span className="rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-medium text-accent-foreground">
                              Current
                            </span>
                          )}
                        </div>
                        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent w-fit">
                          {exp.type}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                        <p className="text-xs text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Outside of Work - Bento Box */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight">When I'm offline</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Outside of work, I'm usually exploring new places or finding events that keep life interesting, because I think the best designers stay curious about the world beyond their screens.
          </p>

          {/* Bento Box Grid */}
          <div className="mt-8 grid grid-cols-2 grid-rows-[1fr_1fr] gap-4 md:grid-cols-5 md:grid-rows-2" style={{ gridAutoRows: '1fr' }}>
            {/* Image 1 - Tall left (wider) */}
            <div className="col-span-1 row-span-2 min-h-[400px] overflow-hidden rounded-2xl bg-secondary/50 border border-border md:col-span-2 md:min-h-[500px]">
              {/* Replace with your image */}
              {/* <Image
                src="/images/outside-1.jpg"
                alt="Outside of work"
                width={400}
                height={500}
                className="h-full w-full object-cover"
              /> */}
            </div>

            {/* Image 2 - Top middle */}
            <div className="col-span-1 min-h-[180px] overflow-hidden rounded-2xl bg-secondary/50 border border-border md:min-h-[240px]">
              {/* Replace with your image */}
              {/* <Image
                src="/images/outside-2.jpg"
                alt="Outside of work"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              /> */}
            </div>

            {/* Image 3 - Top right (spans 2 on desktop) */}
            <div className="col-span-1 min-h-[180px] overflow-hidden rounded-2xl bg-secondary/50 border border-border md:col-span-2 md:min-h-[240px]">
              {/* Replace with your image */}
              {/* <Image
                src="/images/outside-3.jpg"
                alt="Outside of work"
                width={600}
                height={300}
                className="h-full w-full object-cover"
              /> */}
            </div>

            {/* Image 4 - Bottom right (spans 3 on desktop) */}
            <div className="col-span-2 min-h-[180px] overflow-hidden rounded-2xl bg-secondary/50 border border-border md:col-span-3 md:min-h-[240px]">
              {/* Replace with your image */}
              {/* <Image
                src="/images/outside-4.jpg"
                alt="Outside of work"
                width={900}
                height={400}
                className="h-full w-full object-cover"
              /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
