import { useState, useEffect } from 'react';
import { LicenseInput, LicenseResult as LicenseResultType, recommendLicense } from '@site/src/components/bsx-license-calculator/core';
import { LicenseResult } from './license-result';
import '../styles.module.css';

const initialInput: LicenseInput = {
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
    'Multi Communications Server': 0,
    'Event Log API': false,
    'Remote Access': false,
    'External Remote Access': false,
    'BioStar X Plugin': false,
  },
  packages: {
    'Advanced AC': false,
  },
};

// Check if the input is the initial input
function isInitialInput(input: LicenseInput): boolean {
  return JSON.stringify(input) === JSON.stringify(initialInput);
}

export function LicenseForm() {
  const [input, setInput] = useState<LicenseInput>(initialInput);
  const [result, setResult] = useState<LicenseResultType | null>(null);
  // UI-only checkbox states for T&A and Multi Communications Server
  const [isTAChecked, setIsTAChecked] = useState(false);
  const [isMultiCommServerChecked, setIsMultiCommServerChecked] = useState(false);

  // Feature Add-on descriptions
  const featureAddonDescriptions: Record<string, string> = {
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
    'Multi Communications Server': 'Distribute server workloads to handle sites with more than 1,000 IP devices.',
    'Event Log API': 'Allows external systems to insert event logs into BioStar X via API.',
    'Remote Access': 'Provides a tunneling service that enables access to BioStar X from public networks.',
    'External Remote Access': 'Allows tunneling BioStar X to the public network through the user\'s own ngrok account.',
    'BioStar X Plugin': 'Integrate external software by registering it as a BioStar X plugin for seamless operation.',
  };

  // Submit
  useEffect(() => {
    if (isInitialInput(input)) {
      setResult(null);
    } else {
      const calculatedResult = recommendLicense(input);
      setResult(calculatedResult);
    }
  }, [input]);

  const handleCapacityChange = (type: 'door' | 'user' | 'operator', value: number) => {
    setInput((prev) => ({
      ...prev,
      [type]: Math.max(0, value),
    }));
  };

  const handleFeatureAddonChange = (
    addon: keyof LicenseInput['featureAddons'],
    value: boolean | number
  ) => {
    setInput((prev) => ({
      ...prev,
      featureAddons: {
        ...prev.featureAddons,
        [addon]: value,
      },
    }));
  };

  const handlePackageChange = (
    pkg: keyof LicenseInput['packages'],
    checked: boolean
  ) => {
    setInput((prev) => ({
      ...prev,
      packages: {
        ...prev.packages,
        [pkg]: checked,
      },
    }));
  };

  const handleReset = () => {
    setInput(initialInput);
    setResult(null);
    setIsTAChecked(false);
    setIsMultiCommServerChecked(false);
  };

  return (
    <div className="max-w-8xl mx-auto p-3 pt-6 pb-10">
      <h1 className="text-2xl font-bold mb-4">BioStar X License Calculator</h1>
      <div className="relative lg:h-fit lg:self-start lg:col-span-4 mb-5 text-black">
        {result ? (
          <LicenseResult licenseResult={result} onReset={handleReset} />
        ) : (
          <div className="px-4 pt-1 pt-2 mb-5 rounded-lg border border-gray-300 bg-white shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Recommended License</h2>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs bg-gray-500 text-white px-3 py-1 rounded-md font-medium hover:bg-gray-600 transition"
              >
                Reset All
              </button>
            </div>
            <p className="text-sm text-gray-500 text-center p-5">Enter license requirements to see results.</p>
          </div>
        )}
      </div>
      <div className="max-w relative mt-5 text-black">
        <div className="space-y-2 lg:col-span-6">
        {/* Capacity Input */}
        <section className="px-4 pt-1 pb-2 rounded-lg bg-white shadow">
          <h2 className="text-lg font-semibold mb-1">Site Information</h2>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-medium mb-2">
                Number of Doors
              </label>
              <input
                type="number"
                min="0"
                value={input.door}
                onChange={(e) => handleCapacityChange('door', parseInt(e.target.value))}
                className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-2">
                Number of Users
              </label>
              <input
                type="number"
                min="0"
                value={input.user}
                onChange={(e) => handleCapacityChange('user', parseInt(e.target.value))}
                className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-2">
                Number of Operators
              </label>
              <input
                type="number"
                min="0"
                value={input.operator}
                onChange={(e) => handleCapacityChange('operator', parseInt(e.target.value))}
                className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>
        </section>

        {/* Feature Add-ons */}
        <section className="bg-white px-4 pt-1 pb-2 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-1">Feature Add-ons</h2>
          <div className="space-y-1">
            {/* Checkbox Add-ons */}
            {[
              { name: 'Map Monitoring', description: featureAddonDescriptions['Map Monitoring'] },
              { name: 'Video Monitoring', description: featureAddonDescriptions['Video Monitoring'] },
              { name: 'Advanced AC', description: featureAddonDescriptions['Advanced AC'], isPackage: true },
              { name: 'GIS Map Monitoring', description: featureAddonDescriptions['GIS Map Monitoring'] },
              { name: 'Server Matching', description: featureAddonDescriptions['Server Matching'] },
              { name: 'Visitor', description: featureAddonDescriptions['Visitor'] },
              { name: 'Directory Integration', description: featureAddonDescriptions['Directory Integration'] },
              { name: 'Roll Call', description: featureAddonDescriptions['Roll Call'] },
            ].map(({ name, description, isPackage = false }) => (
              <div key={name}>
                <label className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    checked={
                      isPackage
                        ? (input.packages[name as keyof LicenseInput['packages']] as boolean)
                        : (input.featureAddons[name as keyof LicenseInput['featureAddons']] as boolean)
                    }
                    onChange={(e) => {
                      if (isPackage) {
                        handlePackageChange(name as keyof LicenseInput['packages'], e.target.checked);
                      } else {
                        handleFeatureAddonChange(
                          name as keyof LicenseInput['featureAddons'],
                          e.target.checked
                        );
                      }
                    }}
                    className="w-4 h-4 mt-2"
                  />
                  <div className="flex-1">
                    <span className="text-sm">{name}</span>
                    <p className="text-xs text-gray-600">{description}</p>
                  </div>
                </label>
              </div>
            ))}

            {/* T&A */}
            <div>
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  checked={isTAChecked}
                  onChange={(e) => {
                    setIsTAChecked(e.target.checked);
                    if (e.target.checked) {
                      if (input.featureAddons['T&A'] === 0) {
                        handleFeatureAddonChange('T&A', 1);
                      }
                    } else {
                      handleFeatureAddonChange('T&A', 0);
                    }
                  }}
                  className="w-4 h-4 mt-2"
                />
                <div className="flex-1">
                  <span className="text-sm">T&A (Number of Users)</span>
                  <p className="text-xs text-gray-600">{featureAddonDescriptions['T&A']}</p>
                </div>
              </label>
              <div className="ml-6">
                <input
                  type="number"
                  min="1"
                  value={input.featureAddons['T&A']}
                  onChange={(e) =>
                    handleFeatureAddonChange('T&A', parseInt(e.target.value) || 0)
                  }
                  disabled={!isTAChecked}
                  className="w-30 mt-1 px-2 py-1 border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                />
              </div>
            </div>

            {/* Checkbox Add-ons continued */}
            {[
              { name: 'Mobile App', description: featureAddonDescriptions['Mobile App'] },
            ].map(({ name, description }) => (
              <div key={name}>
                <label className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    checked={input.featureAddons[name as keyof LicenseInput['featureAddons']] as boolean}
                    onChange={(e) =>
                      handleFeatureAddonChange(
                        name as keyof LicenseInput['featureAddons'],
                        e.target.checked
                      )
                    }
                    className="w-4 h-4 mt-2"
                  />
                  <div className="flex-1">
                    <span className="text-sm">{name}</span>
                    <p className="text-xs text-gray-600">{description}</p>
                  </div>
                </label>
              </div>
            ))}

            {/* Multi Communications Server */}
            <div>
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  checked={isMultiCommServerChecked}
                  onChange={(e) => {
                    setIsMultiCommServerChecked(e.target.checked);
                    if (e.target.checked) {
                      if (input.featureAddons['Multi Communications Server'] === 0) {
                        handleFeatureAddonChange('Multi Communications Server', 2);
                      }
                    } else {
                      handleFeatureAddonChange('Multi Communications Server', 0);
                    }
                  }}
                  className="w-4 h-4 mt-2"
                />
                <div className="flex-1">
                  <span className="text-sm">Multi Communications Server (Number of Servers)</span>
                  <p className="text-xs text-gray-600">{featureAddonDescriptions['Multi Communications Server']}</p>
                </div>
              </label>
              <div className="ml-6">
                <input
                  type="number"
                  min="2"
                  value={input.featureAddons['Multi Communications Server']}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 0;
                    handleFeatureAddonChange(
                      'Multi Communications Server',
                      value
                    );
                  }}
                  disabled={!isMultiCommServerChecked}
                  className="w-30 px-2 mt-1 py-1 border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                />
              </div>
            </div>

            {/* Checkbox Add-ons continued */}
            {[
              { name: 'Event Log API', description: featureAddonDescriptions['Event Log API'] },
              { name: 'Remote Access', description: featureAddonDescriptions['Remote Access'] },
              { name: 'External Remote Access', description: featureAddonDescriptions['External Remote Access'] },
              { name: 'BioStar X Plugin', description: featureAddonDescriptions['BioStar X Plugin'] },
            ].map(({ name, description }) => (
              <div key={name}>
                <label className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    checked={input.featureAddons[name as keyof LicenseInput['featureAddons']] as boolean}
                    onChange={(e) =>
                      handleFeatureAddonChange(
                        name as keyof LicenseInput['featureAddons'],
                        e.target.checked
                      )
                    }
                    className="w-4 h-4 mt-2"
                  />
                  <div className="flex-1">
                    <span className="text-sm">{name}</span>
                    <p className="text-xs text-gray-600">{description}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </section>

        </div>
      </div>
    </div>
  );
}

