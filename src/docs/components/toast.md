---
title: Toast
description: A component that provides feedback to users when they perform an action.
---

# Toast

Toasts are used to provide feedback to users when they perform an action. They appear temporarily and can be customized with different actions and variants.

## Anatomy

```tsx
import {
  Toast,
  ToastTitle,
  ToastDescription,
  useToast,
} from "@/components/ui/toast";

export default () => {
  const toast = useToast();
  // ...
};
```

## API Reference

### Toast

| Prop      | Type                                                      | Default   | Description                       |
| :-------- | :-------------------------------------------------------- | :-------- | :-------------------------------- |
| `action`  | `'error' \| 'warning' \| 'success' \| 'info' \| 'muted' ` | `'muted'` | The semantic action of the toast. |
| `variant` | `'solid' \| 'outline'`                                    | `'solid'` | The visual variant of the toast.  |

### useToast Hook

Returns an object with:

- `show(options)`: Function to display a toast.
  - `placement`: `'top' | 'top left' | 'top right' | 'bottom' | 'bottom left' | 'bottom right'`
  - `render`: `({ id }) => ReactNode`

## Usage Example

```tsx
import {
  useToast,
  Toast,
  ToastTitle,
  ToastDescription,
} from "@/components/ui/toast";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";

export const ToastExample = () => {
  const toast = useToast();

  return (
    <Button
      onPress={() => {
        toast.show({
          placement: "top",
          render: ({ id }) => {
            return (
              <Toast nativeId={id} action="success" variant="solid">
                <VStack space="xs">
                  <ToastTitle>Saved Successfully</ToastTitle>
                  <ToastDescription>
                    Your changes have been saved.
                  </ToastDescription>
                </VStack>
              </Toast>
            );
          },
        });
      }}
    >
      <ButtonText>Show Toast</ButtonText>
    </Button>
  );
};
```
