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
  // Extract all import statements (including optional semicolon)
  // Pattern: import ComponentName from 'path'; or import ComponentName from 'path'
  const importRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/g;
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
      // Focus on:
      // 1. Remove MDX comments
      // 2. Remove import statements  
      // 3. Convert {#anchor} for heading IDs
      // 4. Remove other JSX expressions
      // 
      // NOTE: JSX component tags (Include, Xclude, Image, Badge, Cmd, etc.)
      // are preserved here and will be processed by converter-rehype.mjs plugins
      let cleanedContent = importedMdxContent
        // Remove MDX comments
        .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
        // Remove import statements (including optional semicolon)
        .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*/g, '')
        // Convert {#anchor} to [#anchor] to avoid JSX parsing issues
        .replace(/\{#([^}]+)\}/g, '[#$1]')
        // Remove JSX expressions BUT PRESERVE [#anchor] patterns for heading IDs
        // Negative lookahead: (?!\[#) excludes [#...] patterns
        .replace(/\{(?!\[#)(?![\d,\-\s]*\})[^}]+\}/g, '');
      
      imports[componentName] = cleanedContent;
    } catch (error) {
      console.warn(`⚠️  Error loading import ${importPath}: ${error.message}`);
    }
  }

  // Remove import statements (including optional semicolon and trailing whitespace/newlines)
  let processedContent = content.replace(/import\s+[\w\s]+from\s+['"][^'"]+['"];?\s*\n/g, '');

  // Replace component usage with imported content
  // Pattern: <ComponentName props="value" /> or <ComponentName></ComponentName>
  for (const [componentName, importedContent] of Object.entries(imports)) {
    // Match self-closing tags with attributes: <ComponentName attr1="val1" attr2="val2" />
    const selfClosingRegex = new RegExp(`<${componentName}([^/>]*)\\s*/?>`, 'g');
    // Match opening/closing tags with content
    const closingRegex = new RegExp(`<${componentName}([^>]*)>.*?</${componentName}>`, 'gs');
    
    // Handle self-closing tags with props
    processedContent = processedContent.replace(selfClosingRegex, (match, attributes) => {
      let replacedContent = importedContent;
      
      // Extract props from attributes
      // Pattern: name="value" or name='value'
      const propRegex = /(\w+)=["']([^"']*?)["']/g;
      let propMatch;
      
      while ((propMatch = propRegex.exec(attributes)) !== null) {
        const propName = propMatch[1];
        const propValue = propMatch[2];
        // Replace {props.propName} with the actual value
        replacedContent = replacedContent.replace(new RegExp(`\\{props\\.${propName}\\}`, 'g'), propValue);
      }
      
      return replacedContent;
    });
    
    // Handle opening/closing tags with content and props
    processedContent = processedContent.replace(closingRegex, (match, attributes) => {
      let replacedContent = importedContent;
      
      // Extract props from attributes
      const propRegex = /(\w+)=["']([^"']*?)["']/g;
      let propMatch;
      
      while ((propMatch = propRegex.exec(attributes)) !== null) {
        const propName = propMatch[1];
        const propValue = propMatch[2];
        // Replace {props.propName} with the actual value
        replacedContent = replacedContent.replace(new RegExp(`\\{props\\.${propName}\\}`, 'g'), propValue);
      }
      
      return replacedContent;
    });
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
