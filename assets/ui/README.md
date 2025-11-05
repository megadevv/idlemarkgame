# UI Buttons Specification

## Overview
Interactive button assets for primary game actions.

## Requirements
- **Format**: PNG with transparency
- **Dimension**: 300×80 pixels
- **Style**: Bright, cartoonish, with 3D button effect
- **States**: Normal, Pressed, Disabled
- **Optimization**: <40KB per button state

## Primary Action Buttons

### 1. Cast Hook Button
- **Filename Base**: `button_cast`
- **Variants**: 
  - `button_cast_normal.png`
  - `button_cast_pressed.png`
  - `button_cast_disabled.png`
- **Description**: Main gameplay action button
- **Visual Elements (Normal)**:
  - Vibrant blue/cyan gradient
  - White text: "CAST HOOK"
  - Hook icon on left side
  - Subtle drop shadow
  - Rounded corners (radius: 16px)
  - Slight 3D bevel effect
- **Visual Elements (Pressed)**:
  - Darker shade (pressed inward)
  - Smaller shadow
  - Slightly offset content
- **Visual Elements (Disabled)**:
  - Grayscale or very light blue
  - 50% opacity text
  - No shadow

### 2. Upgrade Button
- **Filename Base**: `button_upgrade`
- **Variants**:
  - `button_upgrade_normal.png`
  - `button_upgrade_pressed.png`
  - `button_upgrade_disabled.png`
- **Description**: Access upgrade menu
- **Visual Elements (Normal)**:
  - Green gradient (#00CC66 to #00FF88)
  - White text: "UPGRADE"
  - Upward arrow icon on left
  - Star/sparkle accent
  - Same shape as Cast Hook
- **Visual Elements (Pressed)**:
  - Darker green, pressed effect
- **Visual Elements (Disabled)**:
  - Gray, faded text

### 3. Shop Button
- **Filename Base**: `button_shop`
- **Variants**:
  - `button_shop_normal.png`
  - `button_shop_pressed.png`
  - `button_shop_disabled.png`
- **Description**: Open in-game shop
- **Visual Elements (Normal)**:
  - Purple/magenta gradient (#BB00FF to #DD55FF)
  - White text: "SHOP"
  - Shopping bag or coin icon on left
  - Sparkle effects
- **Visual Elements (Pressed)**:
  - Darker purple, pressed effect
- **Visual Elements (Disabled)**:
  - Gray, rarely used (shop always available)

### 4. Wallet Button
- **Filename Base**: `button_wallet`
- **Variants**:
  - `button_wallet_normal.png`
  - `button_wallet_pressed.png`
  - `button_wallet_disabled.png`
- **Description**: Access TON wallet/payments
- **Visual Elements (Normal)**:
  - Orange/gold gradient (#FF8800 to #FFAA44)
  - White text: "WALLET"
  - Wallet or coin stack icon on left
  - Secure/premium feel
- **Visual Elements (Pressed)**:
  - Darker orange, pressed effect
- **Visual Elements (Disabled)**:
  - Gray (if wallet not connected)

## Secondary Action Buttons (Smaller variants: 200×60 pixels)

### 5. Claim Reward Button
- **Filename**: `button_claim_small_normal.png`, `_pressed.png`, `_disabled.png`
- **Description**: Claim daily rewards or achievements
- **Visual**: Yellow/gold, text "CLAIM", gift icon

### 6. Watch Ad Button
- **Filename**: `button_ad_small_normal.png`, `_pressed.png`, `_disabled.png`
- **Description**: Watch ad for bonus
- **Visual**: Red/pink, text "WATCH AD", play icon

### 7. Connect Wallet Button
- **Filename**: `button_connect_small_normal.png`, `_pressed.png`
- **Description**: Connect TON wallet
- **Visual**: Blue, text "CONNECT", chain icon

### 8. Buy Button (Generic)
- **Filename**: `button_buy_small_normal.png`, `_pressed.png`, `_disabled.png`
- **Description**: Generic purchase button
- **Visual**: Green, text "BUY", coin icon

## Special Buttons

### 9. Tier Upgrade Button (Large: 320×100 pixels)
- **Filename**: `button_tier_upgrade_normal.png`, `_pressed.png`, `_disabled.png`
- **Description**: Progress to next tier
- **Visual Elements**:
  - Rainbow gradient or gold
  - Large text: "UPGRADE TIER"
  - Trophy or badge icon
  - Celebration particles
  - Prominent, exciting design

### 10. Premium Purchase Button
- **Filename**: `button_premium_normal.png`, `_pressed.png`
- **Dimension**: 300×80 pixels
- **Description**: Buy with Telegram Stars or TON
- **Visual**: Shimmering effect, premium purple/gold, currency icon

## Technical Specifications

### Button Structure
- **Rounded Corners**: 16px radius for main buttons, 12px for small
- **Padding**: 20px horizontal, 16px vertical (text area)
- **Icon Size**: 40×40 pixels for main, 30×30 for small
- **Icon Position**: 16px from left edge
- **Text**: Centered (accounting for icon offset)
- **Shadow**: 0px 4px 8px rgba(0,0,0,0.3) for normal, 0px 2px 4px for pressed

### Typography (Embedded in Image)
- **Font**: Bold, sans-serif (e.g., Montserrat Bold, Nunito ExtraBold)
- **Size**: 28px for main buttons, 20px for small buttons
- **Color**: White (#FFFFFF) with dark text shadow for depth
- **Alignment**: Center (horizontally), middle (vertically)

### Color Gradients
- **Cast Hook**: Linear gradient, top to bottom, #0088FF → #00DDFF
- **Upgrade**: Linear gradient, #00CC66 → #00FF88
- **Shop**: Linear gradient, #BB00FF → #DD55FF
- **Wallet**: Linear gradient, #FF8800 → #FFAA44

### State Changes
- **Normal**: Full saturation, 3D effect, shadow
- **Pressed**: -20% brightness, shadow reduced, content shifted down 2px
- **Disabled**: Grayscale or desaturated, 50% opacity, no shadow

## Design Guidelines
- Maintain consistent button shape across all variants
- Ensure text is always readable against gradient
- Use white text with subtle shadow for maximum contrast
- Icons should be simple, recognizable silhouettes
- Button should feel tactile and responsive
- Test on mobile devices for touch target size (minimum 44×44 px)
- Provide visual feedback for all interactions

## Accessibility Notes
- Ensure 4.5:1 contrast ratio between text and background
- Disabled states should be clearly distinguishable
- Icon + text combination for clarity
- Consider colorblind-friendly color choices

## Animation Considerations (CSS/Code)
- Hover effect: Slight scale increase (105%)
- Tap/press: Scale down (95%), shadow reduction
- Success: Particle burst, brief glow pulse
- Disabled: No animations

## File Organization
```
/assets/ui/
  /buttons/
    /cast/
      button_cast_normal.png
      button_cast_pressed.png
      button_cast_disabled.png
    /upgrade/
      button_upgrade_normal.png
      ...
    /shop/
      ...
    /wallet/
      ...
    /small/
      button_claim_small_normal.png
      ...
```
