import { ChangeDetectionStrategy, Component, signal, computed, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Root component – minimal shell that only hosts the router outlet.
 * All page‑level logic has been moved to dedicated page components.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}

