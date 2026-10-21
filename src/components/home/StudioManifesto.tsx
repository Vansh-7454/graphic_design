import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function StudioManifesto() {
  const manifestoPillars = [
    {
      num: "01",
      title: "Distinct Over Default",
      body: "The algorithmic average is safe, clean, and entirely forgettable. We construct visual identities with deliberate tension, sharp typographic perspective, and the courage to claim a distinctive point of view.",
    },
    {
      num: "02",
      title: "Form Follows Conviction",
      body: "Aesthetics without strategic foundation is mere decoration. Every grid ratio, typeface choice, and color interaction is engineered to advance a clear commercial objective.",
    },
    {
      num: "03",
      title: "Tactile Intelligence",
      body: "The physical world cannot be replicated by glowing pixels. We obsess over paper stock density, blind debossing depth, cold foils, and unboxing architectures that create visceral memories.",
    },
    {
      num: "04",
      title: "Enduring Over Ephemeral",
      body: "We reject short-lived internet design trends. We build identity ecosystems anchored in timeless modernist discipline that will look as sharp and authoritative in ten years as they do today.",
    },
  ];

  return (
    <section className="w-full bg-[#17191C] text-[#F5F1E8] py-16 sm:py-24 md:py-36 relative overflow-hidden border-b border-white/10">
      {/* Editorial Background Crosshairs & Grid Coordinate */}
      <div className="hidden sm:block absolute top-8 left-8 text-[10px] font-mono text-[#F5F1E8]/30 select-none">
        + MANIFESTO &bull; REF: FORMA-04
      </div>
      <div className="hidden sm:block absolute top-8 right-8 text-[10px] font-mono text-[#F5F1E8]/30 select-none">
        MUMBAI &bull; BENGALURU +
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative">
        {/* Massive Typographic Lead */}
        <div className="border-b border-white/10 pb-12 sm:pb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest uppercase text-[#F2D675]">
            <span>Studio Manifesto</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2D675]" />
            <span>Core Convictions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-display font-bold tracking-[-0.035em] text-[#F5F1E8] leading-[1.02] sm:leading-[0.96] max-w-5xl">
            In an era of endless imitation,{" "}
            <span className="font-serif italic font-normal text-[#F2D675]">
              originality is the only real leverage.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-[#F5F1E8]/70 max-w-2xl font-light leading-relaxed pt-2">
            We don&apos;t build brands that fit in. We craft visual languages that make your business impossible to ignore.
          </p>
        </div>

        {/* 4-Pillar Architectural Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-10 sm:pt-16">
          {manifestoPillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-6 sm:p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between group hover:border-[#3457E5] hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="space-y-4 sm:space-y-6">
                <span className="text-xs font-mono text-[#3457E5] font-bold tracking-widest block">
                  {pillar.num} / CONVICTION
                </span>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#F5F1E8] group-hover:text-[#F2D675] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#F5F1E8]/70 leading-relaxed font-body">
                  {pillar.body}
                </p>
              </div>

              <div className="pt-6 sm:pt-8 border-t border-white/10 mt-6 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#F5F1E8]/40">
                  STUDIO PRINCIPLE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5] group-hover:bg-[#F2D675] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Manifesto Action Row */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="text-xs font-mono text-[#F5F1E8]/60 space-y-1 text-left">
            <p>SWISS EDITORIAL DISCIPLINE &bull; CONTEMPORARY BRAND DESIGN</p>
            <p className="text-[#F2D675]">STUDIO FORMA &bull; VISUAL IDENTITY &amp; EDITORIAL SYSTEMS</p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#17191C] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#F2D675] transition-colors"
          >
            <span>Learn More About Our Team</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
