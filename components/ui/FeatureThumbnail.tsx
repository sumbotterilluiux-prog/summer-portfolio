"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageLightbox } from "./ImageLightbox";

export function FeatureThumbnail({
  src,
  srcDark,
  alt,
  caption,
  contain = false,
  zoomable = false,
}: {
  src: string;
  srcDark?: string;
  alt: string;
  caption?: string;
  contain?: boolean;
  zoomable?: boolean;
}) {
  const [isDark, setIsDark] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const imageSrc = srcDark && isDark ? srcDark : src;

  const handleClick = () => {
    if (zoomable) {
      setIsLightboxOpen(true);
    }
  };

  return (
    <>
      <figure className="not-prose my-6">
        <div
          className={`w-full overflow-hidden rounded-lg border border-border bg-secondary ${contain ? "" : "aspect-[16/10]"} ${zoomable ? "cursor-zoom-in transition-transform hover:scale-[1.01]" : ""}`}
          onClick={handleClick}
          role={zoomable ? "button" : undefined}
          tabIndex={zoomable ? 0 : undefined}
          onKeyDown={zoomable ? (e) => e.key === "Enter" && handleClick() : undefined}
          aria-label={zoomable ? `Click to enlarge ${alt}` : undefined}
        >
          <Image
            src={imageSrc}
            alt={alt}
            width={1600}
            height={1000}
            className={`w-full ${contain ? "h-auto object-contain" : "h-full object-cover"}`}
            loading="lazy"
          />
        </div>
        {(caption || zoomable) && (
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
            {caption}
            {zoomable && !caption && (
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
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                  />
                </svg>
                Click to enlarge
              </span>
            )}
            {zoomable && caption && (
              <span className="ml-2 inline-flex items-center gap-1 opacity-70">
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
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                  />
                </svg>
                Click to enlarge
              </span>
            )}
          </figcaption>
        )}
      </figure>

      {zoomable && (
        <ImageLightbox
          src={imageSrc}
          alt={alt}
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </>
  );
}
