#!/usr/bin/env node

/**
 * Advanced MDX to HTML Converter with Docusaurus Components Support
 * Converts multiple MDX files from sidebar.js structure into a single HTML file
 * 
 * Features:
 * - Parse and handle Docusaurus MDX components
 * - Generate table of contents
 * - Support for code blocks with syntax highlighting
 * - Responsive HTML design
 * 
 * Usage: node mdx-to-html-advanced.mjs [options]
 * Example: node mdx-to-html-advanced.mjs --sidebar bsxplugins --output output.html --template professional
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';
import { program } from 'commander';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkGfm from 'remark-gfm';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Command line options
program
  .name('mdx-to-html-advanced')
  .description('Convert multiple MDX files to a single HTML document')
  .option('-s, --sidebar <key>', 'Sidebar configuration key', 'bsxplugins')
  .option('-o, --output <file>', 'Output HTML file', 'output.html')
  .option('-t, --template <type>', 'Template type: simple, professional, documentation', 'professional')
  .option('-p, --product <products>', 'Product filter (comma-separated)', '')
  .option('-l, --language <lang>', 'Language for i18n (ko, en, es, ja)', 'ko')
  .option('--toc', 'Generate table of contents', true)
  .option('--max-depth <number>', 'Maximum heading depth for TOC', '3')
  .parse(process.argv);

const options = program.opts();

/**
 * Load i18n translations from code.json
 * @param {string} language - Language code (ko, en, es, ja)
 * @returns {Object} Loaded translations
 */
function loadTranslations(language) {
  const supportedLanguages = ['ko', 'en', 'es', 'ja'];
  const lang = supportedLanguages.includes(language) ? language : 'ko';
  const translationPath = path.join(__dirname, 'i18n', lang, 'code.json');
  
  if (!fs.existsSync(translationPath)) {
    console.warn(`⚠️ Translation file not found for language: ${lang}, falling back to ko`);
    return loadTranslations('ko');
  }
  
  const content = fs.readFileSync(translationPath, 'utf8');
  return JSON.parse(content);
}

// Load translations based on language option
const translations = loadTranslations(options.language);

/**
 * Parse MDX syntax from string using remark
 * @param {string} mdxContent - MDX content
 * @returns {Object} Parsed AST and metadata
 */
async function parseMdx(mdxContent) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkGfm);

  const ast = processor.parse(mdxContent);
  
  const metadata = {
    headings: [],
    hasCodeBlocks: false,
    hasImages: false,
    hasTables: false,
    components: []
  };

  // Extract metadata
  visit(ast, 'heading', node => {
    metadata.headings.push({
      depth: node.depth,
      text: extractText(node),
      id: generateHeadingId(extractText(node))
    });
  });

  visit(ast, 'code', () => {
    metadata.hasCodeBlocks = true;
  });

  visit(ast, 'image', () => {
    metadata.hasImages = true;
  });

  visit(ast, 'table', () => {
    metadata.hasTables = true;
  });

  visit(ast, 'mdxJsxFlowElement', node => {
    metadata.components.push(node.name);
  });

  return { ast, metadata };
}

/**
 * Extract text content from AST node
 * @param {Object} node - AST node
 * @returns {string} Extracted text
 */
function extractText(node) {
  if (node.type === 'text') return node.value;
  if (node.children) {
    return node.children.map(extractText).join('');
  }
  return '';
}

/**
 * Generate ID from heading text
 * @param {string} text - Heading text
 * @returns {string} Generated ID
 */
function generateHeadingId(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Extract headings from markdown content without full AST parsing
 * @param {string} content - Markdown content
 * @returns {Array} Array of heading objects
 */
function extractHeadingsFromMarkdown(content) {
  const headings = [];
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const depth = match[1].length;
    const text = match[2].trim();
    headings.push({
      depth,
      text,
      id: generateHeadingId(text)
    });
  }

  return headings;
}

/**
 * Process Docusaurus admonitions (:::info, :::note, :::warning, :::danger, :::tip, :::caution)
 * Converts to HTML div with appropriate alert classes and icons
 * @param {string} content - Content with admonition syntax
 * @returns {string} Processed content with HTML admonitions
 */
