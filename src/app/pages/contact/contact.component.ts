import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1>Contact Us</h1>
            <p class="lead">Get in touch with our team for any inquiries or support.</p>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/contact-hero.jpg" alt="Contact Us" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="card shadow-sm">
              <div class="card-body">
                <h2 class="h4 mb-4">Send us a Message</h2>
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                  <div class="mb-3">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="name" formControlName="name">
                    <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" class="text-danger">
                      Please enter your name
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="email" formControlName="email">
                    <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" class="text-danger">
                      Please enter a valid email address
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" id="phone" formControlName="phone">
                  </div>
                  <div class="mb-3">
                    <label for="subject" class="form-label">Subject</label>
                    <input type="text" class="form-control" id="subject" formControlName="subject">
                    <div *ngIf="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched" class="text-danger">
                      Please enter a subject
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" rows="5" formControlName="message"></textarea>
                    <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" class="text-danger">
                      Please enter your message
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary" [disabled]="contactForm.invalid || isSubmitting">
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-info">
              <h2 class="h4 mb-4">Contact Information</h2>
              <div class="mb-4">
                <h3 class="h6">Address</h3>
                <p class="mb-0">123 Industrial Park,<br>City, State<br>ZIP Code</p>
              </div>
              <div class="mb-4">
                <h3 class="h6">Phone</h3>
                <p class="mb-0">
                  <a href="tel:+15551234567" class="text-decoration-none">+1 (555) 123-4567</a>
                </p>
              </div>
              <div class="mb-4">
                <h3 class="h6">Email</h3>
                <p class="mb-0">
                  <a href="mailto:info@example.com" class="text-decoration-none">info&#64;example.com</a>
                </p>
              </div>
              <div class="mb-4">
                <h3 class="h6">Business Hours</h3>
                <p class="mb-0">Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 1:00 PM<br>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Our Location</h2>
        <div class="map-container">
          <!-- Replace with actual Google Maps embed code -->
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
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
    .section {
      padding: 4rem 0;
    }
    .contact-info {
      padding: 2rem;
      background-color: #f8f9fa;
      border-radius: 0.5rem;
    }
    .contact-info a {
      color: var(--bs-primary);
    }
    .contact-info a:hover {
      color: var(--bs-primary-darker);
    }
    .map-container {
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      border-radius: 8px;
      overflow: hidden;
    }
  `]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.formService.submitContactForm(this.contactForm.value).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.contactForm.reset();
          // TODO: Show success message
        },
        error: () => {
          this.isSubmitting = false;
          // TODO: Show error message
        }
      });
    }
  }
} 