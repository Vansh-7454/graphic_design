import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & New Inquiries — FORMA Graphic Design & Branding Studio",
  description:
    "Have a good idea? Let's give it a great identity. Inquire about brand identity, packaging, and digital commissions for upcoming horizons.",
  openGraph: {
    title: "Contact & New Inquiries — FORMA Graphic Design & Branding Studio",
    description:
      "Initiate collaboration with FORMA. Book brand identity, packaging, and creative direction sprints.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
