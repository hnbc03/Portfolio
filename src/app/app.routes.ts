// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Yumdaily } from './features/yumdaily/yumdaily';
import { Weatherr } from './features/weatherr/weatherr';
import { Instaweb } from './features/instaweb/instaweb';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Portfolio | Huỳnh Ngọc Bảo Châu',
  },
  {
    path: 'projects/yumdaily',
    component: Yumdaily,
    title: 'YumDaily - Social Culinary Network | Huỳnh Ngọc Bảo Châu',
  },
  {
    path: 'projects/weatherr',
    component: Weatherr,
    title: 'Weatherr - IoT Weather Station | Huỳnh Ngọc Bảo Châu',
  },
  {
    path: 'projects/instaweb',
    component: Instaweb,
    title: 'InstaWeb - Instagram-inspired Web App | Huỳnh Ngọc Bảo Châu',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
