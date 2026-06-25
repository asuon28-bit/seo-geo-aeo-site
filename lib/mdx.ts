import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  author?: string;
  tags?: string[];
  faq?: Array<{ q: string; a: string }>;
  howto?: { steps: Array<{ name: string; text: string }>; totalTime?: string };
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  html: string;
};

const ensureDir = () => {
  if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true });
};

export function getAllSlugs(): string[] {
  ensureDir();
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}

export function getPost(slug: string): Post | null {
  ensureDir();
  const candidates = [
    path.join(POSTS_DIR, `${slug}.md`),
    path.join(POSTS_DIR, `${slug}.mdx`),
  ];
  const file = candidates.find((p) => fs.existsSync(p));
  if (!file) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;
  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
    html,
  };
}

export function getAllPosts(): Post[] {
  return getAllSlugs()
    .map((slug) => getPost(slug))
    .filter((p): p is Post => p !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}
