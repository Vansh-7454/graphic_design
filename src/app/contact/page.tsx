"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Copy,
  Clock,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brandName: "",
    service: "Brand Identity",
    budget: "₹1.5L – ₹3L",
    details: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validatedBrief, setValidatedBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const servicesList = [
    "Brand Identity",
    "Graphic Design",
    "Packaging Design",
    "Digital Design",
    "Creative Direction",
    "Comprehensive Rebrand",
  ];

  const budgetTiers = [
    "₹75,000 – ₹1.5L",
    "₹1.5L – ₹3L",
    "₹3L – ₹5L",
    "₹5L+",
  ];

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please provide your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please provide an email address.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email format (e.g. name@brand.com).";
    }

    if (!formData.brandName.trim()) {
      newErrors.brandName = "Please provide your business or brand name.";
    }

    if (!formData.details.trim() || formData.details.length < 15) {
      newErrors.details =
        "Please provide brief project details (at least 15 characters).";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Compile local formatted brief without claiming server submission
    const compiled = `FORMA STUDIO BRIEF
------------------------
Name: ${formData.name}
Email: ${formData.email}
Brand: ${formData.brandName}
Required Service: ${formData.service}
Approximate Budget: ${formData.budget}

Project Details:
${formData.details}
------------------------
Generated locally on ${new Date().toLocaleDateString()}`;

    setValidatedBrief(compiled);
  };

  const handleCopyBrief = () => {
    if (validatedBrief) {
      navigator.clipboard.writeText(validatedBrief);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#17191C] pb-20 md:pb-0">
      {/* Studio Header */}
      <Header />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28">
        {/* ======================================================== */}
        {/* PAGE HERO                                                */}
        {/* ======================================================== */}
        <div className="border-b border-black/10 pb-8 sm:pb-12 mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#F15A38]">
            <span>Initiate Inquiry</span>
            <span>&bull;</span>
            <span>New Client Commissions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-midnight-ink tracking-tight leading-[1.05] sm:leading-[1.02] max-w-4xl">
            Have a Good Idea? <br />
            <span className="font-serif italic font-normal text-[#3457E5]">
              Let&apos;s Give It a Great Identity.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-midnight-ink/80 max-w-2xl font-body leading-relaxed">
            We are currently booking select brand identity, packaging, and digital commissions for {siteConfig.studioStatus.nextAvailableSlot}. Reach out directly or configure your brief below.
          </p>

          {/* Studio Booking Status Badge */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs font-mono text-midnight-ink">
              <span className="w-2 h-2 rounded-full bg-[#3457E5] animate-pulse" />
              <span>Studio Horizon: {siteConfig.studioStatus.nextAvailableSlot}</span>
            </span>
            <span className="text-xs font-mono text-muted-gray">
              {siteConfig.contact.inquiryNotice}
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* THREE DIRECT CONTACT ACTIONS BAR                         */}
        {/* ======================================================== */}
        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-muted-gray mb-6 block font-semibold">
            Direct Contact Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* 1. Phone Call Action */}
            <a
              href={`tel:${siteConfig.contact.phoneFormatted}`}
              className="p-5 sm:p-6 md:p-8 bg-white border border-black/15 flex flex-col justify-between group hover:border-red-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-gray block">
                    Direct Telephone
                  </span>
                  <p className="text-lg sm:text-xl font-display font-bold text-midnight-ink mt-0.5">
                    {siteConfig.contact.phonePlaceholder}
                  </p>
                </div>
              </div>
              <div className="pt-4 sm:pt-6 border-t border-black/10 mt-4 sm:mt-6 flex items-center justify-between text-xs font-mono font-semibold text-red-600 group-hover:text-red-700">
                <span>Call Studio Direct</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>

            {/* 2. WhatsApp Action */}
            <a
              href={siteConfig.contact.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 md:p-8 bg-[#3457E5] text-white border border-black/15 flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#F2D675] group-hover:bg-white group-hover:text-[#3457E5] transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/70 block">
                    Instant Messaging
                  </span>
                  <p className="text-lg sm:text-xl font-display font-bold text-white mt-0.5">
                    WhatsApp Studio Direct
                  </p>
                </div>
              </div>
              <div className="pt-4 sm:pt-6 border-t border-white/20 mt-4 sm:mt-6 flex items-center justify-between text-xs font-mono font-semibold text-[#F2D675]">
                <span>Open Pre-filled Chat</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>

            {/* 3. Google Maps Location Action */}
            <a
              href={siteConfig.contact.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 md:p-8 bg-[#17191C] text-warm-ivory border border-black/15 flex flex-col justify-between group hover:border-[#F15A38] hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#F15A38] group-hover:bg-[#F15A38] group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block">
                    Atelier Locations
                  </span>
                  <p className="text-lg sm:text-xl font-display font-bold text-warm-ivory mt-0.5">
                    {siteConfig.contact.address.city}
                  </p>
                </div>
              </div>
              <div className="pt-4 sm:pt-6 border-t border-white/15 mt-4 sm:mt-6 flex items-center justify-between text-xs font-mono font-semibold text-[#F15A38]">
                <span>Get Google Maps Directions</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </div>
        </section>

        {/* ======================================================== */}
        {/* TWO-COLUMN INQUIRY FORM & STUDIO DESK                    */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-black/15 p-5 sm:p-8 md:p-10 shadow-sm">
            {validatedBrief ? (
              /* Success & Local Brief Validation Display */
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div className="text-xs font-mono">
                    <p className="font-bold uppercase tracking-wider">
                      Brief Parameters Validated Successfully
                    </p>
                    <p className="text-emerald-700 mt-0.5">
                      Your inquiry fields passed all formatting and structure checks on this device.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#F5F1E8] border border-black/10 text-xs font-mono space-y-2">
                  <div className="flex items-center justify-between border-b border-black/10 pb-2">
                    <span className="font-bold text-midnight-ink uppercase">
                      Local Client-Side Summary
                    </span>
                    <span className="text-[10px] text-muted-gray">NO BACKEND TRANSMISSION</span>
                  </div>
                  <pre className="whitespace-pre-wrap font-mono text-[11px] text-midnight-ink/90 overflow-x-auto p-2 bg-white border border-black/5">
                    {validatedBrief}
                  </pre>
                </div>

                <p className="text-xs text-midnight-ink/75 leading-relaxed font-body">
                  Because this studio platform runs as a privacy-respecting static architecture, no data was transmitted to an external server. You can copy your compiled brief below or dispatch it directly to our studio principals:
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleCopyBrief}
                    className="flex-1 py-3.5 px-4 bg-midnight-ink text-warm-ivory text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 hover:bg-[#3457E5] transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? "Copied to Clipboard!" : "Copy Brief to Clipboard"}</span>
                  </button>

                  <a
                    href={`mailto:${siteConfig.contact.email}?subject=Project%20Inquiry%20from%20${encodeURIComponent(
                      formData.brandName
                    )}&body=${encodeURIComponent(validatedBrief)}`}
                    className="flex-1 py-3.5 px-4 bg-[#F15A38] text-white text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 hover:bg-black transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Email App</span>
                  </a>
                </div>

                <div className="pt-4 text-center">
                  <button
                    onClick={() => setValidatedBrief(null)}
                    className="text-xs font-mono text-[#3457E5] underline uppercase tracking-wider"
                  >
                    Edit Brief Parameters
                  </button>
                </div>
              </div>
            ) : (
              /* The Interactive Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="border-b border-black/10 pb-4 space-y-1">
                  <h2 className="text-2xl font-display font-bold text-midnight-ink">
                    Project Parameter Brief
                  </h2>
                  <p className="text-xs font-mono text-muted-gray">
                    Please provide essential context about your timeline and scope.
                  </p>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-mono uppercase tracking-wider text-midnight-ink font-semibold flex items-center justify-between"
                    >
                      <span>Your Full Name *</span>
                      {errors.name && (
                        <span className="text-red-600 text-[10px] lowercase font-normal flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>required</span>
                        </span>
                      )}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Elena Rostova"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className={`w-full px-4 py-3 bg-[#F5F1E8]/50 border text-sm text-midnight-ink focus:outline-none focus:ring-1 focus:ring-[#3457E5] ${
                        errors.name ? "border-red-500 bg-red-50/20" : "border-black/20"
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-mono uppercase tracking-wider text-midnight-ink font-semibold flex items-center justify-between"
                    >
                      <span>Email Address *</span>
                      {errors.email && (
                        <span className="text-red-600 text-[10px] lowercase font-normal flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>invalid</span>
                        </span>
                      )}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="elena@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={`w-full px-4 py-3 bg-[#F5F1E8]/50 border text-sm text-midnight-ink focus:outline-none focus:ring-1 focus:ring-[#3457E5] ${
                        errors.email ? "border-red-500 bg-red-50/20" : "border-black/20"
                      }`}
                    />
                  </div>
                </div>

                {/* Brand Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-brand"
                    className="text-xs font-mono uppercase tracking-wider text-midnight-ink font-semibold flex items-center justify-between"
                  >
                    <span>Business or Brand Name *</span>
                    {errors.brandName && (
                      <span className="text-red-600 text-[10px] lowercase font-normal flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>required</span>
                      </span>
                    )}
                  </label>
                  <input
                    id="contact-brand"
                    type="text"
                    placeholder="e.g. Lumina Labs / Maison Verre"
                    value={formData.brandName}
                    onChange={(e) => {
                      setFormData({ ...formData, brandName: e.target.value });
                      if (errors.brandName) setErrors({ ...errors, brandName: "" });
                    }}
                    className={`w-full px-4 py-3 bg-[#F5F1E8]/50 border text-sm text-midnight-ink focus:outline-none focus:ring-1 focus:ring-[#3457E5] ${
                      errors.brandName ? "border-red-500 bg-red-50/20" : "border-black/20"
                    }`}
                  />
                </div>

                {/* Required Service Selector */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-service"
                    className="text-xs font-mono uppercase tracking-wider text-midnight-ink font-semibold block"
                  >
                    Required Service Discipline
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F1E8]/50 border border-black/20 text-sm text-midnight-ink focus:outline-none focus:ring-1 focus:ring-[#3457E5]"
                  >
                    {servicesList.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Approximate Budget Horizon */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-midnight-ink font-semibold block">
                    Approximate Budget Horizon
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetTiers.map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: tier })}
                        className={`py-2.5 px-2 text-[11px] sm:text-xs font-mono border transition-colors text-center ${
                          formData.budget === tier
                            ? "bg-midnight-ink text-warm-ivory border-midnight-ink font-bold"
                            : "bg-[#F5F1E8]/40 border-black/15 text-midnight-ink hover:border-black/40"
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-details"
                    className="text-xs font-mono uppercase tracking-wider text-midnight-ink font-semibold flex items-center justify-between"
                  >
                    <span>Project Overview &amp; Ambitions *</span>
                    {errors.details && (
                      <span className="text-red-600 text-[10px] lowercase font-normal flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>brief description required</span>
                      </span>
                    )}
                  </label>
                  <textarea
                    id="contact-details"
                    rows={4}
                    placeholder="Briefly describe what your brand stands for, what challenges you are facing, and your target launch timing..."
                    value={formData.details}
                    onChange={(e) => {
                      setFormData({ ...formData, details: e.target.value });
                      if (errors.details) setErrors({ ...errors, details: "" });
                    }}
                    className={`w-full px-4 py-3 bg-[#F5F1E8]/50 border text-sm text-midnight-ink focus:outline-none focus:ring-1 focus:ring-[#3457E5] resize-none ${
                      errors.details ? "border-red-500 bg-red-50/20" : "border-black/20"
                    }`}
                  />
                  <div className="flex justify-between items-center text-[10px] font-mono text-muted-gray pt-1">
                    <span>Validation is evaluated locally on this browser.</span>
                    <span>{formData.details.length} characters</span>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 bg-midnight-ink text-warm-ivory text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#3457E5] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Validate Project Brief</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Studio Inquiries & Protocol (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Clickable Direct Email Card */}
            <div className="p-8 bg-white border border-black/15 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#3457E5] font-bold block">
                Direct Email Desk
              </span>
              <p className="text-sm text-midnight-ink/80 font-body">
                For formal briefs, RFPs, or direct director inquiries:
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-base font-mono font-bold text-midnight-ink hover:text-[#3457E5] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#3457E5] shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            {/* Collaboration Protocol Notice */}
            <div className="p-8 bg-white border border-black/15 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F15A38] font-bold block">
                Studio Engagement Protocol
              </span>
              <ul className="space-y-3 text-xs font-mono text-midnight-ink/80">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F15A38] mt-1 shrink-0" />
                  <span>Principal-led teams: you work directly with creative partners.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F15A38] mt-1 shrink-0" />
                  <span>Dedicated sprints: we limit concurrent commissions to four per cycle.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F15A38] mt-1 shrink-0" />
                  <span>Response turnaround: all direct inquiries reviewed within 24–48h.</span>
                </li>
              </ul>
            </div>

            {/* FAQ Link Callout */}
            <div className="p-6 bg-[#F5F1E8] border border-black/15 flex items-center justify-between">
              <div>
                <p className="text-xs font-mono text-muted-gray uppercase">Have Questions First?</p>
                <p className="text-sm font-display font-bold text-midnight-ink">
                  Read our Frequently Asked Questions
                </p>
              </div>
              <a
                href="/faq"
                className="px-4 py-2 bg-white border border-black/20 text-xs font-mono uppercase tracking-widest font-semibold hover:border-black transition-colors"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* ======================================================== */}
      {/* MOBILE QUICK CONTACT ACTION BAR (Below fold on mobile)   */}
      {/* ======================================================== */}
      <aside
        aria-label="Quick contact actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#17191C]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 shadow-2xl"
      >
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          <a
            href={`tel:${siteConfig.contact.phoneFormatted}`}
            className="flex-1 py-2 px-2 bg-white/10 border border-white/15 text-[#F5F1E8] text-[11px] font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-none"
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            <span>Call</span>
          </a>

          <a
            href={siteConfig.contact.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-2 bg-[#3457E5] text-white text-[11px] font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-none font-semibold"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#F2D675]" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex-1 py-2 px-2 bg-[#F15A38] text-white text-[11px] font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-none font-semibold"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>
      </aside>

      {/* Studio Footer */}
      <Footer showBanner={false} />
    </div>
  );
}
