import Link from "next/link";

export const plans = [
  {
    name: "Starter",
    price: 0,
    priceLabel: "ฟรี",
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
    priceLabel: "990 บาท / เดือน",
    description: "สำหรับทีมที่ใช้งานจริงจัง",
    features: [
      "10,000 ครั้ง/เดือน",
      "เชื่อมต่อไม่จำกัด",
      "Workflow ขั้นสูง + Conditional logic",
      "Support ผ่าน LINE OA",
      "เก็บ log 30 วัน",
    ],
    cta: "ทดลอง 14 วัน",
    href: "/pricing#pro",
    highlighted: true,
  },
  {
    name: "Business",
    price: 4990,
    priceLabel: "4,990 บาท / เดือน",
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
    <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="pricing-heading">
      <h2 id="pricing-heading" className="text-3xl font-bold text-center text-slate-900">
        ราคา
      </h2>
      <p className="text-center text-slate-600 mt-3">
        จ่ายเท่าที่ใช้ ไม่มีค่าธรรมเนียมแอบแฝง ยกเลิกได้ทุกเมื่อ
      </p>
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <li
            key={plan.name}
            className={`rounded-lg p-6 border ${
              plan.highlighted
                ? "border-slate-900 bg-slate-50"
                : "border-slate-200 bg-white"
            }`}
          >
            <h3 className="font-semibold text-xl text-slate-900">{plan.name}</h3>
            <div className="mt-2 text-2xl font-bold text-slate-900">
              {plan.priceLabel}
            </div>
            <p className="text-sm text-slate-600 mt-2">{plan.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {plan.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <Link
              href={plan.href}
              className="mt-6 block text-center bg-slate-900 text-white py-2 rounded-md hover:bg-slate-800"
            >
              {plan.cta}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
