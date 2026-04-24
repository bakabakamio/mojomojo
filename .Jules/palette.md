## 2024-04-17 - Add Accessibility Attributes to Icon-only Links

**Learning:** Icon-only links and buttons frequently lack accessible names. Adding `aria-label` provides a readable name for screen readers, and `aria-hidden="true"` prevents screen readers from announcing redundant or non-semantic icon classes/characters. Also `target="_blank"` on links should pair with `rel="noopener noreferrer"`.
**Action:** When creating or modifying icon-only interactive elements (like social links), always ensure they have an `aria-label`. Use `aria-hidden="true"` on the actual icon element to prevent noisy screen reader output.

## 2026-04-24 - Accessibility for UnoCSS Mask Icons

**Learning:** Decorative UnoCSS mask icons (e.g., `i-mdi-*`) used within interactive elements or beside text lack inherent semantic meaning and can cause noisy screen reader output if not hidden.
**Action:** Always add `aria-hidden="true"` to these decorative icon elements (like `i-mdi-chevron-double-left`, `i-mdi-content-copy`) when they are used purely for visual enhancement next to text or within labeled interactive components.
