# Tier Progression System Documentation

## Overview
The tier system represents player progression in Hooker, unlocking new content, features, and challenges as players advance.

## Tier Structure

### Tier 1: Novice Fisher (Default)
- **Name**: Novice Fisher
- **Icon**: Bronze badge with simple fish
- **Starting Tier**: All players begin here
- **Requirements**: None
- **Unlocks**:
  - Basic fishing mechanics
  - Wooden boat (default)
  - Rusty hook (default)
  - Common and uncommon fish spawn
  - Shop access
  - Daily login rewards

### Tier 2: Skilled Angler
- **Name**: Skilled Angler
- **Icon**: Silver badge with multiple fish
- **Requirements**:
  - **Points**: 1,000
  - **Gems**: 500
- **Unlocks**:
  - Pirate Ship boat skin
  - Golden Hook upgrade available
  - Rare fish begin spawning
  - Booster shop access
  - Combo multiplier system
  - Daily quests unlocked

### Tier 3: Expert Fisher
- **Name**: Expert Fisher
- **Icon**: Gold badge with rare fish
- **Requirements**:
  - **Points**: 3,000 (cumulative from Tier 1)
  - **Gems**: 1,500
- **Unlocks**:
  - Hover Boat skin
  - Tentacle Hook upgrade available
  - Epic fish begin spawning
  - Advanced boosters (5x, rare attractor)
  - Leaderboard visibility
  - Weekly challenges
  - First prestige option

### Tier 4: Master Angler
- **Name**: Master Angler
- **Icon**: Platinum badge with epic fish
- **Requirements**:
  - **Points**: 7,000 (cumulative)
  - **Gems**: 3,000
- **Unlocks**:
  - Iceberg Sled boat skin
  - Laser Hook upgrade available
  - Legendary fish begin spawning
  - Premium boosters access
  - Tournament entry
  - Clan/guild features
  - Custom profile customization

### Tier 5: Legendary Fisher
- **Name**: Legendary Fisher
- **Icon**: Rainbow/prismatic badge with legendary fish
- **Requirements**:
  - **Points**: 15,000 (cumulative)
  - **Gems**: 6,000
- **Unlocks**:
  - Exclusive legendary boat skins
  - All fish species spawn
  - Maximum booster stacking (3 active)
  - VIP shop section
  - Prestige bonuses doubled
  - Exclusive cosmetics
  - Hall of fame entry

## Progression Beyond Tier 5

### Infinite Progression (Optional)
After Tier 5, players can continue advancing through sub-tiers:

- **Tier 5.1**: 30,000 points + 10,000 gems
- **Tier 5.2**: 60,000 points + 20,000 gems
- **Tier 5.3**: 120,000 points + 40,000 gems
- **Tier 5+**: Requirements double each level

**Rewards**: Exclusive titles, profile badges, small stat bonuses

## Requirements Formula

### Points Required
```javascript
function getPointsRequired(targetTier) {
  const basePoints = [0, 1000, 3000, 7000, 15000];
  
  if (targetTier <= 5) {
    return basePoints[targetTier];
  } else {
    // Infinite tiers beyond 5
    const tier5Points = 15000;
    const subTier = targetTier - 5;
    return tier5Points + (tier5Points * Math.pow(2, subTier));
  }
}
```

### Gems Required
```javascript
function getGemsRequired(targetTier) {
  const baseGems = [0, 500, 1500, 3000, 6000];
  
  if (targetTier <= 5) {
    return baseGems[targetTier];
  } else {
    const tier5Gems = 6000;
    const subTier = targetTier - 5;
    return tier5Gems + (tier5Gems * Math.pow(2, subTier));
  }
}
```

## Tier Unlocks Detailed

### Fishing Mechanics by Tier

| Feature | Tier 1 | Tier 2 | Tier 3 | Tier 4 | Tier 5 |
|---------|--------|--------|--------|--------|--------|
| Common Fish | ✅ | ✅ | ✅ | ✅ | ✅ |
| Uncommon Fish | ✅ | ✅ | ✅ | ✅ | ✅ |
| Rare Fish | ❌ | ✅ | ✅ | ✅ | ✅ |
| Epic Fish | ❌ | ❌ | ✅ | ✅ | ✅ |
| Legendary Fish | ❌ | ❌ | ❌ | ✅ | ✅ |
| Event Fish | ❌ | ✅ | ✅ | ✅ | ✅ |
| Max Combo | 10x | 20x | 50x | 100x | ∞ |

### Gear by Tier

| Gear | Tier 1 | Tier 2 | Tier 3 | Tier 4 | Tier 5 |
|------|--------|--------|--------|--------|--------|
| Wooden Boat | ✅ Free | ✅ | ✅ | ✅ | ✅ |
| Pirate Ship | ❌ | ✅ Unlocked | ✅ | ✅ | ✅ |
| Hover Boat | ❌ | ❌ | ✅ Unlocked | ✅ | ✅ |
| Iceberg Sled | ❌ | ❌ | ❌ | ✅ Unlocked | ✅ |
| Rusty Hook | ✅ Free | ✅ | ✅ | ✅ | ✅ |
| Golden Hook | ❌ | ✅ Unlocked | ✅ | ✅ | ✅ |
| Tentacle Hook | ❌ | ❌ | ✅ Unlocked | ✅ | ✅ |
| Laser Hook | ❌ | ❌ | ❌ | ✅ Unlocked | ✅ |

### Features by Tier

