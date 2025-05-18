import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-quote-request',
  template: `
    <section class="hero hero-section bg-light">
     <div class="background-overlay"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="text-white">Request a Quote</h1>
            <p class="lead text-white">Fill out the form below to get a detailed quote for your project.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card shadow-sm">
              <div class="card-body">
                <h2 class="h4 mb-4">Project Details</h2>
                <form [formGroup]="quoteForm" (ngSubmit)="onSubmit()">
                  <!-- Contact Information -->
                  <h3 class="h5 mb-3">Contact Information</h3>
                  <div class="row g-3 mb-4">
                    <div class="col-md-6">
                      <label for="name" class="form-label">Full Name</label>
                      <input type="text" class="form-control" id="name" formControlName="name">
                      <div *ngIf="quoteForm.get('name')?.invalid && quoteForm.get('name')?.touched" class="text-danger">
                        Please enter your name
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="company" class="form-label">Company Name</label>
                      <input type="text" class="form-control" id="company" formControlName="company">
                      <div *ngIf="quoteForm.get('company')?.invalid && quoteForm.get('company')?.touched" class="text-danger">
                        Please enter your company name
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="email" class="form-label">Email Address</label>
                      <input type="email" class="form-control" id="email" formControlName="email">
                      <div *ngIf="quoteForm.get('email')?.invalid && quoteForm.get('email')?.touched" class="text-danger">
                        Please enter a valid email address
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="phone" class="form-label">Phone Number</label>
                      <input type="tel" class="form-control" id="phone" formControlName="phone">
                      <div *ngIf="quoteForm.get('phone')?.invalid && quoteForm.get('phone')?.touched" class="text-danger">
                        Please enter your phone number
                      </div>
                    </div>
                  </div>

                  <!-- Project Information -->
                  <h3 class="h5 mb-3">Project Information</h3>
                  <div class="mb-3">
                    <label for="projectType" class="form-label">Project Type</label>
                    <select class="form-select" id="projectType" formControlName="projectType">
                      <option value="">Select a project type</option>
                      <option value="sheet-metal">Sheet Metal Fabrication</option>
                      <option value="welding">Welding</option>
                      <option value="assembly">Assembly</option>
                      <option value="prototyping">Prototyping</option>
                      <option value="other">Other</option>
                    </select>
                    <div *ngIf="quoteForm.get('projectType')?.invalid && quoteForm.get('projectType')?.touched" class="text-danger">
                      Please select a project type
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="description" class="form-label">Project Description</label>
                    <textarea class="form-control" id="description" rows="5" formControlName="description"></textarea>
                    <div *ngIf="quoteForm.get('description')?.invalid && quoteForm.get('description')?.touched" class="text-danger">
                      Please provide a project description
                    </div>
                  </div>

                  <div class="row g-3 mb-4">
                    <div class="col-md-6">
                      <label for="quantity" class="form-label">Estimated Quantity</label>
                      <input type="number" class="form-control" id="quantity" formControlName="quantity">
                    </div>
                    <div class="col-md-6">
                      <label for="timeline" class="form-label">Required Timeline</label>
                      <select class="form-select" id="timeline" formControlName="timeline">
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (1-2 weeks)</option>
                        <option value="standard">Standard (2-4 weeks)</option>
                        <option value="flexible">Flexible (4+ weeks)</option>
                      </select>
                    </div>
                  </div>

                  <div class="mb-4">
                    <label for="attachments" class="form-label">Attachments</label>
                    <input type="file" class="form-control" id="attachments" multiple formControlName="attachments">
                    <div class="form-text">Upload any relevant drawings, specifications, or documents (Max. 10MB per file)</div>
                  </div>

                  <div class="mb-4">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="terms" formControlName="terms">
                      <label class="form-check-label" for="terms">
                        I agree to the terms and conditions
                      </label>
                      <div *ngIf="quoteForm.get('terms')?.invalid && quoteForm.get('terms')?.touched" class="text-danger">
                        You must agree to the terms and conditions
                      </div>
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary" [disabled]="quoteForm.invalid || isSubmitting">
                    {{ isSubmitting ? 'Submitting...' : 'Submit Quote Request' }}
                  </button>
                </form>
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
    .section {
      padding: 4rem 0;
    }
    .form-text {
      font-size: 0.875rem;
      color: #6c757d;
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
  `]
})
export class QuoteRequestComponent implements OnInit {
  quoteForm: FormGroup;
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.quoteForm = this.formBuilder.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      projectType: ['', Validators.required],
      description: ['', Validators.required],
      quantity: [''],
      timeline: [''],
      attachments: [''],
      terms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.quoteForm.valid) {
      this.isSubmitting = true;
      this.formService.submitQuoteRequest(this.quoteForm.value).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.quoteForm.reset();
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