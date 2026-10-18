"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { motion, useReducedMotion } from "framer-motion";

const navigation = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume.pdf", external: true },
];

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);

  const activeName = navigation.find(
    (item) => !item.external && (pathname === item.href || pathname?.startsWith(item.href + "/"))
  )?.name;
  // The pill sits under the hovered link, and falls back to the current page
  const pillTarget = hovered ?? activeName;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <nav
        className="mx-auto flex max-w-content-xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex shrink-0 lg:flex-1">
          <Link href="/" className="group -m-1.5 flex items-center gap-2.5 p-1.5" aria-label="Summer Botterill, home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground font-mono text-xs font-medium text-background transition-[transform,border-radius] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:scale-105 group-hover:rounded-full motion-reduce:transition-none">
              SB
            </span>
          </Link>
        </div>
        <div
          className="relative flex gap-0.5 rounded-full border border-border bg-secondary p-1"
          onMouseLeave={() => setHovered(null)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setHovered(null);
          }}
        >
          {navigation.map((item) => {
            const isActive = item.name === activeName;
            const isLit = item.name === pillTarget;
            const className = `relative whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-medium transition-colors sm:px-4 sm:text-sm ${
              isLit ? "text-foreground" : "text-muted-foreground"
            }`;
            const pill = isLit && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 -z-10 rounded-full bg-background shadow-[0_0_0_1px_hsl(var(--border))]"
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 420, damping: 32 }
                }
              />
            );
            const handlers = {
              onMouseEnter: () => setHovered(item.name),
              onFocus: () => setHovered(item.name),
            };

            if (item.external) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group isolate ${className}`}
                  {...handlers}
                >
                  {pill}
                  {item.name}{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                  >
                    ↗
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`isolate ${className}`}
                aria-current={isActive ? "page" : undefined}
                {...handlers}
              >
                {pill}
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="flex shrink-0 justify-end lg:flex-1">
          <button
            onClick={toggleTheme}
            className="group rounded-full border border-border p-2 transition-colors hover:bg-secondary"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12 motion-reduce:transition-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12 motion-reduce:transition-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
