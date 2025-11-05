# Background Assets Specification

## Overview
Background images for the Hooker fishing game, designed for vertical mobile play (1080×1920 resolution).

## Requirements
- **Format**: JPG (no transparency)
- **Dimension**: 1080×1920 pixels (portrait orientation)
- **Top Reserved Space**: Top 15% reserved for boat surface rendering
- **Style**: Bright, colorful, cartoonish with fantasy ocean elements
- **Optimization**: Compressed for mobile delivery (<500KB per image)

## Asset List

### 1. Calm Ocean Background
- **Filename**: `calm_ocean.jpg`
- **Description**: Peaceful underwater scene with gentle lighting
- **Color Palette**: Blues, teals, soft sunlight filtering from above
- **Elements**: 
  - Subtle water ripples
  - Light rays penetrating water
  - Small bubbles floating upward
  - Sandy bottom with scattered rocks
  - Gentle coral formations in distance

### 2. Sunset Ocean Background
- **Filename**: `sunset_ocean.jpg`
- **Description**: Warm twilight underwater atmosphere
- **Color Palette**: Orange, purple, pink hues in water
- **Elements**:
  - Golden hour lighting from surface
  - Silhouettes of sea plants
  - Deeper shadows in lower areas
  - Warm glow particles in water

### 3. Stormy Sea Background
- **Filename**: `stormy_sea.jpg`
- **Description**: Turbulent underwater conditions
- **Color Palette**: Dark blues, grays, occasional lightning flashes
- **Elements**:
  - Churning water effects
  - Darker, more dramatic lighting
  - Debris or seaweed floating
  - Occasional light bursts from surface lightning

### 4. Event Banner
- **Filename**: `event_banner.jpg`
- **Dimension**: 800×400 pixels (landscape)
- **Description**: Promotional banner for special events
- **Usage**: Display in UI for limited-time events
- **Style**: Match game aesthetic with vibrant, eye-catching design

## Technical Specifications
- Color Space: sRGB
- Quality: 85-90% JPEG compression
- File Naming: Snake_case with descriptive names
- DPI: 72 (web/mobile standard)

## Implementation Notes
- Top 15% (288 pixels from top) should have darker gradient to ensure boat visibility
- All backgrounds should have slight vignette effect for depth
- Ensure consistent color temperature across related scenes
- Test visibility with overlaid UI elements
