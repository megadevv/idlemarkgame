# Gems System Documentation

## Overview
Gems are the premium currency in Hooker, earned through gameplay time and purchasable with real money. Used exclusively for upgrading gear and progressing through tiers.

## Earning Gems

### Time-Based Earning
Gems are earned based on **time spent actively fishing**, not by catches.

#### Base Gem Rate
- **Base Rate**: 1 gem per 60 seconds of active fishing
- **Active Fishing**: Hook is in water and player is engaged
- **Idle Time**: Does not count toward gem earning (unless Auto-Fisher booster is active)

#### Calculation
```
Gems Earned = (Fishing Time in Seconds / 60) × Booster Multiplier
```

### Booster Multipliers
Boosters dramatically increase gem yield:

- **No Booster**: 1x (1 gem/min)
- **2x Gem Booster**: 2x (2 gems/min)
- **5x Gem Booster**: 5x (5 gems/min)
- **Auto-Fisher**: Counts idle time as active (1x rate)
- **Auto-Fisher + 2x Booster**: 2x gems while idle
- **Auto-Fisher + 5x Booster**: 5x gems while idle

### Catch Bonuses
Small gem bonuses from special catches:

- **Epic Fish**: +5 bonus gems (in addition to time-based)
- **Legendary Fish**: +15 bonus gems
- **First Catch of New Fish**: +10 gems (one-time)
- **Perfect Catch** (timing minigame): +2 gems

### Daily Rewards
- **Daily Login**: 50 gems
- **Daily Quest Completion**: 100-300 gems
- **Weekly Challenge**: 500 gems
- **Monthly Milestone**: 1,000 gems

## Using Gems

### Primary Use: Gear Upgrades

#### Hook Upgrades
- **Rusty Hook → Golden Hook**: 500 gems
- **Golden Hook → Tentacle Hook**: 1,500 gems
- **Tentacle Hook → Laser Hook**: 5,000 gems

#### Boat Upgrades
- **Wooden Boat → Pirate Ship**: 800 gems
- **Pirate Ship → Hover Boat**: 2,500 gems
- **Hover Boat → Iceberg Sled**: 7,000 gems

### Secondary Use: Tier Progression
Gems required (along with points) to unlock tiers:

- **Tier 1 → Tier 2**: 500 gems + 1,000 points
- **Tier 2 → Tier 3**: 1,500 gems + 3,000 points
- **Tier 3 → Tier 4**: 3,000 gems + 7,000 points
- **Tier 4 → Tier 5**: 6,000 gems + 15,000 points

### Cosmetic Purchases
- **Special Boat Skins**: 1,000-3,000 gems
- **Special Hook Skins**: 500-1,500 gems
- **Profile Customization**: 200-1,000 gems

## Purchasing Gems

### Telegram Stars Packages
- **Small Pack**: 100 gems = 10 Stars
- **Medium Pack**: 500 gems = 45 Stars (10% bonus)
- **Large Pack**: 1,200 gems = 100 Stars (20% bonus)
- **Mega Pack**: 3,000 gems = 225 Stars (33% bonus)
- **Ultra Pack**: 10,000 gems = 700 Stars (43% bonus)

### TON Cryptocurrency Packages
- **Starter**: 150 gems = 0.5 TON
- **Growth**: 750 gems = 2 TON (15% bonus)
- **Premium**: 2,000 gems = 5 TON (25% bonus)
- **Ultimate**: 7,000 gems = 15 TON (40% bonus)

### Special Offers
- **First-Time Purchase**: Double gems on first transaction
- **Limited Events**: Triple gem value during special promotions
- **Bundle Deals**: Gems + Boosters at discounted rate

## Gem Characteristics

### Purchasable
- ✅ Can buy with Telegram Stars
- ✅ Can buy with TON
- ✅ Can earn through gameplay (time-based)
- ❌ Cannot buy with points

