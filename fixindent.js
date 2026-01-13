const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

/**
 * Fix component tags by:
 * 1. Adding blank lines after opening tag and before closing tag
 * 2. Reducing indentation of content inside tags by one level
 */

const PATTERN = 'i18n/es/docusaurus-plugin-content-docs/current/common/*.mdx';
const INDENT_SIZE = 2; // Common indentation in the project

function getIndentLevel(line) {
  const match = line.match(/^(\s*)/);
  return match ? match[1].length : 0;
}

function reduceIndent(content, baseIndent) {
  const lines = content.split('\n');
  
  return lines
    .map((line, index) => {
      if (!line.trim()) return '';
      const currentIndent = getIndentLevel(line);
      const indentToRemove = Math.min(baseIndent, currentIndent);
      return line.slice(indentToRemove);
    })
    .join('\n');
}

function findMatchingCloseTag(content, startPos, tagName) {
  let depth = 1;
  let pos = startPos;
  const openTagPattern = new RegExp(`^<${tagName}\\b`, 'm');
  const closeTagPattern = new RegExp(`^</${tagName}>`, 'm');

  while (depth > 0 && pos < content.length) {
    // Find next open or close tag
    const restContent = content.substring(pos);
    const openMatch = restContent.match(openTagPattern);
    const closeMatch = restContent.match(closeTagPattern);

    let nextOpenPos = openMatch ? pos + restContent.indexOf(openMatch[0]) : Infinity;
    let nextClosePos = closeMatch ? pos + restContent.indexOf(closeMatch[0]) : Infinity;

    if (nextOpenPos < nextClosePos) {
      depth++;
      pos = nextOpenPos + openMatch[0].length;
    } else if (nextClosePos < Infinity) {
      depth--;
      if (depth === 0) return nextClosePos;
      pos = nextClosePos + closeMatch[0].length;
    } else {
      break;
    }
  }

  return -1;
}

function processFileWithPropperNesting(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Detect and store original line ending
  const lineEnding = content.includes('\r\n') ? '\r\n' : '\n';
  // Normalize to LF for processing
  content = content.replace(/\r\n/g, '\n');
  let modified = false;

  // Find component tags that start at line beginning
  // Exclude: Table, NextStep, Head
  const tagStartRegex = /^<(?!Table\b|NextStep\b|Head\b)([A-Z][a-zA-Z0-9]*)\s*([^/>]*)>/gm;
  
  let match;
  const matches = [];
  
  while ((match = tagStartRegex.exec(content)) !== null) {
    const tagName = match[1];
    const attributes = match[2];
    const startPos = match.index + match[0].length;
    const closeTagPos = findMatchingCloseTag(content, startPos, tagName);
    
    if (closeTagPos !== -1) {
      const closeTagLength = `</${tagName}>`.length;
      matches.push({
        fullMatch: content.substring(match.index, closeTagPos + closeTagLength),
        tagName,
        attributes,
        innerContent: content.substring(startPos, closeTagPos),
        startIndex: match.index,
        endIndex: closeTagPos + closeTagLength
      });
    }
  }

  // Process matches in reverse order to maintain correct indices
  for (let i = matches.length - 1; i >= 0; i--) {
    const m = matches[i];
    
    let trimmed = m.innerContent.trim();

    // If content is empty, skip
    if (!trimmed) {
      continue;
    }

    // Check if already has blank lines
    if (trimmed.startsWith('\n\n') && trimmed.endsWith('\n\n')) {
      continue;
    }

    // Get the base indentation from the first non-empty line
    const lines = m.innerContent.split('\n');
    let baseIndent = 0;
    for (const line of lines) {
      if (line.trim()) {
        baseIndent = getIndentLevel(line);
        break;
      }
    }

    // Reduce indentation
    trimmed = reduceIndent(trimmed, baseIndent);

    // Add blank lines before and after content
    const opening = m.attributes.trim() ? `<${m.tagName} ${m.attributes}>` : `<${m.tagName}>`;
    const closing = `</${m.tagName}>`;
    const newContent = `${opening}\n\n${trimmed}\n\n${closing}`;

    content = content.substring(0, m.startIndex) + newContent + content.substring(m.endIndex);
    modified = true;
  }

  if (modified) {
    // Restore original line ending
    content = content.replace(/\n/g, lineEnding);
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

function processFile(filePath) {
  // Keep calling processFileWithPropperNesting until no more changes
  let modified = true;
  let iterationCount = 0;
  const maxIterations = 10;

  while (modified && iterationCount < maxIterations) {
    modified = processFileWithPropperNesting(filePath);
    iterationCount++;
  }

  return iterationCount > 0;
}

function main() {
  const pattern = PATTERN.replace(/\\/g, '/');  // Normalize to forward slashes
  console.log('Pattern:', pattern);
  
  const files = globSync(pattern, { nodir: true, cwd: __dirname });
  
  console.log('Found files:', files.length);
  if (files.length === 0) {
    console.log(`No files found matching pattern: ${pattern}`);
    return;
  }

  let processedCount = 0;
  files.forEach(file => {
    try {
      const filePath = path.join(__dirname, file);
      const result = processFile(filePath);
      console.log(`Processing ${path.basename(filePath)}: ${result ? 'Modified' : 'No changes'}`);
      if (result) {
        console.log(`✓ Fixed: ${file}`);
        processedCount++;
      }
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  });

  console.log(`\nProcessed ${processedCount} file(s) out of ${files.length}`);
}

main();
