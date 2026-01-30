# Content Checklist for Portfolio

This checklist will help you customize and populate the portfolio with your actual content.

## Before You Begin

- [ ] Update the domain name throughout the codebase (currently set to `summerbotterill.com`)
- [ ] Replace placeholder email address `summer.botterill@example.com` with your real email
- [ ] Update LinkedIn URL in Footer and Contact page
- [ ] Add your resume PDF to `public/resume.pdf`

## Images & Assets

### Required Images

- [ ] **Open Graph image** (`public/og-image.png`)
  - Dimensions: 1200x630px
  - Use for social media previews (LinkedIn, Twitter, etc.)
  - Should include your name and tagline

- [ ] **Resume PDF** (`public/resume.pdf`)
  - Current, up-to-date resume
  - Linked from Home and About pages

### Case Study Images

For each case study, gather:

- [ ] Hero/cover image (optional)
- [ ] Before/after screenshots
- [ ] User flow diagrams
- [ ] Design system components
- [ ] Wireframes or prototypes
- [ ] Research artifacts (sanitized)
- [ ] Data visualizations or metrics

**Image Guidelines:**
- Save in `public/images/` with descriptive names
- Use PNG or WebP format
- Optimize for web (compress before uploading)
- Recommended max width: 1200-1600px
- Always include meaningful alt text

## Homepage Content

### Hero Section

- [ ] Verify positioning line is accurate
- [ ] Update key strengths chips if needed
- [ ] Ensure intro paragraph reflects your current role/focus

### Metrics Row

Current metrics:
- +20 pts NPS improvement
- 80% underutilized features identified
- 10+ products design system adoption

- [ ] Replace with your actual metrics (if different)
- [ ] Ensure metrics are accurate and verifiable
- [ ] Add context if metric needs explanation

### How I Work Section

- [ ] Review and customize the 4 principles
- [ ] Ensure they reflect your actual approach
- [ ] Add or remove principles as needed

### Experience Section

- [ ] Update company logos or names
- [ ] Add any additional companies if relevant

## Case Studies

You need to create or update 3 case studies. For each one:

### Case Study 1: M360 User Research

**What to update:**
- [ ] Title (if different project)
- [ ] All metrics and outcomes
- [ ] User interview count and details
- [ ] Research methods used
- [ ] Key findings and insights
- [ ] Replace placeholder quotes with real ones (or sanitized versions)
- [ ] Add relevant images and diagrams

**Content to provide:**
- [ ] Problem statement (2-3 paragraphs)
- [ ] User context and personas
- [ ] Research process and methods
- [ ] Key findings (3-5 insights)
- [ ] Impact and outcomes
- [ ] Lessons learned

### Case Study 2: M360 Image Capture

**What to update:**
- [ ] Feature name and description
- [ ] Actual NPS improvement or other metrics
- [ ] Timeline and team composition
- [ ] Design decisions and rationale
- [ ] Before/after workflows
- [ ] Replace placeholder user quotes
- [ ] Add screenshots or mockups

**Content to provide:**
- [ ] Problem and context
- [ ] Solution approach
- [ ] Design process (research → prototype → test → iterate)
- [ ] Technical constraints
- [ ] Launch strategy
- [ ] Results and impact

### Case Study 3: Design System Adoption

**What to update:**
- [ ] Number of products (if not 10+)
- [ ] Guild details and structure
- [ ] Component count and types
- [ ] Governance model specifics
- [ ] Adoption metrics
- [ ] Team size and structure

**Content to provide:**
- [ ] Design system context and scope
- [ ] Guild or governance structure
- [ ] Adoption strategy
- [ ] Component library examples (if not confidential)
- [ ] Collaboration stories
- [ ] Impact on team velocity and quality

## Additional Case Studies (Optional)

If you want to add more case studies:

1. [ ] Create new MDX file in `content/case-studies/`
2. [ ] Follow the frontmatter structure from existing case studies
3. [ ] Include all required sections (see README for structure)
4. [ ] Add relevant tags for filtering
5. [ ] Set `featured: true` for up to 3 case studies to show on homepage

## About Page

