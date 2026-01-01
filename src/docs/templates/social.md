# Social Templates

Engagement-focused screens for user profiles, feeds, and social interactions.

## 📂 Screens

### 1. User Profile

- **Path**: `app/templates/social/profile`
- **Description**: Comprehensive profile view with avatar, stats (followers, following), bio, and post grid.

### 2. Social Feed

- **Path**: `app/templates/social/feed`
- **Description**: Scrollable list of posts with support for images, text, likes, and comments.

### 3. Post Creation

- **Path**: `app/templates/social/create-post`
- **Description**: Modal or screen for composing new content with image attachment support.

### 4. Notifications

- **Path**: `app/templates/social/notifications`
- **Description**: List of social interactions (likes, comments, new followers) with time stamps.

## 🚀 Usage Example

Social screens often involve complex lists and profile headers. Here is a pattern for a **User Profile Header**:

```tsx
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Button, ButtonIcon } from "@/components/ui/button";
import { ArrowLeft, MoreHorizontal } from "lucide-react-native";

export const ProfileHeader = () => (
  <Box className="h-96 relative bg-background-50">
    <Image
      className="w-full h-full mx-auto"
      source={{ uri: "https://images.unsplash.com/photo-1..." }}
    />
    <Box className="absolute top-2 left-0 right-0">
      <HStack className="justify-between items-center px-4">
        <Button size="lg" variant="link">
          <ButtonIcon as={ArrowLeft} className="text-white" />
        </Button>
        <Button size="lg" variant="link">
          <ButtonIcon as={MoreHorizontal} className="text-white" />
        </Button>
      </HStack>
    </Box>
  </Box>
);
```

## ✨ Features

- **Dynamic Assets**: Integration with Unsplash for realistic placeholder images.
- **Engagement UI**: Interactive icons (Lucide) for social actions.
- **Responsive Lists**: Optimized for fast scrolling using virtualization principles.
