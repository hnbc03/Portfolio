// src/app/shared/data/projects.data.ts
import { Project } from '../models/project.interface';

export const PROJECTS: Project[] = [
  {
    id: 'yumdaily',
    title: 'YumDaily',
    category: 'UI/UX',
    shortDesc: 'A cross-platform social culinary network for food lovers to share recipes, discover new dishes, and build a vibrant community.',
    year: '2024',
    tags: ['Figma', 'UX Research', 'Prototyping', 'Branding', 'Usability Testing'],
    thumbnail: 'yumdaily/thumb.jpg',
    figmaUrl: 'https://www.figma.com/proto/...', // thay bằng link thật
    role: 'UI/UX Designer',
    timeline: 'Oct 2024 – Nov 2024',
    roleScope: 'Full-cycle UI/UX design: research → wireframing → visual design → prototyping → usability testing (web & mobile).',
    overview: {
      summary: 'YumDaily giải quyết vấn đề phân mảnh nội dung ẩm thực trên các nền tảng xã hội bằng cách tạo ra một không gian chuyên biệt cho việc chia sẻ công thức và tương tác cộng đồng.',
      solution: 'Thiết kế hệ sinh thái trực quan, ấm áp với flow tạo nội dung và khám phá mượt mà.'
    },
    problemStatement: [
      'Nội dung công thức nấu ăn bị chôn vùi trong feed chung của các mạng xã hội.',
      'Thiếu công cụ chuyên biệt để tạo và chia sẻ công thức một cách đẹp mắt.',
      'Khó xây dựng cộng đồng gắn kết lâu dài quanh chủ đề ẩm thực.'
    ],
    designProcess: [
      {
        title: 'User Research & Survey',
        description: 'Thu thập 183 phản hồi qua Google Forms để hiểu pain points và hành vi tương tác xã hội liên quan đến ẩm thực.',
        images: ['yumdaily/research-survey.png', 'yumdaily/research-insights.png']
      },
      {
        title: 'Wireframing & Information Architecture',
        description: 'Khám phá nhiều layout cho feed, recipe creator, profile và messaging.',
        images: ['yumdaily/wireframe-mobile-1.png', 'yumdaily/wireframe-desktop-feed.png']
      },
      {
        title: 'Visual Design & Branding',
        description: 'Xây dựng hệ màu ấm áp, logo, typography phù hợp với lĩnh vực ẩm thực.',
        images: ['yumdaily/brand-styleguide.png', 'yumdaily/logo-iterations.png']
      },
      {
        title: 'High-fidelity & Interactive Prototype',
        description: 'Thiết kế hơn 15 màn hình chính với micro-interactions cho cả web và mobile.',
        images: ['yumdaily/hi-fi-feed-mobile.png', 'yumdaily/hi-fi-recipe-desktop.png']
      }
    ],
    results: [
      'Prototype đạt điểm usability cao trong các vòng testing.',
      'Cải thiện flow chia sẻ nội dung giảm 40% số bước so với concept ban đầu.'
    ],
    metrics: ['183 phản hồi khảo sát', 'Feedback tích cực về độ ấm áp và dễ sử dụng'],
    gallery: [
      { src: 'yumdaily/hero-mobile.png', alt: 'Mobile home', caption: 'Mobile Feed', type: 'mobile' },
      { src: 'yumdaily/hero-desktop.png', alt: 'Desktop exploration', caption: 'Desktop Home', type: 'desktop' },
      { src: 'yumdaily/recipe-creator.png', alt: 'Recipe creation', caption: 'Recipe Creator Flow' },
      { src: 'yumdaily/search-results.png', alt: 'Search & discovery', caption: 'Advanced Search' }
    ],
    tools: []
  },

  // ────────────────────────────────────────────────
  // Weatherr (IoT)
  // ────────────────────────────────────────────────
  {
    id: 'weatherr',
    title: 'Weatherr',
    category: 'IoT',
    shortDesc: 'Hệ thống trạm thời tiết thông minh sử dụng cảm biến, ESP32 và dashboard thời gian thực để theo dõi và dự báo thời tiết cục bộ.',
    year: '2024',
    tags: ['IoT', 'ESP32', 'MQTT', 'Node-RED', 'Dashboard', 'Arduino'],
    thumbnail: 'weatherr/thumb.jpg',
    githubUrl: 'https://github.com/hnbc03/weatherr',
    liveUrl: 'https://weatherr-demo.vercel.app', // nếu có
    role: 'Full-stack IoT Developer',
    timeline: 'Jun 2024 – Aug 2024',
    overview: {
      summary: 'Weatherr là một trạm thời tiết cá nhân kết nối IoT, thu thập dữ liệu từ cảm biến môi trường và hiển thị trên dashboard thời gian thực.',
      solution: 'Kết hợp phần cứng (ESP32 + sensors), giao thức MQTT và giao diện web để theo dõi nhiệt độ, độ ẩm, áp suất, chất lượng không khí.'
    },
    technicalSections: [
      {
        title: 'System Architecture',
        content: 'Kiến trúc hệ thống bao gồm: cảm biến → ESP32 → MQTT Broker → Node-RED → InfluxDB → Grafana / custom Angular dashboard.',
        images: ['weatherr/architecture-diagram.png', 'weatherr/data-flow.png']
      },
      {
        title: 'Hardware Setup',
        content: 'Sử dụng ESP32 kết hợp DHT22 (nhiệt độ, độ ẩm), BMP280 (áp suất), MQ-135 (chất lượng không khí).',
        images: ['weatherr/hardware-prototype.jpg', 'weatherr/sensor-connections.jpg']
      },
      {
        title: 'Data Pipeline & Backend',
        content: 'Dữ liệu được publish qua MQTT, Node-RED xử lý và lưu vào InfluxDB để query thời gian thực.',
        codeSnippets: [
          {
            language: 'cpp',
            code: '// ESP32 - publish data every 30s\nvoid loop() {\n  float temp = dht.readTemperature();\n  float hum = dht.readHumidity();\n  client.publish("weatherr/sensors", String("{\"temp\":" + String(temp) + ",\"hum\":" + String(hum) + "}").c_str());\n  delay(30000);\n}'
          }
        ]
      },
      {
        title: 'Frontend Dashboard',
        content: 'Dashboard Angular hiển thị biểu đồ thời gian thực, cảnh báo và lịch sử dữ liệu.',
        images: ['weatherr/dashboard-overview.png', 'weatherr/chart-temp-hum.png']
      }
    ],
    results: [
      'Hệ thống hoạt động ổn định 24/7 trong 2 tháng thử nghiệm.',
      'Độ chính xác nhiệt độ ±0.5°C, độ ẩm ±2%.',
      'Dashboard cập nhật dữ liệu dưới 3 giây.'
    ],
    gallery: [
      { src: 'weatherr/prototype-full.jpg', alt: 'Hardware prototype', caption: 'Trạm thời tiết hoàn chỉnh', type: 'screenshot' },
      { src: 'weatherr/dashboard-real-time.png', alt: 'Real-time dashboard', caption: 'Dashboard thời gian thực', type: 'desktop' },
      { src: 'weatherr/grafana-panel.jpg', alt: 'Grafana analytics', caption: 'Phân tích lịch sử dữ liệu' }
    ],
    tools: []
  },

  // ────────────────────────────────────────────────
  // InstaWeb (Web)
  // ────────────────────────────────────────────────
  {
    id: 'instaweb',
    title: 'InstaWeb',
    category: 'Web',
    shortDesc: 'Instagram-inspired single-page web application với feed, stories, explore và dark mode, xây dựng bằng Angular và TailwindCSS.',
    year: '2025',
    tags: ['Angular', 'TailwindCSS', 'Firebase', 'Responsive', 'Dark Mode'],
    thumbnail: 'instaweb/thumb.jpg',
    githubUrl: 'https://github.com/hnbc03/instaweb',
    liveUrl: 'https://instaweb-demo.vercel.app',
    role: 'Frontend Developer',
    timeline: 'Jan 2025 – Mar 2025',
    overview: {
      summary: 'InstaWeb là một phiên bản web đơn giản hóa của Instagram, tập trung vào trải nghiệm mượt mà, responsive và dark mode hoàn chỉnh.',
      solution: 'Xây dựng component-based architecture với Angular standalone components, state management đơn giản và tích hợp Firebase cho auth & data.'
    },
    technicalSections: [
      {
        title: 'Component Structure',
        content: 'Sử dụng standalone components, lazy-loading modules cho feed, profile, stories.',
        images: ['instaweb/component-tree.png']
      },
      {
        title: 'State Management & Data Flow',
        content: 'Kết hợp Signals + RxJS cho reactive state, Firebase Realtime Database cho feed và stories.',
        codeSnippets: [
          {
            language: 'typescript',
            code: 'feed = signal<Post[]>([]);\nthis.db.list<Post>("posts").snapshotChanges()\n  .subscribe(changes => {\n    this.feed.set(changes.map(c => ({ key: c.key, ...c.payload.val() })));\n  });'
          }
        ]
      },
      {
        title: 'API Integration & Authentication',
        content: 'Firebase Authentication (Google, Email), Firestore cho user profile, Storage cho ảnh.',
        images: ['instaweb/login-screen.png', 'instaweb/post-upload.png']
      },
      {
        title: 'Responsive & Dark Mode',
        content: 'Tailwind dark mode class strategy, mobile-first design với stories swipe và infinite scroll.',
        images: ['instaweb/mobile-feed.png', 'instaweb/dark-mode-explore.png']
      }
    ],
    results: [
      'Hoàn thiện responsive trên mọi thiết bị.',
      'Tích hợp auth và realtime feed thành công.',
      'Hỗ trợ dark mode mượt mà không reload.'
    ],
    gallery: [
      { src: 'instaweb/feed-desktop-light.png', alt: 'Desktop light mode', caption: 'Feed chính (Light)', type: 'desktop' },
      { src: 'instaweb/feed-mobile-dark.png', alt: 'Mobile dark mode', caption: 'Mobile Feed (Dark)', type: 'mobile' },
      { src: 'instaweb/stories-swipe.png', alt: 'Stories interaction', caption: 'Stories Swipe' },
      { src: 'instaweb/profile-page.png', alt: 'User profile', caption: 'Trang cá nhân' }
    ],
    tools: []
  }
];