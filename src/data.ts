import { Service, Slide, GalleryItem } from "./types";

export const businessInfo = {
  name: "Nikhitha PVC Ceiling and Wall Panels Vijayawada",
  shortName: "Nikhitha PVC",
  category: "Ceiling Supplier",
  phone: "+91 86391 21227",
  phoneFormatted: "+918639121227",
  whatsappUrl: "https://wa.me/918639121227",
  smsUrl: "sms:+918639121227",
  address: "Andhra Prabha colony, ambapuram road, Vijayawada, Andhra Pradesh 520015",
  serviceAreas: [
    "Vijayawada",
    "Guntur",
    "Visakhapatnam",
    "Rajamahendravaram",
    "Andhra Pradesh"
  ],
  hours: [
    { day: "Sunday", time: "8:00 AM – 10:00 PM" },
    { day: "Monday", time: "8:00 AM – 10:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 10:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 10:00 PM" },
    { day: "Thursday", time: "8:00 AM – 10:00 PM" },
    { day: "Friday", time: "8:00 AM – 10:00 PM" },
    { day: "Saturday", time: "8:00 AM – 10:00 PM" }
  ],
  attributes: {
    womenOwned: true,
    accessibility: [
      "Wheelchair accessible entrance",
      "Wheelchair accessible parking lot",
      "Wheelchair accessible seating"
    ],
    amenities: [
      "Gender-neutral restroom"
    ],
    crowd: [
      "LGBTQ+ friendly"
    ],
    options: [
      "Onsite services available"
    ]
  }
};

export const slides: Slide[] = [
  {
    id: "slide1",
    image: "/images/ceiling1.jpg",
    title: "Elegant PVC Ceilings",
    subtitle: "Modern Ceilings for Luxury Interiors",
    description: "Upgrade your living spaces with light-weight, durable, and highly customizable PVC ceilings that offer water resistance and heat insulation.",
    ctaText: "Explore Ceiling Designs",
    ctaLink: "#services"
  },
  {
    id: "slide2",
    image: "/images/wall1.jpg",
    title: "Premium Wall Panels",
    subtitle: "Customized Designer Accent Walls",
    description: "Transform dull walls into striking masterworks with marble-finish, stone-textured, and glossy protective PVC designer sheets.",
    ctaText: "View Wall Panels",
    ctaLink: "#services"
  },
  {
    id: "slide3",
    image: "/images/louver1.jpg",
    title: "Stylish WPC Louvers",
    subtitle: "Textured Wood-Plastic Fluted Slabs",
    description: "Achieve the organic, architectural warmth of natural wood lines with waterproof, fire-resistant, and termite-proof fluted WPC louvers.",
    ctaText: "Discover Louvers",
    ctaLink: "#services"
  },
  {
    id: "slide4",
    image: "/images/office1.jpg",
    title: "Commercial False Ceilings",
    subtitle: "Acoustics & Aesthetic Grids",
    description: "Perfect for showrooms, retail stores, conference halls, and modern offices in Vijayawada looking for seamless lighting integration.",
    ctaText: "Contact for Office Audit",
    ctaLink: "#contact"
  }
];

