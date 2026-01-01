# MCP Server Architecture

The **Model Context Protocol (MCP)** server in this repository (`mcp-server/`) acts as a bridge between the codebase and AI agents (like Antigravity). It allows the agent to navigate, read, and understand the project structure without needing to scan every file manually.

## Technical Stack

- **Language**: TypeScript
- **Runtime**: Node.js
- **SDK**: `@modelcontextprotocol/sdk`
- **Communication**: Standard Input/Output (stdio)

## Project Structure

The server is located in the `mcp-server/` directory:

- `src/index.ts`: The main entry point containing tool registrations.
- `package.json`: Manages dependencies and build scripts.
- `dist/`: The compiled JavaScript ready for execution.

## Available Tools

The server exports several tools designed for repository exploration:

### 1. `list_ui_components`

Lists all available base UI components in `components/ui/`.

### 2. `get_ui_component_code`

Retrieves the full source code for a specific UI component by its name.

### 3. `list_templates`

Recursively lists all screens available in `app/templates/`.

### 4. `get_template_code`

Retrieves the source code for a specific template screen or a map of all files in a template directory.

### 5. `read_doc`

Allows the agent to read the comprehensive markdown documentation in the `docs/` folder.

### 6. `get_project_context`

Provides high-level context by reading `package.json`, `tailwind.config.js`, and `app.json`.

## How it works

When an AI agent starts the server, it spawns a node process:

```bash
node mcp-server/dist/index.js
```

The agent and server then communicate using JSON-RPC over stdin/stdout. This allows the agent to call tools and receive structured data from the repository.

## Extending the Server

To add a new tool:

1. Open `mcp-server/src/index.ts`.
2. Use `server.registerTool(...)` to define the tool name, description, input schema (via Zod), and the implementation logic.
3. Rebuild the server: `pnpm build` (inside the `mcp-server` directory).
