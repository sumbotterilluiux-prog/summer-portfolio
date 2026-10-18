import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        // Content width constraints for better readability and layout
        'content-sm': '42rem',    // 672px - Narrow forms (contact page)
        'content': '56rem',       // 896px - Standard readable content width
        'content-lg': '72rem',    // 1152px - Wide content (case studies with images)
        'content-xl': '90rem',    // 1440px - Full width sections (header, footer)
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        "case-accent": {
          DEFAULT: "hsl(var(--case-accent))",
          foreground: "hsl(var(--case-accent-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "hsl(var(--foreground))",
            lineHeight: "1.75",
            a: {
              color: "hsl(var(--accent))",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              fontWeight: "500",
              "&:hover": {
                color: "hsl(var(--primary))",
              },
            },
            h1: {
              color: "hsl(var(--foreground))",
              fontWeight: "500",
              letterSpacing: "-0.03em",
            },
            h2: {
              color: "hsl(var(--foreground))",
              fontWeight: "500",
              letterSpacing: "-0.02em",
              marginTop: "2.5em",
              marginBottom: "1em",
            },
            h3: {
              color: "hsl(var(--foreground))",
              fontWeight: "500",
              letterSpacing: "-0.015em",
              marginTop: "2em",
              marginBottom: "0.75em",
            },
            h4: {
              color: "hsl(var(--foreground))",
              fontWeight: "500",
            },
            strong: {
              color: "hsl(var(--foreground))",
              fontWeight: "600",
            },
            code: {
              color: "hsl(var(--accent))",
            },
            blockquote: {
              color: "hsl(var(--foreground))",
              fontFamily: "var(--font-instrument-serif), Georgia, serif",
              fontSize: "1.5em",
              fontWeight: "400",
              lineHeight: "1.3",
              borderLeftColor: "hsl(var(--border))",
              borderLeftWidth: "1px",
              paddingLeft: "1.5rem",
            },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:last-of-type::after": { content: "none" },
            ol: {
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },
            ul: {
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },
            "ol > li": {
              paddingLeft: "0.5em",
            },
            "ul > li": {
              paddingLeft: "0.5em",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
