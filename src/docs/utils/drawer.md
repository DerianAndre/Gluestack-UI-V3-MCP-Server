# DrawerContext

The `DrawerContext` provides a simple state management system for custom navigation drawers or sidebars across the Pro templates.

## API Reference

### `useDrawer()` Hook

Returns:

- `isOpen`: `boolean`. Whether the drawer is currently visible.
- `openDrawer`: `() => void`. Sets `isOpen` to `true`.
- `closeDrawer`: `() => void`. Sets `isOpen` to `false`.

## Usage Example

```tsx
import { useDrawer } from "@/utils/drawer-context";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Menu } from "lucide-react-native";
import { Drawer } from "@/components/ui/drawer";

export const Navbar = () => {
  const { openDrawer } = useDrawer();

  return (
    <Button onPress={openDrawer} variant="link">
      <ButtonIcon as={Menu} />
    </Button>
  );
};

export const AppDrawer = () => {
  const { isOpen, closeDrawer } = useDrawer();

  return (
    <Drawer isOpen={isOpen} onClose={closeDrawer}>
      {/* Drawer Content */}
    </Drawer>
  );
};
```
