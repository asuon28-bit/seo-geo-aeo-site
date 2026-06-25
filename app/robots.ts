import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const aiAndSearchBots = [
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-News",
  "Google-Extended",
  "Bingbot",
  "DuckDuckBot",
  "Slurp",
  "Yandex",
  "Baiduspider",
  "Applebot",
  "Applebot-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "YouBot",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "Diffbot",
  "FacebookBot",
  "ImagesiftBot",
  "Omgilibot",
  "PetalBot",
  "Webzio-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...aiAndSearchBots.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
