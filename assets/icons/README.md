# Icons Specification

## Overview
UI icons for currency, actions, and navigation in the Hooker fishing game.

## Requirements
- **Format**: PNG with transparency (or SVG for scalability)
- **Dimensions**: Multiple sizes for different uses
- **Style**: Cartoonish, bright, easily recognizable
- **Optimization**: <15KB per PNG icon

## Currency & Resource Icons (64×64 pixels)

### 1. Coin Icon
- **Filename**: `icon_coin.png` / `icon_coin.svg`
- **Description**: Gold coin currency (points)
- **Visual Elements**:
  - Circular gold coin
  - Shine/glint effect
  - Fish or hook emblem in center
  - Slight 3D depth
- **Usage**: Display point currency in UI

### 2. Gem Icon
- **Filename**: `icon_gem.png` / `icon_gem.svg`
- **Description**: Premium gem currency
- **Visual Elements**:
  - Multifaceted gem shape
  - Cyan/blue color with sparkles
  - Glowing effect
  - Transparent facets
- **Usage**: Display gem currency in UI, shop

### 3. Star Icon (Telegram Stars)
- **Filename**: `icon_star.png` / `icon_star.svg`
- **Description**: Telegram Stars payment currency
- **Visual Elements**:
  - Five-pointed star
  - Yellow/gold gradient
  - Outer glow
  - Telegram brand compatible
- **Usage**: Premium purchase UI, payment screens

### 4. Booster Icon (Active)
- **Filename**: `icon_booster_active.png` / `icon_booster_active.svg`
- **Description**: Active booster indicator
- **Visual Elements**:
  - Lightning bolt or sparkle
  - Bright cyan/yellow glow
  - Energy particles
  - Pulsing effect ready
- **Usage**: Show active boosters

### 5. HOOKR Currency Icon
- **Filename**: `icon_hookr.png` / `icon_hookr.svg`
- **Description**: Custom game token (TON-based)
- **Visual Elements**:
  - Fish hook incorporated into design
  - Metallic silver/blue
  - "H" or hook symbol
  - Blockchain/crypto aesthetic
- **Usage**: TON payment screens, premium shop

## Tier Badge Icons (100×100 pixels)

### 6. Tier 1 Badge - Novice Fisher
- **Filename**: `badge_tier_1.png`
- **Description**: Bronze/copper tier badge
- **Visual Elements**:
  - Circular badge
  - Bronze color
  - Simple fish icon
  - Roman numeral "I" or number "1"
  - Weathered texture

### 7. Tier 2 Badge - Skilled Angler
- **Filename**: `badge_tier_2.png`
- **Description**: Silver tier badge
- **Visual Elements**:
  - Circular badge
  - Silver/gray color
  - Multiple fish icons
  - Roman numeral "II" or number "2"
  - Polished finish

### 8. Tier 3 Badge - Expert Fisher
- **Filename**: `badge_tier_3.png`
- **Description**: Gold tier badge
- **Visual Elements**:
  - Circular badge with decorative edge
  - Gold color
  - Rare fish icon
  - Roman numeral "III" or number "3"
  - Sparkle effects

### 9. Tier 4 Badge - Master Angler
- **Filename**: `badge_tier_4.png`
- **Description**: Platinum tier badge
- **Visual Elements**:
  - Ornate circular badge
  - Platinum/white-blue color
  - Epic fish or hook icon
  - Roman numeral "IV" or number "4"
  - Magical glow

### 10. Tier 5 Badge - Legendary Fisher
- **Filename**: `badge_tier_5.png`
- **Description**: Diamond/rainbow tier badge
- **Visual Elements**:
  - Elaborate star-shaped badge
  - Rainbow/prismatic color
  - Legendary fish or kraken icon
  - Roman numeral "V" or number "5"
  - Intense glow and particles

## Navigation & UI Icons (32×32 pixels)

### 11. Settings Icon
- **Filename**: `icon_settings.png` / `icon_settings.svg`
- **Description**: Gear/cog icon for settings
- **Visual**: Simple gear, light gray, clean design

### 12. Shop Icon
- **Filename**: `icon_shop.png` / `icon_shop.svg`
- **Description**: Shopping cart or storefront
- **Visual**: Cart with gem or coins, colorful

### 13. Wallet Icon
- **Filename**: `icon_wallet.png` / `icon_wallet.svg`
- **Description**: Wallet for payments/TON
- **Visual**: Wallet shape, crypto style, blue/purple

### 14. Leaderboard Icon
- **Filename**: `icon_leaderboard.png` / `icon_leaderboard.svg`
- **Description**: Trophy or ranking list
- **Visual**: Trophy or podium, gold accent

### 15. Upgrade Icon
- **Filename**: `icon_upgrade.png` / `icon_upgrade.svg`
- **Description**: Upward arrow or level-up
- **Visual**: Arrow pointing up, green/blue, positive feeling

### 16. Inventory Icon
- **Filename**: `icon_inventory.png` / `icon_inventory.svg`
- **Description**: Backpack or chest
- **Visual**: Treasure chest, brown/gold

### 17. Quest/Mission Icon
- **Filename**: `icon_quest.png` / `icon_quest.svg`
- **Description**: Scroll or exclamation mark
- **Visual**: Parchment scroll, yellow accent

### 18. Profile Icon
- **Filename**: `icon_profile.png` / `icon_profile.svg`
- **Description**: User profile silhouette
- **Visual**: Person outline, simple, neutral color

### 19. Close/Exit Icon
- **Filename**: `icon_close.png` / `icon_close.svg`
- **Description**: X button for closing modals
- **Visual**: X mark, red or dark gray

### 20. Info Icon
- **Filename**: `icon_info.png` / `icon_info.svg`
- **Description**: Information/help button
- **Visual**: "i" in circle, blue

## Technical Specifications
- PNG: 32-bit with alpha channel
- SVG: Scalable, optimized paths
- Icon Grid: Centered on canvas with consistent padding
- Stroke Width: 2-3px for 32×32, 3-4px for 64×64, 4-5px for 100×100
- Color Depth: Full RGB with transparency
- Naming Convention: `icon_[name]_[size].png` or `icon_[name].svg`

## Design Guidelines
- High contrast for mobile visibility
- Clear silhouette at all sizes
- Consistent visual language across all icons
- Test readability on light and dark backgrounds
- Use Telegram's design principles where applicable
- Avoid over-detail at small sizes
- Ensure accessibility (distinct shapes, not just colors)

## Animation Considerations (Optional)
- Icons can be animated with CSS or sprite sheets
- Recommended: Pulse effect for active states
- Hover states for buttons (web version)
- Particle effects for currency gain
