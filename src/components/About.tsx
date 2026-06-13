import { Award, ShieldCheck, CheckCircle2, MapPin, Smile, Star, HardHat } from "lucide-react";
import { motion } from "motion/react";
import { businessInfo } from "../data";

export default function About() {
  const categories = [
    { title: "Ceiling Supplier", desc: "Premium quality lightweight PVC ceiling tiles and false layers." },
    { title: "Interior Designer", desc: "Expert space optimization with gorgeous fluted louvers and layout styling." },
    { title: "PVC Windows Supplier", desc: "Durable moistureproof frame systems built for coastal humidity." },
    { title: "Retaining Wall Contractor", desc: "Solid panel linings and protective core material backdrops." }
  ];

  return (
    <section id="about" className="py-20 bg-zinc-950 text-white relative overflow-hidden" style={{ contentVisibility: "auto" }}>
      {/* Absolute Decorative Blobs */}
      <div className="absolute top-1/4 -left-36 w-80 h-80 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-80 h-80 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two Column Layout: Text & Bento Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Core Story) */}
          <div className="lg:col-span-7">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-[0.25em] font-extrabold block mb-3">
              Establishment & Concept
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-white mb-6">
              About Nikhitha PVC Ceiling <br className="hidden sm:inline" />
              & Wall Panels Vijayawada
            </h2>
            <div className="w-16 h-1.5 bg-amber-500 rounded-full mb-6" />

            <p className="text-zinc-300 font-sans text-base leading-relaxed mb-6">
              Founded to provide premium, long-lasting interior design alternatives, Nikhitha PVC specializes in modern polymer solutions. Traditional drywall and plaster of paris (POP) are highly susceptible to India's intense coastal moisture, mold, paint scaling, and persistent termite damage.
            </p>

            <p className="text-zinc-300 font-sans text-base leading-relaxed mb-8">
              We deliver state-of-the-art <strong>PVC ceilings</strong>, <strong>decorative fluted wall panels</strong>, and <strong>WPC louvers</strong> that combine luxury wood aesthetics with 100% waterproof and maintenance-free durability. Whether transforming a home living room, a corporate office lobby, a retail boutique, or hotel bathrooms, our material range stands the test of time.
            </p>

            {/* Business Verticals (Mini grid) */}
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-amber-400 mb-4 block">
              Our Primary Business Verticals
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((cat, idx) => (
                <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-amber-500/20 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <p className="font-sans font-bold text-sm text-white">{cat.title}</p>
                  </div>
                  <p className="text-zinc-400 font-sans text-xs">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Corporate Badges & Service Areas bento) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Bento Block 1: Inclusion & Trust Attributes */}
            <div className="p-6 sm:p-8 bg-zinc-900/60 rounded-3xl border border-zinc-800">
              <h3 className="font-sans font-extrabold text-lg text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Our Corporate Values</span>
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">👩‍💼</span>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-zinc-100">Women-Owned Business</h5>
                    <p className="font-sans text-xs text-zinc-400">Proudly registered, operated, and spearheaded by women innovators.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">♿</span>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-zinc-100">Full Wheelchair Accessibility</h5>
                    <p className="font-sans text-xs text-zinc-400">Includes accessible parking spaces, ramps, level entrances, and seating areas.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">🚻</span>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-zinc-100">Inclusive Amenities & Crowd friendly</h5>
                    <p className="font-sans text-xs text-zinc-400">Gender-neutral bathrooms. An open, respectful, LGBTQ+ friendly space for all clients.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Bento Block 2: Service Areas map wrapper */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl border border-amber-500/20">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-amber-400 animate-pulse" />
                <h3 className="font-sans font-extrabold text-base uppercase tracking-wider text-white">
                  Active Service Districts
                </h3>
              </div>

              <p className="text-zinc-300 font-sans text-xs mb-4 leading-relaxed">
                Nikhitha PVC handles onsite layout estimates, material shipping, and master-level contractor fittings across these core zones in Coastal Andhra Pradesh:
              </p>

              {/* Service tags */}
              <div className="flex flex-wrap gap-2">
                {businessInfo.serviceAreas.map((area, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1 bg-zinc-900 border border-zinc-850 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-200 hover:border-amber-400/40 hover:text-white transition-all cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
              <div className="p-3 rounded-xl bg-amber-500 text-zinc-950 font-bold text-center text-sm shrink-0">
                100%
              </div>
              <div>
                <p className="font-sans font-bold text-xs text-white">Water & Damp Protection</p>
                <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Ideal for Coastal Andhra</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
