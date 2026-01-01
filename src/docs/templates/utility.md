# Utility & Specialized Templates

Niche application modules and specialized utility screens.

## 📂 Screens

### 1. Task Management

- **Path**: `app/templates/utility/task-management`
- **Description**: Kanban boards, task lists, and project tracking interfaces.

### 2. Crypto Tracker

- **Path**: `app/templates/utility/crypto-tracker`
- **Description**: Real-time asset tracking with portfolio overview and transaction history.

### 3. Stock Graph

- **Path**: `app/templates/utility/stock-graph`
- **Description**: Data-driven financial charts for stock analysis.

### 4. Hotel Search

- **Path**: `app/templates/utility/hotel-search`
- **Description**: Map-integrated search for accommodations with price filters and date selection.

### 5. Restaurant Detail

- **Path**: `app/templates/utility/restaurant-detail`
- **Description**: Menu listing, location details, and ordering interface for food apps.

## 🚀 Usage Example

Utility templates often involve task lists and filtered views. Here is a pattern for a **Task Management List**:

```tsx
import { VStack, HStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Filter, Plus } from "lucide-react-native";

export const TaskControls = ({ onFilter, onAdd }) => (
  <HStack space="sm" className="items-center px-4">
    <Button
      variant="outline"
      className="flex-1 bg-background-100 border-0 rounded-2xl"
      onPress={onFilter}
    >
      <ButtonIcon as={Filter} className="text-typography-900" />
      <ButtonText className="text-typography-900">Filter</ButtonText>
    </Button>
    <Button size="lg" className="rounded-2xl" onPress={onAdd}>
      <ButtonIcon as={Plus} />
      <ButtonText>Add Task</ButtonText>
    </Button>
  </HStack>
);
```

## ✨ Features

- **Data Integration**: Designed to work with real-time API data.
- **Complex UI**: Sophisticated components like custom progress rings and multi-data charts.
- **Niche Focus**: Pre-built logic for specific industry use cases (Fintech, Travel, Food).
