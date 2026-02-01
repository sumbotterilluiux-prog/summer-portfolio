"use client";

import { useEffect, useState } from "react";

interface MobileGifItem {
  src: string;
  srcDark?: string;
  title: string;
  description: string;
}

interface MobileGifShowcaseProps {
  items: MobileGifItem[];
}

export function MobileGifShowcase({ items }: MobileGifShowcaseProps) {
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

  return (
    <div className="not-prose !mt-16 mb-12 flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-8">
      {items.map((item, index) => {
        const gifSrc = item.srcDark && isDark ? item.srcDark : item.src;
        return (
          <div key={index} className="flex w-full max-w-[280px] flex-col items-center">
            {/* GIF Container */}
            <div className="w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={gifSrc}
                alt={item.title}
                className="h-auto w-full"
              />
            </div>

            {/* Title and Description */}
            <div className="mt-4 text-center">
              <h4 className="text-base font-semibold text-foreground">
                {item.title}
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
