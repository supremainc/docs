/**
 * Markdown to HTML conversion functions
 */

import { escapeHtml } from './utils.mjs';

/**
 * Process Docusaurus admonitions (:::info, :::note, :::warning, :::danger, :::tip, :::caution)
 * Converts to HTML div with appropriate alert classes and icons
 * @param {string} content - Content with admonition syntax
 * @param {Object} translations - i18n translations object
 * @returns {string} Processed content with HTML admonitions
 */
export function processAdmonitions(content, translations) {
  const admonitionTypes = {
    'info': { class: 'alert--info', icon: 'ⓘ', i18nKey: 'theme.admonition.info' },
    'note': { class: 'alert--note', icon: '📝', i18nKey: 'theme.admonition.note' },
    'warning': { class: 'alert--warning', icon: '⚠️', i18nKey: 'theme.admonition.warning' },
    'danger': { class: 'alert--danger', icon: '🚨', i18nKey: 'theme.admonition.danger' },
    'tip': { class: 'alert--tip', icon: '💡', i18nKey: 'theme.admonition.tip' },
    'caution': { class: 'alert--caution', icon: '⚠️', i18nKey: 'theme.admonition.caution' },
  };

  /**
   * Get translated title for admonition type
   * @param {string} type - Admonition type
   * @param {string} customTitle - Optional custom title from :::type title="..."
   * @returns {string} Localized title
   */
  function getAdmonitionTitle(type, customTitle) {
    if (customTitle) {
      return customTitle;
    }
    const config = admonitionTypes[type];
    const i18nKey = config?.i18nKey;
    if (i18nKey && translations[i18nKey]) {
      return translations[i18nKey].message;
    }
    // Fallback to capitalized type name
    return type.charAt(0).toUpperCase() + type.slice(1);
  }

  // Count admonitions before processing
  const admonitionCount = (content.match(/:::(?:info|note|warning|danger|tip|caution)/g) || []).length;

  // Match :::type (with optional title) followed by content and closing :::
  // Handle both single-line and multi-line content with flexible whitespace
  content = content.replace(/:::(info|note|warning|danger|tip|caution)(?:\s+title="([^"]*)")?\s*([\s\S]*?)\s*:::/g, 
    (match, type, customTitle, bodyContent) => {
      const config = admonitionTypes[type] || admonitionTypes['info'];
      const displayTitle = getAdmonitionTitle(type, customTitle);
      const cleanContent = bodyContent.trim();
      
      return `<div class="alert ${config.class}">
  <div class="admonition-heading">
    <span class="admonition-icon">${config.icon}</span>
    <strong>${displayTitle}</strong>
  </div>
  <div class="admonition-content">
    ${cleanContent}
  </div>
</div>`;
    });

  return content;
}

/**
 * Process Include/Xclude components based on product option
 * Include: Shows content only if product matches
 * Xclude: Hides content if product matches
 * @param {string} content - Content with Include/Xclude tags
 * @param {string} productOption - Product filter option
 * @returns {string} Processed content
 */
export function processIncludeXclude(content, productOption = '') {
  // If no product specified, remove all Include/Xclude tags
  if (!productOption) {
    return content
      .replace(/<Include[^>]*>[\s\S]*?<\/Include>/g, '')
      .replace(/<Xclude[^>]*>[\s\S]*?<\/Xclude>/g, '');
  }

  // Parse product list (comma-separated)
  const products = productOption.split(',').map(p => p.trim());

  // Process Include tags: keep content if product matches, remove otherwise
  content = content.replace(/<Include\s+product="([^"]*)">([\s\S]*?)<\/Include>/g, (match, productAttr, childContent) => {
    const includeProducts = productAttr.split(',').map(p => p.trim());
    const hasMatch = includeProducts.some(p => products.includes(p));
    return hasMatch ? childContent : '';
  });

  // Process Xclude tags: remove content if product matches, keep otherwise
  content = content.replace(/<Xclude\s+product="([^"]*)">([\s\S]*?)<\/Xclude>/g, (match, productAttr, childContent) => {
    const xcludeProducts = productAttr.split(',').map(p => p.trim());
    const hasMatch = xcludeProducts.some(p => products.includes(p));
    return hasMatch ? '' : childContent;
  });

  return content;
}

/**
 * Convert simple markdown to HTML
 * @param {string} mdContent - Markdown content
 * @param {Object} translations - i18n translations object
 * @param {string} productOption - Product filter option
 * @returns {string} HTML content
 */
