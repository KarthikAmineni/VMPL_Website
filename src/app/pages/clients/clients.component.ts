import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  template: `
    <!-- Hero Section -->
    <section class="hero hero-section bg-light">
      <div class="background-overlay"></div>
      <div class="container">
        <div class="row align-items-center p-5">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="text-white">Our Clients</h1>
            <p class="lead text-white">Trusted by industry leaders for precision sheet metal fabrication.</p>
          </div>
          <!-- <div class="col-lg-6">
            <img src="assets/images/clients-hero-placeholder.jpg" alt="Our Clients" class="img-fluid rounded shadow">
          </div> -->
        </div>
      </div>
    </section>

    <!-- Client Logos -->
    <section class="section">
      <div class="container">
        <h2 class="text-center mb-5">Companies That Trust Us</h2>
        <div class="row g-4">
          <div class="col-6 col-md-3" *ngFor="let client of clients">
            <div
              class="client-card"
              [ngStyle]="{ 'background-image': 'url(' + client.logo + ')' }"
            >
              <div class="client-card-overlay">
                <h5 class="client-name">{{ client.name }}</h5>
              </div>
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
    .hero-section {
  position: relative;
  background: url('/assets/images/ClientHandShake.jpg') no-repeat center center/cover, white; /* Background image */
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Black overlay with 50% transparency */
  z-index: 1; /* Ensure the overlay is above the background image */
}

.container {
  position: relative;
  z-index: 2; /* Ensures content is above the overlay */
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
    .bg-primary {
      background-color: var(--primary-color) !important;
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
    .client-card {
      height: 150px; /* Adjust height as needed */
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover; /* Ensures the image covers the card */
      background-position: center; /* Centers the image */
      border-radius: 8px; /* Optional: Rounded corners */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Shadow for the card */
      position: relative; /* Enables positioning for the overlay */
      transition: transform 0.3s ease;
    }
    .client-card:hover {
      transform: translateY(-5px); /* Adds hover effect */
    }
    .client-card-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7); /* Black overlay with 70% transparency */
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px; /* Matches the card's border-radius */
      opacity: 0; /* Initially hidden */
      transition: opacity 0.3s ease; /* Smooth fade-in effect */
    }
    .client-card:hover .client-card-overlay {
      opacity: 1; /* Show the overlay on hover */
    }
    .client-name {
      color: white;
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
      padding: 0.5rem;
    }
      `]
})
export class ClientsComponent {
  clients = [
    {
      name: 'Hindustan Aeronautics Limited',
      logo: '/assets/images/HAL.png'
    },
    {
      name: 'Bharat Heavy Electricals Limited',
      logo: 'assets/images/BHEL.jpg'
    },
    {
      name: 'Bharath Electronics Ltd',
      logo: 'assets/images/BEL.jpg'
    },
    {
      name: 'Medha Servo Drives Pvt Ltd',
      logo: 'assets/images/Medha.jpg'
    }
  ];

  testimonials = [
    {
      text: "VMPL has consistently delivered high-quality components that meet our strict aerospace standards. Their attention to detail and commitment to quality is exceptional.",
      name: "Mr. Karthik Amineni",
      position: "Procurement Manager",
      company: "Hindustan Aeronautics Limited",
      avatar: "assets/images/testimonials/avatar-1.jpg"
    },
    {
      text: "We have been working with VMPL for our railway component needs for over 5 years. Their reliability and quality have been crucial to our success.",
      name: "Mr. Nikhil Rayal",
      position: "Operations Director",
      company: "Railway Systems",
      avatar: "assets/images/testimonials/avatar-2.jpg"
    },
    {
      text: "The team at VMPL understands our requirements perfectly and always delivers on time. Their technical expertise is invaluable to our projects.",
      name: "Ms. Bharathi",
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
    },
    {
      icon: 'fas fa-stethoscope',
      name: 'Medical Devices',
      description: 'Precision components for medical equipment.'
    }
  ];
}