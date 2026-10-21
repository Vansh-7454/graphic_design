import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const viewport: Viewport = {
  themeColor: "#F5F1E8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const editorialSerif = Newsreader({
  variable: "--font-serif-accent",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Graphic Design & Branding Studio | ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "Graphic Design Studio",
    "Brand Identity Design",
    "Packaging Design",
    "Swiss Editorial Design",
    "Art Direction",
    "Visual Systems",
    "Typography",
  ],
  authors: [{ name: "Studio Forma" }],
  creator: "Studio Forma",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Graphic Design & Branding Studio`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Graphic Design & Branding Studio`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} — Graphic Design & Branding Studio`,
    headline: siteConfig.tagline,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneFormatted,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.studio,
      addressLocality: siteConfig.contact.address.city,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.behance,
      siteConfig.socials.arena,
      siteConfig.socials.linkedin,
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${editorialSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F5F1E8] text-[#17191C] selection:bg-[#3457E5] selection:text-white">
        {children}
      </body>
    </html>
  );
}
