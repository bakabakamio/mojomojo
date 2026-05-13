## 2024-05-19 - Missing Datetime Attributes on Time Elements

**Learning:** Even well-structured semantic HTML like `<time>` tags often miss the machine-readable `datetime` attribute, forcing screen readers and parsers to guess the intended date format.
**Action:** Always verify that `<time>` elements output a machine-readable `datetime` (e.g. `datetime={date.toISOString()}`) to ensure standard parsing across browsers and assistive technologies.
