import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { projectsData } from "@/data/projects";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Portfolio & Selected Archive — FORMA Graphic Design & Branding",
  description:
    "Explore our portfolio of concept identity systems, structural packaging, tactile print, and campaign art direction.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#17191C]">
      {/* Studio Header Navigation */}
      <Header />

      <main className="flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-24 w-full">
        {/* Page Header */}
        <div className="border-b border-black/10 pb-8 sm:pb-12 mb-8 sm:mb-12 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-midnight-ink tracking-tight">
            Work &amp; Case Studies
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <p className="text-base sm:text-lg text-midnight-ink/80 max-w-2xl font-body leading-relaxed">
              A curated collection of concept brand identities, tactile packaging systems, editorial publications, and poster campaigns crafted with Swiss modernist discipline.
            </p>

            <div className="p-3 bg-white border border-black/10 text-xs font-mono text-muted-gray max-w-sm">
              <span className="text-midnight-ink font-semibold uppercase block mb-0.5">
                Studio Transparency:
              </span>
              All six projects featured represent original concept explorations and self-initiated design research by FORMA.
            </div>
          </div>
        </div>

        {/* Working Category Filters & Asymmetric Grid */}
        <PortfolioGrid projects={projectsData} />

        {/* Bottom Commission Consultation Strip */}
        <div className="mt-20 p-8 md:p-12 border-2 border-midnight-ink bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-display font-bold text-midnight-ink">
              Have an upcoming branding challenge?
            </h3>
            <p className="text-xs sm:text-sm text-midnight-ink/75 font-body">
              We partner with founders and creative leaders to engineer distinctive identity systems.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-4 bg-midnight-ink text-warm-ivory text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#3457E5] transition-colors shrink-0"
          >
            <span>Start a Project Brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* Studio Colophon Footer */}
      <Footer showBanner={false} />
    </div>
  );
}
