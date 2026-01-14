#!/usr/bin/env node

/**
 * MDX to HTML Converter
 * Converts multiple MDX files from sidebar.js structure into a single HTML file
 * 
 * Usage: node mdx-to-html.mjs [sidebar-key] [output-file]
 * Example: node mdx-to-html.mjs bsxplugins output.html
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkMdx from 'remark-mdx';
import remarkGfm from 'remark-gfm';
import { unified } from 'unified';

// Dynamic import for sidebars
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Recursively extract doc IDs from sidebar configuration
 * @param {Array|Object} config - Sidebar configuration item(s)
 * @param {Array} docIds - Accumulator for doc IDs
 * @returns {Array} Array of doc ID strings
 */
function extractDocIds(config, docIds = []) {
  if (Array.isArray(config)) {
    config.forEach(item => extractDocIds(item, docIds));
  } else if (typeof config === 'object' && config !== null) {
    if (config.type === 'doc') {
      docIds.push(config.id);
    }
    if (typeof config === 'string') {
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
 * Load and parse MDX file
 * @param {string} docId - Document ID (path without extension)
 * @returns {Object} Object with {frontmatter, content, filePath}
 */
function loadMdxFile(docId) {
  // Try both .mdx and .md extensions
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
    frontmatter,
    content,
    filePath,
    docId
  };
}

/**
 * Convert Markdown content to HTML
 * @param {string} mdContent - Markdown content
 * @returns {Promise<string>} HTML content
 */
async function mdToHtml(mdContent) {
  try {
    const processor = unified()
      .use(remarkParse)
      .use(remarkMdx)
      .use(remarkGfm)
      .use(() => tree => {
        // Transform tree if needed
        return tree;
      });

    const htmlProcessor = unified()
      .use(remarkParse)
      .use(remarkMdx)
      .use(remarkGfm);

    const result = await htmlProcessor.process(mdContent);
    
    // Simple markdown to HTML conversion
    let html = result.toString();
    
    // Remove MDX/JSX comments and component tags first
    html = html
      .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
      // Remove JSX component tags (e.g., <Overview />, <Component />, etc.)
      .replace(/<[A-Z]\w*[^>]*\/>/g, '')
      .replace(/<[A-Z]\w*[^>]*>[\s\S]*?<\/[A-Z]\w*>/g, '');
    
    // Convert markdown syntax to HTML
    html = html
      .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
      .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
      .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n\n/g, '</p><p>');

    // Handle lists - improved logic for ul/ol
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
        
        // Add line as-is
        processedLines.push(line);
      }
    });

    // Close any open list at the end
    if (currentListType) {
      processedLines.push(currentListType === 'ul' ? '</ul>' : '</ol>');
    }

    html = processedLines.join('\n');

    return html;
  } catch (error) {
    console.error(`Error converting markdown: ${error.message}`);
    return mdContent;
  }
}

/**
 * Build HTML document from MDX files
 * @param {Array<Object>} mdxFiles - Array of loaded MDX file objects
 * @param {string} title - Document title
 * @returns {string} Complete HTML document
 */
function buildHtmlDocument(mdxFiles, title) {
  const contentSections = mdxFiles.map(file => {
    if (!file) return '';
    
    const docTitle = file.frontmatter.title || file.docId;
    const content = file.content;
    
    return `
    <section class="doc-section" id="${file.docId}">
      <h1>${escapeHtml(docTitle)}</h1>
      ${file.frontmatter.description ? `<p class="description">${escapeHtml(file.frontmatter.description)}</p>` : ''}
      <div class="doc-content">
        ${escapeHtml(content)}
      </div>
    </section>
    `;
  }).filter(Boolean).join('\n');

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
    }

    header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px 20px;
      margin: -20px -20px 40px -20px;
      border-radius: 0 0 8px 8px;
    }

    header h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }

    header p {
      font-size: 1.1em;
      opacity: 0.9;
    }

    .toc {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
      border-left: 4px solid #667eea;
    }

    .toc h2 {
      margin-bottom: 15px;
      color: #333;
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
      transition: color 0.3s;
    }

    .toc a:hover {
      color: #764ba2;
      text-decoration: underline;
    }

    .doc-section {
      background: white;
      padding: 30px;
      margin-bottom: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .doc-section h1 {
      color: #667eea;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e0e0e0;
    }

    .doc-section h2 {
      color: #764ba2;
      margin-top: 25px;
      margin-bottom: 15px;
    }

    .doc-section h3 {
      color: #555;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .description {
      color: #666;
      font-style: italic;
      margin-bottom: 20px;
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
      font-family: 'Courier New', monospace;
      color: #d63384;
    }

    .doc-content pre {
      background-color: #f4f4f4;
      border-left: 4px solid #667eea;
      padding: 15px;
      margin: 15px 0;
      overflow-x: auto;
      border-radius: 4px;
    }

    .doc-content pre code {
      background: none;
      padding: 0;
      color: #333;
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

    footer {
      text-align: center;
      padding: 20px;
      color: #999;
      border-top: 1px solid #e0e0e0;
      margin-top: 40px;
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
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>${escapeHtml(title)}</h1>
      <p>Generated from multiple MDX documents</p>
    </header>

    <nav class="toc">
      <h2>📚 목차</h2>
      <ul>
        ${mdxFiles.map(file => {
          if (!file) return '';
          const docTitle = file.frontmatter.title || file.docId;
          return `<li><a href="#${file.docId}">${escapeHtml(docTitle)}</a></li>`;
        }).filter(Boolean).join('\n        ')}
      </ul>
    </nav>

    <main>
      ${contentSections}
    </main>

    <footer>
      <p>Generated on ${new Date().toLocaleString('ko-KR')}</p>
    </footer>
  </div>
</body>
</html>`;

  return html;
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
 * Main conversion function
 */
async function main() {
  try {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
      console.log(`
📄 MDX to HTML Converter

사용법: node mdx-to-html.mjs [sidebar-key] [output-file]

예시:
  node mdx-to-html.mjs bsxplugins output.html
  node mdx-to-html.mjs myDocSection my-document.html

옵션:
  --help     이 도움말을 표시합니다
      `);
      process.exit(0);
    }

    const sidebarKey = args[0];
    const outputFile = args[1] || 'output.html';

    // Load sidebars.js
    const sidebarsPath = path.join(__dirname, 'sidebars.js');
    const sidebarsModule = await import(`file://${sidebarsPath}`);
    const sidebars = sidebarsModule.default;

    if (!sidebars[sidebarKey]) {
      console.error(`❌ Sidebar key '${sidebarKey}' not found`);
      console.error(`Available keys: ${Object.keys(sidebars).join(', ')}`);
      process.exit(1);
    }

    console.log(`📖 Processing sidebar: ${sidebarKey}`);
    
    // Extract doc IDs
    const docIds = extractDocIds(sidebars[sidebarKey]);
    console.log(`📄 Found ${docIds.length} documents`);

    // Load all MDX files
    const mdxFiles = docIds
      .map(docId => loadMdxFile(docId))
      .filter(file => file !== null);

    console.log(`✅ Loaded ${mdxFiles.length} documents successfully`);

    if (mdxFiles.length === 0) {
      console.error('❌ No documents loaded');
      process.exit(1);
    }

    // Build HTML document
    const title = `${sidebarKey} Documentation`;
    const htmlContent = buildHtmlDocument(mdxFiles, title);

    // Write output file
    const outputPath = path.join(__dirname, outputFile);
    fs.writeFileSync(outputPath, htmlContent, 'utf8');
    
    console.log(`✅ HTML file created: ${outputPath}`);
    console.log(`📊 File size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
