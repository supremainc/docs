/**
 * Configuration and i18n management
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.dirname(__dirname);

/**
 * Load i18n translations from code.json
 * @param {string} language - Language code (ko, en, es, ja)
 * @returns {Object} Loaded translations
 */
export function loadTranslations(language) {
  const supportedLanguages = ['ko', 'en', 'es', 'ja', 'ru'];
  const lang = supportedLanguages.includes(language) ? language : 'ko';
  const translationPath = path.join(ROOT_DIR, 'i18n', lang, 'code.json');
  
  if (!fs.existsSync(translationPath)) {
    console.warn(`⚠️ Translation file not found for language: ${lang}, falling back to ko`);
    return loadTranslations('ko');
  }
  
  const content = fs.readFileSync(translationPath, 'utf8');
  return JSON.parse(content);
}

/**
 * Get the document base path based on language
 * @param {string} language - Language code (ko, en, es, ja, ru)
 * @returns {string} Document base path
 */
export function getDocBasePath(language) {
  const supportedLanguages = ['ko', 'en', 'es', 'ja', 'ru'];
  const lang = supportedLanguages.includes(language) ? language : 'ko';
  
  // Korean uses 'docs', others use i18n structure
  if (lang === 'ko') {
    return path.join(ROOT_DIR, 'docs');
  }
  
  return path.join(ROOT_DIR, 'i18n', lang, 'docusaurus-plugin-content-docs', 'current');
}

/**
 * Get CSS content from files
 * @param {string} template - Template type
 * @returns {string} CSS content
 */
export function getTemplateCSS(template) {
  let css = '';
  
  // Load default CSS
  const defaultCSSPath = path.join(__dirname, 'default.css');
  if (fs.existsSync(defaultCSSPath)) {
    try {
      css = fs.readFileSync(defaultCSSPath, 'utf8');
      console.log('✓ CSS loaded from default.css');
    } catch (error) {
      console.warn(`⚠️  Failed to load default.css: ${error.message}`);
    }
  } else {
    console.warn('⚠️  default.css not found');
  }

  return css;
}

export { ROOT_DIR };
