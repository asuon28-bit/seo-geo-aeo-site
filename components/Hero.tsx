import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-[#f7f5f0] overflow-hidden border-b border-black">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-[#ffe600] text-[#0a0a0a] text-xs font-bold uppercase tracking-widest px-3 py-1">
            EVERYDAY AUTOMATION
          </span>
          <h1 className="display text-6xl md:text-8xl mt-6">
            ทำงาน
            <br />
            <span className="text-[#ff4f8b]">ซ้ำซาก</span>
            <br />
            ให้จบ
          </h1>
          <p className="article-lede mt-6 text-lg text-[#1f1f1f] max-w-md">
            AutoFlow คือแพลตฟอร์ม automation สำหรับธุรกิจไทย เชื่อมต่อ 200+ แอป
            สร้าง workflow แบบลากวาง ไม่ต้องเขียนโค้ด
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/pricing" className="btn-yellow">
              เริ่มฟรี 14 วัน
            </Link>
            <Link href="/faq" className="btn-outline">
              ดูเดโม
            </Link>
          </div>
          <div className="mt-10 flex gap-8 text-sm">
            <div>
              <div className="display text-3xl text-[#0a0a0a]">1,200+</div>
              <div className="text-xs uppercase tracking-wider text-[#1f1f1f] mt-1">ธุรกิจที่ใช้</div>
            </div>
            <div>
              <div className="display text-3xl text-[#0a0a0a]">12M</div>
              <div className="text-xs uppercase tracking-wider text-[#1f1f1f] mt-1">workflow/เดือน</div>
            </div>
            <div>
              <div className="display text-3xl text-[#0a0a0a]">99.95%</div>
              <div className="text-xs uppercase tracking-wider text-[#1f1f1f] mt-1">SLA uptime</div>
            </div>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-lg justify-self-center">
          <svg viewBox="0 0 500 500" className="w-full h-full">
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffe600" />
                <stop offset="100%" stopColor="#ff7a00" />
              </linearGradient>
              <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4f8b" />
                <stop offset="100%" stopColor="#2b59ff" />
              </linearGradient>
            </defs>
            <circle cx="250" cy="250" r="230" fill="url(#g1)" />
            <circle cx="250" cy="250" r="160" fill="url(#g2)" opacity="0.92" />
            <g stroke="#0a0a0a" strokeWidth="3" fill="#fff">
              <rect x="60" y="60" width="100" height="60" rx="8" />
              <rect x="340" y="60" width="100" height="60" rx="8" />
              <rect x="200" y="220" width="100" height="60" rx="8" />
              <rect x="60" y="380" width="100" height="60" rx="8" />
              <rect x="340" y="380" width="100" height="60" rx="8" />
            </g>
            <g stroke="#0a0a0a" strokeWidth="3" fill="none" strokeDasharray="6 6">
              <path d="M160 90 L250 250" />
              <path d="M340 90 L250 250" />
              <path d="M250 280 L110 380" />
              <path d="M250 280 L390 380" />
            </g>
            <g fontFamily="system-ui" fontSize="14" fontWeight="700" fill="#0a0a0a" textAnchor="middle">
              <text x="110" y="95">Gmail</text>
              <text x="390" y="95">Sheets</text>
              <text x="250" y="255">AutoFlow</text>
              <text x="110" y="415">LINE</text>
              <text x="390" y="415">Shopee</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
