import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ContactComponent } from './pages/contact/contact.component';
import { QuoteRequestComponent } from './pages/quote-request/quote-request.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'request-quote', component: QuoteRequestComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Restores scroll position to the top
      anchorScrolling: 'enabled' // Enables anchor scrolling (optional)
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }