import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { EmailService } from '../../services/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  template: `
    <section class="hero hero-section bg-light">
    <div class="background-overlay"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="text-white">Contact Us</h1>
            <p class="lead text-white">Get in touch with our team for any inquiries or support.</p>
            <!-- Test button for snackbar -->
            <!-- <button class="btn btn-primary mb-3" (click)="testSnackbar()">Test Notification</button> -->
          </div>
          <!-- <div class="col-lg-6">
            <img src="assets/images/contact-hero.jpg" alt="Contact Us" class="img-fluid rounded shadow">
          </div> -->
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
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" #formDirective="ngForm">
                  <div class="mb-3">
                    <label for="name" class="form-label">Full Name *</label>
                    <input type="text" class="form-control" id="name" formControlName="name">
                    <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" class="text-danger">
                      Please enter your name (minimum 2 characters)
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email Address *</label>
                    <input type="email" class="form-control" id="email" formControlName="email">
                    <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" class="text-danger">
                      Please enter a valid email address
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input type="text" 
                           class="form-control" 
                           id="phone" 
                           formControlName="phone" 
                           (keypress)="numberOnly($event)"
                           maxlength="10">
                    <div *ngIf="contactForm.get('phone')?.invalid && contactForm.get('phone')?.touched" class="text-danger">
                      <div *ngIf="contactForm.get('phone')?.errors?.['pattern']">Please enter a valid 10-digit phone number</div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="subject" class="form-label">Subject *</label>
                    <input type="text" class="form-control" id="subject" formControlName="subject">
                    <div *ngIf="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched" class="text-danger">
                      Please enter a subject (minimum 4 characters)
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Message *</label>
                    <textarea class="form-control" 
                              id="message" 
                              rows="5" 
                              formControlName="message"
                              [maxlength]="500"></textarea>
                    <div class="d-flex justify-content-between">
                      <small class="text-muted">{{500 - (contactForm.get('message')?.value?.length || 0)}} characters remaining</small>
                      <small class="text-muted">{{contactForm.get('message')?.value?.length || 0}}/500</small>
                    </div>
                    <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" class="text-danger">
                      <div *ngIf="contactForm.get('message')?.errors?.['required']">Please enter your message</div>
                      <div *ngIf="contactForm.get('message')?.errors?.['minlength']">Message must be at least 10 characters</div>
                      <div *ngIf="contactForm.get('message')?.errors?.['maxlength']">Message cannot exceed 500 characters</div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary" [disabled]="contactForm.invalid || isSubmitting">
                    <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
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
                <p class="mb-0">Plot NO 39 & 40, SV Co. Op., <br> Ind Estate, Balanagar, <br> Hyderabad, Telangana <br> 500037</p>  
              </div>
              <div class="mb-4">
                <h3 class="h6">Phone</h3>
                <p class="mb-0">
                  <a href="tel:+91 9948122476" class="text-decoration-none">+91 9948122476</a>
                </p>
              </div>
              <div class="mb-4">
                <h3 class="h6">Email</h3>
                <p class="mb-0">
                  <a href="mailto:vmpl@gmail.com" class="text-decoration-none">vmpl&#64;gmail.com</a>
                </p>
              </div>
              <div class="mb-4">
                <h3 class="h6">Business Hours</h3>
                <p class="mb-0">Monday - Saturday: 9:00 AM - 6:00 PM<br>Sunday: Closed</p>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8556044956945!2d78.43087607760026!3d17.466623940720115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90f94e0ceb79%3A0x32c1e23a0dfd8e7!2sVM%20Precision%20Punch%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1747568653626!5m2!1sen!2sin" 
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
    private formService: FormService,
    private emailService: EmailService,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[0-9]{10}$')]],
      subject: ['', [Validators.required, Validators.minLength(4)]],
      message: ['', [
        Validators.required, 
        Validators.minLength(10),
        Validators.maxLength(500)
      ]]
    });
  }

  // Allow only numbers in phone field
  numberOnly(event: KeyboardEvent): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  ngOnInit(): void {
    console.log('Contact component initialized');
  }

  private showSuccessMessage(): void {
    console.log('Showing success message');
    this.snackBar.open('Thank you for your message! We will get back to you soon.', 'Close', {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['success-snackbar']
    });
  }

  private showErrorMessage(error?: any): void {
    console.log('Showing error message', error);
    let errorMessage = 'Failed to send message. Please try again later.';
    if (error?.status === 0) {
      errorMessage = 'Network error. Please check your internet connection.';
    }
    this.snackBar.open(errorMessage, 'Close', {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['error-snackbar']
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      console.log('Sending email with data:', this.contactForm.value);

      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Email sent successfully:', response);
          this.isSubmitting = false;
          this.showSuccessMessage();
          this.contactForm.reset();
          Object.keys(this.contactForm.controls).forEach(key => {
            this.contactForm.get(key)?.setErrors(null);
          });
        },
        error: (error) => {
          console.error('Failed to send email:', error);
          this.isSubmitting = false;
          this.showErrorMessage(error);
        }
      });
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
} 