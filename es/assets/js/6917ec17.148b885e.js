"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["80125"], {
38532: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ bsx_license_calculator)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 79 modules
var Layout = __webpack_require__(25275);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(25895);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./src/components/bsx-license-calculator/core/src/data/licenseData.ts
const licenseConfigs = {
    'Device Manager': {
        type: 'Device Manager',
        capacityLimits: {
            door: {
                min: 0,
                max: 0
            },
            user: {
                min: 0,
                max: 200
            },
            operator: {
                min: 0,
                max: 1
            }
        },
        upgradableCapacities: [
            'User',
            'Operator'
        ],
        includesAdvancedAC: false,
        supportsAdvancedAC: false,
        includesMapMonitoring: false,
        supportsFeatureAddons: false,
        supportsVideo: false,
        supportsTA: true,
        msrp: 0
    },
    Starter: {
        type: 'Starter',
        capacityLimits: {
            door: {
                min: 0,
                max: 5
            },
            user: {
                min: 0,
                max: 100
            },
            operator: {
                min: 0,
                max: 1
            }
        },
        upgradableCapacities: [],
        includesAdvancedAC: false,
        supportsAdvancedAC: false,
        includesMapMonitoring: false,
        supportsFeatureAddons: false,
        supportsVideo: false,
        supportsTA: true,
        msrp: 400
    },
    Essential: {
        type: 'Essential',
        capacityLimits: {
            door: {
                min: 0,
                max: 32
            },
            user: {
                min: 0,
                max: 1000
            },
            operator: {
                min: 0,
                max: 10
            }
        },
        upgradableCapacities: [
            'Door',
            'User',
            'Operator'
        ],
        includesAdvancedAC: false,
        supportsAdvancedAC: false,
        includesMapMonitoring: false,
        supportsFeatureAddons: true,
        supportsVideo: false,
        supportsTA: true,
        msrp: 1000
    },
    Advanced: {
        type: 'Advanced',
        capacityLimits: {
            door: {
                min: 0,
                max: 128
            },
            user: {
                min: 0,
                max: 50000
            },
            operator: {
                min: 0,
                max: 20
            }
        },
        upgradableCapacities: [
            'Door',
            'User',
            'Operator'
        ],
        includesAdvancedAC: false,
        supportsAdvancedAC: true,
        includesMapMonitoring: true,
        supportsFeatureAddons: true,
        supportsVideo: true,
        supportsTA: true,
        msrp: 2000
    },
    Enterprise: {
        type: 'Enterprise',
        capacityLimits: {
            door: {
                min: 0,
                max: 500
            },
            user: {
                min: 0,
                max: 100000
            },
            operator: {
                min: 0,
                max: 40
            }
        },
        upgradableCapacities: [
            'Door',
            'User',
            'Operator'
        ],
        includesAdvancedAC: true,
        supportsAdvancedAC: false,
        includesMapMonitoring: true,
        supportsFeatureAddons: true,
        supportsVideo: true,
        supportsTA: true,
        msrp: 7000
    },
    Elite: {
        type: 'Elite',
        capacityLimits: {
            door: {
                min: 0,
                max: 2000
            },
            user: {
                min: 0,
                max: 500000
            },
            operator: {
                min: 0,
                max: 100
            }
        },
        upgradableCapacities: [
            'Door',
            'User',
            'Operator'
        ],
        includesAdvancedAC: true,
        supportsAdvancedAC: false,
        includesMapMonitoring: true,
        supportsFeatureAddons: true,
        supportsVideo: true,
        supportsTA: true,
        msrp: 20000
    }
};
const capacityUpgradePrices = {
    Door: {
        quantity: 32,
        price: 500
    },
    User: {
        quantity: 5000,
        price: 500
    },
    Operator: {
        quantity: 10,
        price: 1000
    }
};
const featureAddonPrices = {
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
    'BioStar X Plugin': 2000
};
function getTAType(quantity) {
    if (quantity === 0) return null;
    if (quantity <= 500) return 'Standard';
    return 'Enterprise';
}
const packagePrices = {
    'Advanced AC': 3000
};

