---
title: "เริ่มใช้ AutoFlow ใน 10 นาที"
description: "คู่มือเริ่มต้นใช้งาน AutoFlow ตั้งแต่สมัครใช้ฟรี สร้าง workflow แรก ไปจนถึง deploy ใช้จริง"
date: "2026-05-15"
author: "AutoFlow Team"
tags: ["Tutorial", "Getting Started"]
howto:
  totalTime: "PT10M"
  steps:
    - name: "สมัครบัญชี"
      text: "เข้าหน้าเว็บ AutoFlow กดปุ่ม 'เริ่มฟรี' กรอกอีเมลและรหัสผ่าน"
    - name: "เลือก connector"
      text: "เลือกบริการที่ต้องการเชื่อมต่อ เช่น Gmail, LINE OA, Google Sheets"
    - name: "ออกแบบ workflow"
      text: "ลากวาง trigger และ action ใน visual editor"
    - name: "ทดสอบและเปิดใช้"
      text: "กดทดสอบ ตรวจผล แล้วกด activate"
faq:
  - q: "ใช้ฟรีได้กี่ครั้ง"
    a: "Starter plan ใช้ได้ 100 ครั้ง/เดือน เชื่อมต่อสูงสุด 3 บริการ"
  - q: "ต้องเขียนโค้ดไหม"
    a: "ไม่ต้อง AutoFlow ใช้ visual editor แบบลากวาง 100%"
---

## เริ่มต้นใช้ AutoFlow

AutoFlow ออกแบบให้ทีมที่ไม่ใช่นักพัฒนาก็สร้าง workflow แรกได้ภายใน 10 นาที บทความนี้จะพาทำตั้งแต่สมัครจนรันจริง

## ขั้นที่ 1: สมัครบัญชีฟรี

เข้าเว็บ AutoFlow กดปุ่ม **เริ่มฟรี** บนหน้าแรก กรอกอีเมล + รหัสผ่าน หรือสมัครผ่าน Google/Microsoft account ใช้เวลา 1 นาที

## ขั้นที่ 2: เลือก connector

หลังจาก login แล้ว ระบบจะถามว่าอยากเชื่อมต่อบริการอะไร เลือกได้จาก 200+ connector ที่นิยม:

- **Gmail / Outlook** — ส่งและรับอีเมลอัตโนมัติ
- **Google Sheets / Excel** — อ่าน-เขียนข้อมูลในชีต
- **LINE OA** — ตอบแชทอัตโนมัติ
- **Shopee / Lazada** — ดึงออเดอร์ใหม่
- **Slack / Microsoft Teams** — แจ้งเตือนทีม

## ขั้นที่ 3: ออกแบบ workflow

ใช้ visual editor ลากวาง:

1. **Trigger** — เหตุการณ์ที่จุดชนวน เช่น "มีออเดอร์ใหม่ใน Shopee"
2. **Action** — สิ่งที่จะทำ เช่น "บันทึกออเดอร์ลง Google Sheets + แจ้งเตือน LINE"
3. **Conditional logic** — ใส่เงื่อนไข if/else ได้ตามต้องการ

## ขั้นที่ 4: ทดสอบและ activate

กดปุ่ม **Test** ระบบจะรัน workflow ด้วยข้อมูลตัวอย่าง ดูผลลัพธ์ ถ้าโอเคกด **Activate** ก็เริ่มทำงานจริง

## เสร็จแล้ว

ตอนนี้คุณมี workflow แรกที่รันอัตโนมัติ 24/7 ลองสร้าง workflow ที่สอง สาม จะเริ่มเห็นว่าประหยัดเวลาได้กี่ชั่วโมงต่อสัปดาห์
