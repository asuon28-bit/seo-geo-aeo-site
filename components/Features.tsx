const features = [
  {
    title: "เชื่อมต่อ 200+ บริการ",
    description:
      "AutoFlow เชื่อมต่อกับ Google Workspace, Microsoft 365, LINE, Slack, Shopee, Lazada และอีกกว่า 200 บริการ ผ่าน connector สำเร็จรูป",
  },
  {
    title: "สร้าง workflow แบบลากวาง",
    description:
      "ออกแบบ workflow ด้วย visual editor ไม่ต้องเขียนโค้ด ทีมที่ไม่ใช่นักพัฒนาก็ใช้ได้ภายใน 10 นาที",
  },
  {
    title: "ลดต้นทุนสูงสุด 70%",
    description:
      "ลูกค้าเฉลี่ยลดเวลางานซ้ำ ๆ ได้ 25 ชั่วโมง/สัปดาห์ ประหยัดค่าจ้างพนักงาน data entry ได้ถึง 70%",
  },
  {
    title: "Data center ในไทย",
    description:
      "ข้อมูลทั้งหมดถูกเก็บใน AWS Singapore + สำเนาในไทย ตาม PDPA และ ISO 27001",
  },
  {
    title: "รองรับภาษาไทยเต็มรูปแบบ",
    description:
      "UI ภาษาไทย, OCR เอกสารภาษาไทย, ใบกำกับภาษีอิเล็กทรอนิกส์ (e-Tax invoice) ตรงสรรพากร",
  },
  {
    title: "ทีมซัพพอร์ตคนไทย",
    description:
      "Support 24/7 ภาษาไทยผ่าน LINE OA และ video call ตอบกลับเฉลี่ยภายใน 15 นาที",
  },
];

export function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="features-heading">
      <h2 id="features-heading" className="text-3xl font-bold text-center text-slate-900">
        ทำไมต้อง AutoFlow
      </h2>
      <p className="text-center text-slate-600 mt-3 max-w-2xl mx-auto">
        แพลตฟอร์ม automation ที่ออกแบบสำหรับธุรกิจไทยโดยเฉพาะ
      </p>
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <li
            key={f.title}
            className="border border-slate-200 rounded-lg p-6 bg-white"
          >
            <h3 className="font-semibold text-lg text-slate-900">{f.title}</h3>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              {f.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
