---
name: finalize-blog-post
description: 'Finalize blog posts by generating front matter and ensuring image paths are relative. Use when creating or editing Markdown posts in src/content/posts/.'
argument-hint: 'Path to the blog post Markdown file'
---

# Finalize Blog Post

## When to Use

- After writing a new blog post in `src/content/posts/`
- When editing an existing post to add front matter or fix image paths
- To ensure posts conform to the project's content schema

## Front Matter Generation Rules

Front matter must follow the YAML format with these fields:

- **title**: String. Extract from the first H1 heading (`# Title`). If no H1, use the filename without extension.
- **pubDate**: String in YYYY-MM-DD format. Set to the current date.
- **categories**: Array of strings. Infer from content keywords or leave empty array if unclear.
- **banner**: String (optional). Path to a banner image if present, e.g., `images/banner.jpg`. Validate image size ≤4096px if possible.

Example:

```yaml
---
title: "My Blog Post"
pubDate: "2026-04-04"
categories:
  - tech
banner: images/banner.png
---
```

## Image Path Updating Rules

- All images must be in the `images/` subfolder relative to the post file.
- Update any absolute paths, incorrect relative paths, or URLs to `images/filename.ext`.
- If images are not in the folder, move them or update references accordingly.
- Ensure paths are relative and correct for the static site generation.

## Procedure

1. Read the post file.
2. If no front matter, generate it based on rules above.
3. If the post does not start with an H1 heading, shift all heading levels up by one (e.g., ## becomes #, ### becomes ##).
4. After completing step 3, if there is an H1 heading identical to the title in front matter, remove it.
5. Scan for image references and update paths to relative `images/` format.
6. Save the updated file.
7. Optionally, run `pnpm typecheck` to validate against schema.