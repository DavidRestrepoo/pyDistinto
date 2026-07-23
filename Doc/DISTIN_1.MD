# Distinto Agencia — Metadata / SEO y Keywords (solo backend)

**Propósito:** instrucciones y parámetros para que el agente del proyecto implemente SEO técnico (metadata, schema, keywords) en **www.distintoagencia.com** orientado a posicionamiento orgánico en Google.

**Sitio en alcance:** únicamente `www.distintoagencia.com` (home). **Se excluye `/landing`** de este trabajo.
**Fecha de análisis:** 2026-07-22
**Vigencia recomendada:** revisar cada 3 meses (cambios de tráfico/algoritmo)

---

## 0. Regla no negociable: SOLO CÓDIGO / BACKEND, CERO CAMBIOS VISIBLES

**No se toca nada que el visitante vea al navegar el sitio.** Este trabajo es 100% invisible para el usuario final — vive en el `<head>` del HTML, en atributos de código y en archivos de configuración. Nada de lo siguiente se modifica: textos, encabezados, botones, formularios, imágenes, orden de secciones, menú de navegación. **No se crean páginas nuevas ni se agrega copy nuevo visible en el sitio.**

### ✅ Sí se puede tocar (código/backend, invisible en pantalla)

| Elemento | Por qué es "invisible" |
|---|---|
| `<title>` del `<head>` | No aparece en el cuerpo de la página; se ve en la pestaña del navegador y en el resultado de Google |
| `<meta name="description">` | No se renderiza en la página; solo aparece como snippet en resultados de Google |
| `<meta name="keywords">` (si aplica) | Metadato interno, no se muestra en pantalla |
| Open Graph / Twitter Card (`og:title`, `og:description`, `og:image`) | Viven en el `<head>`; solo se ven al compartir el link en redes/WhatsApp, no al navegar el sitio |
| JSON-LD / Schema.org (Organization, ProfessionalService, LocalBusiness) | Datos estructurados, invisibles; solo los leen los buscadores |
| Atributo `alt` de imágenes ya existentes | No se muestra en pantalla; lo leen buscadores y lectores de accesibilidad |
| Atributo `title` de enlaces (tooltip) | No visible salvo hover, no es contenido de la página |
| `canonical`, `hreflang` | Metadatos de indexación, invisibles |
| `robots.txt`, `sitemap.xml` | Archivos de configuración, no forman parte del sitio visible |
| Google Search Console / Google Business Profile | Herramientas externas, no tocan el código ni el diseño del sitio |

### 🚫 Nunca se toca

- Títulos (H1/H2/H3), párrafos, textos de botones y formularios visibles en pantalla
- Imágenes, logos, fotos de casos de éxito
- Estructura de menú, navegación o footer visibles
- Creación de páginas nuevas con contenido/copy visible (ej. no se crea un blog ni landing por ciudad)
- Cualquier elemento que cambie lo que el cliente/visitante ve al entrar al sitio

---

## 1. Contexto de negocio (extraído del sitio, solo para orientar las keywords — no se reescribe nada de esto)

- **Nombre:** Distinto Agencia Creativa
- **Ubicación base:** Medellín, Colombia
- **Categoría:** Agencia de performance / marketing digital especializada
- **Nicho (vertical objetivo):** clínicas estéticas y consultorios/clínicas odontológicas
- **Países objetivo:** Colombia, México, Ecuador, Estados Unidos (mercado hispano/latino)

### Propuesta de valor central (referencia, no se edita)

"Sistema de adquisición de pacientes de alto valor" en un sprint de 90 días, con 3 fases: diagnóstico y reestructuración de oferta; Meta Ads precalificados + landing con formulario de calificación + agente de IA en WhatsApp; reportes semanales y optimización continua.

### Servicios detectados (para orientar qué keywords priorizar en metadata)

- Meta Ads precalificados (Facebook e Instagram Ads para clínicas)
- Landing page de conversión con formulario de calificación de leads
- Agente de IA en WhatsApp (calificación y agendamiento automático 24/7)
- Creatividad publicitaria (anuncios, landing, WhatsApp)
- Reportes y optimización (dashboards, costo por lead/agendamiento/paciente)
- Proceso de cierre comercial

### Dolores del cliente ideal (para elegir keywords informacionales de metadata, no para crear contenido nuevo)

- Leads o mensajes de WhatsApp sin intención real de comprar
- Agenda con ausencias / pacientes que no asisten (no-shows)
- Inversión en Meta Ads sin retorno claro
- Dependencia total de referidos / boca a boca

### Público objetivo (buyer persona)

- Dueños, directores y administradores de clínicas estéticas y odontológicas
- Presupuesto mensual de pauta: desde <$300 USD hasta +$1.500 USD/mes
- Facturación mensual de la clínica: desde <$3.000 hasta +$10.000 USD/mes

