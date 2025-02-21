const fs = require('fs');
const path = require('path');
const propertiesToJson = require('properties-to-json');
const { StringDecoder } = require('string_decoder');

// `string_decoder`를 사용하여 유니코드 변환 함수 정의
const decoder = new StringDecoder('utf8');

const decodeUnicode = (str) => {
  return str.replace(/\\u([\dA-Fa-f]{4})/g, (match, code) => {
    return String.fromCharCode(parseInt(code, 16));
  });
};;

if (!process.argv[2] || !process.argv[3]) {
  console.log('.properties 또는 .json 파일을 입력하세요. e.g. node locale2json message_ko.properties ko.json');
} else {
  const propertiesFile = process.argv[2];
  const exportFile = process.argv[3];
  const filePath = path.join(__dirname, propertiesFile);
  const exportFilePath = path.join(__dirname, '/src/components/Cmd/', exportFile);

  fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
    if (!err) {
      // `.properties`를 JSON으로 변환
      const jsonObject = propertiesToJson(data);

      // JSON 객체의 값을 유니코드에서 일반 문자열로 변환
      Object.keys(jsonObject).forEach((key) => {
        jsonObject[key] = decodeUnicode(jsonObject[key]);
      });

      // JSON 저장
      const json = JSON.stringify(jsonObject, null, 2);
      fs.writeFileSync(exportFilePath, json, 'utf-8');
      console.log(`변환 완료: ${exportFilePath}`);
    } else {
      console.error("파일을 읽는 중 오류 발생", err);
    }
  });
}
