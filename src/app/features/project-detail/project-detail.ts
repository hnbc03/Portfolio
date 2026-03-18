import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECTS } from '../../shared/data/project.data';
import { Project } from '../../shared/models/project.interface';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);

  project: Project | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project = PROJECTS.find(p => p.id === id);
    }
    console.log('DETAIL PAGE LOADED');
  }
}