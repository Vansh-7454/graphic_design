export type ProjectCategory = "Branding" | "Packaging" | "Graphic Design" | "Campaigns";

export interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
}

export interface TypographySpec {
  headlineFont: string;
  bodyFont: string;
  accentFont?: string;
  notes: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  clientType: string; // e.g. "Concept Exploration • Studio Initiative"
  client: string;
  year: string;
  category: ProjectCategory;
  discipline: string;
  tagline: string;
  description: string;
  challenge: string;
  concept: string;
  deliverables: string[];
  heroTheme: {
    bg: string;
    text: string;
    accent: string;
    border: string;
  };
  featured: boolean;
  aspectRatio: string;
  artDirectionNotes: string;
  image: string;
  galleryImages: {
    src: string;
    caption: string;
    aspectRatio: string;
  }[];
  palette: ColorSwatch[];
  typography: TypographySpec;
  isConcept: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  offerings: string[];
  deliverables: string[];
}
