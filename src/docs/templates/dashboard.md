# Dashboard Templates

Advanced dashboard layouts for analytics, user management, and operational overview.

## 📂 Categories

### 1. Analytics & Metrics

- Focus on data visualization using `react-native-chart-kit`.
- Quick-glance metric cards for KPIs.

### 2. User & Project Management

- Data tables with sorting, filtering, and pagination.
- Detailed profile views and action-oriented sidebar navigation.

### 3. Activity Feed

- Real-time updates with scrollable lists and notification badges.

## 🚀 Usage Example

Dashboard templates often use `react-native-chart-kit` for visualization. Here is how a **Finance Dashboard** is typically structured:

```tsx
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { LineChart } from "react-native-chart-kit";

const DashboardHeader = () => (
  <VStack space="xs">
    <Heading size="xl">Finance Overview</Heading>
  </VStack>
);

const TrendChart = ({ data, width, config }) => (
  <LineChart
    data={data}
    width={width}
    height={220}
    chartConfig={config}
    bezier
  />
);

export default function FinanceDashboard() {
  return (
    <Box className="flex-1 bg-background-0 p-4">
      <VStack space="xl">
        <DashboardHeader />
        {/* Metric Cards and Charts go here */}
      </VStack>
    </Box>
  );
}
```

## ✨ Features

- **Sidebar & Tabs**: Integrated navigation using `DrawerContext`.
- **Responsive Grid**: Dynamic column layouts using `Grid` and `HStack/VStack`.
- **Charts Integration**: Pre-configured charts for metrics.
