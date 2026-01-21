# MDX to HTML Converter - 설정 및 실행 가이드

## 📦 설치 및 설정

### 1단계: 필요한 패키지 설치

다음 명령어로 필수 의존성을 설치합니다:

```bash
yarn add -D gray-matter commander remark-parse remark-mdx remark-gfm unified unist-util-visit
```

또는 아래와 같이 package.json에 직접 추가하고 `yarn install` 실행:

```json
"devDependencies": {
  "gray-matter": "^4.0.3",
  "commander": "^11.1.0",
  "remark-parse": "^10.0.1",
  "remark-mdx": "^2.2.4",
  "remark-gfm": "^3.0.1",
  "unified": "^10.1.2",
  "unist-util-visit": "^4.1.2"
}
```

### 2단계: 스크립트 확인

생성된 스크립트 파일들:

```
workspace/
├── mdx-to-html.js              ✅ 기본 버전
├── mdx-to-html-advanced.js     ✅ 고급 버전
├── mdx-to-html-examples.js     ✅ 예제 스크립트
├── MDX_TO_HTML_README.md       ✅ 사용 설명서
├── MDX_TO_HTML_SETUP.md        ✅ 이 파일
└── package.json                ✅ npm 스크립트 추가됨
```

### 3단계: Package.json 스크립트 확인

package.json의 `scripts` 섹션에 다음이 추가되었습니다:

```json
"scripts": {
  "mdx-to-html": "node mdx-to-html.js",
  "mdx-to-html:advanced": "node mdx-to-html-advanced.js"
}
```

## 🚀 실행 방법

### 방법 1: npm 스크립트 사용 (권장)

```bash
# 기본 버전
npm run mdx-to-html bsxplugins output.html

# 고급 버전
npm run mdx-to-html:advanced -- --sidebar bsxplugins --output output.html
```

### 방법 2: Node.js 직접 실행

```bash
# 기본 버전
node mdx-to-html.js bsxplugins output.html

# 고급 버전
node mdx-to-html-advanced.js --sidebar bsxplugins --output output.html
```

### 방법 3: 예제 스크립트 실행

```bash
# 모든 예제 실행
node mdx-to-html-examples.js

# 특정 예제만 실행
node mdx-to-html-examples.js 1
node mdx-to-html-examples.js 2
node mdx-to-html-examples.js 3

# 도움말 표시
node mdx-to-html-examples.js --help
```

## 📚 스크립트 선택 가이드

### mdx-to-html.js 사용 시점

✅ 권장 상황:
- 빠른 변환이 필요할 때
- 간단한 HTML이 필요할 때
- 파일 크기를 최소화하고 싶을 때

❌ 부적합한 상황:
- 복잡한 네비게이션이 필요할 때
- 반응형 디자인이 필요할 때
- 고급 스타일링이 필요할 때

### mdx-to-html-advanced.js 사용 시점

✅ 권장 상황:
- 전문적인 문서화가 필요할 때
- 목차와 네비게이션이 중요할 때
- 반응형 디자인이 필요할 때
- 여러 기기에서 보기 좋아야 할 때

❌ 부적합한 상황:
- 매우 큰 문서 (파일 크기가 중요할 때)
- 단순한 인라인 변환만 필요할 때

## 🎯 실제 사용 예제

### 예제 1: BioStar X Plugins 가이드 생성

```bash
npm run mdx-to-html:advanced -- \
  --sidebar bsxplugins \
  --output bsx-plugins-guide.html \
  --template professional
```

결과 파일: `bsx-plugins-guide.html`
- 모든 플러그인 문서가 하나의 파일로 통합
- 자동 목차 생성
- 전문적인 스타일링 적용

### 예제 2: Platform 문서 생성

```bash
node mdx-to-html-advanced.js \
  --sidebar platform \
  --output platform-documentation.html \
  --template professional \
  --max-depth 2 \
  --toc
```

결과 파일: `platform-documentation.html`
- Platform 전체 문서 통합
- 목차 깊이 제한 (2단계)
- 빠른 네비게이션

### 예제 3: 간단한 버전으로 빠르게 생성

```bash
npm run mdx-to-html -- device output.html
```

