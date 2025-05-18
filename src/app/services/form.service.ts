import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  submitQuoteRequest(formData: any): Observable<any> {
    console.log('Submitting quote request:', formData);
    // For now, we'll simulate a successful API call with 1 second delay
    return of({ success: true, message: 'Quote request submitted successfully' }).pipe(
      delay(1000)
    );
  }

  submitContactForm(formData: any): Observable<any> {
    console.log('Submitting contact form:', formData);
    // For now, we'll simulate a successful API call with 1 second delay
    return of({ success: true, message: 'Message sent successfully' }).pipe(
      delay(1000)
    );
  }
} 