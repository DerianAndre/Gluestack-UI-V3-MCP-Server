---
title: SafeAreaView
description: A component that helps in rendering content within the safe area boundaries of a device.
---

# SafeAreaView

SafeAreaView is used to render content within the safe area boundaries of a device. It is essentially a wrapper around the React Native `SafeAreaView` with additional utility and styling support through NativeWind.

## Anatomy

```tsx
import { SafeAreaView } from "@/components/ui/safe-area-view";

export default () => <SafeAreaView>{/* Page Content */}</SafeAreaView>;
```

## Usage Example

```tsx
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Text } from "@/components/ui/text";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <Text className="p-4">This content is inside the safe area.</Text>
    </SafeAreaView>
  );
}
```
