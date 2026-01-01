# ColorContext

The `ColorContext` enables dynamic primary color switching throughout the application. It maps color names to the global CSS variables used by NativeWind/Tailwind.

## API Reference

### `useColor()` Hook

Returns:

- `currentColor`: `ColorName` (e.g., `"blue"`, `"red"`, `"green"`).
- `setColor`: `(color: ColorName) => void`. Updates the application's primary color palette.

## Usage Example

```tsx
import { useColor } from "@/utils/color-context";
import { Button, ButtonText } from "@/components/ui/button";

export const ColorPicker = () => {
  const { currentColor, setColor } = useColor();

  return (
    <Button onPress={() => setColor("emerald")}>
      <ButtonText>Switch to Emerald (Current: {currentColor})</ButtonText>
    </Button>
  );
};
```

## How it Works

On Web, the `ColorProvider` dynamically injects CSS variables into `document.documentElement`:

```css
:root {
  --color-primary-500: #3b82f6; /* When blue is selected */
}
```

This allows for instant theme switching without re-rendering the entire component tree, matching the visual style of Gluestack UI Pro.
