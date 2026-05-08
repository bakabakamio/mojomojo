## 2024-04-29 - Astro Component Module Scope

**Learning:** In Astro, component frontmatter (`---`) executes per render during Static Site Generation (SSG). Caching module-level data directly in the frontmatter doesn't persist across page generation.
**Action:** For cross-page memoization or module-level caching, state must be stored in external TypeScript files (e.g., `src/utils/`) rather than inside `.astro` components.

## 2024-05-08 - Meaningful Caching vs Micro-Optimizations

**Learning:** When looking for SSG optimizations, caching expensive synchronous work like Markdown parsing (`markdown-it`) and HTML sanitization (`sanitize-html`) yields highly impactful results compared to algorithmic micro-optimizations (like swapping `[...array].sort()` for in-place sorting or using map grouping shortcuts). However, module-level caching requires considering its dev-mode behavior: it must be explicitly bypassed (`!import.meta.env.PROD`) to avoid breaking Hot Module Replacement (HMR). Furthermore, single-execution files (like `src/pages/atom.xml.ts` for RSS feeds) are only run once per build, rendering any caching within them useless.
**Action:** Focus on caching heavy string-processing boundaries. Always bypass caches in development to preserve HMR. Avoid implementing caching within single-use contexts like RSS generators.
