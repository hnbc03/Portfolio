export interface Project {
  id: string;               // slug, ví dụ: 'ui-ux-app-redesign'
  title: string;
  category: 'UI/UX' | 'Web' | 'IoT';
  shortDesc: string;
  longDesc?: string;        // dùng ở trang detail
  tags: string[];
  thumbnail: string;        // path ảnh trong assets
  year: string;
  tools: string[];
  liveUrl?: string;
  figmaUrl?: string;
  githubUrl?: string;
  featured?: boolean;       // nếu muốn highlight project tâm đắc
}