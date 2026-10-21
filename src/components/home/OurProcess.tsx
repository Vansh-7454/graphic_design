import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function OurProcess() {
  const steps = [
    {
      step: "01",
      name: "Discover",
      focus: "Immersion & Audit",
      description:
        "We immerse ourselves in your market dynamics, customer psychology, and competitive landscape. We strip away assumptions to isolate the singular tension your brand must solve.",
      deliverables: ["Competitive Audit", "Category Analysis", "Stakeholder Synthesis"],
      accentColor: "#F15A38", // Vermilion
    },
    {
      step: "02",
      name: "Define",
      focus: "Strategic Architecture",
      description:
        "We establish the conceptual backbone before sketching a single letterform. We define your brand positioning, core narrative, verbal tone of voice, and guiding aesthetic tenets.",
      deliverables: ["Positioning Framework", "Verbal Tone Matrix", "Brand Narrative"],
      accentColor: "#3457E5", // Electric Cobalt
    },
    {
      step: "03",
      name: "Design",
      focus: "Visual System & Craft",
      description:
        "We craft the visual identity through rigorous typographic exploration, color architecture, material sampling, and structural prototypes across print and digital media.",
      deliverables: ["Typographic Direction", "Identity Prototypes", "Material Specimens"],
      accentColor: "#17191C", // Midnight
    },
    {
      step: "04",
      name: "Deliver",
      focus: "Production & Toolkits",
      description:
        "We produce press-ready production artwork, supervise printer proofing, engineer digital component systems, and deliver a comprehensive brand guideline manual.",
      deliverables: ["Brand Identity Manual", "Vector Asset Suite", "Print-Ready Press Files"],
      accentColor: "#F2D675", // Butter Yellow
    },
  ];

  return (
    <section className="w-full bg-[#F5F1E8] border-b border-black/[0.08] py-16 sm:py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 border-b border-black/10 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F15A38] font-semibold">
              [ 04 / METHODOLOGY ]
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-midnight-ink">
              Our Process
            </h2>
          </div>
          <p className="text-sm md:text-base text-midnight-ink/80 max-w-md font-body leading-relaxed">
            A disciplined four-phase methodology that balances strategic rigor with unfiltered creative ambition.
          </p>
        </div>

        {/* 4-Phase Stepped Process Grid */}
        <div className="pt-8 sm:pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-6 sm:p-8 border border-black/10 bg-white/70 flex flex-col justify-between group hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                style={{ backgroundColor: item.accentColor }}
              />

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-base text-midnight-ink">
                    PHASE {item.step}
                  </span>
                  <span className="text-muted-gray uppercase tracking-wider">
                    {item.focus}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-midnight-ink group-hover:text-[#3457E5] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-midnight-ink/75 leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 sm:pt-8 border-t border-black/10 mt-6 sm:mt-8 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-gray block">
                  Key Milestones:
                </span>
                <ul className="space-y-1 text-xs font-mono text-midnight-ink/80">
                  {item.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-midnight-ink" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Guarantee Note */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 border border-black/10 bg-[#17191C] text-[#F5F1E8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#3457E5] shrink-0" />
            <p className="text-xs sm:text-sm font-mono text-[#F5F1E8]/90">
              Each sprint is guided directly by our studio principals. We do not pass work off to junior account managers.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold text-[#F2D675] hover:text-white transition-colors shrink-0"
          >
            <span>Discuss Timeline &amp; Availability</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
