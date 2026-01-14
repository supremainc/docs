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
  .option('--toc', 'Generate table of contents', true)
  .option('--max-depth <number>', 'Maximum heading depth for TOC', '3')
  .parse(process.argv);

const options = program.opts();

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
 * Convert simple markdown to HTML
 * @param {string} mdContent - Markdown content
 * @returns {string} HTML content
 */
function markdownToHtml(mdContent) {
  // Remove MDX/JSX comments first, before any other processing
  let html = mdContent
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    // Remove JSX component tags (e.g., <Overview />, <Component />, etc.)
    .replace(/<[A-Z]\w*[^>]*\/>/g, '')
    .replace(/<[A-Z]\w*[^>]*>[\s\S]*?<\/[A-Z]\w*>/g, '')
    .trim();

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

  return processedLines.join('\n');
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
 * Load and parse MDX file
 * @param {string} docId - Document ID
 * @returns {Object|null} Loaded file object or null
 */
function loadMdxFile(docId) {
  let filePath = path.join(__dirname, 'docs', `${docId}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, 'docs', `${docId}.md`);
  }

  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  File not found: ${docId}`);
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
      let cleanedContent = importedMdxContent
        // Remove JSX component opening/closing tags (e.g., <Xclude>, <Include>, etc.)
        .replace(/<[A-Z]\w*[^>]*>/g, '')
        .replace(/<\/[A-Z]\w*>/g, '')
        // Remove self-closing JSX tags (e.g., <Component />)
        .replace(/<[A-Z]\w*[^>]*\/>/g, '')
        // Remove MDX comments
        .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
        // Remove import statements
        .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"]/g, '')
        // Remove JSX expressions
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
          const indent = '  '.repeat(heading.depth - 2);
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
  const cssFilePath = path.join(__dirname, 'mdx-to-html-styles.css');
  
  try {
    if (fs.existsSync(cssFilePath)) {
      const externalCSS = fs.readFileSync(cssFilePath, 'utf8');
      console.log('✓ CSS loaded from mdx-to-html-styles.css');
      return externalCSS;
    }
  } catch (error) {
    console.warn(`⚠️  Failed to load CSS file: ${error.message}`);
  }

  // Fallback: Embedded CSS
  const baseCSS = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 60px 20px;
      margin: -20px -20px 40px -20px;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    header h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
      font-weight: 700;
    }

    header p {
      font-size: 1.1em;
      opacity: 0.95;
    }

    .layout {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 30px;
    }

    .toc {
      background: white;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #667eea;
      height: fit-content;
      position: sticky;
      top: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .toc h2 {
      margin-bottom: 15px;
      color: #333;
      font-size: 1.2em;
    }

    .toc ul {
      list-style: none;
    }

    .toc li {
      margin: 8px 0;
    }

    .toc a {
      color: #667eea;
      text-decoration: none;
      transition: color 0.3s, text-decoration 0.3s;
      display: block;
      padding: 4px 0;
    }

    .toc a:hover {
      color: #764ba2;
      text-decoration: underline;
    }

    .toc ul ul {
      margin-left: 15px;
      margin-top: 8px;
      border-left: 1px solid #e0e0e0;
      padding-left: 10px;
    }

    .toc ul ul a {
      font-size: 0.95em;
    }

    .content {
      display: flex;
      flex-direction: column;
    }

    .doc-section {
      background: white;
      padding: 40px;
      margin-bottom: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s;
    }

    .doc-section:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .doc-section h1 {
      color: #667eea;
      margin-bottom: 10px;
      padding-bottom: 15px;
      border-bottom: 2px solid #e0e0e0;
      font-size: 2em;
    }

    .doc-section h2 {
      color: #764ba2;
      margin-top: 30px;
      margin-bottom: 15px;
      font-size: 1.5em;
    }

    .doc-section h3 {
      color: #555;
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 1.2em;
    }

    .description {
      color: #666;
      font-style: italic;
      margin-bottom: 20px;
      padding: 10px 0;
    }

    .doc-content {
      line-height: 1.8;
      color: #444;
    }

    .doc-content p {
      margin-bottom: 15px;
    }

    .doc-content ul,
    .doc-content ol {
      margin-left: 20px;
      margin-bottom: 15px;
    }

    .doc-content li {
      margin-bottom: 8px;
    }

    .doc-content code {
      background-color: #f4f4f4;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', Consolas, monospace;
      color: #d63384;
      font-size: 0.95em;
    }

    .doc-content pre {
      background-color: #2d2d2d;
      color: #f8f8f2;
      border-left: 4px solid #667eea;
      padding: 15px;
      margin: 15px 0;
      overflow-x: auto;
      border-radius: 4px;
      font-family: 'Courier New', Consolas, monospace;
    }

    .doc-content pre code {
      background: none;
      padding: 0;
      color: #f8f8f2;
    }

    .doc-content strong {
      color: #222;
      font-weight: 600;
    }

    .doc-content em {
      font-style: italic;
    }

    .doc-content a {
      color: #667eea;
      text-decoration: none;
      border-bottom: 1px solid rgba(102, 126, 234, 0.3);
      transition: all 0.3s;
    }

    .doc-content a:hover {
      border-bottom-color: #667eea;
      opacity: 0.8;
    }

    .doc-content table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
    }

    .doc-content table th,
    .doc-content table td {
      border: 1px solid #ddd;
      padding: 12px;
      text-align: left;
    }

    .doc-content table th {
      background-color: #f9f9f9;
      font-weight: 600;
      color: #667eea;
    }

    .doc-content table tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    .doc-content blockquote {
      border-left: 4px solid #667eea;
      padding-left: 15px;
      margin-left: 0;
      color: #666;
      font-style: italic;
      margin: 15px 0;
    }

    footer {
      text-align: center;
      padding: 40px 20px;
      color: #999;
      border-top: 1px solid #e0e0e0;
      margin-top: 60px;
      font-size: 0.9em;
    }

    .back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #667eea;
      color: white;
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      font-size: 20px;
      cursor: pointer;
      display: none;
      z-index: 999;
      transition: background-color 0.3s, opacity 0.3s;
    }

    .back-to-top:hover {
      background-color: #764ba2;
    }

    .back-to-top.show {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 1024px) {
      .layout {
        grid-template-columns: 1fr;
      }

      .toc {
        position: static;
        margin-bottom: 30px;
      }
    }

    @media (max-width: 768px) {
      header h1 {
        font-size: 1.8em;
      }

      .container {
        padding: 15px;
      }

      .doc-section {
        padding: 20px;
      }

      .toc h2 {
        font-size: 1em;
      }

      .doc-section h1 {
        font-size: 1.5em;
      }

      .doc-section h2 {
        font-size: 1.2em;
      }
    }
  `;

  return baseCSS;
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
<html lang="ko">
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
    console.log(`🎨 Template: ${templateType}\n`);

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
