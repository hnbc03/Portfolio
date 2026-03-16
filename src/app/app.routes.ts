import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home),
    title: '[Huynh Ngoc Bao Chau] — UI/UX Designer'
  },
  {
    path: 'work/:slug',
    loadComponent: () =>
      import('./pages/case-study/case-study')
        .then(m => m.CaseStudy),
  },
  { path: '**', redirectTo: '' }
];