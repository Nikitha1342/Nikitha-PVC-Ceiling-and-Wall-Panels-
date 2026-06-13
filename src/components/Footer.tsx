import { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles, MessageSquare, Phone, MapPin, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { faqItems, businessInfo } from "../data";

export default function Footer() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 relative overflow-hidden">
      
      {/* FAQ Accordion Sub-section */}
      <div id="faqs" className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center mb-10">
          <span className="text-amber-400 font-mono text-[10px] uppercase tracking-[0.25em] font-extrabold block mb-2">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-extrabold tracking-tight text-white mb-3">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-4" id="faqs-accordion">
          {faqItems.map((item, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-sm transition-all"
                id={`faq-item-${idx}`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-sans font-bold text-sm sm:text-base text-zinc-100 hover:text-white transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-300 md:shrink-0 ${isOpen ? "rotate-185 text-amber-500" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed border-t border-zinc-850">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Footer Links Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900 pt-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Brand details */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-sans font-black text-xl tracking-wider text-white">
              NIKHITHA <span className="text-amber-400">PVC</span>
            </span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-zinc-500 font-sans text-xs leading-relaxed mb-6">
            Leading ceiling supplier and decorative fluted louvers contractor in Vijayawada, Andhra Pradesh. Beautiful, long-lasting moisture-resilient interiors designed for Indian climates.
          </p>

          <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1.5 rounded-lg w-fit">
            <Heart className="w-3 h-3 text-red-500 shrink-0 fill-red-500" />
            <span>Women-Owned Business</span>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-zinc-300 mb-4 block">
            Product Verticals
          </h4>
          <ul className="space-y-2 text-xs font-sans text-zinc-500">
            <li>PVC False Ceilings Design</li>
            <li>Marble & Glossy Wall Panels</li>
            <li>WPC Exterior & Interior Louvers</li>
            <li>Durable PVC Windows & Sliding Panels</li>
            <li>Onsite Layout Estimation appointments</li>
          </ul>
        </div>

        {/* Quick Contact buttons in Footer */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-zinc-300 mb-4 block">
            Instantly Connect
          </h4>
          <p className="text-zinc-500 font-sans text-xs mb-4">
            Skip standard queues. Get real price list catalogs on your WhatsApp device immediately.
          </p>
          
          <div className="flex flex-col gap-2">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-bold py-2.5 px-4 rounded-xl transition-colors"
              referrerPolicy="no-referrer"
              id="footer-whatsapp-connect"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct Line</span>
            </a>
            <a
              href={`tel:${businessInfo.phoneFormatted}`}
              className="flex items-center gap-2 justify-center bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-sans text-xs font-bold py-2.5 px-4 border border-zinc-800 rounded-xl transition-colors"
              id="footer-call-connect"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Dial {businessInfo.phone}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Minor legal line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-zinc-900 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-zinc-600 font-sans">
          © {new Date().getFullYear()} Nikhitha PVC Ceiling and Wall Panels Vijayawada. All rights reserved.
        </p>
        <p className="text-[11px] text-zinc-600 font-mono">
          LGBTQ+ Friendly • Wheelchair Accessible Ramp/Parking • Andhra Prabha Colony, Vijayawada
        </p>
      </div>

    </footer>
  );
}
