# Payment System Documentation

## Overview
Hooker integrates with Telegram Stars and TON cryptocurrency for in-app purchases.

## Payment Methods

### 1. Telegram Stars
Telegram's native in-app currency for Mini Apps.

#### What Can Be Purchased
- **Gem Packs**: Primary use case
- **Boosters**: 2x, 5x, Auto-Fisher, etc.
- **Tier Skips**: Skip point requirement (controversial, may be removed)
- **Cosmetic Bundles**: Special skins and decorations

#### Pricing Tiers (in Telegram Stars)
- **Micro**: 10-50 Stars (small gem packs, single boosters)
- **Small**: 50-100 Stars (medium gem packs, booster bundles)
- **Medium**: 100-300 Stars (large gem packs, exclusive cosmetics)
- **Large**: 300-1,000 Stars (mega gem packs, premium bundles)

#### Implementation
```javascript
// Telegram Mini App API
import { openInvoice } from '@telegram-apps/sdk';

async function purchaseWithStars(productId, amount) {
  const invoice = {
    title: "Gem Pack - 500 Gems",
    description: "Medium gem pack with bonus",
    currency: "XTR", // Telegram Stars
    prices: [{ label: "Gem Pack", amount: 45 }],
    payload: { productId, userId: currentUser.id }
  };
  
  const result = await openInvoice(invoice.url);
  
  if (result.status === 'paid') {
    // Award gems server-side after verification
    await awardPurchasedGems(currentUser.id, productId);
  }
}
```

### 2. TON (The Open Network)
Decentralized cryptocurrency for premium purchases.

#### What Can Be Purchased
- **HOOKR Currency**: Custom game token (future feature)
- **Premium Boosters**: Exclusive, more powerful boosters
- **Gem Packs**: Alternative to Telegram Stars
- **NFT Items** (future): Unique, tradeable cosmetics
- **Tournament Entry**: High-stakes competitive events

#### Pricing Tiers (in TON)
- **Starter**: 0.5-1 TON (basic gem packs)
- **Standard**: 1-5 TON (large gem packs, premium boosters)
- **Premium**: 5-15 TON (mega packs, exclusive items)
- **Ultimate**: 15+ TON (special bundles, NFTs)

#### Implementation
```javascript
// TON Connect SDK
import { TonConnectUI } from '@tonconnect/ui';

const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://hooker.game/tonconnect-manifest.json'
});

async function purchaseWithTON(productId, tonAmount) {
  const transaction = {
    validUntil: Math.floor(Date.now() / 1000) + 600, // 10 minutes
    messages: [{
      address: "GAME_WALLET_ADDRESS",
      amount: (tonAmount * 1e9).toString(), // Convert TON to nanotons
      payload: btoa(JSON.stringify({ productId, userId: currentUser.id }))
    }]
  };
  
  const result = await tonConnectUI.sendTransaction(transaction);
  
  // Verify transaction on backend before awarding
  await verifyAndAwardTONPurchase(result);
}
```

## Product Catalog

### Gem Packs (Telegram Stars)
| Package | Gems | Stars | Bonus | Best For |
|---------|------|-------|-------|----------|
| Small | 100 | 10 | 0% | Trying premium |
| Medium | 500 | 45 | 10% | Quick upgrade |
| Large | 1,200 | 100 | 20% | Serious players |
| Mega | 3,000 | 225 | 33% | Power users |
| Ultra | 10,000 | 700 | 43% | Whales |

### Gem Packs (TON)
| Package | Gems | TON | Bonus | Best For |
|---------|------|-----|-------|----------|
| Starter | 150 | 0.5 | 0% | Crypto newcomers |
| Growth | 750 | 2 | 15% | Committed players |
| Premium | 2,000 | 5 | 25% | High investment |
| Ultimate | 7,000 | 15 | 40% | Max value |

### Booster Packs (Telegram Stars)
| Booster | Duration | Stars | Effect |
|---------|----------|-------|--------|
| 2x Gems | 30 min | 50 | Double gem yield |
| 5x Gems | 15 min | 200 | Quintuple gems |
| Auto-Fisher | 60 min | 100 | Auto-cast hook |
| Rare Attractor | 45 min | 150 | +50% rare fish |
| Speed Boost | 30 min | 75 | 2x faster fishing |
| Lucky Hook | 20 min | 120 | Better catches |
| **Bundle (3 boosters)** | Varies | 300 | 20% discount |

### Premium Boosters (TON Only)
| Booster | Duration | TON | Effect |
|---------|----------|-----|--------|
| 10x Mega Gems | 10 min | 10 | 10x gem yield |
| Legendary Magnet | 30 min | 15 | Only epic/legendary fish |
| Infinite Auto-Fisher | 24 hours | 20 | Auto-fish for a day |

### Tier Skips (Telegram Stars) - Optional Feature
| Tier Jump | Stars | Description |
|-----------|-------|-------------|
| Skip to Tier 2 | 500 | Skip point requirement |
| Skip to Tier 3 | 1,500 | Skip Tiers 2 and 3 requirements |
| Skip to Tier 4 | 4,000 | Skip to penultimate tier |

**Note**: Tier skips are controversial as they may impact game balance. Consider removing or limiting.

## Payment Flow

