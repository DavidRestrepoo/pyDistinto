import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  // TODO: add more lazy‑loaded pages here, e.g. { path: 'usuarios', loadComponent: () => import('./pages/usuarios/usuarios.component').then(m => m.UsuariosComponent) }
  {
    path: 'servicios',
    loadComponent: () => import('./pages/servicios/servicios.component').then(m => m.ServiciosComponent)
  },
];
