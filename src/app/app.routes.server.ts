import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  { path: 'projects/yumdaily', renderMode: RenderMode.Client },
  { path: 'projects/weatherr', renderMode: RenderMode.Client },
  { path: 'projects/instaweb', renderMode: RenderMode.Client },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
