/**
 * Asset Loader Configuration for Hooker Fishing Game
 * 
 * This module provides utilities for loading and managing game assets
 * optimized for Telegram Mini App deployment.
 */

export interface AssetConfig {
  basePath: string;
  cdnUrl?: string;
  useWebP?: boolean;
  preloadCritical?: boolean;
}

export const defaultConfig: AssetConfig = {
  basePath: '/assets',
  cdnUrl: undefined, // Set to CDN URL in production
  useWebP: false, // Enable if browser supports WebP
  preloadCritical: true
};

/**
 * Asset paths organized by category
 */
export const assetPaths = {
  backgrounds: {
    calmOcean: 'backgrounds/calm_ocean.jpg',
    sunsetOcean: 'backgrounds/sunset_ocean.jpg',
    stormySea: 'backgrounds/stormy_sea.jpg',
    eventBanner: 'backgrounds/event_banner.jpg'
  },
  
  boats: {
    wooden: 'boats/wooden_boat.png',
    pirate: 'boats/pirate_ship.png',
    hover: 'boats/hover_boat.png',
    iceberg: 'boats/iceberg_sled.png'
  },
  
  hooks: {
    rusty: 'hooks/rusty_hook.png',
    golden: 'hooks/golden_hook.png',
    tentacle: 'hooks/tentacle_hook.png',
    laser: 'hooks/laser_hook.png',
    candyCane: 'hooks/candy_cane_hook.png',
    dragonClaw: 'hooks/dragon_claw_hook.png'
  },
  
  fish: {
    common: [
      'fish/common_bubblefin.png',
      'fish/common_mud_guppy.png',
      'fish/common_reef_pebble.png',
      'fish/common_silver_minnow.png',
      'fish/common_kelp_nibbler.png'
    ],
    uncommon: [
      'fish/uncommon_coral_snapper.png',
      'fish/uncommon_reef_dart.png',
      'fish/uncommon_prism_swimmer.png',
      'fish/uncommon_tide_hopper.png'
    ],
    rare: [
      'fish/rare_crimson_barracuda.png',
      'fish/rare_deepfang.png',
      'fish/rare_crystal_fin.png',
      'fish/rare_ember_koi.png'
    ],
    epic: [
      'fish/epic_thunder_ray.png',
      'fish/epic_abyssal_lancer.png',
      'fish/epic_phoenix_grouper.png',
      'fish/epic_void_eel.png'
    ],
    legendary: [
      'fish/legendary_leviathan_pike.png',
      'fish/legendary_krakenling.png',
      'fish/legendary_celestial_whale.png',
      'fish/legendary_prismatic_dragon.png'
    ],
    event: [
      'fish/event_pumpkin_puffer.png',
      'fish/event_frost_serpent.png',
      'fish/event_love_angelfish.png',
      'fish/event_lucky_goldfish.png'
    ]
  },
  
  icons: {
    currency: {
      coin: 'icons/icon_coin.png',
      gem: 'icons/icon_gem.png',
      star: 'icons/icon_star.png',
      hookr: 'icons/icon_hookr.png'
    },
    tierBadges: {
      tier1: 'icons/badge_tier_1.png',
      tier2: 'icons/badge_tier_2.png',
      tier3: 'icons/badge_tier_3.png',
      tier4: 'icons/badge_tier_4.png',
      tier5: 'icons/badge_tier_5.png'
    },
    navigation: {
      settings: 'icons/icon_settings.png',
      shop: 'icons/icon_shop.png',
      wallet: 'icons/icon_wallet.png',
      leaderboard: 'icons/icon_leaderboard.png',
      upgrade: 'icons/icon_upgrade.png',
      inventory: 'icons/icon_inventory.png',
      quest: 'icons/icon_quest.png',
      profile: 'icons/icon_profile.png',
      close: 'icons/icon_close.png',
      info: 'icons/icon_info.png'
    }
  },
  
  boosters: {
    gem2x: {
      active: 'boosters/booster_2x_active.png',
      inactive: 'boosters/booster_2x_inactive.png'
    },
    gem5x: {
      active: 'boosters/booster_5x_active.png',
      inactive: 'boosters/booster_5x_inactive.png'
    },
    autoFisher: {
      active: 'boosters/booster_auto_active.png',
      inactive: 'boosters/booster_auto_inactive.png'
    },
    rareAttractor: {
      active: 'boosters/booster_rare_active.png',
      inactive: 'boosters/booster_rare_inactive.png'
    },
    speedBoost: {
      active: 'boosters/booster_speed_active.png',
      inactive: 'boosters/booster_speed_inactive.png'
    },
    luckyHook: {
      active: 'boosters/booster_lucky_active.png',
      inactive: 'boosters/booster_lucky_inactive.png'
    },
    combo: 'boosters/booster_combo_active.png',
    timerBg: 'boosters/booster_timer_bg.png',
    slotEmpty: 'boosters/booster_slot_empty.png'
  },
  
  buttons: {
    cast: {
      normal: 'ui/buttons/cast/button_cast_normal.png',
      pressed: 'ui/buttons/cast/button_cast_pressed.png',
      disabled: 'ui/buttons/cast/button_cast_disabled.png'
    },
    upgrade: {
      normal: 'ui/buttons/upgrade/button_upgrade_normal.png',
      pressed: 'ui/buttons/upgrade/button_upgrade_pressed.png',
      disabled: 'ui/buttons/upgrade/button_upgrade_disabled.png'
    },
    shop: {
      normal: 'ui/buttons/shop/button_shop_normal.png',
      pressed: 'ui/buttons/shop/button_shop_pressed.png',
      disabled: 'ui/buttons/shop/button_shop_disabled.png'
    },
    wallet: {
      normal: 'ui/buttons/wallet/button_wallet_normal.png',
      pressed: 'ui/buttons/wallet/button_wallet_pressed.png',
      disabled: 'ui/buttons/wallet/button_wallet_disabled.png'
    },
    small: {
      claim: {
        normal: 'ui/buttons/small/button_claim_small_normal.png',
        pressed: 'ui/buttons/small/button_claim_small_pressed.png',
        disabled: 'ui/buttons/small/button_claim_small_disabled.png'
      },
      ad: {
        normal: 'ui/buttons/small/button_ad_small_normal.png',
        pressed: 'ui/buttons/small/button_ad_small_pressed.png',
        disabled: 'ui/buttons/small/button_ad_small_disabled.png'
      },
      connect: {
        normal: 'ui/buttons/small/button_connect_small_normal.png',
        pressed: 'ui/buttons/small/button_connect_small_pressed.png'
      },
      buy: {
        normal: 'ui/buttons/small/button_buy_small_normal.png',
        pressed: 'ui/buttons/small/button_buy_small_pressed.png',
        disabled: 'ui/buttons/small/button_buy_small_disabled.png'
      }
    },
    special: {
      tierUpgrade: {
        normal: 'ui/buttons/special/button_tier_upgrade_normal.png',
        pressed: 'ui/buttons/special/button_tier_upgrade_pressed.png',
        disabled: 'ui/buttons/special/button_tier_upgrade_disabled.png'
      },
      premium: {
        normal: 'ui/buttons/special/button_premium_normal.png',
        pressed: 'ui/buttons/special/button_premium_pressed.png'
      }
    }
  }
};

