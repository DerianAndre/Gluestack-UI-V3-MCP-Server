# Navigation & Routing

This project uses **Expo Router**, a file-based routing system built on top of React Navigation. It brings the simplicity of web routing (like Next.js) to mobile applications.

## Directory Structure

All routes are defined within the `app/` directory:

- **`app/index.tsx`**: The entry point or "Home" screen.
- **`app/_layout.tsx`**: The root layout that wraps all screens. It initializes providers (Theme, etc.) and navigation structures.
- **`app/templates/`**: Organized sub-directories for each template category.

## Routing Patterns

### 1. Stack Navigation

Screens are naturally organized as a stack. Navigating to a deeper file path pushes a new screen onto the stack.

### 2. Grouped Routes

Folders named with parentheses, like `(tabs)/`, allow you to group routes for a shared layout without affecting the URL structure.

### 3. Shared Layouts

The Pro templates often use a custom **Drawer** or **Sidebar** layout. The root `_layout.tsx` sets up the `Drawer` component from `react-native-drawer` or a custom implementation using our shared `DrawerContext`.

## Navigating between Screens

Use the `Link` component or the `useRouter` hook:

```tsx
import { Link, useRouter } from "expo-router";

// Using Link
<Link href="/templates/authentication/login-email">Go to Login</Link>;

// Using Hook
const router = useRouter();
<Button onPress={() => router.push("/templates/dashboard/finance-overview")}>
  <ButtonText>Dashboard</ButtonText>
</Button>;
```

## Route Metadata

When adding a new screen to a template:

1. Create the `index.tsx` in a new folder under `app/templates/[category]/[screen]`.
2. Expo Router automatically detects the file and makes it accessible via its path.
3. If the screen needs specific navigation headers, configure them via the `<Stack.Screen />` or `<Drawer.Screen />` components within the screen file.

## Deep Linking

Expo Router handles deep linking automatically based on the directory structure. You can test deep links using the `npx uri-scheme` tool or by typing URLs directly in the development browser.
