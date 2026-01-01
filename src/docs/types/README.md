# TypeScript Types & Data Patterns

The project leverages TypeScript for robust type safety. While global type definitions are minimal, the templates follow consistent data modeling patterns.

## Global Configuration Types

### Theme Types

Found in `utils/theme-context/index.tsx`:

- `ModeType`: `'light' | 'dark' | 'system'`.
- `ThemeContextType`: Defines the shape of the theme management state.

### Color Types

Found in `utils/color-palette.ts`:

- `ColorName`: Union of all available primary color names (e.g., `'blue' | 'emerald' | 'rose'`).
- `ColorShades`: Record of mapping 50-950 shade keys to hex strings.

## Template Data Patterns

Pro templates use structured interfaces for mock data. Understanding these patterns is key to integrating real APIs.

### Social Data Pattern

Commonly used in `app/templates/social`:

```tsx
export interface Comment {
  id: number;
  user: string;
  avatar: string;
  content: string;
  likes: number;
  timestamp: string;
  isLiked: boolean;
  image?: string;
}
```

### Dashboard Data Pattern

Commonly used in `app/templates/dashboard`:

```tsx
export interface ChartDataPoint {
  date: string;
  value: number;
}

export interface FinanceOverview {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  balanceChangePercentage: number;
}
```

## Component Types

UI components export their prop types following the naming convention `I[ComponentName]Props`. These are documented individually in the [Component Docs](../components/README.md).

## Utility Type Definitions

### Blurhash

- `types/react-native-blurhash.d.ts`: Provides ambient declarations for the `react-native-blurhash` native module to prevent linting errors when using placeholder image hashes.
