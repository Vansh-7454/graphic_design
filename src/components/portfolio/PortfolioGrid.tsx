"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem, ProjectCategory } from "@/types";
import { ArrowUpRight, Sparkles, Filter } from "lucide-react";

interface PortfolioGridProps {
  projects: ProjectItem[];
}

type FilterOption = "All" | ProjectCategory;

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<FilterOption>("All");

  const categories: FilterOption[] = [
    "All",
    "Branding",
    "Packaging",
    "Graphic Design",
    "Campaigns",
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div className="space-y-12">
      {/* Category Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-black/10">
        <div className="flex items-center gap-2 text-xs font-mono text-muted-gray uppercase tracking-widest">
          <Filter className="w-3.5 h-3.5 text-midnight-ink" />
          <span>Category Filter:</span>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 border flex items-center gap-2 shrink-0 ${
                  isActive
                    ? "bg-midnight-ink text-warm-ivory border-midnight-ink font-semibold shadow-sm"
                    : "bg-white/60 text-midnight-ink/80 border-black/15 hover:border-black/40 hover:bg-white"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-black/5 text-muted-gray"
                  }`}
                >
                  0{count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Asymmetric Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
        {filteredProjects.map((project, index) => {
          // Asymmetric column spanning logic for varied visual cadence
          const spanClass =
            index % 3 === 0
              ? "lg:col-span-8"
              : index % 3 === 1
              ? "lg:col-span-4"
              : "lg:col-span-12";

          return (
            <article
              key={project.id}
              className={`${spanClass} group flex flex-col justify-between border border-black/15 bg-white transition-all duration-300 hover:shadow-xl`}
            >
              {/* Card Header Bar */}
              <div className="p-4 sm:p-6 border-b border-black/10 flex items-center justify-between text-xs font-mono">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3457E5]" />
                  <span className="text-midnight-ink font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                    {project.category}
                  </span>
                  {project.isConcept && (
                    <span className="px-2 py-0.5 bg-[#F5F1E8] border border-black/10 text-[9px] text-muted-gray font-semibold tracking-widest uppercase">
                      STUDIO CONCEPT
                    </span>
                  )}
                </div>
                <span className="text-muted-gray text-xs">{project.year}</span>
              </div>

              {/* Visual Preview Image */}
              <Link
                href={`/work/${project.slug}`}
                className="relative w-full aspect-[16/10] overflow-hidden bg-[#17191C] block"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Floating Spec Label */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-midnight-ink/90 text-warm-ivory px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase backdrop-blur-sm border border-white/10">
                  {project.discipline}
                </div>
              </Link>

              {/* Content & Metadata */}
              <div className="p-5 sm:p-8 flex flex-col justify-between flex-1 space-y-4 sm:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <Link href={`/work/${project.slug}`} className="block">
                    <h3 className="text-xl sm:text-3xl font-display font-bold text-midnight-ink group-hover:text-[#3457E5] transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-midnight-ink/80 font-body leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                  {/* Color Swatch Dots */}
                  <div className="flex items-center gap-1.5">
                    {project.palette.slice(0, 4).map((c, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-none border border-black/15"
                        style={{ backgroundColor: c.hex }}
                        title={`${c.name} (${c.hex})`}
                      />
                    ))}
                    <span className="text-[10px] font-mono text-muted-gray pl-1">
                      {project.palette.length} SWATCHES
                    </span>
                  </div>

                  {/* Direct Link to Detail Page */}
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest font-semibold text-midnight-ink group-hover:text-[#3457E5] transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center space-y-3 border border-dashed border-black/20 bg-white/40">
          <p className="text-base font-display font-medium text-midnight-ink">
            No projects found in this category.
          </p>
          <button
            onClick={() => setSelectedCategory("All")}
            className="text-xs font-mono text-[#3457E5] underline uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
