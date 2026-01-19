import path from 'path';
import fs from 'fs';
import { loadMdxFile } from './genpdf/loader.mjs';

// 현재 파일을 merge
const merged = loadMdxFile('device/biostation_3/getting-started', 'ko');

if (merged) {
  console.log('='.repeat(80));
  console.log('MERGED FILE CONTENT');
  console.log('='.repeat(80));
  console.log(merged.content);
  fs.writeFileSync('./show-merged-output.mdx', merged.content, 'utf8');
} else {
  console.error('Failed to load file');
}
