// openapi/bsxapi.yaml → openapi/bsxapi-postman-collection.json 변환
// x-tagGroups 기준으로 폴더를 중첩 구성하여 Postman 컬렉션 생성

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const Converter = require('openapi-to-postmanv2');

const INPUT = path.resolve(__dirname, 'openapi/bsxapi.yaml');
const OUTPUT = path.resolve(__dirname, 'static/specs/bsxapi-postman-collection.json');

const spec = yaml.load(fs.readFileSync(INPUT, 'utf8'));
const tagGroups = spec['x-tagGroups'] || [];

// x-tagGroups는 Postman 미지원 속성이므로 변환 전 제거
const specForConversion = { ...spec };
delete specForConversion['x-tagGroups'];

const options = {
  folderStrategy: 'Tags',
  nestedFolderHierarchy: false,
  collapseFolders: true,
};

Converter.convert({ type: 'json', data: specForConversion }, options, (err, result) => {
  if (err || !result.result) {
    console.error('변환 실패:', err || result.reason);
    process.exit(1);
  }

  const collection = result.output[0].data;

  // 변환된 컬렉션에서 tag 이름 → 폴더 오브젝트 매핑
  const tagFolderMap = {};
  for (const folder of collection.item) {
    tagFolderMap[folder.name] = folder;
  }

  // x-tagGroups 기준으로 폴더 재조립
  const reorganized = [];

  for (const group of tagGroups) {
    const { name, tags } = group;

    if (tags.length === 1 && name === tags[0]) {
      // 1:1 매핑 — 그대로 유지
      const folder = tagFolderMap[tags[0]];
      if (folder) reorganized.push(folder);
    } else if (tags.length === 1) {
      // 그룹명과 태그명이 다른 경우 — 그룹명으로 표시
      const folder = tagFolderMap[tags[0]];
      if (folder) reorganized.push({ ...folder, name });
    } else {
      // 다중 태그 — 상위 폴더 아래 하위 폴더로 중첩
      const childFolders = tags.map((tag) => tagFolderMap[tag]).filter(Boolean);
      if (childFolders.length > 0) {
        reorganized.push({ name, item: childFolders });
      }
    }
  }

  // x-tagGroups에 포함되지 않은 태그가 있으면 마지막에 추가 (안전장치)
  const coveredTags = new Set(tagGroups.flatMap((g) => g.tags));
  for (const folder of collection.item) {
    if (!coveredTags.has(folder.name)) {
      console.warn(`경고: x-tagGroups에 없는 태그 "${folder.name}" 가 마지막에 추가됩니다.`);
      reorganized.push(folder);
    }
  }

  collection.item = reorganized;

  fs.writeFileSync(OUTPUT, JSON.stringify(collection, null, 2));
  console.log(`Postman 컬렉션 생성 완료: ${path.relative(process.cwd(), OUTPUT)}`);
  console.log(`총 폴더 수: ${reorganized.length}`);
});
