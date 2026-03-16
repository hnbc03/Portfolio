import { Component, HostListener, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive ],
  templateUrl: './navbar.html',
})
export class Navbar {
  scrolled = signal(false);
  open     = signal(false);

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 24); }
}