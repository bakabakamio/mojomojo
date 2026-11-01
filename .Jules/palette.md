## 2024-05-15 - Dynamic `aria-current` for Navigation

**Learning:** Screen reader users benefit greatly from knowing the active state in global navigation components. In Astro components, `aria-current` can be evaluated dynamically using `Astro.url.pathname`, providing critical context with a minor footprint.
**Action:** When working on navigation lists mapping links, proactively check for current route validation to toggle `aria-current="page"`.

## 2024-05-29 - Missing Focus States due to Exclusion Selectors

**Learning:** Using CSS `not()` selectors like `:where(a):not(.not-underline-hover)` for hover/active visual styling can inadvertently strip accessibility features if global styles like `focus-visible` are coupled within the same block. Interactive elements MUST maintain focus indicators regardless of their visual exception class.
**Action:** Always decouple `focus-visible` accessibility styles from visual presentation blocks. Apply global focus outlines universally (e.g., `:where(a)`) before applying exclusion-based styles.

## 2024-05-30 - Skip-to-content Implementation Pattern

**Learning:** When implementing "skip to content" links for accessibility, ensure the link is the very first focusable element inside the `<body>`. The target container (usually `<main>`) must have a matching `id` (e.g., `id="main-content"`). Using utility classes like `sr-only focus:not-sr-only focus:absolute` works well for keeping the link visually hidden until focused via keyboard navigation.
**Action:** When creating new layouts or themes, explicitly check for the presence of a "skip to content" link and ensure the `<main>` element has an appropriate ID anchor. Also ensure translation strings are provided for all supported languages.
