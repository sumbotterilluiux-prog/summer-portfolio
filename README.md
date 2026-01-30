# Summer Botterill — Portfolio

A production-ready portfolio website for a Senior Product Designer specializing in enterprise UX, design systems, and data-heavy workflows.

Built with Next.js 15, TypeScript, Tailwind CSS, and MDX for content management.

## Features

- ✨ Modern, clean design with dark mode support
- 📱 Fully responsive (desktop, tablet, mobile)
- ♿ Accessible (WCAG compliance, keyboard navigation, screen reader support)
- 🚀 Excellent performance (optimized images, code splitting, font loading)
- 📝 MDX-powered case studies (edit content without touching code)
- 🎨 Framer Motion animations with reduced-motion support
- 🔍 SEO optimized (meta tags, sitemap, robots.txt, JSON-LD structured data)
- 📊 Analytics-ready (pluggable Vercel/Plausible analytics)
- 🎯 Type-safe with TypeScript
- 💅 Styled with Tailwind CSS

## Project Structure

```
summer-portfolio/
├── app/                      # Next.js app router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── leadership/          # Leadership & Systems page
│   ├── work/                # Work index and case study pages
│   │   └── [slug]/          # Dynamic case study pages
│   ├── layout.tsx           # Root layout with fonts & theme
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── robots.ts            # Robots.txt configuration
│   └── sitemap.ts           # Dynamic sitemap generation
├── components/              # React components
│   ├── layout/              # Layout components (Header, Footer, ThemeProvider)
│   ├── ui/                  # Reusable UI components
│   └── work/                # Work-specific components
├── content/                 # MDX content
│   └── case-studies/        # Case study MDX files
├── lib/                     # Utilities and helpers
│   ├── mdx.ts              # MDX parsing and case study data layer
│   ├── json-ld.ts          # JSON-LD structured data
│   └── analytics.tsx        # Analytics wrapper (disabled by default)
├── public/                  # Static assets
│   └── images/             # Images for case studies
└── package.json            # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone or download the repository:

```bash
cd summer-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint
- `npm run type-check` — Run TypeScript type checking

### Adding a New Case Study

1. Create a new MDX file in `content/case-studies/`:

```bash
touch content/case-studies/my-case-study.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "Your Case Study Title"
slug: "your-case-study-slug"
domain: "Industry / Domain"
role: "Your Role"
timeframe: "Duration (e.g., 3 months)"
tags: ["Tag1", "Tag2", "Tag3"]
impact: "Key metric or outcome"
excerpt: "Brief description for cards and SEO"
confidential: true
featured: true
date: "2024-01-15"
---

## Summary

Your case study content here...
```

3. The case study will automatically appear on the Work page and be available at `/work/your-case-study-slug`.

### Editing Case Study Content

- Edit MDX files in `content/case-studies/`
- Use MDX components: `<Callout>`, `<Quote>`, `<ImageFrame>`
- Changes appear immediately in development mode

### Customizing Colors & Typography

#### Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --primary: 222 47% 11%;
  /* ... more colors */
}

.dark {
  --background: 222 47% 11%;
  --foreground: 210 40% 98%;
  /* ... dark mode colors */
}
```

#### Typography

Edit font configuration in `app/layout.tsx`:

```typescript
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```

Update Tailwind config in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ["var(--font-inter)", "system-ui", "sans-serif"],
}
```

### Adding Images

1. Add images to `public/images/`
2. Reference in MDX:

```mdx
<ImageFrame
  src="/images/your-image.png"
  alt="Description"
  caption="Optional caption"
/>
```

## Content Management

### Case Study Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Case study title |
| `slug` | string | Yes | URL slug (must be unique) |
| `domain` | string | Yes | Industry or domain |
| `role` | string | Yes | Your role on the project |
| `timeframe` | string | Yes | Project duration |
| `tags` | string[] | Yes | Categories for filtering |
| `impact` | string | Yes | Key outcome or metric |
| `excerpt` | string | Yes | Short description (2-3 sentences) |
| `confidential` | boolean | Yes | Show confidentiality notice |
| `featured` | boolean | Yes | Display on home page |
| `date` | string | Yes | Publication date (YYYY-MM-DD) |

### Available MDX Components

```mdx
<!-- Callout box -->
<Callout type="info|warning|success">
  Content here
</Callout>

<!-- Quote with attribution -->
<Quote author="Name" role="Title">
  Quote text here
</Quote>

<!-- Image with caption -->
<ImageFrame
  src="/images/example.png"
  alt="Description"
  caption="Optional caption"
  width={1200}
  height={800}
/>
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy
4. Update the domain in these files:
   - `app/layout.tsx` (metadata)
   - `app/sitemap.ts`
   - `app/robots.ts`
   - `lib/json-ld.ts`

### Environment Variables

No environment variables required by default. To enable analytics:

#### Vercel Analytics

1. Install: `npm install @vercel/analytics`
2. Uncomment code in `lib/analytics.tsx`
3. Deploy (automatically enabled on Vercel)

#### Plausible Analytics

1. Add your domain to `lib/analytics.tsx`
2. Uncomment the Plausible script
3. Deploy

### Build Optimization

The site is optimized for production:

- Image optimization via `next/image`
- Font optimization with `next/font`
- Automatic code splitting
- Static generation where possible
- Sitemap and robots.txt generation

## SEO & Social Media

### Open Graph Images

Add `og-image.png` (1200x630px) to the `public/` directory for social media previews.

### Updating Personal Information

Update in multiple files:

- `app/layout.tsx` — Meta tags and titles
- `components/layout/Footer.tsx` — Social links and contact info
- `lib/json-ld.ts` — Structured data
- `app/about/page.tsx` — Bio and experience
- `app/contact/page.tsx` — Contact information

## Accessibility

The site includes:

- Semantic HTML
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Skip-to-content link
- High contrast colors
- Screen reader friendly
- Reduced motion support for animations

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Type Errors

```bash
# Check for type errors
npm run type-check

# Common fix: ensure all MDX files have proper frontmatter
```

### Styling Issues

- Clear browser cache
- Check Tailwind classes are correct
- Verify dark mode toggle is working
- Check CSS variable values in `globals.css`

## License

This portfolio is for personal use. Feel free to use as inspiration, but please don't copy directly.

## Support

For questions or issues with the portfolio code, please open an issue on GitHub.

---

**Built with Next.js** — Deployed on Vercel
