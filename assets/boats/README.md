# Boat Skins Specification

## Overview
Boat sprites showing a fisherman holding only a fishing stick (no reel visible).

## Requirements
- **Format**: PNG with transparency
- **Dimension**: 300×150 pixels
- **Style**: Cartoonish, colorful, fantasy-themed
- **Character**: Simple fisherman silhouette or cartoon character holding a stick
- **Optimization**: <50KB per sprite

## Asset List

### 1. Wooden Boat (Default/Tier 1)
- **Filename**: `wooden_boat.png`
- **Description**: Classic wooden fishing boat
- **Visual Elements**:
  - Weathered wood planks
  - Simple bench seat
  - Fisherman in casual clothes holding basic stick
  - Small rope details
  - Warm brown tones
- **Unlock**: Default (free)

### 2. Pirate Ship (Tier 2)
- **Filename**: `pirate_ship.png`
- **Description**: Small pirate-style vessel
- **Visual Elements**:
  - Dark wood with brass accents
  - Skull emblem on side
  - Pirate character with bandana holding stick
  - Tattered flag
  - Gold and black color scheme
- **Unlock**: Tier 2 or purchasable

### 3. Hover Boat (Tier 3)
- **Filename**: `hover_boat.png`
- **Description**: Futuristic hovering craft
- **Visual Elements**:
  - Sleek metallic design
  - Glowing blue/cyan accents
  - Anti-gravity rings underneath
  - Tech-savvy fisherman with visor holding advanced stick
  - Chrome and neon colors
- **Unlock**: Tier 3 or premium purchase

### 4. Iceberg Sled (Tier 4+)
- **Filename**: `iceberg_sled.png`
- **Description**: Arctic-themed ice platform
- **Visual Elements**:
  - Frozen ice chunk base
  - Crystalline formations
  - Eskimo/arctic explorer character holding stick
  - Penguin companion (optional)
  - White, blue, and ice-clear tones
- **Unlock**: Tier 4+ or special event

## Technical Specifications
- Transparency: Required (alpha channel)
- Anchor Point: Center bottom of boat (for positioning on water surface)
- Shadow: Soft drop shadow included in sprite
- Orientation: Side view (profile), facing right
- Character Position: Seated or standing near center, stick extending down

## Animation Considerations (Optional)
- Gentle rocking motion can be applied programmatically
- Character arm slightly bent to hold stick
- Stick should align with hook drop point

## Design Guidelines
- Fisherman should be ~40% of boat height
- Stick should be visible but simple (thin line, 2-3 pixels wide)
- Boat should have clear silhouette for easy recognition
- Colors should be vibrant and distinct between variants
- Maintain consistent art style across all boats
