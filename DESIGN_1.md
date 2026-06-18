---
name: Midnight Kinetic
colors:
  surface: '#101319'
  surface-dim: '#101319'
  surface-bright: '#363940'
  surface-container-lowest: '#0b0e14'
  surface-container-low: '#191c22'
  surface-container: '#1d2026'
  surface-container-high: '#272a30'
  surface-container-highest: '#32353b'
  on-surface: '#e1e2ea'
  on-surface-variant: '#c5c5d9'
  inverse-surface: '#e1e2ea'
  inverse-on-surface: '#2d3037'
  outline: '#8e8fa2'
  outline-variant: '#444656'
  surface-tint: '#bbc3ff'
  primary: '#bbc3ff'
  on-primary: '#001b97'
  primary-container: '#2d4bff'
  on-primary-container: '#dee0ff'
  inverse-primary: '#2343f9'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c6c6cc'
  on-tertiary: '#2f3035'
  tertiary-container: '#636469'
  on-tertiary-container: '#e1e1e7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bbc3ff'
  on-primary-fixed: '#000d5f'
  on-primary-fixed-variant: '#0029d2'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2e2e8'
  tertiary-fixed-dim: '#c6c6cc'
  on-tertiary-fixed: '#1a1c20'
  on-tertiary-fixed-variant: '#45474b'
  background: '#101319'
  on-background: '#e1e2ea'
  surface-variant: '#32353b'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  margin-mobile: 1rem
  section-padding: 5rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 3rem
---

## Brand & Style
The design system is built on a foundation of high-contrast professionalism and creative energy. It targets forward-thinking businesses looking to "defy the common" through bold, strategic design. The visual identity balances the mystery and depth of a dark palette with the high-octane energy of electric blue accents.

The style is **Corporate Modern** with **Glassmorphic** influences. It utilizes deep tonal layers and subtle gradients to create an immersive, premium environment. This design system evokes a sense of technical mastery, innovation, and unwavering confidence.

## Colors
The palette is dominated by deep, rich blacks and grays to provide a sophisticated backdrop for creative content.
- **Primary:** An electric "Kinetic Blue" used sparingly for high-impact calls to action, focus states, and primary accents.
- **Secondary:** Pure white, reserved primarily for high-contrast typography and iconography to ensure maximum legibility against dark backgrounds.
- **Neutral/Background:** A multi-layered dark scheme. `#0F1115` serves as the base canvas, while `#1A1D23` is used for surface containers and elevated cards.
- **Gradients:** Subtle radial glows in the primary blue are used in hero sections and behind key elements to simulate "shimmer" and light-leaks, creating depth.

## Typography
The system relies on a single, powerful Sans-Serif family: **Montserrat**. This typeface was chosen for its geometric precision and its ability to feel both friendly and authoritative.

- **Headlines:** Use ExtraBold or Black weights. Headlines should feel massive and unavoidable. For "Hero" sections, use negative letter spacing to create a tight, architectural look.
- **Body:** Use Medium or Regular weights with generous line heights (1.6x) to ensure readability against dark backgrounds.
- **Accents:** Use uppercase labels with increased tracking for navigation and secondary tags to provide a distinct visual rhythm.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a maximum container width of 1280px for desktop.

- **Grid:** Use a 12-column grid for desktop, transitioning to 4 columns for mobile.
- **Rhythm:** Spacing is generous to allow the bold typography and high-impact visuals to breathe. Section vertical padding should be aggressive (at least 80px-120px) to maintain the premium, "agencia" feel.
- **Alignment:** Center-alignment is preferred for hero and introductory sections to evoke a sense of balance and focus.

## Shapes
Shapes are modern and approachable but maintain a professional edge.
- **Buttons and Cards:** Use `rounded-lg` (1rem) as the standard.
- **Images:** All service or portfolio images should feature consistent `rounded-xl` (1.5rem) corners to soften the high-contrast aesthetic.
- **Icons:** Enclosed within rounded-square containers with a 20% opacity background of the primary blue.

## Components
- **Primary Button:** Solid Kinetic Blue background, white bold text, `rounded-lg`. On hover, apply a subtle glow effect and increase brightness by 10%.
- **Secondary Button:** Transparent background with a 2px white border or a subtle dark-gray fill.
- **Service Cards:** Use a subtle gradient background or a thin 1px border (`#FFFFFF` at 10% opacity). Images inside cards should occupy the top half with no padding to the edges.
- **Inputs:** Darker background than the container (`#0A0C10`), with a 1px border that glows Kinetic Blue on focus.
- **Logofolio:** Display client logos in grayscale with 50% opacity, shifting to full white on hover to ensure the agency's own brand remains the focal point.