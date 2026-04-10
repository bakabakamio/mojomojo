## 2024-04-10 - Dynamic Elements Need Dynamic A11y

**Learning:** Dynamically injected elements, like `<clipboard-copy>` code blocks, often miss out on accessible names because they aren't part of the core template. Also, icon-only buttons need `aria-label` and `title` to be accessible, and the `aria-label` should update when the state changes (e.g. from "Copy code" to "Copied!") to provide screen reader feedback without relying solely on visual icon changes.
**Action:** When dynamically creating interactive elements (like copy buttons), always ensure they receive an `aria-label`, `title`, and `:focus-visible` styles during creation. Update these attributes dynamically in JavaScript during interaction to provide state feedback to all users.
