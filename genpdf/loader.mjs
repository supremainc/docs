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
          // Remove JSX expressions BUT PRESERVE {props.xxx} patterns AND {#anchor} patterns
          .replace(/\{(?!props\.[a-zA-Z_]\w*\}|#[a-z0-9\-]+\})[^}]*\}/g, '');
        
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
      
      // Remove JSX/MDX syntax from imported content
      let cleanedContent = importedMdxContent
        // Remove MDX comments
        .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
        // Remove import statements (including optional semicolon)
        .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*/g, '')
        // Remove JSX expressions BUT PRESERVE {props.xxx} patterns AND {#anchor} patterns AND {variable.property} patterns
        .replace(/\{(?!props\.[a-zA-Z_]\w*\}|#[a-z0-9\-]+\}|[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*\})[^}]*\}/g, '');
      
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
        const specSectionPattern = new RegExp(`<SpecSection\\s+data={${varName}((?:\\.[a-zA-Z_]\\w*)+)}\\s*/>`, 'g');
        let specMatch;
        let matchCount = 0;
        
        while ((specMatch = specSectionPattern.exec(processedContent)) !== null) {
          matchCount++;
          const propertyPath = specMatch[1]; // e.g., ".credentials", ".general", etc.
          
          // Extract the nested property value
          let dataValue = jsonObj;
          for (const part of propertyPath.split('.').filter(p => p)) {
            dataValue = dataValue[part];
            if (!dataValue) break;
          }
          
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
      const selfClosingRegex = new RegExp(`<${componentName}([^/>]*)\\s*/?>`, 'g');
      // Match opening/closing tags with content
      const closingRegex = new RegExp(`<${componentName}([^>]*)>.*?</${componentName}>`, 'gs');
      
      // Handle self-closing tags with props
      processedContent = processedContent.replace(selfClosingRegex, (match, attributes, offset) => {
        let replacedContent = importedContent;
        
        // Extract props from attributes
        // Pattern: name="value" or name='value' or name={value} (JSX expression)
        const propRegex = /(\w+)=(?:["']([^"']*?)["']|\{([^}]+)\})/g;
        let propMatch;
        
        while ((propMatch = propRegex.exec(attributes)) !== null) {
          const propName = propMatch[1];
          // Group 2: string value (with quotes), Group 3: JSX expression value (without quotes)
          const propValue = propMatch[2] !== undefined ? propMatch[2] : propMatch[3];
          // Replace {props.propName} with the actual value
          replacedContent = replacedContent.replace(new RegExp(`\\{props\\.${propName}\\}`, 'g'), propValue);
        }
        
        // Detect indentation before the component tag
        const beforeMatch = processedContent.substring(0, offset);
        const lastNewline = beforeMatch.lastIndexOf('\n');
        const lineStart = lastNewline === -1 ? 0 : lastNewline + 1;
        const indent = beforeMatch.substring(lineStart);
        
        // Check if the indent is only spaces
        if (indent.match(/^\s*$/)) {
          // Apply indentation to all lines of the imported content
          replacedContent = replacedContent.split('\n').map((line, i) => {
            return i === 0 ? line : indent + line;
          }).join('\n');
        }
        
        return replacedContent;
      });
      
      // Handle opening/closing tags with content and props
      processedContent = processedContent.replace(closingRegex, (match, attributes, offset) => {
        let replacedContent = importedContent;
        
        // Extract props from attributes
        const propRegex = /(\w+)=(?:["']([^"']*?)["']|\{([^}]+)\})/g;
        let propMatch;
        
        while ((propMatch = propRegex.exec(attributes)) !== null) {
          const propName = propMatch[1];
          // Group 2: string value (with quotes), Group 3: JSX expression value (without quotes)
          const propValue = propMatch[2] !== undefined ? propMatch[2] : propMatch[3];
          // Replace {props.propName} with the actual value
          replacedContent = replacedContent.replace(new RegExp(`\\{props\\.${propName}\\}`, 'g'), propValue);
        }
        
        // Detect indentation before the component tag
        const beforeMatch = processedContent.substring(0, offset);
        const lastNewline = beforeMatch.lastIndexOf('\n');
        const lineStart = lastNewline === -1 ? 0 : lastNewline + 1;
        const indent = beforeMatch.substring(lineStart);
        
        // Check if the indent is only spaces
        if (indent.match(/^\s*$/)) {
          // Apply indentation to all lines of the imported content
          replacedContent = replacedContent.split('\n').map((line, i) => {
            return i === 0 ? line : indent + line;
          }).join('\n');
        }
        
        return replacedContent;
      });
    }
  }
  
  if (iterationCount >= maxIterations) {
    console.warn(`⚠️  Component replacement reached max iterations (${maxIterations}). Possible circular component references.`);
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
