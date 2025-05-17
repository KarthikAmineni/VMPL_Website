import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer bg-dark text-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0">
            <h5>About Us</h5>
            <p>Leading provider of precision sheet metal fabrication services, serving industries worldwide with quality and innovation.</p>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><a routerLink="/" class="text-light">Home</a></li>
              <li><a routerLink="/services" class="text-light">Services</a></li>
              <li><a routerLink="/industries" class="text-light">Industries</a></li>
              <li><a routerLink="/contact" class="text-light">Contact</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Contact Info</h5>
            <ul class="list-unstyled">
              <li><i class="fas fa-map-marker-alt me-2"></i> 123 Industrial Park, City, State</li>
              <li><i class="fas fa-phone me-2"></i> +1 (555) 123-4567</li>
              <li><i class="fas fa-envelope me-2"></i> info&#64;example.com</li>
            </ul>
          </div>
        </div>
        <hr class="my-4">
        <div class="row">
          <div class="col-md-6">
            <p class="mb-0">&copy; {{ currentYear }} XYZ Pvt. Ltd. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <a href="#" class="text-light me-3"><i class="fab fa-facebook"></i></a>
            <a href="#" class="text-light me-3"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-light me-3"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: auto;
    }
    .footer a {
      text-decoration: none;
      transition: opacity 0.3s;
    }
    .footer a:hover {
      opacity: 0.8;
    }
    .footer ul li {
      margin-bottom: 0.5rem;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
} 