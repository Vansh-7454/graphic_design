import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { StudioLogo } from "@/components/brand/StudioLogo";
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

interface FooterProps {
  showBanner?: boolean;
}

export function Footer({ showBanner = false }: FooterProps) {
  return (
    <footer className="w-full bg-[#17191C] text-[#F5F1E8] border-t border-white/10 mt-auto">
      {/* Optional Studio Banner / Call to Action Strip */}
      {showBanner && (
        <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest uppercase text-[#F2D675]">
              <span>Next Project Horizon</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2D675]" />
              <span>{siteConfig.studioStatus.nextAvailableSlot}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.05]">
              Let’s create work that <br />
              <span className="font-serif italic font-normal text-[#F2D675]">
                endures beyond the feed.
              </span>
            </h2>
            <p className="text-sm md:text-base text-[#F5F1E8]/70 max-w-xl font-normal leading-relaxed pt-2">
              We partner with founders, cultural institutions, and forward-thinking businesses who value design as a transformative business advantage.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-between px-6 py-4 bg-[#F15A38] text-white font-medium text-sm tracking-wider uppercase hover:bg-white hover:text-[#17191C] transition-all duration-300 group"
            >
              <span>Initiate Collaboration</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <a
              href={siteConfig.contact.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-6 py-4 border border-white/20 text-[#F5F1E8] text-sm tracking-wider uppercase hover:border-[#3457E5] hover:bg-[#3457E5] transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#F2D675]" />
                <span>WhatsApp Studio Direct</span>
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
      )}

      {/* Main Studio Directory & Metadata */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12">
        {/* Brand identity column */}
        <div className="lg:col-span-4 space-y-6">
          <StudioLogo size="lg" variant="light" showTagline={true} />
          <p className="text-sm text-[#F5F1E8]/70 leading-relaxed pr-6">
            FORMA is an independent graphic design and branding practice founded on Swiss typographic discipline and daring contemporary art direction.
          </p>
          <div className="text-xs font-mono text-[#F5F1E8]/50 pt-2 space-y-1">
            <p>SWISS EDITORIAL TRADITION &bull; CONTEMPORARY VISUAL SYSTEMS</p>
            <p className="text-[#3457E5] font-semibold">DISTINCTIVE DESIGN FOR VISIONARY BRANDS</p>
          </div>
        </div>

        {/* Studio Contacts (Central Config) */}
        <div className="lg:col-span-3 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F2D675] font-semibold block">
            Direct Inquiries
          </span>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 text-[#F5F1E8] hover:text-[#3457E5] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#777872]" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.contact.phoneFormatted}`}
                className="flex items-center gap-2.5 text-[#F5F1E8] hover:text-[#3457E5] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#777872]" />
                <span>{siteConfig.contact.phonePlaceholder}</span>
              </a>
            </li>
            <li className="pt-2">
              <a
                href={siteConfig.contact.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-xs text-[#F5F1E8]/70 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#777872] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address.full}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation & Index */}
        <div className="lg:col-span-2 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F2D675] font-semibold block">
            Directory
          </span>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[#F5F1E8]/80 hover:text-white hover:underline transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Presence */}
        <div className="lg:col-span-3 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F2D675] font-semibold block">
            Archives &amp; Networks
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/10 hover:border-[#3457E5] hover:text-[#3457E5] transition-colors flex items-center justify-between"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3 text-[#777872]" />
            </a>
            <a
              href={siteConfig.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/10 hover:border-[#3457E5] hover:text-[#3457E5] transition-colors flex items-center justify-between"
            >
              <span>Behance</span>
              <ArrowUpRight className="w-3 h-3 text-[#777872]" />
            </a>
            <a
              href={siteConfig.socials.arena}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/10 hover:border-[#3457E5] hover:text-[#3457E5] transition-colors flex items-center justify-between"
            >
              <span>Are.na</span>
              <ArrowUpRight className="w-3 h-3 text-[#777872]" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/10 hover:border-[#3457E5] hover:text-[#3457E5] transition-colors flex items-center justify-between"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#777872]" />
            </a>
          </div>
        </div>
      </div>

      {/* Swiss Colophon Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-[#F5F1E8]/50">
          <div className="flex items-center gap-4">
            <span>&copy; 2026 FORMA STUDIO INC. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-6">
            <span>INDEX REF: FORMA-IND-MUM</span>
            <span className="text-[#3457E5]">&bull;</span>
            <span>SET IN SPACE GROTESK &amp; NEWSREADER</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
