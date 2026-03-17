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
    { name: 'User Research', level: 85, icon: 'search' },
    { name: 'Wireframing & Prototyping', level: 90, icon: 'design_services' },
    { name: 'Usability Testing', level: 80, icon: 'verified_user' },
    { name: 'Interaction Design', level: 75, icon: 'animation' },
    { name: 'Design Systems', level: 70, icon: 'palette' },
    { name: 'Human-Centered Design', level: 90, icon: 'psychology' },
  ];

  tools = [
    { name: 'Figma', icon: 'figma-logo' },          // bạn có thể dùng SVG hoặc emoji/icon font
    { name: 'Tailwind CSS', icon: 'tailwind-logo' },
    { name: 'Angular', icon: 'angular-logo' },
    { name: 'HTML / CSS / JS', icon: 'code' },
    { name: 'FigJam / Miro', icon: 'group_work' },
    { name: 'Notion', icon: 'note' },
    { name: 'Basic Framer Motion', icon: 'motion_photos_on' },
  ];
}