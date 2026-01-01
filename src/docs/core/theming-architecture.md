# Theming System Architecture

The Gluestack UI Pro repository uses a hybrid theming architecture that combines React Context for state management and CSS Variables with Tailwind CSS for high-performance styling.

## The Three Layers

### 1. The State Layer (`ThemeContext` & `ColorContext`)

These contexts manage the user's preferences in React state. They are responsible for:

- Detecting system preferences.
- Listening to URL parameters.
- Handling `postMessage` communication in iframes.

### 2. The Bridge Layer (`applyColorPalette`)

In `ColorContext`, when the `currentColor` changes, it updates the CSS Custom Properties on the root element:

```tsx
const root = document.documentElement;
root.style.setProperty("--color-primary-500", shades[500]);
```

### 3. The Styling Layer (`tailwind.config.js`)

Tailwind is configured to use these CSS variables instead of static hex codes:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        50: "var(--color-primary-50)",
        500: "var(--color-primary-500)",
        // ...
      }
    }
  }
}
```

## Why this Architecture?

1. **Performance**: Changes to CSS variables happen instantly without forcing a re-render of every component that uses a primary color.
2. **Web Compatibility**: Allows the templates to be easily themed by external websites when embedded in an iframe.
3. **Native Support**: While CSS variables are web-specific, on Native (iOS/Android), NativeWind v4 maps these tokens to standard React Native styles using the configuration defined in `tailwind.config.js`. This ensures a "write once, style everywhere" experience.

## Best Practices for Developers

- **Avoid Static Colors**: Instead of `className="bg-[#3b82f6]"`, always use `className="bg-primary-500"` to ensure the color reacts to the theme switcher.
- **Use Semantic Tokens**: Use `text-typography-900` for main text and `text-typography-500` for secondary text to ensure legibility in both light and dark modes.
