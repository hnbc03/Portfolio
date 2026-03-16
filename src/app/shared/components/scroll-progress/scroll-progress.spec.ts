import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `
    <div
      class="fixed top-0 left-0 h-[2px] z-[200]
             bg-gradient-to-r from-accent to-amber-400
             transition-[width] duration-100"
      [style.width.%]="progress()"
      role="progressbar"
      [attr.aria-valuenow]="progress()"
      aria-valuemin="0"
      aria-valuemax="100">
    </div>
  `
})
export class ScrollProgress {
  progress = signal(0);

  @HostListener('window:scroll')
  update() {
    const { scrollTop, scrollHeight, clientHeight } =
      document.documentElement;
    const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
    this.progress.set(Math.round(pct));
  }
}