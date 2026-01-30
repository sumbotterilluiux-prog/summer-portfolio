"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages: Record<string, { light: string; dark: string }> = {
  "orchid-b": {
    light: "/images/case-studies/orchidb/orchidb_hero_image_light.png",
    dark: "/images/case-studies/orchidb/orchidb_hero_image_dark.png",
  },
  "sustainable-trades": {
    light: "/images/case-studies/sustainable_trades/sustainable_hero_light.png",
    dark: "/images/case-studies/sustainable_trades/sustainable_hero_dark.png",
  },
  "najaa": {
    light: "/images/case-studies/najaa/hero_image_light.png",
    dark: "/images/case-studies/najaa/hero_image_dark.png",
  },
};

export function CaseStudyHero({ slug }: { slug: string }) {
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

  const images = heroImages[slug];
  if (!images) return null;

  const imageSrc = mounted && isDark ? images.dark : images.light;

  return (
    <figure className="mb-8 mt-4">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-secondary">
        <Image
          src={imageSrc}
          alt={`${slug} hero image`}
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </figure>
  );
}
