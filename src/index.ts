import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure we find the docs directory whether running from src or dist
const DOCS_ROOT = fs.existsSync(path.join(__dirname, "docs"))
  ? path.resolve(__dirname, "docs")
  : path.resolve(__dirname, "..", "src", "docs");

const COMPONENTS_DIR = path.join(DOCS_ROOT, "components");

// Advanced Prompt Engineering for v3
const LATEST_PROMPT_TEXT = `You are a specialized expert in React, React Native, Tailwind CSS, NativeWind v4, and Gluestack UI v3 (3.0.11).

CRITICAL ARCHITECTURE RULES:
1. **Version**: Use Gluestack UI v3.0.11 + NativeWind v4. Do NOT use v2 Styled System.
2. **Styling**: Use 'className' prop for ALL styling. Do NOT use 'style' prop or StyleSheet.
3. **Anatomy**: STRICTLY follow the Compound Component pattern (e.g., <Button><ButtonText>Label</ButtonText></Button>).
4. **Icons**: Import ONLY from 'lucide-react-native'. Usage: <Icon as={IconName} />.
5. **Layout**: Prefer 'VStack' and 'HStack' with 'space' prop over manual margins.

WORKFLOW:
1. **Search**: Use 'search_docs' to find relevant guides (e.g., "authentication", "forms").
2. **Explore**: Use 'list_docs' and 'read_doc' to understand specific implementation details.
3. **Components**: Use 'get_all_components_metadata' to see what's available, then 'get_selected_components_docs' to get exact anatomy.
4. **Implementation**: Generate complete, runnable code files (React Native/Expo compatible).`;

const server = new McpServer({
  name: "Gluestack UI V3: MCP Server",
  version: "1.2.0",
});

// Recursive file listing helper
const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []) => {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.relative(DOCS_ROOT, fullPath).replace(/\\/g, "/"));
    }
  });

  return arrayOfFiles;
};

// Helper for component discovery
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

// Robust Metadata Extraction
const getComponentMetadata = (name: string) => {
  const docPath = path.join(COMPONENTS_DIR, `${name.toLowerCase()}.md`);
  if (!fs.existsSync(docPath))
    return { title: name, description: "Missing documentation" };

  try {
    const content = fs.readFileSync(docPath, "utf-8");
    const lines = content.split("\n");
    const meta = { title: name, description: "No description provided" };

    // Parse Frontmatter
    if (lines[0]?.trim() === "---") {
      for (const line of lines.slice(1)) {
        if (line.trim() === "---") break;
        const [key, ...val] = line.split(":");
        if (key && val.length > 0) {
          const k = key.trim().toLowerCase();
          const v = val.join(":").trim();
          if (k === "title") meta.title = v;
          if (k === "description") meta.description = v;
        }
      }
    }
    return meta;
  } catch (err) {
    return { title: name, description: "Error parsing metadata" };
  }
};

// --- PROMPTS ---

server.registerPrompt(
  "gluestack-pro-expert",
  {
    description:
      "Generates high-quality, v3-compliant code using Gluestack UI Pro patterns",
    argsSchema: {
      context: z
        .string()
        .optional()
        .describe("Task description or requirements"),
    },
  },
  (args) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `${LATEST_PROMPT_TEXT}\n\nUSER TASK: ${
            args.context ||
            "No specific task provided. Please ask the user what they want to build."
          }`,
        },
      },
    ],
  })
);

// --- TOOLS ---

// 1. Discovery: List all docs
server.registerTool(
  "list_docs",
  {
    description:
      "Lists all available documentation files (guides, templates, components, core).",
    inputSchema: {},
  },
  async () => {
    const files = getAllFiles(DOCS_ROOT);
    return {
      content: [{ type: "text", text: JSON.stringify(files, null, 2) }],
    };
  }
);

// 2. Discovery: Search docs (New Feature)
server.registerTool(
  "search_docs",
  {
    description: "Searches documentation filenames for keywords (fuzzy match).",
    inputSchema: {
      query: z
        .string()
        .describe("Search term (e.g., 'auth', 'navigation', 'theme')"),
    },
  },
  async ({ query }: { query: string }) => {
    const allFiles = getAllFiles(DOCS_ROOT);
    const matches = allFiles.filter((f) =>
      f.toLowerCase().includes(query.toLowerCase())
    );
    return {
      content: [{ type: "text", text: JSON.stringify(matches, null, 2) }],
    };
  }
);

