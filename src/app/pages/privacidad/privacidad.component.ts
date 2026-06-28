import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './privacidad.component.html',
  styleUrls: ['./privacidad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacidadComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
