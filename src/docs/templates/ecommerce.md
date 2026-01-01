# E-commerce Templates

Complete shopping experience from product discovery to checkout.

## 📂 Screens

### 1. Product Listing

- Visual grid of products with price, rating, and "add to cart" actions.
- Sidebar filters for categories, size, and price range.

### 2. Product Details

- Hero image gallery with horizontal scrolling.
- Detailed specifications, reviews, and related products.

### 3. Shopping Cart

- List of added items with quantity controls and "save for later" options.
- Automated subtotal calculation.

### 4. Checkout & Payment

- Multi-step checkout flow: Shipping -> Payment -> Confirmation.
- Saved address and payment method selection.

## 🚀 Usage Example

E-commerce screens use specialized components for product display. Here is a pattern for a **Shopping Gallery**:

```tsx
import { Grid, GridItem } from "@/components/ui/grid";
import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";

const ProductCard = ({ name, price, imageSource }) => (
  <Box className="p-2 border border-outline-100 rounded-lg">
    <Image source={imageSource} alt={name} className="h-40 w-full" />
    <Text bold className="mt-2">
      {name}
    </Text>
    <Text size="sm" className="text-typography-500">
      {price}
    </Text>
  </Box>
);

export default function ProductList() {
  return (
    <Grid className="gap-4">
      <GridItem _extra={{ className: "col-span-6" }}>
        <ProductCard name="Classic T-Shirt" price="$25.00" />
      </GridItem>
      {/* More items */}
    </Grid>
  );
}
```

## ✨ Features

- **Optimized Images**: Uses `react-native-blurhash` for smooth loading transitions.
- **Interactive UI**: Animated buttons and smooth transitions between listing and detail views.