- [ ] Update bio to reflect current position and goals
- [ ] Add or remove experience entries
- [ ] Update skills lists (Design and Tools sections)
- [ ] Verify "What I'm Looking For" section matches your goals
- [ ] Customize values to reflect your design principles

## Leadership Page

### Design Guild Section

- [ ] Update team size and structure
- [ ] Customize operating model details
- [ ] Add specific outcomes or metrics
- [ ] Replace generic examples with specific initiatives

### Design Systems Section

- [ ] Update component count if different
- [ ] Describe your specific governance model
- [ ] Add adoption strategies you actually used
- [ ] Include collaboration examples

### Ways of Working Section

- [ ] Customize design principles to reflect your actual principles
- [ ] Update mentorship focus areas
- [ ] Add any additional leadership activities

## Contact Page

- [ ] Update email address (multiple places)
- [ ] Verify LinkedIn URL
- [ ] Update location if not Toronto
- [ ] Adjust "About Confidential Work" message if needed

## Confidentiality & Sanitization

For each case study with confidential information:

- [ ] Replace actual product names with generic ones (if needed)
- [ ] Redact proprietary metrics or use ranges (e.g., "10-25% improvement")
- [ ] Remove specific screenshots that reveal confidential UI
- [ ] Generalize user quotes to remove identifying information
- [ ] Add confidentiality callout boxes where appropriate
- [ ] Include "Contact me for full walkthrough" CTA

**Safe to include:**
- Sanitized workflows and processes
- Generic metrics and outcomes (ranges, percentages)
- Design thinking and rationale
- Lessons learned and insights
- Anonymized user quotes

**Do NOT include:**
- Exact revenue numbers
- Proprietary UI screenshots (unless approved)
- Internal product roadmaps
- Specific client/customer names (unless public)
- Confidential research data

## Metrics & Impact

### Recommended Metrics by Project Type

**User Research Projects:**
- Number of interviews/participants
- Key insights discovered
- Feature utilization rates
- Pain points identified
- Opportunity areas uncovered

**Feature Design Projects:**
- NPS/satisfaction improvement
- Task completion time reduction
- Error rate decrease
- Adoption rate
- User engagement increase

**Design Systems Projects:**
- Number of products/teams adopting
- Component library size
- Design-to-dev handoff time improvement
- Consistency improvements
- Onboarding time reduction

### How to Present Metrics

- [ ] Use specific numbers when possible ("+20 NPS points")
- [ ] Use ranges when exact numbers are confidential ("10-25% improvement")
- [ ] Provide context ("from baseline of X to Y")
- [ ] Explain what the metric means
- [ ] Focus on user and business impact, not just output

## Final Review Checklist

Before deploying:

- [ ] All placeholder text replaced
- [ ] All images added and optimized
- [ ] All links work (internal and external)
- [ ] Contact information is correct
- [ ] Resume is current and linked
- [ ] Case studies are proofread
- [ ] Confidential information is properly sanitized
- [ ] Metrics are accurate and defensible
- [ ] Dark mode looks good
- [ ] Mobile responsive design looks good
- [ ] Accessibility tested (keyboard navigation, screen reader)
- [ ] SEO meta tags are correct
- [ ] Open Graph image displays correctly on social media

## Testing Checklist

- [ ] Test all navigation links
- [ ] Test dark mode toggle
- [ ] Test case study filtering on Work page
- [ ] Test contact form (opens email client)
- [ ] Test resume download
- [ ] Test on mobile device
- [ ] Test on different browsers
- [ ] Test with screen reader
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit (aim for 90+ on all metrics)

## SEO Checklist

- [ ] Update meta descriptions for each page
- [ ] Verify page titles are unique and descriptive
- [ ] Add alt text to all images
- [ ] Check sitemap.xml generates correctly
- [ ] Verify robots.txt is correct
- [ ] Test Open Graph preview on LinkedIn/Twitter
- [ ] Submit sitemap to Google Search Console (after deploy)

---

## Need Help?

Refer to the README.md for:
- How to add/edit case studies
- How to customize colors and typography
- How to deploy to Vercel
- Troubleshooting common issues
