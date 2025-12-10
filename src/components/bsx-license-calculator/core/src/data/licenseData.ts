import { LicenseConfig, BaseLicenseType, CapacityType } from '../types/license';

export const licenseConfigs: Record<BaseLicenseType, LicenseConfig> = {
  'Device Manager': {
    type: 'Device Manager',
    capacityLimits: {
      door: { min: 0, max: 0 },
      user: { min: 0, max: 200 },
      operator: { min: 0, max: 1 },
    },
    upgradableCapacities: ['User', 'Operator'],
    includesAdvancedAC: false,
    supportsAdvancedAC: false,
    includesMapMonitoring: false,
    supportsFeatureAddons: false,
    supportsVideo: false,
    supportsTA: true,
    msrp: 0,
  },
  Starter: {
    type: 'Starter',
    capacityLimits: {
      door: { min: 0, max: 5 },
      user: { min: 0, max: 100 },
      operator: { min: 0, max: 1 },
    },
    upgradableCapacities: [],
    includesAdvancedAC: false,
    supportsAdvancedAC: false,
    includesMapMonitoring: false,
    supportsFeatureAddons: false,
    supportsVideo: false,
    supportsTA: true,
    msrp: 400,
  },
  Essential: {
    type: 'Essential',
    capacityLimits: {
      door: { min: 0, max: 32 },
      user: { min: 0, max: 1000 },
      operator: { min: 0, max: 10 },
    },
    upgradableCapacities: ['Door', 'User', 'Operator'],
    includesAdvancedAC: false,
    supportsAdvancedAC: false,
    includesMapMonitoring: false,
    supportsFeatureAddons: true,
    supportsVideo: false,
    supportsTA: true,
    msrp: 1000,
  },
  Advanced: {
    type: 'Advanced',
    capacityLimits: {
      door: { min: 0, max: 128 },
      user: { min: 0, max: 50000 },
      operator: { min: 0, max: 20 },
    },
    upgradableCapacities: ['Door', 'User', 'Operator'],
    includesAdvancedAC: false,
    supportsAdvancedAC: true,
    includesMapMonitoring: true,
    supportsFeatureAddons: true,
    supportsVideo: true,
    supportsTA: true,
    msrp: 2000,
  },
  Enterprise: {
    type: 'Enterprise',
    capacityLimits: {
      door: { min: 0, max: 500 },
      user: { min: 0, max: 100000 },
      operator: { min: 0, max: 40 },
    },
    upgradableCapacities: ['Door', 'User', 'Operator'],
    includesAdvancedAC: true,
    supportsAdvancedAC: false,
    includesMapMonitoring: true,
    supportsFeatureAddons: true,
    supportsVideo: true,
    supportsTA: true,
    msrp: 7000,
  },
  Elite: {
    type: 'Elite',
    capacityLimits: {
      door: { min: 0, max: 2000 },
      user: { min: 0, max: 500000 },
      operator: { min: 0, max: 100 },
    },
    upgradableCapacities: ['Door', 'User', 'Operator'], 
    includesAdvancedAC: true, 
    supportsAdvancedAC: false,
    includesMapMonitoring: true,
    supportsFeatureAddons: true,
    supportsVideo: true,
    supportsTA: true,
    msrp: 20000,
  },
};

export const capacityUpgradePrices: Record<CapacityType, { quantity: number; price: number }> = {
  Door: { quantity: 32, price: 500 }, 
  User: { quantity: 5000, price: 500 }, 
  Operator: { quantity: 10, price: 1000 }, 
};

export const featureAddonPrices: Record<string, number> = {
  'Multi Comm Server Init': 15000,
  'Multi Comm Server Add-on': 4000,
  'GIS Map Monitoring': 1000,
  'Video Monitoring': 100,
  'Server Matching': 3000,
  'Visitor': 1000,
  'Directory Integration': 3000,
  'Roll Call': 500,
  'T&A Standard': 1000,
  'T&A Enterprise': 2500,
  'Mobile App': 100,
  'Event Log API': 2000,
  'Remote Access': 1000,
  'BioStar X Plugin': 2000,
};

export function calculateMultiCommServer(quantity: number): {
  init: number;
  addon: number;
} {
  if (quantity < 2) {
    return { init: 0, addon: 0 };
  }
  return {
    init: 1,
    addon: Math.max(0, quantity - 2),
  };
}

export function getTAType(quantity: number): 'Standard' | 'Enterprise' | null {
  if (quantity === 0) return null;
  if (quantity <= 500) return 'Standard';
  return 'Enterprise';
}

export const packagePrices: Record<string, number> = {
  'Advanced AC': 3000, 
};

