# Security Policy

## Supported Versions

Only the latest release receives security fixes.

## Reporting a Vulnerability

Do not open a public GitHub issue for security vulnerabilities.

Send a private report to : convergence-tech@proton.me

Include :
- A description of the vulnerability
- Steps to reproduce it
- The potential impact
- Your suggestion for a fix (optional)

You will receive a response within 72 hours. If the vulnerability is confirmed,
a patch will be released as quickly as possible and you will be credited in the
changelog unless you prefer to remain anonymous.

## Known security considerations

- The filesystem bridge is sandboxed but only as strong as your `allowedPaths` configuration. Never point it at sensitive directories.
- The Blender WebSocket server binds to localhost only. Do not expose port 9877 externally.
- Your `polybridge-mcp.config.json` contains API keys. Never commit it to a public repository. It is in `.gitignore` by default.
- The `exec_script` Blender tool runs arbitrary Python code inside Blender. Only use it if you trust the LLM output.