### Diagnóstico SEO técnico actual del sitio

- El sitio **no tiene** meta title ni meta description personalizados (solo title genérico "Distinto | Agencia Creativa" y viewport tag).
- No se detectó meta keywords, ni Open Graph, ni structured data (schema.org).
- Oportunidad: todo el trabajo de metadata parte de cero. Se implementa por primera vez, no se corrige nada existente que sea visible.

---

## 2. Metadata técnica a implementar en www.distintoagencia.com (única página en alcance)

**Reglas generales:**

- Title: 50-60 caracteres, marca al final, keyword principal al inicio.
- Description: 140-160 caracteres, incluir keyword + beneficio + CTA.
- Todo esto se implementa en el `<head>` del HTML — no se toca el H1 visible ni ningún texto del `<body>`.

**`<title>` sugerido:**
`Agencia de Marketing para Clínicas Estéticas y Odontológicas | Distinto`

**`<meta name="description">` sugerida:**
`Sistema de captación de pacientes con Meta Ads, landing pages y agente IA en WhatsApp. Agenda pacientes calificados en 90 días. Colombia, México, Ecuador y EE.UU.`

**`<meta name="keywords">` sugerida (opcional, bajo impacto real en Google pero inocua):**
`agencia de marketing para clínicas estéticas, marketing para clínicas odontológicas, meta ads para clínicas, agente de ia whatsapp clínicas, leads calificados clínica dental`

**Open Graph / Twitter Card sugeridos:**
- `og:title`: igual al `<title>`
- `og:description`: igual al meta description
- `og:image`: usar el logo o una imagen ya existente del sitio (no crear una nueva imagen visible)
- `og:locale`: `es_CO` (o alternar según campaña: es_MX, es_EC, en_US)

---

## 3. Keywords objetivo (para usar SOLO en metadata, schema y atributos alt — nunca en el copy visible)

> Dueños/administradores de clínicas buscan en 3 capas de intención — informacional, comparativa y transaccional. Prioridad de vertical: **peso igual entre estética y odontología.**

### 3.1 Keywords transaccionales (van en title/description/schema)

- agencia de marketing para clínicas estéticas
- agencia de marketing para clínicas dentales / odontológicas
- marketing digital para clínicas estéticas
- marketing digital para consultorios odontológicos
- cómo conseguir pacientes para mi clínica estética
- cómo conseguir pacientes para mi clínica dental
- agencia de performance para clínicas
- Meta Ads para clínicas estéticas
- Meta Ads para dentistas / clínicas dentales
- agente de IA para WhatsApp clínicas
- automatizar agendamiento de citas clínica dental/estética
- leads calificados para clínicas estéticas / dentales
- sistema de captación de pacientes
- cuánto cuesta una campaña de Meta Ads para clínica estética/dental
- agencia de publicidad para médicos estéticos
- agencia de marketing para odontólogos

Con ciudad (patrón `[keyword] en [ciudad]`; usar en variantes de meta description por campaña, en `areaServed` del schema, o en `alt` de imágenes ya existentes — nunca en el copy visible de la página):

- agencia de marketing para clínicas estéticas en [ciudad]
- marketing para consultorios odontológicos en [ciudad]
- Meta Ads para clínicas dentales en [ciudad]

### 3.2 Keywords comparativas (para variantes de meta description en pruebas A/B de snippet de Google, no para contenido nuevo)

- mejor agencia de marketing para clínicas estéticas
- mejor agencia de marketing dental
- Meta Ads vs Google Ads para clínicas estéticas
- cómo elegir agencia de marketing para mi clínica

### 3.3 Keywords informacionales (para `alt` text de imágenes existentes y metadatos, no para crear blog)

- por qué mi pauta en Meta Ads no llena mi agenda
- cómo calificar leads de WhatsApp para mi clínica
- cómo reducir inasistencias / no-shows en citas médicas
- cómo saber el costo real por paciente en marketing digital
- cómo dejar de depender de referidos en mi clínica
- KPIs de marketing para clínicas (costo por lead, por agendamiento, por paciente)

> Nota: en un proyecto de SEO normal estas keywords informacionales alimentarían un blog. Como el alcance actual prohíbe agregar contenido visible nuevo, quedan documentadas aquí como **banco de keywords para una futura fase de contenido**, si el cliente decide habilitar cambios visibles más adelante.

### 3.4 Keywords "cerca de mí" / locales (para schema `LocalBusiness`/`areaServed`, no para texto visible)

- agencia de marketing para clínicas cerca de mí
- consultorio odontológico marketing digital [ciudad]
- clínica estética publicidad Facebook Instagram [ciudad]

---

## 4. Ciudades prioritarias por país (uso: schema `areaServed`, variantes de meta description, hreflang — no en el copy visible)

