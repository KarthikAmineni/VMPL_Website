import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <header class="fixed-top">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" routerLink="/">
            <img src="assets/images/logo-placeholder.png" alt="XYZ Pvt. Ltd. Logo" height="40">
          </a>
          <button class="navbar-toggler" type="button" (click)="isMenuCollapsed = !isMenuCollapsed">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" [ngbCollapse]="isMenuCollapsed">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/about" routerLinkActive="active">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/services" routerLinkActive="active">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/industries" routerLinkActive="active">Industries</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/projects" routerLinkActive="active">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/clients" routerLinkActive="active">Clients</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/certifications" routerLinkActive="active">Certifications</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/contact" routerLinkActive="active">Contact</a>
              </li>
            </ul>
            <a class="btn btn-outline-light ms-lg-3" routerLink="/request-quote">Request Quote</a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .navbar {
      padding: 1rem 0;
      background-color: var(--primary-color) !important;
    }
    .navbar-brand {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
    }
    .nav-link {
      font-weight: 500;
      padding: 0.5rem 1rem !important;
    }
    .nav-link.active {
      color: #fff !important;
      font-weight: 600;
    }
    @media (max-width: 991px) {
      .navbar-collapse {
        padding: 1rem 0;
      }
      .btn {
        margin-top: 1rem;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuCollapsed = true;

  constructor(private router: Router) {}
} 