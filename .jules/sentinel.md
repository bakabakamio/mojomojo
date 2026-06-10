## 2024-05-25 - [Astro Integrations Hide Critical CVEs]

**Vulnerability:** Critical vulnerabilities in nested dependencies (`fast-xml-parser` via `@astrojs/rss` and `sanitize-html`).
**Learning:** Static site generation tools like Astro often bring in powerful integrations (`@astrojs/rss`) that wrap standard vulnerable dependencies. Running `pnpm audit` regularly is critical as these nested tools frequently process untrusted input (like RSS feed generation or markdown parsing).
**Prevention:** Regularly audit the project and bump Astro integrations when underlying parsers report critical CVEs.
