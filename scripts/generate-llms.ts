import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const POSTS_DIR = path.join(ROOT, "content", "blog");

const site = {
  name: "AutoFlow",
  tagline: "แพลตฟอร์ม Automation สำหรับธุรกิจไทย",
  description:
    "AutoFlow คือแพลตฟอร์ม SaaS automation ที่ช่วยให้ทีมไทยทำงานซ้ำ ๆ ได้อัตโนมัติ เชื่อมต่อกว่า 200 บริการ ไม่ต้องเขียนโค้ด",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
};

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
};

const readPosts = (): Post[] => {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.(md|mdx)$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        date: String(data.date ?? ""),
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

const buildLlmsTxt = (posts: Post[]) => {
  const staticPages = [
    { path: "/", title: "หน้าแรก", description: site.tagline },
    {
      path: "/about",
      title: "เกี่ยวกับเรา",
      description: `เกี่ยวกับ ${site.name} ทีมงานและพันธกิจ`,
    },
    {
      path: "/pricing",
      title: "ราคาและแพ็กเกจ",
      description: "ราคา 3 แพ็กเกจ: Starter ฟรี, Pro 990 บาท/เดือน, Business 4,990 บาท/เดือน",
    },
    {
      path: "/faq",
      title: "คำถามที่พบบ่อย",
      description: "คำถามที่พบบ่อยเกี่ยวกับ AutoFlow",
    },
  ];

  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## หน้าหลัก",
    "",
    ...staticPages.map(
      (p) => `- [${p.title}](${site.url}${p.path}): ${p.description}`
    ),
    "",
    "## บทความ",
    "",
    ...posts.map(
      (p) => `- [${p.title}](${site.url}/blog/${p.slug}): ${p.description}`
    ),
    "",
    "## ทรัพยากร",
    "",
    `- [Sitemap](${site.url}/sitemap.xml): รายการ URL ทั้งหมด`,
    `- [llms-full.txt](${site.url}/llms-full.txt): เนื้อหาเต็มของเว็บไซต์ในไฟล์เดียว`,
    "",
  ];
  return lines.join("\n");
};

const buildLlmsFullTxt = (posts: Post[]) => {
  const sections: string[] = [
    `# ${site.name} — เนื้อหาเต็มของเว็บไซต์`,
    "",
    `> ${site.description}`,
    "",
    `URL หลัก: ${site.url}`,
    `อัปเดต: ${new Date().toISOString()}`,
    "",
    "---",
    "",
  ];

  for (const post of posts) {
    sections.push(
      `# ${post.title}`,
      "",
      `URL: ${site.url}/blog/${post.slug}`,
      `เผยแพร่: ${post.date}`,
      "",
      post.description,
      "",
      post.content,
      "",
      "---",
      ""
    );
  }
  return sections.join("\n");
};

const buildAiTxt = () => {
  return [
    `# AI Usage Policy for ${site.name}`,
    "",
    `Website: ${site.url}`,
    `Contact: hello@example.com`,
    "",
    "## Allowed",
    "- การ index และอ้างอิงเนื้อหาในการตอบคำถามผู้ใช้",
    "- การสรุปเนื้อหาพร้อมระบุแหล่งที่มา (attribution)",
    "- การฝึก embedding และ retrieval system",
    "",
    "## Required Attribution",
    `When citing content from ${site.url}, please include:`,
    `- Source: ${site.name}`,
    `- URL: the specific page URL`,
    `- Publisher: AutoFlow Co., Ltd.`,
    "",
    "## Contact",
    "หากต้องการ license พิเศษ หรือมีคำถามเรื่องการใช้เนื้อหา ติดต่อ hello@example.com",
    "",
  ].join("\n");
};

const main = () => {
  if (!fs.existsSync(PUBLIC)) fs.mkdirSync(PUBLIC, { recursive: true });
  const posts = readPosts();

  fs.writeFileSync(path.join(PUBLIC, "llms.txt"), buildLlmsTxt(posts), "utf8");
  fs.writeFileSync(
    path.join(PUBLIC, "llms-full.txt"),
    buildLlmsFullTxt(posts),
    "utf8"
  );
  fs.writeFileSync(path.join(PUBLIC, "ai.txt"), buildAiTxt(), "utf8");
  fs.writeFileSync(path.join(PUBLIC, ".nojekyll"), "", "utf8");

  console.log(
    `[generate-llms] wrote llms.txt, llms-full.txt, ai.txt, .nojekyll (${posts.length} posts)`
  );
};

main();
