import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  webpageSchema,
} from "@/lib/schema";
import { Faq, faqItems } from "@/components/Faq";

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย",
  description:
    "รวมคำถามที่พบบ่อยเกี่ยวกับ AutoFlow: ราคา ความปลอดภัย PDPA การใช้งาน และการยกเลิก",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: "/faq",
            title: "คำถามที่พบบ่อย",
            description: "รวมคำถามที่พบบ่อยเกี่ยวกับ AutoFlow",
          }),
          breadcrumbSchema([
            { name: "หน้าแรก", path: "/" },
            { name: "คำถามที่พบบ่อย", path: "/faq" },
          ]),
          faqSchema(faqItems.map((i) => ({ q: i.q, a: i.a }))),
        ]}
      />
      <section className="max-w-3xl mx-auto px-4 pt-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900">คำถามที่พบบ่อย</h1>
        <p className="article-lede mt-4 text-slate-700">
          คำตอบสำหรับคำถามที่ลูกค้าถามบ่อยที่สุด
          ครอบคลุมเรื่องราคา การใช้งาน ความปลอดภัย และ PDPA
        </p>
      </section>
      <Faq />
    </>
  );
}
