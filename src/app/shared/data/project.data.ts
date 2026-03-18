import { Project } from '../models/project.interface';

export const PROJECTS: Project[] = [
  {
    id: 'ui-ux-design-project',
    title: 'YumDaily',
    category: 'UI/UX',
    shortDesc: 'Case study đầy đủ: từ user research đến high-fidelity prototype, tập trung trải nghiệm ấm áp & dễ tiếp cận.',
    longDesc: 'Dự án tâm đắc nhất: redesign app ngân hàng cho người dùng lớn tuổi... (viết chi tiết process ở đây)',
    tags: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    thumbnail: '/assets/images/projects/yumdaily.png',
    year: '2025',
    tools: ['Figma', 'FigJam', 'Miro'],
    figmaUrl: 'https://www.figma.com/proto/...',
    featured: true,
  },
  {
    id: 'web-ecommerce-platform',
    title: 'Weatherr',
    category: 'Web',
    shortDesc: 'Xây dựng frontend responsive với Angular & Tailwind, tích hợp API giả lập.',
    tags: ['Angular', 'TailwindCSS', 'Responsive Design', 'API Integration'],
    thumbnail: '/assets/images/projects/weatherr.png',
    year: '2024',
    tools: ['Angular', 'Tailwind', 'TypeScript'],
    liveUrl: 'https://your-vercel-link.vercel.app',
    githubUrl: 'https://github.com/sugaringbananaa/ecommerce',
  },
  {
    id: 'iot-smart-home-dashboard',
    title: 'InstaWeb',
    category: 'IoT',
    shortDesc: 'Giao diện dashboard theo dõi thiết bị IoT thời gian thực, thiết kế clean & intuitive.',
    tags: ['IoT', 'Dashboard UI', 'Real-time Data', 'Figma + Code'],
    thumbnail: '/assets/images/projects/instaweb.jpg',
    year: '2024',
    tools: ['Figma', 'Angular', 'Chart.js'],
  },
  // Thêm project internship nếu muốn
];