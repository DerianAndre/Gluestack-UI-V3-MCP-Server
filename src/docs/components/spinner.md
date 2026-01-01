---
title: Spinner
description: A component used to show a loading state for a process.
---

# Spinner

The Spinner component is used to show a loading state for a process. It is a wrapper around the React Native `ActivityIndicator`.

## Anatomy

```tsx
import { Spinner } from "@/components/ui/spinner";

export default () => <Spinner />;
```

## API Reference

### Spinner

| Prop    | Type                           | Default   | Description           |
| :------ | :----------------------------- | :-------- | :-------------------- |
| `size`  | `'small' \| 'large' \| number` | `'small'` | Size of the spinner.  |
| `color` | `string`                       | -         | Color of the spinner. |

## Usage Example

```tsx
import { Spinner } from "@/components/ui/spinner";
import { Center } from "@/components/ui/center";

export const LoadingScreen = () => {
  return (
    <Center className="flex-1">
      <Spinner size="large" color="#3b82f6" />
    </Center>
  );
};
```
