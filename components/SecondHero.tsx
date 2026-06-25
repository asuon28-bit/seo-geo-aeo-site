import Link from "next/link";

export function SecondHero() {
  return (
    <section className="bg-[#0a0a0a] text-white border-y border-black">
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 relative aspect-square w-full max-w-md justify-self-center">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffe600" />
                <stop offset="100%" stopColor="#ff4f8b" />
              </linearGradient>
            </defs>
            <rect x="20" y="20" width="360" height="360" fill="url(#g3)" />
            <g fill="#0a0a0a">
              <rect x="60" y="60" width="280" height="40" />
              <rect x="60" y="120" width="180" height="20" />
              <rect x="60" y="160" width="220" height="20" />
              <rect x="60" y="200" width="160" height="20" />
              <rect x="60" y="260" width="100" height="40" />
            </g>
            <g stroke="#0a0a0a" strokeWidth="4" fill="none">
              <path d="M260 260 L300 300 L340 260" />
              <circle cx="300" cy="290" r="40" />
            </g>
          </svg>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-block bg-[#ffe600] text-[#0a0a0a] text-xs font-bold uppercase tracking-widest px-3 py-1">
            NEW IN
          </span>
          <h2 className="display text-6xl md:text-8xl mt-6 leading-none">
            <span className="text-white">AI</span>
            <br />
            <span className="text-[#ffe600]">POWERED</span>
            <br />
            <span className="text-white">FLOW</span>
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-md">
            เชื่อมต่อ ChatGPT, Claude และ Gemini เข้า workflow โดยตรง
            ให้ AI ตอบลูกค้า สรุปเอกสาร หรือจัดข้อมูลอัตโนมัติ
          </p>
          <div className="mt-8">
            <Link href="/pricing" className="btn-yellow">
              ลองใช้ AI Flow ฟรี
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
