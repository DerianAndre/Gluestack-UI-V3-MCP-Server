# RTLLangContext

The `RTLLangContext` handles Right-to-Left (RTL) layout support, essential for languages like Arabic or Hebrew.

## API Reference

### `useRTL()` Hook

Returns:

- `isRTL`: `boolean`. Whether RTL is active.
- `direction`: `"ltr" | "rtl"`. Current text/layout direction.
- `toggleRTL`: `() => void`. Toggles between LTR and RTL.
- `setRTL`: `(rtl: boolean) => void`. Explicitly sets RTL mode.

## Usage Example

```tsx
import { useRTL } from "@/utils/rtl-lang-context";
import { Switch } from "@/components/ui/switch";
import { HStack, Text } from "@/components/ui/hstack";

export const RTLSelfToggle = () => {
  const { isRTL, toggleRTL } = useRTL();

  return (
    <HStack space="md" className="items-center">
      <Text>Enable RTL</Text>
      <Switch value={isRTL} onValueChange={toggleRTL} />
    </HStack>
  );
};
```

## Implementation Details

- **React Native**: Updates `I18nManager.allowRTL` and `I18nManager.forceRTL`. _Note: A restart might be required on native platforms for full effect._
- **Web**: Sets the `dir` attribute on `document.documentElement` (`<html dir="rtl">`) and updates the `--direction` CSS variable.
- **Iframe Support**: Like `ThemeContext`, it synchronizes state with parent windows via `postMessage`.
