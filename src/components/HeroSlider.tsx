import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Phone, ShieldCheck, Heart } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { motion, AnimatePresence } from "motion/react";
import { slides, businessInfo } from "../data";

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slideCount = slides.length;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === slideCount - 1 ? 0 : prevIndex + 1
          ),
        6000
      );
    }
    return () => {
      resetTimeout();
    };
  }, [currentIndex, isPlaying, slideCount]);

  const slideNext = () => {
    setCurrentIndex((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  };

  const slidePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  return (
    <section
      id="hero-slider"
      className="relative min-h-[90vh] md:h-screen w-full bg-zinc-950 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].id}
            initial={{ opacity: 0.3, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.3, scale: 0.98 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Visual Tint Layer / Dark mask for maximum text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-950/70 to-zinc-900/60 z-10" />
            
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover object-center selection:bg-transparent"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 w-full text-white h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Top category pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            key={`pill-${currentIndex}`}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/15 border border-amber-500/35 text-amber-300 rounded-full font-mono text-xs uppercase tracking-wider mb-6"
          >
            <span>✨</span>
            <span>{slides[currentIndex].subtitle}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            key={`title-${currentIndex}`}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight mb-4 text-white leading-[1.1] sm:leading-none"
          >
            {slides[currentIndex].title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={`desc-${currentIndex}`}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-zinc-300 font-sans font-normal leading-relaxed mb-8 max-w-2xl"
          >
            {slides[currentIndex].description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={`cta-${currentIndex}`}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href={slides[currentIndex].ctaLink}
              onClick={(e) => {
                if (slides[currentIndex].ctaLink.startsWith("#")) {
                  e.preventDefault();
                  const target = document.querySelector(slides[currentIndex].ctaLink);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }
              }}
              className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-sans font-bold text-center text-sm tracking-wider uppercase px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 active:translate-y-0"
              id="hero-cta-main"
            >
              {slides[currentIndex].ctaText}
            </a>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600/90 hover:bg-emerald-500 text-white font-sans font-bold text-sm px-6 py-4 rounded-xl shadow-lg border border-emerald-500/20 transition-all hover:-translate-y-0.5"
                referrerPolicy="no-referrer"
                id="hero-cta-whatsapp"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Inquire and Get Price List</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Core Badges for authority */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
          <div className="flex items-start gap-2.5">
            <div className="p-1.5 bg-amber-500/10 rounded border border-amber-500/20 text-amber-400 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-sans font-bold text-xs">Premium Quality Finish</p>
              <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">No Moisture or Rot</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-1.5 bg-amber-500/10 rounded border border-amber-500/20 text-amber-400 mt-0.5">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <p className="font-sans font-bold text-xs">Women-Owned Enterprise</p>
              <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Nikhitha PVC Vijayawada</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-1.5 bg-green-500/10 rounded border border-green-500/20 text-green-400 mt-0.5 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block block mt-1.5"></span>
            </div>
            <div>
              <p className="font-sans font-bold text-xs">Onsite Services Available</p>
              <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Vijayawada, Guntur & AP</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-1.5 bg-sky-500/10 rounded border border-sky-500/20 text-sky-400 mt-0.5">
              <span className="font-sans font-black text-xs">♿</span>
            </div>
            <div>
              <p className="font-sans font-bold text-xs">Wheelchair Accessible</p>
              <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Entrance & Parking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Layout Navigator Controls */}
      <button
        onClick={slidePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/35 hover:bg-black/60 text-white/80 hover:text-white transition-all hover:scale-105 border border-white/5 cursor-pointer max-sm:hidden"
        id="hero-slider-prev"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={slideNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/35 hover:bg-black/60 text-white/80 hover:text-white transition-all hover:scale-105 border border-white/5 cursor-pointer max-sm:hidden"
        id="hero-slider-next"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom dots & Progress indicator bar */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex flex-col items-center gap-3">
        {/* Progress Bar (Auto Play Indicator) */}
        {isPlaying && (
          <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="h-full bg-amber-500"
            />
          </div>
        )}

        {/* Selector Circles */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === currentIndex ? "w-8 bg-amber-400" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              id={`hero-dot-${index}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
