import Link from "next/link";

export const plans = [
  {
    name: "Starter",
    price: 0,
    priceLabel: "ฟรี",
    badge: "FREE",
    badgeBg: "bg-[#00d49a]",
    description: "เหมาะสำหรับทดลองใช้และทีมขนาดเล็ก",
    features: [
      "100 ครั้ง/เดือน",
      "เชื่อมต่อสูงสุด 3 บริการ",
      "Workflow พื้นฐาน",
      "Community support",
    ],
    cta: "เริ่มฟรี",
    href: "/pricing#starter",
  },
  {
    name: "Pro",
    price: 990,
    priceLabel: "฿990",
    sub: "/ เดือน",
    badge: "BEST SELLER",
    badgeBg: "bg-[#ff4f8b] text-white",
    description: "สำหรับทีมที่ใช้งานจริงจัง",
    features: [
      "10,000 ครั้ง/เดือน",
      "เชื่อมต่อไม่จำกัด",
      "Conditional logic",
      "Support LINE OA",
      "Log 30 วัน",
    ],
    cta: "ทดลอง 14 วัน",
    href: "/pricing#pro",
    highlighted: true,
  },
  {
    name: "Business",
    price: 4990,
    priceLabel: "฿4,990",
    sub: "/ เดือน",
    badge: "FINAL SALE",
    badgeBg: "bg-[#ffe600]",
    description: "สำหรับองค์กรขนาดกลาง-ใหญ่",
    features: [
      "100,000 ครั้ง/เดือน",
      "Workflow ไม่จำกัด",
      "SSO + Audit log",
      "SLA 99.9%",
      "Dedicated CSM",
    ],
    cta: "ติดต่อฝ่ายขาย",
    href: "/pricing#business",
  },
];

export function Pricing() {
  return (
    <section className="bg-[#f7f5f0] border-y border-black py-16" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="pricing-heading" className="display text-5xl md:text-6xl text-center">
          ราคา · NO HIDDEN FEES
        </h2>
        <p className="text-center text-sm uppercase tracking-widest mt-3 text-[#1f1f1f]">
          จ่ายเท่าที่ใช้ · ยกเลิกได้ทุกเมื่อ · ไม่มีสัญญาผูกมัด
        </p>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={`bg-white border border-black p-6 relative ${
                plan.highlighted ? "md:-translate-y-3 shadow-[8px_8px_0_#0a0a0a]" : ""
              }`}
            >
              <span
                className={`absolute -top-3 left-6 ${plan.badgeBg} text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-black`}
              >
                {plan.badge}
              </span>
              <h3 className="display text-4xl text-[#0a0a0a] mt-4">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="display text-5xl">{plan.priceLabel}</span>
                {plan.sub && (
                  <span className="text-sm font-bold text-[#1f1f1f]">{plan.sub}</span>
                )}
              </div>
              <p className="text-xs uppercase tracking-wider text-[#1f1f1f] mt-2">
                {plan.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[#1f1f1f]">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-[#ff4f8b] font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`mt-6 block text-center ${
                  plan.highlighted ? "btn-yellow" : "btn-dark"
                }`}
              >
                {plan.cta}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
