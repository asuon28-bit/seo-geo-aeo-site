import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  productSchema,
  webpageSchema,
} from "@/lib/schema";
import { Pricing, plans } from "@/components/Pricing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ราคาและแพ็กเกจ",
  description:
    "ราคา AutoFlow: Starter ฟรี, Pro 990 บาท/เดือน, Business 4,990 บาท/เดือน ไม่มีค่าธรรมเนียมแอบแฝง ยกเลิกได้ทุกเมื่อ",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: "/pricing",
            title: "ราคาและแพ็กเกจ",
            description: "ราคา 3 แพ็กเกจให้เลือกตามขนาดทีม",
          }),
          breadcrumbSchema([
            { name: "หน้าแรก", path: "/" },
            { name: "ราคา", path: "/pricing" },
          ]),
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
        ]}
      />
      <section className="max-w-3xl mx-auto px-4 pt-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900">ราคาและแพ็กเกจ</h1>
        <p className="article-lede mt-4 text-slate-700">
          ราคา {site.name} เริ่มต้นฟรี Starter, Pro 990 บาท/เดือน, Business
          4,990 บาท/เดือน — จ่ายเท่าที่ใช้ ยกเลิกได้ทุกเมื่อ ไม่มีสัญญาผูกมัด
        </p>
      </section>
      <Pricing />
    </>
  );
}
