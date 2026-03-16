// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectDetail } from './features/project-detail/project-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home,           // chứa tất cả sections one-page
    title: 'Portfolio | Huỳnh Ngọc Bảo Châu'
  },
  {
    path: 'project/:id',                // :id là slug hoặc id của project
    component: ProjectDetail,
    title: 'Project Detail | Huỳnh Ngọc Bảo Châu'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];