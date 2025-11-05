# Hooker - Telegram Mini App Fishing Game
## Complete Visual & Gameplay Asset Pack

![Game Logo](assets/logo_placeholder.png)

---

## 📖 Table of Contents
- [Overview](#overview)
- [Game Concept](#game-concept)
- [Asset Categories](#asset-categories)
- [Gameplay Systems](#gameplay-systems)
- [Technical Specifications](#technical-specifications)
- [Implementation Guide](#implementation-guide)
- [File Structure](#file-structure)
- [Asset Credits](#asset-credits)
- [License](#license)

---

## 🎮 Overview

**Hooker** is a mobile-first, idle fishing game designed as a Telegram Mini App. Players cast their hooks from various boats, catch fantasy fish, earn points and gems, and progressively upgrade their fishing gear through a tier-based system.

### Key Features
- 🎣 **Idle Fishing Gameplay**: Simple tap-to-cast mechanics with idle progression
- 🐟 **25+ Fantasy Fish Species**: From common Bubblefins to legendary Krakens
- ⚡ **Booster System**: Multiply gem earnings and enhance gameplay
- 🏆 **5-Tier Progression**: Unlock new boats, hooks, and fish as you advance
- 💎 **Dual Currency**: Points (earned only) and Gems (earned or purchased)
- 💰 **Telegram Integration**: Pay with Telegram Stars or TON cryptocurrency
- 🎨 **Bright Cartoon Aesthetic**: Vibrant, colorful, family-friendly design

---

## 🎯 Game Concept

### Genre
Idle/Incremental Fishing Game with RPG progression elements

### Platform
- **Primary**: Telegram Mini App
- **Orientation**: Vertical (Portrait - 1080×1920)
- **Target Audience**: Casual mobile gamers, ages 12+

### Art Style
- **Visual Theme**: Bright, cartoonish, fantasy ocean
- **Color Palette**: Blues, teals, vibrant rainbow accents
- **Inspiration**: Casual mobile games like "Fishdom," "Tap Titans," with fantasy elements

### Core Gameplay Loop
```
Cast Hook → Catch Fish → Earn Points/Gems → Upgrade Gear → Progress Tiers → Repeat
```

---

## 🖼️ Asset Categories

### 1. Backgrounds (4 files)
**Location**: `assets/backgrounds/`
- Calm Ocean (default)
- Sunset Ocean
- Stormy Sea
- Event Banner

**Specifications**:
- Format: JPG
- Main Dimensions: 1080×1920 pixels
- Banner: 800×400 pixels
- Top 15% reserved for boat rendering

[📄 Full Background Specifications](assets/backgrounds/README.md)

### 2. Boat Skins (4 files)
**Location**: `assets/boats/`
- Wooden Boat (Tier 1 - Default)
- Pirate Ship (Tier 2)
- Hover Boat (Tier 3)
- Iceberg Sled (Tier 4+)

**Specifications**:
- Format: PNG with transparency
- Dimensions: 300×150 pixels
- Fisherman holding stick visible

[📄 Full Boat Specifications](assets/boats/README.md)

### 3. Hook Skins (6 files)
**Location**: `assets/hooks/`
- Rusty Hook (Tier 1 - Default)
- Golden Hook (Tier 2)
- Tentacle Hook (Tier 3)
- Laser Hook (Tier 4+)
- Special: Candy Cane, Dragon Claw

**Specifications**:
- Format: PNG with transparency
- Dimensions: 64×64 pixels
- Clear downward-pointing design

[📄 Full Hook Specifications](assets/hooks/README.md)

### 4. Fish Sprites (25 files)
**Location**: `assets/fish/`

**By Rarity**:
- **Common** (5 species): Bubblefin, Mud Guppy, Reef Pebble, Silver Minnow, Kelp Nibbler
- **Uncommon** (4 species): Coral Snapper, Reef Dart, Prism Swimmer, Tide Hopper
- **Rare** (4 species): Crimson Barracuda, Deepfang, Crystal Fin, Ember Koi
- **Epic** (4 species): Thunder Ray, Abyssal Lancer, Phoenix Grouper, Void Eel
- **Legendary** (4 species): Leviathan Pike, Krakenling, Celestial Whale, Prismatic Dragon
- **Event/Seasonal** (4 species): Pumpkin Puffer, Frost Serpent, Love Angelfish, Lucky Goldfish

**Specifications**:
- Format: PNG with transparency
- Standard: 128×128 pixels
- Legendary: 256×256 pixels

[📄 Full Fish Specifications](assets/fish/README.md)

### 5. Icons (50 files)
**Location**: `assets/icons/`

**Categories**:
- **Currency** (64×64): Coin, Gem, Star, HOOKR, Booster
- **Tier Badges** (100×100): Tiers 1-5
- **Navigation** (32×32): Settings, Shop, Wallet, Leaderboard, Upgrade, etc.

**Specifications**:
- Format: PNG + SVG variants
- Transparent backgrounds
- High contrast for mobile

[📄 Full Icon Specifications](assets/icons/README.md)

### 6. Boosters (15 files)
**Location**: `assets/boosters/`

**Types**:
- 2x Gem Booster (active/inactive)
- 5x Gem Booster (active/inactive)
- Auto-Fisher (active/inactive)
- Rare Fish Attractor (active/inactive)
- Speed Boost (active/inactive)
- Lucky Hook (active/inactive)
- Combo indicator, timer background, empty slots

**Specifications**:
- Format: PNG with transparency
- Dimensions: 64×64 pixels (timer: 128×32)
- Active: Full color with glow
- Inactive: Grayscale

[📄 Full Booster Specifications](assets/boosters/README.md)

### 7. UI Buttons (38 files)
**Location**: `assets/ui/buttons/`

**Types**:
- **Main** (300×80): Cast Hook, Upgrade, Shop, Wallet
- **Small** (200×60): Claim, Watch Ad, Connect, Buy
- **Special**: Tier Upgrade (320×100), Premium (300×80)

**States**: Normal, Pressed, Disabled

**Specifications**:
- Format: PNG with transparency
- 3D button effect with gradients
- State-specific visuals

[📄 Full Button Specifications](assets/ui/README.md)

---

## 🎮 Gameplay Systems

### 🪙 Points System
- **Earning**: Catch fish (only method)
- **Value**: Varies by fish rarity (10-500 points)
- **Use**: Required for tier progression
- **Characteristics**: Cannot be purchased, account-bound

[📄 Full Points System Documentation](docs/gameplay/points_system.md)

### 💎 Gems System
- **Earning**: Time spent fishing (1 gem/60 sec base rate)
- **Boosters**: 2x, 5x multipliers available
- **Purchasing**: Via Telegram Stars or TON
- **Use**: Upgrade gear, unlock tiers
- **Characteristics**: Purchasable, persistent

[📄 Full Gems System Documentation](docs/gameplay/gems_system.md)

### 💳 Payment System
**Telegram Stars**:
- Gem packs: 100-10,000 gems (10-700 Stars)
- Boosters: 50-200 Stars
- Tier skips: 500-10,000 Stars (optional)

**TON Cryptocurrency**:
- Gem packs: 150-7,000 gems (0.5-15 TON)
- Premium boosters: 10-20 TON
- HOOKR currency: Future feature

[📄 Full Payment System Documentation](docs/gameplay/payment_system.md)

### 🏆 Tier Progression
**5 Main Tiers + Infinite Sub-Tiers**:

| Tier | Name | Points Required | Gems Required | Key Unlocks |
|------|------|----------------|---------------|-------------|
| 1 | Novice Fisher | 0 (default) | 0 | Basic gameplay |
| 2 | Skilled Angler | 1,000 | 500 | Pirate Ship, Golden Hook, Rare fish |
| 3 | Expert Fisher | 3,000 | 1,500 | Hover Boat, Tentacle Hook, Epic fish |
| 4 | Master Angler | 7,000 | 3,000 | Iceberg Sled, Laser Hook, Legendary fish |
| 5 | Legendary Fisher | 15,000 | 6,000 | All content, VIP features |
| 5+ | Infinite | 2x previous | 2x previous | Prestige bonuses, titles |

[📄 Full Tier Progression Documentation](docs/gameplay/tier_progression.md)

---

## 🔧 Technical Specifications

### File Formats
- **Backgrounds**: JPG (no transparency)
- **Sprites & UI**: PNG (with alpha transparency)
- **Icons**: PNG + SVG (scalable)

### Optimization
- **Total Size**: ~5.1 MB (all assets)
- **Critical Assets**: ~1.2 MB (first load)
- **Compression**: 85-90% JPEG quality, optimized PNG
- **Loading**: Progressive with lazy loading

### Color Specifications
- **Color Space**: sRGB
- **Bit Depth**: 24-bit RGB + 8-bit alpha (PNG)
- **DPI**: 72 (web standard)

### Asset Naming Convention
```
[category]_[name]_[variant].[extension]

Examples:
- backgrounds/calm_ocean.jpg
- fish/common_bubblefin.png
- ui/buttons/cast/button_cast_normal.png
- icons/icon_gem.svg
```

### Supported Resolutions
- **Primary**: 1080×1920 (Full HD portrait)
- **Scale**: Responsive design for 720p-1440p
- **Aspect Ratio**: 9:16 (vertical)

---

## 💻 Implementation Guide

### Asset Loading Strategy

#### 1. Critical Assets (Load First - ~1.2 MB)
```javascript
const criticalAssets = [
  'backgrounds/calm_ocean.jpg',
  'boats/wooden_boat.png',
  'hooks/rusty_hook.png',
  'fish/common_*.png',
  'ui/buttons/cast/*',
  'icons/icon_coin.*',
  'icons/icon_gem.*'
];
```

#### 2. Secondary Assets (Load on Demand)
- Other backgrounds, locked boats/hooks
- Rare/epic fish sprites
- Booster icons, tier badges

#### 3. Lazy Loading
- Event fish (only during events)
- Legendary fish (Tier 4+)
- Premium shop items

### Integration with Telegram Mini App

```javascript
// Example: Load and display assets
import { assets } from './assets/assets.json';

// Get fish by rarity
function getFishByRarity(rarity) {
  return assets.assetCategories.fish.rarityTiers[rarity].species;
}

// Determine catch based on spawn rates
function catchFish(playerTier) {
  const roll = Math.random();
  let cumulativeRate = 0;
  
  for (const [rarity, data] of Object.entries(assets.assetCategories.fish.rarityTiers)) {
    if (data.minTier && playerTier < data.minTier) continue;
    
    cumulativeRate += data.spawnRate;
    if (roll <= cumulativeRate) {
      const species = data.species[Math.floor(Math.random() * data.species.length)];
      return loadFishSprite(species.filename);
    }
  }
}
```

### Payment Integration

```javascript
// Telegram Stars Payment
import { openInvoice } from '@telegram-apps/sdk';

async function buyGems(packId) {
  const pack = gemPacks[packId];
  
  const invoice = {
    title: pack.name,
    description: `${pack.gems} gems`,
    currency: 'XTR',
    prices: [{ label: 'Gems', amount: pack.stars }],
    payload: { packId, userId: currentUser.id }
  };
  
  const result = await openInvoice(invoice.url);
  if (result.status === 'paid') {
    // Award gems server-side
  }
}
```

```javascript
// TON Cryptocurrency Payment
import { TonConnectUI } from '@tonconnect/ui';

const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://yourgame.com/tonconnect-manifest.json'
});

async function buyWithTON(productId, tonAmount) {
  const transaction = {
    validUntil: Math.floor(Date.now() / 1000) + 600,
    messages: [{
      address: "YOUR_GAME_WALLET",
      amount: (tonAmount * 1e9).toString(),
      payload: btoa(JSON.stringify({ productId, userId: currentUser.id }))
    }]
  };
  
  await tonConnectUI.sendTransaction(transaction);
}
```

---

## 📁 File Structure

```
idlemarkgame/
├── assets/
│   ├── backgrounds/
│   │   ├── README.md
│   │   ├── calm_ocean.jpg
│   │   ├── sunset_ocean.jpg
│   │   ├── stormy_sea.jpg
│   │   └── event_banner.jpg
│   ├── boats/
│   │   ├── README.md
│   │   ├── wooden_boat.png
│   │   ├── pirate_ship.png
│   │   ├── hover_boat.png
│   │   └── iceberg_sled.png
│   ├── hooks/
│   │   ├── README.md
│   │   ├── rusty_hook.png
│   │   ├── golden_hook.png
│   │   ├── tentacle_hook.png
│   │   ├── laser_hook.png
│   │   ├── candy_cane_hook.png
│   │   └── dragon_claw_hook.png
│   ├── fish/
│   │   ├── README.md
│   │   ├── common_*.png (5 files)
│   │   ├── uncommon_*.png (4 files)
│   │   ├── rare_*.png (4 files)
│   │   ├── epic_*.png (4 files)
│   │   ├── legendary_*.png (4 files)
│   │   └── event_*.png (4 files)
│   ├── icons/
│   │   ├── README.md
│   │   ├── icon_*.png (25 files)
│   │   ├── icon_*.svg (25 files)
│   │   └── badge_tier_*.png (5 files)
│   ├── boosters/
│   │   ├── README.md
│   │   ├── booster_*_active.png (6 files)
│   │   ├── booster_*_inactive.png (6 files)
│   │   └── booster_*.png (3 utility files)
│   ├── ui/
│   │   ├── README.md
│   │   └── buttons/
│   │       ├── cast/ (3 states)
│   │       ├── upgrade/ (3 states)
│   │       ├── shop/ (3 states)
│   │       ├── wallet/ (3 states)
│   │       ├── small/ (11 files)
│   │       └── special/ (5 files)
│   ├── MANIFEST.md
│   └── assets.json
├── docs/
│   └── gameplay/
│       ├── points_system.md
│       ├── gems_system.md
│       ├── payment_system.md
│       └── tier_progression.md
├── README.md (this file)
├── package.json
├── package-lock.json
└── vite.config.ts
```

---

## 🎨 Design Guidelines

### Visual Consistency
- All assets share a bright, cartoonish art style
- Consistent color palette across categories
- Clear silhouettes for mobile visibility
- High contrast for readability

### Mobile Optimization
- Touch targets minimum 44×44 pixels
- Large, readable text (28px+ for buttons)
- Vibrant colors for easy recognition
- Optimized file sizes (<50KB per sprite)

### Accessibility
- 4.5:1 minimum contrast ratio
- Distinct shapes, not just colors
- Clear visual feedback for interactions
- Support for colorblind users (distinct patterns)

### Animation Ready
- All sprites designed for potential animation
- Center-anchored for rotation/scaling
- Consistent orientation (fish swim right)
- State variations for UI elements

---

## 📊 Asset Catalog Summary

| Category | Files | Total Size | Format | Transparency |
|----------|-------|------------|--------|--------------|
| Backgrounds | 4 | ~1.5 MB | JPG | No |
| Boats | 4 | ~180 KB | PNG | Yes |
| Hooks | 6 | ~100 KB | PNG | Yes |
| Fish | 25 | ~1.4 MB | PNG | Yes |
| Icons | 50 | ~450 KB | PNG/SVG | Yes |
| Boosters | 15 | ~250 KB | PNG | Yes |
| UI Buttons | 38 | ~1.2 MB | PNG | Yes |
| **TOTAL** | **142** | **~5.1 MB** | Mixed | Varies |

---

## 🚀 Quick Start

### For Developers

1. **Clone Repository**
   ```bash
   git clone https://github.com/megadevv/idlemarkgame.git
   cd idlemarkgame
   ```

2. **Review Asset Specifications**
   - Read category-specific README files in `assets/[category]/README.md`
   - Review gameplay documentation in `docs/gameplay/`
   - Check `assets/assets.json` for structured data

3. **Implement Asset Loading**
   - Use critical assets first (see `assets.json` loadingStrategy)
   - Implement lazy loading for non-essential assets
   - Set up CDN for optimal delivery

4. **Integrate Gameplay Systems**
   - Implement points and gems systems (see docs)
   - Set up Telegram Stars payment integration
   - Add TON Connect for cryptocurrency payments

### For Artists

1. **Follow Specifications**
   - Use exact dimensions specified in README files
   - Match art style (bright, cartoonish, fantasy)
   - Optimize file sizes as indicated

2. **Asset Naming**
   - Follow naming convention: `[category]_[name]_[variant].[ext]`
   - Use snake_case for file names
   - Include state suffixes (normal, pressed, disabled)

3. **Quality Checklist**
   - [ ] Correct dimensions
   - [ ] Transparent background (PNG only)
   - [ ] Optimized file size
   - [ ] Consistent art style
   - [ ] Mobile-friendly (clear at small sizes)

---

## 📝 Todo / Roadmap

### Phase 1: Asset Creation (Current)
- [x] Define all asset specifications
- [x] Document gameplay systems
- [ ] Create placeholder assets
- [ ] Create final asset designs
- [ ] Optimize all assets for web

### Phase 2: Implementation
- [ ] Build asset loading system
- [ ] Integrate with Telegram Mini App SDK
- [ ] Implement payment systems (Stars + TON)
- [ ] Create game UI/UX
- [ ] Add animation and effects

### Phase 3: Testing & Polish
- [ ] Performance testing on mobile devices
- [ ] Payment flow testing (test mode)
- [ ] Balance testing (points/gems economy)
- [ ] User testing and feedback

### Phase 4: Launch
- [ ] Deploy to Telegram
- [ ] Marketing materials
- [ ] Community management
- [ ] Analytics and monitoring

---

## 🤝 Contributing

We welcome contributions! Whether you're an artist, developer, or game designer:

1. **Artists**: Create assets following specifications in README files
2. **Developers**: Implement game systems, payment integration, UI/UX
3. **Designers**: Balance gameplay, suggest improvements

Please submit pull requests or open issues for discussion.

---

## 📜 License

This asset pack and documentation are created for the Hooker fishing game project.

**Assets**: All visual assets are property of the game developers.
**Code**: Open source under MIT License (pending)
**Documentation**: Creative Commons Attribution 4.0

---

## 📞 Contact & Support

- **Repository**: https://github.com/megadevv/idlemarkgame
- **Issues**: https://github.com/megadevv/idlemarkgame/issues
- **Telegram**: [@HookerGame](https://t.me/HookerGame) (placeholder)

---

## 🙏 Credits

### Team
- **Game Design**: [Your Name]
- **Art Direction**: [Artist Name]
- **Development**: [Developer Name]
- **Documentation**: AI-Assisted

### Special Thanks
- Telegram Mini Apps Platform
- TON Blockchain Community
- Beta Testers

---

**Last Updated**: November 5, 2024  
**Version**: 1.0.0  
**Status**: Asset Specification Complete, Implementation Pending

---

*Happy Fishing! 🎣*
