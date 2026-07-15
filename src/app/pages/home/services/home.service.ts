import { Injectable } from '@angular/core';

export interface PortfolioLogo {
  name: string;
  imagePath: string;
}

/**
 * Simple service that provides static data for the Home page.
 * In a real project this would call a backend API via HttpClient.
 */
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  /** Menu items displayed in the top navigation */
  getMenuItems(): string[] {
    return ['Inicio', 'Nosotros', 'Servicios'];
  }

  /** Partner logo names */
  getPartnerLogos(): string[] {
    return [
      '/Logos/Logos-Clientes/logo-01.png',
      '/Logos/Logos-Clientes/logo-02.png',
      '/Logos/Logos-Clientes/logo-03.png',
      '/Logos/Logos-Clientes/logo-04.png',
      '/Logos/Logos-Clientes/logo-05.png',
      '/Logos/Logos-Clientes/logo-07.png',
      '/Logos/Logos-Clientes/logo-08.png',
      '/Logos/Logos-Clientes/logo-09.png',
      '/Logos/Logos-Clientes/logo-10.png'
    ];
  }

  /** List of services displayed in the services grid */
  getServices(): Array<{ title: string; description: string; accent: string }> {
    return [
      { title: 'Campanas', description: 'Estrategias que convierten clics en ventas', accent: 'sunset' },
      { title: 'Pauta', description: 'Anuncios en Meta que llevan tu marca mas lejos', accent: 'electric' },
      { title: 'Diseno Grafico', description: 'Diseno con concepto, campanas con impacto', accent: 'violet' },
      { title: 'Produccion audiovisual', description: 'Videos que atraen clientes y conectan con tus soluciones', accent: 'plasma' },
      { title: 'Branding', description: 'Renueva tu imagen cautivando a mas clientes', accent: 'aurora' },
      { title: 'ChatBot', description: 'Conexion con tus clientes con atencion inmediata', accent: 'neon' },
    ];
  }

  /** Portfolio logos displayed in Session 3 */
  getPortfolioLogos(): PortfolioLogo[] {
    return [
      { name: 'Safer Agrobiológicos', imagePath: '/Logos/Logos%20Clientes/logo-01.png' },
      { name: 'American Wolf', imagePath: '/Logos/Logos%20Clientes/logo-02.png' },
      { name: 'Bosanet', imagePath: '/Logos/Logos%20Clientes/logo-03.png' },
      { name: 'Hemo Sthetic', imagePath: '/Logos/Logos%20Clientes/logo-04.png' },
      { name: 'Campo Futuro', imagePath: '/Logos/Logos%20Clientes/logo-05.png' },
      { name: 'León Viajero', imagePath: '/Logos/Logos%20Clientes/logo-06.png' },
      { name: 'MultiEncanto', imagePath: '/Logos/Logos%20Clientes/Logo%20adhesivo.png' },
      { name: 'Alaska Gelatos', imagePath: '/Logos/Logos%20Clientes/LOGO-TROPICAL-NURSERY-HORIZONTAL-SIN-FONDO.png' },
    ];
  }
}
