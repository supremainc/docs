import {
  LicenseInput,
  LicenseResult,
  BaseLicenseType,
  FeatureAddonType,
} from '../types/license';
import { licenseConfigs, getTAType, capacityUpgradePrices, packagePrices, featureAddonPrices, calculateMultiCommServer } from '../data/licenseData';

export function recommendLicense(input: LicenseInput): LicenseResult {
  // Feature Add-ons나 Advanced AC가 있으면 Device Manager나 Starter 불가
  const hasFeatureAddons = hasAnyFeatureAddon(input);
  const hasAdvancedAC = input.packages['Advanced AC'];
  
  // Device Manager 체크 (Door 0인 경우)
  if (input.door === 0) {
    // Feature Add-ons나 Advanced AC가 있으면 Device Manager 불가
    if (hasFeatureAddons || hasAdvancedAC) {
      return recommendEssentialOrHigher(input);
    }
    return recommendDeviceManager(input);
  }

  // Advanced AC가 있으면 Essential 이상 필요
  if (hasAdvancedAC) {
    return recommendEssentialOrHigher(input);
  }

  // Feature Add-ons가 있으면 Essential 이상 필요
  if (hasFeatureAddons) {
    return recommendEssentialOrHigher(input);
  }

  // Essential 이상 필요 조건
  if (input.door > 5 || input.user > 100 || input.operator > 1) {
    return recommendEssentialOrHigher(input);
  }

  // Starter 조건 (Door 1-4, User 1-99, Operator 0)
  if (
    input.door >= 1 &&
    input.door <= 5 &&
    input.user >= 0 &&
    input.user <= 100 &&
    input.operator >= 0 &&
    input.operator <= 1
  ) {
  const capacityUpgrades = {};
  const featureAddons = calculateFeatureAddons(input, 'Starter');
  const packages = getSelectedPackages(input, 'Starter');
  const totalPrice = calculateTotalPrice('Starter', capacityUpgrades, featureAddons, packages);
  
  return {
    baseLicense: 'Starter',
    capacityUpgrades,
    featureAddons,
    packages,
    totalPrice,
  };
  }

  return recommendEssentialOrHigher(input);
}

function recommendDeviceManager(input: LicenseInput): LicenseResult {
  const capacityUpgrades: LicenseResult['capacityUpgrades'] = {};
  const config = licenseConfigs['Device Manager'];
  const maxUser = config.capacityLimits.user?.max ?? 0;
  const maxOperator = config.capacityLimits.operator?.max ?? 0;
  
  // User 업그레이드 계산 (번들 개수로 저장)
  if (input.user > maxUser) {
    const additional = input.user - maxUser;
    const userUpgrade = capacityUpgradePrices.User;
    const bundles = Math.ceil(additional / userUpgrade.quantity);
    capacityUpgrades.user = bundles;
  }
  
  // Operator 업그레이드 계산 (번들 개수로 저장)
  if (input.operator > maxOperator) {
    const additional = input.operator - maxOperator;
    const operatorUpgrade = capacityUpgradePrices.Operator;
    const bundles = Math.ceil(additional / operatorUpgrade.quantity);
    capacityUpgrades.operator = bundles;
  }

  const featureAddons = calculateFeatureAddons(input, 'Device Manager');
  const packages = getSelectedPackages(input, 'Device Manager');
  const totalPrice = calculateTotalPrice('Device Manager', capacityUpgrades, featureAddons, packages);
  
  return {
    baseLicense: 'Device Manager',
    capacityUpgrades,
    featureAddons,
    packages,
    totalPrice,
  };
}

