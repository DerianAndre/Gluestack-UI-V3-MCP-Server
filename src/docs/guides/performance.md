# Performance & Optimization

Building high-performance mobile apps requires careful management of rendering and assets. This guide outlines the strategies used in the Pro templates.

## Animations with Reanimated

For smooth 60FPS animations, we use **React Native Reanimated**.

- **The Golden Rule**: Always perform layout animations on the **UI thread** to avoid stuttering caused by the JS engine being busy.
- **Usage**: See `app/templates/onboarding` for examples of layout transitions.

## List Optimization

For large datasets (like social feeds or e-commerce galleries), standard `ScrollView` is not enough.

- **FlatList**: Use for basic dynamic lists with virtualization.
- **FlashList**: (Recommended) Provided by Shopify, it's significantly faster than FlatList by recycling cells instead of destroying them.
- **Key Extractors**: Always provide a unique `key` to items to prevent unnecessary re-renders.

## Image Management

Images are one of the biggest performance bottlenecks.

### 1. Blurhash Placeholders

We use `react-native-blurhash` to show beautiful, colored placeholders while high-res images load.

```tsx
<Blurhash
  blurhash="L6PZf6Scale=~qj[fQj[fQj[fQj[f"
  decodeHeight={16}
  decodeWidth={16}
  style={{ flex: 1 }}
/>
```

### 2. Sizing & Scaling

Avoid downloading 4K images for small thumbnails. Ensure your backend provides optimized versions or use `expo-image` for advanced caching and resizing.

## Bundle Size (Web)

To keep the web experience fast:

- **Tree-shaking**: We import components directly to ensure only used code is bundled.
- **Dynamic Imports**: Use `React.lazy` for large, secondary routes to reduce the initial load time.

## NativeWind Performance

As stated in the [Tailwind Guide](./tailwind-nativewind.md), NativeWind v4 moves styling logic to the build phase, which drastically improves render times compared to traditional `styled-components`.