export function markdownToHtml(mdContent, translations, productOption = '') {
  // IMPORTANT: Process Include/Xclude BEFORE escapeHtml, since escapeHtml will convert < and > to entities
  // This must be done first because escapeHtml will destroy the tags
  let html = processIncludeXclude(mdContent, productOption);

  // Store Include/Xclude tags to preserve during escapeHtml
  const preservedTags = {};
  let placeholderIndex = 0;
  
  // First, preserve Include/Xclude tags
  html = html.replace(/<(Include|Xclude)\s+product="([^"]*)">([\s\S]*?)<\/\1>/g, (match) => {
    const placeholder = `__PRESERVED_TAG_${placeholderIndex}__`;
    preservedTags[placeholder] = match;
    placeholderIndex++;
    return placeholder;
  });

  // Remove MDX/JSX comments and components (before escapeHtml)
  html = html
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    // Remove JSX component tags (e.g., <Overview />, <Component />, etc.)
    // BUT KEEP Include/Xclude tags via placeholders
    .replace(/<(?!Include|Xclude)[A-Z]\w*[^>]*\/>/g, '')
    .replace(/<(?!Include|Xclude)[A-Z]\w*[^>]*>[\s\S]*?<\/(?!Include|Xclude)[A-Z]\w*>/g, '')
    .trim();

  // Now escape HTML (this won't affect our placeholders)
  html = escapeHtml(html);

  // Headers
  html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');

  // Inline styles
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');
  html = html.replace(/`(.*?)`/g, '<code>$1</code>');

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // Code blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

  // Lists - Fixed: proper handling of ul/ol nesting and separation
  // IMPORTANT: Skip lines that are placeholders to prevent them from being wrapped in <p> tags
  const lines = html.split('\n');
  let currentListType = null; // null, 'ul', or 'ol'
  const processedLines = [];

  lines.forEach(line => {
    const trimmedLine = line.trim();
    
    // Check if this line is a list item
    const isUnorderedItem = trimmedLine.match(/^- /);
    const isOrderedItem = trimmedLine.match(/^\d+\. /);
    
    if (isUnorderedItem) {
      // Close previous list if type changed
      if (currentListType && currentListType !== 'ul') {
        processedLines.push(currentListType === 'ol' ? '</ol>' : '</ul>');
      }
      
      // Open ul if not already open
      if (currentListType !== 'ul') {
        processedLines.push('<ul>');
        currentListType = 'ul';
      }
      
      processedLines.push('<li>' + trimmedLine.replace(/^- /, '') + '</li>');
    } 
    else if (isOrderedItem) {
      // Close previous list if type changed
      if (currentListType && currentListType !== 'ol') {
        processedLines.push(currentListType === 'ul' ? '</ul>' : '</ol>');
      }
      
      // Open ol if not already open
      if (currentListType !== 'ol') {
        processedLines.push('<ol>');
        currentListType = 'ol';
      }
      
      processedLines.push('<li>' + trimmedLine.replace(/^\d+\. /, '') + '</li>');
    } 
    else {
      // Not a list item
      // Close list if we were in one and this is NOT an empty line
      if (currentListType && trimmedLine) {
        processedLines.push(currentListType === 'ul' ? '</ul>' : '</ol>');
        currentListType = null;
      }
      
      // Add non-empty lines as paragraphs
      if (trimmedLine) {
        processedLines.push('<p>' + line.trim() + '</p>');
      }
    }
  });

  // Close any open list at the end
  if (currentListType) {
    processedLines.push(currentListType === 'ul' ? '</ul>' : '</ol>');
  }

  let finalHtml = processedLines.join('\n');
  
  // Restore preserved tags (Include/Xclude tags)
  for (const [placeholder, original] of Object.entries(preservedTags)) {
    finalHtml = finalHtml.replace(placeholder, original);
  }
  
  // Now process admonitions AFTER all markdown processing
  // At this point, admonition syntax (:::info, etc.) should still be in the content
  finalHtml = processAdmonitions(finalHtml, translations);
  
  // Clean up: remove <p> wrappers around admonition divs (processAdmonitions adds HTML that shouldn't be in <p>)
  finalHtml = finalHtml.replace(/<p>\s*(<div class="alert[^"]*"[\s\S]*?<\/div>)\s*<\/p>/g, '$1');

  return finalHtml;
}
