"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroImage({
  src,
  srcDark,
  alt,
  caption,
}: {
  src: string;
  srcDark?: string;
  alt: string;
  caption?: string;
}) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Use light image until mounted to avoid hydration mismatch
  const imageSrc = mounted && srcDark && isDark ? srcDark : src;

  return (
    <figure className="not-prose mb-10 -mt-4">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-secondary">
        <Image
          src={imageSrc}
          alt={alt}
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
