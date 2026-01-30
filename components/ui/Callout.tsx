export function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}) {
  const styles = {
    info: "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950",
    warning:
      "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950",
    success:
      "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950",
  };

  return (
    <div
      className={`my-6 rounded-lg border p-4 ${styles[type]}`}
      role="note"
      aria-label={`${type} callout`}
    >
      <div className="text-sm">{children}</div>
    </div>
  );
}
