import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Journal & Critical Observations — FORMA Studio",
  description: "Essays and commentary on typography, visual culture, and brand architecture.",
};

const articles = [
  {
    id: "01",
    date: "OCTOBER 2026",
    category: "CRITICAL ESSAY",
    title: "Against the Blandening: Why Contemporary Brands Need Tension",
    excerpt: "When every tech company adopts the same rounded sans-serif and pastel gradients, brand equity collapses into noise. Here is how typographic conviction restores value.",
    readTime: "6 MIN READ",
  },
  {
    id: "02",
    date: "AUGUST 2026",
    category: "TYPOGRAPHY",
    title: "The Architecture of the Grid: From Basel to Modern Screens",
    excerpt: "Re-examining Josef Müller-Brockmann's systematic principles in an era of fluid digital viewports.",
    readTime: "8 MIN READ",
  },
  {
    id: "03",
    date: "MAY 2026",
    category: "MATERIAL CRAFT",
    title: "Tactile Intelligence: Why Physical Print Still Commands Reverence",
    excerpt: "In a world of infinite ephemeral pixels, the weight of a 400gsm duplex paper stock creates an indelible imprint on memory.",
    readTime: "5 MIN READ",
  },
];

export default function JournalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#17191C]">
      <Header />
      <main className="flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-24 w-full">
        {/* Page Header */}
        <div className="border-b border-black/10 pb-8 sm:pb-12 mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#F15A38] mb-3">
            <span>[ JOURNAL &bull; REFLECTIONS ]</span>
            <span>&bull;</span>
            <span>CRITICAL ESSAYS ON DESIGN</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-midnight-ink tracking-tight">
            Studio Journal
          </h1>
          <p className="text-base md:text-lg text-midnight-ink/75 max-w-2xl mt-4 font-normal">
            Occasional essays, field notes, and typographic critique exploring the evolution of visual identity in contemporary culture.
          </p>
        </div>

        {/* Articles List */}
        <div className="divide-y divide-black/10 border-b border-black/10">
          {articles.map((art) => (
            <article key={art.id} className="py-8 group flex flex-col md:flex-row md:items-baseline justify-between gap-6 hover:bg-white/40 px-4 transition-colors">
              <div className="md:w-1/4 space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#3457E5]">
                  {art.category}
                </span>
                <p className="text-xs font-mono text-muted-gray">{art.date} &bull; {art.readTime}</p>
              </div>

              <div className="md:w-2/3 space-y-3">
                <h2 className="text-2xl font-display font-semibold text-midnight-ink group-hover:text-[#3457E5] transition-colors">
                  {art.title}
                </h2>
                <p className="text-sm text-midnight-ink/70 leading-relaxed max-w-2xl">
                  {art.excerpt}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-midnight-ink group-hover:text-[#3457E5]">
                    Read Essay
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
