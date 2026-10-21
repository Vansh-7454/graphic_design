import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Mail, MessageSquare, Phone, MapPin } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="w-full bg-[#F5F1E8] border-b border-black/[0.08] py-16 sm:py-24 md:py-36">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Main Banner Box */}
        <div className="border-2 border-midnight-ink bg-[#3457E5] text-white p-6 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Subtle Graphic Crosshair Details */}
          <div className="hidden sm:block absolute top-6 left-6 text-[10px] font-mono opacity-60">
            + INITIATE DIALOGUE
          </div>
          <div className="hidden sm:block absolute top-6 right-6 text-[10px] font-mono opacity-60">
            STUDIO REF: FORMA-2026 +
          </div>

          <div className="max-w-4xl space-y-6 sm:space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono tracking-widest uppercase text-[#F2D675]">
              <span>Next Project Horizon</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2D675]" />
              <span>{siteConfig.studioStatus.nextAvailableSlot}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-display font-bold tracking-tight text-white leading-[1.05] sm:leading-[1.02]">
              Ready to make your brand{" "}
              <span className="font-serif italic font-normal text-[#F2D675]">
                mean more?
              </span>
            </h2>

            <p className="text-base sm:text-xl text-white/85 max-w-2xl font-body leading-relaxed">
              We partner with ambitious founders, cultural leaders, and forward-thinking enterprises to design identities that command category distinction.
            </p>

            {/* Action Buttons Pairing */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-[#17191C] text-[#F5F1E8] font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-white hover:text-midnight-ink transition-all duration-300 shadow-lg group"
              >
                <span>Start a Project Brief</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <a
                href={siteConfig.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 sm:py-5 bg-white/10 border border-white/30 text-white font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-white hover:text-midnight-ink transition-all duration-300 group"
              >
                <MessageSquare className="w-4 h-4 text-[#F2D675]" />
                <span>WhatsApp Studio Direct</span>
              </a>
            </div>

            {/* Quick Contact Directory Row */}
            <div className="pt-10 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono">
              <div>
                <span className="text-white/60 uppercase block mb-1">Direct Email:</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#F2D675]" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>

              <div>
                <span className="text-white/60 uppercase block mb-1">Studio Phone:</span>
                <a
                  href={`tel:${siteConfig.contact.phoneFormatted}`}
                  className="text-white hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F2D675]" />
                  <span>{siteConfig.contact.phonePlaceholder}</span>
                </a>
              </div>

              <div>
                <span className="text-white/60 uppercase block mb-1">Atelier:</span>
                <a
                  href={siteConfig.contact.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#F2D675]" />
                  <span>{siteConfig.contact.address.city}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
