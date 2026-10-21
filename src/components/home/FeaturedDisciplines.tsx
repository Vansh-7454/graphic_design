import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export function FeaturedDisciplines() {
  return (
    <section className="w-full bg-[#F5F1E8] border-b border-black/[0.08] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-black/10 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F15A38] font-semibold">
              [ 02 / EXPERTISE ]
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-midnight-ink">
              Core Studio Disciplines
            </h2>
          </div>
          <p className="text-sm md:text-base text-midnight-ink/70 max-w-md font-normal leading-relaxed">
            We merge strategic rigor with tactile craftsmanship to build brands that establish lasting cultural presence.
          </p>
        </div>

        {/* 4-Column Swiss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/10 border-b border-black/10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group p-6 md:p-8 flex flex-col justify-between hover:bg-white/80 transition-colors duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono text-muted-gray">
                  <span>{service.number}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#3457E5]">
                    &bull; DISCIPLINE
                  </span>
                </div>

                <h3 className="text-xl font-display font-semibold text-midnight-ink group-hover:text-[#3457E5] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-midnight-ink/75 leading-relaxed">
                  {service.headline}
                </p>
              </div>

              <div className="pt-8">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-gray block">
                    Focus Areas:
                  </span>
                  <ul className="text-xs space-y-1 font-mono text-midnight-ink/70">
                    {service.offerings.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[#F15A38]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-midnight-ink group-hover:text-[#3457E5] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
