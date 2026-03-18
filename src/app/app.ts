import { Component, signal } from '@angular/core';
import { Navbar } from './components/layout/navbar/navbar';
import { Footer } from './components/layout/footer/footer';
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Navbar, Footer, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myportfolio');
}