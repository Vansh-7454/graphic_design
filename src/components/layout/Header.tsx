"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StudioLogo } from "@/components/brand/StudioLogo";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F1E8]/95 backdrop-blur-md shadow-[0_1px_0_rgba(23,25,28,0.08)] py-3.5"
          : "bg-[#F5F1E8] py-4 sm:py-5 border-b border-black/[0.08]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-between">
        {/* Studio Wordmark Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-cobalt"
          aria-label="FORMA — Graphic Design &amp; Branding"
        >
          <StudioLogo size="md" variant="dark" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors duration-200 group flex items-center gap-1.5 ${
                  isActive
                    ? "text-electric-cobalt font-semibold"
                    : "text-midnight-ink hover:text-electric-cobalt"
                }`}
              >
                <span>{item.title}</span>
                {item.badge && (
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/5 text-muted-gray group-hover:bg-electric-cobalt group-hover:text-white transition-colors">
                    {item.badge}
                  </span>
                )}
                {/* Active marker indicator */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-electric-cobalt" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="group relative hidden sm:inline-flex items-center gap-2 px-4 md:px-5 py-2.5 bg-midnight-ink text-warm-ivory text-xs uppercase tracking-widest font-semibold overflow-hidden border border-midnight-ink hover:bg-electric-cobalt hover:border-electric-cobalt transition-all duration-300 shadow-sm"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-midnight-ink hover:text-electric-cobalt transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/10 bg-[#F5F1E8] px-6 py-8 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-6">
            <nav className="flex flex-col gap-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-2xl font-display font-medium text-midnight-ink hover:text-electric-cobalt py-2 border-b border-black/5"
                >
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/5 text-muted-gray">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 bg-midnight-ink text-warm-ivory text-sm font-semibold uppercase tracking-widest hover:bg-electric-cobalt transition-colors"
              >
                Start a Project
              </Link>
              <div className="text-center">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-xs font-mono text-muted-gray hover:text-midnight-ink underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
