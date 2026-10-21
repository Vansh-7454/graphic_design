"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F1E8] border-b border-black/[0.08] pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center"
        >
          {/* ======================================================== */}
          {/* LEFT COLUMN: Editorial Typography & Intentional Action    */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
            {/* Studio Badge / Discipline Index */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-midnight-ink text-warm-ivory text-[10px] font-mono font-medium tracking-[0.22em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5] animate-pulse" />
                Identity &bull; Systems &bull; Print
              </span>
              <span className="text-[11px] font-mono tracking-wider text-muted-gray uppercase hidden sm:inline-block">
                Mumbai &bull; Bengaluru &bull; India
              </span>
            </motion.div>

            {/* Oversized Expressive Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-bold tracking-[-0.035em] text-midnight-ink leading-[1.04] sm:leading-[0.98]">
                <span>Good Brands</span> <br />
                <span>Don&apos;t Blend In.</span> <br />
                <span className="inline-flex items-baseline gap-2.5">
                  <span className="font-serif italic font-normal text-midnight-ink/90">
                    They Stand
                  </span>
                  <span className="font-display font-extrabold text-[#3457E5]">
                    Apart.
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-midnight-ink/80 font-normal leading-relaxed max-w-xl"
            >
              We build distinctive brand identities, thoughtful visual systems,
              and creative experiences that help ambitious businesses stand apart.
            </motion.p>

            {/* Call To Action Pairing */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
            >
              {/* Primary: Explore Our Work */}
              <Link
                href="/work"
                className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#17191C] text-[#F5F1E8] font-medium text-xs sm:text-sm tracking-wider uppercase overflow-hidden border border-[#17191C] hover:bg-[#3457E5] hover:border-[#3457E5] transition-all duration-300 shadow-sm"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              {/* Secondary: Start a Project */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent text-[#17191C] font-medium text-xs sm:text-sm tracking-wider uppercase border border-[#17191C]/30 hover:border-[#17191C] hover:bg-[#17191C] hover:text-[#F5F1E8] transition-all duration-300"
              >
                <span>Start a Project</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F15A38] group-hover:bg-[#F2D675] transition-colors" />
              </Link>
            </motion.div>

            {/* Studio Discipline & Availability Indicators */}
            <motion.div
              variants={itemVariants}
              className="pt-6 sm:pt-8 border-t border-black/10 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg"
            >
              <div>
                <p className="text-lg sm:text-2xl font-display font-bold text-midnight-ink tracking-tight">
                  Identity
                </p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-gray mt-1">
                  &amp; Systems
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-display font-bold text-midnight-ink tracking-tight">
                  Tactile
                </p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-gray mt-1">
                  Print &amp; Packaging
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-display font-bold text-[#3457E5] tracking-tight">
                  Digital
                </p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-gray mt-1">
                  Art Direction
                </p>
              </div>
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Gallery-Grade Editorial Art Direction      */}
          {/* ======================================================== */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 xl:col-span-6 relative w-full flex items-center justify-center"
          >
            {/* Hero Artwork Showcase Container */}
            <div className="relative w-full max-w-[560px] lg:max-w-none">
              {/* Primary Showcase Card: Luxury Monograph Case Study */}
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-black/10 shadow-[0_20px_50px_rgba(23,25,28,0.12)] bg-white group transition-transform duration-500 hover:-translate-y-1">
                <Image
                  src="/images/forma_magazine.jpg"
                  alt="Studio Forma Editorial Design & Brand Monograph"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                  className="object-cover object-center filter saturate-[1.02] contrast-[1.02]"
                />
                
                {/* Museum Corner Identification */}
                <div className="absolute top-4 left-4 bg-[#17191C]/90 backdrop-blur-md text-[#F5F1E8] px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase">
                  MONOGRAPH &bull; VOL. 04
                </div>

                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-[#17191C] px-3 py-1 text-[9px] font-mono tracking-wider font-semibold border border-black/10 shadow-sm">
                  FORMA MAGAZINE / ZURICH
                </div>
              </div>

              {/* Floating Architectural Spec Card */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 p-4 sm:p-5 bg-white/95 backdrop-blur-md border border-black/10 shadow-[0_16px_36px_rgba(23,25,28,0.1)] z-20 max-w-[280px] sm:max-w-[320px]">
                <div className="flex items-center justify-between pb-2 border-b border-black/10 gap-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#3457E5] font-semibold">
                    [ SYSTEM SPECIFICATION ]
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#F15A38]" />
                </div>
                <div className="pt-2.5 space-y-1.5 text-left">
                  <p className="text-xs sm:text-sm font-display font-bold text-midnight-ink tracking-tight">
                    Custom Editorial Typography &amp; Cotton Stock
                  </p>
                  <p className="text-[11px] text-midnight-ink/70 font-mono leading-relaxed">
                    Custom ligature set paired with 320gsm unbleached cotton paper and blind deboss finish.
                  </p>
                </div>
              </div>

              {/* Subtle Studio Archive Tag */}
              <div className="hidden sm:flex absolute -top-4 -right-4 px-3 py-1.5 bg-midnight-ink text-warm-ivory border border-black/10 text-[9px] font-mono uppercase tracking-widest items-center gap-2 shadow-sm">
                <span>ARCHIVE ID: SF-2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3457E5]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
