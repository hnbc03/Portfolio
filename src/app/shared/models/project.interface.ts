// src/app/shared/models/project.interface.ts
export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption?: string;
  type?: 'desktop' | 'mobile' | 'code' | 'diagram' | 'screenshot';
}

export interface DesignProcessStep {
  title: string;
  description: string;
  images?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'UI/UX' | 'IoT' | 'Web';
  shortDesc: string;
  year: string;
  tags: string[];
  thumbnail: string;
  heroImage?: string;
  tools: string[];
  role?: string;
  timeline?: string;
  figmaUrl?: string;
  liveUrl?: string;
  githubUrl?: string;

  // chung cho case study
  overview?: {
    summary: string;
    problem?: string;
    solution?: string;
  };
  roleScope?: string;

  // UI/UX specific
  problemStatement?: string[];
  hypothesis?: string[];
  designProcess?: DesignProcessStep[];
  results?: string[];
  metrics?: string[];

  // IoT / Web specific (có thể dùng chung hoặc riêng)
  technicalSections?: {
    title: string;
    content: string;
    images?: string[];
    codeSnippets?: { language: string; code: string }[];
  }[];

  gallery?: ProjectGalleryItem[];

  featured?: boolean;
}