function recommendEssentialOrHigher(
  input: LicenseInput
): LicenseResult {
  const needsAdvancedAC = input.packages['Advanced AC'];
  const needsVideo = input.featureAddons['Video Monitoring'];
  const config = licenseConfigs;
  
  // 필요한 용량에 따라 적절한 라이센스 선택
  let baseLicense: BaseLicenseType = 'Essential';
  
  // Video가 필요하면 Advanced 이상 필요
  if (needsVideo && !config.Essential.supportsVideo) {
    baseLicense = 'Advanced';
  }
  
  // Map Monitoring이 필요하면 Advanced 이상 필요
  const needsMapMonitoring = input.featureAddons['Map Monitoring'];
  if (needsMapMonitoring && !config.Essential.includesMapMonitoring) {
    if (baseLicense === 'Essential') {
      baseLicense = 'Advanced';
    }
  }
  
  // Essential의 max 용량 확인
  if (
    (config.Essential.capacityLimits.door?.max !== undefined && input.door > config.Essential.capacityLimits.door.max) ||
    (config.Essential.capacityLimits.user?.max !== undefined && input.user > config.Essential.capacityLimits.user.max) ||
    (config.Essential.capacityLimits.operator?.max !== undefined && input.operator > config.Essential.capacityLimits.operator.max)
  ) {
    // Essential을 초과하는 용량이 필요하면 Advanced 이상 필요
    if (baseLicense === 'Essential') {
      const essentialUpgrades = calculateCapacityUpgrades(input, 'Essential');
      const essentialPrice = calculateLicensePrice('Essential', essentialUpgrades);
      const advancedPrice = config.Advanced.msrp;
      
      // Essential + Capacity Upgrade 와 Advanced 가격 비교
      if (essentialPrice < advancedPrice) {
        baseLicense = 'Essential';
      } else {
        baseLicense = 'Advanced';
      }
    }
  }
  
  // Advanced의 max 용량 확인
  if (
    (config.Advanced.capacityLimits.door?.max !== undefined && input.door > config.Advanced.capacityLimits.door.max) ||
    (config.Advanced.capacityLimits.user?.max !== undefined && input.user > config.Advanced.capacityLimits.user.max) ||
    (config.Advanced.capacityLimits.operator?.max !== undefined && input.operator > config.Advanced.capacityLimits.operator.max)
  ) {
    // Advanced를 초과하는 용량이 필요하면 가격 비교 필요
    if (baseLicense === 'Essential' || baseLicense === 'Advanced') {
      const advancedUpgrades = calculateCapacityUpgrades(input, 'Advanced');
      const advancedPrice = calculateLicensePrice('Advanced', advancedUpgrades);
      const enterprisePrice = config.Enterprise.msrp;
      
      // Advanced + Capacity Upgrade 와 Enterprise 가격 비교
      if (advancedPrice < enterprisePrice) {
        baseLicense = 'Advanced';
      } else {
        baseLicense = 'Enterprise';
      }
    }
  }
  
  // Enterprise의 max 용량 확인
  if (
    (config.Enterprise.capacityLimits.door?.max !== undefined && input.door > config.Enterprise.capacityLimits.door.max) ||
    (config.Enterprise.capacityLimits.user?.max !== undefined && input.user > config.Enterprise.capacityLimits.user.max) ||
    (config.Enterprise.capacityLimits.operator?.max !== undefined && input.operator > config.Enterprise.capacityLimits.operator.max)
  ) {
    // Enterprise를 초과하는 용량이 필요하면 가격 비교 필요
    const enterpriseUpgrades = calculateCapacityUpgrades(input, 'Enterprise');
    const enterprisePrice = calculateLicensePrice('Enterprise', enterpriseUpgrades);
    const elitePrice = config.Elite.msrp;
    
      // Enterprise + Capacity Upgrade 와 Elite 가격 비교
      if (enterprisePrice < elitePrice) {
        baseLicense = 'Enterprise';
      } else {
        baseLicense = 'Elite';
      }
  }
  
  // Advanced AC가 필요하고 현재 라이센스가 Essential이면 가격 비교
  if (needsAdvancedAC) {
    if (baseLicense === 'Essential') {
      const essentialUpgrades = calculateCapacityUpgrades(input, 'Essential');
      const essentialPrice = calculateLicensePrice('Essential', essentialUpgrades);
      const essentialWithACPrice = essentialPrice + (packagePrices['Advanced AC'] || 0);
      const advancedPrice = config.Advanced.msrp;
      
      // Essential + Advanced AC 와 Essential 가격 비교
      if (essentialWithACPrice < advancedPrice) {
        baseLicense = 'Essential';
      } else {
        baseLicense = 'Advanced';
      }
    } else if (baseLicense === 'Advanced') {
      // Advanced + Advanced AC vs Enterprise 가격 비교
      const advancedUpgrades = calculateCapacityUpgrades(input, 'Advanced');
      const advancedPrice = calculateLicensePrice('Advanced', advancedUpgrades);
      const advancedWithACPrice = advancedPrice + (packagePrices['Advanced AC'] || 0);
      const enterprisePrice = config.Enterprise.msrp;
      
      // Advanced + Advanced AC와 Enterprise 가격 비교
      if (advancedWithACPrice < enterprisePrice) {
        baseLicense = 'Advanced';
      } else {
        baseLicense = 'Enterprise';
      }
    }
    // Enterprise와 Elite는 이미 Advanced AC 포함
  }

  const capacityUpgrades = calculateCapacityUpgrades(input, baseLicense);
  const featureAddons = calculateFeatureAddons(input, baseLicense);
  const packages = getSelectedPackages(input, baseLicense);
  const totalPrice = calculateTotalPrice(baseLicense, capacityUpgrades, featureAddons, packages);

  return {
    baseLicense,
    capacityUpgrades,
    featureAddons,
    packages,
    totalPrice,
  };
}