| Feature | Tier 1 | Tier 2 | Tier 3 | Tier 4 | Tier 5 |
|---------|--------|--------|--------|--------|--------|
| Shop | ✅ | ✅ | ✅ | ✅ | ✅ |
| Boosters | ❌ | ✅ Basic | ✅ Advanced | ✅ Premium | ✅ All |
| Daily Quests | ❌ | ✅ | ✅ | ✅ | ✅ |
| Leaderboard | View Only | View Only | ✅ Ranked | ✅ Ranked | ✅ Top 100 |
| Tournaments | ❌ | ❌ | ❌ | ✅ | ✅ |
| Clans/Guilds | ❌ | ❌ | ❌ | ✅ | ✅ |
| Prestige | ❌ | ❌ | ✅ Once | ✅ Repeat | ✅ Enhanced |

## Tier Upgrade UI

### Upgrade Screen Elements
1. **Current Tier Display**
   - Tier badge (large, centered)
   - Tier name
   - Current tier benefits summary

2. **Progress Indicators**
   - Points progress bar (to next tier)
   - Gems progress bar (to next tier)
   - Percentage completion

3. **Next Tier Preview**
   - Next tier badge (grayed out if locked)
   - Requirements list
   - Preview of unlocks
   - "Upgrade Tier" button (enabled when requirements met)

4. **Tier Rewards Showcase**
   - Icons/images of unlockable content
   - Feature descriptions
   - Visual appeal to encourage progression

### Upgrade Flow
```
1. Player reaches requirement threshold
2. Prominent notification appears
3. Player taps "Tier Up!" or navigates to tier screen
4. Confirmation dialog shows:
   - What will be unlocked
   - Requirements being consumed
   - Celebratory visuals
5. Player confirms
6. Celebration animation plays
7. New tier unlocked with reward popup
8. Tutorial for new features (first time)
```

## Tier Skip Option (Controversial)

### Paid Tier Skip
**Note**: This feature may impact game balance and should be carefully considered.

- **Availability**: Purchasable with Telegram Stars only
- **What It Does**: Skip point requirement for tier, still need gems
- **Cost**: Scales exponentially
  - Skip to Tier 2: 500 Stars
  - Skip to Tier 3: 1,500 Stars
  - Skip to Tier 4: 4,000 Stars
  - Skip to Tier 5: 10,000 Stars

**Pros**: Monetization, convenience for paying players
**Cons**: May alienate free players, pay-to-win concerns

**Recommended Alternative**: Sell point boosters instead of direct skips

## Prestige System

### What is Prestige?
Prestige allows players to reset their tier progress in exchange for permanent bonuses.

### Prestige Requirements
- Must be at least Tier 3
- One-time prestige at Tier 3, repeatable at Tier 4+

### Prestige Rewards
- **Permanent Bonuses**:
  - +5% base gem earning rate per prestige
  - +10% point earning rate per prestige
  - +1% rare fish spawn rate per prestige
  - Prestige badge on profile (bronze/silver/gold/platinum based on count)

### Prestige Process
1. Player reaches Tier 3+
2. "Prestige" option appears in tier menu
3. Player confirms (warning: resets to Tier 1)
4. All progress reset except:
   - Purchased gear (kept)
   - Gems (kept)
   - Points reset to 0
   - Tier reset to 1
5. Permanent bonuses applied
6. Prestige count incremented
7. Exclusive prestige shop unlocked

## Balancing

### Target Progression Timeline

**Free-to-Play (Casual - 30 min/day)**
- Tier 2: 2-3 days
- Tier 3: 1-2 weeks
- Tier 4: 3-4 weeks
- Tier 5: 2-3 months

**Free-to-Play (Active - 2 hours/day)**
- Tier 2: Day 1
- Tier 3: 2-3 days
- Tier 4: 1 week
- Tier 5: 2-3 weeks

**With Boosters (Light spending)**
- Tier 2: Day 1
- Tier 3: 1-2 days
- Tier 4: 3-4 days
- Tier 5: 1 week

### Anti-Frustration Features
- Clear indication of requirements at all times
- Generous first few tiers to hook players
- Increased rewards at higher tiers to maintain engagement
- Special sales on tier requirements during events
- Bonus point/gem events to help struggling players

## Technical Implementation

### Data Structure
```javascript
{
  userId: "telegram_user_id",
  currentTier: 3,
  tierProgress: {
    points: 5420,     // Current tier points
    gems: 2100,       // Current tier gems
    nextTierPoints: 7000,
    nextTierGems: 3000,
    progressPercent: {
      points: 77.4,
      gems: 70.0
    }
  },
  unlockedFeatures: [
    "pirate_ship",
    "golden_hook",
    "rare_fish_spawn",
    "boosters_basic",
    "daily_quests",
    "combo_system"
  ],
  prestigeCount: 1,
  prestigeBonuses: {
    gemRateBonus: 0.05,   // +5%
    pointRateBonus: 0.10, // +10%
    rareFishBonus: 0.01   // +1%
  },
  tierHistory: [
    { tier: 1, achievedAt: "2024-01-01T00:00:00Z" },
    { tier: 2, achievedAt: "2024-01-03T14:30:00Z" },
    { tier: 3, achievedAt: "2024-01-10T09:15:00Z" }
  ]
}
```

### Tier Check Function
```javascript
function canUpgradeTier(userId) {
  const user = getUser(userId);
  const nextTier = user.currentTier + 1;
  const requirements = getTierRequirements(nextTier);
  
  const hasEnoughPoints = user.tierProgress.points >= requirements.points;
  const hasEnoughGems = user.tierProgress.gems >= requirements.gems;
  
  return hasEnoughPoints && hasEnoughGems;
}
```

## Related Systems
- **Points System**: Required for tier progression
- **Gems System**: Required for tier progression
- **Shop System**: New items unlock at tiers
- **Booster System**: Better boosters at higher tiers
- **Leaderboard**: Tier affects ranking visibility
