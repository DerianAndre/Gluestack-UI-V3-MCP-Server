# Utilities & Context Providers

Essential contexts for theme management, color schemes, and RTL support.

## Context Providers

- [**ThemeContext**](./theme.md): Manages light/dark mode and system theme synchronization.
- [**ColorContext**](./color.md): Handles dynamic color scheme switching based on the color palette.
- [**RTLLangContext**](./rtl.md): Manages Right-to-Left (RTL) layout switching and language direction.
- [**Color Palette**](./color-palette.md): Technical definition of the Design System colors.
- [**DrawerContext**](./drawer.md): Provides state management for custom navigation drawers.

## Color Palette

The `utils/color-palette.ts` file contains the full definition of the design system's colors, including primary, secondary, and semantic tokens.

## Usage

Wrap your root application component with the `GluestackUIProvider` and the custom contexts:

```tsx
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { ThemeProvider } from "@/utils/theme-context";

export default function App() {
  return (
    <ThemeProvider>
      <GluestackUIProvider mode="light">{/* Your App */}</GluestackUIProvider>
    </ThemeProvider>
  );
}
```
