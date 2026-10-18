export function Quote({
  children,
  author,
  role,
}: {
  children: React.ReactNode;
  author?: string;
  role?: string;
}) {
  return (
    <figure className="not-prose my-10 max-w-3xl border-l border-border pl-6">
      <blockquote className="font-serif text-2xl leading-snug text-foreground sm:text-[1.75rem]">
        {children}
      </blockquote>
      {author && (
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {author}
          {role && ` · ${role}`}
        </figcaption>
      )}
    </figure>
  );
}
