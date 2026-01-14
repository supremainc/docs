/**
 * Markdown to HTML conversion using markdown-it
 * Cleaner implementation with markdown-it library
 */

import MarkdownIt from 'markdown-it';
import { container } from '@mdit/plugin-container';
import mdCodeBlock from 'markdown-it-code-block';
import { escapeHtml } from './utils.mjs';

/**
 * Initialize markdown-it with plugins
 */
function initMarkdownIt() {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: false, // Disable smart quotes
  });

  // Add code block plugin FIRST
  md.use(mdCodeBlock, {
    // Code block plugin will handle fences with language, title, and line highlighting
  });

  // Add container plugin for admonitions (:::info, :::note, :::warning, :::danger, :::tip, :::caution)
  const admonitionConfig = {
    info: { class: 'alert--info', icon: 'ⓘ' },
    note: { class: 'alert--note', icon: '📝' },
    warning: { class: 'alert--warning', icon: '⚠️' },
    danger: { class: 'alert--danger', icon: '🚨' },
    tip: { class: 'alert--tip', icon: '💡' },
    caution: { class: 'alert--caution', icon: '⚠️' },
  };

  // Register each admonition type
  Object.entries(admonitionConfig).forEach(([type, config]) => {
    md.use(container, {
      name: type,
      openRender: (tokens, index) => {
        const info = tokens[index].info.trim().slice(type.length).trim();
        const title = info || type.charAt(0).toUpperCase() + type.slice(1);
        return `<div class="alert ${config.class}">
  <div class="admonition-heading">
    <span class="admonition-icon">${config.icon}</span>
    <strong>${escapeHtml(title)}</strong>
  </div>
  <div class="admonition-content">
`;
      },
      closeRender: () => `  </div>
</div>
`,
    });
  });

  return md;
}

/**
 * Process Include/Xclude components based on product option
 * Include: Shows content only if product matches
 * Xclude: Hides content if product matches
 */
function processIncludeXclude(content, productOption = '') {
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
 * Process Badge components
 * <Badge className='get'>GET</Badge> → <span class="badge get">GET</span>
 * <Badge>content</Badge> → <span class="badge">Affects version: content</span>
 */
function processBadgeComponents(content, translations = {}) {
  // Get 'Affects version' label from translations (code.json structure: { "id": { "message": "..." } })
  const revisionLabel = (translations['theme.revision.badge'] && translations['theme.revision.badge'].message) || 'Affects version';

  // Badge with className
  content = content.replace(/<Badge\s+className=['"]([^'"]+)['"]>([^<]*)<\/Badge>/g, (match, className, text) => {
    return `<span class="badge ${className}">${text}</span>`;
  });

  // Badge without className (default with revision label prefix from translations)
  content = content.replace(/<Badge>([^<]*)<\/Badge>/g, (match, text) => {
    return `<span class="badge">${revisionLabel}:&nbsp;${text}</span>`;
  });

  return content;
}

/**
 * Convert markdown to HTML using markdown-it
 * @param {string} mdContent - Markdown content
 * @param {Object} translations - i18n translations object
 * @param {string} productOption - Product filter option
 * @returns {string} HTML content
 */
export function markdownToHtml(mdContent, translations, productOption = '') {
  // Initialize markdown-it
  const md = initMarkdownIt();

  // Process Include/Xclude FIRST (before any markdown processing)
  let html = processIncludeXclude(mdContent, productOption);

  // Process Badge components (before removing other JSX)
  html = processBadgeComponents(html, translations);

  // Remove MDX/JSX comments and components
  html = html
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/<(?!Include|Xclude)[A-Z]\w*[^>]*\/>/g, '')
    .replace(/<(?!Include|Xclude)[A-Z]\w*[^>]*>[\s\S]*?<\/(?!Include|Xclude)[A-Z]\w*>/g, '')
    .trim();

  // Render markdown to HTML
  html = md.render(html);

  // Clean up: remove <p> wrappers around admonition divs
  html = html.replace(/<p>\s*(<div class="alert[^"]*"[\s\S]*?<\/div>)\s*<\/p>/g, '$1');

  return html;
}

/**
 * Export for potential future use
 */
export { processIncludeXclude };
