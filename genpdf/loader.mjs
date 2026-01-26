/**
 * File loading and parsing functions
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getDocBasePath } from './config.mjs';
import { generateHeadingId, extractHeadingsFromMarkdown } from './utils.mjs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.dirname(__dirname);

// ============================================================================
// REGEX PATTERNS (Centralized to avoid duplication)
// ============================================================================

const REGEX_PATTERNS = {
  // Import statements: import ComponentName from 'path'
  importStatement: /import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/g,
  
  // MDX comments: {/* ... */}
  mdxComments: /\{\/\*[\s\S]*?\*\/\}/g,
  
  // Import declarations (for removal)
  importDeclarations: /import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*/g,
  
  // JSX expressions to remove, BUT PRESERVE specific patterns:
  // - {props.xxx}
  // - {#anchor}
  // - {숫자}
  // - {식별자}
  // - {${...}} (template literals)
  // - {`template`} (backtick templates)
  jsxExpressions: /\{(?!`|props\.[a-zA-Z_]\w*\}|#[a-z0-9\-]+\}|[0-9]+\}|[a-zA-Z_][a-zA-Z0-9_\-]*\}|\$\{)[^}]*\}/g,
  
  // Props in attributes: name="value" or name='value' or name={value}
  propsInAttributes: /(\w+)=(?:["']([^"']*?)["']|\{([^}]+)\})/g,
  
  // Self-closing component tags: <ComponentName ... />
  selfClosingComponent: (name) => new RegExp(`<${name}([^/>]*)\\s*/?>`, 'g'),
  
  // Component with closing tags: <ComponentName ...>...</ComponentName>
  closingComponent: (name) => new RegExp(`<${name}([^>]*)>.*?</${name}>`, 'gs'),
  
  // Anchor patterns: {#anchor}
  anchors: /\{#([^}]+)\}/g,
  
  // SpecSection with property path: <SpecSection data={varName.property} />
  specSectionWithProperty: (varName) => new RegExp(`<SpecSection\\s+data={${varName}((?:\\.[a-zA-Z_]\\w*)+)}\\s*/>`, 'g')
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Clean MDX/Markdown content by removing comments, imports, and JSX expressions
 * Preserves specific patterns: {props.xxx}, {#anchor}, {숫자}, etc.
 * @param {string} content - Raw MDX content
 * @returns {string} Cleaned content
 */
function cleanMdxContent(content) {
  return content
    .replace(REGEX_PATTERNS.mdxComments, '')
    .replace(REGEX_PATTERNS.importDeclarations, '')
    .replace(REGEX_PATTERNS.jsxExpressions, '');
}

/**
 * Extract props from component attributes string
 * Returns array of { name, value } objects
 * @param {string} attributes - Attributes string from component tag
 * @returns {Array} Array of { propName, propValue } objects
 */
function extractPropsFromAttributes(attributes) {
  const props = [];
  let match;
  const regex = REGEX_PATTERNS.propsInAttributes;
  
  // Reset regex state
  regex.lastIndex = 0;
  
  while ((match = regex.exec(attributes)) !== null) {
    const propName = match[1];
    const propValue = match[2] !== undefined ? match[2] : match[3];
    props.push({ propName, propValue });
  }
  
  return props;
}

/**
 * Replace props in content with actual values
 * @param {string} content - Content with {props.xxx} placeholders
 * @param {Array} props - Array of { propName, propValue } objects
 * @returns {string} Content with props replaced
 */
function replacePropValues(content, props) {
  let replaced = content;
  
  // Attributes that always need quotes when substituted
  const quotedAttributes = ['hashid', 'id', 'className', 'title', 'alt', 'sid', 'data-', 'aria-'];
  
  for (const { propName, propValue } of props) {
    // Replace {props.propName} with the actual value
    // Also match ${ variant for template literals: ${props.propName} -> value
    const bracesRegex = new RegExp(`\\{props\\.${propName}\\}`, 'g');
    const templateRegex = new RegExp(`\\$\\{props\\.${propName}\\}`, 'g');
    
    replaced = replaced.replace(templateRegex, propValue);  // Handle ${props.xxx} first
    replaced = replaced.replace(bracesRegex, propValue);    // Then handle {props.xxx}
  }
  
  // Add quotes to common attributes that need them
  for (const attr of quotedAttributes) {
    // Pattern: hashid=value -> hashid='value' (if not already quoted)
    replaced = replaced.replace(
      new RegExp(`\\b${attr}=([^\\s>'"\`]+)(?!['\"])`, 'g'),
      `${attr}='$1'`
    );
  }
  
  // Convert JSX template literal syntax to simple string syntax
  // ONLY for src, href, and similar URL-like attributes
  // Pattern: src={`...`} -> src='...'
  // Pattern: href={`...`} -> href='...'
  replaced = replaced.replace(/src=\{`([^`]*)`\}/g, "src='$1'");
  replaced = replaced.replace(/href=\{`([^`]*)`\}/g, "href='$1'");
  
  return replaced;
}

/**
 * Get indentation from content at specified offset
 * @param {string} content - Full content string
 * @param {number} offset - Position of component tag
 * @returns {string} Indentation string
 */
function getIndentationAtOffset(content, offset) {
  const beforeMatch = content.substring(0, offset);
  const lastNewline = beforeMatch.lastIndexOf('\n');
  const lineStart = lastNewline === -1 ? 0 : lastNewline + 1;
  return beforeMatch.substring(lineStart);
}

/**
 * Apply indentation to all lines of content
 * @param {string} content - Content to indent
 * @param {string} indent - Indentation string
 * @returns {string} Indented content
 */
function applyIndentation(content, indent) {
  // Only apply if indent contains only spaces
  if (!indent.match(/^\s*$/)) {
    return content;
  }
  
  return content.split('\n').map((line, i) => {
    return i === 0 ? line : indent + line;
  }).join('\n');
}

/**
 * Extract nested property value from object using dot notation path
 * @param {Object} obj - Object to extract from
 * @param {string} propertyPath - Property path like ".credentials.general"
 * @returns {*} Extracted value or undefined
 */
function extractNestedProperty(obj, propertyPath) {
  let value = obj;
  
  for (const part of propertyPath.split('.').filter(p => p)) {
    value = value[part];
    if (value === undefined) break;
  }
  
  return value;
}

/**
 * Recursively extract doc IDs from sidebar configuration
 * Also includes link.id from category items
 * Excludes release notes sections (type: html followed by category with label '릴리스 노트' or 'Release Notes')
 * @param {Array|Object} config - Sidebar configuration
 * @param {Array} docIds - Accumulator
 * @param {number} index - Current index in array (for skipping release notes)
 * @returns {Array} Array of doc IDs
 */
export function extractDocIds(config, docIds = [], index = 0) {
  if (Array.isArray(config)) {
    // Process array with index tracking to detect and skip release notes patterns
    for (let i = 0; i < config.length; i++) {
      const item = config[i];
      const nextItem = config[i + 1];
      
      // Skip this item if it's a category with release notes label
      // (This is the category that comes after type: html)
      if (item.type === 'category' && 
          nextItem === undefined && // nextItem doesn't exist or is skipped
          (item.label === '릴리스 노트' || item.label === 'Release Notes' || item.label === 'リリースノート' || item.label.toLowerCase() === 'notas de la versión')) {
        continue;
      }
      
      // Skip next item if current is html and next is release notes category
      if (item.type === 'html' && 
          nextItem && 
          nextItem.type === 'category' &&
          (item.label === '릴리스 노트' || item.label === 'Release Notes' || item.label === 'リリースノート' || item.label.toLowerCase() === 'notas de la versión')) {
        i++; // Skip the next item (release notes category)
        continue;
      }
      
      extractDocIds(item, docIds, i);
    }
  } else if (typeof config === 'object' && config !== null) {
    // Skip if this is a release notes category
    if (config.type === 'category' && 
        (config.label === '릴리스 노트' || config.label === 'Release Notes' || config.label === 'リリースノート' || config.label.toLowerCase() === 'notas de la versión')) {
      return docIds;
    }
    
    // Skip html type items (they're just visual separators)
    if (config.type === 'html') {
      return docIds;
    }
    
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
 * Recursively extract doc IDs with depth information from sidebar configuration
 * Useful for tracking hierarchy level of each document
 * @param {Array|Object} config - Sidebar configuration
 * @param {Array} docIds - Accumulator
 * @param {number} depth - Current depth in hierarchy (0-based)
 * @returns {Array} Array of { docId, depth } objects
 */
export function extractDocIdsWithDepth(config, docIds = [], depth = 0) {
  if (Array.isArray(config)) {
    // Process array
    for (let i = 0; i < config.length; i++) {
      const item = config[i];
      const nextItem = config[i + 1];
      
      // Skip this item if it's a category with release notes label
      if (item.type === 'category' && 
          nextItem === undefined &&
          (item.label === '릴리스 노트' || item.label === 'Release Notes')) {
        continue;
      }
      
      // Skip next item if current is html and next is release notes category
      if (item.type === 'html' && 
          nextItem && 
          nextItem.type === 'category' &&
          (nextItem.label === '릴리스 노트' || nextItem.label === 'Release Notes')) {
        i++; // Skip the next item (release notes category)
        continue;
      }
      
      extractDocIdsWithDepth(item, docIds, depth);
    }
  } else if (typeof config === 'object' && config !== null) {
    // Skip if this is a release notes category
    if (config.type === 'category' && 
        (config.label === '릴리스 노트' || config.label === 'Release Notes')) {
      return docIds;
    }
    
    // Skip html type items (they're just visual separators)
    if (config.type === 'html') {
      return docIds;
    }
    
    // Handle link.id for categories
    if (config.link && config.link.type === 'doc' && config.link.id) {
      docIds.push({ docId: config.link.id, depth });
    }
    
    if (config.type === 'doc') {
      docIds.push({ docId: config.id, depth });
    } else if (typeof config === 'string') {
      docIds.push({ docId: config, depth });
    }
    
    // Process items with increased depth
    if (config.items && Array.isArray(config.items)) {
      extractDocIdsWithDepth(config.items, docIds, depth + 1);
    }
  } else if (typeof config === 'string') {
    docIds.push({ docId: config, depth });
  }
  return docIds;
}

/**
 * Recursively extract release note doc IDs from sidebar configuration
 * Only extracts items from release notes sections
 * @param {Array|Object} config - Sidebar configuration
 * @param {Array} docIds - Accumulator
 * @returns {Array} Array of doc IDs
 */
export function extractReleaseNoteIds(config, docIds = [], searchDepth = 0) {
  if (Array.isArray(config)) {
    // In array context: look for release notes category
    for (let i = 0; i < config.length; i++) {
      const item = config[i];
      
      // Check if this is a release notes category
      if (typeof item === 'object' && item !== null && item.type === 'category' && 
          (item.label === '릴리스 노트' || item.label === 'Release Notes' || item.label === 'リリースノート' || (item.label && item.label.toLowerCase() === 'notas de la versión'))) {
        // Found release notes! Process this category and its contents
        // Add the category's link
        if (item.link && item.link.type === 'doc' && item.link.id) {
          docIds.push(item.link.id);
        }
        // Process ALL items within release notes
        if (item.items && Array.isArray(item.items)) {
          for (const subItem of item.items) {
            if (typeof subItem === 'string') {
              docIds.push(subItem);
            } else if (typeof subItem === 'object' && subItem !== null && subItem.type !== 'html') {
              extractReleaseNoteIds(subItem, docIds, 0);
            }
          }
        }
      } else if (typeof item === 'object' && item !== null && item.type === 'category' && searchDepth < 5) {
        // For other categories, search within them for release notes (up to depth 5)
        // Only search items, don't recurse to sub-categories directly
        if (item.items && Array.isArray(item.items)) {
          extractReleaseNoteIds(item.items, docIds, searchDepth + 1);
        }
      }
    }
    return docIds;
  } else if (typeof config === 'object' && config !== null) {
    // For single objects (nested in items), just check if it's a release notes category
    if (config.type === 'category' && 
        (config.label === '릴리스 노트' || config.label === 'Release Notes' || config.label === 'リリースノート' || (config.label && config.label.toLowerCase() === 'notas de la versión'))) {
      // This is a release notes category - include its link and all items
      if (config.link && config.link.type === 'doc' && config.link.id) {
        docIds.push(config.link.id);
      }
      // Process ALL items within release notes
      if (config.items && Array.isArray(config.items)) {
        for (const item of config.items) {
          if (typeof item === 'string') {
            docIds.push(item);
          } else if (typeof item === 'object' && item !== null && item.type !== 'html') {
            extractReleaseNoteIds(item, docIds, 0);
          }
        }
      }
    }
    // Skip html type items
  } else if (typeof config === 'string') {
    docIds.push(config);
  }
  return docIds;
}

/**
 * Recursively extract release note doc IDs with depth information from sidebar configuration
 * Only extracts items from release notes sections with depth tracking
 * @param {Array|Object} config - Sidebar configuration
 * @param {Array} docIds - Accumulator
 * @param {number} depth - Current depth in hierarchy (0-based)
 * @returns {Array} Array of { docId, depth } objects
 */
export function extractReleaseNoteIdsWithDepth(config, docIds = [], depth = 0, searchDepth = 0) {
  if (Array.isArray(config)) {
    // In array context: look for release notes category
    for (let i = 0; i < config.length; i++) {
      const item = config[i];
      
      // Check if this is a release notes category
      if (typeof item === 'object' && item !== null && item.type === 'category' && 
          (item.label === '릴리스 노트' || item.label === 'Release Notes' || item.label === 'リリースノート' || (item.label && item.label.toLowerCase() === 'notas de la versión'))) {
        // Found release notes! Process this category and its contents
        // Add the category's link
        if (item.link && item.link.type === 'doc' && item.link.id) {
          docIds.push({ docId: item.link.id, depth });
        }
        // Process ALL items within release notes
        if (item.items && Array.isArray(item.items)) {
          for (const subItem of item.items) {
            if (typeof subItem === 'string') {
              docIds.push({ docId: subItem, depth: depth + 1 });
            } else if (typeof subItem === 'object' && subItem !== null && subItem.type !== 'html') {
              extractReleaseNoteIdsWithDepth(subItem, docIds, depth + 1, 0);
            }
          }
        }
      } else if (typeof item === 'object' && item !== null && item.type === 'category' && searchDepth < 5) {
        // For other categories, search within them for release notes (up to depth 5)
        // Only search items, don't recurse to sub-categories directly
        if (item.items && Array.isArray(item.items)) {
          extractReleaseNoteIdsWithDepth(item.items, docIds, depth, searchDepth + 1);
        }
      }
    }
    return docIds;
  } else if (typeof config === 'object' && config !== null) {
    // For single objects (nested in items), just check if it's a release notes category
    if (config.type === 'category' && 
        (config.label === '릴리스 노트' || config.label === 'Release Notes' || config.label === 'リリースノート' || (config.label && config.label.toLowerCase() === 'notas de la versión'))) {
      // This is a release notes category - include its link and all items
      if (config.link && config.link.type === 'doc' && config.link.id) {
        docIds.push({ docId: config.link.id, depth });
      }
      // Process ALL items within release notes
      if (config.items && Array.isArray(config.items)) {
        for (const item of config.items) {
          if (typeof item === 'string') {
            docIds.push({ docId: item, depth: depth + 1 });
          } else if (typeof item === 'object' && item !== null && item.type !== 'html') {
            extractReleaseNoteIdsWithDepth(item, docIds, depth + 1, 0);
          }
        }
      }
    }
    // Skip html type items
  } else if (typeof config === 'string') {
    docIds.push({ docId: config, depth });
  }
  return docIds;
}

/**
 * Process file imports recursively to collect all import dependencies
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
    let match;
    const regex = REGEX_PATTERNS.importStatement;
    regex.lastIndex = 0;

    while ((match = regex.exec(importedMdxContent)) !== null) {
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

        // Use centralized cleaning function
        const cleanedContent = cleanMdxContent(importedFileMdxContent);
        
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
 * Resolve Docusaurus path aliases (@site, etc.) to actual file paths
 * @param {string} importPath - Import path with potential @site alias
 * @returns {string} Resolved actual file path
 */
function resolveDocusaurusPath(importPath) {
  if (importPath.startsWith('@site/')) {
    return importPath.replace('@site/', ROOT_DIR + path.sep);
  }
  return importPath;
}

/**
 * Load JSON file and convert to variable assignment
 * For: import specs from '@site/static/specs/bs3_specs.json'
 * Creates: const specs = {...}
 * @param {string} filePath - Path to JSON file
 * @returns {string|null} Variable assignment string or null if failed
 */
function loadJsonAsVariable(filePath, varName) {
  try {
    const resolvedPath = resolveDocusaurusPath(filePath);
    if (fs.existsSync(resolvedPath)) {
      const jsonContent = fs.readFileSync(resolvedPath, 'utf8');
      const jsonData = JSON.parse(jsonContent);
      // Return as inline JavaScript (will be embedded in content)
      return `<script>window.${varName} = ${JSON.stringify(jsonData)};</script>`;
    }
  } catch (error) {
    console.warn(`⚠️  Failed to load JSON file ${filePath}: ${error.message}`);
  }
  return null;
}

/**
 * Process import statements in MDX and replace with actual content
 * Handles: import Component from './path/to/file.mdx'
 * And replaces: <Component /> with the imported file's content
 * Supports nested imports: A imports B, B imports C, etc.
 * Also handles JSON imports: import specs from '@site/static/specs/bs3_specs.json'
 * @param {string} content - MDX content
 * @param {string} basePath - Base directory for relative imports
 * @param {string} currentFilePath - Path of the file being processed (for nested imports)
 * @returns {string} Content with imports processed
 */
export function processImportsInMdx(content, basePath, currentFilePath = '') {
  // Extract all import statements
  const importRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/g;
  const imports = {};
  const jsonVariables = [];
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const componentName = match[1];
    const importPath = match[2];
    
    try {
      // Check if this is a JSON import
      if (importPath.endsWith('.json')) {
        // Try to load JSON file
        let jsonPath = importPath;
        
        // Handle @site alias
        if (jsonPath.startsWith('@site/')) {
          jsonPath = jsonPath.replace('@site/', ROOT_DIR + path.sep);
        } else {
          // Relative path
          jsonPath = path.join(basePath, jsonPath);
        }
        
        if (fs.existsSync(jsonPath)) {
          try {
            const jsonContent = fs.readFileSync(jsonPath, 'utf8');
            const jsonData = JSON.parse(jsonContent);
            // Store JSON data for use in components
            imports[componentName] = JSON.stringify(jsonData);
            console.log(`✓ Loaded JSON: ${componentName} from ${importPath}`);
            continue;
          } catch (error) {
            console.warn(`⚠️  Failed to parse JSON file ${importPath}: ${error.message}`);
            continue;
          }
        } else {
          console.warn(`⚠️  JSON file not found: ${importPath}`);
          continue;
        }
      }
      
      // Resolve the actual file path for MDX/MD files
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
      
      // Use centralized cleaning function
      const cleanedContent = cleanMdxContent(importedMdxContent);
      
      imports[componentName] = cleanedContent;

      // Recursively process nested imports from this file
      const nestedImports = processFileImportsRecursively(normalizedPath);
      Object.assign(imports, nestedImports);
    } catch (error) {
      console.warn(`⚠️  Error loading import ${importPath}: ${error.message}`);
    }
  }

  // Collect imported JSON variable names for later reference
  const jsonVariableNames = new Set();
  for (const [varName, jsonData] of Object.entries(imports)) {
    if (typeof jsonData === 'string' && (jsonData.startsWith('{') || jsonData.startsWith('['))) {
      jsonVariableNames.add(varName);
    }
  }

  // Remove import statements (including optional semicolon and trailing whitespace/newlines)
  let processedContent = content.replace(/import\s+[\w\s]+from\s+['"][^'"]+['"];?\s*\n/g, '');

  // Note: Anno components are left as JSX and will be converted in rehype processing
  // They will be handled by rehypeProcessMdxElements plugin

  // Process JSON imports and create variable assignments for SpecSection components
  // Store JSON data in script block for component access
  let variableDeclarations = '';
  for (const [varName, jsonData] of Object.entries(imports)) {
    // Check if this is JSON data (string that looks like stringified JSON)
    try {
      if (typeof jsonData === 'string' && (jsonData.startsWith('{') || jsonData.startsWith('['))) {
        // This is a JSON import - store as component-accessible variable
        // We'll inject this as a script that runs before MDX processing
        // For now, we'll use a data attribute approach with escaped JSON
        // Replace {varName} or {varName.property} with literal object notation
        const jsonObj = JSON.parse(jsonData);
        
        // Find all SpecSection components with this variable and their property paths
        const specSectionPattern = REGEX_PATTERNS.specSectionWithProperty(varName);
        let specMatch;
        let matchCount = 0;
        
        while ((specMatch = specSectionPattern.exec(processedContent)) !== null) {
          matchCount++;
          const propertyPath = specMatch[1]; // e.g., ".credentials", ".general", etc.
          
          // Extract the nested property value
          const dataValue = extractNestedProperty(jsonObj, propertyPath);
          
          if (dataValue) {
            const escapedJson = Buffer.from(JSON.stringify(dataValue)).toString('base64');
            // Replace this specific SpecSection with its own data
            const fullMatch = specMatch[0];
            processedContent = processedContent.replace(fullMatch, `<SpecSection _jsonData="${escapedJson}" />`);
          }
        }
        
        if (matchCount > 0) {
          console.log(`✓ Found ${matchCount} SpecSection components using ${varName}`);
        }
      }
    } catch (e) {
      console.warn(`Failed to process JSON variable ${varName}:`, e.message);
    }
  }

  // Replace component usage with imported content (for MDX components, not JSON)
  // Filter out JSON imports from component replacement
  const mdxImports = Object.fromEntries(
    Object.entries(imports).filter(([_, value]) => {
      try {
        if (typeof value === 'string' && (value.startsWith('{') || value.startsWith('['))) {
          JSON.parse(value);
          return false; // Skip JSON data
        }
        return true;
      } catch {
        return true; // Include non-JSON
      }
    })
  );

  // Replace MDX component usage with imported content
  // Pattern: <ComponentName props="value" /> or <ComponentName></ComponentName>
  // Must repeat until no more replacements occur to handle nested components
  let previousContent = '';
  let iterationCount = 0;
  const maxIterations = 10; // Prevent infinite loops
  
  while (previousContent !== processedContent && iterationCount < maxIterations) {
    previousContent = processedContent;
    iterationCount++;
    
    for (const [componentName, importedContent] of Object.entries(mdxImports)) {
      // Match self-closing tags with attributes: <ComponentName attr1="val1" attr2="val2" />
      const selfClosingRegex = REGEX_PATTERNS.selfClosingComponent(componentName);
      // Match opening/closing tags with content
      const closingRegex = REGEX_PATTERNS.closingComponent(componentName);
      
      // Handle self-closing tags with props
      processedContent = processedContent.replace(selfClosingRegex, (match, attributes, offset) => {
        let replacedContent = importedContent;
        
        // Extract props from attributes
        const props = extractPropsFromAttributes(attributes);
        replacedContent = replacePropValues(replacedContent, props);
        
        // Apply indentation
        const indent = getIndentationAtOffset(processedContent, offset);
        replacedContent = applyIndentation(replacedContent, indent);
        
        return replacedContent;
      });
      
      // Handle opening/closing tags with content and props
      processedContent = processedContent.replace(closingRegex, (match, attributes, offset) => {
        let replacedContent = importedContent;
        
        // Extract props from attributes
        const props = extractPropsFromAttributes(attributes);
        replacedContent = replacePropValues(replacedContent, props);
        
        // Apply indentation
        const indent = getIndentationAtOffset(processedContent, offset);
        replacedContent = applyIndentation(replacedContent, indent);
        
        return replacedContent;
      });
    }
  }
  
  if (iterationCount >= maxIterations) {
    console.warn(`⚠️  Component replacement reached max iterations (${maxIterations}). Possible circular component references.`);
  }

  // Convert {#anchor} to [#anchor] AFTER props substitution is complete
  // This must be done after props are substituted to avoid any conflicts
  processedContent = processedContent.replace(REGEX_PATTERNS.anchors, '[#$1]');

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
