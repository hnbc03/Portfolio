import { Project } from '../models/project.interface';

export const PROJECTS: Project[] = [
  {
    id: 'yumdaily',
    title: 'YumDaily',
    category: 'UI/UX',
    shortDesc: 'A social network for food lovers to connect and share recipes.',
    longDesc: 'Dự án tâm đắc nhất: redesign app ngân hàng cho người dùng lớn tuổi... (viết chi tiết process ở đây)',
    tags: ['Figma', 'UX Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    thumbnail: '/assets/images/projects/yumdaily.png',
    year: '2024',
    tools: ['Figma', 'Google Sheets'],
    figmaUrl: 'https://www.figma.com/proto/...',
    featured: true,
  },
  {
    id: 'weatherr',
    title: 'Weatherr',
    category: 'IoT',
    shortDesc: 'A weather forecast that visualizes real-time data from Arduino sensors and ML-powered predictions.',
    tags: ['ReactJS', 'Firebase', 'Python', 'Machine Learning'],
    thumbnail: '/assets/images/projects/weatherr.png',
    year: '2024',
    tools: ['Angular', 'Tailwind', 'TypeScript'],
    liveUrl: 'https://your-vercel-link.vercel.app',
    githubUrl: 'https://github.com/sugaringbananaa/ecommerce',
  },
  {
    id: 'instaweb',
    title: 'InstaWeb',
    category: 'Web',
    shortDesc: 'An Instagram-like web app for sharing photos, built with React and Material UI.',
    tags: ['ReactJS', 'Material UI', 'NestJS', 'Figma'],
    thumbnail: '/assets/images/projects/instaweb.jpg',
    year: '2024',
    tools: ['Figma', 'Angular', 'Chart.js'],
  },
  // Thêm project internship nếu muốn
];