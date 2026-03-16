import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { animate, stagger, inView } from '@motionone/dom';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { ProjectModel } from '../../core/models/project';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProjectCard],
  templateUrl: './home.html',
})
export class Home implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  stats = [
    { number: '183', label: 'survey respondents' },
    { number: '60+', label: 'screens designed' },
    { number: '2', label: 'platforms' },
    { number: '4mo', label: 'frontend internship' },
  ];

  projects: ProjectModel[] = [];

  ngAfterViewInit() {
    // Chỉ chạy animation khi ở trình duyệt (client-side)
    if (isPlatformBrowser(this.platformId)) {
      // Dùng setTimeout để đảm bảo DOM đã được render hoàn toàn
      setTimeout(() => {
        this.initAnimations();
      });
    }
  }

  private initAnimations() {
    // Staggered hero entrance (Motion One)
    animate(
      document.querySelectorAll('.reveal'),
      { opacity: [0, 1], y: [28, 0] },
      {
        duration: 0.65,
        easing: 'ease-out',
        delay: stagger(0.08)
      }
    );

    // Scroll-reveal for below-fold sections
    inView('.scroll-reveal', ({ target }: { target: Element }) => {
      animate(target,
        { opacity: [0, 1], y: [32, 0] },
        { duration: 0.6, easing: 'ease-out' }
      );
    }, { amount: 0.15 });
  }
}
