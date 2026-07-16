// Single source of truth for portfolio projects and case studies.
// Consumed by the home "Selected Work" grid and the /work/[slug] detail pages.
//
// All copy is written in the first person and focuses on the front-end/product
// engineering. Screenshots are real captures of the live sites, stored under
// public/work/<slug>/.

export type Project = {
  slug: string;
  name: string;
  /** One-line summary shown on the home grid and case-study header. */
  tagline: string;
  /** Longer, first-person description for the case study. */
  description: string;
  /** Discipline label, e.g. "Product · Web App". */
  discipline: string;
  year: string;
  /** Primary technologies. */
  tech: string[];
  /** Live site URL. */
  liveUrl: string;
  /** Lead image (relative to /public). */
  hero: string;
  /** Additional case-study images, top to bottom. */
  gallery: string[];
  /** 2–4 highlight lines for the case study. */
  highlights: string[];
  /** Filter categories. */
  cats: string[];
  /** Whether to surface on the home grid (all true by default). */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "letsgohalf",
    name: "LetsGoHalf",
    tagline:
      "A social payments app that helps people split and match the cost of anything — rent, subscriptions, carpools and more.",
    description:
      "LetsGoHalf makes sharing costs feel effortless. I designed and built the product end to end — a polished React/Next.js web experience and a companion iOS app — where people find the right match to split bills, rent, subscriptions and journeys, turning an awkward money conversation into a few taps.",
    discipline: "Product · Web & iOS",
    year: "2025",
    tech: ["React", "Next.js", "TypeScript", "React Native", "WebSockets"],
    liveUrl: "https://www.letsgohalf.com/",
    hero: "/work/letsgohalf/hero.jpg",
    gallery: [
      "/work/letsgohalf/gallery-1.jpg",
      "/work/letsgohalf/shot-1.jpg",
      "/work/letsgohalf/shot-2.jpg",
    ],
    highlights: [
      "Shipped to the iOS App Store and grew to 1,000+ users.",
      "Built real-time messaging, an automated matching engine and identity verification.",
      "Designed a cohesive component-driven UI with secure payment integration.",
    ],
    cats: ["Product", "Fintech"],
    featured: true,
  },
  {
    slug: "sendreach",
    name: "SendReach",
    tagline:
      "A two-sided influencer-marketing platform that connects brands with verified creators who deliver.",
    description:
      "SendReach cuts the middlemen out of influencer marketing. I built a two-sided platform where businesses launch campaigns and verified creators apply — with real-time analytics, fraud prevention and multi-currency payouts handled end to end.",
    discipline: "Product · Web Platform",
    year: "2025",
    tech: ["Next.js", "React", "TypeScript", "Node.js"],
    liveUrl: "https://sendreach.app/",
    hero: "/work/sendreach/hero.jpg",
    gallery: [
      "/work/sendreach/gallery-1.jpg",
      "/work/sendreach/shot-1.jpg",
      "/work/sendreach/shot-2.jpg",
    ],
    highlights: [
      "Built campaign management and creator discovery for both sides of the market.",
      "Implemented real-time analytics dashboards and multi-currency payouts.",
      "Designed a clean, data-dense interface that stays easy to scan.",
    ],
    cats: ["Product", "Web App"],
    featured: true,
  },
  {
    slug: "usa-errands",
    name: "USA Errands",
    tagline:
      "U.S. logistics infrastructure for international sellers — hold inventory stateside and ship every order locally.",
    description:
      "USA Errands gives sellers anywhere a foothold in American retail. I built a single web app that unifies warehousing, fulfilment and a personal-shopper desk — one warehouse, one ledger, one checkout — so international sellers can reach U.S. customers without setting up a local entity.",
    discipline: "Product · Web App",
    year: "2025",
    tech: ["Next.js", "React", "TypeScript", "Node.js"],
    liveUrl: "https://www.myusaerrands.com/",
    hero: "/work/usa-errands/hero.jpg",
    gallery: [],
    highlights: [
      "Unified warehousing, fulfilment and personal-shopper flows in one dashboard.",
      "Designed clear multi-step flows for a genuinely complex logistics domain.",
    ],
    cats: ["Product", "Web App"],
    featured: true,
  },
  {
    slug: "pirate",
    name: "Pirate",
    tagline:
      "24/7 self-service studios for musicians, podcasters and dancers — book online, let yourself in, and create.",
    description:
      "Pirate reimagines the creative studio as something you can book in under a minute and unlock from your phone, any hour of the day. I built the brand and booking experience for a network of soundproofed DJ, recording, rehearsal, podcast and dance rooms.",
    discipline: "Web · Booking",
    year: "2025",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://pirate-psi.vercel.app/",
    hero: "/work/pirate/hero.jpg",
    gallery: ["/work/pirate/shot-1.jpg", "/work/pirate/shot-2.jpg"],
    highlights: [
      "Designed a fast, mobile-first booking flow.",
      "Built a bold, motion-led marketing site with a considered brand system.",
    ],
    cats: ["Web App"],
    featured: true,
  },
  {
    slug: "erandwork",
    name: "ErandWork",
    tagline:
      "A service marketplace connecting clients with verified local professionals for everyday tasks and errands.",
    description:
      "ErandWork is a digital marketplace that pairs people with trusted local professionals for daily tasks. I built the front end around secure payments, professional verification and a streamlined booking system that keeps both sides informed.",
    discipline: "Product · Marketplace",
    year: "2024",
    tech: ["Next.js", "React", "Firebase", "Stripe"],
    liveUrl: "https://erandwork.com",
    hero: "/work/erandwork/hero.png",
    gallery: [],
    highlights: [
      "Built booking, verification and secure payment flows.",
      "Delivered a responsive, accessible interface for clients and professionals.",
    ],
    cats: ["Product", "Marketplace"],
    featured: true,
  },
  {
    slug: "mose",
    name: "MOSÉ",
    tagline:
      "An e-commerce platform showcasing authentic African art and handcrafted gifts from independent artisans.",
    description:
      "MOSÉ brings authentic African art to a global audience. I built an elegant storefront with artist profiles, cultural storytelling and international shipping — pairing considered typography and imagery with a smooth checkout.",
    discipline: "Web · E-commerce",
    year: "2024",
    tech: ["Next.js", "React", "Shopify API", "Tailwind CSS"],
    liveUrl: "https://mose-two.vercel.app",
    hero: "/work/mose/hero.png",
    gallery: [],
    highlights: [
      "Integrated Shopify for catalogue, cart and checkout.",
      "Crafted an editorial, image-led storefront with artist storytelling.",
    ],
    cats: ["E-commerce", "Web App"],
    featured: true,
  },
  {
    slug: "emureccima",
    name: "EMURECCIMA",
    tagline:
      "A community financial platform providing collaborative savings, low-interest loans and emergency assistance.",
    description:
      "EMURECCIMA strengthens local economic development through mutual support. I built a community-focused financial platform for collaborative savings, low-interest loans and emergency assistance for chamber members.",
    discipline: "Product · Fintech",
    year: "2024",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
    liveUrl: "https://emureccima.org",
    hero: "/work/emureccima/hero.png",
    gallery: [],
    highlights: [
      "Built member savings, lending and assistance flows.",
      "Designed a trustworthy, straightforward interface for a financial product.",
    ],
    cats: ["Product", "Fintech"],
    featured: true,
  },
  {
    slug: "nimi-events",
    name: "Nimi Events",
    tagline:
      "A brand and e-commerce home for an African catering, event-planning and gifting business.",
    description:
      "Nimi Events is a family kitchen scaled with care. I built a brand-led site and online home for their services — catering, event planning, gifting and content — bringing authentically African flavours and considered hospitality under one standard.",
    discipline: "Web · Brand · E-commerce",
    year: "2025",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://www.nimievents.com/",
    hero: "/work/nimi-events/hero.jpg",
    gallery: ["/work/nimi-events/shot-1.jpg", "/work/nimi-events/shot-2.jpg"],
    highlights: [
      "Designed a warm, editorial brand site with a booking-friendly layout.",
      "Built responsive, image-rich pages with smooth motion.",
    ],
    cats: ["Web App", "E-commerce"],
    featured: true,
  },
  {
    slug: "oraql",
    name: "OraQL",
    tagline:
      "A sports-analytics app that turns raw match data into ranked, explainable predictions.",
    description:
      "OraQL turns raw match data into decisions you can reason about. I designed and built a probability engine and interface that ingests fixtures, stats and odds, computes Poisson-based probabilities with recency and injury weighting, and surfaces ranked picks — each with a plain-language explanation of why.",
    discipline: "Product · Data App",
    year: "2025",
    tech: ["Next.js", "React", "TypeScript", "Data Visualisation"],
    liveUrl: "https://ora-ql.vercel.app/",
    hero: "/work/oraql/hero.jpg",
    gallery: [],
    highlights: [
      "Built a probability engine with clear, explainable outputs.",
      "Designed data-dense visualisations that stay readable and calm.",
    ],
    cats: ["Product", "Data App"],
    featured: true,
  },
];

export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const projectSlugs = (): string[] => projects.map((p) => p.slug);
