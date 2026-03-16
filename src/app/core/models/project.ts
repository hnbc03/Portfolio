export interface ProjectModel {
  slug:      string;
  title:     string;
  subtitle: string;
  year:      number;
  tags:      string[];
  role:      string;
  duration: string;
  tools:     string[];
  thumbnail: string;
  featured:  boolean;
  figmaUrl?: string;
  caseStudy: CaseStudy;
}

export interface CaseStudy {
  overview:           string;
  problem:            string;
  researchStats:      { stat: string; label: string }[];
  insights:           string[];
  personas:           Persona[];
  sections:           CaseStudySection[];
  reflection:         string;
}

export interface CaseStudySection {
  id:      string;
  title:   string;
  content: string;
  images?: string[];
  type?:   'text' | 'images' | 'comparison';
}

export interface Persona {
  name:       string;
  age:        number;
  occupation: string;
  goals:      string[];
  painPoints: string[];
  quote:      string;
}