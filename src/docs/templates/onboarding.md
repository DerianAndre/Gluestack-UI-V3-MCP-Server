# Onboarding Templates

First-time user experience (FTUE) screens to guide new users through the app's value proposition.

## 📂 Screens

### 1. Welcome Screen

- **Path**: `app/templates/onboarding/welcome`
- **Description**: High-impact hero screen with brand messaging and primary signup/login actions.

### 2. Feature Walkthrough

- **Path**: `app/templates/onboarding/walkthrough`
- **Description**: Swipable carousel (using `@legendapp/motion`) highlighting key app features.

### 3. Multi-step Onboarding

- **Path**: `app/templates/onboarding/setup`
- **Description**: Sequence of screens for initial profile setup (interests, theme preference, etc.).

## 🚀 Usage Example

Onboarding screens use progress indicators and navigation transitions. Here is a pattern for a **Feature Focus Screen**:

```tsx
import { Box } from "@/components/ui/box";
import { VStack, HStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Icon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";

export const OnboardingStep = ({ step, onNext, onSkip }) => (
  <VStack className="flex-1 bg-background-0">
    <Box className="flex-1 items-center justify-center">
      <Icon as={step.icon} size="xl" />
      <Heading size="2xl" className="text-center mt-8">
        {step.title}
      </Heading>
      <Text className="text-center text-typography-600 px-6">
        {step.description}
      </Text>
    </Box>
    <VStack space="md" className="p-6">
      <Button size="lg" onPress={onNext}>
        <ButtonText>Next</ButtonText>
      </Button>
      <Button variant="link" onPress={onSkip}>
        <ButtonText>Skip</ButtonText>
      </Button>
    </VStack>
  </VStack>
);
```

## ✨ Features

- **Fluid Animations**: Smooth transitions between steps using `react-native-reanimated`.
- **High Retention Design**: Clear call-to-actions (CTAs) and progress indicators.
- **Interactive Elements**: Engaging micro-animations to improve the onboarding experience.
