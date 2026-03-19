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
    { name: 'LinkedIn', icon: '/assets/images/logos/linkedin.png', url: 'https://www.linkedin.com/in/châu-huỳnh-129514277/' },
    { name: 'GitHub', icon: '/assets/images/logos/github.png', url: 'https://github.com/hnbc03' },
    { name: 'Facebook', icon: '/assets/images/logos/facebook.png', url: 'https://www.facebook.com/chau2605/' },
    // thêm X hoặc Instagram nếu có
  ];

  scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}