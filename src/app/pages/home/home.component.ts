import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1>Fabricating Quality.<br>Delivering Excellence.</h1>
            <p class="lead">ISO-certified precision sheet metal fabrication with over 20 years of expertise in delivering custom solutions.</p>
            <div class="mt-4">
              <a routerLink="/request-quote" class="btn btn-primary me-3">Request a Quote</a>
              <a routerLink="/services" class="btn btn-secondary">Our Services</a>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/hero-image-placeholder.jpg" alt="Sheet Metal Fabrication" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Our Comprehensive Services</h2>
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let service of services">
            <div class="card h-100">
              <div class="card-body">
                <i [class]="service.icon + ' service-icon'"></i>
                <h3 class="h5 mt-3">{{service.title}}</h3>
                <p class="mb-0">{{service.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section">
      <div class="container">
        <h2 class="text-center mb-5">Why Choose XYZ Pvt. Ltd.?</h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3" *ngFor="let feature of features">
            <div class="text-center">
              <i [class]="feature.icon + ' feature-icon'"></i>
              <h3 class="h5 mt-3">{{feature.title}}</h3>
              <p class="mb-0">{{feature.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries We Serve -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Industries We Serve</h2>
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let industry of industries">
            <div class="card h-100">
              <img [src]="industry.image" [alt]="industry.name" class="card-img-top">
              <div class="card-body">
                <h3 class="h5">{{industry.name}}</h3>
                <p class="mb-0">{{industry.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-primary text-white">
      <div class="container text-center">
        <h2 class="mb-4">Ready to Start Your Project?</h2>
        <p class="lead mb-4">Contact us today for a free consultation and quote.</p>
        <a routerLink="/request-quote" class="btn btn-light btn-lg">Request a Quote</a>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 6rem 0;
      background: linear-gradient(rgba(11, 36, 71, 0.05), rgba(11, 36, 71, 0.05));
    }
    .service-icon, .feature-icon {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }
    .card {
      border: none;
      transition: transform 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .bg-primary {
      background-color: var(--primary-color) !important;
    }
    .lead {
      font-size: 1.25rem;
      font-weight: 300;
    }
  `]
})
export class HomeComponent {
  services = [
    {
      icon: 'fas fa-laser',
      title: 'Laser Cutting',
      description: 'Precision laser cutting services for mild steel, stainless steel, and aluminum sheets.'
    },
    {
      icon: 'fas fa-cog',
      title: 'CNC Bending',
      description: 'Computer-controlled bending operations for precise metal forming.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Welding Services',
      description: 'High-quality MIG, TIG, and spot welding for various materials.'
    }
  ];

  features = [
    {
      icon: 'fas fa-check-circle',
      title: 'ISO Certified',
      description: 'Quality management system certified to ISO 9001:2015 standards.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Quick Turnaround',
      description: 'Fast delivery without compromising on quality.'
    },
    {
      icon: 'fas fa-industry',
      title: 'Modern Facility',
      description: 'State-of-the-art equipment and technology.'
    },
    {
      icon: 'fas fa-users',
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience.'
    }
  ];

  industries = [
    {
      image: 'assets/images/aerospace-placeholder.jpg',
      name: 'Aerospace & Defense',
      description: 'Precision components for aerospace and defense applications.'
    },
    {
      image: 'assets/images/railway-placeholder.jpg',
      name: 'Railway & Transportation',
      description: 'Custom fabrication for transportation equipment.'
    },
    {
      image: 'assets/images/electronics-placeholder.jpg',
      name: 'Electronics & Control',
      description: 'Sheet metal solutions for electrical and control panels.'
    }
  ];
} 