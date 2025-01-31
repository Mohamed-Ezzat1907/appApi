import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  scroll: boolean = false;

  @HostListener('window:scroll') onScroll() {
    if (scrollY > 0) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }
}
