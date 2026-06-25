import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <div className="font-bold text-slate-900">{site.name}</div>
          <p className="text-slate-600 mt-2">{site.tagline}</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900">เมนู</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900">ติดต่อ</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>{site.email}</li>
            <li>{site.phone}</li>
            <li>
              {site.address.streetAddress} {site.address.addressLocality}{" "}
              {site.address.postalCode}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.legalName}. สงวนลิขสิทธิ์
      </div>
    </footer>
  );
}
