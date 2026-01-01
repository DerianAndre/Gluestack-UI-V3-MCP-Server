# Settings Templates

User preference and application configuration screens.

## 📂 Screens

### 1. Account Settings

- **Path**: `app/templates/settings/account`
- **Description**: View and edit user personal information, email, and password.

### 2. Notification Preferences

- **Path**: `app/templates/settings/notifications`
- **Description**: Toggle switches for push, email, and SMS notifications.

### 3. Privacy & Security

- **Path**: `app/templates/settings/privacy`
- **Description**: Manage data sharing preferences and security sessions.

### 4. Appearance

- **Path**: `app/templates/settings/appearance`
- **Description**: Dedicated screen for Theme switching (Light/Dark/System) and color scheme selection.

## 🚀 Usage Example

Settings screens often use `RadioGroup` for preference selection. Here is a pattern for **Shipping Address Selection**:

```tsx
import {
  RadioGroup,
  Radio,
  RadioIndicator,
  RadioIcon,
} from "@/components/ui/radio";
import { Card } from "@/components/ui/card";
import { VStack, HStack } from "@/components/ui/vstack";
import { Circle } from "lucide-react-native";

export const AddressCard = ({ address, onSelect }) => (
  <Card
    variant="elevated"
    className="bg-background-0 border border-outline-100"
  >
    <HStack space="md" className="items-center">
      <Radio value={address.id}>
        <RadioIndicator>
          <RadioIcon as={Circle} />
        </RadioIndicator>
      </Radio>
      <VStack>
        <Text bold>{address.label}</Text>
        <Text size="sm">{address.street}</Text>
      </VStack>
    </HStack>
  </Card>
);
```

## ✨ Features

- **Form Integration**: Uses `FormControl` and `Input` with clear labels.
- **State Feedback**: Immediate visual feedback for toggle and selection changes.
- **Clean Layouts**: Minimalist design focused on readability and ease of use.
