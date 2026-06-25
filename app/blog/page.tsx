import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webpageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "บทความและความรู้",
  description:
    "บทความเกี่ยวกับ automation, no-code, productivity และเครื่องมือดิจิทัลสำหรับธุรกิจไทย",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: "/blog",
            title: "บทความและความรู้",
            description: "บทความเกี่ยวกับ automation, no-code, productivity",
            type: "CollectionPage",
          }),
          breadcrumbSchema([
            { name: "หน้าแรก", path: "/" },
            { name: "บทความ", path: "/blog" },
          ]),
        ]}
      />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-slate-900">บทความและความรู้</h1>
        <p className="article-lede mt-4 text-slate-700">
          รวมบทความเกี่ยวกับ automation, no-code, productivity
          และเครื่องมือดิจิทัลสำหรับธุรกิจไทย
        </p>
        <ul className="mt-10 space-y-6">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="border border-slate-200 rounded-lg p-6 bg-white"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
              </h2>
              <p className="text-slate-600 mt-2 text-sm">
                {post.frontmatter.description}
              </p>
              <time
                dateTime={post.frontmatter.date}
                className="text-xs text-slate-500 mt-3 block"
              >
                {new Date(post.frontmatter.date).toLocaleDateString("th-TH", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </li>
          ))}
          {posts.length === 0 && (
            <li className="text-slate-500">ยังไม่มีบทความ</li>
          )}
        </ul>
      </section>
    </>
  );
}
