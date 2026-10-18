export function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}) {
  const styles = {
    info: "border-primary/20 bg-primary/[0.06]",
    warning:
      "border-amber-300/60 bg-amber-50 dark:border-amber-800/60 dark:bg-amber-950/40",
    success:
      "border-emerald-300/60 bg-emerald-50 dark:border-emerald-800/60 dark:bg-emerald-950/40",
  };

  return (
    <div
      className={`my-8 max-w-3xl rounded-2xl border px-5 py-4 ${styles[type]}`}
      role="note"
      aria-label={`${type} callout`}
    >
      <div className="text-[15px] leading-relaxed [&_p]:my-0">{children}</div>
    </div>
  );
}
