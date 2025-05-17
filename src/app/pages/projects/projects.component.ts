import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <!-- Hero Section -->
    <section class="hero bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1>Our Projects</h1>
            <p class="lead">Explore our portfolio of successful projects and custom solutions.</p>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/projects-hero-placeholder.jpg" alt="Our Projects" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section">
      <div class="container">
        <!-- Filter Controls -->
        <div class="row mb-5">
          <div class="col-md-12">
            <div class="filter-buttons text-center">
              <button 
                *ngFor="let filter of filters" 
                class="btn btn-outline-primary me-2 mb-2"
                [class.active]="currentFilter === filter"
                (click)="filterProjects(filter)">
                {{filter}}
              </button>
            </div>
          </div>
        </div>

        <!-- Projects -->
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let project of filteredProjects">
            <div class="card project-card h-100">
              <img [src]="project.image" [alt]="project.title" class="card-img-top project-img">
              <div class="card-body">
                <h3 class="h5">{{project.title}}</h3>
                <p class="text-muted mb-2">{{project.category}}</p>
                <p class="mb-3">{{project.description}}</p>
                <button class="btn btn-primary btn-sm" (click)="showProjectDetails(project)">
                  View Details
                </button>
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
    .project-img {
      height: 200px;
      object-fit: cover;
    }
    .project-card {
      transition: transform 0.3s ease;
    }
    .project-card:hover {
      transform: translateY(-5px);
    }
    .filter-buttons .btn.active {
      background-color: var(--primary-color);
      color: white;
    }
  `]
})
export class ProjectsComponent {
  filters = ['All', 'Aerospace', 'Railway', 'Electronics', 'Medical', 'Industrial'];
  currentFilter = 'All';

  projects = [
    {
      id: 1,
      title: 'Aircraft Panel Assembly',
      category: 'Aerospace',
      description: 'Custom fabricated panels for commercial aircraft with high precision requirements.',
      image: 'assets/images/projects/aerospace-1.jpg',
      details: {
        client: 'Major Aerospace Manufacturer',
        duration: '6 months',
        specifications: [
          'Material: Aluminum 6061-T6',
          'Tolerance: ±0.05mm',
          'Surface Finish: Anodized'
        ]
      }
    },
    {
      id: 2,
      title: 'Train Interior Components',
      category: 'Railway',
      description: 'Interior metal components for high-speed trains with focus on durability and safety.',
      image: 'assets/images/projects/railway-1.jpg',
      details: {
        client: 'Railway Equipment Manufacturer',
        duration: '4 months',
        specifications: [
          'Material: Stainless Steel 304',
          'Finish: Brushed',
          'Fire Safety Compliant'
        ]
      }
    },
    {
      id: 3,
      title: 'Electronic Enclosures',
      category: 'Electronics',
      description: 'Precision enclosures for sensitive electronic equipment with EMI shielding.',
      image: 'assets/images/projects/electronics-1.jpg',
      details: {
        client: 'Electronics Manufacturer',
        duration: '3 months',
        specifications: [
          'Material: Galvanized Steel',
          'EMI Shielding',
          'IP65 Rating'
        ]
      }
    }
  ];

  filteredProjects = this.projects;

  filterProjects(category: string) {
    this.currentFilter = category;
    this.filteredProjects = category === 'All' 
      ? this.projects
      : this.projects.filter(project => project.category === category);
  }

  showProjectDetails(project: any) {
    // Implement project details modal or navigation
    console.log('Show details for project:', project);
  }
} 