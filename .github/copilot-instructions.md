# Project Guidelines

## Code Style

- TypeScript with strict mode enabled
- ESLint using @antfu/eslint-config (opinionated, auto-fix enabled)
- Import alias `~/` maps to `src/` directory
- Reference: [tsconfig.json](tsconfig.json), [eslint.config.mjs](eslint.config.mjs)

## Architecture

- Config-driven design: Default config in [src/.config/default.ts](src/.config/default.ts), user overrides in [src/.config/user.ts](src/.config/user.ts), merged in [src/.config/index.ts](src/.config/index.ts)
- Content Collections with Zod schema validation for posts and spec pages
- Middleware for internationalization (i18n) supporting zh-cn, en-us, zh-tw, ja-jp (single locale per build)
- Static site generation using Astro's getStaticPaths for dynamic routes
- Pluggable comment systems (Giscus, Disqus, Twikoo) and analytics

## Build and Test

- Install dependencies: `pnpm install`
- Development server: `pnpm dev`
- Production build: `pnpm build` (includes type checking)
- Linting: `pnpm lint` / `pnpm lint:fix`
- Type checking: `pnpm typecheck`
- Preview build: `pnpm preview`
- Package manager: pnpm (required, specified in packageManager field)

## Conventions

- Post frontmatter schema: title, pubDate, categories, draft, banner (image validated ≤4096px)
- Date formatting: dayjs wrapper, default YYYY-MM-DD
- Theming: UnoCSS with configurable light/dark color palettes
- Code highlighting: Shiki with dracula theme and line wrapping enabled
- Component props: Use Astro.props in getStaticPaths routes
- Avoid `client:visible` directive (causes build failures), use `client:load` instead
- Draft posts are hidden only in production builds
- Category display names may differ from URL paths (configurable mapping)

See [README.md](README.md) for licensing and project overview.