### Purchase Flow (Telegram Stars)
1. User taps "Buy Gems" or product in shop
2. Game displays product details and price in Stars
3. User confirms purchase
4. Telegram payment UI opens
5. User completes payment via Telegram
6. Telegram sends webhook to game server
7. Server verifies payment and awards items
8. User receives confirmation and items appear in-game

### Purchase Flow (TON)
1. User taps "Connect Wallet" (if not connected)
2. TON Connect UI prompts wallet connection
3. User selects product (shows TON price)
4. User confirms transaction
5. Wallet app opens for approval
6. User signs transaction
7. Game server monitors blockchain
8. Server confirms transaction and awards items
9. User receives confirmation

## Security & Verification

### Server-Side Validation
- **All payments verified server-side** before awarding items
- Never trust client-side payment claims
- Store transaction IDs to prevent double-spending
- Implement idempotency keys

### Telegram Stars Verification
```javascript
// Backend webhook handler
app.post('/webhook/telegram-payment', async (req, res) => {
  const { update_id, pre_checkout_query, successful_payment } = req.body;
  
  if (successful_payment) {
    // Verify payment with Telegram API
    const isValid = await verifyTelegramPayment(successful_payment);
    
    if (isValid) {
      await awardPurchasedItems(
        successful_payment.telegram_payment_charge_id,
        successful_payment.invoice_payload
      );
    }
  }
  
  res.sendStatus(200);
});
```

### TON Transaction Verification
```javascript
// Backend transaction monitor
async function verifyTONTransaction(txHash) {
  const tx = await tonClient.getTransaction(txHash);
  
  // Verify:
  // 1. Transaction is to correct wallet
  // 2. Amount matches expected
  // 3. Payload contains valid productId and userId
  // 4. Transaction is confirmed
  // 5. Not already processed
  
  if (isValidTransaction(tx)) {
    await awardPurchasedItems(tx.payload);
    await markTransactionProcessed(txHash);
  }
}
```

## Refund Policy

### Telegram Stars Refunds
- Processed through Telegram's refund system
- Game server receives refund webhook
- Deduct awarded items if still in account
- If items spent, flag account for review
- 14-day refund window

### TON Refunds
- Cryptocurrency transactions are irreversible
- No automatic refunds
- Manual review for legitimate disputes
- Requires customer support ticket
- Rare, case-by-case basis

## Analytics & Reporting

### Key Metrics
- **Conversion Rate**: Percentage of users who make purchase
- **ARPU** (Average Revenue Per User): Total revenue / total users
- **ARPPU** (Average Revenue Per Paying User): Total revenue / paying users
- **LTV** (Lifetime Value): Predicted total revenue per user
- **Payment Method Split**: Stars vs. TON usage
- **Most Popular Products**: Best-selling items
- **Revenue by Tier**: Which game tiers generate most revenue

### Dashboard Tracking
```javascript
{
  totalRevenue: {
    stars: 145000,  // Total Stars earned
    ton: 2450       // Total TON earned
  },
  transactions: {
    stars: 8500,    // Number of Star transactions
    ton: 320        // Number of TON transactions
  },
  topProducts: [
    { id: "gem_pack_medium", sales: 2100 },
    { id: "booster_2x", sales: 1800 },
    { id: "gem_pack_large", sales: 950 }
  ],
  conversionRate: 0.08, // 8% of users purchase
  arpu: 0.42,           // $0.42 per user
  arppu: 5.25           // $5.25 per paying user
}
```

## Compliance & Legal

### Requirements
- **Age Verification**: Users must be 18+ or have parental consent
- **Terms of Service**: Clear payment terms and conditions
- **Privacy Policy**: How payment data is handled
- **Regional Restrictions**: Comply with local laws (e.g., loot box regulations)
- **Tax Compliance**: Collect and remit taxes where required

### Telegram Mini App Guidelines
- Follow Telegram's monetization policies
- No gambling or illegal content
- Clear pricing and descriptions
- No misleading offers
- Respect user privacy

### Cryptocurrency Regulations
- KYC/AML compliance for large transactions (if required)
- Transparent pricing in both crypto and fiat equivalent
- Security best practices for wallet management
- Regular security audits

## Future Enhancements

### Planned Features
- **Subscription Model**: Monthly gems + permanent booster ($4.99/month)
- **Season Pass**: Tiered rewards for seasonal play ($9.99/season)
- **HOOKR Token**: Custom game cryptocurrency for governance and rewards
- **NFT Marketplace**: Buy/sell unique cosmetic items
- **Peer-to-Peer Trading**: Secure player-to-player transactions (with fees)
- **Crypto Staking**: Earn passive gems by staking TON
- **Tournament Entry Fees**: Competitive play with prize pools

## Testing

### Test Mode
- Enable test payments in development
- Use Telegram test environment
- TON testnet for blockchain testing
- Never charge real money in test builds

### Testing Checklist
- [ ] Payment flow completes successfully
- [ ] Items awarded correctly after payment
- [ ] Refunds processed and items removed
- [ ] Duplicate transaction prevention works
- [ ] Server verification catches fraudulent payments
- [ ] Analytics tracking accurate
- [ ] Error handling for failed payments
- [ ] UI displays correct prices and currency

## Related Systems
- **Gems System**: Primary purchased resource
- **Booster System**: Purchasable power-ups
- **Tier System**: Optional tier skips
- **Shop UI**: Frontend for purchases
