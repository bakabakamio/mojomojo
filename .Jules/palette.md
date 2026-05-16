## 2024-05-15 - Dynamic `aria-current` for Navigation
**Learning:** Screen reader users benefit greatly from knowing the active state in global navigation components. In Astro components, `aria-current` can be evaluated dynamically using `Astro.url.pathname`, providing critical context with a minor footprint.
**Action:** When working on navigation lists mapping links, proactively check for current route validation to toggle `aria-current="page"`.
