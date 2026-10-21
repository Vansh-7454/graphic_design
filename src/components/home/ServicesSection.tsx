"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string>(servicesData[0].id);

  return (
    <section className="w-full bg-[#F5F1E8] border-b border-black/[0.08] py-16 sm:py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 border-b border-black/10 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#3457E5] font-semibold">
              [ 03 / STUDIO CAPABILITIES ]
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-midnight-ink">
              Our Services
            </h2>
          </div>
          <div className="max-w-md space-y-2">
            <p className="text-sm md:text-base text-midnight-ink/80 leading-relaxed font-body">
              Five core disciplines united by Swiss typographic discipline, material intelligence, and contemporary creative direction.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#F15A38]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F15A38]" />
              <span>CUSTOM CONTRACTS &bull; PRINCIPAL-LED PRACTICE</span>
            </div>
          </div>
        </div>

        {/* 5-Service Interactive Editorial Layout */}
        <div className="pt-8 sm:pt-12 divide-y divide-black/10 border-b border-black/10">
          {servicesData.map((service) => {
            const isOpen = activeService === service.id;

            return (
              <div
                key={service.id}
                className={`transition-all duration-300 ${
                  isOpen ? "bg-white/80" : "bg-transparent hover:bg-white/40"
                }`}
              >
                {/* Clickable Header Bar */}
                <button
                  onClick={() => setActiveService(isOpen ? "" : service.id)}
                  className="w-full py-6 sm:py-8 px-3 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-12">
                    <span className="text-xs sm:text-sm font-mono text-muted-gray">
                      {service.number}
                    </span>
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-display font-bold text-midnight-ink hover:text-[#3457E5] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                    <span className="hidden lg:inline-block text-xs font-mono uppercase tracking-wider text-midnight-ink/60">
                      {service.headline.slice(0, 50)}...
                    </span>
                    <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#3457E5]" />
                      ) : (
                        <Plus className="w-4 h-4 text-midnight-ink" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                {isOpen && (
                  <div className="px-4 sm:px-8 pb-10 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-black/5 animate-in fade-in duration-300">
                    <div className="lg:col-span-5 space-y-4">
                      <p className="text-base sm:text-lg font-medium text-midnight-ink leading-snug">
                        {service.headline}
                      </p>
                      <p className="text-sm text-midnight-ink/75 leading-relaxed font-body">
                        {service.description}
                      </p>
                      <div className="pt-2">
                        <Link
                          href={`/services#${service.id}`}
                          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold text-[#3457E5] hover:underline"
                        >
                          <span>Full Discipline Specifications</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-4 space-y-3">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-gray font-bold block">
                        Capabilities Included:
                      </span>
                      <ul className="space-y-2 text-xs font-mono text-midnight-ink/80">
                        {service.offerings.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#F15A38]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-3 space-y-3">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-gray font-bold block">
                        Tangible Deliverables:
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
                        {service.deliverables.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-[#F5F1E8] border border-black/10 text-midnight-ink"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Services Bottom Summary Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 border border-black/10 bg-white/40">
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="px-2 py-0.5 bg-midnight-ink text-white font-bold">INFO</span>
            <span className="text-midnight-ink/80">
              Need a cross-disciplinary engagement combining Identity, Packaging, and Digital?
            </span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold text-[#3457E5] hover:text-midnight-ink transition-colors"
          >
            <span>Request a Custom Sprint Proposal</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
