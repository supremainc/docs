#!/usr/bin/env node

/**
 * Crowdin Download Translations Script
 * 
 * Usage:
 *   node crowdin-download.js --path="/docs/device/vionyx" --l=en-US
 *   node crowdin-download.js --path="/docs/device/vionyx" --l=en-US --file="docs/common/_license.mdx,docs/common/_other.mdx"
 * 
 * Arguments:
 *   --path    : Path to document directory (required)
 *   --l       : Language code (required)
 *   --file    : Comma-separated list of specific files to process (optional)
 */

const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

// Parse command line arguments
const args = process.argv.slice(2);
const argMap = new Map();

for (const arg of args) {
  if (arg.startsWith('--')) {
    const [key, value] = arg.substring(2).split('=');
    argMap.set(key, value);
  }
}

const argPath = argMap.get('path');
const argLang = argMap.get('l');
const argFiles = argMap.get('file');

// Validation
if (!argPath) {
  console.error('[ERROR] --path is required.');
  console.error('Usage: node crowdin-download.js --path="/docs/device/vionyx" --l=en-US');
  process.exit(1);
}

if (!argLang) {
  console.error('[ERROR] --l is required.');
  console.error('Usage: node crowdin-download.js --path="/docs/device/vionyx" --l=en-US');
  process.exit(1);
}

const baseDir = process.cwd();

// Normalize the path separator
const normalizedPath = argPath.replace(/\\/g, '/');

// Check if it's an absolute path (starts with / or C:/)
const isAbsolute = /^(\/|[a-zA-Z]:)/.test(normalizedPath);
let scanDir;

if (isAbsolute) {
  // If it's an absolute path, use it directly
  // Remove leading / if present, then normalize to backslashes
  const cleanPath = normalizedPath.replace(/^\//, '').replace(/\//g, '\\');
  scanDir = /^[a-zA-Z]:/.test(cleanPath) ? cleanPath : path.join(baseDir, cleanPath);
} else {
  // If it's a relative path, join with baseDir
  const winPath = normalizedPath.replace(/\//g, '\\');
  scanDir = path.join(baseDir, winPath);
}

console.log('');
console.log('[Crowdin Download Translations]');
console.log(`  Path     : ${argPath}`);
console.log(`  Language : ${argLang}`);
console.log(`  Scan dir : ${scanDir}`);
console.log('');

// Check if directory exists
if (!fs.existsSync(scanDir)) {
  console.error(`[ERROR] Path not found: ${scanDir}`);
  process.exit(1);
}

let files = [];

if (argFiles) {
  // Use specific files from --file argument
  const fileList = argFiles.split(',').map(f => f.trim());
  for (const file of fileList) {
    const fullPath = path.join(baseDir, file);
    if (fs.existsSync(fullPath)) {
      files.push(fullPath);
    } else {
      console.warn(`[WARN] File not found: ${file}`);
    }
  }
} else {
  // Recursively find all .mdx files in the directory
  function findMdxFiles(dir) {
    const results = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        results.push(...findMdxFiles(itemPath));
      } else if (item.endsWith('.mdx')) {
        results.push(itemPath);
      }
    }
    
    return results;
  }
  
  files = findMdxFiles(scanDir);
}

if (files.length === 0) {
  console.warn('[WARN] No .mdx files found.');
  process.exit(1);
}

console.log(`Found ${files.length} file(s).`);
console.log('');

// Process each file
let successCount = 0;
let failCount = 0;

for (let idx = 0; idx < files.length; idx++) {
  const fullPath = files[idx];
  const relPath = path.relative(baseDir, fullPath);
  
  // Convert to forward slashes and add leading /
  const forwardRelPath = relPath.replace(/\\/g, '/');
  
  // Source path: /docs/device/vionyx/file.mdx
  const src = '/' + forwardRelPath;
  
  // Content path: device/vionyx/file.mdx (strip leading /docs/)
  const cont = forwardRelPath.substring(5); // Remove 'docs/'
  
  // Translation path: /i18n/%two_letters_code%/docusaurus-plugin-content-docs/current/device/vionyx/file.mdx
  const trans = `/i18n/%two_letters_code%/docusaurus-plugin-content-docs/current/${cont}`;
  
  const fileName = path.basename(fullPath);
  console.log(`[${idx + 1}/${files.length}] ${fileName}`);
  console.log(`  --source      : ${src}`);
  console.log(`  --translation : ${trans}`);
  console.log(`  --language    : ${argLang}`);
  console.log('');
  
  try {
    execSync(
      `crowdin download translations --source="${src}" --translation="${trans}" --language=${argLang}`,
      { stdio: 'inherit', shell: process.platform === 'win32' ? 'cmd.exe' : undefined }
    );
    successCount++;
  } catch (error) {
    console.warn(`[WARN] crowdin failed for: ${src}`);
    failCount++;
  }
}

console.log('');
console.log(`Done: ${successCount} file(s) processed successfully.`);
if (failCount > 0) {
  console.log(`${failCount} file(s) failed.`);
}
console.log('');

process.exit(failCount > 0 ? 1 : 0);
