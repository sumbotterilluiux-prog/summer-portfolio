"use client";

import { useRef } from "react";

interface CursorChipProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps a hoverable area and shows a small label that follows the pointer.
 * Must sit inside an element with the `group` class. Hidden on touch devices
 * and skipped entirely for reduced-motion visitors (the label just stays hidden).
 */
export function CursorChip({ label, children, className = "" }: CursorChipProps) {
  const areaRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLSpanElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !areaRef.current || !chipRef.current) return;
    const rect = areaRef.current.getBoundingClientRect();
    chipRef.current.style.left = `${e.clientX - rect.left}px`;
    chipRef.current.style.top = `${e.clientY - rect.top}px`;
  };

  return (
    <div
      ref={areaRef}
      onPointerMove={handlePointerMove}
      className={`relative [@media(hover:hover)]:cursor-none motion-reduce:cursor-auto ${className}`}
    >
      {children}
      <span
        ref={chipRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 scale-0 whitespace-nowrap rounded-full bg-foreground px-3.5 py-2 text-[13px] font-medium text-background transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-100 motion-reduce:hidden [@media(hover:none)]:hidden"
      >
        {label} →
      </span>
    </div>
  );
}
