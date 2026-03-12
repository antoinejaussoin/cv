---
name: frontend-ux-ui
description: "Frontend, UX, and UI design skill for React/TypeScript projects. Use when: building UI components, improving user experience, fixing layout or responsive issues, styling with CSS, creating accessible interfaces, designing interactions, reviewing visual design, working on animations or transitions, optimizing for mobile, implementing design systems or themes, print stylesheets, responsive images."
---

# Frontend / UX / UI Skill

Expert guidance for building polished, accessible, and responsive user interfaces in React + TypeScript projects with plain CSS architecture.

## When to Use

- Designing or refactoring UI components
- Fixing layout, spacing, or responsive breakpoints
- Improving accessibility (a11y)
- Reviewing or improving visual design quality
- Adding animations, transitions, or micro-interactions
- Implementing dark mode, theming, or skin systems
- Optimizing for mobile, tablet, and print
- Creating forms with good UX patterns
- Performance-optimizing rendering and images

## Core Principles

### 1. Visual Hierarchy & Typography

- Establish a clear typographic scale (use consistent heading sizes, line-heights, font weights)
- Maintain a vertical rhythm — spacing between elements should follow a consistent base unit (e.g., 4px or 8px grid)
- Use color contrast ratios that meet WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text)
- Limit the number of font families (max 2–3) and weights for visual coherence
- Headings should visually separate sections — use size, weight, and whitespace, not just color

### 2. Layout & Spacing

- Use CSS Flexbox for 1D layouts, CSS Grid for 2D layouts
- Avoid magic numbers — define spacing tokens (`--space-xs: 4px`, `--space-sm: 8px`, `--space-md: 16px`, etc.)
- Content should breathe — use generous whitespace around sections and between elements
- Max content width of ~70ch for readability in text-heavy sections
- Align elements to a consistent grid — avoid arbitrary left/right offsets

### 3. Responsive Design

- Mobile-first approach: write base styles for small screens, layer up with `min-width` media queries
- Key breakpoints: 480px (phone), 768px (tablet), 1024px (desktop), 1200px+ (wide)
- Never hide critical content on mobile — restructure or reflow instead
- Touch targets should be minimum 44×44px on mobile
- Test with real device viewports, not just resizing the browser

### 4. Color & Theming

- Define colors as CSS custom properties for easy theming
- Every color should serve a purpose: primary, secondary, accent, surface, text, muted
- Ensure sufficient contrast on every background — check with devtools or axe
- Provide a system for color skins or themes using CSS custom properties at `:root`
- Avoid pure black (#000) on white (#fff) — use soft blacks (#1a1a1a, #333) for less visual strain

### 5. Component Design Patterns

- Components should be small, focused, and composable
- Separate presentational components (how it looks) from container components (what data it uses)
- Use TypeScript interfaces for all component props — explicit is better than implicit
- Prefer `children` prop or render props for flexible composition
- Avoid inline styles — use CSS classes or CSS custom properties
- Keep component-specific CSS co-located (same directory or CSS module)

### 6. Accessibility (a11y)

- Use semantic HTML: `<main>`, `<nav>`, `<article>`, `<section>`, `<aside>`, `<header>`, `<footer>`
- Every `<img>` needs a meaningful `alt` (or `alt=""` for decorative images)
- Interactive elements must be keyboard-navigable (Tab, Enter, Escape, Arrow keys)
- Use ARIA attributes only when semantic HTML isn't enough — don't over-ARIA
- Form inputs must have associated `<label>` elements
- Focus states must be visible — never `outline: none` without a replacement
- Color should never be the only means of conveying information
- Test with screen reader (VoiceOver on macOS: Cmd+F5)

### 7. Animations & Transitions

- Use CSS transitions for state changes (hover, focus, expand/collapse)
- Keep durations short: 150–300ms for micro-interactions, 300–500ms for layout shifts
- Use appropriate easing: `ease-out` for entrances, `ease-in` for exits, `ease-in-out` for moves
- Respect `prefers-reduced-motion` — disable or minimize animations for users who request it:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```
- Avoid layout-triggering animations (prefer `transform` and `opacity` which are GPU-composited)

### 8. Images & Media

- Use responsive images: `srcSet` + `sizes` attributes for resolution switching
- Provide WebP/AVIF formats with `<picture>` fallback
- Lazy-load below-the-fold images (`loading="lazy"`)
- Set explicit `width` and `height` to prevent layout shift (CLS)
- Use appropriate image compression — aim for under 200KB per hero image

### 9. Print Styles

- Use `@media print` to create print-specific layouts
- Hide navigation, interactive elements, and decorative content
- Use `page-break-inside: avoid` on content cards and list items
- Switch to serif fonts or increase font size for readability
- Expand URLs after links: `a[href]::after { content: " (" attr(href) ")"; }`
- Test with browser Print Preview (Cmd+P)

### 10. Performance

- Minimize re-renders: memoize expensive components with `React.memo`, use `useMemo`/`useCallback` where measured
- Avoid layout thrashing — batch DOM reads and writes
- Use `will-change` sparingly on elements about to animate
- Code-split large components with `React.lazy()` + `Suspense`
- Audit with Lighthouse, targeting 90+ on Performance and Accessibility scores

## Procedure

When asked to implement or review a UI change:

1. **Understand the intent** — What is the user trying to achieve visually or interactionally?
2. **Check existing patterns** — Read existing CSS and components before creating new ones. Reuse existing classes and design tokens.
3. **Implement with semantics** — Use correct HTML elements, proper heading levels, meaningful class names.
4. **Style progressively** — Start with mobile layout, add complexity for larger screens.
5. **Verify accessibility** — Run through the a11y checklist above.
6. **Test responsiveness** — Confirm the change works across breakpoints.
7. **Optimize** — Check for unnecessary re-renders, large images, or unused CSS.

## References

- [CSS Architecture Guide](./references/css-architecture.md)
- [Component Patterns](./references/component-patterns.md)
- [Accessibility Checklist](./references/a11y-checklist.md)
