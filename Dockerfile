# Dockerfile
#
# Multi-stage build for polybridge-mcp.
#
# Stage 1 (builder) : installs all dependencies and compiles TypeScript.
# Stage 2 (runtime) : copies only the compiled output and production deps.
#
# This two-stage approach keeps the final image small by excluding the
# TypeScript compiler, dev tools, and source files from the runtime image.

# ---------------------------------------------------------------------------
# Stage 1 : builder
# ---------------------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first. Docker caches this layer separately from source
# code, so `npm install` only re-runs when package.json changes.
COPY package*.json ./
RUN npm ci

# Copy source code and compile.
COPY tsconfig.json ./
COPY src/ ./src/
RUN npm run build

# ---------------------------------------------------------------------------
# Stage 2 : runtime
# ---------------------------------------------------------------------------
FROM node:20-alpine AS runtime

WORKDIR /app

# Only install production dependencies in the final image.
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the compiled JavaScript from the builder stage.
COPY --from=builder /app/dist ./dist

# Create the default workspace directory.
RUN mkdir -p /app/workspace

# The server runs on stdio — no port to expose.
# Claude Desktop spawns this container as a child process.
CMD ["node", "dist/server/index.js"]
