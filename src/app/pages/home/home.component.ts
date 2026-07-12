import { ChangeDetectionStrategy, Component, signal, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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

  // Signals holding the page data – initialized from the service (static for now)
  readonly title = signal('Distinto');
  readonly menuItems = signal<string[]>(this.homeService.getMenuItems());
  readonly partnerLogos = signal<string[]>(this.homeService.getPartnerLogos());
  readonly services = signal<any[]>(this.homeService.getServices());
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
