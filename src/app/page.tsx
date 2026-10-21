import React from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { StudioIntro } from "@/components/home/StudioIntro";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StudioManifesto } from "@/components/home/StudioManifesto";
import { OurProcess } from "@/components/home/OurProcess";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#17191C]">
      {/* Studio Header Navigation */}
      <Header />

      {/* Main Homepage Flow */}
      <main className="flex-1">
        {/* Approved Hero Section */}
        <Hero />

        {/* 1. Studio Introduction */}
        <StudioIntro />

        {/* 2. Selected Work (Varied Proportions & Custom Palettes) */}
        <SelectedWork />

        {/* 3. Our Services (5 Core Disciplines) */}
        <ServicesSection />

        {/* 4. Studio Manifesto (Typography-Led Distinction) */}
        <StudioManifesto />

        {/* 5. Our Process (Discover, Define, Design, Deliver) */}
        <OurProcess />

        {/* 6. Contact CTA (Discuss Next Project) */}
        <ContactCTA />
      </main>

      {/* 7. Professional Studio Footer */}
      <Footer showBanner={false} />
    </div>
  );
}
