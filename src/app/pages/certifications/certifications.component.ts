import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  template: `
    <!-- Hero Section -->
    <section class="hero bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1>Our Certifications</h1>
            <p class="lead">Committed to quality and industry standards.</p>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/certifications-hero-placeholder.jpg" alt="Our Certifications" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Grid -->
    <section class="section">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let cert of certifications">
            <div class="card certification-card h-100">
              <div class="card-body text-center">
                <i class="fas fa-certificate certification-icon mb-3"></i>
                <h3 class="h4">{{cert.name}}</h3>
                <p class="text-muted mb-3">{{cert.description}}</p>
                <ul class="list-unstyled certification-details">
                  <li *ngFor="let detail of cert.details">
                    <i class="fas fa-check-circle text-primary me-2"></i>
                    {{detail}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Standards -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Our Quality Standards</h2>
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let standard of qualityStandards">
            <div class="quality-standard text-center">
              <i [class]="standard.icon + ' standard-icon'"></i>
              <h3 class="h5 mt-3">{{standard.title}}</h3>
              <p class="mb-0">{{standard.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance Section -->
    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2>Industry Compliance</h2>
            <p>Our commitment to quality extends beyond certifications. We maintain strict compliance with industry standards and regulations:</p>
            <ul class="list-unstyled compliance-list">
              <li *ngFor="let item of complianceItems">
                <i class="fas fa-shield-alt text-primary me-2"></i>
                <strong>{{item.title}}:</strong> {{item.description}}
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/compliance-placeholder.jpg" alt="Industry Compliance" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-primary text-white">
      <div class="container text-center">
        <h2 class="mb-4">Need Quality Assured Manufacturing?</h2>
        <p class="lead mb-4">Let's discuss how our certified processes can benefit your project.</p>
        <a routerLink="/contact" class="btn btn-light btn-lg">Contact Us Today</a>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 6rem 0;
      margin-bottom: 2rem;
    }
    .certification-icon {
      font-size: 3rem;
      color: var(--primary-color);
    }
    .certification-card {
      border: none;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    .certification-card:hover {
      transform: translateY(-5px);
    }
    .certification-details li {
      margin-bottom: 0.5rem;
      text-align: left;
    }
    .standard-icon {
      font-size: 2.5rem;
      color: var(--primary-color);
    }
    .quality-standard {
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      height: 100%;
    }
    .compliance-list li {
      margin-bottom: 1rem;
    }
  `]
})
export class CertificationsComponent {
  certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
      details: [
        'Process approach to quality management',
        'Risk-based thinking',
        'Customer satisfaction focus',
        'Continuous improvement'
      ]
    },
    {
      name: 'AS9100D',
      description: 'Aerospace Quality Management',
      details: [
        'Aviation, Space and Defense',
        'Product safety management',
        'Risk management',
        'Configuration management'
      ]
    },
    {
      name: 'IRIS',
      description: 'International Railway Industry Standard',
      details: [
        'Railway industry specific',
        'Process control',
        'Project management',
        'Supply chain management'
      ]
    }
  ];

  qualityStandards = [
    {
      icon: 'fas fa-search',
      title: 'Quality Control',
      description: 'Rigorous inspection and testing at every stage of production.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Process Control',
      description: 'Statistical process control and monitoring systems.'
    },
    {
      icon: 'fas fa-sync',
      title: 'Continuous Improvement',
      description: 'Regular audits and improvement initiatives.'
    }
  ];

  complianceItems = [
    {
      title: 'Material Traceability',
      description: 'Complete documentation and tracking of all materials used.'
    },
    {
      title: 'Process Documentation',
      description: 'Detailed documentation of all manufacturing processes.'
    },
    {
      title: 'Quality Records',
      description: 'Maintenance of comprehensive quality records and test results.'
    },
    {
      title: 'Staff Training',
      description: 'Regular training and certification of all personnel.'
    }
  ];
} 