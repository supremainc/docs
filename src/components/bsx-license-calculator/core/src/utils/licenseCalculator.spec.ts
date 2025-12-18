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
    'Advanced AC': false,
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

    it('does NOT recommend Device Manager when Advanced AC is requested', () => {
      const input = createInput({
        door: 0,
        user: 100,
        operator: 1,
        packages: {
          'Advanced AC': true,
        },
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

    it('does NOT recommend Starter when Advanced AC is requested', () => {
      const input = createInput({
        door: 2,
        user: 50,
        operator: 1,
        packages: {
          'Advanced AC': true,
        },
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

    it('does NOT allow Video Monitoring on Essential (must upgrade to Advanced)', () => {
      const input = createInput({
        door: 10,
        user: 100,
        operator: 0,
        featureAddons: {
          ...createInput().featureAddons,
          'Video Monitoring': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Advanced');
      expect(hasAddon(result, 'Video Monitoring')).toBe(true);
    });

    it('does NOT allow Advanced AC purchase on Essential (must be at least Advanced)', () => {
      const input = createInput({
        door: 10,
        user: 100,
        operator: 0,
        packages: {
          'Advanced AC': true,
        },
      });
      const result = recommendLicense(input);

      // Essential에서는 Advanced AC 지원 불가 → 최소 Advanced 이상
      expect(['Advanced', 'Enterprise', 'Elite']).toContain(result.baseLicense);
    });

    it('does NOT auto-include Map Monitoring for Essential even if requested', () => {
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

      // Map Monitoring은 Advanced 이상에서 기본 포함
      expect(result.baseLicense).toBe('Advanced');
      // Advanced에서 Map Monitoring은 featureAddons에 다시 들어가지 않음(기본 포함)
      expect(hasAddon(result, 'Map Monitoring')).toBe(false);
    });
  });

  describe('Advanced', () => {
    it('recommends Advanced when over Essential limits but within Advanced limits', () => {
      const input = createInput({ door: 40, user: 2000, operator: 15 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Advanced');
    });

    it('supports Video Monitoring as add-on', () => {
      const input = createInput({
        door: 10,
        user: 100,
        operator: 0,
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
        door: 10,
        user: 100,
        operator: 0,
        featureAddons: {
          ...createInput().featureAddons,
          'Map Monitoring': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Advanced');
      expect(hasAddon(result, 'Map Monitoring')).toBe(false);
    });

    it('allows Advanced AC as add-on (not included)', () => {
      const input = createInput({
        door: 10,
        user: 1000,
        operator: 10,
        packages: {
          'Advanced AC': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Advanced');
      expect(hasPackage(result, 'Advanced AC')).toBe(true);
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

    it('includes Advanced AC by default even if requested', () => {
      const input = createInput({
        door: 500,
        user: 50000,
        operator: 20,
        packages: {
          'Advanced AC': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Enterprise');
      // Enterprise는 includesAdvancedAC=true → packages에 따로 넣지 않음
      expect(hasPackage(result, 'Advanced AC')).toBe(false);
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

    it('includes Advanced AC by default even if requested', () => {
      const input = createInput({
        door: 1000,
        user: 200000,
        operator: 50,
        packages: {
          'Advanced AC': true,
        },
      });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Elite');
      expect(hasPackage(result, 'Advanced AC')).toBe(false);
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

      // Essential 이상에서 supportsFeatureAddons = true
      expect(['Essential', 'Advanced', 'Enterprise', 'Elite']).toContain(result.baseLicense);
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
        // Device Manager 조건에서 Visitor를 요청하면 Essential 이상이 필요
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
        expect(['Essential', 'Advanced', 'Enterprise', 'Elite']).toContain(dmResultWithVisitor.baseLicense);

        // Starter 조건에서 Mobile App을 요청하면 Essential 이상이 필요
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
        expect(starterResultWithMobileApp.baseLicense).not.toBe('Starter');
        expect(['Essential', 'Advanced', 'Enterprise', 'Elite']).toContain(starterResultWithMobileApp.baseLicense);
      });
    });
  });

  describe('Edge cases', () => {
    it('when everything is zero, should recommend Device Manager', () => {
      const input = createInput({ door: 0, user: 0, operator: 0 });
      const result = recommendLicense(input);

      expect(result.baseLicense).toBe('Device Manager');
    });

    it('when Device Manager-like capacity but Video Monitoring requested → go to Advanced', () => {
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

      expect(result.baseLicense).toBe('Advanced');
      expect(hasAddon(result, 'Video Monitoring')).toBe(true);
    });

    it('Advanced + Advanced AC + heavy capacity may lead to Enterprise/Elite when cheaper or required', () => {
      const input = createInput({
        door: 400,
        user: 90000,
        operator: 35,
        featureAddons: {
          ...createInput().featureAddons,
          'Video Monitoring': true,
        },
        packages: {
          'Advanced AC': true,
        },
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
    
    it('Essential + user upgrade > Advanced → recommend Advanced', () => {
      const input = createInput({ door: 1, user: 6000, operator: 0 });
      // user 6000 → 1000 limit → exceed 5000 → 1 bundle = 500
      // Essential 1000 + 500 = 1500 < Advanced? wait check → 1500 < 2000 → Essential 유지
      // BUT 영상 Add-on = true → Essential 불가
      const result = recommendLicense({ ...input, featureAddons: { ...createInput().featureAddons, 'Video Monitoring': true }});
      expect(result.baseLicense).toBe('Advanced');
    });

    it('Advanced + Advanced AC < Enterprise → keep Advanced', () => {
      const input = createInput({
        door: 50, user: 5000, operator: 10,
        packages: { 'Advanced AC': true },
      });
      // Advanced 2000 + AC 3000 = 5000 < Enterprise 7000
      const result = recommendLicense(input);
      expect(result.baseLicense).toBe('Advanced');
      expect(hasPackage(result, 'Advanced AC')).toBe(true);
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
        packages: { 'Advanced AC': true },
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
});
