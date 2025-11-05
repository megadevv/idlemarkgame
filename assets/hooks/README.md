# Hook Skins Specification

## Overview
Hook icons representing different hook upgrades and cosmetic variants.

## Requirements
- **Format**: PNG with transparency
- **Dimension**: 64×64 pixels
- **Style**: Cartoonish, clear silhouette, fantasy elements
- **Optimization**: <20KB per icon

## Asset List

### 1. Rusty Hook (Default/Tier 1)
- **Filename**: `rusty_hook.png`
- **Description**: Basic fishing hook with weathered appearance
- **Visual Elements**:
  - Simple J-shaped hook
  - Brown/orange rust texture
  - Dull metallic sheen
  - Worn, rough edges
- **Stats**: Base catch rate
- **Unlock**: Default (free)

### 2. Golden Hook (Tier 2)
- **Filename**: `golden_hook.png`
- **Description**: Shiny gold-plated fishing hook
- **Visual Elements**:
  - Polished gold finish
  - Slight sparkle effects
  - Smooth curves
  - Decorative engravings
- **Stats**: +25% catch rate
- **Unlock**: 500 gems or Tier 2

### 3. Tentacle Hook (Tier 3)
- **Filename**: `tentacle_hook.png`
- **Description**: Magical tentacle-shaped hook
- **Visual Elements**:
  - Purple/pink organic texture
  - Suction cups along curve
  - Slight glow effect
  - Animated feel (even as static)
- **Stats**: +50% catch rate, attracts rare fish
- **Unlock**: 1,500 gems or Tier 3

### 4. Laser Hook (Tier 4+)
- **Filename**: `laser_hook.png`
- **Description**: High-tech energy hook
- **Visual Elements**:
  - Metallic core with energy blade
  - Cyan/blue glow trail
  - Sci-fi aesthetic
  - Circuit patterns on handle
- **Stats**: +100% catch rate, guaranteed epic+ fish
- **Unlock**: 5,000 gems or Tier 4+

## Additional Variants (Optional Cosmetics)

### 5. Candy Cane Hook
- **Filename**: `candy_cane_hook.png`
- **Description**: Holiday-themed hook
- **Visual**: Red and white stripes, peppermint style
- **Unlock**: Holiday event

### 6. Dragon Claw Hook
- **Filename**: `dragon_claw_hook.png`
- **Description**: Dragon-inspired hook
- **Visual**: Black scales, red accents, claw shape
- **Unlock**: Special achievement

## Technical Specifications
- Canvas Size: 64×64 pixels
- Hook Size: ~48×48 pixels (leaving padding)
- Orientation: Hook point facing downward
- Glow Effects: Outer glow for premium hooks
- Detail Level: High clarity at small size

## Design Guidelines
- Clear, recognizable silhouette
- Hook point always visible and clear
- Progress from rustic → elegant → magical → technological
- Each tier should be visually distinctive
- Compatible with animation (hook should work when rotated/moved)
- Avoid overly complex details that won't read at 64×64
