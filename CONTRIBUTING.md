# Contributing to polybridge-mcp

Thank you for your interest. Contributions of all kinds are welcome.

---

## Before you start

Read [docs/architecture.md](docs/architecture.md) to understand how the code is
structured. It explains the three-layer model and the step-by-step process for
adding a new bridge.

---

## What we value in contributions

**Pedagogical quality above all else.** polybridge-mcp exists to teach. Every
new piece of code should include comments that explain the "why", not just the
"what". A new bridge with excellent comments is worth more than a new bridge
with bare code.

**Working over perfect.** A bridge that connects, executes one tool correctly,
and handles errors gracefully is ready to merge. You do not need to implement
every possible tool in the first PR.

**Honesty in error messages.** When something fails, the error message should
explain what the user needs to do to fix it. Cryptic errors help nobody.

---

## Contribution types

The most needed contributions right now :

- **New bridges** — Slack, GitHub, Home Assistant, Spotify, Airtable, and many others
- **New recipes** — pre-built workflow bundles for common use cases
- **PTL translations** — the PTL log messages are in English; French, Spanish, and other language versions would be valuable for international classrooms
- **Tests** — unit tests for bridge logic and integration tests for the full server
- **Documentation** — walkthroughs, tutorials, and classroom materials

---

## Code style

- TypeScript strict mode is on. No `any` unless absolutely justified.
- Every exported function and class gets a JSDoc comment.
- Every bridge file starts with a block comment explaining what the tool is and how the bridge connects to it.
- Tool definitions always include a `pedagogicalSummary` field.
- No default exports — use named exports everywhere.
- Avoid abbreviations in variable names : `workflowId` not `wfId`.

---

## Running the project locally

```bash
git clone https://github.com/madjeek-web/polybridge-mcp.git
cd polybridge-mcp
npm install
cp polybridge-mcp.config.example.json polybridge-mcp.config.json
npm run dev
```

---

## Submitting a pull request

1. Fork the repository.
2. Create a branch : `git checkout -b feature/slack-bridge`.
3. Make your changes.
4. Check that the code compiles : `npm run build`.
5. Check that lint passes : `npm run lint`.
6. Push and open a PR against the `main` branch.
7. Fill in the pull request template.

---

## Code of conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
