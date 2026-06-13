import React, { useState } from "react";
import { Maximize2, Layout, ListFilter, Layers, SquareDot, ArrowRight, X, Phone, MessageSquare, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { services, businessInfo } from "../data";
import { Service } from "../types";

// Icon mapper helper
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Maximize2: Maximize2,
  Layout: Layout,
  ListFilter: ListFilter,
  Layers: Layers,
  SquareDot: SquareDot,
};

export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  const openServiceDetails = (service: Service) => {
    setActiveService(service);
  };

  const closeServiceDetails = () => {
    setActiveService(null);
  };

  return (
    <section id="services" className="py-20 bg-zinc-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-mono text-xs uppercase tracking-[0.2em] font-extrabold block mb-3">
            Available Onsite Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-zinc-900 mb-4">
            Our Premium Interior Solutions
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-4" />
          <p className="text-zinc-600 font-sans text-base leading-relaxed">
            Nikhitha PVC Ceiling & Wall Panels delivers durable material combined with master-level Vijayawada craftsmanship. See our core expertise below.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Layout;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 overflow-hidden flex flex-col group h-full"
                id={`service-card-${service.id}`}
              >
                {/* Product Image */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Icon Badges */}
                  <div className="absolute top-4 left-4 z-20 bg-amber-500 text-zinc-950 p-3 rounded-xl shadow-lg transition-transform group-hover:-translate-y-1">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-extrabold text-xl text-zinc-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 font-sans text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features Snippet */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <button
                    onClick={() => openServiceDetails(service)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-zinc-950 hover:bg-zinc-800 text-white font-sans text-xs font-bold tracking-wider uppercase rounded-xl transition-colors cursor-pointer"
                    id={`service-btn-details-${service.id}`}
                  >
                    <span>View In-depth Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Details Dialog Modal */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="service-modal-overlay">
            {/* Backdrop click closer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeServiceDetails}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl z-10 border border-zinc-150 flex flex-col md:flex-row"
              id="service-modal-content"
            >
              {/* Left Column (Big Image & Title) */}
              <div className="md:w-1/2 relative min-h-[250px] md:min-h-full bg-zinc-900">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-transparent to-transparent z-10 max-md:hidden" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent z-10 md:hidden" />

                {/* Floating closer on image for mobile */}
                <button
                  onClick={closeServiceDetails}
                  className="absolute top-4 right-4 md:hidden z-30 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Right Column (Details) */}
              <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative">
                {/* Desktop closer */}
                <button
                  onClick={closeServiceDetails}
                  className="absolute top-6 right-6 max-md:hidden p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="pt-2">
                  <span className="text-[10px] font-mono font-extrabold uppercase bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full tracking-widest block w-fit mb-3">
                    Premium Category
                  </span>
                  <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-zinc-950 mb-4">
                    {activeService.title}
                  </h3>
                  <p className="text-zinc-600 font-sans text-sm leading-relaxed mb-6">
                    {activeService.longDescription}
                  </p>

                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-zinc-900 mb-3 block">
                    Product Key Attributes
                  </h4>
                  <ul className="space-y-2.5 mb-8">
                    {activeService.features.map((feat, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5 text-xs text-zinc-700">
                        <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call To Actions */}
                <div className="pt-6 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`${businessInfo.whatsappUrl}?text=${encodeURIComponent(
                      `Hello Nikhitha PVC, I am interested in your services for ${activeService.title}. Could you provide design samples and estimated pricing?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-extrabold tracking-wider uppercase py-3.5 px-4 rounded-xl transition-colors"
                    referrerPolicy="no-referrer"
                    id="service-modal-quote-whatsapp"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <a
                    href={`tel:${businessInfo.phoneFormatted}`}
                    className="flex items-center justify-center gap-2 border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 font-sans text-xs font-extrabold tracking-wider uppercase py-3.5 px-4 rounded-xl transition-colors"
                    id="service-modal-call-now"
                  >
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>Call Store</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
