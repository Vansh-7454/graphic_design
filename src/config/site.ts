export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  category: string;
  url: string;
  contact: {
    email: string;
    phonePlaceholder: string;
    phoneFormatted: string;
    whatsAppPlaceholder: string;
    whatsAppUrl: string;
    address: {
      studio: string;
      city: string;
      region: string;
      country: string;
      full: string;
      mapUrl: string;
    };
    inquiryNotice: string;
  };
  socials: {
    instagram: string;
    behance: string;
    arena: string;
    linkedin: string;
    twitter: string;
  };
  navigation: {
    title: string;
    href: string;
    badge?: string;
  }[];
  studioStatus: {
    acceptingProjects: boolean;
    nextAvailableSlot: string;
    timezone: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "FORMA",
  shortName: "Studio Forma",
  tagline: "Graphic Design & Thoughtful Brand Systems",
  description:
    "International graphic design and branding studio crafting distinctive visual identities, tactile print systems, and editorial digital experiences for ambitious brands.",
  category: "Graphic Design & Branding Studio",
  url: "https://studioforma.design",
  contact: {
    email: "hello@studioforma.design",
    phonePlaceholder: "+91 98200 38476",
    phoneFormatted: "+919820038476",
    whatsAppPlaceholder: "+91 98200 38476",
    whatsAppUrl: "https://wa.me/919820038476?text=Hello%20Studio%20Forma%2C%20we%27d%20like%20to%20discuss%20a%20project",
    address: {
      studio: "Studio 402, Laxmi Mills Compound, Shakti Mills Lane",
      city: "Mumbai & Bengaluru",
      region: "Maharashtra & Karnataka",
      country: "India",
      full: "Studio 402, Laxmi Mills Compound, Lower Parel, Mumbai 400013, India",
      mapUrl: "https://maps.google.com/?q=Lower+Parel+Mumbai+Design+District",
    },
    inquiryNotice: "Currently booking select client collaborations for Q3/Q4.",
  },
  socials: {
    instagram: "https://instagram.com/forma.branding",
    behance: "https://behance.net/formastudio",
    arena: "https://are.na/studio-forma",
    linkedin: "https://linkedin.com/company/forma-studio",
    twitter: "https://x.com/forma_design",
  },
  navigation: [
    { title: "Work", href: "/work" },
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
    { title: "FAQ", href: "/faq" },
    { title: "Contact", href: "/contact" },
  ],
  studioStatus: {
    acceptingProjects: true,
    nextAvailableSlot: "Q3 2026",
    timezone: "IST (UTC+5:30)",
  },
};
