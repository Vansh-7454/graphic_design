import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import {
  Compass,
  LayoutGrid,
  Package,
  Monitor,
  Eye,
  ArrowUpRight,
  CheckCircle2,
  Sliders,
  Sparkles,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "Services & Studio Practices — FORMA Graphic Design & Branding",
  description:
    "Explore FORMA's 5 core disciplines: Brand Identity, Graphic Design, Packaging Design, Digital Design, and Creative Direction.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#17191C]">
      {/* Studio Header */}
      <Header />

      <main className="flex-1 w-full">
        {/* ======================================================== */}
        {/* PAGE HERO                                                */}
        {/* ======================================================== */}
        <section className="border-b border-black/[0.08] py-12 sm:py-16 md:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#F15A38]">
              <span>[ CAPABILITIES &bull; PRACTICES ]</span>
              <span>&bull;</span>
              <span>FIVE CORE DISCIPLINES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] font-display font-bold tracking-tight text-midnight-ink leading-[1.05] sm:leading-[1.02] max-w-5xl">
              Architectural Systems. <br />
              <span className="font-serif italic font-normal text-[#3457E5]">
                Tactile Craft.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-midnight-ink/80 max-w-2xl font-body leading-relaxed pt-2">
              We operate across five interconnected disciplines. Each engagement is principal-led, grounded in Swiss modernist typography, and engineered to elevate your brand above category conventions.
            </p>

            {/* Quick Filter / Jump Bar */}
            <div className="pt-4 sm:pt-6 flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0 text-xs font-mono">
              <a
                href="#brand-identity"
                className="px-3.5 py-2 bg-white border border-black/15 hover:border-[#3457E5] hover:text-[#3457E5] transition-colors shrink-0"
              >
                01. Brand Identity
              </a>
              <a
                href="#graphic-design"
                className="px-3.5 py-2 bg-white border border-black/15 hover:border-[#3457E5] hover:text-[#3457E5] transition-colors shrink-0"
              >
                02. Graphic Design
              </a>
              <a
                href="#packaging-design"
                className="px-3.5 py-2 bg-white border border-black/15 hover:border-[#3457E5] hover:text-[#3457E5] transition-colors shrink-0"
              >
                03. Packaging Design
              </a>
              <a
                href="#digital-design"
                className="px-3.5 py-2 bg-white border border-black/15 hover:border-[#3457E5] hover:text-[#3457E5] transition-colors shrink-0"
              >
                04. Digital Design
              </a>
              <a
                href="#creative-direction"
                className="px-3.5 py-2 bg-white border border-black/15 hover:border-[#3457E5] hover:text-[#3457E5] transition-colors shrink-0"
              >
                05. Creative Direction
              </a>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SERVICE 1: BRAND IDENTITY (Warm Ivory / Editorial Asymmetric) */}
        {/* ======================================================== */}
        <section
          id="brand-identity"
          className="border-b border-black/[0.08] py-14 sm:py-20 md:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-black/15 flex items-center justify-center text-[#3457E5]">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#3457E5] font-semibold">
                  DISCIPLINE 01 &bull; CORE SYSTEM
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-midnight-ink tracking-tight">
                Brand Identity
              </h2>

              <p className="text-base sm:text-lg font-medium text-midnight-ink/90 leading-snug">
                Distinctive visual languages engineered for long-term category leadership and brand equity.
              </p>

              <p className="text-sm text-midnight-ink/75 leading-relaxed font-body">
                We design comprehensive identity ecosystems from primary marks to bespoke typography, color architecture, graphic motifs, and scalable design guidelines that unite every touchpoint.
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-gray block font-semibold">
                  Standard Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-midnight-ink/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3457E5]" />
                    <span>Brand Identity Manual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3457E5]" />
                    <span>Vector Asset Library</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3457E5]" />
                    <span>Typography Licensing Guide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3457E5]" />
                    <span>Motion &amp; Digital Tokens</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-midnight-ink text-warm-ivory text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#3457E5] transition-colors"
                >
                  <span>Enquire About Brand Identity</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Preview (Specimen Composition) */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden border border-black/15 shadow-xl">
                <Image
                  src="/images/lumina_botanics.jpg"
                  alt="Brand Identity System Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-midnight-ink/90 text-white px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
                  IDENTITY SPEC &bull; LUMINA BOTANICS
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 text-midnight-ink p-3 border border-black/10 text-left">
                  <p className="text-[9px] font-mono uppercase text-muted-gray">COLOR TOKENS</p>
                  <div className="flex gap-1.5 pt-1">
                    <span className="w-3.5 h-3.5 bg-[#17191C]" />
                    <span className="w-3.5 h-3.5 bg-[#F5F1E8] border border-black/10" />
                    <span className="w-3.5 h-3.5 bg-[#3457E5]" />
                    <span className="w-3.5 h-3.5 bg-[#F15A38]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SERVICE 2: GRAPHIC DESIGN (Midnight Ink Canvas)          */}
        {/* ======================================================== */}
        <section
          id="graphic-design"
          className="w-full bg-[#17191C] text-[#F5F1E8] py-14 sm:py-20 md:py-28 border-b border-white/10"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              {/* Left Visual Preview (Editorial Publication Monograph) */}
              <div className="lg:col-span-6 order-2 lg:order-1 relative">
                <div className="relative aspect-[3/4] max-w-md mx-auto rounded-sm overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/images/forma_magazine.jpg"
                    alt="Graphic Design & Publication Preview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#17191C]/90 text-white px-3 py-1 text-[10px] font-mono tracking-widest uppercase border border-white/15">
                    SWISS GRID &bull; FORMA ARCHITECTURAL REVIEW
                  </div>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#F2D675]">
                    <LayoutGrid className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F2D675] font-semibold">
                    DISCIPLINE 02 &bull; EDITORIAL &amp; PRINT
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F5F1E8] tracking-tight">
                  Graphic Design
                </h2>

                <p className="text-base sm:text-lg font-medium text-[#F2D675] leading-snug">
                  Systematic Swiss editorial discipline paired with contemporary visual tension.
                </p>

                <p className="text-sm text-[#F5F1E8]/75 leading-relaxed font-body">
                  We treat graphic design as an architectural craft. Every grid, margin, crop, and typeface is chosen with intention to produce high-contrast, memorable print catalogues, posters, and visual ephemera.
                </p>

                {/* Deliverables */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F5F1E8]/60 block font-semibold">
                    Standard Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#F5F1E8]/80">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2D675]" />
                      <span>Editorial Monographs &amp; Books</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2D675]" />
                      <span>Exhibition Posters &amp; Collateral</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2D675]" />
                      <span>Corporate Stationery Suites</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2D675]" />
                      <span>Specialty Paper &amp; Foil Dockets</span>
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#17191C] text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#F2D675] transition-colors"
                  >
                    <span>Commission Graphic Design</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SERVICE 3: PACKAGING DESIGN (Warm Vermilion Canvas)      */}
        {/* ======================================================== */}
        <section
          id="packaging-design"
          className="w-full bg-[#F15A38] text-white py-14 sm:py-20 md:py-28 border-b border-black/[0.08]"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white">
                    <Package className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F2D675] font-bold">
                    DISCIPLINE 03 &bull; TACTILE PACKAGING
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                  Packaging Design
                </h2>

                <p className="text-base sm:text-lg font-medium text-white/95 leading-snug">
                  Tangible physical experiences crafted with material intelligence and unboxing ceremony.
                </p>

                <p className="text-sm text-white/80 leading-relaxed font-body">
                  From bespoke structural box die-lines to limited-edition art catalogues, we explore specialty paper stocks, blind debossing, cold foil stamping, and sustainable substrates that people retain as keepsakes.
                </p>

                {/* Deliverables */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-white/70 block font-semibold">
                    Standard Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-white/90">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2D675]" />
                      <span>Die-line Structural Engineering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2D675]" />
                      <span>Label Systems &amp; Tamper Seals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2D675]" />
                      <span>Finish &amp; Paper Specifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2D675]" />
                      <span>Vendor Prototyping Supervision</span>
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-midnight-ink text-warm-ivory text-xs font-mono uppercase tracking-widest font-semibold hover:bg-white hover:text-midnight-ink transition-colors"
                  >
                    <span>Enquire About Packaging</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Visual Preview (Atelier Verre Square) */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-square max-w-md mx-auto rounded-sm overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/images/atelier_verre.jpg"
                    alt="Packaging and Tactile Book Preview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 bg-white text-midnight-ink px-3 py-1 text-[10px] font-mono tracking-widest uppercase font-bold">
                    EDITION: 400GSM DUPLEX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SERVICE 4: DIGITAL DESIGN (Electric Cobalt Canvas)       */}
        {/* ======================================================== */}
        <section
          id="digital-design"
          className="w-full bg-[#3457E5] text-white py-14 sm:py-20 md:py-28 border-b border-black/[0.08]"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              {/* Left Visual Preview (Digital Browser Architecture Frame) */}
              <div className="lg:col-span-6 order-2 lg:order-1 relative">
                <div className="bg-[#17191C] rounded-sm p-4 border border-white/20 shadow-2xl space-y-3">
                  {/* Browser chrome bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono text-white/50">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F15A38]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F2D675]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span>https://studioforma.design/system</span>
                    <span className="text-[#F2D675]">100% STATIC</span>
                  </div>

                  <div className="p-6 bg-[#F5F1E8] text-[#17191C] space-y-4">
                    <div className="flex items-center justify-between border-b border-black/10 pb-2 text-[10px] font-mono">
                      <span>TYPE SPECIMEN</span>
                      <span>SPACE GROTESK &bull; NEWSREADER</span>
                    </div>
                    <p className="text-xl font-display font-bold tracking-tight">
                      Digital experiences that treat typography with reverence.
                    </p>
                    <div className="grid grid-cols-3 gap-2 pt-2 text-[9px] font-mono">
                      <div className="p-2 bg-white border border-black/10">0ms TTFB</div>
                      <div className="p-2 bg-white border border-black/10">PERFECT SEO</div>
                      <div className="p-2 bg-white border border-black/10">NO BLOAT</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F2D675] font-bold">
                    DISCIPLINE 04 &bull; DIGITAL EXPERIENCES
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                  Digital Design
                </h2>

                <p className="text-base sm:text-lg font-medium text-white/95 leading-snug">
                  Fluid, high-performance web environments that honor typography and brand storytelling.
                </p>

                <p className="text-sm text-white/80 leading-relaxed font-body">
                  We translate brand identities into immersive digital destinations that feel responsive, alive, and tactile. We reject cookie-cutter SaaS layouts in favor of intentional editorial architecture.
                </p>

                {/* Deliverables */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-white/70 block font-semibold">
                    Standard Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-white/90">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2D675]" />
                      <span>Editorial Web Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2D675]" />
                      <span>Design System &amp; Tokens</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2D675]" />
                      <span>Responsive Viewport Specs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2D675]" />
                      <span>Micro-Interactions &amp; Motion</span>
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#17191C] text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#F2D675] transition-colors"
                  >
                    <span>Discuss Digital Scope</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SERVICE 5: CREATIVE DIRECTION (Warm Ivory / Gallery Staging) */}
        {/* ======================================================== */}
        <section
          id="creative-direction"
          className="border-b border-black/[0.08] py-14 sm:py-20 md:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-black/15 flex items-center justify-center text-[#F15A38]">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F15A38] font-semibold">
                  DISCIPLINE 05 &bull; ART DIRECTION &amp; SPATIAL
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-midnight-ink tracking-tight">
                Creative Direction
              </h2>

              <p className="text-base sm:text-lg font-medium text-midnight-ink/90 leading-snug">
                Holistic aesthetic stewardship across campaigns, photography, and spatial brand environments.
              </p>

              <p className="text-sm text-midnight-ink/75 leading-relaxed font-body">
                We guide the sensory perception of your brand across still life photography, exhibition spaces, campaign imagery, and physical pop-ups to ensure every aesthetic decision reinforces your core brand truth.
              </p>

              {/* Deliverables */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-gray block font-semibold">
                  Standard Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-midnight-ink/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F15A38]" />
                    <span>Campaign Treatment Decks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F15A38]" />
                    <span>Still Life Photography Direction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F15A38]" />
                    <span>Spatial &amp; Wayfinding Signage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F15A38]" />
                    <span>Retouching &amp; Color Grading</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-midnight-ink text-warm-ivory text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#F15A38] transition-colors"
                >
                  <span>Enquire About Creative Direction</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Preview (Kura Acoustics Gallery Staging) */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-black/15 shadow-xl">
                <Image
                  src="/images/kura_acoustics.jpg"
                  alt="Creative Direction and Spatial Staging Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-midnight-ink text-white px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
                  SPATIAL STAGING &bull; KURA ACOUSTICS
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* BOTTOM ENGAGEMENT ADVISOR / CTA                          */}
        {/* ======================================================== */}
        <section className="py-14 sm:py-20 md:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="p-6 sm:p-10 md:p-14 bg-white border border-black/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#3457E5] font-semibold">
                Tailored Commission Sprints
              </span>
              <h3 className="text-3xl font-display font-bold text-midnight-ink tracking-tight">
                Not sure which discipline your project requires?
              </h3>
              <p className="text-sm text-midnight-ink/75 font-body">
                We often tailor hybrid engagements uniting Identity, Packaging, and Digital Architecture. Schedule an exploratory consultation with our studio principals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/work"
                className="px-6 py-4 bg-[#F5F1E8] border border-black/20 text-midnight-ink text-xs font-mono uppercase tracking-widest font-semibold hover:border-black transition-colors text-center"
              >
                View Case Studies
              </Link>
              <Link
                href="/contact"
                className="px-6 py-4 bg-midnight-ink text-warm-ivory text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#3457E5] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>Initiate Project Brief</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Studio Colophon Footer */}
      <Footer showBanner={false} />
    </div>
  );
}
