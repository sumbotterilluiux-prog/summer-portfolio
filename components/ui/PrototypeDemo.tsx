"use client";

import { useEffect, useState } from "react";

export function PrototypeDemo({
  src,
  srcDark,
  alt,
  caption,
  maxWidth = 800,
}: {
  src: string;
  srcDark?: string;
  alt: string;
  caption?: string;
  maxWidth?: number;
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
    <figure className="not-prose my-6 flex flex-col items-center">
      <div
        className="w-full overflow-hidden rounded-lg border border-border bg-secondary"
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={alt}
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        {caption || (
          <span className="flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            Prototype walkthrough
          </span>
        )}
      </figcaption>
    </figure>
  );
}
