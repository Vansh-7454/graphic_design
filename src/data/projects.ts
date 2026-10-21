import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "sole-cafe",
    slug: "sole-cafe",
    title: "Solé Café & Atelier",
    clientType: "Studio Concept Exploration • Hospitality",
    client: "Solé Hospitality Studio",
    year: "2026",
    category: "Branding",
    discipline: "Contemporary Café Brand Identity",
    tagline: "Architectural espresso bar & pastry atelier rooted in Mediterranean warmth.",
    description:
      "A complete concept identity for an artisanal espresso bar and slow-fermentation bakery. We married Swiss grid discipline with organic Mediterranean warmth, utilizing honed limestone textures, unbleached cotton paper menus, and bespoke terracotta ceramics.",
    challenge:
      "Hospitality branding often swings between overly sterile Scandinavian minimalism and cluttered rustic nostalgia. The challenge was defining an elevated modern visual language that feels architectural yet deeply hospitable and sensory.",
    concept:
      "The Geometry of Warmth: A solar arc motif paired with structured, monospace editorial typography. Menus are printed on 300gsm raw cotton stock with terracotta foil accents, complemented by custom hand-thrown stoneware cups stamped with the brand's solar mark.",
    deliverables: [
      "Brand Identity System",
      "Menu Architecture & Print Suites",
      "Ceramic & Packaging Stamping",
      "Signage & Spatial Typography",
    ],
    heroTheme: {
      bg: "#F5F1E8",
      text: "#17191C",
      accent: "#C85A32", // Terracotta
      border: "rgba(23, 25, 28, 0.12)",
    },
    featured: true,
    aspectRatio: "4/3",
    artDirectionNotes: "Travertine counters, natural morning sunlight, blind debossing on raw paper, terracotta ceramics.",
    image: "/images/sole_cafe.jpg",
    galleryImages: [
      {
        src: "/images/sole_cafe.jpg",
        caption: "Tactile cotton menu suite on honed travertine counter with custom terracotta cup.",
        aspectRatio: "4/3",
      },
      {
        src: "/images/grow_hero_artwork.jpg",
        caption: "Typographic spec sheet and botanical ingredient indexing.",
        aspectRatio: "4/3",
      },
    ],
    palette: [
      { name: "Terracotta Earth", hex: "#C85A32", role: "Primary Brand Accent" },
      { name: "Warm Ivory", hex: "#F5F1E8", role: "Paper Substrate Background" },
      { name: "Midnight Ink", hex: "#17191C", role: "Primary Typographic Tone" },
      { name: "Olive Linen", hex: "#63684B", role: "Secondary Soft Accent" },
      { name: "Butter Ochre", hex: "#F2D675", role: "Specialty Label Spot" },
    ],
    typography: {
      headlineFont: "Space Grotesk (700)",
      bodyFont: "DM Sans (400 / 500)",
      accentFont: "Newsreader (Italic Serif)",
      notes: "High-contrast geometric headers paired with warm editorial serif notes for seasonal roast origins.",
    },
    isConcept: true,
  },
  {
    id: "aura-botanics",
    slug: "aura-botanics",
    title: "AURA Botanics Labs",
    clientType: "Studio Concept Exploration • Personal Care",
    client: "Aura Formulation Labs",
    year: "2026",
    category: "Packaging",
    discipline: "Premium Skincare Packaging System",
    tagline: "Cellular botanical synthesis packaged in tactile architectural paperboard.",
    description:
      "A luxury packaging and brand identity concept for a high-potency dermatological atelier. We explored tactile blind debossing on unbleached 350gsm cotton cardstock, paired with UV-filtering amber apothecary glassware and cold-foil registration seals.",
    challenge:
      "Dermatological skincare packaging often defaults to cold medical white plastics or generic green organic motifs. We sought to craft a tactile, museum-grade object that communicates high scientific efficacy through material intelligence.",
    concept:
      "Tactile Purity: An unboxing experience centered on tactile weight and sensory discovery. Heavy textured paperboard with deep blind debossing, custom apothecary glass silhouettes, and monospaced formulation indexes.",
    deliverables: [
      "Packaging Structural Architecture",
      "Apothecary Bottle & Dropper System",
      "Tamper-Evident Foil Seals",
      "Editorial Ingredient Monograph",
    ],
    heroTheme: {
      bg: "#17191C",
      text: "#F5F1E8",
      accent: "#F15A38",
      border: "rgba(245, 241, 232, 0.15)",
    },
    featured: true,
    aspectRatio: "4/3",
    artDirectionNotes: "Deep architectural shadows, cold-foil registration marks, 350gsm cotton board, amber apothecary bottle.",
    image: "/images/lumina_botanics.jpg",
    galleryImages: [
      {
        src: "/images/lumina_botanics.jpg",
        caption: "Blind debossed outer carton alongside amber glass formulation vial and open Swiss typography catalogue.",
        aspectRatio: "4/3",
      },
      {
        src: "/images/atelier_verre.jpg",
        caption: "Sensory material testing and amber glass translucency study.",
        aspectRatio: "1/1",
      },
    ],
    palette: [
      { name: "Warm Ivory Board", hex: "#F5F1E8", role: "Unbleached Cotton Substrate" },
      { name: "Amber Glass", hex: "#B87333", role: "Vial Translucency" },
      { name: "Midnight Ink", hex: "#17191C", role: "Core Contrast" },
      { name: "Vermilion Accent", hex: "#F15A38", role: "Batch & Date Indicator" },
      { name: "Cobalt Ribbon", hex: "#3457E5", role: "Unboxing Pull Tape" },
    ],
    typography: {
      headlineFont: "Newsreader (Serif Display)",
      bodyFont: "DM Sans (Regular)",
      accentFont: "Space Grotesk (Mono Spec)",
      notes: "Monospaced botanical formulation codes juxtaposed with classical high-contrast serif headlines.",
    },
    isConcept: true,
  },
  {
    id: "noir-archive",
    slug: "noir-archive",
    title: "NOIR ARCHIVE",
    clientType: "Studio Concept Exploration • Apparel",
    client: "Noir Atelier Paris",
    year: "2026",
    category: "Branding",
    discipline: "Independent Fashion Identity & Editorial",
    tagline: "Monochromatic tailoring atelier celebrating brutalist architectural silhouettes.",
    description:
      "A stark, razor-sharp visual identity for an independent luxury fashion label. Featuring wide-tracked geometric letterforms, heavy black string-and-washer document envelopes, woven silver-threaded garment tags, and duplex lookbook publications.",
    challenge:
      "Creating an avant-garde luxury fashion identity that communicates rigorous architectural construction without resorting to pretentious, unreadable branding tropes.",
    concept:
      "Structural Silhouette: Extreme letter tracking, deep tonal black-on-black textures, and tactile utilitarian fasteners. The identity acts as a quiet, authoritative frame for heavy woolens and sculpted outerwear.",
    deliverables: [
      "Primary Wordmark & Typography System",
      "Woven Jacquard Label Architecture",
      "Packaging Envelope & Unboxing Suite",
      "Seasonal Collection Lookbook",
    ],
    heroTheme: {
      bg: "#17191C",
      text: "#FFFFFF",
      accent: "#777872",
      border: "rgba(255, 255, 255, 0.2)",
    },
    featured: true,
    aspectRatio: "4/3",
    artDirectionNotes: "Heavy matte black cardstock, debossed black gloss foil, heavy wool textiles, dramatic raking light.",
    image: "/images/noir_archive.jpg",
    galleryImages: [
      {
        src: "/images/noir_archive.jpg",
        caption: "Black string-and-washer unboxing envelope with debossed NOIR mark and woven garment label.",
        aspectRatio: "4/3",
      },
      {
        src: "/images/forma_magazine.jpg",
        caption: "Editorial lookbook layout incorporating architectural photography and structured typography.",
        aspectRatio: "3/4",
      },
    ],
    palette: [
      { name: "Carbon Ink", hex: "#17191C", role: "Primary Heavy Tone" },
      { name: "Pure White", hex: "#FFFFFF", role: "Text & Contrast" },
      { name: "Slate Wool", hex: "#4A4B4F", role: "Midtone Shade" },
      { name: "Muted Gray", hex: "#777872", role: "Technical Labeling" },
      { name: "Silver Filament", hex: "#E2E2E2", role: "Woven Thread Detail" },
    ],
    typography: {
      headlineFont: "Space Grotesk (Bold Extended)",
      bodyFont: "DM Sans (Light / Medium)",
      notes: "Extreme horizontal tracking (+0.28em) creating an architectural presence across garments and lookbooks.",
    },
    isConcept: true,
  },
  {
    id: "kiln-coffee",
    slug: "kiln-coffee",
    title: "KILN Specialty Roasters",
    clientType: "Studio Concept Exploration • Specialty Goods",
    client: "Kiln Roasting Co.",
    year: "2025",
    category: "Packaging",
    discipline: "Specialty Coffee Packaging & Canister System",
    tagline: "Single-origin microlots preserved in nitrogen-flushed cylindrical aluminium vessels.",
    description:
      "A modular packaging system developed for single-origin microlot coffees. We replaced standard plastic-lined kraft pouches with matte white and electric cobalt reusable aluminium canisters featuring textured harvest origin seals.",
    challenge:
      "Specialty coffee packaging is flooded with ephemeral paper bags that degrade coffee freshness and look identical on shelves. We wanted to design a collectible, kitchen-worthy vessel that honors smallholder coffee producers.",
    concept:
      "Mineral & Origin: Reusable spun aluminium vessels with tactile paper labels wrapped around the lid and body seam. Each harvest features its own distinct spot color, elevation rating, and tasting note typography.",
    deliverables: [
      "Canister Structural Design & Finishes",
      "Tamper-Proof Origin Wrap Labels",
      "Tasting Note Matrix Cards",
      "Subscription Shipping Shipper",
    ],
    heroTheme: {
      bg: "#3457E5",
      text: "#FFFFFF",
      accent: "#F2D675",
      border: "rgba(255, 255, 255, 0.2)",
    },
    featured: true,
    aspectRatio: "4/3",
    artDirectionNotes: "Matte white aluminium canister, electric cobalt color block, whole roasted beans, textured paper seal.",
    image: "/images/kiln_coffee.jpg",
    galleryImages: [
      {
        src: "/images/kiln_coffee.jpg",
        caption: "Nitrogen-flushed reusable coffee canister with Ethiopian single-origin harvest wrap label.",
        aspectRatio: "4/3",
      },
      {
        src: "/images/sole_cafe.jpg",
        caption: "In-situ espresso bar integration and tabletop service experience.",
        aspectRatio: "4/3",
      },
    ],
    palette: [
      { name: "Electric Cobalt", hex: "#3457E5", role: "Primary Canister Brand Block" },
      { name: "Matte White", hex: "#FFFFFF", role: "Aluminium Canister Finish" },
      { name: "Raw Ochre Label", hex: "#F2D675", role: "Harvest Paper Seal" },
      { name: "Midnight Ink", hex: "#17191C", role: "Typography" },
      { name: "Vermilion Roast", hex: "#F15A38", role: "Process Spec Chip" },
    ],
    typography: {
      headlineFont: "Space Grotesk (700)",
      bodyFont: "DM Sans (500)",
      notes: "Strict Swiss typographic grid specifying elevation, varietal, wash process, and cup scores with zero clutter.",
    },
    isConcept: true,
  },
  {
    id: "klang-biennale",
    slug: "klang-biennale",
    title: "KLANG Biennale 2026",
    clientType: "Studio Concept Exploration • Cultural Institution",
    client: "Zurich Kunsthaus Biennale",
    year: "2026",
    category: "Campaigns",
    discipline: "Creative Event Poster Campaign",
    tagline: "International biennial of acoustic sculpture, spatial sound, and experimental architecture.",
    description:
      "A high-impact citywide poster campaign deployed across Zurich, Basel, and Geneva. We visualized invisible acoustic oscillations through bold kinetic grid systems, electric cobalt color floods, and oversized Swiss numerals.",
    challenge:
      "How do you translate sound sculpture and ephemeral acoustic performances into static, two-dimensional posters that grab the attention of passersby from 50 feet away?",
    concept:
      "Visible Resonance: Deconstructing sound wave physics into high-contrast graphic geometries. Posters use fluorescent spot inks, stark bilingual typography, and modular grid arrangements that vary across every venue location.",
    deliverables: [
      "Campaign Identity & Visual System",
      "City Billboard & Poster Series (F4 & F12 formats)",
      "Digital Motion Billboard Adaptations",
      "Festival Program Guide & Spatial Map",
    ],
    heroTheme: {
      bg: "#3457E5",
      text: "#FFFFFF",
      accent: "#F2D675",
      border: "rgba(255, 255, 255, 0.2)",
    },
    featured: true,
    aspectRatio: "16/9",
    artDirectionNotes: "Acoustic transducer sculpture, raw concrete gallery, electric cobalt glow, precision Swiss poster on wall.",
    image: "/images/kura_acoustics.jpg",
    galleryImages: [
      {
        src: "/images/kura_acoustics.jpg",
        caption: "Main exhibition installation and architectural poster staging inside the Zurich Kunsthaus gallery.",
        aspectRatio: "16/9",
      },
      {
        src: "/images/forma_magazine.jpg",
        caption: "Exhibition monograph guide and floor plan directory.",
        aspectRatio: "3/4",
      },
    ],
    palette: [
      { name: "Electric Cobalt", hex: "#3457E5", role: "Primary Resonant Flood" },
      { name: "Signal Yellow", hex: "#F2D675", role: "High-Visibility Date Mark" },
      { name: "Concrete Gray", hex: "#E8E7E4", role: "Spatial Backdrop" },
      { name: "Midnight Ink", hex: "#17191C", role: "Bilingual Body Typography" },
      { name: "Vermilion Accent", hex: "#F15A38", role: "Ticket & Time Stamp" },
    ],
    typography: {
      headlineFont: "Space Grotesk (Black Display)",
      bodyFont: "DM Sans (Medium)",
      accentFont: "Newsreader (Italic)",
      notes: "Massive scale headlines juxtaposed against ultra-fine technical registration coordinates and acoustic Hertz specs.",
    },
    isConcept: true,
  },
  {
    id: "velo-lifestyle",
    slug: "velo-lifestyle",
    title: "VÉLO Utilitarian Goods",
    clientType: "Studio Concept Exploration • Mobility & Goods",
    client: "Vélo Mobility Lab",
    year: "2025",
    category: "Graphic Design",
    discipline: "Modern Utilitarian Lifestyle Brand",
    tagline: "Ergonomic urban commuting gear and modular weather-resistant carry systems.",
    description:
      "A contemporary lifestyle brand identity concept for modern city cyclists and urban commuters. Featuring weather-resistant technical hangtags, reflective screenprints, anodized hardware branding, and an editorial launch catalogue.",
    challenge:
      "Urban mobility goods frequently fall into either drab utilitarian outdoors aesthetic or fragile high-fashion styling. The goal was to build a confident, technical lifestyle identity that celebrates everyday functional utility.",
    concept:
      "Form in Motion: Technical graphic specs inspired by Swiss railway wayfinding and industrial gear blueprints. High-contrast vermilion woven tags, millimeter dimension callouts, and clean waterproof packaging.",
    deliverables: [
      "Brand Identity & Wordmark",
      "Technical Hangtag & Hardware Spec System",
      "Reflective Apparel Screenprints",
      "Seasonal Commuter Product Lookbook",
    ],
    heroTheme: {
      bg: "#F15A38",
      text: "#FFFFFF",
      accent: "#17191C",
      border: "rgba(255, 255, 255, 0.2)",
    },
    featured: true,
    aspectRatio: "4/3",
    artDirectionNotes: "Matte black commuter pack, vibrant vermilion orange woven strap, technical hangtag with Swiss type, concrete floor.",
    image: "/images/velo_lifestyle.jpg",
    galleryImages: [
      {
        src: "/images/velo_lifestyle.jpg",
        caption: "Technical Cordura commuter backpack with vermilion strap and weather-resistant hangtag spec.",
        aspectRatio: "4/3",
      },
      {
        src: "/images/noir_archive.jpg",
        caption: "Lookbook packaging and fabric component labeling.",
        aspectRatio: "4/3",
      },
    ],
    palette: [
      { name: "Safety Vermilion", hex: "#F15A38", role: "High-Visibility Accents" },
      { name: "Matte Black", hex: "#17191C", role: "Cordura Fabric Base" },
      { name: "Warm Concrete", hex: "#F5F1E8", role: "Background Surface" },
      { name: "Electric Cobalt", hex: "#3457E5", role: "Technical Blueprint Linework" },
      { name: "Stainless Steel", hex: "#B0B2B8", role: "Hardware & Fasteners" },
    ],
    typography: {
      headlineFont: "Space Grotesk (Bold)",
      bodyFont: "DM Sans (Mono & Regular)",
      notes: "Heavy industrial grotesk with technical subscript dimensions (e.g. VOL: 24L, MAT: CORDURA).",
    },
    isConcept: true,
  },
];
