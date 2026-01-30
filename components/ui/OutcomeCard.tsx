export function OutcomeCard({
  metric,
  title,
  description,
}: {
  metric: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-secondary/50 p-6 transition-colors hover:bg-secondary/70">
      <span className="text-4xl font-bold text-case-accent lg:text-5xl">
        {metric}
      </span>
      <h4 className="mt-1 mb-3 text-lg font-semibold text-foreground">{title}</h4>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export function OutcomeCardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 grid gap-6 md:grid-cols-2">
      {children}
    </div>
  );
}
