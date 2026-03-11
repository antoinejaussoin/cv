# Accessibility (a11y) Checklist

Quick-reference checklist for every UI change. Check all that apply.

## Structure & Semantics

- [ ] Page has exactly one `<h1>`
- [ ] Heading levels don't skip (h1 → h2 → h3, not h1 → h3)
- [ ] Landmarks used: `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<aside>`
- [ ] Lists use `<ul>`/`<ol>` + `<li>`, not styled divs
- [ ] Tables use `<th>` with `scope` attribute for data tables
- [ ] Language declared: `<html lang="en">`

## Images & Media

- [ ] Every `<img>` has an `alt` attribute
- [ ] Informative images have descriptive `alt` text
- [ ] Decorative images use `alt=""`
- [ ] SVG icons have `aria-hidden="true"` or accessible label
- [ ] Videos have captions/subtitles

## Interactive Elements

- [ ] All interactive elements reachable via Tab key
- [ ] Focus order follows visual layout (logical tab order)
- [ ] Focus indicator is visible (never `outline: none` without replacement)
- [ ] Custom focus styles use `:focus-visible` to avoid showing on mouse click
- [ ] Buttons use `<button>`, not `<div onClick>`
- [ ] Links use `<a href>`, not `<span onClick>`
- [ ] Escape key closes modals/dropdowns
- [ ] Toggle states communicated: `aria-expanded`, `aria-pressed`, `aria-checked`

## Color & Contrast

- [ ] Text contrast ratio ≥ 4.5:1 (normal text) or ≥ 3:1 (large text ≥18pt/14pt bold)
- [ ] UI component contrast ≥ 3:1 against adjacent colors
- [ ] Information not conveyed by color alone (add icons, text, patterns)
- [ ] Works in forced-colors / high-contrast mode

## Forms

- [ ] Every input has a visible `<label>` (or `aria-label` for icon-only inputs)
- [ ] Required fields marked with text, not just asterisk color
- [ ] Error messages are descriptive and linked to the field (`aria-describedby`)
- [ ] Form groups use `<fieldset>` + `<legend>`

## Motion & Animation

- [ ] `prefers-reduced-motion` respected (reduced or removed animations)
- [ ] No content flashes more than 3 times per second
- [ ] Auto-playing animations have a pause mechanism

## Touch & Mobile

- [ ] Touch targets ≥ 44×44px
- [ ] Adequate spacing between tap targets (≥ 8px)
- [ ] Content readable without horizontal scrolling at 320px width
- [ ] Pinch-to-zoom not disabled (`user-scalable=yes`)

## Testing Commands

```bash
# macOS VoiceOver
# Toggle: Cmd + F5
# Navigate: Ctrl + Option + Arrow keys
# Read all: Ctrl + Option + A

# Chrome DevTools
# Accessibility tree: Elements panel → Accessibility tab
# Contrast checker: computed styles → color picker
# Lighthouse: Cmd+Shift+I → Lighthouse → Accessibility
```

## Quick Audit

Run in browser console to find basic issues:

```js
// Images missing alt
document.querySelectorAll('img:not([alt])');

// Buttons/links without accessible name
document.querySelectorAll('button:empty, a:empty');

// Missing form labels
document.querySelectorAll('input:not([aria-label]):not([id])');
```
