import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private defaultTemplateId = 'template_dmr95lb'; // You'll replace this with your template ID // Secret Template ID
  private defaultServiceId = 'service_njxdv38';  // You'll replace this with your service ID // Secret Service ID
  private defaultUserId = 'Vi33hjoWURci0lGWf';       // You'll replace this with your user ID // Secret User ID 

  constructor() {
    // Initialize EmailJS with your user ID
    emailjs.init(this.defaultUserId);
  }

  sendEmail(formData: any): Observable<any> {
    const templateParams = {

        title: formData.subject,
        name: formData.name,
        message: formData.message,
        email: formData.email,
        Email: formData.email,
        phoneNumber: formData.phone,

    };

    return from(
      emailjs.send(
        this.defaultServiceId,
        this.defaultTemplateId,
        templateParams
      )
    );
  }

  // Method to update service configuration
  updateConfig(serviceId: string, templateId: string, userId: string) {
    emailjs.init(userId);
    this.defaultServiceId = serviceId;
    this.defaultTemplateId = templateId;
    this.defaultUserId = userId;
  }
} 