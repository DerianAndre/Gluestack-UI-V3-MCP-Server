# Tailwind CSS & NativeWind v4

Gluestack UI v3 is built directly on top of **NativeWind v4**, providing a seamless Tailwind CSS experience for React Native.

## Core Concepts

### 1. The `className` Prop

In v3, all components accept a `className` prop for styling. This is enabled by NativeWind's compiler which transforms Tailwind classes into native styles.

```tsx
<Box className="bg-primary-500 p-4 rounded-lg">
  <Text className="text-white font-bold">Hello World</Text>
</Box>
```

### 2. TVA (Tailwind Variants)

Gluestack UI uses the `tva` (Tailwind Variants) utility to manage component variants and states. This replaces the complex configuration objects used in v2.

Example of a custom component using `tva`:

```tsx
import { tva } from "@gluestack-ui/utils/nativewind-utils";

const myButtonStyle = tva({
  base: "p-4 rounded",
  variants: {
    action: {
      primary: "bg-blue-500",
      secondary: "bg-gray-500",
    },
  },
});

export const MyButton = ({ action = "primary", className }) => (
  <Pressable className={myButtonStyle({ action, class: className })}>
    {/* ... */}
  </Pressable>
);
```

### 3. Native-Specific Classes

NativeWind v4 supports native-only classes like `shadow-md`, `elevation`, and platform-specific prefixes:

- `ios:bg-blue-500`
- `android:bg-green-500`
- `web:hover:bg-red-500`

## Responsive Design

Use Tailwind's standard breakpoints (`sm:`, `md:`, `lg:`) to create responsive layouts that work across mobile and web.

```tsx
<HStack className="flex-col md:flex-row gap-4">
  <Box className="w-full md:w-1/2" />
  <Box className="w-full md:w-1/2" />
</HStack>
```

## Best Practices

- **Avoid StyleSheet**: Use `className` for all styling to maintain consistency and portability.
- **Composition over Inheritance**: Use compound component patterns to customize layouts.
- **Utility First**: Leverage Tailwind's utility classes for spacing, colors, and typography.

## The Design tokens

All colors and spacing are driven by the `tailwind.config.js`. We use **CSS Variables** (`var(--color-...)`) to allow the [Dynamic Theming](../../theming-architecture.md) to work seamlessly on web.

## Performance Optimization

NativeWind v4 is significantly faster than previous versions because it avoids runtime style calculation as much as possible.

- **Tip**: Avoid using dynamic string interpolation in `className` (e.g., `className={`p-${padding}`}`) as it prevents static analysis. Use `style` props or `tailwind-variants` for true dynamic styles.