function calculateCapacityUpgrades(
  input: LicenseInput,
  baseLicense: BaseLicenseType
): LicenseResult['capacityUpgrades'] {
  const config = licenseConfigs[baseLicense];
  const upgrades: LicenseResult['capacityUpgrades'] = {};

  if (
    config.capacityLimits.door !== undefined &&
    config.upgradableCapacities.includes('Door')
  ) {
    const maxDoor = config.capacityLimits.door?.max;
    if (maxDoor !== undefined && input.door > maxDoor) {
      const additional = input.door - maxDoor;
      const doorUpgrade = capacityUpgradePrices.Door;
      const bundles = Math.ceil(additional / doorUpgrade.quantity);
      upgrades.door = bundles;
    }
  }

  // User 업그레이드 계산 (번들 개수로 저장)
  if (
    config.capacityLimits.user !== undefined &&
    config.upgradableCapacities.includes('User')
  ) {
    const maxUser = config.capacityLimits.user?.max;
    if (maxUser !== undefined && input.user > maxUser) {
      const additional = input.user - maxUser;
      const userUpgrade = capacityUpgradePrices.User;
      const bundles = Math.ceil(additional / userUpgrade.quantity);
      upgrades.user = bundles;
    }
  }

  if (
    config.capacityLimits.operator !== undefined &&
    config.upgradableCapacities.includes('Operator')
  ) {
    const maxOperator = config.capacityLimits.operator?.max;
    if (maxOperator !== undefined && input.operator > maxOperator) {
      const additional = input.operator - maxOperator;
      const operatorUpgrade = capacityUpgradePrices.Operator;
      const bundles = Math.ceil(additional / operatorUpgrade.quantity);
      upgrades.operator = bundles;
    }
  }

  return upgrades;
}

function calculateFeatureAddons(
  input: LicenseInput,
  baseLicense: BaseLicenseType
): LicenseResult['featureAddons'] {
  const addons: LicenseResult['featureAddons'] = [];
  const config = licenseConfigs[baseLicense];

  // T&A는 라이센스 설정에 따라 추가 가능
  if (config.supportsTA && input.featureAddons['T&A'] > 0) {
    const taType = getTAType(input.featureAddons['T&A']);
    if (taType) {
      addons.push({
        type: 'T&A',
        quantity: input.featureAddons['T&A'],
      });
    }
  }

  // Feature Add-ons가 지원되지 않는 라이센스(Device Manager, Starter)에서는 T&A만 추가 가능
  if (!config.supportsFeatureAddons) {
    return addons;
  }

  // Feature Add-ons가 지원되는 라이센스(Essential 이상)에서는 다른 Feature Add-ons도 추가 가능
  const checkboxAddons: Array<keyof typeof input.featureAddons> = [
    'Map Monitoring',
    'Video Monitoring',
    'GIS Map Monitoring',
    'Server Matching',
    'Visitor',
    'Directory Integration',
    'Roll Call',
    'Mobile App',
    'Event Log API',
    'Remote Access',
    'External Remote Access',
    'BioStar X Plugin',
  ];

  checkboxAddons.forEach((addon) => {
    if (input.featureAddons[addon]) {
      // Map Monitoring은 라이센스가 이미 포함하는지 확인
      if (addon === 'Map Monitoring' && config.includesMapMonitoring) {
        // 라이센스가 이미 포함하므로 추가 구매 불필요
        return;
      }
      addons.push({ type: addon as FeatureAddonType });
    }
  });

  if (input.featureAddons['Multi Communications Server'] >= 2) {
    const quantity = input.featureAddons['Multi Communications Server'];
    addons.push({
      type: 'Multi Communications Server',
      quantity: quantity,
    });
  }

  return addons;
}

