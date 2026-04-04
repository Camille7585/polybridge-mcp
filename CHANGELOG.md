# Changelog

All notable changes to polybridge-mcp are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versions follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-04-04

### Added

- Initial release.
- MCP server with stdio transport, compatible with Claude Desktop, Claude Code, Cursor, and Windsurf.
- n8n bridge : list, execute, activate/deactivate workflows.
- Blender bridge : create objects, apply materials, render scenes, execute scripts.
- Notion bridge : create pages, append blocks, read pages.
- Filesystem bridge : sandboxed read, write, list, delete operations.
- Pedagogical Transparency Layer (PTL) with four verbosity levels.
- Hot-pluggable bridge architecture via the `BaseBridge` abstract class.
- LLM adapter for Claude (Anthropic API).
- Recipe system foundation.
- Docker Compose setup with n8n included.
- GitHub Actions CI pipeline.
- Blender Python addon (`bridges/blender/polybridge_addon.py`).
- Full JSDoc comments and pedagogical block comments throughout.

---

## [Unreleased]

### Planned

- LLM adapters for OpenAI, Gemini, and Ollama.
- Slack bridge.
- GitHub bridge.
- Recipe CLI (`npm run recipe list` / `npm run recipe run`).
- Unit tests.
- n8n workflow generation from natural language description.
