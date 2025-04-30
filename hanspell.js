const fs = require('fs');
const { spellCheckByPNU } = require('hanspell');

// docs.json 파일 경로
const docsFilePath = './docs.json';
const outputFilePath = './spelling_report.json';

async function checkSpelling() {
  try {
    // docs.json 파일 읽기
    const docsData = JSON.parse(fs.readFileSync(docsFilePath, 'utf-8'));

    const report = [];

    console.log('맞춤법 검사를 시작합니다...');

    for (const doc of docsData) {
      const { url, title, description } = doc;

      // description을 \n 단위로 나누기
      const lines = (description || '').split('\n').filter((line) => line.trim() !== '');

      const lineResults = [];

      for (const line of lines) {
        const results = [];
        const end = () => {
          console.log(`검사 완료: ${line}`);
        };
        const error = (err) => {
          console.error(`오류 발생 (${url}): ${err}`);
        };

        // hanspell로 맞춤법 검사
        await new Promise((resolve) => {
          spellCheckByPNU(
            line,
            6000,
            (result) => {
              results.push(result);
            },
            () => {
              resolve(); // 검사 완료 시 Promise 종료
            },
            error
          );
        });

        // 모든 검사 결과 저장
        const lineData = {
          line,
          results,
        };

        lineResults.push(lineData);
      }

      // 문서별 결과 저장
      report.push({
        url,
        title,
        lineResults,
      });
    }

    // 결과를 JSON 파일로 저장
    fs.writeFileSync(outputFilePath, JSON.stringify(report, null, 2), 'utf-8');
    console.log(`맞춤법 검사 완료! 결과는 ${outputFilePath}에 저장되었습니다.`);
  } catch (error) {
    console.error('맞춤법 검사 중 오류가 발생했습니다:', error.message);
  }
}

// 실행
checkSpelling();