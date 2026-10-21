import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { projectsData } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Palette,
  Type,
  Calendar,
  Tag,
} from "lucide-react";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — FORMA Studio",
    };
  }

  return {
    title: `${project.title} — FORMA Case Study | ${project.discipline}`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject =
    projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject =
    projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#17191C]">
      {/* Studio Header Navigation */}
      <Header />

      <main className="flex-1 w-full">
        {/* ======================================================== */}
        {/* TOP BREADCRUMB & METADATA BAR                            */}
        {/* ======================================================== */}
        <div className="border-b border-black/10 py-4 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-between text-xs font-mono">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-midnight-ink hover:text-[#3457E5] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </Link>

          <div className="flex items-center gap-4 text-muted-gray">
            <span>INDEX: 0{currentIndex + 1} / 0{projectsData.length}</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline text-midnight-ink uppercase font-semibold">
              {project.category}
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* HERO SECTION: Title, Tagline & Large Cover Image         */}
        {/* ======================================================== */}
        <section className="py-8 sm:py-12 md:py-20 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-6 sm:space-y-10">
          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-white border border-black/15 text-[10px] font-mono tracking-widest uppercase text-[#3457E5] font-semibold">
                {project.discipline}
              </span>
              {project.isConcept && (
                <span className="px-2.5 py-1 bg-midnight-ink text-white text-[10px] font-mono tracking-widest uppercase font-semibold">
                  STUDIO CONCEPT
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-midnight-ink tracking-tight leading-[1.02]">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-midnight-ink/80 font-body leading-relaxed max-w-3xl">
              {project.tagline}
            </p>
          </div>

          {/* Large Hero Cover Image */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden border border-black/15 shadow-2xl bg-midnight-ink">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover object-center"
            />
            <div className="absolute top-4 left-4 bg-midnight-ink/90 text-warm-ivory px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase backdrop-blur-sm border border-white/10">
              SPEC: {project.artDirectionNotes}
            </div>
            <div className="absolute bottom-4 right-4 bg-white/95 text-midnight-ink px-3 py-1.5 text-[10px] font-mono tracking-wider font-semibold border border-black/10">
              {project.year} &bull; {project.clientType}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION: Overview, Challenge & Design Concept            */}
        {/* ======================================================== */}
        <section className="border-y border-black/10 py-12 sm:py-16 md:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column: Scope & Deliverables (4 cols) */}
            <div className="lg:col-span-4 space-y-8 border-b lg:border-b-0 lg:border-r border-black/10 pb-8 lg:pb-0 lg:pr-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#3457E5] font-semibold block">
                  Project Dossier
                </span>
                <div className="space-y-3 text-xs font-mono text-midnight-ink/80 divide-y divide-black/10">
                  <div className="pt-2 flex justify-between">
                    <span className="text-muted-gray">DISCIPLINE</span>
                    <span className="font-semibold text-right">{project.discipline}</span>
                  </div>
                  <div className="pt-3 flex justify-between">
                    <span className="text-muted-gray">TIMELINE</span>
                    <span className="font-semibold">{project.year}</span>
                  </div>
                  <div className="pt-3 flex justify-between">
                    <span className="text-muted-gray">CATEGORY</span>
                    <span className="font-semibold">{project.category}</span>
                  </div>
                  <div className="pt-3 flex justify-between">
                    <span className="text-muted-gray">CLASSIFICATION</span>
                    <span className="font-semibold text-[#F15A38]">Concept Study</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-gray block font-semibold">
                  Deliverables Produced:
                </span>
                <ul className="space-y-2 text-xs font-mono text-midnight-ink/90">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: In-Depth Narrative (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Introduction */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F15A38] font-semibold block">
                  Project Introduction
                </span>
                <p className="text-lg sm:text-xl text-midnight-ink font-body leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Challenge & Concept Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="p-6 bg-[#F5F1E8]/70 border border-black/10 space-y-3">
                  <h3 className="text-sm font-mono uppercase tracking-widest text-midnight-ink font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F15A38]" />
                    <span>The Creative Challenge</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-midnight-ink/80 font-body leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 bg-[#F5F1E8]/70 border border-black/10 space-y-3">
                  <h3 className="text-sm font-mono uppercase tracking-widest text-midnight-ink font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3457E5]" />
                    <span>The Design Concept</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-midnight-ink/80 font-body leading-relaxed">
                    {project.concept}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION: Color Architecture & Typography Specifications */}
        {/* ======================================================== */}
        <section className="py-12 sm:py-16 md:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 border-b border-black/10 space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Color Architecture */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3457E5] font-semibold">
                <Palette className="w-4 h-4" />
                <span>Color Architecture</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-midnight-ink">
                Chromatic System
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.palette.map((swatch, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white border border-black/10 flex items-center gap-3.5"
                  >
                    <span
                      className="w-10 h-10 border border-black/15 shrink-0"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div className="space-y-0.5 overflow-hidden">
                      <p className="text-xs font-mono font-bold text-midnight-ink truncate">
                        {swatch.name}
                      </p>
                      <p className="text-[10px] font-mono text-muted-gray">
                        {swatch.hex} &bull; {swatch.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typographic Specifications */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F15A38] font-semibold">
                <Type className="w-4 h-4" />
                <span>Typography Direction</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-midnight-ink">
                Font Architecture
              </h3>

              <div className="p-6 bg-white border border-black/10 space-y-4">
                <div className="space-y-1 pb-3 border-b border-black/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-gray">
                    Primary Display Headline
                  </span>
                  <p className="text-xl sm:text-2xl font-display font-bold text-midnight-ink">
                    {project.typography.headlineFont}
                  </p>
                </div>

                <div className="space-y-1 pb-3 border-b border-black/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-gray">
                    Body &amp; Technical Metadata
                  </span>
                  <p className="text-base font-body text-midnight-ink">
                    {project.typography.bodyFont}
                  </p>
                </div>

                {project.typography.accentFont && (
                  <div className="space-y-1 pb-3 border-b border-black/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-gray">
                      Editorial Accent
                    </span>
                    <p className="text-lg font-serif italic text-midnight-ink">
                      {project.typography.accentFont}
                    </p>
                  </div>
                )}

                <p className="text-xs font-mono text-muted-gray pt-1">
                  Spec Note: {project.typography.notes}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION: Supporting Brand Mockups & Image Gallery        */}
        {/* ======================================================== */}
        <section className="py-12 sm:py-16 md:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 border-b border-black/10 space-y-8 sm:space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#3457E5] font-semibold">
              [ VISUAL ARTIFACTS &bull; SPECIMENS ]
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-midnight-ink tracking-tight">
              Supporting Brand Mockups
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.galleryImages.map((gImg, idx) => (
              <div
                key={idx}
                className="border border-black/15 bg-white p-4 space-y-3 group"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-midnight-ink">
                  <Image
                    src={gImg.src}
                    alt={gImg.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="pt-2 flex items-center justify-between text-xs font-mono text-muted-gray">
                  <span>PLATE 0{idx + 1}</span>
                  <span className="text-right text-midnight-ink/80 max-w-sm truncate">
                    {gImg.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* PREVIOUS / NEXT PROJECT NAVIGATION                       */}
        {/* ======================================================== */}
        <section className="border-b border-black/10 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
            {/* Previous Project Link */}
            <Link
              href={`/work/${prevProject.slug}`}
              className="p-6 sm:p-8 md:p-12 flex flex-col justify-between hover:bg-[#F5F1E8]/50 transition-colors group"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-muted-gray uppercase tracking-widest pb-4">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>Previous Case Study</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-xl sm:text-3xl font-display font-bold text-midnight-ink group-hover:text-[#3457E5] transition-colors">
                  {prevProject.title}
                </h4>
                <p className="text-xs font-mono text-muted-gray">
                  {prevProject.category} &bull; {prevProject.discipline}
                </p>
              </div>
            </Link>

            {/* Next Project Link */}
            <Link
              href={`/work/${nextProject.slug}`}
              className="p-6 sm:p-8 md:p-12 flex flex-col justify-between sm:items-end hover:bg-[#F5F1E8]/50 transition-colors group text-left sm:text-right"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-muted-gray uppercase tracking-widest pb-4">
                <span>Next Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl sm:text-3xl font-display font-bold text-midnight-ink group-hover:text-[#3457E5] transition-colors">
                  {nextProject.title}
                </h4>
                <p className="text-xs font-mono text-muted-gray">
                  {nextProject.category} &bull; {nextProject.discipline}
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* ======================================================== */}
        {/* INITIATE COLLABORATION CONTACT CTA                       */}
        {/* ======================================================== */}
        <section className="py-14 sm:py-20 md:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="p-6 sm:p-10 md:p-16 border-2 border-midnight-ink bg-[#17191C] text-[#F5F1E8] flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F2D675] font-semibold">
                Start a Brand Commission
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-[#F5F1E8] tracking-tight">
                Inspired by the {project.title} system?
              </h3>
              <p className="text-sm text-[#F5F1E8]/80 font-body">
                We design bespoke brand identities, tactile packaging, and digital experiences tailored to ambitious commercial objectives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#F15A38] text-white text-xs font-mono uppercase tracking-widest font-semibold hover:bg-white hover:text-midnight-ink transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Initiate Project Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Studio Colophon Footer */}
      <Footer showBanner={false} />
    </div>
  );
}
