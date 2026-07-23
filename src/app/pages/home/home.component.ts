import { ChangeDetectionStrategy, Component, signal, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { HomeService, PortfolioLogo } from './services/home.service';

const INDUSTRY_MAP: Record<string, string> = {
  si_estetica: 'Sí, clínica estética',
  si_odontologica: 'Sí, clínica odontológica',
  no_otra: 'No, otra industria'
};

const BUDGET_MAP: Record<string, string> = {
  menos_300: 'Menos de $300 USD / mes',
  '300_1000': '$300 - $1.000 USD / mes',
  '1000_1500': '$1.000 - $1.500 USD / mes',
  mas_1500: 'Más de $1.500 USD / mes'
};

const REVENUE_MAP: Record<string, string> = {
  menos_3k: 'Menos de $3.000 USD / mes',
  '3k_5k': '$3.000 - $5.000 USD / mes',
  '5k_10k': '$5.000 - $10.000 USD / mes',
  mas_10k: 'Más de $10.000 USD / mes'
};

const TIMELINE_MAP: Record<string, string> = {
  inmediatamente: 'Inmediatamente (esta semana)',
  este_mes: 'Este mes',
  '1_2_meses': 'En 1 o 2 meses',
  solo_explorando: 'Sólo estoy explorando'
};

/**
 * Home page – migrated from the original AppComponent template.
 * Uses Signals for state management and minimal effect for logging.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  // Services injected via the new inject() API
  private readonly homeService = inject(HomeService);
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  // Signals holding the page data – initialized from the service (static for now)
  readonly title = signal('Distinto');
  readonly menuItems = signal<string[]>(this.homeService.getMenuItems());
  readonly partnerLogos = signal<string[]>(this.homeService.getPartnerLogos());
  readonly services = signal<any[]>(this.homeService.getServices());
  readonly logofolioLogos = signal<string[]>([
    '/Logos/Logos-Clientes/logo-01.png',
    '/Logos/Logos-Clientes/logo-03.png',
    '/Logos/Logos-Clientes/logo-10.png',
    '/Logos/Logos-Clientes/logo-04.png?v=2',
    '/Logos/Logos-Clientes/logo-05.png',
    '/Logos/Logos-Clientes/logo-02.png',
    '/Logos/Logos-Clientes/logo-08.png',
    '/Logos/Logos-Clientes/logo-09.png?v=2'
  ]);
  readonly portfolioLogos = signal<PortfolioLogo[]>(this.homeService.getPortfolioLogos());

  // Computed example – active partner logos (could be filtered later)
  readonly activePartnerLogos = computed(() => this.partnerLogos().filter(l => !!l));

  // Mobile menu open state
  readonly isMobileMenuOpen = signal(false);

  // Success modal state
  readonly isSuccessModalOpen = signal(false);

  // Submitting state signal
  readonly isSubmitting = signal(false);

  // Google Script Web App URL placeholder
  private readonly WEBHOOK_URL = 'https://distinto-1-n8n.hcsppm.easypanel.host/webhook/nuevo-lead-inbound';

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  // Simple effect just for demonstration (can be removed in prod)
  constructor() {
    effect(() => console.log('HomeComponent loaded – services count:', this.services().length));

    // Set Page Title
    this.titleService.setTitle('Agencia de Marketing para Clínicas Estéticas y Odontológicas | Distinto');

    // Set Meta Tags
    this.metaService.addTags([
      { name: 'description', content: 'Sistema de captación de pacientes con Meta Ads, landing pages y agente IA en WhatsApp. Agenda pacientes calificados en 90 días. Colombia, México, Ecuador y EE.UU.' },
      { name: 'keywords', content: 'agencia de marketing para clínicas estéticas, marketing para clínicas odontológicas, meta ads para clínicas, agente de ia whatsapp clínicas, leads calificados clínica dental' },
      { name: 'robots', content: 'index, follow' },

      // Open Graph Tags
      { property: 'og:title', content: 'Agencia de Marketing para Clínicas Estéticas y Odontológicas | Distinto' },
      { property: 'og:description', content: 'Sistema de captación de pacientes con Meta Ads, landing pages y agente IA en WhatsApp. Agenda pacientes calificados en 90 días. Colombia, México, Ecuador y EE.UU.' },
      { property: 'og:image', content: 'https://www.distintoagencia.com/Logos/distinto_logo.png' },
      { property: 'og:url', content: 'https://www.distintoagencia.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'es_CO' },

      // Twitter Card Tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Agencia de Marketing para Clínicas Estéticas y Odontológicas | Distinto' },
      { name: 'twitter:description', content: 'Sistema de captación de pacientes con Meta Ads, landing pages y agente IA en WhatsApp. Agenda pacientes calificados en 90 días. Colombia, México, Ecuador y EE.UU.' },
      { name: 'twitter:image', content: 'https://www.distintoagencia.com/Logos/distinto_logo.png' }
    ]);

    // Inject technical SEO tags (Canonical, Schema JSON-LD)
    this.injectTechnicalSEO();
  }

  private injectTechnicalSEO(): void {
    // Inject Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', 'https://www.distintoagencia.com/');
      document.head.appendChild(canonicalLink);
    } else {
      canonicalLink.setAttribute('href', 'https://www.distintoagencia.com/');
    }

    // Inject JSON-LD Schema
    const schemaId = 'seo-jsonld-schema';
    let schemaScript = document.getElementById(schemaId);
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('id', schemaId);
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'Distinto Agencia de Performance',
      'url': 'https://www.distintoagencia.com',
      'logo': 'https://www.distintoagencia.com/Logos/distinto_logo.png',
      'image': 'https://www.distintoagencia.com/Logos/distinto_logo.png',
      'description': 'Sistema de captación de pacientes con Meta Ads, landing pages y agente IA en WhatsApp. Agenda pacientes calificados en 90 días. Colombia, México, Ecuador y EE.UU.',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Medellín',
        'addressCountry': 'CO'
      },
      'sameAs': [
        'https://www.instagram.com/distinto.agencia',
        'https://www.tiktok.com/@distinto.agencia'
      ],
      'areaServed': [
        {
          '@type': 'AdministrativeArea',
          'name': 'Colombia',
          'containsPlace': [
            { '@type': 'City', 'name': 'Bogotá' },
            { '@type': 'City', 'name': 'Medellín' },
            { '@type': 'City', 'name': 'Cali' },
            { '@type': 'City', 'name': 'Barranquilla' },
            { '@type': 'City', 'name': 'Bucaramanga' },
            { '@type': 'City', 'name': 'Cartagena' }
          ]
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'México',
          'containsPlace': [
            { '@type': 'City', 'name': 'Ciudad de México' },
            { '@type': 'City', 'name': 'Monterrey' },
            { '@type': 'City', 'name': 'Guadalajara' },
            { '@type': 'City', 'name': 'Puebla' },
            { '@type': 'City', 'name': 'Tijuana' }
          ]
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Ecuador',
          'containsPlace': [
            { '@type': 'City', 'name': 'Guayaquil' },
            { '@type': 'City', 'name': 'Quito' },
            { '@type': 'City', 'name': 'Cuenca' }
          ]
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Estados Unidos',
          'containsPlace': [
            { '@type': 'City', 'name': 'Miami' },
            { '@type': 'City', 'name': 'Orlando' },
            { '@type': 'City', 'name': 'Tampa' },
            { '@type': 'City', 'name': 'Houston' },
            { '@type': 'City', 'name': 'Dallas' },
            { '@type': 'City', 'name': 'Los Ángeles' },
            { '@type': 'City', 'name': 'Nueva York' }
          ]
        }
      ]
    };

    schemaScript.textContent = JSON.stringify(schemaData);
  }

  // Scroll to services section – similar to previous onLearnMore
  onLearnMore(): void {
    this.closeMobileMenu();
    const el = document.getElementById('contacto');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Form submission handler
  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.isSubmitting()) return;
    this.isSubmitting.set(true);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const rawIndustria = formData.get('industria') as string;
    const rawPresupuesto = formData.get('presupuesto') as string;
    const rawFacturacion = formData.get('facturacion') as string;
    const rawComienzo = formData.get('comienzo') as string;

    const payload = {
      nombre: formData.get('nombre'),
      apellidos: formData.get('apellidos'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      clinica: formData.get('clinica'),
      industria: INDUSTRY_MAP[rawIndustria] || rawIndustria,
      presupuesto: BUDGET_MAP[rawPresupuesto] || rawPresupuesto,
      facturacion: REVENUE_MAP[rawFacturacion] || rawFacturacion,
      comienzo: TIMELINE_MAP[rawComienzo] || rawComienzo
    };


    fetch(this.WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(() => {
      this.isSubmitting.set(false);
      this.isSuccessModalOpen.set(true);
    })
    .catch(error => {
      console.error('Error submitting form data to webhook:', error);
      this.isSubmitting.set(false);
      // Fallback: open modal anyway to keep user flow working
      this.isSuccessModalOpen.set(true);
    });
  }

  // Close success modal and reset form fields
  closeSuccessModal(): void {
    this.isSuccessModalOpen.set(false);
    const form = document.querySelector('.s10-form') as HTMLFormElement;
    form?.reset();
  }
}
