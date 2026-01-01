# Authentication Templates

High-conversion authentication screens with multiple methods and verification flows.

## 📂 Screens

### 1. Login Email

- **Path**: `app/templates/authentication/login-email`
- **Description**: Standard email-based login screen with focus on simplicity and speed.

### 2. Login Methods

- **Path**: `app/templates/authentication/login-methods`
- **Description**: Social login integration (Google, Apple, Facebook) alongside email login.

### 3. Signup

- **Path**: `app/templates/authentication/signup`
- **Description**: Multi-field registration form with validation and terms of service link.

### 4. OTP Verification

- **Path**: `app/templates/authentication/otp-verification`
- **Description**: Secure 6-digit PIN input for 2FA or email/phone verification.

### 5. Forgot Password

- **Path**: `app/templates/authentication/forgot-password`
- **Description**: Simple email retrieval flow to reset user credentials.

### 6. Create Password

- **Path**: `app/templates/authentication/create-password`
- **Description**: New password setup with complexity requirements and confirmation.

### 7. Biometric Login

- **Path**: `app/templates/authentication/biometric`
- **Description**: Integrated support for FaceID/TouchID or Fingerprint authentication.

## 🚀 Usage Example

Most authentication screens follow a similar `VStack` structure. Here is a simplified version of the **Login Email** screen:

```tsx
import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function LoginEmail() {
  return (
    <VStack className="bg-background-0 h-full gap-8 pt-8 px-5">
      <VStack className="max-w-2xl mx-auto h-full" space="md">
        <VStack space="md">
          <Heading size="xl">Log in / Sign up</Heading>
          <Text size="lg" className="text-typography-400">
            Enter your email to sign up or login.
          </Text>
        </VStack>
        <Input variant="underlined" size="xl">
          <InputField placeholder="Your email" />
        </Input>
        <Button size="lg">
          <ButtonText>Continue with email</ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
}
```

## ✨ Features

- Fully responsive layouts for Mobile (iOS/Android) and Web.
- Form validation as standard.
- Consistent branding using the custom design system.
- Accessible ARIA labels for Screen Readers.
