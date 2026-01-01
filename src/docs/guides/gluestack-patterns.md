# Gluestack Patterns

gluestack UI v3 provides the architectural foundation for all Pro templates. Understanding these patterns is essential for maintaining and extending the UI.

## Compound Component Architecture

Most complex components in this repo follow the **Compound Component** pattern. This provides maximum flexibility for layout composition and is a core part of the gluestack UI v3 philosophy.

```tsx
<Modal isOpen={show} onClose={() => setShow(false)}>
  <ModalBackdrop />
  <ModalContent>
    <ModalHeader>
      <Heading>Security Warning</Heading>
    </ModalHeader>
    <ModalBody>
      <Text>Are you sure you want to delete this?</Text>
    </ModalBody>
    <ModalFooter>
      <Button action="negative">
        <ButtonText>Delete</ButtonText>
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

### Advantages

- **Control**: You can reorder sub-components easily.
- **Clean Props**: No "giant prop objects" to pass down; each sub-component handles its own logic.
- **Tailwind Integration**: All sub-components accept standard Tailwind classes via `className`.

## Styling with NativeWind & TVA

In gluestack UI v3, styling has moved from a custom engine to **NativeWind v4** and **Tailwind Variants (TVA)**. This allows for high-performance, utility-first styling that works seamlessly across Web and Native.

### The TVA Pattern

Components use `tva` to define their base styles and variants:

```tsx
const buttonStyle = tva({
  base: "rounded-xl items-center justify-center",
  variants: {
    action: {
      primary: "bg-primary-500",
      secondary: "bg-secondary-500",
    },
    size: {
      md: "px-4 h-10",
      lg: "px-6 h-12",
    },
  },
});
```

## Customizing Components

In `components/ui/`, each folder contains the component definition.

- **`index.tsx`**: Contains the React component structure and the styles defined using `tva`.

If you need a new button variant, you should add it to the `variants` object within the `buttonStyle` (or equivalent) `tva` definition inside `index.tsx`.

## Accessibility

gluestack UI v3 integrates **React Aria** (for Web) and specialized native handlers.

- **Roles**: Automatically applies ARIA roles.
- **Keyboard Navigation**: Pre-configured for tab indexing and focus traps.
- **Interactive States**: Uses `data-` attributes (e.g., `data-[hover=true]`) that map to Tailwind variants.
