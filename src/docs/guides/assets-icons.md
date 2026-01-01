# Assets & Icons

A premium UI depends on high-quality visuals. This guide explains how assets and icons are managed in the Gluestack UI Pro repository.

## Icon System

We primarily use **Lucide React Native** for its clean, modern, and highly customizable icon set.

### Usage in Components

Gluestack UI components provide a built-in `Icon` component that can wrap Lucide icons:

```tsx
import { Icon } from "@/components/ui/icon";
import { Home, User, Settings } from "lucide-react-native";

<Icon as={Home} className="text-primary-500" />;
```

### Styling Icons

Icons inherit the `color` and `size` from their parents or can be styled directly via `className`.

- Use `text-typography-500` for standard icons.
- Use `w-5 h-5` (representing 20px) as the standard size for navigation and buttons.

## Static Assets

Located in the `assets/` directory:

- **`images/`**: Contains app icons, splash screens, and general decorative images.
- **`fonts/`**: Custom fonts are loaded via `expo-font` in the root `_layout.tsx`.

### Recommended Patterns for Images

Use the standard React Native `Image` component (or `expo-image` for high-performance caching):

```tsx
import { Image } from "react-native";

<Image
  source={require("@/assets/images/logo.png")}
  className="w-32 h-32"
  resizeMode="contain"
/>;
```

## SVG Integration

For vector illustrations that need to react to theme changes, we use `react-native-svg`.

- **Pro Tip**: Convert your SVGs to React components using `svgr` for easier manipulation of `fill` and `stroke` colors using Tailwind classes.

## Best Practices

1. **Naming**: Use descriptive, lowercase names with hyphens for asset files (e.g., `user-profile-placeholder.png`).
2. **Optimization**: Run your PNG/JPG assets through an optimizer before committing to keep the repository's clone time fast.
3. **Fallback**: Always provide a background color or a loader (like `Skeleton`) while remote images are downloading.
