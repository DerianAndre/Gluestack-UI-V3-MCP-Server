# Media Templates

Rich media consumption and management screens.

## 📂 Screens

### 1. Image Gallery

- **Path**: `app/templates/media/gallery`
- **Description**: Grid view of images with lightbox functionality.

### 2. Video Player

- **Path**: `app/templates/media/video-player`
- **Description**: Full-screen video playback interface with custom controls.

### 3. Media Upload

- **Path**: `app/templates/media/upload`
- **Description**: Interface for selecting and uploading multiple files with progress indicators.

## 🚀 Usage Example

Media screens leverage sliders and blurred backgrounds. Here is a pattern for a **Media Player Controls**:

```tsx
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@/components/ui/slider";
import { HStack, VStack } from "@/components/ui/vstack";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Play, SkipForward, SkipBack } from "lucide-react-native";

export const MediaControls = ({ currentTime, duration, onSeek }) => (
  <VStack space="lg" className="px-4 py-8 bg-background-0/80">
    <Slider value={currentTime} maxValue={duration} onChange={onSeek}>
      <SliderTrack className="h-1 bg-typography-400">
        <SliderFilledTrack className="bg-primary-500" />
      </SliderTrack>
      <SliderThumb className="w-4 h-4 bg-primary-500" />
    </Slider>
    <HStack space="lg" className="justify-center">
      <Button variant="link">
        <ButtonIcon as={SkipBack} />
      </Button>
      <Button variant="outline" className="rounded-full">
        <ButtonIcon as={Play} />
      </Button>
      <Button variant="link">
        <ButtonIcon as={SkipForward} />
      </Button>
    </HStack>
  </VStack>
);
```

## ✨ Features

- **Visual Excellence**: High-fidelity UI using `expo-blur` and gradients.
- **Smooth Loading**: Uses `react-native-blurhash` to provide placeholder colors during loading.
- **Touch Friendly**: Optimized hit targets for playback and navigation controls.
