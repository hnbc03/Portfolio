import { Component, inject } from '@angular/core';
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

  isScrolled = false;
  menuOpen = false;

  navItems = [
    { label: 'Home', fragment: 'home', icon: 'home' },
    { label: 'About', fragment: 'about', icon: 'person' },
    { label: 'Projects', fragment: 'projects', icon: 'work' },
    { label: 'Skills', fragment: 'skills', icon: 'build' },
    { label: 'Contact', fragment: 'contact', icon: 'mail' },
  ];

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 20;
    });
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
        behavior: 'smooth'
      });
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}