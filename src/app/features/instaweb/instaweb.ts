import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../shared/data/project.data';

@Component({
  selector: 'app-instaweb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './instaweb.html',
  styleUrl: './instaweb.css'
})
export class Instaweb {
  project = PROJECTS.find(p => p.id === 'instaweb')!;
}