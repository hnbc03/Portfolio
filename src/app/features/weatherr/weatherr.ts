import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../shared/data/project.data';

@Component({
  selector: 'app-weatherr',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './weatherr.html',
  styleUrl: './weatherr.css' // nếu cần style riêng, còn không thì bỏ
})
export class Weatherr {
  project = PROJECTS.find(p => p.id === 'weatherr')!;
}