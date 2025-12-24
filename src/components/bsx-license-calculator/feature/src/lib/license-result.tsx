import { useState } from 'react';
import { LicenseResult as LicenseResultType, getTAType, generatePartNumberList } from '@site/src/components/bsx-license-calculator/core';

interface LicenseResultProps {
  licenseResult: LicenseResultType;
  onReset?: () => void;
}

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
    'BioStar X Plugin': 'BIOSTARX-ADD-PLG',
  };

  // Package
  const packageMap: Record<string, string> = {
    'Advanced AC': 'BIOSTARX-PKG-AAC',
  };

  return (
    baseLicenseMap[type] ||
    capacityMap[type] ||
    featureAddonMap[type] ||
    packageMap[type] ||
    type
  );
}

export function LicenseResult({ licenseResult, onReset }: LicenseResultProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    const partNumberList = generatePartNumberList(licenseResult);
    try {
      await navigator.clipboard.writeText(partNumberList);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold mb-2">Recommended License</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleCopyToClipboard}
            className="text-xs bg-blue-500 text-white px-3 py-1.5 rounded-md font-medium hover:bg-blue-600 transition flex items-center gap-2"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Part Numbers
              </>
            )}
          </button>
          {onReset && (
            <button
              type="button"
              onClick={onReset}
              className="text-xs bg-gray-500 text-white px-3 py-1.5 rounded-md font-medium hover:bg-gray-600 transition"
            >
              Reset All
            </button>
          )}
        </div>
      </div>
      
      <div className="space-y-4">
        {/* Base License */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Base License</h3>
          <p className="text-lg font-bold text-blue-600">{getPartNumber(licenseResult.baseLicense)}</p>
        </div>

        {/* Capacity Upgrades */}
        {(licenseResult.capacityUpgrades.door !== undefined ||
          licenseResult.capacityUpgrades.user !== undefined ||
          licenseResult.capacityUpgrades.operator !== undefined) && (
          <div>
            <h3 className="font-semibold mb-2">
              {licenseResult.baseLicense === 'Device Manager'
                ? 'Capacity'
                : 'Capacity Upgrades'}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {licenseResult.capacityUpgrades.door !== undefined &&
                licenseResult.capacityUpgrades.door > 0 && (
                  <li>{getPartNumber('Door')}: {licenseResult.capacityUpgrades.door}</li>
                )}
              {licenseResult.capacityUpgrades.user !== undefined &&
                licenseResult.capacityUpgrades.user > 0 && (
                  <li>{getPartNumber('User')}: {licenseResult.capacityUpgrades.user}</li>
                )}
              {licenseResult.capacityUpgrades.operator !== undefined &&
                licenseResult.capacityUpgrades.operator > 0 && (
                  <li>{getPartNumber('Operator')}: {licenseResult.capacityUpgrades.operator}</li>
                )}
            </ul>
          </div>
        )}

        {/* Feature Add-ons */}
        {licenseResult.featureAddons.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Feature Add-ons</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {licenseResult.featureAddons.map((addon, index) => {
                if (addon.type === 'T&A') {
                  const taType = getTAType(addon.quantity || 0);
                  if (taType) {
                    return (
                      <li key={index}>
                        {getPartNumber(addon.type, addon.quantity)}
                      </li>
                    );
                  }
                } else {
                  return <li key={index}>{getPartNumber(addon.type)}</li>;
                }
                return null;
              })}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

