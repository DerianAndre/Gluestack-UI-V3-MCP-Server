# Pricing Templates

Clear and persuasive layouts for subscription plans and service tiers.

## 📂 Screens

### 1. Pricing Plans

- **Path**: `app/templates/pricing/plans`
- **Description**: Comparative list of subscription tiers (Free, Pro, Enterprise) with feature lists.

### 2. Plan Comparison

- **Path**: `app/templates/pricing/comparison`
- **Description**: Detailed table comparing features across different tiers.

## 🚀 Usage Example

Pricing templates use cards with badges to highlight specific tiers. Here is a pattern for a **Pricing Plan Card**:

```tsx
import { Card } from "@/components/ui/card";
import { Box } from "@/components/ui/box";
import { VStack, HStack } from "@/components/ui/vstack";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Heading, Text } from "@/components/ui/text";

export const PricingCard = ({ plan }) => (
  <Card
    className={`p-4 rounded-xl border ${
      plan.popular ? "bg-background-50 border-none" : "border-outline-200"
    }`}
  >
    <HStack className="justify-between items-center">
      <VStack>
        <Heading size="lg">{plan.name}</Heading>
        <Text size="2xl" bold>
          ${plan.price}
          <Text size="sm">/{plan.period}</Text>
        </Text>
      </VStack>
      {plan.popular && (
        <Badge action="primary">
          <BadgeText>Popular</BadgeText>
        </Badge>
      )}
    </HStack>
    {/* Plan features list */}
  </Card>
);
```

## ✨ Features

- **Visual Hierarchy**: Highlighted "Most Popular" or "Best Value" plans.
- **Toggle Support**: Switch between Monthly and Annual billing using custom `ButtonGroup`.
- **Conversion Focused**: Prominent CTAs for upgrading or starting a trial.
