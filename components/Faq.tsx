export const faqItems = [
  {
    q: "AutoFlow คืออะไร",
    a: "AutoFlow คือแพลตฟอร์ม SaaS automation สำหรับธุรกิจไทย ใช้สร้าง workflow อัตโนมัติเชื่อมต่อแอปและบริการต่าง ๆ โดยไม่ต้องเขียนโค้ด",
  },
  {
    q: "AutoFlow ต่างจาก Zapier หรือ Make อย่างไร",
    a: "AutoFlow ออกแบบสำหรับตลาดไทยโดยเฉพาะ — UI ภาษาไทย, รองรับ LINE OA, ใบกำกับภาษีอิเล็กทรอนิกส์, ทีมซัพพอร์ตคนไทย 24/7 และมี data center สำเนาในประเทศไทยตาม PDPA",
  },
  {
    q: "ใช้งานยากไหม ต้องเขียนโค้ดหรือเปล่า",
    a: "ไม่ต้องเขียนโค้ด AutoFlow ใช้ visual editor แบบลากวาง ผู้ใช้ทั่วไปสามารถสร้าง workflow แรกได้ภายใน 10 นาที",
  },
  {
    q: "มีค่าใช้จ่ายเท่าไร",
    a: "AutoFlow มีแพ็กเกจฟรีสำหรับทดลองใช้ Pro 990 บาท/เดือน และ Business 4,990 บาท/เดือน รายละเอียดเพิ่มเติมดูที่หน้าราคา",
  },
  {
    q: "ข้อมูลปลอดภัยตาม PDPA หรือไม่",
    a: "ปลอดภัยตาม PDPA ข้อมูลทั้งหมดเข้ารหัสด้วย AES-256 เก็บใน AWS Singapore + สำเนาในไทย ผ่านมาตรฐาน ISO 27001 และ SOC 2 Type II",
  },
  {
    q: "ยกเลิกได้เมื่อไร",
    a: "ยกเลิกได้ตลอดเวลาผ่านหน้าตั้งค่าบัญชี ไม่มีค่าธรรมเนียมการยกเลิก และไม่มีสัญญาผูกมัด",
  },
];

export function Faq({ items = faqItems }: { items?: typeof faqItems }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="display text-5xl md:text-6xl text-center">
        Q&amp;A
      </h2>
      <p className="text-center text-sm uppercase tracking-widest mt-2 text-[#1f1f1f]">
        คำถามที่ถูกถามมากที่สุด
      </p>
      <dl className="mt-12 space-y-3">
        {items.map((item, idx) => (
          <details
            key={item.q}
            className="group border border-black bg-white"
            open={idx === 0}
          >
            <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
              <dt className="font-bold text-[#0a0a0a] flex items-center gap-3">
                <span className="display text-2xl text-[#ff4f8b]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {item.q}
              </dt>
              <span className="display text-3xl group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <dd className="px-5 pb-5 text-[#1f1f1f] text-sm leading-relaxed pl-16">
              {item.a}
            </dd>
          </details>
        ))}
      </dl>
    </section>
  );
}
