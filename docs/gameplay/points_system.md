# Points System Documentation

## Overview
Points are the primary progression currency in Hooker, earned exclusively through fishing gameplay.

## Earning Points

### How Points are Earned
- **Primary Source**: Catching fish
- **Amount**: Varies by fish rarity
  - Common: 10-25 points
  - Uncommon: 30-60 points
  - Rare: 70-120 points
  - Epic: 150-250 points
  - Legendary: 300-500 points

### Point Calculation
```
Base Points (by fish) × Combo Multiplier × Special Event Bonus
```

### Combo System
- Consecutive catches within 10 seconds increase combo
- Combo Multiplier:
  - 1-5 catches: 1x
  - 6-10 catches: 1.2x
  - 11-20 catches: 1.5x
  - 21+ catches: 2x
- Combo breaks if no catch for 10 seconds

### Special Event Bonuses
- **Happy Hour**: 1.5x points (daily 6-7 PM)
- **Weekend Bonus**: 1.25x points (Saturdays and Sundays)
- **Event Periods**: 2x-3x points during special events

## Using Points

### Primary Use: Tier Progression
Points are **required** to unlock new tiers. Cannot be substituted with other currencies.

#### Tier Requirements
- **Tier 1 → Tier 2**: 1,000 points
- **Tier 2 → Tier 3**: 3,000 points
- **Tier 3 → Tier 4**: 7,000 points
- **Tier 4 → Tier 5**: 15,000 points
- **Tier 5+**: Incremental increases (30,000, 60,000, 120,000...)

### Secondary Uses
- **Leaderboard Ranking**: Players ranked by total lifetime points
- **Achievement Progress**: Many achievements tracked by points milestones
- **Prestige System** (Future): Reset to gain prestige points

## Point Characteristics

### Cannot Be Purchased
- ❌ Cannot buy with Telegram Stars
- ❌ Cannot buy with TON
- ❌ Cannot buy with gems
- ✅ Only earned through active gameplay (fishing)

### Cannot Be Traded
- Points are account-bound
- No peer-to-peer transfers
- No gifting to other players

### Persistent
- Points never decrease (except in prestige reset)
- Accumulated over lifetime of account
- Visible in profile and leaderboards

## Display

### In-Game UI
- **Location**: Top-left HUD
- **Icon**: Gold coin with fish emblem
- **Format**: Abbreviated for large numbers (1.2K, 5.4M)
- **Animation**: "+X" popup when earned

### Progress Bars
- Tier progression bar shows points needed for next tier
- Visual feedback when reaching milestones

## Balancing

### Target Progression Rate
- Casual Player (30 min/day): 500-1,000 points/day
- Active Player (2 hours/day): 3,000-5,000 points/day
- Hardcore Player (4+ hours/day): 8,000-15,000 points/day

### Tier Unlock Timeline (Estimated)
- Tier 2: 2-3 days (casual), Day 1 (active)
- Tier 3: 1-2 weeks (casual), 2-3 days (active)
- Tier 4: 3-4 weeks (casual), 1 week (active)
- Tier 5: 2-3 months (casual), 2-3 weeks (active)

## Anti-Cheat

### Point Validation
- Server-side validation for all point awards
- Maximum points per catch capped
- Rate limiting on catch frequency
- Anomaly detection for impossible point gains

### Fair Play
- Identical point values for all players
- No pay-to-win point purchases
- Skill and time investment rewarded

## Future Enhancements

### Potential Features
- **Daily Quests**: Bonus points for completing objectives
- **Streak Bonuses**: Extra points for consecutive daily play
- **Seasonal Leaderboards**: Points reset per season with rewards
- **Point Multiplier Items**: Temporary boosts from events
- **Prestige System**: Trade all points for permanent bonuses and restart

## Technical Implementation Notes

### Data Storage
```javascript
{
  userId: "telegram_user_id",
  totalPoints: 125000,
  currentTierPoints: 5000, // Points within current tier
  lifetimePoints: 125000,  // Never decreases
  pointsToday: 1500,
  pointsThisWeek: 8200,
  lastUpdated: "2024-01-01T12:00:00Z"
}
```

### Point Award Function
```javascript
function awardPoints(fishType, combo, eventBonus) {
  const basePoints = FISH_POINT_VALUES[fishType];
  const comboMultiplier = calculateComboMultiplier(combo);
  const eventMultiplier = getActiveEventBonus();
  
  const totalPoints = Math.floor(
    basePoints * comboMultiplier * eventMultiplier
  );
  
  return totalPoints;
}
```

## Related Systems
- **Gems System**: Separate currency, can be purchased
- **Tier System**: Unlocked with points + gems
- **Leaderboards**: Ranked by total lifetime points
- **Achievements**: Many tied to point milestones
