export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Summer Botterill",
    jobTitle: "Product Designer",
    description:
      "Product Designer specializing in enterprise UX, design systems, and data-heavy interfaces.",
    url: "https://summerbotterill.com",
    sameAs: [
      "https://linkedin.com/in/summerbotterill",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    knowsAbout: [
      "Product Design",
      "User Experience Design",
      "Design Systems",
      "Enterprise Software",
      "User Research",
      "B2B Design",
    ],
  };
}

export function getPortfolioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Summer Botterill Portfolio",
    description:
      "Portfolio showcasing product design work in enterprise UX, design systems, and data-heavy interfaces.",
    author: {
      "@type": "Person",
      name: "Summer Botterill",
    },
    url: "https://summerbotterill.com",
  };
}

export function getCaseStudyJsonLd(caseStudy: {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.excerpt,
    datePublished: caseStudy.date,
    author: {
      "@type": "Person",
      name: "Summer Botterill",
    },
    keywords: caseStudy.tags.join(", "),
    url: `https://summerbotterill.com/work/${caseStudy.slug}`,
  };
}
