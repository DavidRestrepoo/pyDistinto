import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponent {
  readonly isMobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  scrollTo(id: string): void {
    this.closeMobileMenu();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
