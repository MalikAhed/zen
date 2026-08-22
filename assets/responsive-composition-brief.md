# Responsive composition brief

## Direction

- **Archetype:** center-stage hero transitioning into editorial content grids.
- **Hierarchy:** live service promise, primary estimate CTA, cleaning-product subject, botanical framing.
- **Art layers:** CSS/photographic background, soft contrast wash, two decorative plant layers, one meaningful product image, live DOM copy and controls.
- **Visual mode:** 2D. The composition uses responsive images and CSS layers; 3D would add weight without improving the service story.

## Responsive states

- **Narrow and standard portrait:** two-line headline, stacked CTA, compact mobile menu, smaller product subject, restrained edge plants, taller scroll-safe hero.
- **Landscape phone / short viewport:** compact header and type, reduced subject size, hidden secondary trust line, minimum hero height so content remains readable.
- **Tablet:** mobile navigation with balanced center-stage hero; service cards become two columns and trust cards become a vertical editorial stack.
- **Desktop:** full navigation, center-stage title/product relationship, three service columns, asymmetric trust grid.
- **Ultrawide:** capped live content and central focal area, with plants anchored to a maximum scene width.

## Assets

The hero background is an abstract, low-detail plate with a central clear zone, so one source remains crop-safe across wide, tablet, and portrait states. CSS focal positioning and overlays adapt it without loading duplicate art-directed files. Product and plant cutouts remain independent layers. Below-the-fold photos use deliberate per-card cropping.

## Accessibility and motion

All essential information and controls remain live HTML. Decorative plants use empty alternative text and ignore pointer input. Reveal motion is progressive enhancement and becomes a stable, visible state under `prefers-reduced-motion: reduce`.
