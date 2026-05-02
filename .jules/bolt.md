## 2024-04-29 - Astro Component Module Scope

**Learning:** In Astro, component frontmatter (`---`) executes per render during Static Site Generation (SSG). Caching module-level data directly in the frontmatter doesn't persist across page generation.
**Action:** For cross-page memoization or module-level caching, state must be stored in external TypeScript files (e.g., `src/utils/`) rather than inside `.astro` components.
