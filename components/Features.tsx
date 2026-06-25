const features = [
  {
    title: "เชื่อมต่อ 200+ แอป",
    description: "Gmail, Sheets, LINE, Shopee, Lazada, Slack และอีกเพียบ",
    color: "bg-[#ffe600]",
    icon: "🔌",
  },
  {
    title: "ลากวาง ไม่ต้องโค้ด",
    description: "Visual editor ใช้ได้ใน 10 นาที ทีมที่ไม่ใช่ dev ก็โอเค",
    color: "bg-[#ff4f8b] text-white",
    icon: "🎨",
  },
  {
    title: "ประหยัด 70%",
    description: "ลดเวลางานซ้ำเฉลี่ย 25 ชม./สัปดาห์/ทีม",
    color: "bg-[#2b59ff] text-white",
    icon: "⚡",
  },
  {
    title: "PDPA + ISO 27001",
    description: "Data center ในไทย เข้ารหัส AES-256",
    color: "bg-[#00d49a]",
    icon: "🔒",
  },
  {
    title: "ภาษาไทย 100%",
    description: "UI ไทย, OCR ไทย, e-Tax invoice ตรงสรรพากร",
    color: "bg-[#ff7a00] text-white",
    icon: "🇹🇭",
  },
  {
    title: "ซัพพอร์ตคนไทย",
    description: "24/7 ผ่าน LINE OA · ตอบใน 15 นาที",
    color: "bg-[#0a0a0a] text-white",
    icon: "💬",
  },
];

export function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16" aria-labelledby="features-heading">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <h2 id="features-heading" className="display text-4xl md:text-6xl">
          ทำไมต้อง<br />AutoFlow?
        </h2>
        <p className="text-sm uppercase tracking-widest text-[#1f1f1f] max-w-xs">
          แพลตฟอร์ม automation ที่ออกแบบสำหรับ<br />ธุรกิจไทยโดยเฉพาะ
        </p>
      </div>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <li
            key={f.title}
            className={`${f.color} border border-black p-8 hover:-translate-y-1 transition-transform`}
          >
            <div className="text-5xl">{f.icon}</div>
            <h3 className="display text-2xl mt-6">{f.title}</h3>
            <p className="mt-3 text-sm leading-relaxed font-medium">{f.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
