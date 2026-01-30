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
    <blockquote className="my-6 border-l-4 border-primary pl-6 italic">
      <p className="text-lg">{children}</p>
      {author && (
        <footer className="mt-2 text-sm text-muted-foreground">
          <cite className="not-italic">
            {author}
            {role && `, ${role}`}
          </cite>
        </footer>
      )}
    </blockquote>
  );
}
