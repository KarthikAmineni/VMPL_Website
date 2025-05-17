import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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
export class AppComponent {
  title = 'XYZ Pvt. Ltd. - Precision Sheet Metal Fabrication';
} 