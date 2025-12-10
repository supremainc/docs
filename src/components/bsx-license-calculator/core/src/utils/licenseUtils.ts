import { LicenseResult } from '../types/license';
import { getTAType } from '../data/licenseData';

// Part number mapping function
function getPartNumber(type: string, quantity?: number): string {
  // Base License
  const baseLicenseMap: Record<string, string> = {
    'Device Manager': 'BIOSTARX-DEV',
    'Starter': 'BIOSTARX-STR',
    'Essential': 'BIOSTARX-ESS',
    'Advanced': 'BIOSTARX-ADV',
    'Enterprise': 'BIOSTARX-ENT',
    'Elite': 'BIOSTARX-ELT',
  };

  // Capacity
  const capacityMap: Record<string, string> = {
    'Door': 'BIOSTARX-UP-DOR',
    'User': 'BIOSTARX-UP-USR',
    'Operator': 'BIOSTARX-UP-OPR',
  };

  // Feature Add-ons
  if (type === 'Multi Communications Server') {
    if (quantity && quantity >= 2) {
      const addonCount = quantity - 2;
      if (addonCount > 0) {
        return `BIOSTARX-ADD-MCS-BAS + BIOSTARX-ADD-MCS-ADD x${addonCount}`;
      }
      return 'BIOSTARX-ADD-MCS-BAS';
    }
    return 'BIOSTARX-ADD-MCS-BAS';
  }

  if (type === 'T&A') {
    const taType = getTAType(quantity || 0);
    if (taType === 'Standard') {
      return 'BIOSTARX-ADD-TNA-STD';
    } else if (taType === 'Enterprise') {
      return 'BIOSTARX-ADD-TNA-ENT';
    }
  }

  const featureAddonMap: Record<string, string> = {
    'Map Monitoring': '', // Part Number not needed
    'Video Monitoring': 'BIOSTARX-ADD-VID',
    'GIS Map Monitoring': 'BIOSTARX-ADD-GIS',
    'Server Matching': 'BIOSTARX-ADD-SVM',
    'Visitor': 'BIOSTARX-ADD-VST',
    'Directory Integration': 'BIOSTARX-ADD-DIR',
    'Roll Call': 'BIOSTARX-ADD-RCL',
    'Mobile App': 'BIOSTARX-ADD-MOB',
    'Event Log API': 'BIOSTARX-ADD-EVTAPI',
    'Remote Access': 'BIOSTARX-ADD-RAC',
    'External Remote Access': 'BIOSTARX-ADD-RAE',
    'BioStar X Plugin': 'BIOSTARX-ADD-PLG',
  };

  // Package
  const packageMap: Record<string, string> = {
    'Advanced AC': 'BIOSTARX-PKG-AAC',
  };

  // Check maps in order, but handle empty strings explicitly
  if (type in baseLicenseMap) {
    return baseLicenseMap[type];
  }
  if (type in capacityMap) {
    return capacityMap[type];
  }
  if (type in featureAddonMap) {
    const partNumber = featureAddonMap[type];
    // Return empty string if explicitly set (e.g., Map Monitoring)
    return partNumber;
  }
  if (type in packageMap) {
    return packageMap[type];
  }
  
  // Fallback to type name if not found
  return type;
}

// Generate part number list for clipboard copy
export function generatePartNumberList(licenseResult: LicenseResult): string {
  const partNumbers: string[] = [];

  // Base License
  const basePartNumber = getPartNumber(licenseResult.baseLicense);
  if (basePartNumber) {
    partNumbers.push(basePartNumber);
  }

  // Capacity Upgrades
  if (licenseResult.capacityUpgrades.door !== undefined && licenseResult.capacityUpgrades.door > 0) {
    const doorPart = getPartNumber('Door');
    const count = licenseResult.capacityUpgrades.door;
    partNumbers.push(count > 1 ? `${doorPart} (${count})` : doorPart);
  }
  if (licenseResult.capacityUpgrades.user !== undefined && licenseResult.capacityUpgrades.user > 0) {
    const userPart = getPartNumber('User');
    const count = licenseResult.capacityUpgrades.user;
    partNumbers.push(count > 1 ? `${userPart} (${count})` : userPart);
  }
  if (licenseResult.capacityUpgrades.operator !== undefined && licenseResult.capacityUpgrades.operator > 0) {
    const operatorPart = getPartNumber('Operator');
    const count = licenseResult.capacityUpgrades.operator;
    partNumbers.push(count > 1 ? `${operatorPart} (${count})` : operatorPart);
  }

  // Feature Add-ons
  licenseResult.featureAddons.forEach((addon) => {
    if (addon.type === 'Multi Communications Server') {
      const quantity = addon.quantity || 0;
      if (quantity >= 2) {
        partNumbers.push('BIOSTARX-ADD-MCS-BAS');
        const addonCount = quantity - 2;
        if (addonCount > 0) {
          partNumbers.push(addonCount > 1 ? `BIOSTARX-ADD-MCS-ADD (${addonCount})` : 'BIOSTARX-ADD-MCS-ADD');
        }
      }
    } else if (addon.type === 'T&A') {
      const taType = getTAType(addon.quantity || 0);
      if (taType) {
        const taPart = getPartNumber('T&A', addon.quantity);
        if (taPart) {
          partNumbers.push(taPart);
        }
      }
    } else {
      const partNumber = getPartNumber(addon.type);
      if (partNumber && partNumber.trim() !== '') {
        partNumbers.push(partNumber);
      }
    }
  });

  // Packages
  licenseResult.packages.forEach((pkg) => {
    const partNumber = getPartNumber(pkg);
    if (partNumber) {
      partNumbers.push(partNumber);
    }
  });

  return partNumbers.join(', ');
}

