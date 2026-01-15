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
 * Recursively process import statements in MDX content
 * Handles nested imports: A imports B, B imports C, etc.
 * @param {string} filePath - Current file path being processed
 * @param {Object} processedFiles - Cache to prevent circular imports
 * @param {Object} imports - Accumulated imports from all levels
 * @returns {Object} All collected imports
 */
function processFileImportsRecursively(filePath, processedFiles = {}, imports = {}) {
  // Prevent circular imports
  if (processedFiles[filePath]) {
    return imports;
  }
  processedFiles[filePath] = true;

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content: importedMdxContent } = matter(fileContent);
    const baseDir = path.dirname(filePath);

    // Extract all import statements from this file
    const importRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/g;
    let match;

    while ((match = importRegex.exec(importedMdxContent)) !== null) {
      const componentName = match[1];
      const importPath = match[2];

      try {
        // Resolve the actual file path
        let actualPath = path.join(baseDir, importPath);

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

        // Normalize path for circular reference detection
        const normalizedPath = path.normalize(actualPath);

        // Read and clean the imported file
        const importedFileContent = fs.readFileSync(normalizedPath, 'utf8');
        const { content: importedFileMdxContent } = matter(importedFileContent);

        let cleanedContent = importedFileMdxContent
          // Remove MDX comments
          .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
          // Remove import statements (including optional semicolon)
          .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*/g, '')
          // Remove JSX expressions BUT PRESERVE {props.xxx} patterns
          .replace(/\{(?!props\.[a-zA-Z_]\w*\})[^}]*\}/g, '');

        // Add this component to imports
        imports[componentName] = cleanedContent;

        // Recursively process nested imports in this file
        processFileImportsRecursively(normalizedPath, processedFiles, imports);
      } catch (error) {
        console.warn(`⚠️  Error loading nested import ${importPath}: ${error.message}`);
      }
    }
  } catch (error) {
    console.warn(`⚠️  Error processing nested file ${filePath}: ${error.message}`);
  }

  return imports;
}

/**
 * Process import statements in MDX and replace with actual content
 * Handles: import Component from './path/to/file.mdx'
 * And replaces: <Component /> with the imported file's content
 * Supports nested imports: A imports B, B imports C, etc.
 * @param {string} content - MDX content
 * @param {string} basePath - Base directory for relative imports
 * @param {string} currentFilePath - Path of the file being processed (for nested imports)
 * @returns {string} Content with imports processed
 */
export function processImportsInMdx(content, basePath, currentFilePath = '') {
  // Extract all import statements
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

      // Normalize path for circular reference detection
      const normalizedPath = path.normalize(actualPath);

      // Read the imported file and extract frontmatter
      const importedContent = fs.readFileSync(normalizedPath, 'utf8');
      const { content: importedMdxContent } = matter(importedContent);
      
      // Remove JSX/MDX syntax from imported content
      let cleanedContent = importedMdxContent
        // Remove MDX comments
        .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
        // Remove import statements (including optional semicolon)
        .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*/g, '')
        // Remove JSX expressions BUT PRESERVE {props.xxx} patterns
        .replace(/\{(?!props\.[a-zA-Z_]\w*\})[^}]*\}/g, '');
      
      imports[componentName] = cleanedContent;

      // Recursively process nested imports from this file
      const nestedImports = processFileImportsRecursively(normalizedPath);
      Object.assign(imports, nestedImports);
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

  // Convert {#anchor} to [#anchor] AFTER props substitution is complete
  // This must be done after props are substituted to avoid any conflicts
  processedContent = processedContent.replace(/\{#([^}]+)\}/g, '[#$1]');

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
