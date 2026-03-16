import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/layout/navbar/navbar';
import { Footer } from './components/layout/footer/footer';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myportfolio');
}