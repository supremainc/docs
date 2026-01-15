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
 * Usage: node index.mjs [options]
 * Example: node index.mjs --sidebar bsxplugins --output output.html --template professional
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { program } from 'commander';
import { loadTranslations, ROOT_DIR } from './config.mjs';
import { extractHeadingsFromMarkdown } from './utils.mjs';
import { loadMdxFile, extractDocIds } from './loader.mjs';
import { buildHtmlDocument } from './html.mjs';

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
    console.log(`🌍 Language: ${options.language}`);
    if (options.product) {
      console.log(`🏷️  Product filter: ${options.product}`);
    }
    console.log('');

    // Load sidebars.js
    const sidebarsPath = path.join(ROOT_DIR, 'sidebars.js');
    
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

    // Load translations
    const translations = loadTranslations(options.language);
    console.log(`📚 Translations loaded for language: ${options.language}\n`);

    // Extract doc IDs
    const docIds = extractDocIds(sidebars[sidebarKey]);
    console.log(`📄 Found ${docIds.length} documents in sidebar\n`);

    // Load all MDX files
    const mdxFiles = docIds
      .map(docId => {
        const file = loadMdxFile(docId, options.language);
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
    const htmlContent = await buildHtmlDocument(mdxFiles, title, {
      template: templateType,
      toc: options.toc,
      maxDepth: parseInt(options.maxDepth, 10),
      language: options.language,
      product: options.product,
      translations,
      basePath: ROOT_DIR
    });

    // Write output file
    const outputPath = path.join(ROOT_DIR, outputFile);
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
