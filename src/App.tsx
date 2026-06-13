import { Sparkles, MessageSquare, Phone } from "lucide-react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Services from "./components/Services";
import About from "./components/About";
import GalleryContainer from "./components/GalleryContainer";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { businessInfo } from "./data";

export default function App() {
  return (
    <div className="bg-zinc-50 min-h-screen font-sans selection:bg-amber-400 selection:text-zinc-950 overflow-hidden" id="app-root">
      
      {/* Header element */}
      <Header />

      {/* Main page content layout elements */}
      <main>
        
        {/* Interactive slide scrolling images Hero Section */}
        <HeroSlider />

        {/* Highlight Banner / Mini values loop */}
        <section className="bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 py-4 font-mono text-center text-xs tracking-wider uppercase font-extrabold flex items-center justify-center gap-3 overflow-hidden select-none">
          <span className="flex items-center gap-1.5 shrink-0">
            <Sparkles className="w-4 h-4 text-zinc-950 animate-spin" />
            <span>Premium Fluted Louvers</span>
          </span>
          <span className="opacity-30">|</span>
          <span className="flex items-center gap-1.5 shrink-0">
            <span>Water & Humidity Resistant</span>
          </span>
          <span className="opacity-30">|</span>
          <span className="flex items-center gap-1.5 shrink-0 text-amber-950">
            <span>● Onsite Installation Vijayawada & AP</span>
          </span>
        </section>

        {/* Services segment with images */}
        <Services />

        {/* Detailed About us column with inclusive badges */}
        <About />

        {/* Slide-scrolling Project gallery portfolio segment */}
        <GalleryContainer />

        {/* Contact and detailed Daily hours calculation */}
        <ContactSection />

      </main>

      {/* Footer block containing Interactive FAQs integration */}
      <Footer />

      {/* Floating interactive actions buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 max-w-[calc(100vw-3rem)]">
        {/* Floating Quick Dial Phone */}
        <a
          href={`tel:${businessInfo.phoneFormatted}`}
          className="flex items-center gap-2.5 px-5 py-3 sm:px-6 sm:py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-sans text-xs sm:text-sm font-extrabold shadow-2xl border border-amber-600/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer"
          id="floating-quick-call"
          aria-label="Call Nikhitha PVC"
        >
          <Phone className="w-4 h-4 sm:w-5 h-5 shrink-0 text-zinc-950" />
          <span>Call Now: {businessInfo.phone}</span>
        </a>

        {/* Floating WhatsApp Action badge */}
        <a
          href={businessInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-3 sm:px-6 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs sm:text-sm font-extrabold shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer"
          referrerPolicy="no-referrer"
          id="floating-whatsapp-trigger"
          aria-label="Launch WhatsApp Direct"
        >
          <MessageSquare className="w-4 h-4 sm:w-5 h-5 shrink-0 text-white animate-bounce" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

    </div>
  );
}

