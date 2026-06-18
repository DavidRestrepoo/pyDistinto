import { ChangeDetectionStrategy, Component, signal, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService, PortfolioLogo } from './services/home.service';

/**
 * Home page – migrated from the original AppComponent template.
 * Uses Signals for state management and minimal effect for logging.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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
    const el = document.getElementById('servicios');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
