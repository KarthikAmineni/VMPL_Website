import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <!-- Hero Section -->
    <section class="hero bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1>About XYZ Pvt. Ltd.</h1>
            <p class="lead">Over 20 years of excellence in precision sheet metal fabrication.</p>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/about-hero-placeholder.jpg" alt="XYZ Pvt. Ltd. Facility" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="text-center mb-4">Our Story</h2>
            <p>Established in 2004, XYZ Pvt. Ltd. has grown to become one of the leading sheet metal fabrication companies in India. Our journey began with a vision to provide high-quality, precision fabrication services to industries that demand excellence.</p>
            <p>Today, we operate from a state-of-the-art facility equipped with the latest technology and machinery, serving clients across various sectors including aerospace, defense, railways, and electronics.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section bg-light">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-body">
                <h3>Our Mission</h3>
                <p>Our mission at XYZ Pvt. Ltd. is to deliver high-quality, customized sheet metal fabrication solutions through advanced technology, skilled craftsmanship, and customer-centric service. We strive to be a reliable partner to industries that demand precision, durability, and excellence — with a commitment to continuous improvement, ethical practices, and long-term value creation.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-body">
                <h3>Our Vision</h3>
                <p>To be recognized as the industry leader in precision sheet metal fabrication, known for our innovation, quality, and commitment to customer success. We aim to expand our capabilities and reach while maintaining the highest standards of excellence in everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="section">
      <div class="container">
        <h2 class="text-center mb-5">Our Core Values</h2>
        <div class="row g-4">
          <div class="col-md-3" *ngFor="let value of coreValues">
            <div class="text-center">
              <i [class]="value.icon + ' value-icon'"></i>
              <h3 class="h5 mt-3">{{value.title}}</h3>
              <p class="mb-0">{{value.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Standards -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Quality Standards</h2>
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img src="assets/images/quality-placeholder.jpg" alt="Quality Control" class="img-fluid rounded shadow mb-4 mb-lg-0">
          </div>
          <div class="col-lg-6">
            <h3>ISO 9001:2015 Certified</h3>
            <p>Our commitment to quality is reflected in our ISO 9001:2015 certification. We maintain rigorous quality control processes throughout our manufacturing operations:</p>
            <ul class="list-unstyled">
              <li><i class="fas fa-check-circle text-primary me-2"></i>Comprehensive quality management system</li>
              <li><i class="fas fa-check-circle text-primary me-2"></i>Regular quality audits and inspections</li>
              <li><i class="fas fa-check-circle text-primary me-2"></i>Advanced testing and measurement equipment</li>
              <li><i class="fas fa-check-circle text-primary me-2"></i>Trained quality control personnel</li>
              <li><i class="fas fa-check-circle text-primary me-2"></i>Documentation and traceability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section">
      <div class="container">
        <h2 class="text-center mb-5">Our Leadership Team</h2>
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let member of teamMembers">
            <div class="card team-card h-100">
              <img [src]="member.image" [alt]="member.name" class="card-img-top">
              <div class="card-body text-center">
                <h3 class="h5">{{member.name}}</h3>
                <p class="text-muted mb-2">{{member.position}}</p>
                <p class="mb-0">{{member.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 6rem 0;
      margin-bottom: 2rem;
    }
    .value-icon {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }
    .team-card img {
      height: 250px;
      object-fit: cover;
    }
    .card {
      border: none;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `]
})
export class AboutComponent {
  coreValues = [
    {
      icon: 'fas fa-star',
      title: 'Excellence',
      description: 'Striving for the highest quality in everything we do.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Integrity',
      description: 'Maintaining ethical practices and transparency.'
    },
    {
      icon: 'fas fa-users',
      title: 'Teamwork',
      description: 'Collaborating to achieve common goals.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'Embracing new technologies and solutions.'
    }
  ];

  teamMembers = [
    {
      image: 'assets/images/team/placeholder-1.jpg',
      name: '[Name]',
      position: 'CEO',
      description: 'Over 25 years of experience in manufacturing and operations.'
    },
    {
      image: 'assets/images/team/placeholder-2.jpg',
      name: '[Name]',
      position: 'Technical Director',
      description: 'Expert in precision engineering and quality control.'
    },
    {
      image: 'assets/images/team/placeholder-3.jpg',
      name: '[Name]',
      position: 'Operations Manager',
      description: 'Specializes in process optimization and project management.'
    }
  ];
} 