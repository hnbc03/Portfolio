import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectModel } from '../../../core/models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-card.html'
})
export class ProjectCard {
  project = input.required<ProjectModel>();
}