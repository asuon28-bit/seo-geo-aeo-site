export const site = {
  name: "AutoFlow",
  legalName: "AutoFlow Co., Ltd.",
  tagline: "แพลตฟอร์ม Automation สำหรับธุรกิจไทย",
  description:
    "AutoFlow คือแพลตฟอร์ม SaaS automation ที่ช่วยให้ทีมไทยทำงานซ้ำ ๆ ได้อัตโนมัติ เชื่อมต่อกว่า 200 บริการ ไม่ต้องเขียนโค้ด ลดต้นทุนสูงสุด 70%",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "th_TH",
  language: "th",
  ogImage: "/og.png",
  logo: "/logo.png",
  founded: "2024",
  email: "hello@example.com",
  phone: "+66-2-000-0000",
  address: {
    streetAddress: "123 ถนนสุขุมวิท",
    addressLocality: "กรุงเทพมหานคร",
    postalCode: "10110",
    addressCountry: "TH",
  },
  social: {
    twitter: "https://twitter.com/example",
    facebook: "https://facebook.com/example",
    linkedin: "https://linkedin.com/company/example",
    github: "https://github.com/example",
  },
  author: {
    name: "AutoFlow Team",
    url: "https://example.com/about",
  },
  nav: [
    { href: "/", label: "หน้าแรก" },
    { href: "/pricing", label: "ราคา" },
    { href: "/faq", label: "คำถามที่พบบ่อย" },
    { href: "/blog", label: "บทความ" },
    { href: "/about", label: "เกี่ยวกับเรา" },
  ],
} as const;

export type SiteConfig = typeof site;
