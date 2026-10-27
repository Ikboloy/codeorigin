# CodeOrigin

An offline, multilingual code-inspection prototype. **This release cannot detect AI authorship.** It reports observable lexical patterns and always abstains from attributing authorship. No model has been trained; detection accuracy has not been measured.

## Run

Unzip the project and open `index.html` in a modern browser. No installation, API key or internet connection required. Keep `app.js` and `analyzer.js` alongside the HTML file.

Choose English, Korean or Uzbek. Paste Python or JavaScript, or select a UTF-8 file up to 100,000 bytes. Click Analyze. Export a JSON report if desired; it contains measurements and line numbers, not code or filenames. Clear removes the input from the page. Data is not stored in localStorage, cookies or a backend.

## Features

- Nonempty-line count, lines longer than 100 characters, comment-like prefixes, exact duplicate lines of at least 20 characters, mixed indentation evidence.
- Source line references, no probability or authorship score.
- Local processing; no execution of user input or network requests.
- Explicit empty, binary, oversized and invalid UTF-8 input handling.
- Report invalidation when input changes; asynchronous file reads cannot overwrite newer edits.
- Three interface languages and responsive layout.

## What measurements mean

These are **descriptive, not predictive**. A formatter, task or programming language can create the same patterns for any author. This scanner is not a syntax parser: prefixes inside multiline strings can be counted as comments; multiline comments are not fully recognized. Duplicate lines can be legitimate. It does not assess code correctness or security. Never use it as evidence of cheating, misconduct or hiring suitability.

## Tests

With Node.js 20 or later:

```sh
npm test
```

There are no npm dependencies. Nine automated analyzer tests passed during development. The UI JavaScript syntax was checked. A real browser interaction/accessibility audit has not yet been performed. GitHub Actions also passed: [initial CI run](https://github.com/Ikboloy/codeorigin/actions/runs/40457010526).

## Before implementing an authorship model

See `RESEARCH_PLAN.md`. This prototype deliberately does not turn arbitrary style rules into an AI probability. Example snippets were AI-assisted and are demonstrations, not held-out evaluation data.

## Project status

Source repository: https://github.com/Ikboloy/codeorigin. Local prototype; not deployed as an online application. No license is assigned by this package; choose one explicitly before releasing source or collecting third-party samples.
