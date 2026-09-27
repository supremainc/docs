import { describe, it, expect } from 'vitest';
import { recommendLicense } from './licenseCalculator.js';
import type {
  LicenseInput,
  BaseLicenseType,
  FeatureAddonType,
  PackageType,
} from '../types/license.js';

const ALL_BASES: BaseLicenseType[] = [
  'Device Manager',
  'Starter',
  'Essential',
  'Advanced',
  'Enterprise',
  'Elite',
];

const createInput = (overrides: Partial<LicenseInput> = {}): LicenseInput => ({
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
    'BioStar X Plugin': false,
  },
  packages: {
    'Fire Alarm': false,
    'Global Anti-Passback': false,
    'Intrusion Alarm': false,
    'Interlock': false,
    'Occupancy Limit': false,
    'Mustering': false,
    'Elevator Control': false,
  },
  ...overrides,
});

/**
 * Helper: featureAddons 안에서 type 찾기
 */
const hasAddon = (result: ReturnType<typeof recommendLicense>, type: FeatureAddonType) =>
  result.featureAddons.some(a => a.type === type);

/**
 * Helper: package 포함 여부
 */
const hasPackage = (result: ReturnType<typeof recommendLicense>, pkg: PackageType) =>
  result.packages.includes(pkg);

/**
 * Helper: BX-8631 Advanced AC Package 7개 개별 기능 
 * (합계 $3,000 = 구 단일 패키지와 동일)
 */
const ALL_ADVANCED_AC: LicenseInput['packages'] = {
  'Fire Alarm': true,
  'Global Anti-Passback': true,
  'Intrusion Alarm': true,
  'Interlock': true,
  'Occupancy Limit': true,
  'Mustering': true,
  'Elevator Control': true,
};

const ADVANCED_AC_PACKAGES: PackageType[] = [
  'Fire Alarm',
  'Global Anti-Passback',
  'Intrusion Alarm',
  'Interlock',
  'Occupancy Limit',
  'Mustering',
  'Elevator Control',
];

const hasAllAdvancedAC = (result: ReturnType<typeof recommendLicense>) =>
  ADVANCED_AC_PACKAGES.every(pkg => hasPackage(result, pkg));

const hasAnyAdvancedAC = (result: ReturnType<typeof recommendLicense>) =>
  ADVANCED_AC_PACKAGES.some(pkg => hasPackage(result, pkg));

/**
 * Helper: 기본 입력에 Feature Add-on 하나만 켜기
 */
const withAddon = (base: Partial<LicenseInput>, addon: FeatureAddonType): LicenseInput =>
  createInput({
    ...base,
    featureAddons: { ...createInput().featureAddons, [addon]: true },
  });

/**
 * Helper: 기본 입력에 Advanced AC Package 기능만 골라 켜기
 */
const withPackages = (base: Partial<LicenseInput>, ...selected: PackageType[]): LicenseInput =>
  createInput({
    ...base,
    packages: selected.reduce(
      (acc, pkg) => ({ ...acc, [pkg]: true }),
      createInput().packages
    ),
  });

/** 용량만으로는 Essential 이면 충분한 규모 */
const ESSENTIAL_FIT = { door: 20, user: 800, operator: 5 };

/** Advanced AC Package 기능별 심의 기준 단가 (2026-09-04) */
const ADVANCED_AC_PRICES: Array<[PackageType, number]> = [
  ['Fire Alarm', 200],
  ['Global Anti-Passback', 200],
  ['Intrusion Alarm', 200],
  ['Interlock', 500],
  ['Occupancy Limit', 500],
  ['Mustering', 700],
  ['Elevator Control', 700],
];

