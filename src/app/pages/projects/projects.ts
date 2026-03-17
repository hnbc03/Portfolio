import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PROJECTS } from '../../shared/data/project.data';
import { Project } from '../../shared/models/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
})
export class Projects {
  filters: ('All' | 'UI/UX' | 'Web' | 'IoT')[] = ['All', 'UI/UX', 'Web', 'IoT'];
  
  projects = signal<Project[]>(PROJECTS);
  activeFilter = signal<'All' | 'UI/UX' | 'Web' | 'IoT'>('All');

  filteredProjects = this.projects.asReadonly(); // sẽ update khi filter

  setFilter(category: 'All' | 'UI/UX' | 'Web' | 'IoT') {
    this.activeFilter.set(category);
    if (category === 'All') {
      this.projects.set(PROJECTS);
    } else {
      this.projects.set(PROJECTS.filter(p => p.category === category));
    }
  }
}