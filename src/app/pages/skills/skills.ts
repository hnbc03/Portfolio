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
    { name: 'UX Research', level: 85, icon: '/assets/images/icons/search.png', desc: 'Conducting data-driven research and user surveys to uncover pain points and define meaningful product requirements.' },
    { name: 'Wireframe & Prototype', level: 90, icon: '/assets/images/icons/wireframe.png', desc: 'Transforming ideas into low to high-fidelity interactive prototypes using Figma.' },
    { name: 'UI & Interaction Design', level: 90, icon: '/assets/images/icons/ui.png', desc: 'Designing intuitive, user-centered interfaces with a focus on micro-interactions, visual hierarchy and consistent design systems.' },
    { name: 'Responsive Web Development', level: 85, icon: '/assets/images/icons/responsive.png', desc: 'Building modern, mobile-first interfaces using HTML5, CSS3, and JavaScript that adapt seamlessly across devices.' },
    { name: 'Frontend Frameworks (Angular/React)', level: 80, icon: '/assets/images/icons/fe.png', desc: 'Developing component-based UIs with modern frameworks and UI libraries' },
    { name: 'Component-Driven Design', level: 80, icon: '/assets/images/icons/library.png', desc: 'Leveraging UI libraries like NgZorro and Material UI to build scalable and consistent design systems.' },
  ];

  tools = [
    { name: 'Figma', icon: '/assets/images/logos/figma.png', description: 'Primary tool for wireframing, prototyping, and collaborating on design systems.'},
    { name: 'VS Code', icon: '/assets/images/logos/vscode.png', description: 'Write and manage frontend code efficiently with extensions and developer tools.'},
    { name: 'GitHub', icon: '/assets/images/logos/github.png', description: 'Manage version control, collaborate on code, and track project progress.'},
    { name: 'Google Forms', icon: '/assets/images/logos/google-forms.png', description: 'Quick and easy tool for user surveys and research data collection.'},
    { name: 'Trello', icon: '/assets/images/logos/trello.png', description: 'Managing project tasks and timelines effectively within an Agile or collaborative team workflow.'},
    { name: 'Google Sheets', icon: '/assets/images/logos/google-sheets.png', description: 'Organizing research data, tracking feedback, and simple data analysis.'},
  ];

  softSkills = [
    {
      name: 'Communication',
      icon: '/assets/images/icons/communication.png',
      description: 'Communicate clearly with developers and stakeholders to align on goals and requirements.',
    },
    {
      name: 'Problem Solving',
      icon: '/assets/images/icons/problem-solving-skills.png',
      description: 'Analyzing problems and finding practical, user-centered UX solutions.',
    },
    {
      name: 'Teamwork',
      icon: '/assets/images/icons/teamwork.png',
      description: 'Collaborate effectively within teams, especially in fast-paced or Agile environments.',
    },
    {
      name: 'Adaptability',
      icon: '/assets/images/icons/study.png',
      description: 'Quickly learning and adapting to new tools, workflows, and project requirements.',
    },
    {
      name: 'Pixel-Perfect Attention',
      icon: '/assets/images/icons/attention-to-detail.png',
      description: 'Obsessing over the smallest details to ensure visual integrity remains consistent from design to code.',
    },
  ];
}
