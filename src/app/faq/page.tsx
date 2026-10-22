"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import {
  Plus,
  Minus,
  HelpCircle,
  ArrowUpRight,
  MessageSquare,
  Mail,
  Sparkles,
  Phone,
} from "lucide-react";

interface FAQItem {
  id: string;
  topic: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "services-offered",
    topic: "Capabilities",
    question: "What specific design disciplines does FORMA offer?",
    answer:
      "FORMA operates across five core disciplines: Brand Identity (visual identity systems, custom marks, typography direction), Graphic Design (editorial publications, exhibition posters, corporate stationery), Packaging Design (structural box engineering, labels, unboxing architectures), Digital Design (editorial websites, design systems), and Creative Direction (campaign stewardship, still life photography direction, spatial wayfinding).",
  },
  {
    id: "complete-identity",
    topic: "Deliverables",
    question: "What is typically included in a complete brand identity project?",
    answer:
      "A complete brand identity engagement includes brand positioning and verbal narrative principles, primary and secondary wordmarks, bespoke typography curation and licensing guides, color architecture, a comprehensive digital Brand Identity Manual, vector asset libraries (SVG, EPS, PDF, PNG), and core application templates such as stationery and digital tokens.",
  },
  {
    id: "new-businesses",
    topic: "Collaboration",
    question: "Do you partner with early-stage businesses and founders?",
    answer:
      "Yes. We frequently partner with ambitious founders launching new ventures across personal care, architectural goods, hospitality, technology, and specialty retail. What matters most to our studio is alignment on creative ambition, respect for thoughtful craftsmanship, and a genuine desire to stand apart from category clichés.",
  },
  {
    id: "project-starting-process",
    topic: "Process",
    question: "What is the project starting process once we decide to collaborate?",
    answer:
      "Every engagement begins with our Discover phase. Once agreement terms and project horizons are confirmed, we conduct an in-depth immersion session. We interrogate market conventions, audit competitors, and clarify your brand's core positioning. Only after strategic consensus is established do we begin sketching and typographic exploration.",
  },
  {
    id: "materials-needed",
    topic: "Preparation",
    question: "What materials or preparations do we need before starting a project?",
    answer:
      "You do not need a finished brief or design assets. The most valuable inputs are clarity regarding your business model, your target audience, your primary commercial challenges, and realistic launch timelines. If you have existing customer feedback or competitive reference materials, those will be reviewed during our initial discovery sprint.",
  },
  {
    id: "combined-services",
    topic: "Integration",
    question: "Can we combine brand identity and packaging into a single engagement?",
    answer:
      "Yes. In fact, many of our most cohesive projects unite brand identity, structural packaging, and digital architecture into a unified sprint. This ensures that unboxing textures, bottle finishes, label typography, and screen viewports speak with seamless aesthetic consistency.",
  },
  {
    id: "timelines-pricing",
    topic: "Investment",
    question: "What are your typical project timelines and pricing parameters?",
    answer:
      "Because every commission is tailored and guided directly by studio principals, timelines and investments reflect scope complexity. Focused brand identity sprints typically span 6 to 8 weeks, while comprehensive multi-disciplinary engagements (encompassing identity, packaging die-lines, and digital systems) span 10 to 14 weeks. Budget parameters typically range between ₹1,50,000 and ₹5,00,000+ depending on requirements.",
  },
  {
    id: "how-to-start",
    topic: "Getting Started",
    question: "How do we get started or schedule an initial conversation?",
    answer:
      "You can begin by submitting an inquiry via our Contact Page (/contact), calling our studio desk directly, or sending an email to hello@studioforma.design with a brief overview of your business and timeline. We review all inquiries within 24 to 48 studio hours to evaluate calendar availability and strategic fit.",
  },
];