describe('recommendLicense', () => {
  describe('Device Manager', () => {
    it('recommends Device Manager when door=0, user<=200, operator<=1 and no addons/packages', () => {
      const input = createInput({ door: 0, user: 150, operator: 1 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Device Manager');
      // Device Manager는는 업그레이드 없이 허용 범위 내이므로 capacityUpgrades 비어있어야 함
      expect(result.capacityUpgrades.door).toBeUndefined();
      expect(result.capacityUpgrades.user).toBeUndefined();
      expect(result.capacityUpgrades.operator).toBeUndefined();
      expect(result.featureAddons).toEqual([]);
      expect(result.packages).toEqual([]);
    });

    it('recommends Device Manager with upgrades when user>200', () => {
      const input = createInput({ door: 0, user: 201, operator: 0 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Device Manager');
      expect(result.capacityUpgrades.user).toBe(1);
    });

    it('recommends Device Manager with upgrades when operator>1', () => {
      const input = createInput({ door: 0, user: 100, operator: 2 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Device Manager');
      expect(result.capacityUpgrades.operator).toBe(1);
    });

    it('does NOT recommend Device Manager when any Feature Add-on is requested', () => {
      const input = createInput({
        door: 0,
        user: 100,
        operator: 1,
        featureAddons: {
          ...createInput().featureAddons,
          'Visitor': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).not.toBe('Device Manager');
      expect(ALL_BASES).toContain(result.baseLicense);
    });

    it('does NOT recommend Device Manager when Advanced AC Package is requested', () => {
      const input = createInput({
        door: 0,
        user: 100,
        operator: 1,
        packages: { ...ALL_ADVANCED_AC },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).not.toBe('Device Manager');
      expect(ALL_BASES).toContain(result.baseLicense);
    });
  });

  describe('Starter', () => {
    it('recommends Starter when door 1-5, user 0-100, operator 0-1, no addons/packages', () => {
      const input = createInput({ door: 3, user: 50, operator: 1 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Starter');
      // Starter는 업그레이드 불가
      expect(result.capacityUpgrades).toEqual({});
      expect(result.featureAddons).toEqual([]);
      expect(result.packages).toEqual([]);
    });

    it('allows user=0,operator=0 for Starter minimal case', () => {
      const input = createInput({ door: 1, user: 0, operator: 0 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Starter');
    });

    it('does NOT recommend Starter when door>5', () => {
      const input = createInput({ door: 6, user: 10, operator: 0 });
      const result = recommendLicense(input);

      expect(result.baseLicense).not.toBe('Starter');
    });

    it('does NOT recommend Starter when user>100', () => {
      const input = createInput({ door: 3, user: 101, operator: 0 });
      const result = recommendLicense(input);

      expect(result.baseLicense).not.toBe('Starter');
    });

    it('does NOT recommend Starter when operator>1', () => {
      const input = createInput({ door: 3, user: 50, operator: 2 });
      const result = recommendLicense(input);

      expect(result.baseLicense).not.toBe('Starter');
    });

    it('does NOT recommend Starter when any Feature Add-on is requested', () => {
      const input = createInput({
        door: 2,
        user: 50,
        operator: 1,
        featureAddons: {
          ...createInput().featureAddons,
          'Visitor': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).not.toBe('Starter');
    });

    it('does NOT recommend Starter when Map Monitoring is requested (Starter 는 기본 제공 대상 아님)', () => {
      const result = recommendLicense(withAddon({ door: 3, user: 80, operator: 1 }, 'Map Monitoring'));

      expect(result.baseLicense).toBe('Essential');
      expect(hasAddon(result, 'Map Monitoring')).toBe(false);
    });

    it('does NOT recommend Starter when Advanced AC Package is requested', () => {
      const input = createInput({
        door: 2,
        user: 50,
        operator: 1,
        packages: { ...ALL_ADVANCED_AC },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).not.toBe('Starter');
    });
  });

  describe('Essential', () => {
    it('recommends Essential when over Starter limits but within Essential limits', () => {
      const input = createInput({ door: 6, user: 50, operator: 0 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Essential');
    });

    it('recommends Essential when user>100 but <=1000', () => {
      const input = createInput({ door: 1, user: 500, operator: 0 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Essential');
    });

    it('recommends Essential when operator>1 but <=10', () => {
      const input = createInput({ door: 1, user: 10, operator: 5 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Essential');
    });

    // BX-6014: 비디오 · Advanced AC Package · 기타 추가 기능을 Essential 부터 구매할 수 있다
    // (Add-on 을 골랐다는 이유로 Advanced 로 승급하지 않는다)
    const tierOnlyAddons: FeatureAddonType[] = [
      'Video Monitoring',
      'GIS Map Monitoring',
      'Server Matching',
      'Visitor',
      'Directory Integration',
      'Roll Call',
    ];

    it.each(tierOnlyAddons)('allows %s on Essential (BX-6014: 등급 승급 없음)', (addon) => {
      const result = recommendLicense(withAddon(ESSENTIAL_FIT, addon));

      expect(result.baseLicense).toBe('Essential');
      expect(hasAddon(result, addon)).toBe(true);
    });

    it('allows multiple Feature Add-ons on Essential at once', () => {
      const result = recommendLicense(
        createInput({
          ...ESSENTIAL_FIT,
          featureAddons: {
            ...createInput().featureAddons,
            'Video Monitoring': true,
            'GIS Map Monitoring': true,
            'Visitor': true,
            'Roll Call': true,
          },
        })
      );

      expect(result.baseLicense).toBe('Essential');
      // Essential 1000 + Video 100 + GIS 1000 + Visitor 1000 + Roll Call 500
      expect(result.totalPrice).toBe(3600);
    });

    it('allows Advanced AC Package purchase on Essential (BX-6014: Essential 이상 구매 가능)', () => {
      const input = createInput({
        door: 10,
        user: 100,
        operator: 0,
        packages: { ...ALL_ADVANCED_AC },
      });
      const result = recommendLicense(input);

      // BX-6014: Essential 1000 + AC 3000 = 4000 < Enterprise 7000 → Essential 유지
      expect(result.baseLicense).toBe('Essential');
      expect(hasAllAdvancedAC(result)).toBe(true);
    });

    it('includes Map Monitoring by default on Essential (BX-6014: 기본 제공)', () => {
      const input = createInput({
        door: 10,
        user: 100,
        operator: 0,
        featureAddons: {
          ...createInput().featureAddons,
          'Map Monitoring': true,
        },
      });
      const result = recommendLicense(input);

      // BX-6014: Map 은 Essential 부터 기본 제공 → 별도 과금 없음
      expect(result.baseLicense).toBe('Essential');
      expect(hasAddon(result, 'Map Monitoring')).toBe(false);
    });

    it('does not change the price when Map Monitoring is selected (BX-6014: 기본 제공)', () => {
      const withoutMap = recommendLicense(createInput(ESSENTIAL_FIT));
      const withMap = recommendLicense(withAddon(ESSENTIAL_FIT, 'Map Monitoring'));

      expect(withMap.totalPrice).toBe(withoutMap.totalPrice);
      expect(withMap.totalPrice).toBe(1000);
    });

    it('still charges GIS Map Monitoring on Essential (BX-6014: Map 과 별개)', () => {
      const result = recommendLicense(withAddon(ESSENTIAL_FIT, 'GIS Map Monitoring'));

      expect(hasAddon(result, 'GIS Map Monitoring')).toBe(true);
      expect(result.totalPrice).toBe(2000); // Essential 1000 + GIS 1000
    });

    // BX-8631: Advanced AC Package 를 7개 개별 기능으로 분해 — 고른 것만 계산한다
    it.each(ADVANCED_AC_PRICES)(
      'charges only the selected %s on Essential (+$%d)',
      (pkg, price) => {
        const result = recommendLicense(withPackages(ESSENTIAL_FIT, pkg));

        expect(result.baseLicense).toBe('Essential');
        expect(result.packages).toEqual([pkg]);
        expect(result.totalPrice).toBe(1000 + price);
      }
    );

    it('sums only the selected advanced access control features', () => {
      const result = recommendLicense(withPackages(ESSENTIAL_FIT, 'Mustering', 'Elevator Control'));

      expect(result.packages).toEqual(['Mustering', 'Elevator Control']);
      expect(result.totalPrice).toBe(1000 + 700 + 700);
    });

    it('charges nothing when no advanced access control feature is selected', () => {
      const result = recommendLicense(createInput(ESSENTIAL_FIT));

      expect(result.packages).toEqual([]);
      expect(result.totalPrice).toBe(1000);
    });

    it('matches the legacy bundle price when all 7 features are selected', () => {
      const result = recommendLicense(withPackages(ESSENTIAL_FIT, ...ADVANCED_AC_PACKAGES));

      expect(result.packages).toHaveLength(7);
      expect(result.totalPrice).toBe(1000 + 3000);
    });

    it('returns advanced access control features in display order', () => {
      const result = recommendLicense(withPackages(ESSENTIAL_FIT, 'Elevator Control', 'Fire Alarm'));

      expect(result.packages).toEqual(['Fire Alarm', 'Elevator Control']);
    });
  });

  describe('Advanced', () => {
    it('recommends Advanced when over Essential limits but within Advanced limits', () => {
      const input = createInput({ door: 40, user: 2000, operator: 15 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Advanced');
    });

    it('supports Video Monitoring as add-on', () => {
      // BX-6014 이후에는 용량이 Advanced 를 요구할 때만 Advanced 가 나온다
      const input = createInput({
        door: 40,
        user: 2000,
        operator: 15,
        featureAddons: {
          ...createInput().featureAddons,
          'Video Monitoring': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Advanced');
      expect(hasAddon(result, 'Video Monitoring')).toBe(true);
    });

    it('includes Map Monitoring by default (should not be in featureAddons even if requested)', () => {
      const input = createInput({
        door: 40,
        user: 2000,
        operator: 15,
        featureAddons: {
          ...createInput().featureAddons,
          'Map Monitoring': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Advanced');
      expect(hasAddon(result, 'Map Monitoring')).toBe(false);
    });

    it('allows Advanced AC Package as add-on (not included)', () => {
      const input = createInput({
        door: 40,
        user: 2000,
        operator: 15,
        packages: { ...ALL_ADVANCED_AC },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Advanced');
      expect(hasAllAdvancedAC(result)).toBe(true);
    });
  });

  describe('Enterprise', () => {
    it('recommends Enterprise when outside Advanced capacity but within Enterprise limits', () => {
      const input = createInput({ door: 500, user: 60000, operator: 25 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Enterprise');
    });

    it('supports Video Monitoring as add-on', () => {
      const input = createInput({
        door: 500,
        user: 50000,
        operator: 20,
        featureAddons: {
          ...createInput().featureAddons,
          'Video Monitoring': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Enterprise');
      expect(hasAddon(result, 'Video Monitoring')).toBe(true);
    });

    it('includes Advanced AC Package by default even if requested', () => {
      const input = createInput({
        door: 500,
        user: 50000,
        operator: 20,
        packages: { ...ALL_ADVANCED_AC },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Enterprise');
      // Enterprise는 includesAdvancedAC=true → packages에 따로 넣지 않음
      expect(hasAnyAdvancedAC(result)).toBe(false);
      expect(result.totalPrice).toBe(7000);
    });

    it('includes Map Monitoring by default even if requested', () => {
      const input = createInput({
        door: 500,
        user: 50000,
        operator: 20,
        featureAddons: {
          ...createInput().featureAddons,
          'Map Monitoring': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Enterprise');
      expect(hasAddon(result, 'Map Monitoring')).toBe(false);
    });
  });

  describe('Elite', () => {
    it('recommends Elite when outside Enterprise capacity but within Elite limits', () => {
      const input = createInput({ door: 1500, user: 300000, operator: 80 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Elite');
    });

    it('supports Video Monitoring as add-on', () => {
      const input = createInput({
        door: 1000,
        user: 200000,
        operator: 50,
        featureAddons: {
          ...createInput().featureAddons,
          'Video Monitoring': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Elite');
      expect(hasAddon(result, 'Video Monitoring')).toBe(true);
    });

    it('includes Advanced AC Package by default even if requested', () => {
      const input = createInput({
        door: 1000,
        user: 200000,
        operator: 50,
        packages: { ...ALL_ADVANCED_AC },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Elite');
      expect(hasAnyAdvancedAC(result)).toBe(false);
      expect(result.totalPrice).toBe(20000);
    });

    it('includes Map Monitoring by default even if requested', () => {
      const input = createInput({
        door: 1000,
        user: 200000,
        operator: 50,
        featureAddons: {
          ...createInput().featureAddons,
          'Map Monitoring': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Elite');
      expect(hasAddon(result, 'Map Monitoring')).toBe(false);
    });
  });

  describe('Feature Add-ons', () => {
    it('recommends base license by capacity when only license-independent add-ons are selected', () => {
      // Base license 무관 add-on(Mobile App, Event Log API, Remote Access, Plugin, T&A)만 선택 시 출입문/사용자/오퍼레이터로 Base 결정
      const dmResult = recommendLicense(
        createInput({ door: 0, user: 100, operator: 1, featureAddons: { ...createInput().featureAddons, 'Mobile App': true } })
      );
      expect(dmResult.baseLicense).toBe('Device Manager');
      expect(hasAddon(dmResult, 'Mobile App')).toBe(true);

      const starterResult = recommendLicense(
        createInput({ door: 3, user: 50, operator: 1, featureAddons: { ...createInput().featureAddons, 'Mobile App': true } })
      );
      expect(starterResult.baseLicense).toBe('Starter');
      expect(hasAddon(starterResult, 'Mobile App')).toBe(true);

      const essentialResult = recommendLicense(
        createInput({ door: 10, user: 500, operator: 5, featureAddons: { ...createInput().featureAddons, 'Event Log API': true } })
      );
      expect(essentialResult.baseLicense).toBe('Essential');
      expect(hasAddon(essentialResult, 'Event Log API')).toBe(true);
    });

    it('includes normal checkbox feature add-ons when supported by base license', () => {
      const input = createInput({
        door: 10,
        user: 100,
        operator: 0,
        featureAddons: {
          ...createInput().featureAddons,
          'GIS Map Monitoring': true,
          'Visitor': true,
          'Directory Integration': true,
          'Roll Call': true,
          'Mobile App': true,
          'Event Log API': true,
          'Remote Access': true,
          'BioStar X Plugin': true,
        },
      });
      const result = recommendLicense(input);

      // BX-6014: Essential 에서도 전부 구매 가능 → 용량 기준으로 Essential
      expect(result.baseLicense).toBe('Essential');
      expect(hasAddon(result, 'GIS Map Monitoring')).toBe(true);
      expect(hasAddon(result, 'Visitor')).toBe(true);
      expect(hasAddon(result, 'Directory Integration')).toBe(true);
      expect(hasAddon(result, 'Roll Call')).toBe(true);
      expect(hasAddon(result, 'Mobile App')).toBe(true);
      expect(hasAddon(result, 'Event Log API')).toBe(true);
      expect(hasAddon(result, 'Remote Access')).toBe(true);
      expect(hasAddon(result, 'BioStar X Plugin')).toBe(true);
    });

    it('does NOT add feature add-ons when base license does not support them (Device Manager, Starter)', () => {
      const dmInput = createInput({
        door: 0,
        user: 100,
        operator: 1,
        featureAddons: {
          ...createInput().featureAddons,
          'Visitor': true,
        },
      });
      const dmResult = recommendLicense(dmInput);

      expect(dmResult.baseLicense).not.toBe('Device Manager');

      const starterInput = createInput({
        door: 2,
        user: 50,
        operator: 1,
        featureAddons: {
          ...createInput().featureAddons,
          'Visitor': true,
        },
      });
      const starterResult = recommendLicense(starterInput);

      expect(starterResult.baseLicense).not.toBe('Starter');
    });


    describe('T&A', () => {
      it('ignores T&A when quantity = 0', () => {
        const input = createInput({
          door: 10,
          user: 100,
          operator: 0,
        });
        const result = recommendLicense(input);

        expect(hasAddon(result, 'T&A')).toBe(false);
      });

      it('T&A is available on all license tiers (Device Manager, Starter, Essential, Advanced, Enterprise, Elite)', () => {
        // Device Manager
        const dmInput = createInput({
          door: 0,
          user: 100,
          operator: 1,
          featureAddons: { ...createInput().featureAddons, 'T&A': 50 },
        });
        const dmResult = recommendLicense(dmInput);
        expect(dmResult.baseLicense).toBe('Device Manager');
        expect(hasAddon(dmResult, 'T&A')).toBe(true);

        // Starter
        const starterInput = createInput({
          door: 3,
          user: 50,
          operator: 1,
          featureAddons: { ...createInput().featureAddons, 'T&A': 100 },
        });
        const starterResult = recommendLicense(starterInput);
        expect(starterResult.baseLicense).toBe('Starter');
        expect(hasAddon(starterResult, 'T&A')).toBe(true);

        // Essential
        const essentialInput = createInput({
          door: 10,
          user: 100,
          operator: 0,
          featureAddons: { ...createInput().featureAddons, 'T&A': 200 },
        });
        const essentialResult = recommendLicense(essentialInput);
        expect(essentialResult.baseLicense).toBe('Essential');
        expect(hasAddon(essentialResult, 'T&A')).toBe(true);

        // Advanced
        const advancedInput = createInput({
          door: 40,
          user: 2000,
          operator: 15,
          featureAddons: { ...createInput().featureAddons, 'T&A': 400 },
        });
        const advancedResult = recommendLicense(advancedInput);
        expect(advancedResult.baseLicense).toBe('Advanced');
        expect(hasAddon(advancedResult, 'T&A')).toBe(true);
      });

      it('adds T&A Standard when quantity <= 500', () => {
        const input = createInput({
          door: 10,
          user: 100,
          operator: 0,
          featureAddons: {
            ...createInput().featureAddons,
            'T&A': 100,
          },
        });
        const result = recommendLicense(input);

        expect(hasAddon(result, 'T&A')).toBe(true);
        const ta = result.featureAddons.find(a => a.type === 'T&A');
        expect(ta?.quantity).toBe(100);
      });

      it('adds T&A Standard when quantity = 500 (boundary test)', () => {
        const input = createInput({
          door: 10,
          user: 100,
          operator: 0,
          featureAddons: {
            ...createInput().featureAddons,
            'T&A': 500,
          },
        });
        const result = recommendLicense(input);
        const ta = result.featureAddons.find(a => a.type === 'T&A');
        expect(ta?.quantity).toBe(500);
      });

      it('adds T&A Enterprise when quantity > 500', () => {
        const input = createInput({
          door: 10,
          user: 100,
          operator: 0,
          featureAddons: {
            ...createInput().featureAddons,
            'T&A': 501,
          },
        });
        const result = recommendLicense(input);

        expect(hasAddon(result, 'T&A')).toBe(true);
        const ta = result.featureAddons.find(a => a.type === 'T&A');
        expect(ta?.quantity).toBe(501);
      });

      it('does NOT add other Feature Add-ons (except T&A) on Device Manager and Starter', () => {
        // Device Manager
        const dmInputWithTA = createInput({
          door: 0,
          user: 100,
          operator: 1,
          featureAddons: { ...createInput().featureAddons, 'T&A': 50 },
        });
        const dmResultWithTA = recommendLicense(dmInputWithTA);
        expect(dmResultWithTA.baseLicense).toBe('Device Manager');
        expect(hasAddon(dmResultWithTA, 'T&A')).toBe(true);
        expect(hasAddon(dmResultWithTA, 'Visitor')).toBe(false);
        expect(hasAddon(dmResultWithTA, 'Mobile App')).toBe(false);
        expect(hasAddon(dmResultWithTA, 'GIS Map Monitoring')).toBe(false);

        // Starter
        const starterInputWithTA = createInput({
          door: 3,
          user: 50,
          operator: 1,
          featureAddons: { ...createInput().featureAddons, 'T&A': 100 },
        });
        const starterResultWithTA = recommendLicense(starterInputWithTA);
        expect(starterResultWithTA.baseLicense).toBe('Starter');
        expect(hasAddon(starterResultWithTA, 'T&A')).toBe(true);
        expect(hasAddon(starterResultWithTA, 'Visitor')).toBe(false);
        expect(hasAddon(starterResultWithTA, 'Mobile App')).toBe(false);
        expect(hasAddon(starterResultWithTA, 'GIS Map Monitoring')).toBe(false);
      });

      it('does NOT recommend Device Manager or Starter when other Feature Add-ons (except T&A) are requested', () => {
        // Device Manager 조건에서 Visitor를 요청하면 Essential 이상이 필요 (DM 은 여전히 제외)
        const dmInputWithVisitor = createInput({
          door: 0,
          user: 100,
          operator: 1,
          featureAddons: {
            ...createInput().featureAddons,
            'T&A': 50,
            'Visitor': true, 
          },
        });
        const dmResultWithVisitor = recommendLicense(dmInputWithVisitor);
        expect(dmResultWithVisitor.baseLicense).not.toBe('Device Manager');
        expect(dmResultWithVisitor.baseLicense).toBe('Essential');

        // Base license 무관 add-on(Mobile App)만 선택 시 용량 기준으로 Base 결정 → Starter 범위면 Starter 추천
        const starterInputWithMobileApp = createInput({
          door: 3,
          user: 50,
          operator: 1,
          featureAddons: {
            ...createInput().featureAddons,
            'T&A': 100,
            'Mobile App': true,
          },
        });
        const starterResultWithMobileApp = recommendLicense(starterInputWithMobileApp);
        expect(starterResultWithMobileApp.baseLicense).toBe('Starter');
        expect(hasAddon(starterResultWithMobileApp, 'Mobile App')).toBe(true);
        
        // Starter 조건에서 Visitor를 요청하면 Essential 이상이 필요 (Starter 는 여전히 제외)
        const starterInputWithVisitor = createInput({
          door: 3,
          user: 50,
          operator: 1,
          featureAddons: {
            ...createInput().featureAddons,
            'T&A': 100,
            'Visitor': true, 
          },
        });
        const starterResultWithVisitor = recommendLicense(starterInputWithVisitor);
        expect(starterResultWithVisitor.baseLicense).not.toBe('Starter');
        expect(starterResultWithVisitor.baseLicense).toBe('Essential');
      });
    });
  });

  describe('Edge cases', () => {
    it('when everything is zero, should recommend Device Manager', () => {
      const input = createInput({ door: 0, user: 0, operator: 0 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Device Manager');
    });

    it('when Device Manager-like capacity but Video Monitoring requested → go to Essential', () => {
      const input = createInput({
        door: 0,
        user: 100,
        operator: 1,
        featureAddons: {
          ...createInput().featureAddons,
          'Video Monitoring': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Essential');
      expect(hasAddon(result, 'Video Monitoring')).toBe(true);
    });

    it('Advanced + Advanced AC Package + heavy capacity may lead to Enterprise/Elite when cheaper or required', () => {
      const input = createInput({
        door: 400,
        user: 90000,
        operator: 35,
        featureAddons: {
          ...createInput().featureAddons,
          'Video Monitoring': true,
        },
        packages: { ...ALL_ADVANCED_AC },
      });
      const result = recommendLicense(input);

      // 이 정도 스펙이면 최소 Enterprise 이상
      expect(['Enterprise', 'Elite']).toContain(result.baseLicense);
    });
  });

  describe('Combinations', () => {
    it('Essential + operator upgrade price == Advanced → recommend Advanced (more capability)', () => {
      const input = createInput({ door: 1, user: 100, operator: 15 }); 
      // Essential limit operator max = 10 → 5 over → 1 bundle = 1000
      // Essential 1000 + upgrade 1000 = 2000 == Advanced 2000
      const result = recommendLicense(input);
      expect(result.baseLicense).toBe('Advanced'); // 더 높은 tier 선호
    });
    
    it('Essential + door upgrade < Advanced → recommend Essential', () => {
      const input = createInput({ door: 33, user: 100, operator: 0 });
      // Essential 1000 + (33-32 → 1 door bundle 500) = 1500 < Advanced 2000
      const result = recommendLicense(input);
      expect(result.baseLicense).toBe('Essential');
      expect(result.capacityUpgrades.door).toBe(1);
    });
    
    it('Essential + user upgrade < Advanced → Video 를 골라도 Essential 유지', () => {
      const input = createInput({ door: 1, user: 6000, operator: 0 });
      // user 6000 → Essential 한도 1000 초과분 5000 → 1 bundle = 500
      // Essential 1000 + 500 = 1500 < Advanced 2000 → Essential 유지
      // BX-6014: Video Add-on 은 더 이상 승급 사유가 아니다
      const result = recommendLicense({ ...input, featureAddons: { ...createInput().featureAddons, 'Video Monitoring': true }});
      expect(result.baseLicense).toBe('Essential');
      expect(result.capacityUpgrades.user).toBe(1);
    });

    it('Advanced + Advanced AC Package < Enterprise → keep Advanced', () => {
      const input = createInput({
        door: 50, user: 5000, operator: 10,
        packages: { ...ALL_ADVANCED_AC },
      });
      // Advanced 2000 + AC 3000 = 5000 < Enterprise 7000
      const result = recommendLicense(input);
      expect(result.baseLicense).toBe('Advanced');
      expect(hasAllAdvancedAC(result)).toBe(true);
    });
    
    it('Advanced + AC + Video becomes more expensive than Enterprise → recommend Enterprise', () => {
      const input = createInput({
        door: 30,
        user: 5000,
        operator: 40,
        featureAddons: { 
          ...createInput().featureAddons, 
          'Video Monitoring': true 
        },
        packages: { ...ALL_ADVANCED_AC },
      });
    
      const result = recommendLicense(input);
    
      // Advanced: 2000 + AC 3000 + Video 100 + Operator upgrade (2 bundles = 2000) = 7100
      // Enterprise = 7000 → Enterprise가 더 저렴
      expect(result.baseLicense).toBe('Enterprise');
    });
    

    it('Enterprise + capacity upgrades > Elite → recommend Elite', () => {
      const input = createInput({
        door: 2500, user: 600000, operator: 120,
      });
      // Enterprise 최대 500/100000/40 → 크게 초과
      // Upgrade 비용이 Enterprise + upgrade > Elite (20000)이면 Elite
      const result = recommendLicense(input);
      expect(result.baseLicense).toBe('Elite');
    });
  });

  // BX-6014 · BX-8631 개편 전/후 견적 표 (기획 문서와 대조)
  describe('Pricing scenarios', () => {
    type Scenario = { name: string; input: LicenseInput; tier: BaseLicenseType; price: number };

    const changedByReform: Scenario[] = [
      {
        name: '도어 20 + 비디오',
        input: withAddon(ESSENTIAL_FIT, 'Video Monitoring'),
        tier: 'Essential',
        price: 1100,
      },
      {
        name: '도어 20 + 맵',
        input: withAddon(ESSENTIAL_FIT, 'Map Monitoring'),
        tier: 'Essential',
        price: 1000,
      },
      {
        name: '도어 0 + 비디오',
        input: withAddon({ door: 0, user: 150, operator: 1 }, 'Video Monitoring'),
        tier: 'Essential',
        price: 1100,
      },
      {
        name: '도어 20 + GIS 맵 + 방문자',
        input: createInput({
          ...ESSENTIAL_FIT,
          featureAddons: {
            ...createInput().featureAddons,
            'GIS Map Monitoring': true,
            'Visitor': true,
          },
        }),
        tier: 'Essential',
        price: 3000,
      },
      {
        name: '도어 20 + 화재 경보',
        input: withPackages(ESSENTIAL_FIT, 'Fire Alarm'),
        tier: 'Essential',
        price: 1200,
      },
      {
        name: '도어 3 + 엘리베이터',
        input: withPackages({ door: 3, user: 80, operator: 1 }, 'Elevator Control'),
        tier: 'Essential',
        price: 1700,
      },
    ];

    const unchangedByReform: Scenario[] = [
      {
        name: '도어 100 + 비디오',
        input: withAddon({ door: 100, user: 3000, operator: 5 }, 'Video Monitoring'),
        tier: 'Advanced',
        price: 2100,
      },
      {
        name: '도어 50 + 고급 출입 통제 7개',
        input: withPackages({ door: 50, user: 5000, operator: 10 }, ...ADVANCED_AC_PACKAGES),
        tier: 'Advanced',
        price: 5000,
      },
      {
        name: '도어 300 + 고급 출입 통제 7개',
        input: withPackages({ door: 300, user: 80000, operator: 30 }, ...ADVANCED_AC_PACKAGES),
        tier: 'Enterprise',
        price: 7000,
      },
      {
        name: '도어 3 + 모바일 앱',
        input: withAddon({ door: 3, user: 80, operator: 1 }, 'Mobile App'),
        tier: 'Starter',
        price: 500,
      },
      {
        name: '애드온 없음',
        input: createInput(ESSENTIAL_FIT),
        tier: 'Essential',
        price: 1000,
      },
      {
        name: '근태 관리 300명',
        input: createInput({
          ...ESSENTIAL_FIT,
          featureAddons: { ...createInput().featureAddons, 'T&A': 300 },
        }),
        tier: 'Essential',
        price: 2000,
      },
    ];

    it.each(changedByReform)('개편으로 견적이 달라진다: $name → $tier $price', ({ input, tier, price }) => {
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe(tier);
      expect(result.totalPrice).toBe(price);
    });

    it.each(unchangedByReform)('개편 후에도 그대로다: $name → $tier $price', ({ input, tier, price }) => {
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe(tier);
      expect(result.totalPrice).toBe(price);
    });

    it('등급별 용량 한도와 업그레이드 단위는 개편의 영향을 받지 않는다', () => {
      // Essential 도어 한도 32 → 33 이면 1 번들
      const oneBundle = recommendLicense(createInput({ door: 33, user: 100, operator: 0 }));
      expect(oneBundle.baseLicense).toBe('Essential');
      expect(oneBundle.capacityUpgrades.door).toBe(1);
      expect(oneBundle.totalPrice).toBe(1500);

      // Device Manager 는 사용자 · 관리자만 업그레이드
      const dm = recommendLicense(createInput({ door: 0, user: 5200, operator: 1 }));
      expect(dm.baseLicense).toBe('Device Manager');
      expect(dm.capacityUpgrades.user).toBe(1);
      expect(dm.capacityUpgrades.door).toBeUndefined();
    });
  });
});
