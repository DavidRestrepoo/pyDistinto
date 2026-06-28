import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terminos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TerminosComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
