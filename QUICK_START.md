# Quick Start Guide

Get your portfolio up and running in minutes.

## 1. Install Dependencies

```bash
cd summer-portfolio
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 3. Customize Content

### Update Personal Info

**Files to edit:**
- `app/layout.tsx` - Meta tags and site title
- `components/layout/Footer.tsx` - Email and LinkedIn
- `app/contact/page.tsx` - Contact information
- `app/about/page.tsx` - Bio and experience

**Search and replace:**
- `summer.botterill@example.com` → your email
- `summerbotterill.com` → your domain
- `linkedin.com/in/summerbotterill` → your LinkedIn

### Edit Case Studies

Edit MDX files in `content/case-studies/`:

```bash
# Open in your editor
code content/case-studies/m360-user-research.mdx
code content/case-studies/m360-image-capture.mdx
code content/case-studies/design-system-adoption.mdx
```

Replace placeholder content with your actual projects.

### Add Images

```bash
# Create images directory
mkdir -p public/images

# Add your images
# - public/og-image.png (1200x630px)
# - public/resume.pdf
# - public/images/*.png (case study images)
```

## 4. Test & Build

### Run Type Check

```bash
npm run type-check
```

### Run Linter

```bash
npm run lint
```

### Build for Production

```bash
npm run build
```

### Test Production Build Locally

```bash
npm start
```

## 5. Deploy to Vercel

### Option A: GitHub + Vercel (Recommended)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js)

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Common Tasks

### Add a New Case Study

1. Create new MDX file:
```bash
touch content/case-studies/my-project.mdx
```

2. Add frontmatter and content:
```mdx
---
title: "My Project Title"
slug: "my-project"
domain: "Industry"
role: "Your Role"
timeframe: "3 months"
tags: ["Tag1", "Tag2"]
impact: "Key metric"
excerpt: "Brief description"
confidential: true
featured: true
date: "2024-01-15"
---

## Summary
Your content here...
```

3. View at: `/work/my-project`

### Change Theme Colors

Edit `app/globals.css`:

```css
:root {
  --primary: 222 47% 11%;  /* Change to your brand color */
}
```

Use [HSL color picker](https://hslpicker.com) to find values.

### Add Google Analytics

1. Install Vercel Analytics:
```bash
npm install @vercel/analytics
```

2. Edit `lib/analytics.tsx`:
```tsx
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
export function Analytics() {
  return <VercelAnalytics />;
}
```

3. Redeploy

## Troubleshooting

### Build fails with MDX error

Check for:
- `<` characters (use `less than` instead)
- Unclosed HTML tags in MDX
- Invalid frontmatter YAML

### Dark mode not working

Clear browser cache and check:
- localStorage (should see 'theme' key)
- Toggle button in header
- CSS variables in `globals.css`

### Images not loading

Ensure:
- Images are in `public/` directory
- Paths start with `/` (e.g., `/images/photo.png`)
- Image files actually exist

### TypeScript errors

Run:
```bash
npm run type-check
```

Fix reported errors or add `// @ts-ignore` above problematic lines.

## File Structure

```
summer-portfolio/
├── app/              # Pages (edit content here)
├── components/       # React components
├── content/          # MDX case studies (edit here)
├── lib/             # Utilities
├── public/          # Images & static files (add here)
└── README.md        # Full documentation
```

## Key Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build
npm run type-check   # Check TypeScript
npm run lint         # Run ESLint
```

## Next Steps

1. ✅ Read [README.md](README.md) for full documentation
2. ✅ Review [CONTENT_CHECKLIST.md](CONTENT_CHECKLIST.md) for what to update
3. ✅ Check [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for project overview

## Need Help?

- **Next.js Issues:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **MDX Syntax:** https://mdxjs.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs

---

**You're all set!** 🎉

Start by running `npm run dev` and opening [http://localhost:3000](http://localhost:3000).
