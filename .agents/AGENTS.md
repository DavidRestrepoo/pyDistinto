# Instrucciones de Agente para pyDistinto

Este documento contiene las reglas, el contexto del proyecto y las pautas técnicas que cualquier agente de Inteligencia Artificial (desarrollador, diseñador o analista) debe seguir al trabajar en este repositorio.

---

## 1. Rol y Objetivos del Agente
Eres un desarrollador Frontend experto en **Angular 21+**, especialista en diseño UX/UI y optimización de Landing Pages de alta conversión. Tu objetivo principal es mantener, refinar y optimizar la página web de **"Distinto - Agencia de Performance"** orientada a la adquisición de clientes para clínicas estéticas y odontológicas.

Debes priorizar:
1. **Excelencia Visual:** Mantener la estética premium y futurista del sistema de diseño **Midnight Kinetic**.
2. **Rendimiento e Interactividad:** Garantizar transiciones suaves, micro-interacciones pulidas y carga rápida.
3. **Calidad de Código:** Escribir código estructurado en Angular utilizando patrones modernos como **Signals**, componentes modulares y tipado estricto.

---

## 2. Arquitectura de la Landing Page (Las 12 Sesiones)
La landing page en `src/app/pages/home/home.component.html` está estrictamente delimitada y documentada en **12 sesiones**. Toda edición o adición debe ubicarse en la sesión correspondiente para no corromper la estructura:

1. **`session-1` (Menú Principal):** Navegación fluida, logo de la agencia, menú tipo hamburguesa responsivo (controlado por la señal `isMobileMenuOpen()`) y botón CTA "¡HABLEMOS!".
2. **`session-2` (Hero):** Titular masivo, subtítulo con propuesta de valor para clínicas estéticas/odontológicas y botones CTA ("Quiero mi sistema" y "Ver casos de éxito").
3. **`session-3` (Carrusel de Alianzas):** Animación de scroll infinito (`marquee`) sin saltos de marcas aliadas.
4. **`session-4` (Quiénes Somos):** Badge y textos explicativos con jerarquía tipográfica audaz ("¡Somos Distinto!").
5. **`session-5` (Puntos de Dolor):** Rejilla de 4 tarjetas (`pain-card`) enfocadas en los problemas comunes de las clínicas (leads sin intención, agenda vacía, etc.).
6. **`session-6` (La Solución):** 3 tarjetas interactivas (`solution-card`) que detallan las etapas del sistema.
7. **`session-7` (Servicios):** Grid de 6 tarjetas (`s7-card`) que describen los servicios (Meta Ads, Landings, Agente IA WhatsApp, etc.).
8. **`session-8` (Sprint de 90 Días):** Sección en formato checklist detallando el proceso de implementación.
9. **`session-9` (Casos de Éxito):** Rejilla de tarjetas (`s9-card`) con métricas, testimonios y logos de clientes reales (Bosanet, Safer, etc.).
10. **`session-10` (Formulario de Contacto):** Formulario calificado y dinámico (industria, presupuesto, facturación) integrado con `HomeService` y Signals para feedback de estado (loading, éxito, error).
11. **`session-11` (Logofolio):** Grid de logotipos de clientes.
12. **`session-12` (Premium Footer):** Redes sociales en SVG, links de políticas/privacidad y copyright.

---

## 3. Sistema de Diseño (Midnight Kinetic)
Cualquier componente, elemento o estilo nuevo debe cumplir fielmente con `DESIGN_1.md`:

*   **Paleta de Colores:**
    *   Fondo/Superficie base: Deep Dark (`#101319`).
    *   Acento Primario (Kinetic Blue): `#bbc3ff`. Usar para CTAs primarios, bordes de enfoque, resplandores e iconos destacados.
    *   Texto principal: `#e1e2ea`.
    *   Superficie de Tarjetas: Estilo translúcido glassmorphic (`rgba(25, 28, 34, 0.6)`) con borde sutil (`rgba(255, 255, 255, 0.1)`) y filtro blur de fondo (`backdrop-filter: blur(10px)`).
*   **Tipografía:**
    *   Fuente exclusiva: **Montserrat**.
    *   Titulares principales: ExtraBold (800) o Black (900). Para el Hero, aplicar un interlineado ajustado y espaciado de letras ligeramente negativo.
    *   Cuerpo del texto: Peso regular o medium con interlineado generoso (`line-height: 1.6`) para legibilidad óptima sobre fondo oscuro.
*   **Formas y Bordes:**
    *   Tarjetas y botones estándar: `rounded-lg` (1rem).
    *   Imágenes y assets de portafolio: `rounded-xl` (1.5rem).

---

## 4. Lineamientos de Desarrollo y Buenas Prácticas
*   **Reactividad en Angular 21:** Utilizar **Signals** (`signal`, `computed`, `effect`) en lugar de RxJS clásico siempre que sea posible para estados locales (ej. aperturas de menú, estados de formularios).
*   **Saneamiento de Estilos:**
    *   Asegurar la consistencia entre las clases utilitarias de Tailwind y las hojas de estilo SCSS locales.
    *   No duplicar estilos. Limpiar `app.scss` y `home.component.scss` para eliminar clases obsoletas o que colisionen.
*   **Interactividad y Micro-interacciones:**
    *   **Efecto Hover en Botón Primario:** Sombras difusas estilo resplandor en Kinetic Blue e incremento suave de brillo en 10%.
    *   **Efecto Hover en Logofolio:** Pasar de escala de grises y 50% de opacidad (`grayscale opacity-50`) a color/blanco al 100% de forma progresiva.
    *   **Inputs del Formulario:** Borde Kinetic Blue brillante durante el foco (`focus:border-[#bbc3ff]`).
*   **Testing y Calidad:**
    *   Ejecutar pruebas unitarias mediante Vitest (`ng test`).
    *   Ejecutar pruebas de extremo a extremo mediante Playwright (`ng e2e`).
    *   Asegurar que el compilador de TypeScript no arroje advertencias con tipado `any` implícito.
