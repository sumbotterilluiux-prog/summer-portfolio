"use client";

import Link from "next/link";
import Image from "next/image";
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

  const activeName = navigation.find(
    (item) => !item.external && (pathname === item.href || pathname?.startsWith(item.href + "/"))
  )?.name;

  return (
    // Floats over the page; <main> is padded by --header-height so content starts below it
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 lg:px-8">
      <nav
        className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 rounded-2xl border border-border/70 bg-background/70 px-2.5 sm:gap-3 shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.18)] backdrop-blur-md sm:px-4"
        aria-label="Global"
      >
        <div className="flex shrink-0 lg:flex-1">
          <Link href="/" className="group -m-1.5 flex items-center gap-2.5 p-1.5" aria-label="Summer Botterill, home">
            <span className="relative block h-8 w-8 overflow-hidden rounded-lg transition-[transform,border-radius] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:scale-105 group-hover:rounded-full motion-reduce:transition-none">
              <Image src="/images/logo_light.png" alt="" width={32} height={32} priority className="dark:hidden" />
              <Image src="/images/logo_dark.png" alt="" width={32} height={32} priority className="hidden dark:block" />
            </span>
          </Link>
        </div>
        <div
          className="relative flex gap-0.5 rounded-full border border-border bg-secondary p-1"
        >
          {navigation.map((item) => {
            const isActive = item.name === activeName;

            const className = `relative whitespace-nowrap rounded-full px-2 py-1.5 text-[13px] font-medium transition-colors sm:px-4 sm:text-sm ${
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`;
            // The pill marks the current page and slides over when the page changes
            const pill = isActive && (
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

            if (item.external) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group isolate ${className}`}
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
