import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  scroll: boolean = false;
  @HostListener('window:scroll') onclick(): void {
    if (scrollY > 0) {
      this.scroll = false;
    } else {
      this.scroll = true;
    }
  }
}
