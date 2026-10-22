import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Compass, Layers, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About FORMA — We Make Ideas Impossible to Ignore",
  description:
    "Learn about FORMA's studio philosophy, brand strategy approach, creative principles, and tactile design values.",
};

export default function AboutPage() {
  const creativePrinciples = [
    {
      number: "01",
      title: "Tension Over Uniformity",
      description:
        "When every competitor converges on the same rounded typeface and pastel aesthetic, brand equity evaporates. We introduce deliberate visual tension that anchors memory and commands respect.",
      icon: Sparkles,
      accent: "#F15A38",
    },
    {
      number: "02",
      title: "Conviction Precedes Form",
      description:
        "Graphic styling without strategic conviction is mere decoration. We begin by defining the singular business truth of your offering before drafting a single mark or layout grid.",
      icon: Compass,
      accent: "#3457E5",
    },
    {
      number: "03",
      title: "Material Intelligence",
      description:
        "In a culture overwhelmed by ephemeral digital noise, the physical artifact retains immense authority. We obsess over paper weight, blind debossing depth, and tactile finishes that people keep.",
      icon: Layers,
      accent: "#17191C",
    },
    {
      number: "04",
      title: "Disciplined Reduction",
      description:
        "True confidence is knowing what to omit. By eliminating decorative filler, we ensure your core message lands with maximum sharpness, clarity, and enduring relevance.",
      icon: ShieldCheck,
      accent: "#F2D675",
    },
  ];

  const studioValues = [
    {
      label: "Intentionally Boutique",
      detail:
        "We intentionally limit our concurrent client roster to four major brand commissions per cycle. This guarantees direct partner immersion on every phase of your project.",
    },
    {
      label: "Radical Craft",
      detail:
        "We reject templates, generic UI kits, and cookie-cutter branding patterns. Every grid system, custom typographic nuance, and color architecture is crafted bespoke.",
    },
    {
      label: "Long-Horizon Thinking",
      detail:
        "We don't chase six-month design fads. We build identity languages anchored in Swiss typographic discipline that remain authoritative and fresh for years to come.",
    },
    {
      label: "Direct Collaboration",
      detail:
        "You work directly with the practitioners designing your identity. No junior pass-offs, no bureaucratic layers, and no wasted communication.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#17191C]">
      {/* Studio Navigation Header */}
      <Header />

      <main className="flex-1 w-full">
        {/* ======================================================== */}
        {/* SECTION 1: Page Hero & Statement                        */}
        {/* ======================================================== */}
        <section className="border-b border-black/[0.08] py-16 sm:py-20 md:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-display font-bold tracking-tight text-midnight-ink leading-[1.05] sm:leading-[1.02] max-w-5xl">
              We Make Ideas <br />
              <span className="font-serif italic font-normal text-[#3457E5]">
                Impossible to Ignore.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-midnight-ink/80 max-w-2xl font-body leading-relaxed pt-2">
              FORMA is an independent graphic design and branding studio. We partner with ambitious leaders to craft distinctive visual identities, thoughtful physical systems, and evocative digital experiences.
            </p>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 2: Studio Atelier Visual & Strategic Stance     */}
        {/* ======================================================== */}
        <section className="border-b border-black/[0.08] py-16 sm:py-20 md:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Studio Workspace Image */}
            <div className="lg:col-span-7 relative w-full aspect-[16/10] overflow-hidden border border-black/15 shadow-xl">
              <Image
                src="/images/studio_atelier.jpg"
                alt="FORMA Design Studio Atelier in Mumbai"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-midnight-ink/90 text-warm-ivory px-3 py-1 text-[10px] font-mono tracking-widest uppercase backdrop-blur-sm">
                ATELIER &bull; MUMBAI / BLR
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 text-midnight-ink px-3 py-1 text-[10px] font-mono tracking-wider font-semibold border border-black/10">
                SWISS TYPOGRAPHIC ARCHITECTURE
              </div>
            </div>

            {/* Strategic Stance Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F15A38] font-bold">
                Our Strategic Stance
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-midnight-ink tracking-tight leading-snug">
                Clarity precedes aesthetics. Conviction defines identity.
              </h2>

              <p className="text-sm text-midnight-ink/80 font-body leading-relaxed">
                Most branding fails not from poor aesthetic execution, but from strategic ambiguity. When an organization cannot articulate what makes its point of view unique, designers are left decorating a void.
              </p>

              <p className="text-sm text-midnight-ink/80 font-body leading-relaxed">
                We combine deep interrogation with contemporary art direction. We challenge category conventions, eliminate timid compromises, and translate your core ambition into an unmistakable visual language.
              </p>

              <div className="pt-2 border-t border-black/10 flex items-center justify-between text-xs font-mono text-muted-gray">
                <span>ESTABLISHED 2019</span>
                <span>&bull;</span>
                <span className="text-midnight-ink font-semibold">PRINCIPAL-LED COLLABORATION</span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 3: Distinctive Typography-Led Statement        */}
        {/* ======================================================== */}
        <section className="w-full bg-[#17191C] text-[#F5F1E8] py-16 sm:py-20 md:py-28 border-b border-white/10 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-6 sm:space-y-8">
            <blockquote className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-medium text-[#F5F1E8] leading-[1.15] sm:leading-[1.12] tracking-tight max-w-5xl">
              &ldquo;Good design makes something look pleasant.{" "}
              <span className="font-serif italic font-normal text-[#F2D675]">
                Exceptional branding makes a business unforgettable,
              </span>{" "}
              defensible, and exponentially more valuable.&rdquo;
            </blockquote>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#F5F1E8]/60">
              <p>THE FORMA STUDIO CREDO &bull; DISTINCTIVE DESIGN FOR VISIONARY BRANDS</p>
              <p className="text-[#3457E5] font-semibold">MUMBAI &bull; BENGALURU &bull; INDIA</p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 4: Creative Principles Grid                    */}
        {/* ======================================================== */}
        <section className="border-b border-black/[0.08] py-16 sm:py-20 md:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="pb-8 sm:pb-12 border-b border-black/10">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-midnight-ink tracking-tight">
              Our Creative Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-12">
            {creativePrinciples.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.number}
                  className="p-6 sm:p-8 border border-black/10 bg-white/70 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-bold" style={{ color: item.accent }}>
                        {item.number}
                      </span>
                      <IconComp className="w-5 h-5 text-midnight-ink/60 group-hover:text-[#3457E5] transition-colors" />
                    </div>

                    <h3 className="text-xl font-display font-bold text-midnight-ink group-hover:text-[#3457E5] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-midnight-ink/75 leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 sm:pt-8 border-t border-black/10 mt-6 flex items-center justify-between text-[10px] font-mono text-muted-gray">
                    <span>FORMA CANON</span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accent }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 5: Studio Values List                          */}
        {/* ======================================================== */}
        <section className="border-b border-black/[0.08] py-16 sm:py-20 md:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-midnight-ink tracking-tight">
                How We Operate
              </h2>
              <p className="text-xs sm:text-sm text-midnight-ink/80 font-body leading-relaxed pr-2 sm:pr-6">
                We believe the best creative partnerships are founded on radical candor, focused craft, and mutual respect for the power of thoughtful design.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-black/10 border-y border-black/10">
              {studioValues.map((val, idx) => (
                <div key={idx} className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                  <div className="sm:w-1/3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
                    <h3 className="text-sm sm:text-base font-display font-bold text-midnight-ink">
                      {val.label}
                    </h3>
                  </div>
                  <p className="sm:w-2/3 text-xs sm:text-sm text-midnight-ink/75 font-body leading-relaxed">
                    {val.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 6: Cross-Linking Call to Action (Portfolio & Contact) */}
        {/* ======================================================== */}
        <section className="py-14 sm:py-20 md:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="p-6 sm:p-10 md:p-16 border-2 border-midnight-ink bg-white flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#3457E5] font-semibold">
                Next Steps
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-midnight-ink tracking-tight">
                Experience our work or begin a conversation.
              </h3>
              <p className="text-sm text-midnight-ink/80 font-body">
                Explore our portfolio of brand identity systems and publications, or submit an inquiry to discuss your next project horizon.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F5F1E8] border border-black/20 text-midnight-ink text-xs font-mono uppercase tracking-widest font-semibold hover:border-black transition-colors"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#17191C] text-warm-ivory text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#3457E5] transition-colors"
              >
                <span>Start a Project</span>
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
