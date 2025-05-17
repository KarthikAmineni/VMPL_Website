# XYZ Pvt. Ltd. Website

A modern, professional website for XYZ Pvt. Ltd., showcasing their precision sheet metal fabrication services and capabilities.

## Features

- Modern, responsive design using Bootstrap 5
- Comprehensive service showcase with detailed information
- Industry-specific solutions and case studies
- Quote request system with form validation
- Portfolio gallery with filtering options
- Contact forms with validation
- Google Maps integration
- SEO optimized
- Mobile-first approach

## Technologies Used

- Angular 17
- Bootstrap 5
- Font Awesome Icons
- NgBootstrap for UI components
- SCSS for styling
- Reactive Forms for form handling
- Environment configuration for different deployment scenarios

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v17 or higher)

## Setup Instructions

1. Clone the repository:
```bash
git clone [repository-url]
cd vmpl-landing
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
- Update `src/environments/environment.ts` with your development settings
- Update `src/environments/environment.prod.ts` with your production settings

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200/`

## Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── header/         # Site header with navigation
│   │   └── footer/         # Site footer
│   ├── pages/              # Page components
│   │   ├── home/          
│   │   ├── about/
│   │   ├── services/
│   │   ├── industries/
│   │   ├── projects/
│   │   ├── clients/
│   │   ├── certifications/
│   │   ├── contact/
│   │   └── quote-request/
│   ├── services/           # Services
│   │   ├── form.service.ts
│   │   └── company.service.ts
│   ├── models/            # Interfaces and types
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/
│   ├── images/            # Images and media files
│   │   ├── services/
│   │   ├── industries/
│   │   └── team/
│   └── styles/           # Global styles
├── environments/         # Environment configurations
│   ├── environment.ts
│   └── environment.prod.ts
└── styles.scss          # Global styles
```

## Development Guidelines

1. Code Style and Standards
   - Follow Angular style guide
   - Use meaningful component and variable names
   - Add proper documentation for complex logic
   - Keep components focused and maintainable
   - Use TypeScript features appropriately

2. Component Development
   - Create reusable components when possible
   - Use proper component lifecycle hooks
   - Implement proper error handling
   - Add loading states where appropriate
   - Follow reactive programming principles

3. Styling
   - Use SCSS features for maintainable styles
   - Follow BEM methodology for CSS classes
   - Ensure responsive design works on all devices
   - Maintain consistent spacing and typography

4. Forms
   - Use Reactive Forms for complex forms
   - Implement proper validation
   - Show clear error messages
   - Handle form submission states

5. Performance
   - Optimize images and assets
   - Implement lazy loading where appropriate
   - Use proper caching strategies
   - Monitor bundle sizes

6. Testing
   - Write unit tests for services
   - Add component tests for complex components
   - Test form validation
   - Ensure cross-browser compatibility

## Deployment

1. Build the production version:
```bash
npm run build --prod
```

2. Deploy the contents of the `dist/` directory to your web server

3. Ensure proper server configuration:
   - Configure proper caching headers
   - Enable GZIP compression
   - Set up SSL certificate
   - Configure proper redirects

## Environment Configuration

The following environment variables need to be configured:

```typescript
{
  production: boolean;
  apiUrl: string;
  googleMapsApiKey: string;
  companyInfo: {
    name: string;
    address: string;
    phone: string;
    email: string;
    businessHours: string;
  };
  socialLinks: {
    linkedin: string;
    facebook: string;
    twitter: string;
    instagram: string;
  };
}
```

## Contact

For any queries or support, please contact:
[Contact Information]

## License

[License Information] 