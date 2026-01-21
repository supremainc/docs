#!/usr/bin/env node

/**
 * SVG 컴포넌트 매핑 자동 생성 스크립트
 * MDXComponents.js 파일을 파싱하여 SVG import 문을 추출하고
 * genpdf/svg-components-map.js를 자동으로 생성합니다.
 * 
 * 사용법: node utils/generateSvgMap.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const MDX_COMPONENTS_PATH = resolve(__dirname, '../src/theme/MDXComponents.js');
const OUTPUT_PATH = resolve('./svg-components-map.js');

console.log('📖 MDXComponents.js 파싱 중...');
console.log(`📁 입력: ${MDX_COMPONENTS_PATH}`);
console.log(`📁 출력: ${OUTPUT_PATH}\n`);

try {
  // MDXComponents.js 파일 읽기
  const content = readFileSync(MDX_COMPONENTS_PATH, 'utf-8');

  // SVG import 패턴 추출: import IcXxx from '@site/static/img/...'
  const importRegex = /import\s+(\w+)\s+from\s+['"](@site\/static\/img\/[^'"]+)['"];/g;
  
  const svgMap = {};
  let match;
  let count = 0;

  while ((match = importRegex.exec(content)) !== null) {
    const componentName = match[1];
    const imagePath = match[2];
    
    // @site/static 부분을 /static으로 변환
    const normalizedPath = imagePath.replace('@site', '');
    
    svgMap[componentName] = normalizedPath;
    count++;
  }

  if (count === 0) {
    console.error('❌ SVG import를 찾을 수 없습니다.');
    process.exit(1);
  }

  // svg-components-map.js 생성
  const mapContent = `/**
 * SVG 컴포넌트 매핑 테이블
 * 자동 생성됨: utils/generateSvgMap.js
 * 
 * MDXComponents.js의 SVG import 문을 파싱하여 생성되었습니다.
 * 직접 수정하지 말고 스크립트를 실행하여 재생성해주세요.
 */

export const svgComponentsMap = {
${Object.entries(svgMap)
  .sort()
  .map(([name, path]) => `  ${name}: '${path}',`)
  .join('\n')}
};

export const getSvgPath = (componentName) => {
  return svgComponentsMap[componentName] || null;
};
`;

  writeFileSync(OUTPUT_PATH, mapContent, 'utf-8');

  console.log(`✅ SVG 컴포넌트 매핑 생성 완료!`);
  console.log(`📊 총 ${count}개의 SVG 컴포넌트 발견\n`);
  
  // 처음 10개만 표시
  console.log('📋 매핑된 컴포넌트:');
  Object.entries(svgMap)
    .sort()
    .slice(0, 10)
    .forEach(([name, path]) => {
      console.log(`   • ${name}: ${path}`);
    });
  
  if (count > 10) {
    console.log(`   ... 외 ${count - 10}개\n`);
  } else {
    console.log();
  }

  console.log(`✨ 파일 생성: ${OUTPUT_PATH}`);
} catch (error) {
  console.error('❌ 오류 발생:');
  console.error(error.message);
  process.exit(1);
}
