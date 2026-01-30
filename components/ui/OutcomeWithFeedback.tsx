"use client";

import { useEffect, useState, ReactNode } from "react";

export function OutcomeWithFeedback({
  src,
  srcDark,
  alt,
  children,
}: {
  src: string;
  srcDark?: string;
  alt: string;
  children: ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

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

  const imageSrc = srcDark && isDark ? srcDark : src;

  return (
    <div className="not-prose my-8 grid gap-8 md:grid-cols-2 md:items-start">
      {/* Text content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </div>

      {/* Feedback image */}
      <div className="overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={alt}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
