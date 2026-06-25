import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
        {site.tagline}
      </h1>
      <p className="article-lede mt-6 text-lg text-slate-700 max-w-2xl mx-auto">
        {site.description}
      </p>
      <div className="mt-8 flex gap-3 justify-center">
        <Link
          href="/pricing"
          className="bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800"
        >
          เริ่มทดลองใช้ฟรี
        </Link>
        <Link
          href="/faq"
          className="border border-slate-300 px-6 py-3 rounded-md font-medium text-slate-900 hover:bg-slate-50"
        >
          คำถามที่พบบ่อย
        </Link>
      </div>
    </section>
  );
}
