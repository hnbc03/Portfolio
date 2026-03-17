import { Component, signal } from '@angular/core';
import { Navbar } from './components/layout/navbar/navbar';
import { Footer } from './components/layout/footer/footer';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Projects, Skills, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myportfolio');
}