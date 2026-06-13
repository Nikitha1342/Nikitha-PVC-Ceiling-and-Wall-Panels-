import React, { useState, useEffect } from "react";
import { Phone, Clock, MapPin, Check, Send, Sparkles, HelpCircle } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { businessInfo } from "../data";



export default function ContactSection() {
  const [name, setName] = useState("");
  const [selectedService, setSelectedService] = useState("pvc-ceiling");
  const [remarks, setRemarks] = useState("");
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [currentLocalTime, setCurrentLocalTime] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    // Determine if business is currently open in Vijayawada
    // Vijayawada hours: 8:00 AM to 10:00 PM (8:00 to 22:00)
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      
      // Calculate display string
      const min = now.getMinutes().toString().padStart(2, "0");
      const meridian = hours >= 12 ? "PM" : "AM";
      const displayHour = hours % 12 || 12;
      setCurrentLocalTime(`${displayHour}:${min} ${meridian}`);

      if (hours >= 8 && hours < 22) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const serviceOptions = [
    { value: "pvc-ceiling", label: "PVC Ceiling Systems" },
    { value: "wall-panels", label: "Decorative Wall Panels" },
    { value: "wpc-louvers", label: "WPC Fluted Louvers" },
    { value: "false-ceilings", label: "Custom False Ceilings" },
    { value: "pvc-windows", label: "PVC Windows & Doors" },
    { value: "onsite-consult", label: "Free Onsite consultation" },
  ];

  const handleFormInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct pre-filled WhatsApp message URL
    const serviceLabel = serviceOptions.find(o => o.value === selectedService)?.label || selectedService;
    const greetingText = `Hello Nikhitha PVC Ceiling! My name is ${name || "Client"}.\n\n`;
    const inquiryText = `Inquiry Type: ${serviceLabel}\nMessage: ${remarks || "I'd like to consult on designs, catalogs and pricing templates for my property."}`;
    
    const formattedText = greetingText + inquiryText;
    const whatsappDestination = `${businessInfo.whatsappUrl}?text=${encodeURIComponent(formattedText)}`;
    
    // Trigger successful simulated logging
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
    }, 5000);

    // Open WhatsApp URL!
    window.open(whatsappDestination, "_blank", "noreferrer,noopener");
  };

  return (
    <section id="contact" className="py-20 bg-zinc-50 border-b border-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-mono text-xs uppercase tracking-[0.25em] font-extrabold block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-zinc-900 mb-4">
            Contact Us & Onsite Consultations
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-4" />
          <p className="text-zinc-650 font-sans text-base leading-relaxed">
            Planning a renovation? Reach out to Nikhitha PVC Ceiling and Wall Panels. Call us directly, send an SMS, chat on WhatsApp, or send us a message below!
          </p>
        </div>

        {/* Contact Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column (Details and Dynamic Hours) - 5 Cols */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Box 1: Core Details */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-150 shadow-sm space-y-6">
              <h3 className="font-sans font-extrabold text-xl text-zinc-950 flex items-center gap-2">
                <span>Business Inquiries</span>
              </h3>

              {/* Phone item */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 rounded-xl text-amber-600 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Direct Hotline</p>
                  <a
                    href={`tel:${businessInfo.phoneFormatted}`}
                    className="font-sans font-extrabold text-lg text-zinc-900 hover:text-amber-600 transition-colors block mt-0.5"
                    id="contact-call-btn"
                  >
                    {businessInfo.phone}
                  </a>
                  <p className="text-xs text-zinc-500 font-sans">Tap to dial from cellular devices</p>
                </div>
              </div>

              {/* WhatsApp messaging item */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0 mt-0.5">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase font-bold text-zinc-400 tracking-wider">WhatsApp Message</p>
                  <a
                    href={businessInfo.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans font-extrabold text-base text-zinc-900 hover:text-emerald-600 transition-colors block mt-0.5"
                    id="contact-whatsapp-btn"
                  >
                    +91 86391 21227
                  </a>
                  <p className="text-xs text-zinc-500 font-sans">Chat with our design team instantly</p>
                </div>
              </div>

              {/* Location Marker */}
              <div className="flex items-start gap-4 pt-2 border-t border-zinc-100">
                <div className="p-3 bg-red-50 rounded-xl text-red-600 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Physical Location</p>
                  <p className="font-sans text-sm text-zinc-800 font-semibold leading-relaxed mt-1">
                    {businessInfo.address}
                  </p>
                  <p className="text-xs text-zinc-500 font-mono mt-1">Ambapuram Road near Andhra Prabha Colony</p>
                </div>
              </div>
            </div>

            {/* Box 2: Dynamic Hours / Calendar Status */}
            <div id="hours" className="bg-zinc-900 text-white p-6 sm:p-8 rounded-3xl border border-zinc-850 shadow-md">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <h3 className="font-sans font-extrabold text-lg text-white">Opening Hours</h3>
                </div>

                {/* Open Status Indicator */}
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                  <span className={`w-2.5 h-2.5 rounded-full ${isOpenNow ? "bg-emerald-500" : "bg-red-500"} animate-pulse shrink-0`} />
                  <span className="font-mono text-[10px] font-bold tracking-wider text-zinc-200">
                    {isOpenNow ? "OPEN NOW" : "CLOSED NOW"}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                {businessInfo.hours.map((h, hIdx) => {
                  const now = new Date();
                  const currentDayIdx = now.getDay(); // 0 is Sunday, 1 is Monday...
                  const dayNameMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                  const isToday = dayNameMap[currentDayIdx] === h.day;
                  
                  return (
                    <div
                      key={hIdx}
                      className={`flex items-center justify-between py-1 px-2 rounded-lg transition-colors text-xs font-sans ${
                        isToday ? "bg-amber-500/10 text-amber-300 font-bold border border-amber-500/20" : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {isToday && <span className="text-amber-400 font-mono text-[9px] uppercase tracking-widest">[TODAY]</span>}
                        <span>{h.day}</span>
                      </span>
                      <span className="font-mono">{h.time}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 text-center">
                <p className="text-[11px] text-zinc-500 font-mono">
                  Current Visitor Device Time: {currentLocalTime || "08:00 AM"} IST
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (WhatsApp Interactive Query Form builder) - 7 Cols */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-zinc-150 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full font-mono text-[10px] uppercase tracking-wider mb-4">
                <Sparkles className="w-3 h-3 text-emerald-700 animate-bounce" />
                <span>Zero Wait Form Composer</span>
              </div>
              
              <h3 className="font-sans font-extrabold text-2xl text-zinc-900 mb-2">
                Onsite Inquiry Generator
              </h3>
              <p className="text-zinc-500 font-sans text-xs leading-relaxed mb-6">
                Compose your query parameters here. Submitting will validate your input and immediately bridge your message onto WhatsApp to bypass any static inbox queues.
              </p>

              <form onSubmit={handleFormInquiry} className="space-y-4" id="inquiry-whatsapp-form">
                {/* Name */}
                <div>
                  <label htmlFor="client-name" className="block text-xs font-mono uppercase font-extrabold text-zinc-500 tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="client-name"
                    required
                    placeholder="e.g., Harsha Vardhan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-250 bg-zinc-50 font-sans text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-inner"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="inquiry-service" className="block text-xs font-mono uppercase font-extrabold text-zinc-500 tracking-wider mb-1.5">
                    Selected Product/Service Interest
                  </label>
                  <select
                    id="inquiry-service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-250 bg-zinc-50 font-sans text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-inner cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Customer Message */}
                <div>
                  <label htmlFor="inquiry-remarks" className="block text-xs font-mono uppercase font-extrabold text-zinc-500 tracking-wider mb-1.5">
                    Specific requirements / Property dimensions
                  </label>
                  <textarea
                    id="inquiry-remarks"
                    rows={4}
                    placeholder="e.g., I have a 12x15 living room in Guntur and would like a modern PVC false ceiling installation with wood grain fluted accents."
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-250 bg-zinc-50 font-sans text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-inner"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-emerald-500/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  id="inquiry-submit-btn"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Send direct message to business WhatsApp</span>
                </button>
              </form>

              {/* Status Banner */}
              {successMsg && (
                <div className="mt-4 p-4 bg-emerald-50 border border-emerald-250 rounded-xl flex items-start gap-3 text-emerald-800" id="form-success-banner">
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-sans font-bold text-xs">Connecting to WhatsApp...</h5>
                    <p className="font-sans text-[11px] text-emerald-600">The formatted text stream has been drafted. Please allow your browser to launch your WhatsApp desktop or mobile client.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Minor inclusion footnote */}
            <div className="pt-6 border-t border-zinc-150 flex items-center gap-2.5 mt-6 sm:mt-10">
              <span className="text-zinc-630 font-bold font-sans text-xs flex items-center gap-1 text-zinc-500">
                <span>Inclusive Space:</span>
                <span>♿ Accessible Entrance • Restroom • LGBTQ+ friendly</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
