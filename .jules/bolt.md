## 2024-04-29 - Astro Component Module Scope

**Learning:** In Astro, component frontmatter (`---`) executes per render during Static Site Generation (SSG). Caching module-level data directly in the frontmatter doesn't persist across page generation.
**Action:** For cross-page memoization or module-level caching, state must be stored in external TypeScript files (e.g., `src/utils/`) rather than inside `.astro` components.

## 2024-05-08 - Meaningful Caching vs Micro-Optimizations

**Learning:** When looking for SSG optimizations, caching expensive synchronous work like Markdown parsing (`markdown-it`) and HTML sanitization (`sanitize-html`) yields highly impactful results compared to algorithmic micro-optimizations (like swapping `[...array].sort()` for in-place sorting or using map grouping shortcuts). However, module-level caching requires considering its dev-mode behavior: it must be explicitly bypassed (`!import.meta.env.PROD`) to avoid breaking Hot Module Replacement (HMR). Furthermore, single-execution files (like `src/pages/atom.xml.ts` for RSS feeds) are only run once per build, rendering any caching within them useless.
**Action:** Focus on caching heavy string-processing boundaries. Always bypass caches in development to preserve HMR. Avoid implementing caching within single-use contexts like RSS generators.

## 2024-05-15 - Micro-Optimizations in Array Sorting

**Learning:** When trying to optimize array sorting of large object collections by using a Schwartzian transform (map-sort-map) to avoid repetitive `.valueOf()` evaluations during `sort` comparisons, I learned that in JavaScript/V8 environments this can actually be an anti-pattern. The overhead of the mapping loops, creating multiple temporary objects, and the resulting garbage collection pressure outweighs the benefit of caching the sort key. It adds code complexity without a real-world benefit.
**Action:** Avoid complex array sort optimizations like the Schwartzian transform in JavaScript. Stick to simpler logic, but do prioritize reducing the size of the array before sorting (e.g., filtering out drafts first).

## 2025-05-27 - Hoisting static functions outside Astro Middleware

**Learning:** In Astro, the `onRequest` middleware executes per-render for every statically generated page during build time. Defining helper functions or loading static configurations inside the middleware forces JavaScript to repeatedly allocate functions and closures on every page build, increasing memory usage and garbage collection overhead.
**Action:** Always hoist static dependencies (like parsing configuration files, static dictionaries, and helper functions) outside the `onRequest` middleware so they are instantiated exactly once at module load time.
