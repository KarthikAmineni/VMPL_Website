import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-industries',
  template: `
    <!-- Hero Section -->
    <section class="hero bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1>Industries We Serve</h1>
            <p class="lead">Delivering precision sheet metal solutions across diverse sectors.</p>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/industries-hero-placeholder.jpg" alt="Industries We Serve" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Industries Grid -->
    <section class="section">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let industry of industries">
            <div class="card h-100">
              <img [src]="industry.image" [alt]="industry.name" class="card-img-top industry-img">
              <div class="card-body">
                <h3 class="h4">{{industry.name}}</h3>
                <p>{{industry.description}}</p>
                <ul class="list-unstyled industry-features">
                  <li *ngFor="let application of industry.applications">
                    <i class="fas fa-check-circle text-primary me-2"></i>{{application}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Expertise -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Our Industry Expertise</h2>
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let expertise of expertiseAreas">
            <div class="text-center">
              <i [class]="expertise.icon + ' expertise-icon'"></i>
              <h3 class="h5 mt-3">{{expertise.title}}</h3>
              <p class="mb-0">{{expertise.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2>Industry Certifications</h2>
            <p>Our commitment to excellence is backed by industry-recognized certifications and compliance with international standards.</p>
            <ul class="list-unstyled certification-list">
              <li *ngFor="let cert of certifications">
                <i class="fas fa-certificate text-primary me-2"></i>
                <strong>{{cert.name}}:</strong> {{cert.description}}
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/certifications-placeholder.jpg" alt="Industry Certifications" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-primary text-white">
      <div class="container text-center">
        <h2 class="mb-4">Looking for Industry-Specific Solutions?</h2>
        <p class="lead mb-4">Let's discuss how we can meet your specific requirements.</p>
        <button class="btn btn-light btn-lg" (click)="navigateToQuote()">Request a Quote</button>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 6rem 0;
      margin-bottom: 2rem;
    }
    .industry-img {
      height: 200px;
      object-fit: cover;
    }
    .industry-features li {
      margin-bottom: 0.5rem;
    }
    .expertise-icon {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }
    .certification-list li {
      margin-bottom: 1rem;
    }
  `]
})
export class IndustriesComponent {
  industries = [
    {
      name: 'Aerospace & Defense',
      image: 'assets/images/industries/aerospace.jpg',
      description: 'High-precision components for aerospace and defense applications.',
      applications: [
        'Aircraft components',
        'Defense equipment parts',
        'Satellite components',
        'Ground support equipment'
      ]
    },
    {
      name: 'Railway & Transportation',
      image: 'assets/images/industries/railway.jpg',
      description: 'Custom fabrication for transportation equipment manufacturers.',
      applications: [
        'Train interior components',
        'Exterior panels',
        'Electrical enclosures',
        'Structural components'
      ]
    },
    {
      name: 'Electrical & Electronics',
      image: 'assets/images/industries/electronics.jpg',
      description: 'Precision components for electrical and electronic equipment.',
      applications: [
        'Control panel enclosures',
        'Server racks',
        'Junction boxes',
        'Equipment housings'
      ]
    },
    {
      name: 'Automation & Robotics',
      image: 'assets/images/industries/automation.jpg',
      description: 'Custom solutions for automation and robotics systems.',
      applications: [
        'Robot enclosures',
        'Control system housings',
        'Machine guards',
        'Automated system components'
      ]
    },
    {
      name: 'Construction Equipment',
      image: 'assets/images/industries/construction.jpg',
      description: 'Durable components for construction machinery.',
      applications: [
        'Equipment panels',
        'Structural components',
        'Protection covers',
        'Custom brackets'
      ]
    },
    {
      name: 'Medical Equipment',
      image: 'assets/images/industries/medical.jpg',
      description: 'Precision parts for medical equipment manufacturers.',
      applications: [
        'Equipment housings',
        'Medical cart components',
        'Clean room equipment',
        'Storage solutions'
      ]
    }
  ];

  expertiseAreas = [
    {
      icon: 'fas fa-cog',
      title: 'Technical Expertise',
      description: 'Deep understanding of industry-specific requirements and standards.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Quality Compliance',
      description: 'Adherence to industry quality standards and certifications.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Industry Experience',
      description: 'Over 20 years of experience serving diverse industries.'
    }
  ];

  certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System certification'
    },
    {
      name: 'AS9100D',
      description: 'Aerospace Quality Management System'
    },
    {
      name: 'IRIS',
      description: 'International Railway Industry Standard'
    }
  ];

  constructor(private router: Router) {}

  navigateToQuote() {
    this.router.navigate(['/request-quote']);
  }
} 