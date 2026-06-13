import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Sparkles, SlidersHorizontal, Layers, Layout, ListFilter, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { galleryItems, businessInfo } from "../data";
import { GalleryItem } from "../types";

export default function GalleryContainer() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { label: "All Works", value: "all", icon: SlidersHorizontal },
    { label: "PVC Ceilings", value: "ceiling", icon: Minimize2 },
    { label: "Accent Walls", value: "wall", icon: Layout },
    { label: "WPC Louvers", value: "wpc", icon: ListFilter },
    { label: "False Ceilings", value: "false-ceiling", icon: Layers }
  ];

  // Filtered gallery logic
  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    const globalIdx = galleryItems.findIndex(g => g.id === item.id);
    if (globalIdx !== -1) {
      setLightboxIndex(globalIdx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxItem = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev! + 1));
    }
  };

  const prevLightboxItem = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev! - 1));
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-amber-600 font-mono text-xs uppercase tracking-[0.25em] font-extrabold block mb-3">
              Project Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-zinc-900 mb-4 animate-fade-in">
              Completed Installations
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full mb-4 md:mb-0" />
            <p className="text-zinc-650 font-sans text-sm block">
              Explore some of our real-life installations of modular ceilings, decorative feature backdrops, and durable fluted louvers completed around Vijayawada.
            </p>
          </div>

          {/* Inclusive highlight */}
          <div className="hidden lg:flex items-center gap-3 bg-zinc-50 p-3 rounded-2xl border border-zinc-100 text-zinc-600 font-mono text-xs">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
            <span>Click images to launch full-screen high-res lightbox</span>
          </div>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none" id="gallery-filters">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer text-nowrap ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-md scale-105"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
                id={`gallery-filter-${tab.value}`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(item)}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-zinc-50 cursor-pointer bg-zinc-100"
                id={`gallery-item-${item.id}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Mask on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10" />

                {/* Information text overlay on hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 block w-fit mb-2">
                    {item.category === "ceiling" ? "Ceiling Panel" : item.category === "wall" ? "Decorative Wall" : item.category === "wpc" ? "WPC Louver" : "False Ceiling"}
                  </span>
                  <h4 className="font-sans font-bold text-base leading-tight text-white mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-zinc-300 font-sans">
                    Onsite installation • Vijayawada
                  </p>
                </div>

                {/* Small indicator icon overlay (top right) */}
                <div className="absolute top-4 right-4 z-20 bg-zinc-950/40 backdrop-blur-md p-2 rounded-full text-white/50 group-hover:text-amber-400 group-hover:scale-110 group-hover:bg-zinc-950 transition-all">
                  <Sparkles className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Backdrop Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-zinc-955 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-4" id="gallery-lightbox">
            
            {/* Top Close bar */}
            <div className="flex items-center justify-between text-zinc-400 p-2 sm:p-4 z-30">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-sans font-black">● Nikhitha PVC</span>
                <span className="text-xs font-mono text-zinc-500">Project {lightboxIndex + 1} of {galleryItems.length}</span>
              </div>

              <button
                onClick={closeLightbox}
                className="p-2 sm:p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
                id="lightbox-close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Slide content */}
            <div className="relative flex-grow flex items-center justify-center py-4 z-10">
              {/* Image Container with motions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-[70vh] max-w-[90vw] md:max-w-4xl flex items-center justify-center select-none"
                >
                  <img
                    src={galleryItems[lightboxIndex].image}
                    alt={galleryItems[lightboxIndex].title}
                    className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-zinc-805"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Side controls (Desktop arrow overlays) */}
              <button
                onClick={prevLightboxItem}
                className="absolute left-2 md:left-6 p-3 rounded-full bg-zinc-900/60 text-zinc-100 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer hover:scale-105"
                aria-label="Previous artwork"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextLightboxItem}
                className="absolute right-2 md:right-6 p-3 rounded-full bg-zinc-900/60 text-zinc-100 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer hover:scale-105"
                aria-label="Next artwork"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Info bar */}
            <div className="text-center text-white p-4 max-w-2xl mx-auto z-20">
              <span className="text-amber-400 font-mono text-[10px] uppercase tracking-widest block mb-1">
                {galleryItems[lightboxIndex].category.toUpperCase()} WORK
              </span>
              <h4 className="font-sans font-extrabold text-lg sm:text-xl text-zinc-100 mb-1 leading-snug">
                {galleryItems[lightboxIndex].title}
              </h4>
              <p className="text-zinc-500 font-sans text-xs">
                Installed with moistureproofing panels. Service area: {businessInfo.serviceAreas.join(", ")}
              </p>
              
              {/* WhatsApp direct click in Lightbox */}
              <a
                href={`${businessInfo.whatsappUrl}?text=${encodeURIComponent(
                  `Hello Nikhitha PVC, I saw your portfolio image: "${galleryItems[lightboxIndex].title}". Can I get a pricing quote and layout designs similar to this?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-xl transition-colors shadow-sm"
                referrerPolicy="no-referrer"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>Inquire for this design</span>
              </a>
            </div>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
