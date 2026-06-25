import { site } from "./site";

const abs = (path: string) => new URL(path, site.url).toString();

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": abs("/#organization"),
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: abs(site.logo),
  email: site.email,
  telephone: site.phone,
  foundingDate: site.founded,
  address: {
    "@type": "PostalAddress",
    ...site.address,
  },
  sameAs: Object.values(site.social),
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": abs("/#website"),
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: site.language,
  publisher: { "@id": abs("/#organization") },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: abs("/blog?q={search_term_string}"),
    },
    "query-input": "required name=search_term_string",
  },
});

export const webpageSchema = (input: {
  path: string;
  title: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) => ({
  "@context": "https://schema.org",
  "@type": input.type ?? "WebPage",
  "@id": abs(input.path) + "#webpage",
  url: abs(input.path),
  name: input.title,
  description: input.description,
  inLanguage: site.language,
  isPartOf: { "@id": abs("/#website") },
  about: { "@id": abs("/#organization") },
});

export const breadcrumbSchema = (
  items: Array<{ name: string; path: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.name,
    item: abs(item.path),
  })),
});

export const faqSchema = (items: Array<{ q: string; a: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
});

export const productSchema = (input: {
  name: string;
  description: string;
  image?: string;
  offers: Array<{ name: string; price: number; priceCurrency?: string; url?: string }>;
  aggregateRating?: { ratingValue: number; reviewCount: number };
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: input.name,
  description: input.description,
  image: input.image ? abs(input.image) : abs(site.ogImage),
  brand: { "@type": "Brand", name: site.name },
  offers: input.offers.map((o) => ({
    "@type": "Offer",
    name: o.name,
    price: o.price,
    priceCurrency: o.priceCurrency ?? "THB",
    url: o.url ? abs(o.url) : abs("/pricing"),
    availability: "https://schema.org/InStock",
  })),
  ...(input.aggregateRating && {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: input.aggregateRating.ratingValue,
      reviewCount: input.aggregateRating.reviewCount,
    },
  }),
});

export const articleSchema = (input: {
  path: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  author?: string;
  tags?: string[];
  speakable?: boolean;
}) => {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: input.image ? abs(input.image) : abs(site.ogImage),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: site.language,
    author: {
      "@type": "Person",
      name: input.author ?? site.author.name,
      url: site.author.url,
    },
    publisher: { "@id": abs("/#organization") },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": abs(input.path),
    },
    keywords: input.tags?.join(", "),
  };
  if (input.speakable) {
    base.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable", "h1", ".article-lede"],
    };
  }
  return base;
};

export const howToSchema = (input: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
  totalTime?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: input.name,
  description: input.description,
  ...(input.totalTime && { totalTime: input.totalTime }),
  step: input.steps.map((s, idx) => ({
    "@type": "HowToStep",
    position: idx + 1,
    name: s.name,
    text: s.text,
  })),
});
