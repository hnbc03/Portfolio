import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
})
export class Skills {
  coreSkills = [
    {
      name: 'UX Research',
      level: 85,
      icon: '/assets/images/icons/search.png',
      desc: 'User surveys, interviews, data-driven insights to define product requirements.',
    },
    {
      name: 'Wireframe & Prototype',
      level: 90,
      icon: '/assets/images/icons/wireframe.png',
      desc: 'Low to high-fidelity interactive prototypes with Figma.',
    },
    {
      name: 'UI & Interaction Design',
      level: 90,
      icon: '/assets/images/icons/ui.png',
      desc: 'User-centered interfaces, micro-interactions, visual hierarchy, design systems.',
    },
    {
      name: 'Responsive Web Development',
      level: 85,
      icon: '/assets/images/icons/responsive.png',
      desc: 'Mobile-first, cross-device interfaces with HTML5, CSS3, JavaScript.',
    },
    {
      name: 'Frontend Frameworks (Angular/React)',
      level: 80,
      icon: '/assets/images/icons/fe.png',
      desc: 'Component-based UIs with modern frameworks and UI libraries.',
    },
    {
      name: 'Component-Driven Design',
      level: 80,
      icon: '/assets/images/icons/library.png',
      desc: 'Scalable, consistent design systems with NgZorro, Material UI.',
    },
  ];

  tools = [
    {
      name: 'Figma',
      icon: '/assets/images/logos/figma.png',
      description: 'Wireframing, prototyping, design systems, collaboration.',
    },
    {
      name: 'VS Code',
      icon: '/assets/images/logos/vscode.png',
      description: 'Frontend coding, extensions, dev tools.',
    },
    {
      name: 'GitHub',
      icon: '/assets/images/logos/github.png',
      description: 'Version control, code collaboration, project tracking.',
    },
    {
      name: 'Google Forms',
      icon: '/assets/images/logos/google-forms.png',
      description: 'User surveys, research data collection.',
    },
    {
      name: 'Trello',
      icon: '/assets/images/logos/trello.png',
      description: 'Task management, Agile workflow, team collaboration.',
    },
    {
      name: 'Google Sheets',
      icon: '/assets/images/logos/google-sheets.png',
      description: 'Research data, feedback tracking, data analysis.',
    },
  ];

  softSkills = [
    {
      name: 'Communication',
      icon: '/assets/images/icons/communication.png',
      description:
        'Communicate clearly with developers and stakeholders to align on goals and requirements.',
    },
    {
      name: 'Problem Solving',
      icon: '/assets/images/icons/problem-solving-skills.png',
      description: 'Analyzing problems and finding practical, user-centered UX solutions.',
    },
    {
      name: 'Teamwork',
      icon: '/assets/images/icons/teamwork.png',
      description:
        'Collaborate effectively within teams, especially in fast-paced or Agile environments.',
    },
    {
      name: 'Adaptability',
      icon: '/assets/images/icons/study.png',
      description:
        'Quickly learning and adapting to new tools, workflows, and project requirements.',
    },
    {
      name: 'Pixel-Perfect Attention',
      icon: '/assets/images/icons/attention-to-detail.png',
      description:
        'Obsessing over the smallest details to ensure visual integrity remains consistent from design to code.',
    },
  ];
}
