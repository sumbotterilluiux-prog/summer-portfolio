"use client";

import { useEffect, useState } from "react";

interface ProductFlowDiagramProps {
  slug?: string;
}

const themeColors: Record<string, { light: { primary: string; secondary: string }; dark: { primary: string; secondary: string } }> = {
  "sustainable-trades": {
    light: {
      primary: "#6F7D5C",   // sage green
      secondary: "#A8B5A2", // light sage
    },
    dark: {
      primary: "#8FA18A",   // sage green dark
      secondary: "#5C6B57", // dark sage
    },
  },
  "orchid-b": {
    light: {
      primary: "#7A5C7D",   // dusty purple
      secondary: "#D2CDEF", // light lavender
    },
    dark: {
      primary: "#C6B8CC",   // dusty purple dark
      secondary: "#7A5C7D", // darker purple
    },
  },
  "fop-user-research": {
    light: {
      primary: "#326EA5",   // blue
      secondary: "#6F9ED6", // light blue
    },
    dark: {
      primary: "#64A0DC",   // blue dark
      secondary: "#91B9E1", // light blue dark
    },
  },
};

const steps = [
  { label: "Landing", key: "landing" },
  { label: "Onboarding", key: "onboarding" },
  { label: "Marketplace", key: "marketplace" },
  { label: "Dashboard", key: "dashboard", emphasized: true },
];

export function ProductFlowDiagram({ slug = "sustainable-trades" }: ProductFlowDiagramProps) {
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

  const colors = themeColors[slug] || themeColors["sustainable-trades"];
  const currentColors = mounted && isDark ? colors.dark : colors.light;

  return (
    <div className="not-prose my-8">
      <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
        {steps.map((step, index) => (
          <div key={step.key} className="flex items-center gap-2 md:gap-3">
            {/* Step pill */}
            <div
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: step.emphasized
                  ? currentColors.primary
                  : currentColors.secondary,
                color: step.emphasized
                  ? (isDark ? "#1a1a1a" : "#ffffff")
                  : (isDark ? "#e5e5e5" : "#374151"),
                boxShadow: step.emphasized
                  ? `0 0 0 2px var(--background), 0 0 0 4px ${currentColors.primary}`
                  : undefined,
              }}
            >
              {step.label}
            </div>

            {/* Arrow (except after last step) */}
            {index < steps.length - 1 && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 opacity-50"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Subtle label */}
      <p className="text-center text-xs text-muted-foreground mt-4 opacity-70">
        Product flow · Dashboard is the primary focus
      </p>
    </div>
  );
}