;// CONCATENATED MODULE: ./src/components/bsx-license-calculator/core/src/utils/licenseCalculator.ts

function recommendLicense(input) {
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
    if (input.door >= 1 && input.door <= 5 && input.user >= 0 && input.user <= 100 && input.operator >= 0 && input.operator <= 1) {
        const capacityUpgrades = {};
        const featureAddons = calculateFeatureAddons(input, 'Starter');
        const packages = getSelectedPackages(input, 'Starter');
        const totalPrice = calculateTotalPrice('Starter', capacityUpgrades, featureAddons, packages);
        return {
            baseLicense: 'Starter',
            capacityUpgrades,
            featureAddons,
            packages,
            totalPrice
        };
    }
    return recommendEssentialOrHigher(input);
}
function recommendDeviceManager(input) {
    const capacityUpgrades = {};
    const config = licenseConfigs["Device Manager"];
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
        totalPrice
    };
}
function recommendEssentialOrHigher(input) {
    const needsAdvancedAC = input.packages['Advanced AC'];
    const needsVideo = input.featureAddons['Video Monitoring'];
    const config = licenseConfigs;
    // 필요한 용량에 따라 적절한 라이센스 선택
    let baseLicense = 'Essential';
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
    if (config.Essential.capacityLimits.door?.max !== undefined && input.door > config.Essential.capacityLimits.door.max || config.Essential.capacityLimits.user?.max !== undefined && input.user > config.Essential.capacityLimits.user.max || config.Essential.capacityLimits.operator?.max !== undefined && input.operator > config.Essential.capacityLimits.operator.max) {
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
    if (config.Advanced.capacityLimits.door?.max !== undefined && input.door > config.Advanced.capacityLimits.door.max || config.Advanced.capacityLimits.user?.max !== undefined && input.user > config.Advanced.capacityLimits.user.max || config.Advanced.capacityLimits.operator?.max !== undefined && input.operator > config.Advanced.capacityLimits.operator.max) {
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
    if (config.Enterprise.capacityLimits.door?.max !== undefined && input.door > config.Enterprise.capacityLimits.door.max || config.Enterprise.capacityLimits.user?.max !== undefined && input.user > config.Enterprise.capacityLimits.user.max || config.Enterprise.capacityLimits.operator?.max !== undefined && input.operator > config.Enterprise.capacityLimits.operator.max) {
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
            const essentialWithACPrice = essentialPrice + (packagePrices["Advanced AC"] || 0);
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
            const advancedWithACPrice = advancedPrice + (packagePrices["Advanced AC"] || 0);
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
        totalPrice
    };
}
function calculateCapacityUpgrades(input, baseLicense) {
    const config = licenseConfigs[baseLicense];
    const upgrades = {};
    if (config.capacityLimits.door !== undefined && config.upgradableCapacities.includes('Door')) {
        const maxDoor = config.capacityLimits.door?.max;
        if (maxDoor !== undefined && input.door > maxDoor) {
            const additional = input.door - maxDoor;
            const doorUpgrade = capacityUpgradePrices.Door;
            const bundles = Math.ceil(additional / doorUpgrade.quantity);
            upgrades.door = bundles;
        }
    }
    // User 업그레이드 계산 (번들 개수로 저장)
    if (config.capacityLimits.user !== undefined && config.upgradableCapacities.includes('User')) {
        const maxUser = config.capacityLimits.user?.max;
        if (maxUser !== undefined && input.user > maxUser) {
            const additional = input.user - maxUser;
            const userUpgrade = capacityUpgradePrices.User;
            const bundles = Math.ceil(additional / userUpgrade.quantity);
            upgrades.user = bundles;
        }
    }
    if (config.capacityLimits.operator !== undefined && config.upgradableCapacities.includes('Operator')) {
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
function calculateFeatureAddons(input, baseLicense) {
    const addons = [];
    const config = licenseConfigs[baseLicense];
    // T&A는 라이센스 설정에 따라 추가 가능
    if (config.supportsTA && input.featureAddons['T&A'] > 0) {
        const taType = getTAType(input.featureAddons['T&A']);
        if (taType) {
            addons.push({
                type: 'T&A',
                quantity: input.featureAddons['T&A']
            });
        }
    }
    // Feature Add-ons가 지원되지 않는 라이센스(Device Manager, Starter)에서는 T&A만 추가 가능
    if (!config.supportsFeatureAddons) {
        return addons;
    }
    // Feature Add-ons가 지원되는 라이센스(Essential 이상)에서는 다른 Feature Add-ons도 추가 가능
    const checkboxAddons = [
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
        'BioStar X Plugin'
    ];
    checkboxAddons.forEach((addon)=>{
        if (input.featureAddons[addon]) {
            // Map Monitoring은 라이센스가 이미 포함하는지 확인
            if (addon === 'Map Monitoring' && config.includesMapMonitoring) {
                // 라이센스가 이미 포함하므로 추가 구매 불필요
                return;
            }
            addons.push({
                type: addon
            });
        }
    });
    return addons;
}
function hasAnyFeatureAddon(input) {
    // 체크박스 Feature Add-ons 확인
    const checkboxAddons = [
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
        'BioStar X Plugin'
    ];
    for (const addon of checkboxAddons){
        if (input.featureAddons[addon]) {
            return true;
        }
    }
    return false;
}
function calculateLicensePrice(baseLicense, capacityUpgrades) {
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
function getSelectedPackages(input, baseLicense) {
    const packages = [];
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
function calculateTotalPrice(baseLicense, capacityUpgrades, featureAddons, packages) {
    // Base License + Capacity Upgrades 가격
    let total = calculateLicensePrice(baseLicense, capacityUpgrades);
    // Feature Add-ons 가격 계산
    featureAddons.forEach((addon)=>{
        if (addon.type === 'T&A') {
            const taType = getTAType(addon.quantity || 0);
            if (taType === 'Standard') {
                total += featureAddonPrices["T&A Standard"];
            } else if (taType === 'Enterprise') {
                total += featureAddonPrices["T&A Enterprise"];
            }
        } else {
            const price = featureAddonPrices[addon.type];
            if (price !== undefined) {
                total += price;
            }
        }
    });
    // Packages 가격 계산
    packages.forEach((pkg)=>{
        const price = packagePrices[pkg];
        if (price !== undefined) {
            total += price;
        }
    });
    return total;
}

;// CONCATENATED MODULE: ./src/components/bsx-license-calculator/core/src/utils/licenseUtils.ts

// Part number mapping function
function getPartNumber(type, quantity) {
    // Base License
    const baseLicenseMap = {
        'Device Manager': 'BIOSTARX-DEV',
        'Starter': 'BIOSTARX-STR',
        'Essential': 'BIOSTARX-ESS',
        'Advanced': 'BIOSTARX-ADV',
        'Enterprise': 'BIOSTARX-ENT',
        'Elite': 'BIOSTARX-ELT'
    };
    // Capacity
    const capacityMap = {
        'Door': 'BIOSTARX-UP-DOR',
        'User': 'BIOSTARX-UP-USR',
        'Operator': 'BIOSTARX-UP-OPR'
    };
    // Feature Add-ons
    if (type === 'T&A') {
        const taType = getTAType(quantity || 0);
        if (taType === 'Standard') {
            return 'BIOSTARX-ADD-TNA-STD';
        } else if (taType === 'Enterprise') {
            return 'BIOSTARX-ADD-TNA-ENT';
        }
    }
    const featureAddonMap = {
        'Map Monitoring': '',
        'Video Monitoring': 'BIOSTARX-ADD-VID',
        'GIS Map Monitoring': 'BIOSTARX-ADD-GIS',
        'Server Matching': 'BIOSTARX-ADD-SVM',
        'Visitor': 'BIOSTARX-ADD-VST',
        'Directory Integration': 'BIOSTARX-ADD-DIR',
        'Roll Call': 'BIOSTARX-ADD-RCL',
        'Mobile App': 'BIOSTARX-ADD-MOB',
        'Event Log API': 'BIOSTARX-ADD-EVTAPI',
        'Remote Access': 'BIOSTARX-ADD-RAC',
        'BioStar X Plugin': 'BIOSTARX-ADD-PLG'
    };
    // Package
    const packageMap = {
        'Advanced AC': 'BIOSTARX-PKG-AAC'
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
function generatePartNumberList(licenseResult) {
    const partNumbers = [];
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
    licenseResult.featureAddons.forEach((addon)=>{
        if (addon.type === 'T&A') {
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
    licenseResult.packages.forEach((pkg)=>{
        const partNumber = getPartNumber(pkg);
        if (partNumber) {
            partNumbers.push(partNumber);
        }
    });
    return partNumbers.join(', ');
}

;// CONCATENATED MODULE: ./src/components/bsx-license-calculator/core/src/index.ts





;// CONCATENATED MODULE: ./src/components/bsx-license-calculator/feature/src/lib/license-result.tsx



// Part number mapping function
function license_result_getPartNumber(type, quantity) {
    // Base License
    const baseLicenseMap = {
        'Device Manager': 'BIOSTARX-DEV',
        'Starter': 'BIOSTARX-STR',
        'Essential': 'BIOSTARX-ESS',
        'Advanced': 'BIOSTARX-ADV',
        'Enterprise': 'BIOSTARX-ENT',
        'Elite': 'BIOSTARX-ELT'
    };
    // Capacity
    const capacityMap = {
        'Door': 'BIOSTARX-UP-DOR',
        'User': 'BIOSTARX-UP-USR',
        'Operator': 'BIOSTARX-UP-OPR'
    };
    // Feature Add-ons
    if (type === 'T&A') {
        const taType = getTAType(quantity || 0);
        if (taType === 'Standard') {
            return 'BIOSTARX-ADD-TNA-STD';
        } else if (taType === 'Enterprise') {
            return 'BIOSTARX-ADD-TNA-ENT';
        }
    }
    const featureAddonMap = {
        'Map Monitoring': '',
        'Video Monitoring': 'BIOSTARX-ADD-VID',
        'GIS Map Monitoring': 'BIOSTARX-ADD-GIS',
        'Server Matching': 'BIOSTARX-ADD-SVM',
        'Visitor': 'BIOSTARX-ADD-VST',
        'Directory Integration': 'BIOSTARX-ADD-DIR',
        'Roll Call': 'BIOSTARX-ADD-RCL',
        'Mobile App': 'BIOSTARX-ADD-MOB',
        'Event Log API': 'BIOSTARX-ADD-EVTAPI',
        'Remote Access': 'BIOSTARX-ADD-RAC',
        'BioStar X Plugin': 'BIOSTARX-ADD-PLG'
    };
    // Package
    const packageMap = {
        'Advanced AC': 'BIOSTARX-PKG-AAC'
    };
    return baseLicenseMap[type] || capacityMap[type] || featureAddonMap[type] || packageMap[type] || type;
}
function LicenseResult({ licenseResult, onReset }) {
    const [copied, setCopied] = (0,react.useState)(false);
    const handleCopyToClipboard = async ()=>{
        const partNumberList = generatePartNumberList(licenseResult);
        try {
            await navigator.clipboard.writeText(partNumberList);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy to clipboard:', err);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-white p-6 rounded-lg shadow-lg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                        className: "text-lg font-semibold mb-2",
                        children: "Recommended License"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                type: "button",
                                onClick: handleCopyToClipboard,
                                className: "text-xs bg-blue-500 text-white px-3 py-1.5 rounded-md font-medium hover:bg-blue-600 transition flex items-center gap-2",
                                children: copied ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M5 13l4 4L19 7"
                                            })
                                        }),
                                        "Copied!"
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            })
                                        }),
                                        "Copy Part Numbers"
                                    ]
                                })
                            }),
                            onReset && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                type: "button",
                                onClick: onReset,
                                className: "text-xs bg-gray-500 text-white px-3 py-1.5 rounded-md font-medium hover:bg-gray-600 transition",
                                children: "Reset All"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                className: "text-lg font-semibold mb-2",
                                children: "Base License"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-lg font-bold text-blue-600",
                                children: license_result_getPartNumber(licenseResult.baseLicense)
                            })
                        ]
                    }),
                    (licenseResult.capacityUpgrades.door !== undefined || licenseResult.capacityUpgrades.user !== undefined || licenseResult.capacityUpgrades.operator !== undefined) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                className: "font-semibold mb-2",
                                children: licenseResult.baseLicense === 'Device Manager' ? 'Capacity' : 'Capacity Upgrades'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "list-disc list-inside space-y-1 text-sm",
                                children: [
                                    licenseResult.capacityUpgrades.door !== undefined && licenseResult.capacityUpgrades.door > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            license_result_getPartNumber('Door'),
                                            ": ",
                                            licenseResult.capacityUpgrades.door
                                        ]
                                    }),
                                    licenseResult.capacityUpgrades.user !== undefined && licenseResult.capacityUpgrades.user > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            license_result_getPartNumber('User'),
                                            ": ",
                                            licenseResult.capacityUpgrades.user
                                        ]
                                    }),
                                    licenseResult.capacityUpgrades.operator !== undefined && licenseResult.capacityUpgrades.operator > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            license_result_getPartNumber('Operator'),
                                            ": ",
                                            licenseResult.capacityUpgrades.operator
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    licenseResult.featureAddons.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                className: "font-semibold mb-2",
                                children: "Feature Add-ons"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                className: "list-disc list-inside space-y-1 text-sm",
                                children: licenseResult.featureAddons.map((addon, index)=>{
                                    if (addon.type === 'T&A') {
                                        const taType = getTAType(addon.quantity || 0);
                                        if (taType) {
                                            return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                children: license_result_getPartNumber(addon.type, addon.quantity)
                                            }, index);
                                        }
                                    } else {
                                        return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: license_result_getPartNumber(addon.type)
                                        }, index);
                                    }
                                    return null;
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/bsx-license-calculator/feature/src/lib/license-form.tsx





