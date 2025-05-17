import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyInfo = environment.companyInfo;
  private socialLinks = environment.socialLinks;

  getCompanyInfo() {
    return this.companyInfo;
  }

  getSocialLinks() {
    return this.socialLinks;
  }

  getGoogleMapsApiKey() {
    return environment.googleMapsApiKey;
  }

  getServices() {
    return [
      {
        id: 1,
        title: 'Laser Cutting',
        description: 'Precision laser cutting services for various materials with tight tolerances.',
        image: 'assets/images/services/laser-cutting.jpg',
        features: [
          'High-precision cutting',
          'Multiple material capabilities',
          'Complex geometries',
          'Quick turnaround'
        ]
      },
      {
        id: 2,
        title: 'CNC Bending',
        description: 'Computer-controlled bending operations for precise metal forming.',
        image: 'assets/images/services/cnc-bending.jpg',
        features: [
          'Accurate bend angles',
          'Consistent results',
          'Various material thicknesses',
          'Complex bend sequences'
        ]
      },
      {
        id: 3,
        title: 'Welding Services',
        description: 'Professional welding services including MIG, TIG, and spot welding.',
        image: 'assets/images/services/welding.jpg',
        features: [
          'Multiple welding processes',
          'Certified welders',
          'Quality inspections',
          'Various materials'
        ]
      }
    ];
  }

  getIndustries() {
    return [
      {
        id: 1,
        name: 'Aerospace & Defense',
        description: 'High-precision components for aerospace and defense applications.',
        image: 'assets/images/industries/aerospace.jpg'
      },
      {
        id: 2,
        name: 'Railway & Transportation',
        description: 'Custom fabrication for transportation equipment manufacturers.',
        image: 'assets/images/industries/railway.jpg'
      },
      {
        id: 3,
        name: 'Electrical & Electronics',
        description: 'Precision components for electrical and electronic equipment.',
        image: 'assets/images/industries/electronics.jpg'
      }
    ];
  }

  getCertifications() {
    return [
      {
        id: 1,
        name: 'ISO 9001:2015',
        description: 'Quality Management System certification'
      },
      {
        id: 2,
        name: 'AS9100D',
        description: 'Aerospace Quality Management System'
      },
      {
        id: 3,
        name: 'IRIS',
        description: 'International Railway Industry Standard'
      }
    ];
  }
} 