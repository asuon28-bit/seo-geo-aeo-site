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
    <section className="max-w-3xl mx-auto px-4 py-16" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-3xl font-bold text-center text-slate-900">
        คำถามที่พบบ่อย
      </h2>
      <dl className="mt-10 space-y-4">
        {items.map((item) => (
          <div
            key={item.q}
            className="border border-slate-200 rounded-lg p-5 bg-white"
          >
            <dt className="font-semibold text-slate-900">{item.q}</dt>
            <dd className="mt-2 text-slate-700 text-sm leading-relaxed">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
