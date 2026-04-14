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
  const supportedLanguages = ['ko', 'en', 'es', 'ja'];
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
 * @param {string} language - Language code (ko, en, es, ja)
 * @returns {string} Document base path
 */
export function getDocBasePath(language) {
  const supportedLanguages = ['ko', 'en', 'es', 'ja'];
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
  let CSSPath;
  if (template === 'embedded') {
    CSSPath = path.join(__dirname, 'embedded.css');
  } else {
    CSSPath = path.join(__dirname, `default.css`);
  }
  // Load CSS
  const defaultCSSPath = path.join(CSSPath);

  if (fs.existsSync(defaultCSSPath)) {
    try {
      css = fs.readFileSync(defaultCSSPath, 'utf8');
      console.log(`✓ CSS loaded from ${CSSPath}`);
    } catch (error) {
      console.warn(`⚠️  Failed to load ${CSSPath}: ${error.message}`);
    }
  } else {
    console.warn(`⚠️  ${CSSPath} not found`);
  }

  return css;
}

export { ROOT_DIR };
