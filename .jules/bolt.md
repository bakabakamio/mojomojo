## 2024-05-19 - Optimizing Array Sorting in Astro Content Collections
**Learning:** Using `dayjs` instantiation inside `Array.prototype.sort` callbacks for date comparison causes severe performance bottlenecks due to `O(N log N)` object allocations. Native `Date.prototype.valueOf()` numeric comparisons are vastly faster (orders of magnitude) and functionally equivalent for simple chronological sorting of Astro collections.
**Action:** When sorting arrays of data containing Dates, avoid heavy constructor/parser functions (like `dayjs(date)`) inside the sort loop. Always prefer comparing native primitive values using `.getTime()` or `.valueOf()`.

## 2024-10-24 - Optimizing Markdown AST Parsing for Summaries
**Learning:** Parsing full markdown documents using `markdown-it` and `sanitize-html` to extract a small 400-character description creates a huge performance bottleneck as the size of blog posts grows. Rendering and sanitizing thousands of lines of markdown per post on index pages severely blocks the main thread.
**Action:** When generating text snippets or descriptions from large text content (like markdown blog posts), always slice the input string to a reasonable buffer length (e.g., 4000 characters) *before* passing it through expensive AST parsers or sanitizers.
