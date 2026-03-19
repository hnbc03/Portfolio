import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../shared/data/project.data';

@Component({
  selector: 'app-yumdaily',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './yumdaily.html',
  styleUrls: ['./yumdaily.css']   // nếu cần override
})
export class Yumdaily {
  project = PROJECTS.find(p => p.id === 'yumdaily')!;
}