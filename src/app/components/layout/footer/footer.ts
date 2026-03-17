import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/sugaringbananaa' },
    { name: 'GitHub', icon: 'github', url: 'https://github.com/sugaringbananaa' },
    { name: 'Behance', icon: 'brush', url: 'https://behance.net/sugaringbananaa' },
    // thêm X hoặc Instagram nếu có
  ];

  scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}