import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost } from "@/lib/mdx";
import { JsonLd } from "@/components/JsonLd";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  howToSchema,
} from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.updated ?? post.frontmatter.date,
      authors: [post.frontmatter.author ?? "AutoFlow Team"],
      tags: post.frontmatter.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const schemas: object[] = [
    articleSchema({
      path: `/blog/${slug}`,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      datePublished: post.frontmatter.date,
      dateModified: post.frontmatter.updated,
      author: post.frontmatter.author,
      tags: post.frontmatter.tags,
      speakable: true,
    }),
    breadcrumbSchema([
      { name: "หน้าแรก", path: "/" },
      { name: "บทความ", path: "/blog" },
      { name: post.frontmatter.title, path: `/blog/${slug}` },
    ]),
  ];

  if (post.frontmatter.faq?.length) {
    schemas.push(faqSchema(post.frontmatter.faq));
  }
  if (post.frontmatter.howto?.steps?.length) {
    schemas.push(
      howToSchema({
        name: post.frontmatter.title,
        description: post.frontmatter.description,
        steps: post.frontmatter.howto.steps,
        totalTime: post.frontmatter.howto.totalTime,
      })
    );
  }

  return (
    <>
      <JsonLd data={schemas} />
      <article className="max-w-3xl mx-auto px-4 py-16">
        <header>
          <h1 className="text-4xl font-bold text-slate-900">
            {post.frontmatter.title}
          </h1>
          <p className="article-lede mt-4 text-lg text-slate-700">
            {post.frontmatter.description}
          </p>
          <div className="mt-4 text-sm text-slate-500">
            โดย {post.frontmatter.author ?? "AutoFlow Team"} ·{" "}
            <time dateTime={post.frontmatter.date}>
              {new Date(post.frontmatter.date).toLocaleDateString("th-TH", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>
        <div
          className="prose mt-10"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        {post.frontmatter.faq?.length ? (
          <section className="mt-12" aria-labelledby="post-faq-heading">
            <h2 id="post-faq-heading" className="text-2xl font-bold text-slate-900">
              คำถามที่พบบ่อยเกี่ยวกับบทความนี้
            </h2>
            <dl className="mt-6 space-y-4">
              {post.frontmatter.faq.map((item) => (
                <div
                  key={item.q}
                  className="border border-slate-200 rounded-lg p-4 bg-white"
                >
                  <dt className="font-semibold text-slate-900">{item.q}</dt>
                  <dd className="mt-2 text-slate-700 text-sm">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}
      </article>
    </>
  );
}
