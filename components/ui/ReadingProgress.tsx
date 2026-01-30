"use client";

import { useState, useEffect } from "react";

interface ReadingProgressProps {
  slug?: string;
}

const themeColors: Record<string, { light: string; dark: string }> = {
  "orchid-b": {
    light: "hsl(293 16% 43%)", // #7A5C7D - dusty purple
    dark: "hsl(293 12% 77%)",  // #C6B8CC - dusty purple dark
  },
  "sustainable-trades": {
    light: "hsl(87 15% 43%)",  // #6F7D5C - sage green
    dark: "hsl(111 11% 59%)", // #8FA18A - sage green dark
  },
};

export function ReadingProgress({ slug }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollProgress)));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  // Get theme color based on slug, fallback to CSS variable
  const getProgressColor = () => {
    if (!mounted || !slug || !themeColors[slug]) {
      return "hsl(var(--case-accent))";
    }
    return isDark ? themeColors[slug].dark : themeColors[slug].light;
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-border">
      <div
        className="h-full transition-[width] duration-75"
        style={{
          width: `${progress}%`,
          backgroundColor: getProgressColor(),
        }}
      />
    </div>
  );
}
