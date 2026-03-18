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
    { name: 'Wireframe & Prototype', level: 90, icon: 'design_services', desc: 'Transforming ideas into low to high-fidelity interactive prototypes using Figma.' },
    { name: 'UI & Interaction Design', level: 90, icon: 'verified_user', desc: 'Designing intuitive, user-centered interfaces with a focus on micro-interactions, visual hierarchy and consistent design systems.' },
    { name: 'Responsive Web Development', level: 85, icon: 'animation', desc: 'Building modern, mobile-first interfaces using HTML5, CSS3, and JavaScript that adapt seamlessly across devices.' },
    { name: 'Frontend Frameworks (Angular/React)', level: 80, icon: 'palette', desc: 'Developing component-based UIs with modern frameworks and UI libraries' },
    { name: 'Component-Driven Design', level: 80, icon: 'psychology', desc: 'Leveraging UI libraries like NgZorro and Material UI to build scalable and consistent design systems.' },
  ];

  tools = [
    { name: 'Figma', icon: '/assets/images/icons/search.png', description: 'hhhígfeiuwqefkjsahfdiuhewqifhaskjfhwqiufehkjdsahfiwef'}, // bạn có thể dùng SVG hoặc emoji/icon font
    { name: 'VS Code', icon: 'tailwind-logo', description: 'hhhaefgqJDBKAJHRIUWQEHFKJahfrihfekjahefiuewhfkjhiuwehfkcjaefiwuehfciuwqehfiuwehfiuewncbkjdsahfiuwefkbcjsq'},
    { name: 'GitHub', icon: 'angular-logo', description: 'hhh'},
    { name: 'Google Forms', icon: 'code', description: 'hhh'},
    { name: 'FigJam', icon: 'group_work', description: 'hhh'},
    { name: 'Trello', icon: 'note', description: 'hhh'},
    { name: 'Google Sheets', icon: 'motion_photos_on', description: 'hhh'},
  ];

  softSkills = [
    {
      name: 'Communication',
      description: 'Giao tiếp rõ ràng với dev & stakeholder',
    },
    {
      name: 'Problem Solving',
      description: 'Phân tích vấn đề và đưa ra giải pháp UX hợp lý',
    },
    {
      name: 'Teamwork',
      description: 'Làm việc nhóm hiệu quả trong môi trường Agile',
    },
    {
      name: 'Adaptability',
      description: 'Nhanh chóng học và thích nghi với công cụ mới',
    },
    {
      name: 'Pixel-Perfect Attention',
      description: 'Nhanh chóng học và thích nghi với công cụ mới',
    },
  ];
}
