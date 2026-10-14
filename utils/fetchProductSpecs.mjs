// 제품 스펙 조회 페이지(src/pages/products-specs)용 데이터를 DW API에서 받아 JSON으로 저장합니다.
// API 키가 브라우저에 노출되지 않도록 데이터를 미리 받아 페이지에 포함합니다.
//
// DW API(dw-api.suprema.co.kr)는 사내망 전용이므로 GitHub Actions에서는 호출할 수 없습니다.
// 사내망에서 실행한 뒤 생성된 _specs.json을 preview 브랜치에 커밋하세요.
//
// 사용법: .env에 DW_API_KEY를 설정한 뒤 `yarn fetch:specs` 실행
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

const API_BASE = 'https://dw-api.suprema.co.kr';
const API_KEY = process.env.DW_API_KEY;
const OUTPUT = path.resolve('src/pages/products-specs/_specs.json');
const PAGE_SIZE = 1000;

// 페이지에 표시할 제품 (표시 순서 유지)
const PRODUCTS = [
  'BioStation 3 Max',
  'BioEntry W3',
  'BioStation 2a',
  'BioStation 3',
  'FaceStation F2',
  'FaceStation 2',
  'BioLite N2',
  'BioEntry W2',
  'BioEntry P2',
  'BioEntry R2',
  'X-Station 2',
  'XPass Q2',
  'XPass 2',
  'XPass D2',
  'XPass S2',
  'CoreStation 20',
  'CoreStation',
  'Door Interface',
  'Input Module',
  'Output Module',
  'Door Module',
  'Secure Module',
];

async function fetchProduct(productName) {
  const items = [];
  for (let page = 1; ; page++) {
    const params = new URLSearchParams({
      '$select': 'ModelName,Section,AttributeGroup,AttributeName,AttributeCode,AttributeValue',
      '$filter': `CompanyName eq 'SP' and ProductName eq '${productName.replace(/'/g, "''")}' and AttributeValue ne null`,
      '$orderby': 'DisplayOrder asc',
      '$top': String(PAGE_SIZE),
      '$skip': String((page - 1) * PAGE_SIZE),
    });
    const res = await fetch(`${API_BASE}/api/v1/data/VwPsProductSpecLatest/odata?${params}`, {
      headers: { 'X-Api-Key': API_KEY },
    });
    if (!res.ok) {
      throw new Error(`${productName}: HTTP ${res.status} ${await res.text()}`);
    }
    const { Data } = await res.json();
    items.push(...Data.Items);
    if (page >= (Data.Paging?.TotalPages ?? 1)) {
      return items;
    }
  }
}

// 평면 레코드를 Section > AttributeGroup > Attribute 구조로 묶고, 속성마다 모델별 값을 담습니다.
// (페이지에서 세부 모델을 테이블 열로 비교하기 위한 구조)
// API가 DisplayOrder 순으로 정렬해 주므로 처음 등장한 순서를 그대로 유지합니다.
function groupByProduct(items) {
  const models = [];
  const sections = new Map();
  const attributes = new Map();

  for (const item of items) {
    if (!item.ModelName || !item.Section) continue;
    if (!models.includes(item.ModelName)) models.push(item.ModelName);

    const key = `${item.Section}|${item.AttributeCode}`;
    let attribute = attributes.get(key);
    if (!attribute) {
      if (!sections.has(item.Section)) sections.set(item.Section, []);
      const groups = sections.get(item.Section);

      // 연속된 같은 그룹은 하나로 묶고, 그룹이 없는(null) 속성은 각각 독립된 행으로 둡니다.
      const groupName = item.AttributeGroup ?? null;
      let last = groups[groups.length - 1];
      if (!last || groupName === null || last.name !== groupName) {
        last = { name: groupName, attributes: [] };
        groups.push(last);
      }
      attribute = { code: item.AttributeCode, name: item.AttributeName, values: {} };
      last.attributes.push(attribute);
      attributes.set(key, attribute);
    }
    attribute.values[item.ModelName] = item.AttributeValue;
  }

  return {
    models,
    sections: [...sections].map(([name, groups]) => ({ name, groups })),
  };
}

async function main() {
  if (!API_KEY) {
    throw new Error('DW_API_KEY 환경 변수가 없습니다. .env 파일을 확인하세요.');
  }

  const products = [];
  const missing = [];
  for (const productName of PRODUCTS) {
    const items = await fetchProduct(productName);
    if (items.length === 0) {
      missing.push(productName);
      continue;
    }
    const product = groupByProduct(items);
    products.push({ name: productName, ...product });
    console.log(`${productName}: 모델 ${product.models.length}개, 속성 ${items.length}건`);
  }

  // 데이터가 바뀌지 않았으면 파일을 그대로 두어 updatedAt만 바뀐 커밋이 생기지 않게 합니다.
  const previous = fs.existsSync(OUTPUT) ? JSON.parse(fs.readFileSync(OUTPUT, 'utf8')) : null;
  if (previous && JSON.stringify(previous.products) === JSON.stringify(products)) {
    console.log('변경된 데이터가 없습니다.');
  } else {
    fs.writeFileSync(OUTPUT, JSON.stringify({ updatedAt: new Date().toISOString(), products }, null, 2) + '\n');
    console.log(`저장 완료: ${path.relative(process.cwd(), OUTPUT)}`);
  }

  if (missing.length > 0) {
    console.warn(`데이터가 없는 제품(ProductName 확인 필요): ${missing.join(', ')}`);
  }
}

main().catch((err) => {
  // fetch의 네트워크 오류는 원인(ENOTFOUND 등)이 cause에 들어 있습니다.
  console.error(err.message || err, err.cause ? `(${err.cause.code || err.cause.message})` : '');
  if (err.cause?.code === 'ENOTFOUND') {
    console.error('DW API는 사내망에서만 접속할 수 있습니다. 사내망 연결을 확인하세요.');
  }
  process.exit(1);
});
