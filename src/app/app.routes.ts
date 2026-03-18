// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectDetail } from './features/project-detail/project-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home,           
    title: 'Portfolio | Huỳnh Ngọc Bảo Châu'
  },
  {
    path: 'project/:id',                
    component: ProjectDetail,
    title: 'Project Detail | Huỳnh Ngọc Bảo Châu'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];