function processAdmonitions(content) {
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
 * @returns {string} Processed content
 */
function processIncludeXclude(content) {
  const productOption = options.product ? options.product.trim() : '';
  
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
 * @returns {string} HTML content
 */
function markdownToHtml(mdContent) {
  // IMPORTANT: Process Include/Xclude BEFORE escapeHtml, since escapeHtml will convert < and > to entities
  // This must be done first because escapeHtml will destroy the tags
  let html = processIncludeXclude(mdContent);

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
  finalHtml = processAdmonitions(finalHtml);
  
  // Clean up: remove <p> wrappers around admonition divs (processAdmonitions adds HTML that shouldn't be in <p>)
  finalHtml = finalHtml.replace(/<p>\s*(<div class="alert[^"]*"[\s\S]*?<\/div>)\s*<\/p>/g, '$1');

  return finalHtml;
}

/**
 * Recursively extract doc IDs from sidebar configuration
 * Also includes link.id from category items
 * @param {Array|Object} config - Sidebar configuration
 * @param {Array} docIds - Accumulator
 * @returns {Array} Array of doc IDs
 */
function extractDocIds(config, docIds = []) {
  if (Array.isArray(config)) {
    config.forEach(item => extractDocIds(item, docIds));
  } else if (typeof config === 'object' && config !== null) {
    // Handle link.id for categories
    if (config.link && config.link.type === 'doc' && config.link.id) {
      docIds.push(config.link.id);
    }
    
    if (config.type === 'doc') {
      docIds.push(config.id);
    } else if (typeof config === 'string') {
      docIds.push(config);
    }
    
    if (config.items && Array.isArray(config.items)) {
      extractDocIds(config.items, docIds);
    }
  } else if (typeof config === 'string') {
    docIds.push(config);
  }
  return docIds;
}

/**
 * Get the document base path based on language
 * @param {string} language - Language code (ko, en, es, ja)
 * @returns {string} Document base path
 */
function getDocBasePath(language) {
  const supportedLanguages = ['ko', 'en', 'es', 'ja'];
  const lang = supportedLanguages.includes(language) ? language : 'ko';
  
  // Korean uses 'docs', others use i18n structure
  if (lang === 'ko') {
    return path.join(__dirname, 'docs');
  }
  
  return path.join(__dirname, 'i18n', lang, 'docusaurus-plugin-content-docs', 'current');
}

/**
 * Load and parse MDX file
 * @param {string} docId - Document ID
 * @returns {Object|null} Loaded file object or null
 */
function loadMdxFile(docId) {
  const docBasePath = getDocBasePath(options.language);
  let filePath = path.join(docBasePath, `${docId}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    filePath = path.join(docBasePath, `${docId}.md`);
  }

  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  File not found: ${docId} (searched in ${docBasePath})`);
    return null;
  }

  let fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Process imports and replace with actual content
  fileContent = processImportsInMdx(fileContent, path.dirname(filePath));
  
  const { data: frontmatter, content } = matter(fileContent);

  return {
    frontmatter: frontmatter || {},
    content,
    filePath,
    docId,
    headingId: generateHeadingId(frontmatter.title || docId)
  };
}

/**
 * Process import statements in MDX and replace with actual content
 * Handles: import Component from './path/to/file.mdx'
 * And replaces: <Component /> with the imported file's content
 * @param {string} content - MDX content
 * @param {string} basePath - Base directory for relative imports
 * @returns {string} Content with imports processed
 */
function processImportsInMdx(content, basePath) {
  // Extract all import statements
  // Pattern: import ComponentName from 'path'
  const importRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g;
  const imports = {};
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const componentName = match[1];
    const importPath = match[2];
    
    try {
      // Resolve the actual file path
      let actualPath = path.join(basePath, importPath);
      
      // Try both .mdx and .md extensions
      if (!fs.existsSync(actualPath)) {
        if (fs.existsSync(actualPath + '.mdx')) {
          actualPath = actualPath + '.mdx';
        } else if (fs.existsSync(actualPath + '.md')) {
          actualPath = actualPath + '.md';
        } else {
          console.warn(`⚠️  Imported file not found: ${importPath}`);
          continue;
        }
      }

      // Read the imported file and extract frontmatter
      const importedContent = fs.readFileSync(actualPath, 'utf8');
      const { content: importedMdxContent } = matter(importedContent);
      
      // Remove JSX/MDX syntax from imported content
      // BUT KEEP Include/Xclude tags for product filtering
      let cleanedContent = importedMdxContent
        // Remove JSX component opening/closing tags (EXCEPT Include/Xclude)
        // Negative lookahead to exclude Include and Xclude
        .replace(/<(?!Include|Xclude)[A-Z]\w*[^>]*>/g, '')
        .replace(/<\/(?!Include|Xclude)[A-Z]\w*>/g, '')
        // Remove self-closing JSX tags (EXCEPT Include/Xclude)
        .replace(/<(?!Include|Xclude)[A-Z]\w*[^>]*\/>/g, '')
        // Remove MDX comments
        .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
        // Remove import statements
        .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"]/g, '')
        // Remove JSX expressions (but not those inside Include/Xclude)
        .replace(/\{[^}]+\}/g, '');
      
      imports[componentName] = cleanedContent;
    } catch (error) {
      console.warn(`⚠️  Error loading import ${importPath}: ${error.message}`);
    }
  }

  // Remove import statements
  let processedContent = content.replace(importRegex, '');

  // Replace component usage with imported content
  // Pattern: <ComponentName /> or <ComponentName></ComponentName>
  for (const [componentName, importedContent] of Object.entries(imports)) {
    const selfClosingRegex = new RegExp(`<${componentName}\\s*/?>`, 'g');
    const closingRegex = new RegExp(`<${componentName}[^>]*>.*?</${componentName}>`, 'gs');
    
    processedContent = processedContent.replace(selfClosingRegex, importedContent);
    processedContent = processedContent.replace(closingRegex, importedContent);
  }

  return processedContent;
}

