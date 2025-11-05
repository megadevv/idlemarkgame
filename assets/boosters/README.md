# Booster Assets Specification

## Overview
Visual assets for game boosters that enhance gem yield and gameplay.

## Requirements
- **Format**: PNG with transparency
- **Dimension**: 64×64 pixels
- **Style**: Glowing, energetic, fantasy effects
- **Optimization**: <25KB per icon

## Booster Types

### 1. 2x Gem Booster (Active)
- **Filename**: `booster_2x_active.png`
- **Description**: Double gem yield for duration
- **Visual Elements**:
  - Cyan/blue glow
  - "2x" text in center
  - Sparkling particles
  - Pulsing energy ring
  - Bright, eye-catching
- **Duration**: 30 minutes
- **Cost**: 50 Telegram Stars or 10 TON

### 2. 2x Gem Booster (Inactive)
- **Filename**: `booster_2x_inactive.png`
- **Description**: Inactive/purchasable state
- **Visual Elements**:
  - Same design as active but grayscale
  - No glow effect
  - Subtle shine only
  - "2x" text visible but muted

### 3. 5x Gem Booster (Active)
- **Filename**: `booster_5x_active.png`
- **Description**: Quintuple gem yield (premium)
- **Visual Elements**:
  - Purple/magenta intense glow
  - "5x" text prominent
  - Lightning effects
  - Multiple particle layers
  - Premium appearance
- **Duration**: 15 minutes
- **Cost**: 200 Telegram Stars or 50 TON

### 4. 5x Gem Booster (Inactive)
- **Filename**: `booster_5x_inactive.png`
- **Description**: Inactive/purchasable state
- **Visual Elements**:
  - Grayscale version
  - No glow
  - "5x" text visible but faded

### 5. Auto-Fisher Booster (Active)
- **Filename**: `booster_auto_active.png`
- **Description**: Automatically casts hook
- **Visual Elements**:
  - Green/teal glow
  - Hook icon with rotation arrows
  - Circular progress indicator
  - Automated feel
- **Duration**: 60 minutes
- **Cost**: 100 Telegram Stars or 25 TON

### 6. Auto-Fisher Booster (Inactive)
- **Filename**: `booster_auto_inactive.png`
- **Description**: Inactive state
- **Visual**: Grayscale, no glow

### 7. Rare Fish Attractor (Active)
- **Filename**: `booster_rare_active.png`
- **Description**: Increases rare fish spawn rate
- **Visual Elements**:
  - Orange/gold glow
  - Fish silhouette with stars
  - Shimmer effect
  - Magical aura
- **Duration**: 45 minutes
- **Cost**: 150 Telegram Stars or 35 TON

### 8. Rare Fish Attractor (Inactive)
- **Filename**: `booster_rare_inactive.png`
- **Description**: Inactive state
- **Visual**: Grayscale, no glow

### 9. Speed Boost (Active)
- **Filename**: `booster_speed_active.png`
- **Description**: Faster fishing and casting
- **Visual Elements**:
  - Yellow/electric blue glow
  - Speed lines or lightning
  - Clock with forward arrow
  - Dynamic, energetic
- **Duration**: 30 minutes
- **Cost**: 75 Telegram Stars or 18 TON

### 10. Speed Boost (Inactive)
- **Filename**: `booster_speed_inactive.png`
- **Description**: Inactive state
- **Visual**: Grayscale, no glow

### 11. Lucky Hook (Active)
- **Filename**: `booster_lucky_active.png`
- **Description**: Higher chance of better catches
- **Visual Elements**:
  - Rainbow glow
  - Four-leaf clover or horseshoe
  - Sparkles and stars
  - Fortunate appearance
- **Duration**: 20 minutes
- **Cost**: 120 Telegram Stars or 30 TON

### 12. Lucky Hook (Inactive)
- **Filename**: `booster_lucky_inactive.png`
- **Description**: Inactive state
- **Visual**: Grayscale, no glow

## Booster Combo (Stack Effect)

### 13. Multiple Boosters Active Indicator
- **Filename**: `booster_combo_active.png`
- **Description**: Shown when multiple boosters are active
- **Visual Elements**:
  - Multi-colored glow (combining active colors)
  - Stacked layers visual
  - Enhanced particle effects
  - "COMBO" or stacked icon symbols

## Booster UI Elements

### 14. Timer Background
- **Filename**: `booster_timer_bg.png`
- **Dimension**: 128×32 pixels
- **Description**: Background for booster countdown timer
- **Visual**: Sleek bar with transparency, matches UI theme

### 15. Booster Slot Empty
- **Filename**: `booster_slot_empty.png`
- **Description**: Empty slot in booster UI
- **Visual**: Dashed outline, subtle, indicates where booster can be placed

## Technical Specifications
- Active State: Full color with glow/particle effects
- Inactive State: Grayscale, no glow, 50% opacity
- Glow: Outer glow effect, 8-12px radius
- Animation Ready: Design supports pulsing/rotating animations
- Center Aligned: Icon centered on 64×64 canvas

## Color Coding
- **2x Booster**: Cyan/Blue (#00D9FF)
- **5x Booster**: Purple/Magenta (#B830FF)
- **Auto-Fisher**: Green/Teal (#00FF88)
- **Rare Attractor**: Orange/Gold (#FFB930)
- **Speed Boost**: Yellow/Electric (#FFEE30)
- **Lucky Hook**: Rainbow (gradient)

## Design Guidelines
- Active boosters should be immediately noticeable
- Inactive boosters should be clearly different (desaturated)
- Text ("2x", "5x") should be legible at size
- Glow effects should not obscure icon details
- Maintain consistent icon shape/silhouette
- Design should work on various background colors

## Implementation Notes
- Display active boosters in HUD/top bar
- Show time remaining with circular progress or timer
- Stack multiple active boosters visually
- Animate activation with particle burst effect
- Provide visual/audio feedback when booster expires
