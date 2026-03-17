import { Component, inject, HostListener, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  isScrolled = false;
  menuOpen = false;
  isDarkMode = false;

  navItems = [
    { label: 'Home', fragment: 'home', icon: 'home' },
    { label: 'About', fragment: 'about', icon: 'person' },
    { label: 'Projects', fragment: 'projects', icon: 'work' },
    { label: 'Skills', fragment: 'skills', icon: 'build' },
    { label: 'Contact', fragment: 'contact', icon: 'mail' },
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // 1. Ưu tiên localStorage
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme) {
        this.isDarkMode = savedTheme === 'dark';
      } else {
        // 2. Nếu không có → dùng system preference
        this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      // Áp dụng class
      document.documentElement.classList.toggle('dark', this.isDarkMode);
    }
  }

  toggleTheme() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);

    // Lưu vào localStorage
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  scrollTo(fragment: string) {
    if (this.router.url !== '/') {
      this.router.navigate(['/'], { fragment }).then(() => {
        this.scrollElementIntoView(fragment);
      });
    } else {
      this.scrollElementIntoView(fragment);
    }
    this.menuOpen = false;
  }

  private scrollElementIntoView(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // chiều cao navbar approx
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
