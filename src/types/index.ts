export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  benefits: string[];
  stages: {
    title: string;
    description: string;
  }[];
  pricing: string;
  technologies: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "landing" | "ecommerce" | "corporate" | "webapp";
  image: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  link?: string;
}

export interface Review {
  id: string;
  name: string;
  company: string;
  position: string;
  text: string;
  rating: number;
  image?: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}
