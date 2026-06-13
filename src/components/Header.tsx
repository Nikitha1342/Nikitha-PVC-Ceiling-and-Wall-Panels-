import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, Menu, X, Sparkles, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { businessInfo } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Project Gallery", href: "#gallery" },
    { name: "Business Hours", href: "#hours" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-zinc-900 border-b border-zinc-100"
          : "bg-zinc-950/40 backdrop-blur-sm py-5 text-white border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex flex-col select-none group"
            id="logo-brand"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl tracking-wider text-nowrap">
                NIKHITHA <span className={isScrolled ? "text-amber-600" : "text-amber-400"}>PVC</span>
              </span>
              <Sparkles className={`w-4 h-4 ${isScrolled ? "text-amber-500" : "text-amber-300"} animate-pulse`} />
            </div>
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-zinc-400 font-bold -mt-1 group-hover:text-amber-500 transition-colors">
              Ceiling & Wall Panels
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-sans text-sm font-medium transition-colors hover:text-amber-500 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all hover:after:w-full ${
                  isScrolled ? "text-zinc-700 hover:text-amber-600" : "text-zinc-200 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Actions (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${businessInfo.phoneFormatted}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wide transition-all ${
                isScrolled
                  ? "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
                  : "bg-white/15 text-white hover:bg-white/25"
              }`}
              id="cta-header-call"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{businessInfo.phone}</span>
            </a>

            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wide shadow-sm transition-all hover:scale-105"
              referrerPolicy="no-referrer"
              id="cta-header-whatsapp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-white animate-bounce" />
              <span>Chat WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden flex items-center justify-center p-2 rounded-full bg-emerald-600 text-white shadow-sm hover:bg-emerald-500 transition-all"
              referrerPolicy="no-referrer"
              id="cta-header-whatsapp-mobile"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? "hover:bg-zinc-100 text-zinc-800" : "hover:bg-white/10 text-white"
              }`}
              id="header-mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zinc-900 border-b border-zinc-800 text-white overflow-hidden shadow-2xl"
            id="mobile-drawer"
          >
            <div className="px-4 pt-3 pb-6 space-y-4 max-w-7xl mx-auto">
              {/* Info Badges in Drawer */}
              <div className="flex flex-wrap gap-2 pt-1 pb-2 border-b border-zinc-800">
                <span className="inline-flex items-center gap-1 text-[10px] bg-amber-500/10 text-amber-400 font-mono py-1 px-2 rounded">
                  <UserCheck className="w-3 h-3" /> Women-Owned
                </span>
                <span className="text-[10px] bg-zinc-800 text-zinc-300 font-mono py-1 px-2 rounded">
                  Vijayawada, AP
                </span>
                <span className="text-[10px] bg-zinc-800 text-teal-400 font-mono py-1 px-2 rounded">
                  ● Onsite Available
                </span>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="py-3 px-2 text-zinc-200 hover:text-white font-sans text-base font-medium rounded-lg hover:bg-zinc-800/55 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile Actions details inside drawer */}
              <div className="pt-4 border-t border-zinc-850 space-y-3">
                <a
                  href={`tel:${businessInfo.phoneFormatted}`}
                  className="flex items-center justify-center gap-3 w-full bg-zinc-800 hover:bg-zinc-700 text-white font-sans text-sm font-semibold tracking-wide py-3 px-4 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {businessInfo.phone}</span>
                </a>
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-sm font-semibold tracking-wide py-3 px-4 rounded-xl transition-all"
                  referrerPolicy="no-referrer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <div className="text-center">
                  <p className="text-[11px] text-zinc-500 font-mono">
                    Open Hours: Daily 8:00 AM – 10:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
