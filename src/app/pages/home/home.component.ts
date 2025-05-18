import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
<section class="hero-section d-flex align-items-center justify-content-center min-vh-100">
  <div class="background-overlay"></div>
  <div class="container position-relative">
    <div class="row align-items-center p-5">
      
      <!-- Left side: Heading and Text -->
      <div class="col-lg-6">
        <h1 class="display-4 fw-bold">Fabricating Quality.<br>Delivering Excellence.</h1>
        <p class="lead mt-3">
          ISO-certified precision sheet metal fabrication with over 20 years of expertise in delivering custom solutions.
        </p>
      </div>

      <!-- Right side: Buttons and Down Arrow -->
      <div class="col-lg-6 d-flex flex-column align-items-lg-end align-items-start mt-4 mt-lg-0">
        <div class="mb-4 d-flex flex-wrap gap-3">
          <a routerLink="/request-quote" class="btn btn-primary btn-lg px-4">Request a Quote</a>
          <a routerLink="/services" class="btn btn-outline-primary btn-lg px-4">Our Services</a>
        </div>

        <!-- Scroll Down Arrow -->
        <a href="#services-overview" class="scroll-down-icon d-inline-block mt-3">
          <i class="bi bi-chevron-double-down" style="font-size: 2rem; color: #007bff;"></i>
        </a>
      </div>

    </div>
  </div>
</section>



    <!-- Services Overview -->
    <section class="section bg-light" id="services-overview">
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
        <h2 class="text-center mb-5">Why Choose VM Precision Punch Pvt. Ltd.?</h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3" *ngFor="let feature of features">
            <div class="text-center">
              <i [class]="feature.icon + ' feature-icon'+ 'aria-hidden=true'"></i>
              <h3 class="h5 mt-3">{{feature.title}}</h3>
              <p class="mb-0">{{feature.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


 <!-- Industries Served -->
 <section class="section">
      <div class="container">
        <h2 class="text-center mb-5">Industries We Serve</h2>
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let industry of industries">
            <div class="industry-card text-center">
              <i [class]="industry.icon + ' industry-icon'"></i>
              <h3 class="h5 mt-3">{{industry.name}}</h3>
              <p class="mb-0">{{industry.description}}</p>
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
    .scroll-down-icon {
  animation: bounce 2s infinite;
  text-decoration: none;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(6px); }
  60% { transform: translateY(3px); }
}
.industry-icon {
      font-size: 2.5rem;
      color: var(--primary-color);
    }
    .industry-card {
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    .industry-card:hover {
      transform: translateY(-5px);
    }

.hero-section {
  position: relative;
  background: white; /* Fallback background color */
  background: url('/assets/images/home-background-image.jpg') no-repeat center center/cover, white;
  min-height: 100vh;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7); /* White overlay with 70% transparency */
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2; /* Ensures content is above the overlay */
}

  `]
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component is initialized
  }
  services = [
    {
      icon: 'fas fa-bolt  me-2',
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
      icon: 'fas fa-plane',
      name: 'Aerospace & Defense',
      description: 'Precision components for aerospace and defense applications.'
    },
    {
      icon: 'fas fa-train',
      name: 'Railway & Transportation',
      description: 'Custom fabrication for transportation equipment.'
    },
    {
      icon: 'fas fa-microchip',
      name: 'Electronics & Control',
      description: 'Sheet metal solutions for electrical and control panels.'
    }
  ];
}