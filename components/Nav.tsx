import Link from "next/link";
import { site } from "@/lib/site";

export function Nav() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-50">
      <nav
        aria-label="หลัก"
        className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4"
      >
        <Link href="/" className="font-bold text-lg text-slate-900">
          {site.name}
        </Link>
        <ul className="flex gap-6 text-sm">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-slate-700 hover:text-slate-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
