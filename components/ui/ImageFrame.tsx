"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ImageFrame({
  src,
  srcDark,
  alt,
  caption,
  width = 1200,
  height = 800,
  centered = false,
  minimal = false,
  maxHeight,
  maxWidth,
  className,
}: {
  src: string;
  srcDark?: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  centered?: boolean;
  minimal?: boolean;
  maxHeight?: number;
  maxWidth?: number;
  className?: string;
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
    <figure className={`my-8 ${centered ? "flex flex-col items-center" : ""} ${className || ""}`}>
      <div
        className={`overflow-hidden ${
          minimal
            ? "rounded-lg"
            : "rounded-lg border border-border bg-secondary"
        } ${centered ? "w-full max-w-5xl" : ""}`}
        style={{
          ...(maxHeight ? { maxHeight: `${maxHeight}px` } : {}),
          ...(maxWidth ? { maxWidth: `${maxWidth}px`, marginInline: "auto" } : {}),
        }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
