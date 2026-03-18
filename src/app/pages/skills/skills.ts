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
    { name: 'User Research', level: 85, icon: '/assets/images/icons/search.png' },
    { name: 'Wireframing & Prototyping', level: 90, icon: 'design_services' },
    { name: 'Usability Testing', level: 80, icon: 'verified_user' },
    { name: 'Interaction Design', level: 75, icon: 'animation' },
    { name: 'Design Systems', level: 70, icon: 'palette' },
    { name: 'Human-Centered Design', level: 90, icon: 'psychology' },
  ];

  tools = [
    { name: 'Figma', icon: '/assets/images/icons/search.png', description: 'hhhígfeiuwqefkjsahfdiuhewqifhaskjfhwqiufehkjdsahfiwef', bg: '#FDECEC' }, // bạn có thể dùng SVG hoặc emoji/icon font
    { name: 'Tailwind CSS', icon: 'tailwind-logo', description: 'hhhaefgqJDBKAJHRIUWQEHFKJahfrihfekjahefiuewhfkjhiuwehfkcjaefiwuehfciuwqehfiuwehfiuewncbkjdsahfiuwefkbcjsq', bg: '#FDECEC' },
    { name: 'Angular', icon: 'angular-logo', description: 'hhh', bg: '#E6F7F5' },
    { name: 'HTML / CSS / JS', icon: 'code', description: 'hhh', bg: '#FDEAEA' },
    { name: 'FigJam / Miro', icon: 'group_work', description: 'hhh', bg: '#FDEAEA' },
    { name: 'Notion', icon: 'note', description: 'hhh', bg: '#FDEAEA' },
    { name: 'Basic Framer Motion', icon: 'motion_photos_on', description: 'hhh', bg: '#FDEAEA' },
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
  ];
}
