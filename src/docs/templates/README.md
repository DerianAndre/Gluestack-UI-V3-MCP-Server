# Gluestack UI Pro Templates

This project includes a wide range of production-ready templates built with Gluestack UI and NativeWind.

## Categories

- [**Authentication**](./authentication.md): Biometric login, Create password, Forgot password, Login email, Login methods, OTP verification, Signup.
- [**E-commerce**](./ecommerce.md): Product listing, Product details, Shopping cart, Checkout.
- [**Dashboard**](./dashboard.md): Analytics, User management, Activity feed.
- [**Onboarding**](./onboarding.md): Welcome screens, Feature walkthroughs, Initial setup.
- [**Social**](./social.md): Profile view, Feeds, Notifications, Post creation.
- [**Settings**](./settings.md): Account, Notifications, Appearance, Privacy.
- [**Media**](./media.md): Gallery, Video Player, File uploads.
- [**Pricing**](./pricing.md): Plan comparisons, Subscription tiers.
- [**Utility & Specialized**](./utility.md): Task management, Crypto tracker, Hotel search, Financial graphs.
- [**Niche Patterns**](./patterns.md): Combobox, Flyout menus, Testimonials, Wallet.

## Usage

Each template is located in `app/templates/[category]/[screen]`. To use a template, you can copy the entire folder to your project or reference individual components.

Example for `authentication/login-email`:

```bash
cp -r app/templates/authentication/login-email ./my-new-app/
```

Then import it in your router or screen:

```tsx
import LoginEmailScreen from "./login-email";
```
