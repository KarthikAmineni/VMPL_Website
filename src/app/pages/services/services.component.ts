import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  template: `
    <!-- Hero Section -->
    <section class="hero bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1>Our Services</h1>
            <p class="lead">Comprehensive sheet metal fabrication solutions tailored to your needs.</p>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/services-hero-placeholder.jpg" alt="Sheet Metal Fabrication Services" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Services List -->
    <section class="section">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let service of services">
            <div class="card h-100">
              <img [src]="service.image" [alt]="service.title" class="card-img-top service-img">
              <div class="card-body">
                <h3 class="h4">{{service.title}}</h3>
                <p>{{service.description}}</p>
                <ul class="list-unstyled service-features">
                  <li *ngFor="let feature of service.features">
                    <i class="fas fa-check-circle text-primary me-2"></i>{{feature}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Our Capabilities</h2>
        <div class="row g-4">
          <div class="col-md-6" *ngFor="let capability of capabilities">
            <div class="d-flex align-items-start">
              <i [class]="capability.icon + ' capability-icon me-3'"></i>
              <div>
                <h3 class="h5">{{capability.title}}</h3>
                <p class="mb-0">{{capability.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Assurance -->
    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2>Quality Assurance</h2>
            <p>At XYZ Pvt. Ltd., quality is not just a process – it's our commitment. Our comprehensive quality assurance program ensures that every product meets the highest standards of precision and reliability.</p>
            <ul class="list-unstyled quality-list">
              <li *ngFor="let point of qualityPoints">
                <i class="fas fa-shield-alt text-primary me-2"></i>
                {{point}}
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/quality-assurance-placeholder.jpg" alt="Quality Assurance" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-primary text-white">
      <div class="container text-center">
        <h2 class="mb-4">Ready to Start Your Project?</h2>
        <p class="lead mb-4">Contact us today to discuss your sheet metal fabrication needs.</p>
        <button class="btn btn-light btn-lg" (click)="navigateToQuote()">Request a Quote</button>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 6rem 0;
      margin-bottom: 2rem;
    }
    .service-img {
      height: 200px;
      object-fit: cover;
    }
    .service-features li {
      margin-bottom: 0.5rem;
    }
    .capability-icon {
      font-size: 2rem;
      color: var(--primary-color);
    }
    .quality-list li {
      margin-bottom: 1rem;
    }
    .bg-primary {
      background-color: var(--primary-color) !important;
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      title: 'Laser Cutting',
      image: 'assets/images/services/laser-cutting.jpg',
      description: 'Precision laser cutting services for various materials with tight tolerances.',
      features: [
        'High-precision cutting',
        'Multiple material capabilities',
        'Complex geometries',
        'Quick turnaround'
      ]
    },
    {
      title: 'CNC Bending',
      image: 'assets/images/services/cnc-bending.jpg',
      description: 'Computer-controlled bending operations for precise metal forming.',
      features: [
        'Accurate bend angles',
        'Consistent results',
        'Various material thicknesses',
        'Complex bend sequences'
      ]
    },
    {
      title: 'Welding Services',
      image: 'assets/images/services/welding.jpg',
      description: 'Professional welding services including MIG, TIG, and spot welding.',
      features: [
        'Multiple welding processes',
        'Certified welders',
        'Quality inspections',
        'Various materials'
      ]
    },
    {
      title: 'Punching & Notching',
      image: 'assets/images/services/punching.jpg',
      description: 'Precision punching and notching services for sheet metal components.',
      features: [
        'High-speed production',
        'Multiple tool stations',
        'Complex patterns',
        'Cost-effective'
      ]
    },
    {
      title: 'Surface Finishing',
      image: 'assets/images/services/finishing.jpg',
      description: 'Comprehensive surface finishing solutions for metal components.',
      features: [
        'Powder coating',
        'Painting',
        'Plating options',
        'Custom finishes'
      ]
    },
    {
      title: 'Assembly Services',
      image: 'assets/images/services/assembly.jpg',
      description: 'Complete assembly services for fabricated components.',
      features: [
        'Mechanical assembly',
        'Quality testing',
        'Custom packaging',
        'On-time delivery'
      ]
    }
  ];

  capabilities = [
    {
      icon: 'fas fa-ruler',
      title: 'Material Thickness',
      description: 'Capability to work with materials from 0.5mm to 12mm thickness.'
    },
    {
      icon: 'fas fa-expand',
      title: 'Sheet Sizes',
      description: 'Can handle sheet sizes up to 3000mm x 1500mm.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Tolerances',
      description: 'Maintain tight tolerances up to ±0.1mm.'
    },
    {
      icon: 'fas fa-industry',
      title: 'Production Capacity',
      description: 'Large-scale production capability with quick turnaround.'
    }
  ];

  qualityPoints = [
    'In-process quality checks at every stage',
    'Advanced measurement and testing equipment',
    'Documented quality procedures',
    'Material traceability',
    'First article inspection',
    'Final quality certification'
  ];

  constructor(private router: Router) {}

  navigateToQuote() {
    this.router.navigate(['/request-quote']);
  }
} 