**Colombia:** Bogotá, Medellín, Cali, Barranquilla, Bucaramanga, Cartagena, Pereira, Manizales, Santa Marta, Cúcuta

**México:** Ciudad de México, Monterrey, Guadalajara, Puebla, Tijuana, León, Mérida, Querétaro, Cancún, San Luis Potosí

**Ecuador:** Guayaquil, Quito, Cuenca, Santo Domingo, Machala, Durán, Manta, Portoviejo, Ambato, Riobamba

**Estados Unidos** (ciudades con mayor población latina/hispana): Miami, Orlando, Tampa, Hialeah, Houston, Dallas, San Antonio, El Paso, Los Ángeles, San Diego, San Jose, Nueva York, Chicago, Newark, Jersey City

*Agrupación por región para priorizar en schema/segmentación:*
- Florida: Miami / Orlando / Tampa / Hialeah
- Texas: Houston / Dallas / San Antonio / El Paso
- California: Los Ángeles / San Diego / San Jose
- Noreste: Nueva York / Newark / Jersey City
- Medio Oeste: Chicago

---

## 5. Schema / datos estructurados (JSON-LD — 100% invisible, se inserta en el `<head>` o antes del `</body>` sin renderizar nada)

- Tipo: `Organization` + `ProfessionalService`
- Incluir: `name`, `url`, `logo`, `sameAs` (Instagram, Facebook, TikTok ya existentes en el footer), `areaServed`: ["Colombia", "México", "Ecuador", "Estados Unidos"] con las ciudades de la sección 4 como sub-listado.
- No agregar `FAQPage` schema (requeriría una sección visible de preguntas frecuentes que hoy no existe — fuera de alcance por la regla 0).

---

## 6. Otros elementos técnicos (backend, sin impacto visible)

- **`robots.txt`**: verificar que permita rastreo de `www.distintoagencia.com` (excluir `/landing` de indexación si se quiere mantener esa página fuera de este esfuerzo SEO, usando `noindex` en su meta robots).
- **`sitemap.xml`**: incluir `www.distintoagencia.com` con prioridad alta.
- **`canonical`**: `<link rel="canonical" href="https://www.distintoagencia.com/">` para evitar duplicidad con `/home`.
- **`hreflang`** (opcional si se segmenta por país en el futuro sin crear páginas nuevas): no aplica todavía porque no hay URLs por país; queda documentado para cuando se habilite esa fase.
- **Google Search Console**: verificar propiedad y enviar sitemap actualizado.
- **Google Business Profile**: completar/verificar ficha de Distinto (categoría: agencia de marketing, área de servicio: los 4 países) — esto vive fuera del sitio web, no representa ningún cambio visible en el código del sitio.

---

## 7. Instrucciones directas para el agente del proyecto

1. Implementar `<title>` y `<meta name="description">` en `www.distintoagencia.com` usando los textos de la sección 2 — **solo en el `<head>`, sin tocar ningún texto del `<body>`**.
2. Agregar Open Graph + Twitter Card tags básicos (sección 2) — invisibles al navegar el sitio.
3. Insertar JSON-LD de Organization/ProfessionalService (sección 5) antes de `</body>` o en el `<head>`, sin generar ningún elemento visual.
4. Revisar y, si aplica, completar atributos `alt` de imágenes **ya existentes** con las keywords informacionales/locales de la sección 3 — sin cambiar la imagen ni agregar imágenes nuevas.
5. Configurar `canonical` y revisar `robots.txt`/`sitemap.xml` (sección 6).
6. Verificar/completar Google Search Console y Google Business Profile (fuera del código del sitio).
7. **No crear páginas nuevas, no modificar textos, títulos, botones, formularios ni imágenes visibles. Cualquier cambio debe ser verificable únicamente viendo el código fuente (`Ver código fuente` / DevTools), nunca al navegar el sitio normalmente.**
8. Revisar cada 3 meses el rendimiento de estas keywords en Search Console y ajustar el `<title>`/`<meta description>` según posiciones/impresiones reales (sigue siendo un cambio de código, no de contenido visible).

---

## 8. Fuentes de referencia (research de mercado, no del sitio propio)

- [conseguirpacientes.com](https://conseguirpacientes.com/)
- [imparables.agency/seo-clinicas-esteticas](https://imparables.agency/seo-clinicas-esteticas/)
- [esteticaconseo.com](https://esteticaconseo.com/)
- [loscreativos.co/posicionamiento-seo](https://loscreativos.co/posicionamiento-seo/)
- [medesk.net — marketing para odontólogos](https://www.medesk.net/es/blog/marketing-para-odontologos/)
- [gamiria.com — conseguir nuevos pacientes clínica dental](https://gamiria.com/marketing-digital/conseguir-nuevos-pacientes-clinica-dental/)
- [apsteq.com/dental-marketing](https://apsteq.com/dental-marketing/)
- [dently.ai](https://dently.ai/)
