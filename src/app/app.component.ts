import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    main {
      flex: 1;
      padding-top: 80px; /* Height of fixed header */
      background-color: var(--white);
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'XYZ Pvt. Ltd. - Precision Sheet Metal Fabrication';
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        }); // Scrolls to the top of the page
      }
    });
  }
}