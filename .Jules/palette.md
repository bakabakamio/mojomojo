## 2024-04-17 - Add Accessibility Attributes to Icon-only Links

**Learning:** Icon-only links and buttons frequently lack accessible names. Adding `aria-label` provides a readable name for screen readers, and `aria-hidden="true"` prevents screen readers from announcing redundant or non-semantic icon classes/characters. Also `target="_blank"` on links should pair with `rel="noopener noreferrer"`.
**Action:** When creating or modifying icon-only interactive elements (like social links), always ensure they have an `aria-label`. Use `aria-hidden="true"` on the actual icon element to prevent noisy screen reader output.
