/**
 * File loading and parsing functions
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getDocBasePath } from './config.mjs';
import { generateHeadingId, extractHeadingsFromMarkdown } from './utils.mjs';

/**
 * Recursively extract doc IDs from sidebar configuration
 * Also includes link.id from category items
 * @param {Array|Object} config - Sidebar configuration
 * @param {Array} docIds - Accumulator
 * @returns {Array} Array of doc IDs
 */
export function extractDocIds(config, docIds = []) {
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
 * Process import statements in MDX and replace with actual content
 * Handles: import Component from './path/to/file.mdx'
 * And replaces: <Component /> with the imported file's content
 * @param {string} content - MDX content
 * @param {string} basePath - Base directory for relative imports
 * @returns {string} Content with imports processed
 */
export function processImportsInMdx(content, basePath) {
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
        // Remove JSX expressions (but not those inside code blocks - after ``` or in attributes)
        // Only remove { } that are NOT part of code fence attributes
        .replace(/\{(?![\d,\-\s]*\})[^}]+\}/g, '');
      
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
 * @param {string} docId - Document ID
 * @param {string} language - Language code
 * @returns {Object|null} Loaded file object or null
 */
export function loadMdxFile(docId, language) {
  const docBasePath = getDocBasePath(language);
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
