// Base License Types
export type BaseLicenseType =
  | 'Device Manager'
  | 'Starter'
  | 'Essential'
  | 'Advanced'
  | 'Enterprise'
  | 'Elite';

// Capacity Types
export type CapacityType = 'Door' | 'User' | 'Operator';

// Feature Add-ons Types
export type FeatureAddonType =
  | 'Map Monitoring'
  | 'Video Monitoring'
  | 'GIS Map Monitoring'
  | 'Server Matching'
  | 'Visitor'
  | 'Directory Integration'
  | 'Roll Call'
  | 'T&A'
  | 'Mobile App'
  | 'Multi Communications Server'
  | 'Event Log API'
  | 'Remote Access'
  | 'External Remote Access'
  | 'BioStar X Plugin';

// Package Types
export type PackageType =
  | 'Advanced AC';

// License Configuration
export interface LicenseConfig {
  type: BaseLicenseType;
  capacityLimits: {
    door?: { min: number; max?: number };
    user?: { min: number; max?: number };
    operator?: { min: number; max?: number };
  };
  upgradableCapacities: CapacityType[];
  includesAdvancedAC: boolean;
  supportsAdvancedAC: boolean;
  includesMapMonitoring: boolean;
  supportsFeatureAddons: boolean;
  supportsVideo: boolean;
  supportsTA: boolean;
  msrp: number;
}

// User Input
export interface LicenseInput {
  door: number;
  user: number;
  operator: number;
  featureAddons: {
    'Map Monitoring': boolean;
    'Video Monitoring': boolean;
    'GIS Map Monitoring': boolean;
    'Server Matching': boolean;
    'Visitor': boolean;
    'Directory Integration': boolean;
    'Roll Call': boolean;
    'T&A': number;
    'Mobile App': boolean;
    'Multi Communications Server': number;
    'Event Log API': boolean;
    'Remote Access': boolean;
    'External Remote Access': boolean;
    'BioStar X Plugin': boolean;
  };
  packages: {
    'Advanced AC': boolean;
  };
}

// Result License
export interface LicenseResult {
  baseLicense: BaseLicenseType; 
  capacityUpgrades: {
    door?: number; 
    user?: number; 
    operator?: number; 
  };
  featureAddons: {
    type: FeatureAddonType; 
    quantity?: number; 
  }[];
  packages: PackageType[]; 
  totalPrice?: number; 
}

