const items = [
  "GMAIL",
  "GOOGLE SHEETS",
  "LINE OA",
  "SHOPEE",
  "LAZADA",
  "SLACK",
  "MICROSOFT 365",
  "NOTION",
  "HUBSPOT",
  "SALESFORCE",
  "STRIPE",
  "OPENAI",
  "CLAUDE",
  "AIRTABLE",
];

export function Marquee() {
  const all = [...items, ...items];
  return (
    <section className="bg-[#0a0a0a] text-white border-y border-black overflow-hidden">
      <div className="marquee py-4">
        {all.map((item, i) => (
          <span
            key={i}
            className="display text-2xl px-6 whitespace-nowrap flex items-center gap-6"
          >
            {item}
            <span className="text-[#ffe600]">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
