import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="border-b border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="display text-4xl md:text-6xl">JOIN THE FLOW</h3>
          <p className="mt-3 text-sm uppercase tracking-widest text-white/70">
            รับเคล็ดลับ automation ใหม่ ๆ ทุกสัปดาห์
          </p>
          <form
            className="mt-6 flex max-w-md mx-auto gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 bg-white text-black px-4 py-3 font-semibold placeholder-black/40"
              aria-label="อีเมล"
            />
            <button type="submit" className="btn-yellow">
              สมัคร
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div className="md:col-span-1">
          <div className="display text-4xl">{site.name}</div>
          <p className="text-white/70 mt-3 text-xs">{site.tagline}</p>
        </div>
        <div>
          <div className="display text-lg text-[#ffe600]">SHOP</div>
          <ul className="mt-3 space-y-2 text-white/70">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="display text-lg text-[#ffe600]">HELP</div>
          <ul className="mt-3 space-y-2 text-white/70">
            <li>{site.email}</li>
            <li>{site.phone}</li>
            <li>
              {site.address.streetAddress}
              <br />
              {site.address.addressLocality} {site.address.postalCode}
            </li>
          </ul>
        </div>
        <div>
          <div className="display text-lg text-[#ffe600]">FOLLOW</div>
          <ul className="mt-3 space-y-2 text-white/70">
            <li>
              <a href={site.social.twitter} target="_blank" rel="noopener noreferrer">
                Twitter / X
              </a>
            </li>
            <li>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.legalName}. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
