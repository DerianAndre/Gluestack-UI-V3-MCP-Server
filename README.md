# gluestack-ui-mcp-server

A Model Context Protocol (MCP) server that empowers AI agents to build production-ready applications using **Gluestack UI v3**. It provides deep context on component anatomy, configuration, and best practices.

## 🚀 Features

- **Component Intelligence**: Full anatomy and props for all v3.0.11 components.
- **Architectural Guides**: Deep dives into NativeWind v4, React Native primitives, and Performance.
- **Smart Prompts**: Pre-configured `gluestack-pro-expert` prompt for generating "Copy-Paste" standardized code.
- **Template Patterns**: Access to production-grade implementation patterns for Auth, Dashboard, and E-commerce flows.

## 🛠️ Tools

| Tool                           | Description                                                 |
| :----------------------------- | :---------------------------------------------------------- |
| `list_docs`                    | Lists all technical documentation files.                    |
| `search_docs`                  | **(New)** Fuzzy search for documentation by keyword.        |
| `read_doc`                     | Reads specific documentation content.                       |
| `list_ui_components`           | Lists all available UI components.                          |
| `get_all_components_metadata`  | Retrieves metadata for all components.                      |
| `get_selected_components_docs` | Retrieves detailed anatomical docs for specific components. |

## 📦 Installation

### Prerequisites

- Node.js v18+
- npm / pnpm / yarn

### Local Setup

1. **Clone and Install**

   ```bash
   git clone https://github.com/DerianAndre/gluestack-ui-mcp-server.git
   cd gluestack-ui-mcp-server
   npm install
   ```

2. **Build the Server**

   ```bash
   npm run build
   ```

   _Note: The build process will automatically copy the `src/docs` directory to `dist/docs`._

## ⚙️ Configuration

### Option 1: Claude Desktop

Add this to your `claude_desktop_config.json`:

**macOS/Linux:**

```json
{
  "mcpServers": {
    "gluestack-ui": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/gluestack-ui-mcp-server/dist/index.js"]
    }
  }
}
```

**Windows:**

```json
{
  "mcpServers": {
    "gluestack-ui": {
      "command": "node",
      "args": [
        "C:\\ABSOLUTE\\PATH\\TO\\gluestack-ui-mcp-server\\dist\\index.js"
      ]
    }
  }
}
```

### Option 2: Cursor (MCP Settings)

1. Open Cursor Settings > Features > MCP.
2. Click "Add New Server".
3. **Name**: `gluestack-ui`
4. **Type**: `stdio`
5. **Command**: `node C:\ABSOLUTE\PATH\TO\gluestack-ui-mcp-server\dist\index.js` (or correct path for your OS)

## 🏗️ Development

To run the server in development mode with auto-rebuild:

```bash
npm run watch
```

## 📂 Documentation Structure

The server serves documentation from `src/docs/`:

- `guides/`: Ecosystem guides (React Native, Performance, etc.).
- `core/`: Fundamental architecture and configuration.
- `components/`: UI component APIs.
- `templates/`: Categorized template screens.
- `utils/`: Context providers and helper functions.
- `types/`: Data structures and TypeScript information.
