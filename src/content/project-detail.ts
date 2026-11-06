// Shared, JSON-friendly structures. Sections render in their array order.
export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  caption: string;
  alt?: string;
  openLabel?: string;
}

export interface ProjectDiagram {
  nodes: { title: string; detail?: string }[];
  branches?: string[];
  sharedResource?: string;
  input?: string[];
  caption?: string;
}

export interface ProjectFeature {
  eyebrow: string;
  title: string;
  facts: { label: string; body: string; points?: string[] }[];
  note?: string;
  reverse?: boolean;
  visual?: {
    framed?: boolean;
    eyebrow?: string;
    diagram?: ProjectDiagram;
    image?: ProjectImage;
  };
  images?: ProjectImage[];
}

export interface ProjectSection {
  id: string;
  eyebrow: string;
  title: string;
  showcases?: {
    title: string;
    subhead: string;
    description: string;
    points: string[];
    image: ProjectImage;
    link: { label: string; href: string };
  }[];
  engagements?: {
    eyebrow: string;
    title: string;
    body: string;
    link?: { label: string; href: string };
  }[];
  cards?: { title: string; body: string; icon?: string }[];
  features?: ProjectFeature[];
  lead?: string;
  description?: string;
  diagram?: ProjectDiagram;
  steps?: { title: string; body: string }[];
  reflection?: string;
  outcomes?: { title?: string; body: string }[];
  outcomesTitle?: string;
  takeawayTitle?: string;
  takeaway?: string;
  supportingItems?: { title: string; body: string }[];
  primaryLink?: { label: string; href: string };
}

export interface ProjectCaseStudyContent {
  hero: {
    title: string;
    eyebrow: string;
    lead: string;
    description: string;
    additionalDescription?: string;
    status?: string;
    primaryLink?: { label: string; href: string; note?: string };
    diagram?: ProjectDiagram;
    // "full" places the image below the copy; "split" places it alongside.
    layout: string;
    meta: { label: string; value: string }[];
    team?: { label: string; value: string };
    techTags?: string[];
    heroImage?: ProjectImage;
    heroImages?: ProjectImage[];
    imageNote?: string;
  };
  sections: ProjectSection[];
}