export const services: Service[] = [
  {
    id: "pvc-ceiling",
    title: "PVC Ceiling Systems",
    description: "Bespoke, moisture-resistant false ceiling panels that are light, durable, and require zero painting.",
    longDescription: "Our premium PVC Ceiling installation service provides a modern touch to your space. Recommended for living rooms, kitchens, bathrooms, and commercial zones due to its moisture-free, termite-resistant, and flame-retardant traits. You get a perfect finish with hidden wiring, integration with glowing LED spot-lights, and clean grid alignments.",
    image: "/images/ceiling1.jpg",
    iconName: "Maximize2", // Representing ceiling area
    features: [
      "100% Water and Moisture Resistant",
      "Termite & Pest Proof",
      "No Paint or Spackle Required",
      "Hidden LED/Cove Light Integrations"
    ]
  },
  {
    id: "wall-panels",
    title: "Decorative Wall Panels",
    description: "Transform standard walls with premium marble-look sheets, stone textures, and 3D geometric wall layers.",
    longDescription: "Add a high-end feel to your accent walls, TV backdrops, office lobbies or retail backdrops. Say goodbye to damp walls, peeling paint, or fading wallpaper. PVC panels offer robust, scratch-resistant protection combined with elegant marble, timber, or concrete finishes.",
    image: "/images/wall1.jpg",
    iconName: "Layout",
    features: [
      "Damp-Proof and Anti-Mold Coating",
      "High Durability & Scratch Resistance",
      "Easy to Clean & Dust-Free Surface",
      "Realistic Wood & Marble Finishes"
    ]
  },
  {
    id: "wpc-louvers",
    title: "WPC Fluted Louvers",
    description: "Premium fluted wood-plastic composite panels that bring natural wood patterns without timber decay.",
    longDescription: "WPC Louvers provide distinct vertical lines and shadows of architectural timber. Unlike natural timber, WPC does not crack, rot, warp, or require constant varnishing. Ideal for television backdrops, bedding focal sheets, column wraps, and executive cabins.",
    image: "/images/louver1.jpg",
    iconName: "ListFilter",
    features: [
      "Acoustic Dampening Attributes",
      "Zero Rotting, Decaying, or Polishing",
      "Highly UV Resistant Color Preservation",
      "Stunning Linear Vertical Depth"
    ]
  },
  {
    id: "false-ceilings",
    title: "Custom False Ceilings",
    description: "Sophisticated multi-level gypsum, metal, and PVC ceilings with modern drop-suspensions.",
    longDescription: "Whether seeking elegant concentric circle steps, rectangular glowing floating boxes, or simple clean recessed tray panels, our Vijayawada craftsmen will turn your interior blueprint into reality. We handle custom metal framework, premium board selection, lighting wire tracks, and master-level finishing.",
    image: "/images/false_ceiling1.jpg",
    iconName: "Layers",
    features: [
      "Thermal Insulation Support",
      "Enhanced Room acoustics and sound reduction",
      "Light-Weight Suspended Structures",
      "Multi-Year Workmanship Warranties"
    ]
  },
  {
    id: "pvc-windows",
    title: "PVC Windows & Doors",
    description: "High-integrity, secure, dustproof PVC window frames and lightweight water-resistant doors.",
    longDescription: "Our PVC window framing and moisture-proof interior doors are built to handle the intense wet/dry weather patterns of Coastal Andhra. Say goodbye to swollen bathroom doors and rusty, jammed metal window panes. Experience double seals, zero drafts, and rustproof multi-point locks.",
    image: "/images/window1.jpg",
    iconName: "SquareDot",
    features: [
      "Resistant to High Humidity & Swelling",
      "Excellent Weather & Saltwater Proofing",
      "Robust Soundproofing Blocks",
      "High-Security Locks Compatibility"
    ]
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    image: "/images/ceiling1.jpg",
    category: "ceiling",
    title: "Luxury living room panel installation"
  },
  {
    id: "g2",
    image: "/images/wall1.jpg",
    category: "wall",
    title: "Wood grain PVC bed backdrop paneling"
  },
  {
    id: "g3",
    image: "/images/louver1.jpg",
    category: "wpc",
    title: "Vertical fluted WPC louvers in dining area"
  },
  {
    id: "g4",
    image: "/images/office1.jpg",
    category: "false-ceiling",
    title: "Modern commercial grid ceiling with LEDs"
  },
  {
    id: "g5",
    image: "/images/window1.jpg",
    category: "wall",
    title: "High-gloss geometric PVC panel styling"
  },
  {
    id: "g6",
    image: "/images/false_ceiling1.jpg",
    category: "ceiling",
    title: "Seamless wooden finish PVC tiles ceiling"
  }
];

export const faqItems = [
  {
    q: "Why should we choose PVC ceiling panels over standard POP or Plaster of Paris ceilings?",
    a: "PVC panels are 100% waterproof, termite-proof, and significantly lighter. POP is prone to cracking, water stains, and mold growth if there is a ceiling leak above. PVC is completely washable, takes less time to install (usually finished within 24-48 hours), requires zero paint, and does not produce dusty plaster debris."
  },
  {
    q: "How durable are PVC wall panels in high-humidity areas like bathrooms or coastal Vijayawada climates?",
    a: "PVC is inherently synthetic, which means it cannot rot, crack, swell, or breed mold. This makes it perfect for bathrooms, laundry spaces, and kitchens where moisture levels are high, as well as general rooms where there is minor rising dampness in the concrete."
  },
  {
    q: "Are the WPC Louvers suitable for exterior balcony spaces?",
    a: "Yes! Our premium WPC (Wood-Plastic Composite) louvers are blended with UV-protection blockers as well as anti-aging resins. They easily withstand hot summers and heavy monsoon rains without losing their rich timber hues or splitting."
  },
  {
    q: "Do you offer onsite measurements and interior designer layout planning in Vijayawada?",
    a: "Yes, we provide fully onsite services. For customers in Vijayawada, Guntur, Visakhapatnam, and surrounding Andhra districts, we send our leading designers directly with sample booklets, perform measurements, and calculate exact quotes based on your design preferences."
  }
];