export default function FAQPage() {
  const [openIds, setOpenIds] = useState<string[]>([faqs[0].id]);

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const expandAll = () => {
    setOpenIds(faqs.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#17191C]">
      {/* Studio Header */}
      <Header />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28">
        {/* ======================================================== */}
        {/* PAGE HERO                                                */}
        {/* ======================================================== */}
        <div className="border-b border-black/10 pb-8 sm:pb-12 mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#3457E5]">
            <span>Inquiries &bull; FAQ</span>
            <span>&bull;</span>
            <span>Answers &amp; Advisory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-midnight-ink tracking-tight leading-[1.05] sm:leading-[1.02] max-w-4xl">
            Frequently Asked <br />
            <span className="font-serif italic font-normal text-[#3457E5]">
              Questions &amp; Protocols.
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 pt-2">
            <p className="text-base sm:text-lg text-midnight-ink/80 max-w-2xl font-body leading-relaxed">
              Clear, transparent answers about our engagement models, project scopes, materials needed, and collaborative process.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono">
              <button
                onClick={expandAll}
                className="text-midnight-ink hover:text-[#3457E5] underline uppercase tracking-wider"
              >
                Expand All
              </button>
              <span className="text-muted-gray">&bull;</span>
              <button
                onClick={collapseAll}
                className="text-midnight-ink hover:text-[#3457E5] underline uppercase tracking-wider"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ACCESSIBLE KEYBOARD-FRIENDLY ACCORDION LIST              */}
        {/* ======================================================== */}
        <section
          aria-label="Frequently Asked Questions Accordion"
          className="divide-y divide-black/10 border-y border-black/10 bg-white"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);
            const buttonId = `faq-btn-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`transition-colors duration-200 ${
                  isOpen ? "bg-[#F5F1E8]/30" : "hover:bg-black/[0.01]"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full py-5 sm:py-7 px-4 sm:px-6 md:px-10 flex items-start justify-between gap-4 sm:gap-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3457E5]"
                  >
                    <div className="flex items-start gap-3 sm:gap-8">
                      <span className="text-xs font-mono text-muted-gray pt-1 shrink-0">
                        0{index + 1}
                      </span>
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#F15A38] font-bold block">
                          {faq.topic}
                        </span>
                        <span className="text-lg sm:text-2xl font-display font-bold text-midnight-ink leading-snug">
                          {faq.question}
                        </span>
                      </div>
                    </div>

                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/15 flex items-center justify-center shrink-0 mt-1">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3457E5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-midnight-ink" />
                      )}
                    </div>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`px-4 sm:px-6 md:px-10 pb-6 sm:pb-8 pt-1 sm:pt-2 pl-10 sm:pl-20 ${
                    isOpen ? "block animate-in fade-in duration-200" : "hidden"
                  }`}
                >
                  <p className="text-xs sm:text-base text-midnight-ink/80 font-body leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* ======================================================== */}
        {/* STILL HAVE QUESTIONS? DIRECT CONTACT CTA STRIP           */}
        {/* ======================================================== */}
        <section className="mt-12 sm:mt-16 p-6 sm:p-10 md:p-14 border border-black/15 bg-white flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3457E5] font-semibold">
              Personalized Consultation
            </span>
            <h2 className="text-3xl font-display font-bold text-midnight-ink tracking-tight">
              Have a question specific to your brand?
            </h2>
            <p className="text-sm text-midnight-ink/75 font-body">
              Every business challenge is singular. Speak directly with our creative directors to discuss scope, timeline, and deliverables.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={`tel:${siteConfig.contact.phoneFormatted}`}
              className="px-6 py-4 bg-[#F5F1E8] border border-black/20 text-midnight-ink text-xs font-mono uppercase tracking-widest font-semibold hover:border-red-500 hover:text-red-600 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>Call Us Direct</span>
            </a>

            <Link
              href="/contact"
              className="px-6 py-4 bg-midnight-ink text-warm-ivory text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#3457E5] transition-colors flex items-center justify-center gap-2"
            >
              <span>Go to Contact Page</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Studio Footer */}
      <Footer showBanner={false} />
    </div>
  );
}
