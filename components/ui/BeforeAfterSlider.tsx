"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <div className="my-10">
      {/* Outer container with background color */}
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-lg p-6"
        style={{ backgroundColor: "hsl(var(--case-accent) / 0.15)" }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* Inner container for images */}
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          {/* After Image (Right side) - shown on the right of slider */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 0 0 ${sliderPosition}%)`,
            }}
          >
            <Image
              src={afterImage}
              alt={afterAlt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1152px"
            />
          </div>

          {/* Before Image (Left side) - shown on the left of slider */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1152px"
            />
          </div>

          {/* Labels */}
          <span
            className="absolute left-4 top-4 z-20 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground transition-opacity duration-200"
            style={{ opacity: sliderPosition > 10 ? 1 : 0 }}
          >
            {beforeLabel}
          </span>
          <span
            className="absolute right-4 top-4 z-20 rounded-full bg-case-accent px-3 py-1 text-xs font-semibold text-case-accent-foreground transition-opacity duration-200"
            style={{ opacity: sliderPosition < 90 ? 1 : 0 }}
          >
            {afterLabel}
          </span>

          {/* Slider Handle */}
          <div
            className="absolute bottom-0 top-0 z-10 w-1 bg-case-accent"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-case-accent bg-background shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-case-accent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        Drag the slider to compare before and after
      </p>
    </div>
  );
}
