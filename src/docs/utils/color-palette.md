# Color Palette

The `utils/color-palette.ts` file is the source of truth for all semantic colors in the Pro templates. It provides a structured map of shades (50-950) for various themes.

## Structure

The palette is divided into `light` and `dark` modes, containing color objects for names like:

- `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`.

## Utility Functions

### `getPalette(mode)`

Returns the full set of colors for the specified mode.

### `isValidColor(colorName)`

Helper to verify if a string matches one of the defined `ColorName` keys.

## Extending the Palette

To add a new primary color option, simply add a new key to the `palette` object in `color-palette.ts` with its corresponding 50-950 shades.

```tsx
export const palette = {
  light: {
    brand: {
      50: "#...",
      // ... 950
    }
  },
  dark: { ... }
}
```