/**
 * Critical assets to preload on initial game load
 */
export const criticalAssets: string[] = [
  assetPaths.backgrounds.calmOcean,
  assetPaths.boats.wooden,
  assetPaths.hooks.rusty,
  ...assetPaths.fish.common,
  assetPaths.buttons.cast.normal,
  assetPaths.buttons.cast.pressed,
  assetPaths.buttons.cast.disabled,
  assetPaths.icons.currency.coin,
  assetPaths.icons.currency.gem,
  assetPaths.icons.navigation.settings,
  assetPaths.icons.navigation.shop
];

/**
 * Asset Loader Class
 */
export class AssetLoader {
  private config: AssetConfig;
  private loadedAssets: Map<string, HTMLImageElement>;
  private loadingPromises: Map<string, Promise<HTMLImageElement>>;

  constructor(config: Partial<AssetConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
    this.loadedAssets = new Map();
    this.loadingPromises = new Map();
  }

  /**
   * Get full URL for an asset path
   */
  private getAssetUrl(path: string): string {
    const basePath = this.config.cdnUrl || this.config.basePath;
    return `${basePath}/${path}`;
  }

  /**
   * Load a single asset
   */
  async loadAsset(path: string): Promise<HTMLImageElement> {
    // Return cached asset if already loaded
    if (this.loadedAssets.has(path)) {
      return this.loadedAssets.get(path)!;
    }

    // Return existing loading promise if in progress
    if (this.loadingPromises.has(path)) {
      return this.loadingPromises.get(path)!;
    }

    // Create new loading promise
    const loadingPromise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      const url = this.getAssetUrl(path);

      img.onload = () => {
        this.loadedAssets.set(path, img);
        this.loadingPromises.delete(path);
        resolve(img);
      };

      img.onerror = () => {
        this.loadingPromises.delete(path);
        reject(new Error(`Failed to load asset: ${path}`));
      };

      img.src = url;
    });

    this.loadingPromises.set(path, loadingPromise);
    return loadingPromise;
  }

  /**
   * Load multiple assets in parallel
   */
  async loadAssets(paths: string[]): Promise<HTMLImageElement[]> {
    return Promise.all(paths.map(path => this.loadAsset(path)));
  }

  /**
   * Preload critical assets
   */
  async preloadCriticalAssets(): Promise<void> {
    if (!this.config.preloadCritical) return;

    console.log('Preloading critical assets...');
    await this.loadAssets(criticalAssets);
    console.log('Critical assets loaded');
  }

  /**
   * Get a loaded asset
   */
  getAsset(path: string): HTMLImageElement | undefined {
    return this.loadedAssets.get(path);
  }

  /**
   * Check if asset is loaded
   */
  isLoaded(path: string): boolean {
    return this.loadedAssets.has(path);
  }

  /**
   * Clear all cached assets
   */
  clearCache(): void {
    this.loadedAssets.clear();
    this.loadingPromises.clear();
  }
}

/**
 * Global asset loader instance
 */
export const assetLoader = new AssetLoader();

/**
 * Preload critical assets on module load
 */
if (typeof window !== 'undefined') {
  assetLoader.preloadCriticalAssets().catch(err => {
    console.error('Failed to preload critical assets:', err);
  });
}
