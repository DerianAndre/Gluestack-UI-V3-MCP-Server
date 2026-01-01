# React Native Core Guide

This repository leverages **React Native** to provide a truly native mobile experience while maintaining a unified codebase for iOS, Android, and Web.

## Core Components

# React Native Core (v3 Implementation)

Gluestack UI v3 (3.0.11) is designed to give you "Full Control" over your React Native components while providing high-level abstractions for accessibility and consistency.

## Foundation

At its core, v3 uses:

1.  **React Native**: For cross-platform primitives (View, Text, Pressable).
2.  **NativeWind v4**: For high-performance, pre-compiled Tailwind CSS styling.
3.  **React Aria Components**: For robust accessibility and state management (especially on Web).

## Component Anatomy

All components follow a **Compound Component** pattern. This means instead of a single component with 20 props, you use a main component and its sub-components to build your UI.

### Example: Accordion

```tsx
<Accordion>
  <AccordionItem value="item-1">
    <AccordionHeader>
      <AccordionTrigger>
        <AccordionTitleText>Section Title</AccordionTitleText>
        <AccordionIcon as={ChevronDownIcon} />
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>
      <AccordionContentText>Hidden content goes here.</AccordionContentText>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Styling Patterns

Components use **Tailwind Variants (TVA)** to manage styles. This allows for clean, declarative state-based styling (hover, focus, active, disabled).

```tsx
// Inside a component's styles.tsx or index.tsx
const buttonStyle = tva({
  base: "bg-blue-500 p-4",
  variants: {
    isDisabled: {
      true: "opacity-50",
    },
  },
});
```

## Performance

- **NativeWind Compiler**: Styles are generated at build time, reducing runtime style calculations.
- **Tree Shaking**: Since you copy the components you need into your project, your bundle only includes what you use.
- **Reanimated v4**: Utilizes the latest performance improvements for smooth animations on native platforms.

## Accessibility

Every component is built with accessibility (ARIA) as a first-class citizen. This includes:

- Correct roles and labels.
- Keyboard navigation (Tab, Enter, Arrow keys).
- Screen reader support.

### 2. Physical Dimensions

Use the `useWindowDimensions` hook for responsive calculations that react to orientation changes.

### 3. Keyboard Handling

Interactive forms use `KeyboardAvoidingView` or `scroll-view` patterns to ensure inputs remain visible when the keyboard is open.

## Web Compatibility

Thanks to `react-native-web`, this project runs in the browser.

- **Mapping**: `View` becomes `div`, `Text` becomes `span`/`p`.
- **Optimization**: We use standard web routing (Expo Router) to support SEO and browser history.
