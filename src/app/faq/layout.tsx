import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — FORMA Graphic Design & Branding Studio",
  description:
    "Honest answers regarding our brand identity processes, timelines, scope, packaging deliverables, and client collaboration model.",
  openGraph: {
    title: "FAQ — FORMA Graphic Design & Branding Studio",
    description:
      "Understand how FORMA collaborates with founders and ambitious brands across strategy, packaging, identity systems, and production.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