function hasAnyFeatureAddon(input: LicenseInput): boolean {
  // 체크박스 Feature Add-ons 확인
  const checkboxAddons: Array<keyof typeof input.featureAddons> = [
    'Map Monitoring',
    'Video Monitoring',
    'GIS Map Monitoring',
    'Server Matching',
    'Visitor',
    'Directory Integration',
    'Roll Call',
    'Mobile App',
    'Event Log API',
    'Remote Access',
    'External Remote Access',
    'BioStar X Plugin',
  ];

  for (const addon of checkboxAddons) {
    if (input.featureAddons[addon]) {
      return true;
    }
  }

  // Multi Communications Server 확인 (2개 이상)
  if (input.featureAddons['Multi Communications Server'] >= 2) {
    return true;
  }

  return false;
}

function calculateLicensePrice(
  baseLicense: BaseLicenseType,
  capacityUpgrades: LicenseResult['capacityUpgrades']
): number {
  const basePrice = licenseConfigs[baseLicense].msrp;
  let upgradePrice = 0;

  // Door 업그레이드 가격 계산
  if (capacityUpgrades.door && capacityUpgrades.door > 0) {
    const doorUpgrade = capacityUpgradePrices.Door;
    upgradePrice += capacityUpgrades.door * doorUpgrade.price;
  }

  // User 업그레이드 가격 계산
  if (capacityUpgrades.user && capacityUpgrades.user > 0) {
    const userUpgrade = capacityUpgradePrices.User;
    upgradePrice += capacityUpgrades.user * userUpgrade.price;
  }

  // Operator 업그레이드 가격 계산
  if (capacityUpgrades.operator && capacityUpgrades.operator > 0) {
    const operatorUpgrade = capacityUpgradePrices.Operator;
    upgradePrice += capacityUpgrades.operator * operatorUpgrade.price;
  }

  return basePrice + upgradePrice;
}

function getSelectedPackages(
  input: LicenseInput,
  baseLicense?: BaseLicenseType
): LicenseResult['packages'] {
  const packages: LicenseResult['packages'] = [];
  
  // Advanced AC는 Essential/Advanced에서만 추가 구매로 표시
  // Enterprise/Elite는 기본 포함이므로 packages에 포함하지 않음
  if (input.packages['Advanced AC']) {
    const license = baseLicense || 'Essential';
    if (license === 'Essential' || license === 'Advanced') {
      packages.push('Advanced AC');
    }
  }

  return packages;
}

function calculateTotalPrice(
  baseLicense: BaseLicenseType,
  capacityUpgrades: LicenseResult['capacityUpgrades'],
  featureAddons: LicenseResult['featureAddons'],
  packages: LicenseResult['packages']
): number {
  // Base License + Capacity Upgrades 가격
  let total = calculateLicensePrice(baseLicense, capacityUpgrades);
  
  // Feature Add-ons 가격 계산
  featureAddons.forEach((addon) => {
    if (addon.type === 'Multi Communications Server') {
      const quantity = addon.quantity || 0;
      const { init, addon: addonCount } = calculateMultiCommServer(quantity);
      total += init * featureAddonPrices['Multi Comm Server Init'];
      total += addonCount * featureAddonPrices['Multi Comm Server Add-on'];
    } else if (addon.type === 'T&A') {
      const taType = getTAType(addon.quantity || 0);
      if (taType === 'Standard') {
        total += featureAddonPrices['T&A Standard'];
      } else if (taType === 'Enterprise') {
        total += featureAddonPrices['T&A Enterprise'];
      }
    } else {
      const price = featureAddonPrices[addon.type];
      if (price !== undefined) {
        total += price;
      }
    }
  });
  
  // Packages 가격 계산
  packages.forEach((pkg) => {
    const price = packagePrices[pkg];
    if (price !== undefined) {
      total += price;
    }
  });
  
  return total;
}

