---
name: Artisan Equine Modernism
colors:
  surface: '#fcf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444840'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#75786f'
  outline-variant: '#c5c8bd'
  surface-tint: '#526445'
  primary: '#1e2e14'
  on-primary: '#ffffff'
  primary-container: '#334428'
  on-primary-container: '#9db18d'
  inverse-primary: '#b8cda7'
  secondary: '#6b5c4c'
  on-secondary: '#ffffff'
  secondary-container: '#f1dcc8'
  on-secondary-container: '#6f6050'
  tertiary: '#33271a'
  on-tertiary: '#ffffff'
  tertiary-container: '#4a3d2f'
  on-tertiary-container: '#baa895'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e9c2'
  primary-fixed-dim: '#b8cda7'
  on-primary-fixed: '#101f07'
  on-primary-fixed-variant: '#3a4c2f'
  secondary-fixed: '#f4dfcb'
  secondary-fixed-dim: '#d7c3b0'
  on-secondary-fixed: '#241a0d'
  on-secondary-fixed-variant: '#524435'
  tertiary-fixed: '#f4dfcb'
  tertiary-fixed-dim: '#d7c3b0'
  on-tertiary-fixed: '#241a0d'
  on-tertiary-fixed-variant: '#524436'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
  stitch-color: '#d7c3b0'
  success-green: '#334428'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  container-max: 1280px
  section-padding: 96px
---

## Brand & Style
The brand identity is rooted in **Modern Artisanry**—a fusion of heritage craftsmanship and contemporary minimalism. It targets a high-end audience that values sustainability, intentionality, and the tactile history of leather. 

The visual style is **Tactile Minimalism**. It utilizes generous whitespace, editorial-grade photography, and physical metaphors (like "stitch" dividers) to create a gallery-like experience. The emotional response is one of quiet luxury, reliability, and warmth. The design avoids digital-first tropes, opting instead for a "printed look" that feels established yet fresh.

## Colors
The palette is deeply organic, inspired by forest floors and tanned hides. 
- **Primary (Deep Forest):** Used for headlines and primary actions, providing a sophisticated alternative to black.
- **Secondary (Chestnut):** Used for accents, subtext, and decorative elements to ground the design in leather tones.
- **Surface (Parchment):** A warm, off-white base (`#fcf9f8`) that prevents the "coldness" of pure white.
- **Tones:** Extensive use of `surface-container` variations creates soft, low-contrast section breaks that mimic different weights of paper or fabric.

## Typography
The typography strategy employs a "High-Low" mix:
- **Serif Dominance:** Both `Bodoni Moda` (High-contrast, elegant) and `Source Serif 4` (sturdy, readable) are used for most of the interface, including primary navigation and body copy, to reinforce the "literary" and "heritage" feel.
- **Functional Sans:** `Hanken Grotesk` is reserved strictly for utility roles—labels, tags, and buttons—providing a sharp, modern contrast to the flowing serifs.
- **Rhythm:** Generous line-heights are essential for the editorial feel. Headlines should use tight tracking to maintain a strong visual "block."

## Layout & Spacing
The system follows a **Fixed-Width Centered Grid** on desktop and a **Fluid Margin Grid** on mobile.

- **Desktop:** 12-column grid within a `1280px` container. Sections use aggressive vertical padding (`96px` to `128px`) to allow the photography to "breathe."
- **Mobile:** Single column with `20px` side margins. 
- **Asymmetry:** Occasional "staggered" layouts (e.g., product images with varying top margins) should be used to mimic the layout of a physical boutique catalog.

## Elevation & Depth
The system avoids heavy drop shadows or neomorphism. Depth is achieved through:
- **Tonal Layering:** Using slightly darker surface colors (`surface-container-low`) for full-width sections to create horizontal "stratification."
- **Ambient Shadows:** Very diffused, low-opacity shadows (`rgba(0, 0, 0, 0.05)`) are applied to images and cards to make them feel like objects resting on a desk rather than digital elements floating in space.
- **Physical Borders:** High-contrast borders (e.g., 4px or 8px white/surface frames around images) emulate printed photography or framed art.

## Shapes
The shape language is **predominantly rectangular** to reflect the cut of leather hides.
- **Base Corner Radius:** `0.125rem` (2px) for a "nearly-sharp" look that feels precise and architectural.
- **Component Radius:** Buttons and input fields use `0.25rem` (4px) to provide just enough softness for touch interaction without breaking the rigid artisan aesthetic.
- **Full Rounds:** Only used for "status" elements or specific iconography (pill-shaped tags).

## Components
- **Buttons:** Solid `primary` color with `on-primary` text. No gradients. Transitions should be slow (300ms) to feel deliberate.
- **Input Fields:** "Underline" style only. No surrounding boxes. On focus, the bottom border transitions from `secondary` to `primary`.
- **Stitch Dividers:** A specific brand element—a horizontal line in `secondary-fixed-dim` (2px height) used to frame uppercase labels.
- **Cards/Product Frames:** Use `ambient-shadow` and `aspect-[3/4]` ratios. Images should have a `scale-105` hover effect to suggest tactile exploration.
- **Navigation:** Top-tier items use `border-b-2` for active states, emphasizing the horizontal line-work found throughout the system.