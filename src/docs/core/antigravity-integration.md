# AI Integration (Antigravity)

This repository is optimized for **Advanced Agentic Coding**. By linking the local MCP server to an AI agent like **Antigravity**, you unlock the ability to generate entire screens and features based on the Pro templates.

## Connecting the MCP Server

To let an AI agent use this repository's context, you need to point it to the compiled MCP server.

### Configuration Steps

1. **Build the Server**:
   Ensure you have built the server at least once:

   ```bash
   cd mcp-server
   pnpm install
   pnpm build
   ```

2. **Register the Server**:
   In your AI client (like Antigravity or Desktop IDE), add a new MCP server with the following command:

   - **Command**: `node`
   - **Arguments**: `["C:/Archivos de proyecto/GitHub/gluestack-ui-mcp-server/dist/index.js"]`

   _Note: Ensure the path is absolute and uses forward slashes or escaped backslashes._

Configuration Example:

1. Run `pnpm env use --global 22.21.1` to use the correct Node.js version.
2. Replace `<your_user>` with your actual username.
3. Add the configuration to antigravity, go to Agent > MCP Servers > Manage MCP Servers > View raw config.
   - Or go directly to `C:\Users\<your_user>\.gemini\antigravity\mcp_config.json`.

```json
{
  "mcpServers": {
    "gluestack-ui": {
      "command": "C:/Users/<your_user>/AppData/Local/pnpm/nodejs/22.21.1/node.exe",
      "args": [
        "C:/Archivos de proyecto/GitHub/gluestack-ui-mcp-server/dist/index.js"
      ]
    }
  }
}
```

## Best Practices for Prompting

When working with an AI agent in this repository, use technical prompts that leverage the predefined patterns:

- **Template Generation**: "Create a new profile screen based on the `social/profile-page` template."
- **Component Usage**: "Add a custom modal to the dashboard using the Gluestack `Modal` compound pattern."
- **Styling**: "Apply the secondary-500 color to this button using NativeWind classes."

## Why Use AI Integration?

1. **Zero Context Switching**: The agent can read the documentation through the `read_doc` tool instead of asking you for technical details.
2. **Pattern Consistency**: The agent will follow the Gluestack Patterns found in the existing code.
3. **Speed**: You can build a prototype of a complex flow in minutes by asking the agent to combine multiple Pro Templates.

## Troubleshooting

If the agent cannot find the tools:

- Verify that the `dist/index.js` file exists.
- Check the agent's logs for any `spawn node ENOENT` errors, which usually indicate that `node` is not in the system's PATH.
- Restart the agent session to refresh the tool list.
