import Link from "next/link";

const cats = [
  {
    title: "E-Commerce",
    desc: "Shopee · Lazada · TikTok Shop",
    href: "/blog",
    bg: "bg-[#ff4f8b]",
    emoji: "🛍️",
  },
  {
    title: "Marketing",
    desc: "LINE OA · Facebook · Email",
    href: "/blog",
    bg: "bg-[#ffe600]",
    emoji: "📣",
  },
  {
    title: "Finance & Tax",
    desc: "e-Tax · Xero · QuickBooks",
    href: "/blog",
    bg: "bg-[#2b59ff] text-white",
    emoji: "💸",
  },
  {
    title: "HR & Ops",
    desc: "Time tracking · Payroll",
    href: "/blog",
    bg: "bg-[#00d49a]",
    emoji: "🧑‍💻",
  },
];

export function Trending() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="display text-4xl md:text-5xl text-center">TRENDING NOW</h2>
      <p className="text-center text-sm uppercase tracking-widest mt-2 text-[#1f1f1f]">
        เคสที่ลูกค้าทำบ่อยที่สุดสัปดาห์นี้
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cats.map((c) => (
          <li key={c.title}>
            <Link
              href={c.href}
              className={`block ${c.bg} aspect-[4/5] p-6 border border-black hover:-translate-y-1 transition-transform`}
            >
              <div className="text-5xl">{c.emoji}</div>
              <div className="mt-auto">
                <h3 className="display text-3xl mt-32">{c.title}</h3>
                <p className="text-sm font-semibold mt-2">{c.desc}</p>
                <span className="inline-block mt-4 underline text-xs uppercase font-bold">
                  Shop now →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
