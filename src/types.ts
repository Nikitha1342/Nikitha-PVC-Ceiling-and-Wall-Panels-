export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  iconName: string;
  features: string[];
}

export interface Slide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  category: "ceiling" | "wall" | "wpc" | "false-ceiling";
  title: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
  isToday: boolean;
}
