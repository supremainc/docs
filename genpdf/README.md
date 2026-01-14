# MDX to HTML Advanced Converter

이 디렉토리에는 Docusaurus MDX 파일들을 HTML로 변환하는 도구가 포함되어 있습니다.

## 📁 구조

```
genpdf/
├── index.mjs           # 메인 진입점 (CLI 및 실행 로직)
├── config.mjs          # 설정 및 i18n 관리
├── utils.mjs           # 유틸리티 함수
├── converter.mjs       # 마크다운/HTML 변환 함수
├── loader.mjs          # 파일 로딩 및 파싱 함수
└── html.mjs            # HTML 생성 함수
```

## 📦 모듈 설명

### `index.mjs`
- 메인 진입점 및 실행 로직
- CLI 옵션 파싱 (Commander.js)
- 사이드바 설정 로드
- 최종 조정 및 파일 출력

### `config.mjs`
- 다국어(i18n) 번역 로드 (`loadTranslations()`)
- 언어별 문서 경로 관리 (`getDocBasePath()`)
- CSS 파일 로드 (`getTemplateCSS()`)

### `utils.mjs`
- HTML 이스케이핑 (`escapeHtml()`)
- ID 생성 (`generateHeadingId()`)
- 제목 추출 (`extractHeadingsFromMarkdown()`)
- 텍스트 처리 유틸리티

### `converter.mjs`
- Admonition 처리 (:::info, :::note 등) - **다국어 지원**
- Include/Xclude 컴포넌트 처리
- 마크다운 → HTML 변환 (`markdownToHtml()`)
- 리스트, 링크, 코드 블록 등 처리

### `loader.mjs`
- MDX 파일 로드 (`loadMdxFile()`)
- 사이드바 설정 파싱 (`extractDocIds()`)
- Import 문 처리 (`processImportsInMdx()`)

### `html.mjs`
- 목차(TOC) 생성 (`generateTableOfContents()`)
- 최종 HTML 문서 생성 (`buildHtmlDocument()`)

## 🚀 사용 방법

### 기본 사용
```bash
node genpdf/index.mjs --sidebar bsxplugins --output output.html
```

### 옵션
```bash
node genpdf/index.mjs \
  --sidebar bsxplugins          # 사이드바 키
  --output output.html           # 출력 파일 경로
  --template professional        # 템플릿 (simple, professional, documentation)
  --language en                  # 언어 (ko, en, es, ja) - 기본값: ko
  --product biostar_x            # 제품 필터 (쉼표로 구분)
  --toc                          # 목차 생성 (기본값: true)
  --max-depth 3                  # TOC 최대 깊이 (기본값: 3)
```

### npm 스크립트
```bash
yarn mdx-to-html --sidebar bsxplugins --output output.html
```

## 🌍 다국어 지원

admonition 제목이 자동으로 선택한 언어로 번역됩니다:
- `ko` → `i18n/ko/code.json` (기본값)
- `en` → `i18n/en/code.json`
- `es` → `i18n/es/code.json`
- `ja` → `i18n/ja/code.json`

**예시:**
```bash
# 영어 문서 생성
node genpdf/index.mjs -l en --sidebar bsxplugins --output output-en.html

# 스페인어 문서 생성
node genpdf/index.mjs -l es --sidebar bsxplugins --output output-es.html
```

## ✨ 기능

- ✅ 다국어(i18n) 지원
- ✅ Docusaurus admonition 지원 (:::info, :::note, :::warning, :::danger, :::tip, :::caution)
- ✅ Include/Xclude 제품 필터링
- ✅ 자동 목차(TOC) 생성
- ✅ Syntax highlighting 대응
- ✅ 반응형 HTML 설계
- ✅ CSS 자동 로드

## 🔄 마이그레이션 정보

- 원본 파일: `mdx-to-html-advanced.mjs` → `mdx-to-html-advanced.mjs.bak` (백업)
- 새 진입점: `genpdf/index.mjs`
- package.json 업데이트: `mdx-to-html` 스크립트가 새 위치를 가리킵니다

## 📝 라이센스

Suprema Inc.
