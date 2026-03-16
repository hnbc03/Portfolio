import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project';

@Injectable({ providedIn: 'root' })
export class ProjectService {

  private readonly projects: ProjectModel[] = [
    {
      slug:     'yumdaily',
      title:    'YumDaily',
      subtitle: 'A social culinary network connecting food lovers through shared recipes and dining experiences.',
      year:     2024,
      tags:     ['UX Research', 'UI Design', 'Mobile', 'Web'],
      role:     'UX/UI Designer',
      duration: '3 months',
      tools:    ['Figma', 'FigJam', 'Google Forms'],
      thumbnail:'assets/images/projects/yumdaily.webp',
      featured: true,
      figmaUrl: 'YOUR_FIGMA_EMBED_URL',
      caseStudy: {
        overview: 'YumDaily is a web and mobile platform that brings food enthusiasts together through social recipe sharing, culinary discovery, and community-driven dining. Designed after extensive user research with 183 survey respondents.',
        problem:  'Food enthusiasts lack a dedicated social space that combines recipe discovery, community connection, and personalized culinary content — leading to fragmented experiences across multiple platforms.',
        researchStats: [
          { stat: '183', label: 'survey responses collected' },
          { stat: '68%', label: 'struggled to discover new recipes' },
          { stat: '82%', label: 'want social features in a food app' },
          { stat: '3',   label: 'usability testing rounds' },
        ],
        insights: [
          'Users want inspiration, not just search — discovery should be social and visual.',
          'Mobile-first usage: 74% access food content on phone while cooking.',
          'Trust is critical: users rely on community ratings over algorithmic suggestions.',
        ],
        personas: [
          {
            name: 'Linh Nguyen', age: 26,
            occupation: 'Marketing Executive',
            goals: ['Discover new recipes quickly', 'Share meals with friends'],
            painPoints: ['Too many platforms', 'Hard to find reliable recipes'],
            quote: 'I just want one place where I trust the recipes and can share what I make.'
          }
        ],
        sections: [
          {
            id: 'research', title: 'Research',
            content: 'I conducted a mixed-method research study using a 183-response survey and 6 in-depth interviews. The survey focused on current food app usage, pain points, and desired features. Key finding: discovery is the primary motivation, not recipe storage.',
            images: ['assets/images/case-studies/yumdaily-survey.webp']
          },
          {
            id: 'wireframes', title: 'Wireframes',
            content: 'Low-fidelity wireframes explored three navigation patterns. A bottom tab bar outperformed hamburger navigation in early testing — aligning with mobile-first usage data from the survey.',
            images: [
              'assets/images/case-studies/yumdaily-wf-1.webp',
              'assets/images/case-studies/yumdaily-wf-2.webp'
            ]
          },
          {
            id: 'design-system', title: 'Design system',
            content: 'A warm, food-forward design system built in Figma. Color palette draws from natural food tones. Component library covers 40+ components with interactive states documented.',
            images: ['assets/images/case-studies/yumdaily-ds.webp']
          },
          {
            id: 'hi-fi', title: 'High-fidelity UI',
            content: '60+ screens across web and mobile. The social feed prioritizes visual content with community-first ranking. Recipe pages are structured for cooking — step-by-step with adjustable portions.',
            images: [
              'assets/images/case-studies/yumdaily-hifi-1.webp',
              'assets/images/case-studies/yumdaily-hifi-2.webp',
              'assets/images/case-studies/yumdaily-hifi-3.webp',
              'assets/images/case-studies/yumdaily-hifi-4.webp'
            ]
          },
          {
            id: 'testing', title: 'Usability testing',
            content: 'Three rounds of moderated usability testing with 5 participants each. Key finding: the filter system in recipe discovery was not discoverable — 4/5 users skipped it. Redesigned as persistent chips rather than a hidden panel.',
            images: ['assets/images/case-studies/yumdaily-testing.webp']
          },
        ],
        reflection: 'This project taught me that research is only valuable if you act on it. Our biggest design change — moving from a search-first to a feed-first home screen — came directly from survey data showing users want discovery, not just lookup. If I could do it again, I would conduct testing earlier in the wireframe phase to catch the navigation issues sooner.'
      }
    },
    // Add more projects here following the same structure
  ];

  getAll():              ProjectModel[]         { return this.projects; }
  getFeatured():        ProjectModel[]         { return this.projects.filter(p => p.featured); }
  getBySlug(slug: string): ProjectModel | undefined {
    return this.projects.find(p => p.slug === slug);
  }
}