import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly TEMPLATE_IDS = {
    contact: 'template_dmr95lb',
    quote: 'template_nag9k6a'  // Replace with your actual quote template ID
  };
  private defaultServiceId = 'service_njxdv38';
  private defaultUserId = 'Vi33hjoWURci0lGWf';

  constructor() {
    // Initialize EmailJS with your user ID
    emailjs.init(this.defaultUserId);
  }

  sendEmail(formData: any, type: 'contact' | 'quote' = 'contact'): Observable<any> {
    const templateId = this.TEMPLATE_IDS[type];
    
    // Format the data according to the expected template format
    const templateParams = {
      name: formData.name,
      Name: formData.name,
      CompanyName: formData.company || '',
      Email: formData.email,
      PhoneNumber: formData.phone || '',
      ProjectType: formData.projectType || '',
      ProjectDescription: formData.description || '',
      EstimatedQuantity: formData.quantity || '',
      email: formData.email,
      message: formData.message || '',
      subject: formData.subject || 'Quote Request',
      Attachments: formData.attachments || ''
    };

    return from(
      emailjs.send(
        this.defaultServiceId,
        templateId,
        templateParams
      )
    );
  }

  // Method to update service configuration
  updateConfig(serviceId: string, templateId: string, userId: string) {
    emailjs.init(userId);
    this.defaultServiceId = serviceId;
    this.defaultUserId = userId;
  }
} 