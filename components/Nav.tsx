import Link from "next/link";
import { site } from "@/lib/site";

export function Nav() {
  return (
    <header className="border-b border-black bg-white sticky top-0 z-50">
      <div className="bg-[#ffe600] text-[#0a0a0a] text-center text-xs font-bold uppercase tracking-wider py-2">
        🔥 ทดลองฟรี 14 วัน · ยกเลิกได้ทุกเมื่อ · ส่งฟรีทุกออเดอร์ของเวลา
      </div>
      <nav aria-label="หลัก" className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="display text-3xl tracking-tight">
          {site.name}
        </Link>
        <ul className="hidden md:flex gap-7 text-sm font-bold uppercase tracking-wider">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-[#0a0a0a] hover:text-[#ff4f8b]">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/pricing" className="btn-yellow text-xs">
          เริ่มฟรี
        </Link>
      </nav>
    </header>
  );
}