const initialInput = {
    door: 0,
    user: 0,
    operator: 0,
    featureAddons: {
        'Map Monitoring': false,
        'Video Monitoring': false,
        'GIS Map Monitoring': false,
        'Server Matching': false,
        'Visitor': false,
        'Directory Integration': false,
        'Roll Call': false,
        'T&A': 0,
        'Mobile App': false,
        'Event Log API': false,
        'Remote Access': false,
        'BioStar X Plugin': false
    },
    packages: {
        'Advanced AC': false
    }
};
// Check if the input is the initial input
function isInitialInput(input) {
    return JSON.stringify(input) === JSON.stringify(initialInput);
}
function LicenseForm() {
    const [input, setInput] = (0,react.useState)(initialInput);
    const [result, setResult] = (0,react.useState)(null);
    // UI-only checkbox state for T&A
    const [isTAChecked, setIsTAChecked] = (0,react.useState)(false);
    // Feature Add-on descriptions
    const featureAddonDescriptions = {
        'Map Monitoring': 'Monitor sites visually using a map-based interface.',
        'Video Monitoring': 'Monitor video feeds from cameras installed on the site. Supports integration with 3rd-party VMS systems. Please specify the number of cameras at the time of ordering.',
        'Advanced AC': 'Use advanced access control features such as Global APB, Fire Alarm, Intrusion, Mustering, Occupancy, Elevator control, and Interlock.',
        'GIS Map Monitoring': 'Monitor sites using GIS-based map visualization.',
        'Server Matching': 'Perform credential authentication (ID, Card, Fingerprint, IR Face) on the server instead of the device.',
        'Visitor': 'Visitor management system.',
        'Directory Integration': 'Integrate with directory services such as Active Directory or Entra ID to centralize user management.',
        'Roll Call': 'Perform roll-call checks at specific locations using the BioStar X Mobile app.',
        'T&A': 'Time and attendance management system.',
        'Mobile App': 'BioStar X mobile apps for Android and iOS.',
        'Event Log API': 'Allows external systems to insert event logs into BioStar X via API.',
        'Remote Access': 'Provides a tunneling service that enables access to BioStar X from public networks.',
        'BioStar X Plugin': 'Integrate external software by registering it as a BioStar X plugin for seamless operation.'
    };
    // Submit
    (0,react.useEffect)(()=>{
        if (isInitialInput(input)) {
            setResult(null);
        } else {
            const calculatedResult = recommendLicense(input);
            setResult(calculatedResult);
        }
    }, [
        input
    ]);
    const handleCapacityChange = (type, value)=>{
        setInput((prev)=>({
                ...prev,
                [type]: Math.max(0, value)
            }));
    };
    const handleFeatureAddonChange = (addon, value)=>{
        setInput((prev)=>({
                ...prev,
                featureAddons: {
                    ...prev.featureAddons,
                    [addon]: value
                }
            }));
    };
    const handlePackageChange = (pkg, checked)=>{
        setInput((prev)=>({
                ...prev,
                packages: {
                    ...prev.packages,
                    [pkg]: checked
                }
            }));
    };
    const handleReset = ()=>{
        setInput(initialInput);
        setResult(null);
        setIsTAChecked(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "max-w-8xl mx-auto p-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                className: "text-lg font-bold mb-4",
                children: "BioStar X License Calculator"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-10 gap-4 text-black",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-2 lg:col-span-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                className: "bg-white px-4 pt-1 pb-2 rounded-lg shadow",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                        className: "text-lg font-semibold mb-1",
                                        children: "Site Information"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "grid grid-cols-3 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                        className: "block text-xs font-medium mb-2",
                                                        children: "Number of Doors"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                        type: "number",
                                                        min: "0",
                                                        value: input.door,
                                                        onChange: (e)=>handleCapacityChange('door', parseInt(e.target.value)),
                                                        className: "w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                        className: "block text-xs font-medium mb-2",
                                                        children: "Number of Users"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                        type: "number",
                                                        min: "0",
                                                        value: input.user,
                                                        onChange: (e)=>handleCapacityChange('user', parseInt(e.target.value)),
                                                        className: "w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                        className: "block text-xs font-medium mb-2",
                                                        children: "Number of Operators"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                        type: "number",
                                                        min: "0",
                                                        value: input.operator,
                                                        onChange: (e)=>handleCapacityChange('operator', parseInt(e.target.value)),
                                                        className: "w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                className: "bg-white px-4 pt-1 pb-2 rounded-lg shadow",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                        className: "text-lg font-semibold mb-1",
                                        children: "Feature Add-ons"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-1",
                                        children: [
                                            [
                                                {
                                                    name: 'Map Monitoring',
                                                    description: featureAddonDescriptions['Map Monitoring']
                                                },
                                                {
                                                    name: 'Video Monitoring',
                                                    description: featureAddonDescriptions['Video Monitoring']
                                                },
                                                {
                                                    name: 'Advanced AC',
                                                    description: featureAddonDescriptions['Advanced AC'],
                                                    isPackage: true
                                                },
                                                {
                                                    name: 'GIS Map Monitoring',
                                                    description: featureAddonDescriptions['GIS Map Monitoring']
                                                },
                                                {
                                                    name: 'Server Matching',
                                                    description: featureAddonDescriptions['Server Matching']
                                                },
                                                {
                                                    name: 'Visitor',
                                                    description: featureAddonDescriptions['Visitor']
                                                },
                                                {
                                                    name: 'Directory Integration',
                                                    description: featureAddonDescriptions['Directory Integration']
                                                },
                                                {
                                                    name: 'Roll Call',
                                                    description: featureAddonDescriptions['Roll Call']
                                                }
                                            ].map(({ name, description, isPackage = false })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "flex items-start space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "checkbox",
                                                                checked: isPackage ? input.packages[name] : input.featureAddons[name],
                                                                onChange: (e)=>{
                                                                    if (isPackage) {
                                                                        handlePackageChange(name, e.target.checked);
                                                                    } else {
                                                                        handleFeatureAddonChange(name, e.target.checked);
                                                                    }
                                                                },
                                                                className: "w-4 h-4 mt-2"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "text-sm",
                                                                        children: name
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-xs text-gray-600",
                                                                        children: description
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, name)),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "flex items-start space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "checkbox",
                                                                checked: isTAChecked,
                                                                onChange: (e)=>{
                                                                    setIsTAChecked(e.target.checked);
                                                                    if (e.target.checked) {
                                                                        if (input.featureAddons['T&A'] === 0) {
                                                                            handleFeatureAddonChange('T&A', 1);
                                                                        }
                                                                    } else {
                                                                        handleFeatureAddonChange('T&A', 0);
                                                                    }
                                                                },
                                                                className: "w-4 h-4 mt-2"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "text-sm",
                                                                        children: "T&A (Number of Users)"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-xs text-gray-600",
                                                                        children: featureAddonDescriptions['T&A']
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "ml-6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                            type: "number",
                                                            min: "1",
                                                            value: input.featureAddons['T&A'],
                                                            onChange: (e)=>handleFeatureAddonChange('T&A', parseInt(e.target.value) || 0),
                                                            disabled: !isTAChecked,
                                                            className: "w-30 mt-1 px-2 py-1 border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                                                        })
                                                    })
                                                ]
                                            }),
                                            [
                                                {
                                                    name: 'Mobile App',
                                                    description: featureAddonDescriptions['Mobile App']
                                                }
                                            ].map(({ name, description })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "flex items-start space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "checkbox",
                                                                checked: input.featureAddons[name],
                                                                onChange: (e)=>handleFeatureAddonChange(name, e.target.checked),
                                                                className: "w-4 h-4 mt-2"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "text-sm",
                                                                        children: name
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-xs text-gray-600",
                                                                        children: description
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, name)),
                                            [
                                                {
                                                    name: 'Event Log API',
                                                    description: featureAddonDescriptions['Event Log API']
                                                },
                                                {
                                                    name: 'Remote Access',
                                                    description: featureAddonDescriptions['Remote Access']
                                                },
                                                {
                                                    name: 'BioStar X Plugin',
                                                    description: featureAddonDescriptions['BioStar X Plugin']
                                                }
                                            ].map(({ name, description })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "flex items-start space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "checkbox",
                                                                checked: input.featureAddons[name],
                                                                onChange: (e)=>handleFeatureAddonChange(name, e.target.checked),
                                                                className: "w-4 h-4 mt-2"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "text-sm",
                                                                        children: name
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-xs text-gray-600",
                                                                        children: description
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, name))
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "lg:sticky lg:top-6 lg:h-fit lg:self-start lg:col-span-4",
                        children: result ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LicenseResult, {
                            licenseResult: result,
                            onReset: handleReset
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-white px-4 pt-1 pt-2 rounded-lg shadow-lg",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                            className: "text-lg font-bold",
                                            children: "Recommended License"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                            type: "button",
                                            onClick: handleReset,
                                            className: "text-xs bg-gray-500 text-white px-3 py-1 rounded-md font-medium hover:bg-gray-600 transition",
                                            children: "Reset All"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-sm text-gray-500 text-center p-5",
                                    children: "Enter license requirements to see results."
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/bsx-license-calculator/feature/src/index.ts



;// CONCATENATED MODULE: ./src/pages/bsx-license-calculator/index.jsx





function App() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Head/* ["default"] */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: "BioStar X License Calculator | Suprema Docs"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: "Use the BioStar X License Calculator to get personalized license recommendations based on your site requirements, capacity, and feature needs."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "keywords",
                        content: "BioStar X license, license calculator, capacity upgrade, feature add-ons, access control license, license recommendation"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "license-calculator",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LicenseForm, {})
            })
        ]
    });
}
/* ESM default export */ const bsx_license_calculator = (App);


}),

}]);