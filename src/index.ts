import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_DIR = fs.existsSync(path.join(__dirname, "components"))
  ? path.resolve(__dirname, "components")
  : path.resolve(__dirname, "..", "src", "components");

const LATEST_PROMPT_TEXT = `You are a React and React Native expert. Generate COMPLETE and RUNNABLE code using only my design system components and tools sequentially: get_all_components_metadata, select_components, get_selected_components_docs. Requirements: no external component libraries, no HTML tags (<div>, <button>, <input>, etc), no StyleSheet, use TailwindCSS classes via className prop. Images must be from unsplash.com only. Import all components individually. Prefer VStack/HStack over Box component. Ensure screens are scrollable, responsive, and mobile-friendly.`;

const server = new McpServer({
  name: "gluestack-ui",
  version: "1.0.0",
});

const listDirectories = (dirPath: string): string[] => {
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

const getAvailableComponents = () => {
  try {
    if (!fs.existsSync(COMPONENTS_DIR)) return [];
    return fs
      .readdirSync(COMPONENTS_DIR)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(".md", ""));
  } catch (e: any) {
    console.error(`[FS Error]: ${e.message}`);
    return [];
  }
};

const getComponentMetadata = (name: string) => {
  const docPath = path.join(COMPONENTS_DIR, `${name.toLowerCase()}.md`);
  if (!fs.existsSync(docPath)) return { title: name, description: "Missing" };

  const content = fs.readFileSync(docPath, "utf-8");
  const lines = content.split("\n");
  const meta = { title: name, description: "N/A" };

  if (lines[0]?.trim() === "---") {
    for (const line of lines.slice(1)) {
      if (line.trim() === "---") break;
      const [key, ...val] = line.split(":");
      if (key.trim() === "title") meta.title = val.join(":").trim();
      if (key.trim() === "description") meta.description = val.join(":").trim();
    }
  }
  return meta;
};

server.registerPrompt(
  "gluestack-expert",
  {
    description: "Generate code using Gluestack components",
    argsSchema: {
      context: z.string().describe("Additional context for code generation"),
    },
  },
  (args) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `${LATEST_PROMPT_TEXT}\n\nUser context: ${args.context}`,
        },
      },
    ],
  })
);

server.registerTool(
  "list_ui_components",
  {
    description: "Lists all available base UI components in components/ui.",
    inputSchema: {},
  },
  async () => {
    const components = getAvailableComponents();
    return {
      content: [{ type: "text", text: JSON.stringify(components, null, 2) }],
    };
  }
);

server.registerTool(
  "get_all_components_metadata",
  {
    description:
      "Retrieves metadata (title and description) for all available Gluestack components.",
    inputSchema: {},
  },
  async () => {
    const components = getAvailableComponents();
    const metadata = Object.fromEntries(
      components.map((c) => [c, getComponentMetadata(c)])
    );
    return {
      content: [{ type: "text", text: JSON.stringify(metadata, null, 2) }],
    };
  }
);

server.registerTool(
  "select_components",
  {
    description:
      "Registers the specific components selected for the current task.",
    inputSchema: {
      selectedComponents: z
        .array(z.string())
        .min(1)
        .describe("List of component names to be used"),
    },
  },
  async ({ selectedComponents }: { selectedComponents: string[] }) => {
    console.error(
      `[MCP Debug]: Registering components: ${selectedComponents.join(", ")}`
    );
    return {
      content: [
        {
          type: "text",
          text: `Components [${selectedComponents.join(
            ", "
          )}] selected. Use 'get_selected_components_docs' to retrieve their implementation details.`,
        },
      ],
    };
  }
);

server.registerTool(
  "get_selected_components_docs",
  {
    description:
      "Returns full markdown documentation and implementation examples for the specified components.",
    inputSchema: {
      component_names: z
        .array(z.string())
        .describe("Names of components to fetch docs for"),
    },
  },
  async ({ component_names }: { component_names: string[] }) => {
    const docs: Record<string, string> = {};
    for (const name of component_names) {
      const p = path.join(COMPONENTS_DIR, `${name.toLowerCase()}.md`);
      docs[name] = fs.existsSync(p)
        ? fs.readFileSync(p, "utf-8")
        : "Document not found.";
    }
    return {
      content: [{ type: "text", text: JSON.stringify(docs, null, 2) }],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(
    ">>> Gluestack MCP Server v1.0.0 (Zod 4 Optimized) active on stderr"
  );
}

try {
  main();
} catch (err) {
  console.error("FATAL ERROR:", err);
  process.exit(1);
}
