import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function StudioIntro() {
  return (
    <section className="w-full bg-[#F5F1E8] border-b border-black/[0.08] py-20 md:py-32 relative overflow-hidden">
      {/* Background Architectural Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] font-display font-black text-[20vw] leading-none text-midnight-ink whitespace-nowrap -mr-16">
        FORMA
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 pb-6 sm:pb-8 border-b border-black/10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#3457E5] font-semibold">
            Thoughtful Branding &amp; Visual Storytelling
          </span>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="pt-10 sm:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Big Editorial Statement (Left / 7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-midnight-ink leading-[1.12] sm:leading-[1.08] tracking-[-0.03em]">
              We believe a brand should never apologize for taking up space. It should stand for something{" "}
              <span className="font-serif italic font-normal text-[#3457E5]">
                singular, unmistakable,
              </span>{" "}
              and enduring.
            </h2>

            <div className="pt-2 sm:pt-4 flex flex-wrap gap-2 text-[10px] sm:text-[11px] font-mono">
              <span className="px-3 py-1.5 bg-white border border-black/10 text-midnight-ink font-medium">
                STRATEGIC CONVICTION
              </span>
              <span className="px-3 py-1.5 bg-white border border-black/10 text-midnight-ink font-medium">
                SWISS TYPOGRAPHY
              </span>
              <span className="px-3 py-1.5 bg-white border border-black/10 text-midnight-ink font-medium">
                TACTILE PRINT INTELLIGENCE
              </span>
              <span className="px-3 py-1.5 bg-white border border-black/10 text-[#3457E5] font-semibold">
                ORIGINAL VISUAL SYSTEMS
              </span>
            </div>
          </div>

          {/* Structured Two-Part Breakdown (Right / 5 cols) */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10 border-l-0 lg:border-l border-t lg:border-t-0 border-black/10 pl-0 lg:pl-12 pt-8 lg:pt-0">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#F15A38] font-bold">01.</span>
                <h3 className="text-lg font-display font-semibold text-midnight-ink">
                  Thoughtful Brand Architecture
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-midnight-ink/75 font-body leading-relaxed">
                Before drawing a mark or picking a color, we interrogate category conventions. We uncover the tension, perspective, and core conviction that make your business irreplaceable in the eyes of discerning clients.
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#3457E5] font-bold">02.</span>
                <h3 className="text-lg font-display font-semibold text-midnight-ink">
                  Tactile &amp; Digital Storytelling
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-midnight-ink/75 font-body leading-relaxed">
                Great identity is not a static logo file. It is a living, breathing design language. From heavy debossed stationery to interactive web platforms, we craft every touchpoint with deliberate artistic intention.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold text-midnight-ink hover:text-[#3457E5] transition-colors"
              >
                <span>Read Studio Philosophy</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