/**
 * Generate table of contents HTML
 * @param {Array<Object>} mdxFiles - Array of loaded MDX files
 * @returns {string} TOC HTML
 */
function generateTableOfContents(mdxFiles) {
  const maxDepth = parseInt(options.maxDepth, 10);
  let tocHtml = '<nav class="toc" id="toc">\n<h2>목차</h2>\n<ul>\n';

  mdxFiles.forEach(file => {
    if (!file) return;
    
    const docTitle = file.frontmatter.title || file.docId;
    tocHtml += `<li><a href="#${file.headingId}">${escapeHtml(docTitle)}</a>`;

    // Add headings from content if depth allows
    if (maxDepth > 1) {
      const headings = file.headings || [];
      const filteredHeadings = headings.filter(h => h.depth <= maxDepth);
      
      if (filteredHeadings.length > 0) {
        tocHtml += '\n<ul>\n';
        filteredHeadings.forEach(heading => {
          const indent = '  '.repeat(Math.max(0, heading.depth - 2));
          tocHtml += `${indent}<li><a href="#${heading.id}">${escapeHtml(heading.text)}</a></li>\n`;
        });
        tocHtml += '</ul>\n';
      }
    }

    tocHtml += '</li>\n';
  });

  tocHtml += '</ul>\n</nav>\n';
  return tocHtml;
}

/**
 * Get CSS for template
 * Loads CSS from external file: mdx-to-html-styles.css
 * Falls back to embedded CSS if file not found
 * @param {string} template - Template type
 * @returns {string} CSS content
 */
function getTemplateCSS(template) {
  let css = '';
  
  // Load default CSS
  const defaultCSSPath = path.join(__dirname, 'default.css');
  if (fs.existsSync(defaultCSSPath)) {
    try {
      css += fs.readFileSync(defaultCSSPath, 'utf8');
      console.log('✓ CSS loaded from default.css');
    } catch (error) {
      console.warn(`⚠️  Failed to load default.css: ${error.message}`);
    }
  }
  
  // Load additional styles CSS (if exists)
  const stylesCSSPath = path.join(__dirname, 'mdx-to-html-styles.css');
  if (fs.existsSync(stylesCSSPath)) {
    try {
      const additionalCSS = fs.readFileSync(stylesCSSPath, 'utf8');
      css += '\n\n/* Additional Styles */\n' + additionalCSS;
      console.log('✓ Additional styles loaded from mdx-to-html-styles.css');
    } catch (error) {
      console.warn(`⚠️  Failed to load mdx-to-html-styles.css: ${error.message}`);
    }
  }

  return css;
}