// 3. Retrieval: Read specific doc
server.registerTool(
  "read_doc",
  {
    description: "Reads the content of a specific documentation file.",
    inputSchema: {
      path: z
        .string()
        .describe(
          "Relative path from list_docs (e.g., 'guides/react-native.md')"
        ),
    },
  },
  async ({ path: docPath }: { path: string }) => {
    // smart path resolver to handle typical user inputs
    const cleanPath = (p: string) => {
      let norm = path.normalize(p);
      // Remove leading/trailing slashes/dots
      norm = norm.replace(/^(\.\.(\/|\\|$))+/, "");
      // Remove 'src/docs/' or 'docs/' prefix if present
      if (norm.startsWith("src" + path.sep + "docs" + path.sep)) {
        norm = norm.substring(("src" + path.sep + "docs" + path.sep).length);
      } else if (norm.startsWith("docs" + path.sep)) {
        norm = norm.substring(("docs" + path.sep).length);
      }
      // Remove leading dot-slash if still present
      if (norm.startsWith("." + path.sep)) {
        norm = norm.substring(2);
      }
      return norm;
    };

    const safePath = cleanPath(docPath);
    const fullPath = path.join(DOCS_ROOT, safePath);

    if (!fs.existsSync(fullPath) || !fullPath.startsWith(DOCS_ROOT)) {
      // Try one more fallback: maybe it's just a filename match?
      // useful if user just asks for "accordion.md"
      const allFiles = getAllFiles(DOCS_ROOT);
      const match = allFiles.find(
        (f) =>
          f.toLowerCase().endsWith(safePath.toLowerCase()) ||
          f.toLowerCase() === safePath.toLowerCase()
      );

      if (match) {
        const fallbackPath = path.join(DOCS_ROOT, match);
        const content = fs.readFileSync(fallbackPath, "utf-8");
        return {
          content: [{ type: "text", text: content }],
        };
      }

      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `Error: Doc not found at ${docPath} (Resolved to: ${safePath}). Please use 'list_docs' to see valid paths.`,
          },
        ],
      };
    }

    try {
      const stats = fs.statSync(fullPath);
      if (stats.isDirectory()) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `Error: The path '${docPath}' is a directory. Please specify a file path.`,
            },
          ],
        };
      }

      const content = fs.readFileSync(fullPath, "utf-8");
      return {
        content: [{ type: "text", text: content }],
      };
    } catch (err: any) {
      return {
        isError: true,
        content: [{ type: "text", text: `Error reading file: ${err.message}` }],
      };
    }
  }
);

// 4. Component Discovery: List UI components
server.registerTool(
  "list_ui_components",
  {
    description: "Lists all base UI components available in the library.",
    inputSchema: {},
  },
  async () => {
    const components = getAvailableComponents();
    return {
      content: [{ type: "text", text: JSON.stringify(components, null, 2) }],
    };
  }
);

// 5. Component Discovery: Get Metadata
server.registerTool(
  "get_all_components_metadata",
  {
    description:
      "Gets title and description for all components to help choose the right one.",
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

// 6. Component Retrieval: Get Docs for selected components
server.registerTool(
  "get_selected_components_docs",
  {
    description:
      "Retrieves full anatomy, props, and examples for a list of components.",
    inputSchema: {
      component_names: z
        .array(z.string())
        .describe("Array of component basenames (e.g. ['button', 'box'])"),
    },
  },
  async ({ component_names }: { component_names: string[] }) => {
    const docs: Record<string, string> = {};
    for (const name of component_names) {
      const p = path.join(COMPONENTS_DIR, `${name.toLowerCase()}.md`);
      if (fs.existsSync(p)) {
        docs[name] = fs.readFileSync(p, "utf-8");
      } else {
        docs[
          name
        ] = `Documentation for '${name}' not found. Please check list_ui_components for valid names.`;
      }
    }
    return {
      content: [{ type: "text", text: JSON.stringify(docs, null, 2) }],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(">>> Gluestack UI MCP Server v1.2.0 Running");
}

try {
  main();
} catch (err) {
  console.error("FATAL ERROR:", err);
  process.exit(1);
}
