const fs = require('fs');
const path = require('path');

// 파일 경로 설정
const cmdUniqueContentsPath = path.join(__dirname, 'cmd-unique-contents.json');
const koJsonPath = path.join(__dirname, 'src/components/Cmd/ko.json');
const enJsonPath = path.join(__dirname, 'src/components/Cmd/en.json');
const outputPath = path.join(__dirname, 'cmd-unique-contents-en.json');

// JSON 파일들 로드
const cmdUniqueContents = JSON.parse(fs.readFileSync(cmdUniqueContentsPath, 'utf-8'));
const koJson = JSON.parse(fs.readFileSync(koJsonPath, 'utf-8'));
const enJson = JSON.parse(fs.readFileSync(enJsonPath, 'utf-8'));

// 매칭 결과를 저장할 객체
const englishMappings = {};
const matchLog = [];
const notFoundLog = [];

console.log('🔍 한국어-영어 매칭을 시작합니다...');
console.log(`- cmd-unique-contents.json: ${Object.keys(cmdUniqueContents).length}개 항목`);
console.log(`- ko.json: ${Object.keys(koJson).length}개 항목`);
console.log(`- en.json: ${Object.keys(enJson).length}개 항목\n`);

// cmd-unique-contents.json의 각 항목을 처리
Object.entries(cmdUniqueContents).forEach(([key, koreanValue]) => {
  // 1. ko.json에서 일치하는 값을 가진 첫 번째 키 찾기
  const matchingKoKey = Object.keys(koJson).find(koKey => koJson[koKey] === koreanValue);
  
  if (matchingKoKey) {
    // 2. en.json에서 동일한 키의 영어 값 찾기
    const englishValue = enJson[matchingKoKey];
    
    if (englishValue) {
      englishMappings[key] = englishValue;
      matchLog.push({
        key: key,
        korean: koreanValue,
        english: englishValue,
        mappingKey: matchingKoKey
      });
      console.log(`✅ ${key}: "${koreanValue}" → "${englishValue}"`);
    } else {
      // ko.json에는 있지만 en.json에는 없는 경우
      englishMappings[key] = koreanValue; // 한국어 그대로 유지
      notFoundLog.push({
        key: key,
        korean: koreanValue,
        reason: 'en.json에서 키를 찾을 수 없음',
        mappingKey: matchingKoKey
      });
      console.log(`⚠️  ${key}: "${koreanValue}" → (영어 없음, 한국어 유지)`);
    }
  } else {
    // ko.json에서 일치하는 값을 찾을 수 없는 경우
    englishMappings[key] = koreanValue; // 한국어 그대로 유지
    notFoundLog.push({
      key: key,
      korean: koreanValue,
      reason: 'ko.json에서 일치하는 값을 찾을 수 없음'
    });
    console.log(`❌ ${key}: "${koreanValue}" → (매칭 없음, 한국어 유지)`);
  }
});

// 결과 파일 저장
fs.writeFileSync(outputPath, JSON.stringify(englishMappings, null, 2), 'utf-8');

// 통계 출력
console.log('\n📊 매칭 결과 통계:');
console.log(`- 성공적으로 매칭된 항목: ${matchLog.length}개`);
console.log(`- 매칭되지 않은 항목: ${notFoundLog.length}개`);
console.log(`- 총 처리된 항목: ${Object.keys(cmdUniqueContents).length}개`);
console.log(`- 매칭률: ${((matchLog.length / Object.keys(cmdUniqueContents).length) * 100).toFixed(1)}%`);

// 상세 로그 파일 생성
const detailedLog = {
  summary: {
    totalItems: Object.keys(cmdUniqueContents).length,
    matchedItems: matchLog.length,
    notFoundItems: notFoundLog.length,
    matchRate: `${((matchLog.length / Object.keys(cmdUniqueContents).length) * 100).toFixed(1)}%`
  },
  matched: matchLog,
  notFound: notFoundLog
};

const logPath = path.join(__dirname, 'cmd-mapping-log.json');
fs.writeFileSync(logPath, JSON.stringify(detailedLog, null, 2), 'utf-8');

console.log(`\n📄 생성된 파일:`);
console.log(`- 영어 매핑 파일: ${outputPath}`);
console.log(`- 상세 로그 파일: ${logPath}`);

// 매칭되지 않은 항목들 요약 출력
if (notFoundLog.length > 0) {
  console.log(`\n❗ 매칭되지 않은 항목들:`);
  notFoundLog.slice(0, 10).forEach(item => {
    console.log(`   ${item.key}: "${item.korean}" (${item.reason})`);
  });
  if (notFoundLog.length > 10) {
    console.log(`   ... 및 ${notFoundLog.length - 10}개 더`);
  }
}