"use client";

import { useEffect, useState } from "react";

export function ScrollableImage({
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

  // 1440x1024 aspect ratio = 1.40625:1
  return (
    <figure className="not-prose my-6 flex flex-col items-center">
      <div
        className="w-full overflow-hidden rounded-lg border border-border bg-secondary"
        style={{ maxWidth: `${maxWidth}px`, aspectRatio: "1440 / 1024" }}
      >
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border hover:scrollbar-thumb-muted-foreground/50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={alt}
            className="w-full"
          />
        </div>
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
                d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-9L16.5 3m0 0L12 7.5m4.5-4.5v13.5"
              />
            </svg>
            Scroll to explore
          </span>
        )}
      </figcaption>
    </figure>
  );
}
