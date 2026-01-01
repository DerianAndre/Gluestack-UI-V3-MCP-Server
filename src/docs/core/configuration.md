# Project Configuration (v3.0.11)

Gluestack UI v3 is a "copy-paste" component library optimized for **NativeWind v4**. Unlike v2, it does not rely on a monolithic package for styles, but instead uses individual component files you add to your project.

## Core Dependencies

The following dependencies are required for a standard Gluestack UI v3 (3.0.11) project:

### Production

- `nativewind`: `^4.1.23`
- `react-aria`: `^3.33.0`
- `tailwind-variants`: `^0.1.20`
- `@gluestack-ui/core`: `^3.0.10`
- `@gluestack-ui/utils`: `^3.0.11`
- `@legendapp/motion`: `^2.3.0`
- `react-native-reanimated`: `~4.1.0` (v4 Beta/Alpha)
- `react-native-safe-area-context`: `^5.6.1`
- `react-native-svg`: `^15.13.0`

### Development

- `tailwindcss`: `^3.4.17`
- `postcss`: `^8.5.4`
- `autoprefixer`: `^10.4.21`

## Directory Structure

In a typical setup, your components will live in:

```text
src/
  components/
    ui/
      button/
        index.tsx
        styles.tsx (optional)
      gluestack-ui-provider/
        index.tsx
```

## Tailwind Configuration

Your `tailwind.config.js` must be configured to include the components directory and the Gluestack presets:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

ches the web-specific development environment.

- `pnpm build:web`: Generates the production build for web deployment.

## Design System Integration

### `tailwind.config.js` & `global.css`

In gluestack UI v3, the design system is primarily configured through standard Tailwind tokens.

- **Colors & Typography**: Defined in `tailwind.config.js`.
- **Global Styles**: Theme variables (CSS variables) for web are often initialized in `global.css`.

### `gluestack-ui.config.ts` (Legacy/Optional)

While previous versions relied heavily on this file, v3 components in this repository use **gluestack-ui v3** which is utility-first and driven by NativeWind. Any remaining configuration files serve as base tokens for the component library but are secondary to the Tailwind configuration.
