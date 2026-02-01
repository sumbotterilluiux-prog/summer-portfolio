"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const themeColors: Record<string, { light: string; dark: string }> = {
  "orchid-b": {
    light: "hsl(293 16% 43%)", // dusty purple
    dark: "hsl(293 12% 77%)",
  },
  "sustainable-trades": {
    light: "hsl(87 15% 43%)",  // sage green
    dark: "hsl(111 11% 59%)",
  },
  "najaa": {
    light: "hsl(45 80% 45%)",  // golden yellow
    dark: "hsl(45 70% 55%)",
  },
};

export function OutcomeCard({
  metric,
  title,
  description,
}: {
  metric: string;
  title: string;
  description: string;
}) {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Extract slug from pathname (e.g., /work/najaa -> najaa)
  const slug = pathname?.split("/").pop() || "";
  const colors = themeColors[slug];
  const accentColor = colors
    ? (isDark ? colors.dark : colors.light)
    : "hsl(var(--case-accent))";

  return (
    <div className="flex flex-col rounded-lg border border-border bg-secondary/50 px-6 pt-6 pb-4 transition-colors hover:bg-secondary/70">
      <span
        className="text-4xl font-bold lg:text-5xl"
        style={{ color: accentColor }}
      >
        {metric}
      </span>
      <h4 className="mt-2 mb-2 text-lg font-semibold text-foreground">{title}</h4>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export function OutcomeCardGrid({
  children,
  columns = 3,
}: {
  children: React.ReactNode;
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`my-8 grid gap-6 ${
        columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
      }`}
    >
      {children}
    </div>
  );
}