/**
 * Escape HTML special characters
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, char => map[char]);
}

/**
 * Build complete HTML document
 * @param {Array<Object>} mdxFiles - Array of loaded MDX files
 * @param {string} title - Document title
 * @returns {string} Complete HTML
 */
function buildHtmlDocument(mdxFiles, title) {
  const contentSections = mdxFiles.map(file => {
    if (!file) return '';
    
    const docTitle = file.frontmatter.title || file.docId;
    const content = markdownToHtml(file.content);
    
    return `
    <section class="doc-section" id="${file.headingId}">
      <h1>${escapeHtml(docTitle)}</h1>
      ${file.frontmatter.description ? `<p class="description">${escapeHtml(file.frontmatter.description)}</p>` : ''}
      <div class="doc-content">
        ${content}
      </div>
    </section>
    `;
  }).filter(Boolean).join('\n');

  const css = getTemplateCSS(options.template);
  const toc = options.toc ? generateTableOfContents(mdxFiles) : '';

  const html = `<!DOCTYPE html>
<html lang="${options.language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <style>
${css}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>${escapeHtml(title)}</h1>
      <p>생성: ${new Date().toLocaleString('ko-KR')}</p>
    </header>

    <div class="layout">
      ${toc}
      
      <main class="content">
        ${contentSections}
      </main>
    </div>

    <footer>
      <p>이 문서는 여러 개의 MDX 파일로부터 자동으로 생성되었습니다.</p>
      <p>생성 시간: ${new Date().toLocaleString('ko-KR')}</p>
    </footer>
  </div>

  <button class="back-to-top" id="backToTop" title="맨 위로">↑</button>

  <script>
    // Back to top button functionality
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  </script>
</body>
</html>`;

  return html;
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('🚀 MDX to HTML Advanced Converter');
    console.log('==================================\n');

    const sidebarKey = options.sidebar;
    const outputFile = options.output;
    const templateType = options.template;

    console.log(`📖 Sidebar key: ${sidebarKey}`);
    console.log(`📄 Output file: ${outputFile}`);
    console.log(`🎨 Template: ${templateType}`);
    if (options.product) {
      console.log(`🏷️  Product filter: ${options.product}`);
    }
    console.log('');

    // Load sidebars.js
    const sidebarsPath = path.join(__dirname, 'sidebars.js');
    
    if (!fs.existsSync(sidebarsPath)) {
      console.error('❌ sidebars.js not found');
      process.exit(1);
    }

    const sidebarsModule = await import(`file://${sidebarsPath}`);
    const sidebars = sidebarsModule.default;

    if (!sidebars[sidebarKey]) {
      console.error(`❌ Sidebar key '${sidebarKey}' not found`);
      console.error(`📋 Available keys: ${Object.keys(sidebars).join(', ')}`);
      process.exit(1);
    }

    // Extract doc IDs
    const docIds = extractDocIds(sidebars[sidebarKey]);
    console.log(`📄 Found ${docIds.length} documents in sidebar\n`);

    // Load all MDX files
    const mdxFiles = docIds
      .map(docId => {
        const file = loadMdxFile(docId);
        if (file) {
          // Skip full AST parsing to avoid MDX syntax errors
          // Just extract basic heading information from raw markdown
          file.headings = extractHeadingsFromMarkdown(file.content);
        }
        return file;
      })
      .filter(file => file !== null);

    if (mdxFiles.length === 0) {
      console.error('❌ No documents loaded');
      process.exit(1);
    }

    console.log(`✅ Successfully loaded ${mdxFiles.length} documents\n`);

    // Build HTML document
    const title = `${sidebarKey} Documentation`;
    const htmlContent = buildHtmlDocument(mdxFiles, title);

    // Write output file
    const outputPath = path.join(__dirname, outputFile);
    fs.writeFileSync(outputPath, htmlContent, 'utf8');
    
    const fileSize = fs.statSync(outputPath).size;
    console.log(`✅ HTML file created successfully`);
    console.log(`📊 File path: ${outputPath}`);
    console.log(`📈 File size: ${(fileSize / 1024).toFixed(2)} KB`);
    console.log(`\n✨ Conversion complete!`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

main();
