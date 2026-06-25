import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webpageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description: `${site.name} ก่อตั้งปี ${site.founded} โดยทีมวิศวกรไทยที่ต้องการแก้ปัญหา automation สำหรับธุรกิจขนาดกลางและเล็กในประเทศไทย`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: "/about",
            title: `เกี่ยวกับ ${site.name}`,
            description: `${site.name} ก่อตั้งปี ${site.founded} โดยทีมวิศวกรไทย`,
            type: "AboutPage",
          }),
          breadcrumbSchema([
            { name: "หน้าแรก", path: "/" },
            { name: "เกี่ยวกับเรา", path: "/about" },
          ]),
        ]}
      />
      <article className="max-w-3xl mx-auto px-4 py-16 prose">
        <h1>เกี่ยวกับ {site.name}</h1>
        <p className="article-lede">
          {site.name} คือแพลตฟอร์ม automation สำหรับธุรกิจไทย ก่อตั้งปี{" "}
          {site.founded} โดยทีมวิศวกรไทยที่เคยทำงานในบริษัทเทคโนโลยีระดับโลก
          เราเชื่อว่าธุรกิจไทยทุกขนาดสมควรมีเครื่องมือ automation
          ระดับเดียวกับองค์กรใหญ่
        </p>

        <h2>พันธกิจของเรา</h2>
        <p>
          ทำให้ธุรกิจไทยทำงานซ้ำ ๆ น้อยลง 70%
          ด้วยเครื่องมือที่ใช้ง่ายและรองรับบริบทท้องถิ่นเต็มรูปแบบ
          ไม่ว่าจะเป็นภาษาไทย ใบกำกับภาษีอิเล็กทรอนิกส์ หรือ LINE
        </p>

        <h2>ตัวเลขปัจจุบัน</h2>
        <ul>
          <li>ลูกค้ามากกว่า 1,200 ธุรกิจทั่วไทย</li>
          <li>workflow รันสำเร็จกว่า 12 ล้านครั้ง/เดือน</li>
          <li>เชื่อมต่อ 200+ บริการ</li>
          <li>SLA 99.95% ใน 12 เดือนที่ผ่านมา</li>
        </ul>

        <h2>มาตรฐานและความปลอดภัย</h2>
        <p>
          {site.name} ผ่านมาตรฐาน ISO 27001, SOC 2 Type II
          และจดทะเบียนกับสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (PDPA)
          ข้อมูลลูกค้าทั้งหมดเข้ารหัสด้วย AES-256
        </p>

        <h2>ผู้สร้าง</h2>
        <p>
          สวัสดีครับ ฉันชื่อ <strong>คุณาณัฏฐ์</strong> เป็นผู้สร้างเว็บไซต์นี้
        </p>

        <h2>ติดต่อเรา</h2>
        <p>
          อีเมล: {site.email}
          <br />
          โทร: {site.phone}
          <br />
          ที่อยู่: {site.address.streetAddress} {site.address.addressLocality}{" "}
          {site.address.postalCode}
        </p>
      </article>
    </>
  );
}
