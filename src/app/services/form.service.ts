import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  submitQuoteRequest(formData: any): Observable<any> {
    // For now, we'll simulate a successful API call
    // In production, replace this with actual API call:
    // return this.http.post(`${this.apiUrl}/quote-request`, formData);
    return of({ success: true, message: 'Quote request submitted successfully' });
  }

  submitContactForm(formData: any): Observable<any> {
    // For now, we'll simulate a successful API call
    // In production, replace this with actual API call:
    // return this.http.post(`${this.apiUrl}/contact`, formData);
    return of({ success: true, message: 'Message sent successfully' });
  }
} 