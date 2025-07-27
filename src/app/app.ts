import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { About } from './about/about';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { Disc } from './disc/disc';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Home,
    About,
    Portfolio,
    Contact,
    Disc,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Assig1');
}
