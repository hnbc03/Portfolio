import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, About, Projects, Skills, Contact ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const reveals = document.querySelectorAll('.reveal');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.2 },
      );

      reveals.forEach((el) => observer.observe(el));
    }
  }
}
