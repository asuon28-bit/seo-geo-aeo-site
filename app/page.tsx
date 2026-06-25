import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing, plans } from "@/components/Pricing";
import { Faq, faqItems } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  productSchema,
  webpageSchema,
} from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.tagline,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: "/",
            title: `${site.name} — ${site.tagline}`,
            description: site.description,
          }),
          breadcrumbSchema([{ name: "หน้าแรก", path: "/" }]),
          productSchema({
            name: site.name,
            description: site.description,
            offers: plans.map((p) => ({
              name: p.name,
              price: p.price,
              url: `/pricing#${p.name.toLowerCase()}`,
            })),
            aggregateRating: { ratingValue: 4.8, reviewCount: 247 },
          }),
          faqSchema(faqItems.map((i) => ({ q: i.q, a: i.a }))),
        ]}
      />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
    </>
  );
}
