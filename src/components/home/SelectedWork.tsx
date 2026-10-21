import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function SelectedWork() {
  const [sole, aura, noir, kiln, klang] = projectsData;

  return (
    <section className="w-full bg-[#F5F1E8] border-b border-black/[0.08] py-16 sm:py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 border-b border-black/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F15A38] font-semibold">
                [ 02 / SELECTED WORK ]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-midnight-ink">
              Portfolio &amp; Case Archives
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-midnight-ink/70 max-w-xs font-mono">
              VARIOUS PROPORTIONS &bull; PHYSICAL PRINT &bull; BESPOKE SYSTEMS
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-3 bg-midnight-ink text-warm-ivory text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#3457E5] transition-colors shrink-0"
            >
              <span>Explore All Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Dynamic Asymmetric Grid with Varied Proportions */}
        <div className="pt-12 sm:pt-16 space-y-12 sm:space-y-16 lg:space-y-24">
          {/* ============================================================== */}
          {/* ROW 1: Asymmetric 2-Part (Aura Skincare + Solé Café)           */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Aura Botanics (Vertical Portrait 7 cols) */}
            <div className="lg:col-span-7 bg-[#17191C] text-[#F5F1E8] border border-black/20 p-5 sm:p-8 md:p-10 flex flex-col justify-between group">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono">
                <span className="text-[#F15A38] uppercase tracking-widest">
                  01 &bull; {aura.category}
                </span>
                <span className="text-white/60">{aura.year} &bull; {aura.client}</span>
              </div>

              <div className="py-8 space-y-6">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-white/10">
                  <Image
                    src={aura.image}
                    alt={aura.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#17191C]/90 text-white px-2 py-0.5 text-[9px] font-mono tracking-widest uppercase">
                    SPEC: 350GSM COTTON &bull; COLD-FOIL
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white">
                    {aura.title}
                  </h3>
                  <p className="text-sm text-white/70 max-w-xl leading-relaxed">
                    {aura.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                  {aura.deliverables.map((d, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 text-white/80">
                      {d}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/work/${aura.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest font-semibold text-[#F15A38] hover:text-white transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Solé Café (Square/Portrait 5 cols) */}
            <div className="lg:col-span-5 bg-white text-midnight-ink border border-black/15 p-6 md:p-8 flex flex-col justify-between group shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-black/10 text-xs font-mono">
                <span className="text-[#C85A32] uppercase tracking-widest font-bold">
                  02 &bull; {sole.category}
                </span>
                <span className="text-muted-gray">{sole.year}</span>
              </div>

              <div className="py-6 space-y-6">
                <div className="relative w-full aspect-square rounded-sm overflow-hidden border border-black/10">
                  <Image
                    src={sole.image}
                    alt={sole.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 right-3 bg-midnight-ink text-white px-2 py-0.5 text-[9px] font-mono tracking-wider font-bold">
                    TERRACOTTA &bull; TRAVERTINE
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-midnight-ink">
                    {sole.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-midnight-ink/80 leading-relaxed">
                    {sole.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-black/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-muted-gray uppercase">
                  {sole.client}
                </span>
                <Link
                  href={`/work/${sole.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest font-semibold text-[#C85A32] hover:text-midnight-ink transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* ROW 2: Cinematic Wide (KLANG Biennale 16:9 Landscape Full Span)*/}
          {/* ============================================================== */}
          <div className="border border-black/15 bg-white p-6 md:p-12 group transition-shadow duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative w-full aspect-[16/9] overflow-hidden border border-black/10">
                <Image
                  src={klang.image}
                  alt={klang.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#3457E5] text-white px-3 py-1 text-[10px] font-mono uppercase tracking-widest font-semibold">
                  POSTER CAMPAIGN &bull; BIENNALE 2026
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center justify-between text-xs font-mono pb-4 border-b border-black/10">
                  <span className="text-[#3457E5] font-semibold uppercase tracking-widest">
                    03 &bull; {klang.category}
                  </span>
                  <span className="text-muted-gray">{klang.client}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-midnight-ink tracking-tight">
                    {klang.title}
                  </h3>
                  <p className="text-sm text-midnight-ink/80 leading-relaxed font-body">
                    {klang.description}
                  </p>
                </div>

                <div className="p-4 bg-[#F5F1E8] border border-black/10 space-y-1">
                  <span className="text-[10px] font-mono text-muted-gray uppercase tracking-widest block">
                    Curatorial Spec:
                  </span>
                  <p className="text-xs font-mono text-midnight-ink">
                    {klang.artDirectionNotes}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/work/${klang.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-midnight-ink text-warm-ivory text-xs font-mono uppercase tracking-widest hover:bg-[#3457E5] transition-colors"
                  >
                    <span>Read Campaign Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* ROW 3: Independent Fashion Monograph (NOIR ARCHIVE 4:3)         */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#17191C] text-white p-6 md:p-12 border border-white/20">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/20 text-xs font-mono">
                <span className="text-[#F2D675] uppercase tracking-widest font-bold">
                  04 &bull; {noir.category}
                </span>
                <span className="text-white/80">{noir.year}</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                  {noir.title}
                </h3>
                <p className="text-base text-white/90 leading-relaxed font-body">
                  {noir.tagline}
                </p>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  {noir.description}
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-2 text-[10px] font-mono">
                {noir.deliverables.map((d, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 border border-white/20 text-white">
                    {d}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href={`/work/${noir.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#17191C] text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#F2D675] transition-colors"
                >
                  <span>View Fashion Identity</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative w-full aspect-[4/3] max-w-md mx-auto overflow-hidden border border-white/20 shadow-2xl">
              <Image
                src={noir.image}
                alt={noir.title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute top-3 right-3 bg-white text-[#17191C] px-2 py-0.5 text-[9px] font-mono font-bold">
                EDITION NOIR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