결과 파일: `output.html`
- Device 섹션 문서 통합
- 최소 스타일링
- 빠른 생성 속도

## ⚙️ 고급 설정

### 템플릿 커스터마이징

`mdx-to-html-advanced.js`의 `getTemplateCSS()` 함수를 수정:

```javascript
function getTemplateCSS(template) {
  const baseCSS = `
    /* 여기에 CSS 추가 */
    body {
      font-family: 'Your Font', sans-serif;
      color: #your-color;
    }
  `;
  return baseCSS;
}
```

### 마크다운 처리 커스터마이징

`markdownToHtml()` 함수에서 변환 규칙 수정:

```javascript
function markdownToHtml(mdContent) {
  let html = escapeHtml(mdContent);
  
  // 커스텀 변환 규칙 추가
  html = html.replace(/\[!NOTE\](.*?)\n\n/gs, 
    '<div class="note">$1</div>');
  
  return html;
}
```

## 🔍 문제 해결

### Q: "Cannot find module" 오류

**원인**: 필수 패키지가 설치되지 않음

**해결책**:
```bash
npm install gray-matter commander remark-parse remark-mdx remark-gfm unified unist-util-visit
```

### Q: "Sidebar key not found" 오류

**원인**: 잘못된 사이드바 키 사용

**해결책**:
```bash
# sidebars.js에서 사용 가능한 키 확인
# 예: bsxplugins, platform, device 등
node mdx-to-html.js --help
```

### Q: 생성된 HTML에서 이미지가 보이지 않음

**원인**: 상대 경로 이미지 링크

**해결책**:
- MDX 파일에서 절대 URL 사용
- 또는 이미지를 절대 URL로 호스팅

### Q: 너무 많은 메모리 사용

**원인**: 매우 큰 문서 처리

**해결책**:
- 단계별로 여러 HTML 생성
- 큰 사이드바를 작은 부분으로 나누기

## 📊 성능 최적화

### 파일 크기 감소

```bash
# 목차 깊이 제한
node mdx-to-html-advanced.js \
  --sidebar bsxplugins \
  --output output.html \
  --max-depth 1

# simple 템플릿 사용
node mdx-to-html-advanced.js \
  --sidebar bsxplugins \
  --output output.html \
  --template simple
```

### 생성 속도 향상

기본 스크립트 사용:
```bash
node mdx-to-html.js bsxplugins output.html
```

## 🔄 CI/CD 통합

### GitHub Actions 예제

```yaml
name: Generate Documentation HTML

on:
  push:
    branches: [main]
    paths: ['docs/**', 'sidebars.js']

jobs:
  generate-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Generate HTML documentation
        run: npm run mdx-to-html:advanced -- \
          --sidebar bsxplugins \
          --output docs-output.html
      
      - name: Upload artifact
        uses: actions/upload-artifact@v3
        with:
          name: documentation-html
          path: docs-output.html
```

## 📝 체크리스트

설치 및 실행 전에 확인하세요:

- [ ] Node.js v14 이상 설치됨
- [ ] npm 또는 yarn 설치됨
- [ ] 필수 패키지 설치됨 (`npm install`)
- [ ] `sidebars.js` 파일이 존재함
- [ ] `docs/` 디렉토리가 존재함
- [ ] MDX 파일들이 올바른 경로에 있음
- [ ] 스크립트 파일들이 루트 디렉토리에 있음

## ✨ 다음 단계

1. **예제 실행**: `node mdx-to-html-examples.js` 실행
2. **출력 확인**: 생성된 HTML 파일을 브라우저에서 열어 확인
3. **스타일 커스터마이징**: 필요에 따라 CSS 수정
4. **자동화**: CI/CD 파이프라인에 통합

## 📞 지원

문제가 발생하면:

1. [MDX_TO_HTML_README.md](./MDX_TO_HTML_README.md) 참고
2. 스크립트의 `--help` 옵션 확인
3. 에러 메시지 자세히 읽기
4. 필요시 스크립트 코드 직접 검토

## 🎓 학습 자료

- [Docusaurus 공식 문서](https://docusaurus.io)
- [참조 프로젝트: mdx-to-email](https://github.com/getvero/mdx-to-email)
- [Unified.js 문서](https://unifiedjs.com)
