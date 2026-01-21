#!/usr/bin/env node

/**
 * Example usage script for MDX to HTML converters
 * 
 * This script demonstrates various ways to use the MDX converters
 * Run: node mdx-to-html-examples.mjs
 */

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Run a script with arguments
 * @param {string} script - Script name
 * @param {string[]} args - Arguments
 * @returns {Promise<void>}
 */
function runScript(script, args = []) {
  return new Promise((resolve, reject) => {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Running: node ${script} ${args.join(' ')}`);
    console.log('='.repeat(60));
    
    const child = spawn('node', [script, ...args], {
      cwd: __dirname,
      stdio: 'inherit'
    });

    child.on('close', (code) => {
      if (code === 0) {
        console.log(`✅ Success!\n`);
        resolve();
      } else {
        console.error(`❌ Failed with code ${code}\n`);
        reject(new Error(`Script failed: ${script}`));
      }
    });

    child.on('error', (err) => {
      console.error(`Error: ${err.message}`);
      reject(err);
    });
  });
}

/**
 * Examples collection
 */
const examples = [
  {
    name: 'Example 1: Basic MDX to HTML conversion',
    description: 'Convert bsxplugins sidebar to HTML using basic script',
    script: 'mdx-to-html.mjs',
    args: ['bsxplugins', 'example1-output.html'],
    enabled: true
  },
  {
    name: 'Example 2: Advanced conversion with professional template',
    description: 'Convert bsxplugins with advanced features and professional design',
    script: 'mdx-to-html-advanced.mjs',
    args: [
      '--sidebar', 'bsxplugins',
      '--output', 'example2-output.html',
      '--template', 'professional',
      '--toc',
      '--max-depth', '3'
    ],
    enabled: true
  },
  {
    name: 'Example 3: Simple template with TOC',
    description: 'Convert to HTML with simple template and table of contents',
    script: 'mdx-to-html-advanced.mjs',
    args: [
      '--sidebar', 'bsxplugins',
      '--output', 'example3-output.html',
      '--template', 'simple',
      '--toc'
    ],
    enabled: true
  }
];

/**
 * Main function
 */
async function main() {
  console.log('\n');
  console.log('╔════════════════════════════════════════════════════╗');
  console.log('║     MDX to HTML Converter - Examples                ║');
  console.log('╚════════════════════════════════════════════════════╝');

  // Display available examples
  console.log('\n📋 Available Examples:\n');
  examples.forEach((example, index) => {
    const status = example.enabled ? '✅' : '⏭️ ';
    console.log(`${status} Example ${index + 1}: ${example.name}`);
    console.log(`   Description: ${example.description}`);
    console.log(`   Command: node ${example.script} ${example.args.join(' ')}\n`);
  });

  // Check if specific example was requested
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('\n💡 Usage:\n');
    console.log('  Run all enabled examples:');
    console.log('    node mdx-to-html-examples.mjs\n');
    console.log('  Run specific example:');
    console.log('    node mdx-to-html-examples.mjs 1\n');
    console.log('  Show this help:');
    console.log('    node mdx-to-html-examples.mjs --help\n');
    
    // Run all examples
    try {
      const enabledExamples = examples.filter(e => e.enabled);
      
      for (const example of enabledExamples) {
        try {
          await runScript(example.script, example.args);
        } catch (error) {
          console.error(`Failed to run ${example.name}:`, error.message);
          console.log('Continuing with next example...\n');
        }
      }

      console.log('\n' + '='.repeat(60));
      console.log('📊 Example Execution Summary');
      console.log('='.repeat(60));
      console.log(`Total examples: ${enabledExamples.length}`);
      console.log('\n📁 Generated files:');
      
      // List generated files
      const outputFiles = [
        'example1-output.html',
        'example2-output.html',
        'example3-output.html'
      ];
      
      outputFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
          const size = fs.statSync(filePath).size;
          console.log(`  ✅ ${file} (${(size / 1024).toFixed(2)} KB)`);
        }
      });

      console.log('\n✨ All examples completed successfully!\n');
    } catch (error) {
      console.error('\n❌ Error running examples:', error.message);
      process.exit(1);
    }
  } else if (args[0] === '--help' || args[0] === '-h') {
    // Already displayed help above
    process.exit(0);
  } else if (!isNaN(args[0])) {
    // Run specific example
    const exampleNum = parseInt(args[0], 10);
    const example = examples[exampleNum - 1];

    if (!example) {
      console.error(`❌ Example ${exampleNum} not found`);
      process.exit(1);
    }

    try {
      await runScript(example.script, example.args);
      console.log('\n✨ Example completed successfully!\n');
    } catch (error) {
      console.error('\n❌ Example failed:', error.message);
      process.exit(1);
    }
  } else {
    console.error(`❌ Invalid argument: ${args[0]}`);
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
