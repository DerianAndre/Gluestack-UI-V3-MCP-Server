---
title: GluestackUIProvider
description: The root component that provides the design system context, theme, and library configuration to your application.
---

# GluestackUIProvider

The `GluestackUIProvider` is the essential wrapper for every Gluestack UI v3 application. It initializes the theme, provides the necessary context for NativeWind, and manages overlay states for components like Modals and Toasts.

## Usage

You should wrap your entire application with this provider, typically in `App.tsx` or your root layout file.

```tsx
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      {/* Your App Content */}
    </GluestackUIProvider>
  );
}
```

## Props

### GluestackUIProvider

- **mode**: `'light' | 'dark' | 'system'` (default: `'light'`) - Sets the initial color mode of the application.
- **config**: `object` (optional) - Custom theme configuration if you are overriding the default design tokens.

## Anatomy

In v3, the `GluestackUIProvider` is a composite provider that typically includes:

1.  **OverlayProvider**: Handles portal-based components (Modals, Popovers).
2.  **ToastProvider**: Manages the toast notification queue.
3.  **ColorModeProvider**: Handles the switching between light and dark modes.

## Theme Configuration

Since v3 is powered by **NativeWind v4**, most of your theming happens in `tailwind.config.js`. The provider ensures that the CSS variables defined in your theme are correctly applied to the component tree.

### Example with Dark Mode

```tsx
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useColorScheme } from "nativewind";

export default function Layout() {
  const { colorScheme } = useColorScheme();

  return (
    <GluestackUIProvider mode={colorScheme}>
      <Home />
    </GluestackUIProvider>
  );
}
```

## Troubleshooting

- **Styles not applying?**: Ensure you have imported your `global.css` (which includes `@tailwind base; @tailwind components; @tailwind utilities;`) in the same file where you use the provider.
- **Overlay issues?**: Make sure `GluestackUIProvider` is at the very root to ensure Modals and Tooltips render correctly on top of other content.
