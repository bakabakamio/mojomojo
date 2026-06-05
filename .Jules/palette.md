## 2024-05-15 - Dynamic `aria-current` for Navigation

**Learning:** Screen reader users benefit greatly from knowing the active state in global navigation components. In Astro components, `aria-current` can be evaluated dynamically using `Astro.url.pathname`, providing critical context with a minor footprint.
**Action:** When working on navigation lists mapping links, proactively check for current route validation to toggle `aria-current="page"`.

## 2025-06-05 - Decouple focus states from visual exclusions

**Learning:** Global link styles in this application used a `:not(.not-underline-hover)` selector to exclude visual underlines on certain elements (like social icons and site title), but this inadvertently stripped `focus-visible` styles as well, causing critical keyboard accessibility failures for main navigation elements.
**Action:** Always decouple `focus-visible` accessibility styles from visual presentation blocks (e.g., CSS `not()` exclusion selectors) to prevent inadvertently stripping keyboard focus indicators.
