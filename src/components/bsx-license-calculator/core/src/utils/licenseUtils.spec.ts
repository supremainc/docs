import { describe, it, expect } from 'vitest';
import { generatePartNumberList } from './licenseUtils.js';
import type { LicenseResult } from '../types/license.js';

describe('generatePartNumberList', () => {
  describe('Base License only', () => {
    it('generates part number list for Essential license only', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {},
        featureAddons: [],
        packages: [],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS');
    });

    it('generates part number list for all base license types', () => {
      const baseLicenses = [
        { type: 'Device Manager', expected: 'BIOSTARX-DEV' },
        { type: 'Starter', expected: 'BIOSTARX-STR' },
        { type: 'Essential', expected: 'BIOSTARX-ESS' },
        { type: 'Advanced', expected: 'BIOSTARX-ADV' },
        { type: 'Enterprise', expected: 'BIOSTARX-ENT' },
        { type: 'Elite', expected: 'BIOSTARX-ELT' },
      ] as const;

      baseLicenses.forEach(({ type, expected }) => {
        const result: LicenseResult = {
          baseLicense: type,
          capacityUpgrades: {},
          featureAddons: [],
          packages: [],
        };

        const partNumberList = generatePartNumberList(result);
        expect(partNumberList).toBe(expected);
      });
    });
  });

  describe('Capacity Upgrades', () => {
    it('includes capacity upgrade with quantity 1 (no parentheses)', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {
          door: 1,
        },
        featureAddons: [],
        packages: [],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS, BIOSTARX-UP-DOR');
    });

    it('includes capacity upgrade with quantity > 1 (with parentheses)', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {
          door: 2,
          user: 3,
          operator: 1,
        },
        featureAddons: [],
        packages: [],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS, BIOSTARX-UP-DOR (2), BIOSTARX-UP-USR (3), BIOSTARX-UP-OPR');
    });

    it('excludes capacity upgrades with quantity 0', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {
          door: 0,
          user: 1,
          operator: 0,
        },
        featureAddons: [],
        packages: [],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS, BIOSTARX-UP-USR');
    });
  });

  describe('Feature Add-ons', () => {
    it('includes simple checkbox feature add-ons', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {},
        featureAddons: [
          { type: 'Mobile App' },
          { type: 'BioStar X Plugin' },
          { type: 'Visitor' },
        ],
        packages: [],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS, BIOSTARX-ADD-MOB, BIOSTARX-ADD-PLG, BIOSTARX-ADD-VST');
    });

    it('excludes Map Monitoring (no part number)', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {},
        featureAddons: [
          { type: 'Map Monitoring' },
          { type: 'Mobile App' },
        ],
        packages: [],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS, BIOSTARX-ADD-MOB');
    });

    it('includes T&A Standard', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {},
        featureAddons: [
          { type: 'T&A', quantity: 100 },
        ],
        packages: [],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS, BIOSTARX-ADD-TNA-STD');
    });

    it('includes T&A Enterprise', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {},
        featureAddons: [
          { type: 'T&A', quantity: 501 },
        ],
        packages: [],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS, BIOSTARX-ADD-TNA-ENT');
    });

    it('includes Multi Communications Server BAS only (quantity = 2)', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {},
        featureAddons: [
          { type: 'Multi Communications Server', quantity: 2 },
        ],
        packages: [],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS, BIOSTARX-ADD-MCS-BAS');
    });

    it('includes Multi Communications Server BAS + ADD (quantity = 3)', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {},
        featureAddons: [
          { type: 'Multi Communications Server', quantity: 3 },
        ],
        packages: [],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS, BIOSTARX-ADD-MCS-BAS, BIOSTARX-ADD-MCS-ADD');
    });

    it('includes Multi Communications Server BAS + ADD with quantity > 1', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {},
        featureAddons: [
          { type: 'Multi Communications Server', quantity: 5 },
        ],
        packages: [],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS, BIOSTARX-ADD-MCS-BAS, BIOSTARX-ADD-MCS-ADD (3)');
    });

    it('excludes Multi Communications Server with quantity < 2', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {},
        featureAddons: [
          { type: 'Multi Communications Server', quantity: 1 },
        ],
        packages: [],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS');
    });
  });

  describe('Packages', () => {
    it('includes Advanced AC package', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {},
        featureAddons: [],
        packages: ['Advanced AC'],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS, BIOSTARX-PKG-AAC');
    });
  });

  describe('Complex combinations', () => {
    it('generates complete part number list with all components', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {
          door: 2,
          user: 1,
        },
        featureAddons: [
          { type: 'Mobile App' },
          { type: 'BioStar X Plugin' },
          { type: 'Multi Communications Server', quantity: 4 },
          { type: 'T&A', quantity: 200 },
        ],
        packages: ['Advanced AC'],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toBe('BIOSTARX-ESS, BIOSTARX-UP-DOR (2), BIOSTARX-UP-USR, BIOSTARX-ADD-MOB, BIOSTARX-ADD-PLG, BIOSTARX-ADD-MCS-BAS, BIOSTARX-ADD-MCS-ADD (2), BIOSTARX-ADD-TNA-STD, BIOSTARX-PKG-AAC');
    });

    it('generates part number list matching example format', () => {
      const result: LicenseResult = {
        baseLicense: 'Essential',
        capacityUpgrades: {},
        featureAddons: [
          { type: 'Mobile App' },
          { type: 'BioStar X Plugin' },
          { type: 'Multi Communications Server', quantity: 3 },
        ],
        packages: [],
      };

      const partNumberList = generatePartNumberList(result);
      expect(partNumberList).toContain('BIOSTARX-ESS');
      expect(partNumberList).toContain('BIOSTARX-ADD-MOB');
      expect(partNumberList).toContain('BIOSTARX-ADD-PLG');
      expect(partNumberList).toContain('BIOSTARX-ADD-MCS-BAS');
      expect(partNumberList).toContain('BIOSTARX-ADD-MCS-ADD');
    });
  });
});

