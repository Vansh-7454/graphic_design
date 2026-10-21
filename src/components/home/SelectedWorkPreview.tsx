import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function SelectedWorkPreview() {
  return (
    <section className="w-full bg-[#F5F1E8] border-b border-black/[0.08] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-black/10 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#3457E5] font-semibold">
              [ 03 / PORTFOLIO INDEX ]
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-midnight-ink">
              Selected Collaborations
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold text-midnight-ink hover:text-[#3457E5] transition-colors"
          >
            <span>View Full Archive (08 Projects)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-Column Asymmetric Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12">
          {projectsData.slice(0, 2).map((project, idx) => (
            <div
              key={project.id}
              className="border border-black/10 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
              style={{
                backgroundColor: project.heroTheme.bg,
                color: project.heroTheme.text,
              }}
            >
              {/* Card Meta Bar */}
              <div className="flex items-center justify-between pb-6 border-b" style={{ borderColor: project.heroTheme.border }}>
                <span className="text-[10px] font-mono tracking-widest uppercase opacity-75">
                  0{idx + 1} &bull; {project.category}
                </span>
                <span className="text-[10px] font-mono tracking-wider opacity-75">
                  {project.year} &bull; {project.client}
                </span>
              </div>

              {/* Visual Composition / Artwork Mock */}
              <div className="my-8 aspect-[16/10] w-full border flex flex-col justify-between p-6 relative overflow-hidden" style={{ borderColor: project.heroTheme.border }}>
                {/* Background graphic motif */}
                <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: project.heroTheme.accent }} />

                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono tracking-widest uppercase px-2 py-0.5" style={{ backgroundColor: project.heroTheme.accent, color: "#FFFFFF" }}>
                    IDENTITY SPEC
                  </span>
                  <span className="text-xs font-mono opacity-60">REF: {project.id.toUpperCase()}</span>
                </div>

                <div className="space-y-2 z-10">
                  <h4 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm opacity-80 max-w-sm font-normal">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-2 text-[10px] font-mono opacity-80">
                  {project.deliverables.map((deliv, i) => (
                    <span key={i} className="px-2 py-0.5 border" style={{ borderColor: project.heroTheme.border }}>
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer & Link */}
              <div className="pt-4 flex items-center justify-between border-t" style={{ borderColor: project.heroTheme.border }}>
                <span className="text-xs font-mono opacity-70">
                  {project.artDirectionNotes}
                </span>
                <Link
                  href={`/work#${project.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold hover:underline"
                  style={{ color: project.heroTheme.accent }}
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
