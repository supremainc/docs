const fs = require('fs');

const inputFile = 'src/components/Cmd/air/pt.json';
const outputFile = 'src/components/Cmd/air/pt.json';

// 파일을 텍스트로 읽기
let content = fs.readFileSync(inputFile, 'utf8');

// 1단계: \\\\ 를 임시 플레이스홀더로 변경 (이중 백슬래시 보존)
const DOUBLE_BACKSLASH_PLACEHOLDER = '___DOUBLE_BACKSLASH___';
const ESCAPED_QUOTE_PLACEHOLDER = '___ESCAPED_QUOTE___';

content = content.replace(/\\\\\\\\/g, DOUBLE_BACKSLASH_PLACEHOLDER);
content = content.replace(/\\\\"/g, ESCAPED_QUOTE_PLACEHOLDER);

// JSON에서는 작은따옴표를 이스케이프할 필요 없음 - \' -> '
content = content.replace(/\\'/g, "'");

// 2단계: Latin-1 인코딩 문자를 UTF-8로 변환
const replacements = {
  '\\xe1': 'á',  '\\xe3': 'ã',  '\\xe7': 'ç',  '\\xf5': 'õ',
  '\\xed': 'í',  '\\xfa': 'ú',  '\\xe9': 'é',  '\\xf3': 'ó',
  '\\xe0': 'à',  '\\xea': 'ê',  '\\xf4': 'ô',  '\\xfc': 'ü',
  '\\xf1': 'ñ',  '\\xc1': 'Á',  '\\xc3': 'Ã',  '\\xc7': 'Ç',
  '\\xd5': 'Õ',  '\\xcd': 'Í',  '\\xda': 'Ú',  '\\xc9': 'É',
  '\\xd3': 'Ó',  '\\xaa': 'ª',  '\\xba': 'º',  '\\xe2': 'â',
  '\\xb7': '·',  '\\xc2': 'Â',
};

let changedCount = 0;
for (const [escape, char] of Object.entries(replacements)) {
  const beforeCount = content.split(escape).length - 1;
  content = content.split(escape).join(char);
  changedCount += beforeCount;
}

// 3단계: 플레이스홀더를 원래 값으로 복원
content = content.replace(new RegExp(ESCAPED_QUOTE_PLACEHOLDER, 'g'), '\\"');
content = content.replace(new RegExp(DOUBLE_BACKSLASH_PLACEHOLDER, 'g'), '\\\\');

console.log(`총 ${changedCount}개의 인코딩 문제를 수정했습니다.`);

// JSON 파싱하여 유효성 검증
try {
  const data = JSON.parse(content);
  
  // UTF-8로 저장
  fs.writeFileSync(outputFile, JSON.stringify(data, null, 2), 'utf8');
  
  console.log('✓ 파일이 성공적으로 변환되었습니다.');
  console.log(`✓ 총 ${Object.keys(data).length} 개의 항목이 처리되었습니다.`);
  
  // 샘플 출력
  console.log('\n변환 예시:');
  console.log('  welcome_msg:', data.welcome_msg);
  console.log('  settings_menu:', data.settings_menu);
  console.log('  information_menu:', data.information_menu);
  
} catch (error) {
  console.error('✗ JSON 파싱 오류:', error.message);
  const lines = content.split('\n');
  const errorMatch = error.message.match(/line (\d+)/);
  if (errorMatch) {
    const lineNum = parseInt(errorMatch[1]) - 1;
    console.error('\n오류 발생 라인:');
    for (let i = Math.max(0, lineNum - 2); i < Math.min(lines.length, lineNum + 3); i++) {
      console.error(`  ${i + 1}: ${lines[i]}`);
    }
  }
}