### Account-Bound
- No trading between players
- No gifting (except promotional codes)
- Persistent across sessions

### Never Expire
- Gems remain in account indefinitely
- No decay or time limits
- Survive tier resets (if implemented)

## Display

### In-Game UI
- **Location**: Top-right HUD (next to points)
- **Icon**: Blue/cyan sparkling gem
- **Format**: Full number up to 9,999, then abbreviated (10.5K, 1.2M)
- **Animation**: Sparkle effect when earned, burst when spent

### Shop Display
- Current gem balance prominently displayed
- Cost in gems shown for each item
- "Not Enough Gems" indicator when insufficient
- Purchase button changes to "Buy Gems" if needed

## Balancing

### Free-to-Play Earning Rate
- **Casual Player** (30 min/day):
  - Time-based: ~30 gems/day
  - Daily rewards: 50-150 gems/day
  - **Total**: ~80-180 gems/day
  
- **Active Player** (2 hours/day):
  - Time-based: ~120 gems/day
  - Daily rewards: 100-300 gems/day
  - **Total**: ~220-420 gems/day

- **Hardcore Player** (4+ hours/day):
  - Time-based: ~240+ gems/day
  - Daily rewards: 100-300 gems/day
  - **Total**: ~340-540+ gems/day

### Gear Unlock Timeline (Free-to-Play)
- **First Upgrade**: 3-7 days
- **Second Upgrade**: 1-2 weeks
- **Third Upgrade**: 3-4 weeks
- **Full Gear Set**: 2-3 months

### Competitive Balance
- Boosters provide **optional acceleration**, not mandatory power
- Free players can reach same tiers, just slower
- Skill and strategy still matter more than spending

## Security

### Anti-Fraud Measures
- Server-side gem tracking
- Transaction verification with Telegram/TON APIs
- Refund protection (gems deducted if payment reversed)
- Duplicate transaction prevention

### Fair Monetization
- Clear pricing (no hidden costs)
- No gambling mechanics (direct purchases only)
- No pressure tactics or dark patterns
- Respectful of player time and money

## Analytics

### Tracked Metrics
- Gems earned (time-based vs. bonuses vs. purchased)
- Gems spent (gear vs. tiers vs. cosmetics)
- Purchase conversion rates
- Average gems per user per day
- Booster usage correlation with gem purchases

## Future Enhancements

### Potential Features
- **Gem Sink Events**: Limited-time exclusive items
- **Gem Trading Post**: Exchange gems for other resources (balanced rates)
- **Subscription Model**: Monthly gems + permanent booster
- **Gem Missions**: High-value tasks for extra gems
- **Referral Rewards**: Bonus gems for inviting friends

## Technical Implementation

### Data Structure
```javascript
{
  userId: "telegram_user_id",
  totalGems: 5420,
  gemsEarned: {
    timeBased: 3200,
    bonuses: 800,
    dailyRewards: 1200,
    purchased: 220
  },
  gemsSpent: {
    hookUpgrades: 2000,
    boatUpgrades: 800,
    tierUnlocks: 1500,
    cosmetics: 500
  },
  lifetimeGems: 8920,
  lastGemAward: "2024-01-01T12:30:00Z"
}
```

### Gem Award Function
```javascript
function awardTimeBasedGems(fishingTimeSeconds, activeBooster) {
  const baseGemsPerSecond = 1 / 60; // 1 gem per 60 seconds
  let multiplier = 1;
  
  if (activeBooster === '2x') multiplier = 2;
  if (activeBooster === '5x') multiplier = 5;
  
  const gemsEarned = Math.floor(
    fishingTimeSeconds * baseGemsPerSecond * multiplier
  );
  
  return gemsEarned;
}
```

## Related Systems
- **Points System**: Earned differently (catch-based, not purchasable)
- **Booster System**: Multiplies gem earning rate
- **Tier System**: Requires both gems and points
- **Payment System**: Telegram Stars and TON integration
