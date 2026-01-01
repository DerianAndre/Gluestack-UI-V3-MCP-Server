---
title: Select
description: A component that allows users to choose one option from a list of choices.
---

# Select

The Select component allows users to choose one option from a list of choices. It uses an Actionsheet-style overlay on mobile and a popover-style interface on web.

## Anatomy

```tsx
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  DragIndicatorWrapper,
  DragIndicator,
  SelectItem,
} from "@/components/ui/select";

export default () => (
  <Select>
    <SelectTrigger>
      <SelectInput />
      <SelectIcon />
    </SelectTrigger>
    <SelectPortal>
      <SelectBackdrop />
      <SelectContent>
        <DragIndicatorWrapper>
          <DragIndicator />
        </DragIndicatorWrapper>
        <SelectItem />
      </SelectContent>
    </SelectPortal>
  </Select>
);
```

## API Reference

### Select

| Prop            | Type                      | Default | Description                                      |
| :-------------- | :------------------------ | :------ | :----------------------------------------------- |
| `selectedValue` | `string`                  | -       | The value of the selected item.                  |
| `onValueChange` | `(value: string) => void` | -       | Callback called when the selected value changes. |
| `isDisabled`    | `boolean`                 | `false` | If true, the select is disabled.                 |

### SelectTrigger

Standard `Pressable` wrapper for the input area.

### SelectItem

| Prop         | Type      | Default | Description                         |
| :----------- | :-------- | :------ | :---------------------------------- |
| `label`      | `string`  | -       | The text to display for the item.   |
| `value`      | `string`  | -       | The value associated with the item. |
| `isDisabled` | `boolean` | `false` | If true, the item is disabled.      |

## Usage Example

```tsx
import { ChevronDownIcon } from "lucide-react-native";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  DragIndicatorWrapper,
  DragIndicator,
  SelectItem,
} from "@/components/ui/select";
import { Icon } from "@/components/ui/icon";

export const MySelect = () => {
  return (
    <Select onValueChange={(value) => console.log(value)}>
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Select option" />
        <SelectIcon className="mr-3" as={ChevronDownIcon} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <DragIndicatorWrapper>
            <DragIndicator />
          </DragIndicatorWrapper>
          <SelectItem label="UX Research" value="ux" />
          <SelectItem label="Web Development" value="web" />
          <SelectItem label="Cross Platform Development" value="cross" />
          <SelectItem label="UI Design" value="ui" />
          <SelectItem label="Backend Development" value="backend" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};
```
