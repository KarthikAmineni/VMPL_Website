import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  template: `
    <!-- Hero Section -->
    <section class="hero bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1>Our Clients</h1>
            <p class="lead">Trusted by industry leaders for precision sheet metal fabrication.</p>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/clients-hero-placeholder.jpg" alt="Our Clients" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Client Logos -->
    <section class="section">
      <div class="container">
        <h2 class="text-center mb-5">Companies That Trust Us</h2>
        <div class="row g-4">
          <div class="col-6 col-md-3" *ngFor="let client of clients">
            <div class="client-logo">
              <img [src]="client.logo" [alt]="client.name" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="text-center mb-5">What Our Clients Say</h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let testimonial of testimonials">
            <div class="card h-100">
              <div class="card-body">
                <div class="testimonial-rating mb-3">
                  <i class="fas fa-star" *ngFor="let star of [1,2,3,4,5]"></i>
                </div>
                <p class="testimonial-text mb-4">{{testimonial.text}}</p>
                <div class="testimonial-author">
                  <img [src]="testimonial.avatar" [alt]="testimonial.name" class="testimonial-avatar">
                  <div>
                    <h5 class="mb-0">{{testimonial.name}}</h5>
                    <p class="text-muted mb-0">{{testimonial.position}}</p>
                    <p class="text-muted mb-0">{{testimonial.company}}</p>
                  </div>
                </div>
              </div>
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
        <h2 class="mb-4">Ready to Join Our Client List?</h2>
        <p class="lead mb-4">Let's discuss how we can help with your sheet metal fabrication needs.</p>
        <a routerLink="/contact" class="btn btn-light btn-lg">Contact Us Today</a>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 6rem 0;
      margin-bottom: 2rem;
    }
    .client-logo {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    .client-logo:hover {
      transform: translateY(-5px);
    }
    .client-logo img {
      max-height: 80%;
      max-width: 80%;
      object-fit: contain;
    }
    .testimonial-rating {
      color: #ffc107;
    }
    .testimonial-text {
      font-style: italic;
    }
    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .testimonial-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
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
  `]
})
export class ClientsComponent {
  clients = [
    {
      name: 'Aerospace Corp',
      logo: 'assets/images/clients/client-1.png'
    },
    {
      name: 'Railway Systems',
      logo: 'assets/images/clients/client-2.png'
    },
    {
      name: 'Electronics Ltd',
      logo: 'assets/images/clients/client-3.png'
    },
    {
      name: 'Medical Devices Co',
      logo: 'assets/images/clients/client-4.png'
    }
  ];

  testimonials = [
    {
      text: "XYZ Pvt. Ltd. has consistently delivered high-quality components that meet our strict aerospace standards. Their attention to detail and commitment to quality is exceptional.",
      name: "John Smith",
      position: "Procurement Manager",
      company: "Aerospace Corp",
      avatar: "assets/images/testimonials/avatar-1.jpg"
    },
    {
      text: "We have been working with XYZ for our railway component needs for over 5 years. Their reliability and quality have been crucial to our success.",
      name: "Sarah Johnson",
      position: "Operations Director",
      company: "Railway Systems",
      avatar: "assets/images/testimonials/avatar-2.jpg"
    },
    {
      text: "The team at XYZ understands our requirements perfectly and always delivers on time. Their technical expertise is invaluable to our projects.",
      name: "Michael Chen",
      position: "Technical Lead",
      company: "Electronics Ltd",
      avatar: "assets/images/testimonials/avatar-3.jpg"
    }
  ];

  industries = [
    {
      icon: 'fas fa-plane',
      name: 'Aerospace & Defense',
      description: 'Precision components for aircraft and defense systems.'
    },
    {
      icon: 'fas fa-train',
      name: 'Railway & Transportation',
      description: 'Custom solutions for transportation equipment.'
    },
    {
      icon: 'fas fa-microchip',
      name: 'Electronics & Control',
      description: 'Enclosures and components for electronic systems.'
    }
  ];
} 