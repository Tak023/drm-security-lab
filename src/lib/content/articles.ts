import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { KnowledgeBaseArticle, ArticleCategory, DifficultyLevel } from '@/types';

const contentDirectory = path.join(process.cwd(), 'src/content/knowledge-base');

export interface ArticleFrontmatter {
  title: string;
  description: string;
  category: ArticleCategory;
  difficulty: DifficultyLevel;
  estimatedReadTime: number;
  prerequisites?: string[];
  tags?: string[];
  relatedArticles?: string[];
  order?: number;
}

export interface ArticleData {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}

/**
 * Get all article slugs for static generation
 */
export function getArticleSlugs(): string[] {
  try {
    const files = fs.readdirSync(contentDirectory);
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''));
  } catch {
    return [];
  }
}

/**
 * Get article data by slug
 */
export function getArticleBySlug(slug: string): ArticleData | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as ArticleFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

/**
 * Get all articles with metadata (for listing)
 */
export function getAllArticles(): ArticleData[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is ArticleData => article !== null);

  // Sort by order if available, then by title
  return articles.sort((a, b) => {
    const orderA = a.frontmatter.order ?? 999;
    const orderB = b.frontmatter.order ?? 999;
    if (orderA !== orderB) return orderA - orderB;
    return a.frontmatter.title.localeCompare(b.frontmatter.title);
  });
}

/**
 * Get articles by category
 */
export function getArticlesByCategory(category: ArticleCategory): ArticleData[] {
  return getAllArticles().filter(
    (article) => article.frontmatter.category === category
  );
}

/**
 * Get related articles
 */
export function getRelatedArticles(slug: string, limit = 3): ArticleData[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];

  const relatedSlugs = article.frontmatter.relatedArticles || [];
  const relatedArticles = relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is ArticleData => a !== null)
    .slice(0, limit);

  // If not enough related articles, fill with same category
  if (relatedArticles.length < limit) {
    const sameCategoryArticles = getArticlesByCategory(article.frontmatter.category)
      .filter((a) => a.slug !== slug && !relatedSlugs.includes(a.slug))
      .slice(0, limit - relatedArticles.length);
    relatedArticles.push(...sameCategoryArticles);
  }

  return relatedArticles;
}

/**
 * Convert article data to KnowledgeBaseArticle type
 */
export function toKnowledgeBaseArticle(data: ArticleData): KnowledgeBaseArticle {
  return {
    id: data.slug,
    slug: data.slug,
    title: data.frontmatter.title,
    description: data.frontmatter.description,
    category: data.frontmatter.category,
    difficulty: data.frontmatter.difficulty,
    estimatedReadTime: data.frontmatter.estimatedReadTime,
    prerequisites: data.frontmatter.prerequisites || [],
    tags: data.frontmatter.tags || [],
    content: data.content,
    lastUpdated: new Date().toISOString(),
    relatedArticles: data.frontmatter.relatedArticles || [],
  };
}
