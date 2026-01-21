import { loadMdxFile } from './genpdf/loader.mjs';
import fs from 'fs';

// Test with biostation_3 installation.mdx
const docPath = 'device/biostation_3/installation';
const language = 'ko';

try {
  const result = loadMdxFile(docPath, language);
  
  if (result) {
    console.log('✅ Document loaded successfully');
    console.log('');
    console.log('=== MERGED CONTENT ===');
    console.log(result.content);
    console.log('');
    console.log('=== FILE INFO ===');
    console.log('Path:', result.filePath);
    console.log('Content Length:', result.content.length, 'characters');
    
    // Save to debug file
    const debugFile = './debug-merged-content.mdx';
    fs.writeFileSync(debugFile, result.content, 'utf8');
    console.log('');
    console.log(`✅ Merged content saved to: ${debugFile}`);
  } else {
    console.log('❌ Failed to load document');
  }
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
}
