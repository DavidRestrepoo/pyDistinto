# Informe de Análisis del Proyecto: pyDistinto

Este informe detalla el estado actual del proyecto de la landing page de **"Distinto - Agencia de Performance"**, el sistema de diseño establecido en `DESIGN_1.md`, el caos actual en el sistema de estilos híbridos y la identificación de las secciones ("sesiones") de la página.

---

## 1. Identificación de Sesiones (Secciones) de la Página

Al analizar el archivo de plantilla principal [home.component.html](file:///c:/Users/DERO/Documents/pyDistinto/src/app/pages/home/home.component.html) y su hoja de estilos correspondiente [home.component.scss](file:///c:/Users/DERO/Documents/pyDistinto/src/app/pages/home/home.component.scss), la landing page está estructurada y delimitada explícitamente en **12 sesiones (secciones)** mediante clases CSS (`session-1` a `session-12`) y comentarios de HTML. 

A continuación se detalla cada una de ellas:

| # | Sesión (Clase/Comentario) | Descripción y Componentes |
|---|---|---|
| **1** | `session-1`<br>`<!-- Session 1: Main Horizontal Menu -->` | **Menú de Navegación Principal:** Contiene el logo de la agencia, menú tipo hamburguesa dinámico para dispositivos móviles, enlaces directos a las secciones de la página (`#inicio`, `#nosotros`, `#servicios`) y un botón de llamada a la acción (CTA) con el texto "¡HABLEMOS!". |
| **2** | `session-2`<br>`<!-- Session 2: Hero -->` | **Sección Principal (Hero):** Presenta un badge que define el público objetivo de la agencia ("Agencia de performance · Clínicas estéticas y odontológicas"), el titular principal de la propuesta de valor, un subtítulo descriptivo y dos botones de acción primario ("Quiero mi sistema") y secundario ("Ver casos de éxito"). |
| **3** | `session-3`<br>`<!-- Session 3 -->` | **Carrusel de Marcas Aliadas:** Un carrusel horizontal con animación infinita (`marquee`) que desliza los logotipos de clientes/marcas aliadas en bucle continuo. |
| **4** | `session-4`<br>`<!-- Session 4: Quiénes Somos -->` | **Quiénes Somos ("¡Somos Distinto!"):** Sección institucional con un badge y textos descriptivos con alta jerarquía tipográfica para explicar el enfoque de la agencia en embudos de ventas y adquisición para clínicas. |
| **5** | `session-5`<br>`<!-- Session 5 -->` | **Problemas Comunes / Puntos de Dolor:** Título de concientización ("Tu pauta genera conversaciones, pero no llena tu agenda") con una rejilla de 4 tarjetas (`pain-card`) que abordan los problemas más frecuentes de las clínicas (Leads sin intención, huecos en agenda, pauta sin retorno claro y dependencia de referidos). |
| **6** | `session-6`<br>`<!-- Session 6: La Solución -->` | **La Solución en Pasos:** Muestra tres tarjetas interactivas (`solution-card`) correspondientes al sistema propuesto: Oferta optimizada (Paso 01), Sistema de adquisición en 3 capas (Paso 02) y Optimización continua (Paso 03). |
| **7** | `session-7`<br>`<!-- Session 7: Nuestros Servicios -->` | **Catálogo de Servicios:** Cuadrícula de 6 tarjetas (`s7-card`) que detallan los servicios específicos (Meta Ads, Landings de conversión, Agente de IA en WhatsApp, Creatividades, Reportes y Proceso de cierre). |
| **8** | `session-8`<br>`<!-- Session 8: Lo Que Incluye -->` | **Detalle del Paquete / Sprint de 90 Días:** Panel explicativo con estilo checklist de las tareas y entregables de implementación que realiza la agencia. |
| **9** | `session-9`<br>`<!-- Session 9: Casos de Éxito -->` | **Casos de Éxito y Resultados Reales:** Rejilla de tarjetas (`s9-card`) mostrando métricas destacadas y logos de clientes reales como Safer Agrobiológicos, American Wolf y Bosanet. |
| **10** | `session-10`<br>`<!-- Session 10: Form -->` | **Formulario de Contacto Interactivo:** Un formulario de captación detallado con inputs y selectores dropdown diseñados para calificar el lead según industria, presupuesto de anuncios, facturación y tiempo de inicio estimado. |
| **11** | `session-11`<br>`<!-- Session 11: Portfolio + Footer -->` | **Logofolio:** Grid de logotipos de clientes de portafolio para demostrar autoridad y prueba social. |
| **12** | `session-12`<br>`<!-- Session 12: Premium Footer -->` | **Footer Premium:** Cierre de la página con el logo, enlaces a redes sociales (Instagram, Facebook, TikTok) representados con iconos SVG, botón CTA, derechos de autor y políticas de privacidad/términos legales. |

---

## 2. Consolidación del Sistema de Estilos

Actualmente, el proyecto experimenta un sistema híbrido/duplicado que necesita saneamiento:
* **Tailwind CDN:** Cargado en [index.html](file:///c:/Users/DERO/Documents/pyDistinto/src/index.html) con configuraciones en línea (`tailwind.config`) de colores, bordes y tipografías personalizadas.
* **Hojas SCSS Complejas:**
  * [app.scss](file:///c:/Users/DERO/Documents/pyDistinto/src/app/app.scss) de más de 500 líneas con clases generales y remanentes de estilos heredados de fuentes de prueba (`Space Grotesk`, colores anteriores).
  * [home.component.scss](file:///c:/Users/DERO/Documents/pyDistinto/src/app/pages/home/home.component.scss) de más de 2000 líneas que compiten directamente con las clases utilitarias de Tailwind aplicadas en el HTML.

### Opciones de Solución:
1. **Opción A (Recomendada):** Configurar formalmente Tailwind CSS en la cadena de compilación de Angular (mediante `@tailwindcss/postcss` o similar en la compilación integrada), eliminando la carga por CDN de `index.html`. Toda la configuración de tokens de diseño se migraría al archivo de configuración de Tailwind y las utilidades SCSS se integrarían mediante `@apply` o usando clases puras de Tailwind en las plantillas.
2. **Opción B:** Limpiar minuciosamente `home.component.scss` y `app.scss` de clases obsoletas que colisionen con las utilidades de Tailwind cargadas desde el CDN, delegando el peso de los estilos al CDN configurado.

---

## 3. Alineación con el Sistema de Diseño (Midnight Kinetic)

De acuerdo con `DESIGN_1.md`, el frontend debe ajustarse estrictamente a las siguientes directrices:
* **Paleta de Colores:** Base oscura profunda (`#101319` o similar) con Kinetic Blue (`#bbc3ff`) como acento eléctrico primario para botones, bordes activos y efectos de foco.
* **Tipografía:** Montserrat como la fuente única de la landing, con un interlineado generoso (1.6) en el cuerpo del texto y titulares masivos con pesos ExtraBold o Black.
* **Diseño Glassmorphic:** Tarjetas con fondos translúcidos (`rgba(25, 28, 34, 0.6)`), bordes sutiles semitransparentes (`rgba(255, 255, 255, 0.1)`) y desenfoque por hardware (`backdrop-filter: blur(10px)`).

---

## 4. Interactividad Requerida (Micro-interacciones)

Se identifican las siguientes interacciones clave por implementar o refinar:
1. **Menú Móvil:** Operar fluidamente mediante la señal de Angular `isMobileMenuOpen()`, aplicando transiciones CSS suaves para su visibilidad.
2. **Efecto Hover en Logofolio:** Transición gradual desde escala de grises al 50% de opacidad (`grayscale opacity-50`) a color/blanco con 100% de opacidad al pasar el cursor.
3. **Marquee Continuo (Sesión 3):** Optimizar la animación `client-strip-track` para eliminar saltos en el bucle infinito.
4. **Resplandor de Botones:** Sombra difusa Kinetic Blue (`box-shadow`) y aumento del 10% de brillo al hacer hover sobre los botones primarios.
5. **Formulario de Contacto:** Vinculación interactiva de inputs en Angular con feedback visual instantáneo (borde azul brillante en focus), simulación del envío (loading/success/error) utilizando Signals y el servicio `HomeService`.
