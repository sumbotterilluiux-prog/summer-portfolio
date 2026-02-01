import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content/case-studies");

export interface CaseStudyFrontmatter {
  title: string;
  slug: string;
  domain: string;
  company?: string;
  role: string;
  timeframe: string;
  team?: string;
  tags: string[];
  impact: string;
  excerpt: string;
  confidential: boolean;
  featured: boolean;
  hidden?: boolean;
  date: string;
  thumbnail?: string;
  thumbnailDark?: string;
}

export interface CaseStudy extends CaseStudyFrontmatter {
  content: string;
  readingTime: string;
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const files = fs.readdirSync(contentDirectory);

  const caseStudies = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);
      const { text: readingTimeText } = readingTime(content);

      return {
        ...(data as CaseStudyFrontmatter),
        content,
        readingTime: readingTimeText,
      };
    });

  // Sort by date, newest first, and filter out hidden studies
  return caseStudies
    .filter((cs) => !cs.hidden)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get all case studies including hidden ones (for direct access)
async function getAllCaseStudiesIncludingHidden(): Promise<CaseStudy[]> {
  const files = fs.readdirSync(contentDirectory);

  const caseStudies = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);
      const { text: readingTimeText } = readingTime(content);

      return {
        ...(data as CaseStudyFrontmatter),
        content,
        readingTime: readingTimeText,
      };
    });

  return caseStudies.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | null> {
  const caseStudies = await getAllCaseStudiesIncludingHidden();
  return caseStudies.find((cs) => cs.slug === slug) || null;
}

export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  const caseStudies = await getCaseStudies();
  return caseStudies.filter((cs) => cs.featured);
}

export async function getCaseStudiesByTag(tag: string): Promise<CaseStudy[]> {
  const caseStudies = await getCaseStudies();
  return caseStudies.filter((cs) => cs.tags.includes(tag));
}

export async function getAllTags(): Promise<string[]> {
  const caseStudies = await getCaseStudies();
  const tags = new Set<string>();
  caseStudies.forEach((cs) => cs.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}
