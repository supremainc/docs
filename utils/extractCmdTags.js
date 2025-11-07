const fs = require('fs');
const path = require('path');
const glob = require('glob');

// MDX 파일에서 <Cmd> 태그 내용을 추출하는 함수
function extractCmdTags(content) {
  const cmdTags = [];
  
  // <Cmd>content</Cmd> 패턴 매칭
  const matches = [...content.matchAll(/\<Cmd\>(.*?)\<\/Cmd\>/g)];
  matches.forEach(match => {
    cmdTags.push({
      type: 'content',
      value: match[1].trim()
    });
  });
  
  // <Cmd sid="..." /> 패턴 매칭
  const sidMatches = [...content.matchAll(/\<Cmd\s+sid="([^"]+)"\s*(?:className="([^"]*)")?\s*\/?\>/g)];
  sidMatches.forEach(match => {
    cmdTags.push({
      type: 'sid',
      sid: match[1],
      className: match[2] || null
    });
  });
  
  return cmdTags;
}

// docs/device 경로의 모든 MDX 파일 찾기
const devicePath = path.join(__dirname, 'docs', 'device');
const mdxFiles = glob.sync('**/*.mdx', { cwd: devicePath });

const results = [];

console.log(`Found ${mdxFiles.length} MDX files in docs/device/`);
console.log('Extracting <Cmd> tags...\n');

mdxFiles.forEach(file => {
  const fullPath = path.join(devicePath, file);
  const content = fs.readFileSync(fullPath, 'utf-8');
  const cmdTags = extractCmdTags(content);
  
  if (cmdTags.length > 0) {
    // 파일 내 중복 제거
    const uniqueCmdTags = [];
    const seenTags = new Set();
    
    cmdTags.forEach(tag => {
      const tagKey = tag.type === 'content' 
        ? `content:${tag.value}`
        : `sid:${tag.sid}:${tag.className || ''}`;
      
      if (!seenTags.has(tagKey)) {
        seenTags.add(tagKey);
        uniqueCmdTags.push(tag);
      }
    });
    
    results.push({
      file: `docs/device/${file}`,
      originalTagCount: cmdTags.length,
      uniqueTagCount: uniqueCmdTags.length,
      cmdTags: uniqueCmdTags
    });
    
    console.log(`📄 ${file} (${cmdTags.length} → ${uniqueCmdTags.length}):`);
    uniqueCmdTags.forEach((tag, index) => {
      if (tag.type === 'content') {
        console.log(`  ${index + 1}. <Cmd>${tag.value}</Cmd>`);
      } else {
        const className = tag.className ? ` className="${tag.className}"` : '';
        console.log(`  ${index + 1}. <Cmd sid="${tag.sid}"${className} />`);
      }
    });
    console.log('');
  }
});

// 통계 계산
const totalOriginalTags = results.reduce((sum, result) => sum + result.originalTagCount, 0);
const totalUniqueTags = results.reduce((sum, result) => sum + result.cmdTags.length, 0);
const filesWithCmdTags = results.length;
const contentTypeTags = results.reduce((sum, result) => 
  sum + result.cmdTags.filter(tag => tag.type === 'content').length, 0);
const sidTypeTags = results.reduce((sum, result) => 
  sum + result.cmdTags.filter(tag => tag.type === 'sid').length, 0);

// 고유한 content 값들 추출
const uniqueContents = new Set();
results.forEach(result => {
  result.cmdTags.forEach(tag => {
    if (tag.type === 'content') {
      uniqueContents.add(tag.value);
    }
  });
});

// 최종 JSON 구조 생성
const finalOutput = {
  metadata: {
    extractedAt: new Date().toISOString(),
    totalMdxFiles: mdxFiles.length,
    filesWithCmdTags: filesWithCmdTags,
    totalOriginalTags: totalOriginalTags,
    totalUniqueTagsInFiles: totalUniqueTags,
    totalGlobalUniqueContents: uniqueContents.size,
    contentTypeTags: contentTypeTags,
    sidTypeTags: sidTypeTags,
    duplicateReduction: {
      originalCount: totalOriginalTags,
      uniqueInFilesCount: totalUniqueTags,
      globalUniqueCount: uniqueContents.size,
      fileLevelReductionRate: `${((totalOriginalTags - totalUniqueTags) / totalOriginalTags * 100).toFixed(1)}%`,
      globalReductionRate: `${((totalOriginalTags - uniqueContents.size) / totalOriginalTags * 100).toFixed(1)}%`
    }
  },
  uniqueContents: Array.from(uniqueContents).sort(),
  fileDetails: results,
  summary: {
    topFiles: results
      .sort((a, b) => b.cmdTags.length - a.cmdTags.length)
      .slice(0, 10)
      .map(result => ({
        file: result.file,
        tagCount: result.cmdTags.length
      }))
  }
};

// 결과를 JSON 파일로 저장
const outputFile = path.join(__dirname, 'cmd-tags-extraction.json');
fs.writeFileSync(outputFile, JSON.stringify(finalOutput, null, 2), 'utf-8');

// 고유 content를 key-value 형태로 변환
function generateKey(text, index) {
  // 간단한 키 생성 (접두어 + 인덱스)
  return `ui_${String(index + 1).padStart(3, '0')}`;
}

// 고유 content를 key-value 객체로 생성
const contentKeyValueMap = {};
const sortedContents = Array.from(uniqueContents).sort();

sortedContents.forEach((content, index) => {
  const key = generateKey(content, index);
  contentKeyValueMap[key] = content;
});

// 고유 content를 key-value 형태로 저장
const uniqueContentFile = path.join(__dirname, 'cmd-unique-contents.json');
fs.writeFileSync(uniqueContentFile, JSON.stringify(contentKeyValueMap, null, 2), 'utf-8');

console.log('📊 추출 결과 통계:');
console.log(`- 총 MDX 파일: ${mdxFiles.length}개`);
console.log(`- <Cmd> 태그가 포함된 파일: ${filesWithCmdTags}개`);
console.log(`- 원본 총 태그 수: ${totalOriginalTags}개`);
console.log(`- 파일별 중복 제거 후: ${totalUniqueTags}개`);
console.log(`- 전역 고유 content 수: ${uniqueContents.size}개`);
console.log(`- 중복 제거율: ${finalOutput.metadata.duplicateReduction.globalReductionRate}`);
console.log(`  - <Cmd>content</Cmd> 형태: ${contentTypeTags}개`);
console.log(`  - <Cmd sid="..." /> 형태: ${sidTypeTags}개`);
console.log(`\n📄 생성된 파일:`);
console.log(`- 전체 결과: ${outputFile}`);
console.log(`- 고유 content 목록: ${uniqueContentFile}`);