import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeService } from '../home/services/home.service';

const INDUSTRY_MAP: Record<string, string> = {
  si_estetica: 'Sí, clínica estética',
  si_odontologica: 'Sí, clínica odontológica',
  no_otra: 'No, otra industria'
};

const BUDGET_MAP: Record<string, string> = {
  no_inverto: 'A. Aún no invierto en pauta',
  menos_500cop: 'B. Menos de $500 mil COP / mes',
  '500cop_1mcop': 'C. $500 mil a $1 millón COP / mes',
  '1mcop_2mcop': 'D. $1 millón a $2 millones COP / mes',
  mas_2mcop: 'E. Más de $2 millones COP / mes'
};

const REVENUE_MAP: Record<string, string> = {
  no_negocio: 'A. No he empezado aún un negocio',
  empezando_ventas: 'B. Aún empezando en ventas',
  menos_20mcop: 'C. Menos de $20 millones COP / mes',
  '20mcop_40mcop': 'D. $20 millones a $40 millones COP / mes',
  '40mcop_60mcop': 'E. $40 millones a $60 millones COP / mes',
  '60mcop_80mcop': 'F. $60 millones a $80 millones COP / mes',
  mas_80mcop: 'G. Más de $80 millones COP / mes'
};

const TIMELINE_MAP: Record<string, string> = {
  inmediatamente: 'Inmediatamente (esta semana)',
  este_mes: 'Este mes',
  '1_2_meses': 'En 1 o 2 meses',
  solo_explorando: 'Sólo estoy explorando'
};

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  private readonly homeService = inject(HomeService);
  readonly partnerLogos = signal<string[]>(this.homeService.getPartnerLogos());
  readonly isMobileMenuOpen = signal(false);

  // Form Signals
  readonly isSuccessModalOpen = signal(false);
  readonly isSubmitting = signal(false);

  private readonly WEBHOOK_URL = 'https://distinto-1-n8n.hcsppm.easypanel.host/webhook/nuevo-lead-inbound';

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  scrollTo(id: string): void {
    this.closeMobileMenu();
    const el = document.getElementById(id);
    if (el) {
      const navbar = document.querySelector('.srv-nav') as HTMLElement;
      const navbarHeight = navbar ? navbar.offsetHeight : 72;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

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
      this.isSuccessModalOpen.set(true);
    });
  }

  closeSuccessModal(): void {
    this.isSuccessModalOpen.set(false);
    const form = document.querySelector('.srv-contacto__form') as HTMLFormElement;
    form?.reset();
  }
}
