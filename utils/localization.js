// @ts-check
import ConfigLocalized from '../docusaurus.config.localized.json';

const defaultLocale = 'ko';

/**
 * Get localized configuration value based on current locale
 * @param {string} key - Configuration key to retrieve
 * @returns {string} Localized value
 */
export function getLocalizedConfigValue(key) {
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
  const values = ConfigLocalized[key];
  if (!values) {
    throw new Error(`Localized config key=${key} not found`);
  }
  const value = values[currentLocale] ?? values[defaultLocale];
  if (!value) {
    throw new Error(
      `Localized value for config key=${key} not found for both currentLocale=${currentLocale} or defaultLocale=${defaultLocale}`,
    );
  }
  return value;
}
