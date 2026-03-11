# CSS Architecture Guide

## File Organization

Organize CSS by concern, not by page:

```
src/css/
├── base.css          # Reset, typography defaults, body
├── grid.css          # Grid system (rows, spans/columns)
├── layout.css        # Major layout blocks (header, footer, content areas)
├── elements.css      # Reusable UI elements (buttons, alerts, accordions)
├── custom.css        # Project-specific overrides and unique styles
├── print.css         # Print-only styles
└── skins/            # Theme color variations
    ├── blue.css
    ├── green.css
    └── ...
```

Component-specific CSS lives next to the component:

```
src/components/
├── Project.tsx
├── Project.css       # Styles scoped to Project component
```

## Naming Conventions

Use BEM-inspired naming for clarity:

```css
/* Block */
.cv-section { }

/* Block + Element */
.cv-section-title { }
.cv-section-content { }

/* Block + Modifier */
.cv-section--highlighted { }

/* Component-specific */
.project-card { }
.project-card-image { }
.project-card-title { }
```

Avoid:
- Generic names: `.container`, `.wrapper`, `.box` (without prefix)
- IDs for styling (use classes only)
- `!important` (fix specificity instead)
- Deeply nested selectors (max 3 levels)

## CSS Custom Properties (Design Tokens)

Define design tokens at `:root` for consistency:

```css
:root {
  /* Spacing scale (8px base) */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "SF Mono", "Fira Code", monospace;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;

  /* Colors (overridden per skin) */
  --color-primary: #0078d4;
  --color-text: #333;
  --color-muted: #666;
  --color-surface: #fff;
  --color-border: #e0e0e0;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
}
```

## Responsive Patterns

### Mobile-First Breakpoints

```css
/* Base: mobile (< 480px) */
.grid { display: flex; flex-direction: column; }

/* Tablet (≥ 768px) */
@media (min-width: 768px) {
  .grid { flex-direction: row; flex-wrap: wrap; }
  .grid-item { flex: 0 0 50%; }
}

/* Desktop (≥ 1024px) */
@media (min-width: 1024px) {
  .grid-item { flex: 0 0 33.333%; }
}
```

### Container Queries (Modern)

```css
.card-container { container-type: inline-size; }

@container (min-width: 400px) {
  .card { flex-direction: row; }
}
```

## Specificity Management

1. Use a flat selector structure (single class selectors where possible)
2. Use CSS cascade layers for predictable ordering:
   ```css
   @layer reset, base, layout, components, utilities;
   ```
3. Utility classes (`.text-center`, `.mt-2`) should come last in source order
4. Avoid qualifying selectors: use `.btn` not `a.btn`

## Print Stylesheet Patterns

```css
@media print {
  /* Hide non-essential UI */
  nav, .noprint, button, .toggle { display: none !important; }

  /* Reset backgrounds and shadows */
  * { background: transparent !important; box-shadow: none !important; }

  /* Prevent element splitting across pages */
  .cv-item { page-break-inside: avoid; }

  /* Force page breaks between sections */
  .cv-section { page-break-after: always; }
  .cv-section:last-child { page-break-after: auto; }

  /* Show link URLs */
  a[href^="http"]::after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
    color: #666;
  }
}
```
