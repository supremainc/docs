# genpdf 모듈 개발 사양서

**작성일**: 2026-01-21  
**모듈**: MDX to HTML Advanced Converter  
**목적**: Docusaurus MDX 파일들을 단일 HTML 문서로 변환하여 PDF 생성을 위한 중간 포맷 제공

---

## 📋 목차

1. [시스템 개요](#시스템-개요)
2. [아키텍처](#아키텍처)
3. [주요 모듈](#주요-모듈)
4. [데이터 흐름](#데이터-흐름)
5. [API 문서](#api-문서)
6. [설정 및 i18n](#설정-및-i18n)
7. [플러그인 시스템](#플러그인-시스템)
8. [확장 가능성](#확장-가능성)

---

## 시스템 개요

### 목표

- Docusaurus `sidebars.js`의 문서 구조를 읽어 선택된 섹션의 모든 MDX 파일을 수집
- MDX 파일들을 HTML로 변환하되, Docusaurus 컴포넌트 완벽 지원
- 자동으로 목차(TOC) 생성
- 개별 문서의 깊이 정보 추적하여 제목 레벨 자동 조정
- 릴리즈 노트 전용 모드 (`--rn`) 지원
- 다국어 지원 (KO, EN, ES, JA)

### 핵심 기능

- ✅ CLI 옵션 기반 유연한 문서 생성
- ✅ 산품별 필터링 (Include/Xclude 컴포넌트)
- ✅ 언어별 i18n 지원
- ✅ 상세한 로깅 및 에러 처리
- ✅ 템플릿 기반 CSS 스타일링
- ✅ 반응형 HTML 생성
- ✅ DocLink 컴포넌트 지원 (문서 간 링크)
- ✅ NextStep 컴포넌트 지원 (다음 단계 네비게이션)

---

## 아키텍처

```
┌─────────────────────────────────────────────────────────────────┐
│                     CLI 진입점 (index.mjs)                      │
│  - 옵션 파싱 (Commander)                                        │
│  - sidebars.js 로드 및 검증                                    │
│  - i18n 로드                                                   │
└──────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│                  파일 로더 (loader.mjs)                         │
│  - extractDocIds() / extractDocIdsWithDepth()                   │
│  - extractReleaseNoteIds() / extractReleaseNoteIdsWithDepth()   │
│  - loadMdxFile()                                               │
│  - 깊이 정보 추적                                              │
└──────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│          마크다운 to HTML 변환 (converter-rehype.mjs)           │
│  - Remark 플러그인 파이프라인 (마크다운 수준 변환)              │
│  - Rehype 플러그인 파이프라인 (HTML 수준 변환)                  │
│  - 통합 processor 생성                                         │
└──────────────────────────────────────────────────────────────────┘
                              ↓
         ┌────────────────────┬────────────────────┐
         ↓                    ↓                    ↓
    Remark 플러그인    Rehype 플러그인      코드 검증
    (plugins-        (plugins-           (converter-
     remark.mjs)      rehype.mjs)         rehype.mjs)
         ↓                    ↓                    ↓
    - 주석 제거         - Cmd 컴포넌트       - 깊이 기반
    - 경로 변환         - NextStep 처리      제목 조정
    - 링크 변환         - DocLink 처리
    - Include/Xclude    - BugLists 처리
    - 제목 ID 생성      - 외부링크 처리
    - FAQ 처리          - 테이블 확장
    - 테이블 정규화     - Columns/Column
                        - Admonition 아이콘
                        - Callout 처리
                        - MDX 요소 변환
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│                HTML 문서 생성 (html.mjs)                        │
│  - 제목 추출 및 목차 생성                                       │
│  - 섹션별 HTML 빌드                                            │
│  - CSS 적용                                                   │
│  - 최종 HTML 생성                                              │
└──────────────────────────────────────────────────────────────────┘
                              ↓
                    output.html (PDF 입력)
```

---

## 주요 모듈

### 1. **index.mjs** (진입점)

**책임**:

- CLI 옵션 파싱
- 사이드바 로드 및 유효성 검증
- i18n 로드
- 문서 수집 및 변환 오케스트레이션

**주요 함수**:

- `main()` - 메인 실행 로직
- CLI 옵션 정의:
  - `-s, --sidebar`: 사이드바 키
  - `-o, --output`: 출력 HTML 파일명
  - `-t, --template`: 템플릿 타입 (simple, professional, documentation)
  - `-p, --product`: 산품 필터 (쉼표 구분)
  - `-l, --language`: 언어 코드 (ko, en, es, ja)
  - `--toc`: 목차 생성 여부 (기본: true)
  - `--max-depth`: 목차 최대 깊이 (기본: 3)
  - `--rn`: 릴리즈 노트 전용 모드 (기본: false)

**흐름**:

```
CLI 옵션 파싱
  ↓
sidebars.js 로드 및 키 검증
  ↓
i18n 로드
  ↓
extractDocIds() or extractReleaseNoteIds() 호출
  ↓
loadMdxFile() 반복 호출로 파일 로드
  ↓
buildHtmlDocument() 호출
  ↓
출력 파일 작성
```

---

### 2. **loader.mjs** (문서 수집 및 로드)

**책임**:

- Sidebar 구조 분석
- 문서 ID 추출 (일반 모드 / 릴리즈 노트 모드)
- 깊이 정보 추적
- MDX 파일 로드 및 frontmatter 파싱

**주요 함수**:

#### `extractDocIds(config, docIds = [], index = 0)`

- 일반 모드: 모든 문서 추출 (릴리즈 노트 제외)
- 릴리즈 노트는 `type: 'html'` 다음의 `label: '릴리스 노트'` 카테고리로 감지
- 카테고리의 `link.id` 포함

**반환값**: `['device/biostation_3/index', 'device/biostation_3/safety-instructions', ...]`

#### `extractDocIdsWithDepth(config, docIds = [], depth = 0)`

- 깊이 정보 포함하여 추출
- 제목 레벨 자동 조정에 사용

**반환값**:

```javascript
[
  { docId: 'device/biostation_3/index', depth: 0 },
  { docId: 'device/biostation_3/safety-instructions', depth: 1 },
  ...
]
```

#### `extractReleaseNoteIds(config, docIds = [])`

- 릴리즈 노트만 추출
- 목표: 단순 ID 배열 반환

**반환값**: `['device/biostation_3/release-notes/index', '...141', '...140', ...]`

#### `extractReleaseNoteIdsWithDepth(config, docIds = [], depth = 0)`

- 릴리즈 노트 깊이 정보 포함
- `--rn` 옵션 사용 시 호출됨

**반환값**:

```javascript
[
  { docId: 'device/biostation_3/release-notes/index', depth: 0 },
  { docId: 'device/biostation_3/release-notes/141', depth: 1 },
  ...
]
```

#### `loadMdxFile(docId, language)`

- 파일 로드
- Gray-matter로 frontmatter 추출
- 메타데이터 파싱

**반환값**:

```javascript
{
  docId: 'device/biostation_3/index',
  content: '# 제목\n\n문서 내용...',
  frontmatter: {
    id: 'index',
    title: 'BioStation 3',
    description: '...'
  },
  headingId: 'index',
  headings: [...]
}
```

---

### 3. **converter-rehype.mjs** (마크다운 → HTML 변환)

**책임**:

- 통합 파서/컴파일러 구성
- Remark 플러그인 파이프라인 구성
- Rehype 플러그인 파이프라인 구성

**처리 순서**:

```
1. Markdown 파싱 (remarkParse)
2. GFM 문법 지원 (remarkGfm)
3. MDX 지원 (remarkMdx)
4. 지시문 처리 (remarkDirective, remarkCalloutDirectives)
5. 텍스트 지시문 정규화 (remarkProcessTextDirective)
6. 주석 제거 (remarkRemoveComments)
7. 이미지 경로 변환 (remarkTransformImagePaths)
8. 문서 링크 변환 (remarkTransformDocLinks)
9. 제목 ID 생성 (remarkAddHeadingIds)
10. Include/Xclude 처리 (remarkProcessIncludeXclude)
11. FAQ 처리 (remarkProcessFaqs)
12. 테이블 정규화 (remarkNormalizeTableStructure)
13. 코드 하이라이팅 (remarkPrism)
14. HTML로 변환 (remarkRehype)
15. 깊이 기반 제목 조정 (adjustHeadingLevelsByDepth)
16. HTML 변환 계속 (rehypeExtendedTable)
17. 외부링크 처리 (rehypeAddTargetBlankToExternalLinks)
18. DocLink 처리 (rehypeProcessDocLink)
19. NextStep 처리 (rehypeProcessNextStepComponent)
20. MDX 요소 변환 (rehypeProcessMdxElements)
21. Cmd 컴포넌트 처리 (rehypeProcessCmdComponent)
22. Columns 컴포넌트 처리 (rehypeProcessColumnsComponent)
23. BugLists 컴포넌트 처리 (rehypeProcessBugListsComponent)
24. Admonition 아이콘 추가 (rehypeAddCalloutIcons)
25. Note 표시 제거 (rehypeRemoveNoteIndicator)
26. MDX 요소 변환 (rehypeMdxElements)
27. HTML 문자열로 변환 (rehypeStringify)
```

**주요 함수**:

#### `markdownToHtml(mdContent, translations, productOption, basePath, headingId, docPath, language, docDepth)`

- 메인 변환 함수
- `createProcessor()` 생성 후 실행

**반환값**: HTML 문자열

#### `createProcessor(translations, productOption, basePath, headingId, docPath, language, docDepth)`

- Unified 프로세서 생성
- 모든 플러그인 구성

---

### 4. **plugins-remark.mjs** (Markdown 레벨 플러그인)

**책임**:

- 마크다운 AST 변환
- 이미지 경로 정규화
- 문서 링크 변환
- Include/Xclude 처리
- 제목 ID 생성
- FAQ 컴포넌트 처리

**주요 플러그인**:

| 플러그인 | 설명 |
|---------|------|
| `remarkRemoveComments()` | MDX 주석 제거 |
| `remarkTransformImagePaths(basePath)` | `/img/` → 절대 경로 변환 |
| `remarkProcessTextDirective()` | 텍스트 지시문 정규화 (`:N:` 방지) |
| `remarkTransformDocLinks(docPath, language)` | 문서 링크 변환 (상대 → 절대 / 해시) |
| `remarkAddHeadingIds(headingId)` | 모든 제목에 ID 추가 |
| `remarkProcessIncludeXclude(productOption)` | Include/Xclude 컴포넌트 처리 |
| `remarkNormalizeTableStructure()` | 테이블 구조 정규화 |
| `remarkProcessFaqs(productOption, language)` | FAQ 컴포넌트 처리 |

---

### 5. **plugins-rehype.mjs** (HTML 레벨 플러그인)

**책임**:

- HTML AST 변환
- Docusaurus 컴포넌트 처리 (Cmd, SpecSection, BugLists, Columns, etc.)
- Admonition 스타일링
- 외부링크 처리

**주요 플러그인**:

| 플러그인 | 설명 | 입력 | 출력 |
|---------|------|------|------|
| `rehypeProcessCmdComponent(language)` | `<Cmd>` 처리 | `<Cmd id="key" />` | `<span class="cmd">번역된텍스트</span>` |
| `rehypeAddTargetBlankToExternalLinks()` | 외부링크 처리 | `<a href="http://...">` | `<a href="..." target="_blank">` |
| `rehypeProcessNextStepComponent()` | `<NextStep>` 처리 | `<NextStep><NextItem>` | `<div class="next-step"><a class="next-item">` |
| `rehypeProcessDocLink(basePath, language)` | `<DocLink>` 처리 | `<DocLink docId="..." />` | `<a href="#id">문서제목</a>` |
| `rehypeProcessMdxElements(translations, basePath, language)` | MDX 요소 변환 | JSX 요소 | HTML 요소 |
| `rehypeProcessColumnsComponent()` | Columns 처리 | `<Columns>` | `<div class="columns">` |
| `rehypeAddCalloutIcons()` | Callout 아이콘 추가 | `<div class="callout-*">` | 아이콘 포함 |
| `rehypeRemoveNoteIndicator()` | Note 표시 제거 | Note 타입 callout | 스타일만 적용 |
| `rehypeProcessBugListsComponent()` | BugLists 처리 | `<BugLists>` | `<div class="bug-lists">` |

#### `rehypeProcessNextStepComponent()` 상세 설명

**목적**: Docusaurus의 `<NextStep>` 컴포넌트를 스타일링된 다음 단계 네비게이션으로 변환

**기능**:
- `<NextStep>` 컨테이너를 `<div class="next-step">`으로 변환
- `<NextItem>` 자식 요소를 앵커 태그 `<a class="next-item">`로 변환
- `to` 속성을 `href`로 매핑
- `target` 속성 유지 (있을 경우)

**변환 예시**:
```mdx
<NextStep>
  <NextItem to="/docs/platform/biostar_x/settings-door-add">
    출입문 등록하기
  </NextItem>
</NextStep>
```

↓ 변환 후

```html
<div class="next-step">
  <a href="/docs/platform/biostar_x/settings-door-add" class="next-item">
    출입문 등록하기
  </a>
</div>
```

**CSS 클래스**:
- `.next-step`: 컨테이너 (배경색, 왼쪽 테두리, 패딩)
- `.next-item`: 각 항목 (호버 효과, 스타일 링크)

**스타일링**:
- 왼쪽 테두리: 4px solid (주 색상)
- 배경색: 연한 회색 (#f9f9f9)
- 호버 시: 배경 변경, 그림자 추가

---

#### `rehypeProcessDocLink(basePath, language)` 상세 설명

**목적**: Docusaurus의 `<DocLink>` 컴포넌트를 정적 HTML 링크로 변환

**기능**:

- MDX JSX 요소 `<DocLink docId="..." />`를 감지
- 대상 문서의 frontmatter에서 `title` 메타데이터 추출
- 파일 ID 기반 해시 링크(`#마지막-세그먼트`) 생성
- 메타데이터 캐싱으로 I/O 성능 최적화

**다국어 처리**:

```javascript
// 언어별 문서 경로
ko: docs/platform/biostar_x/settings-manage-device-group.mdx
en: i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-manage-device-group.mdx
es: i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-manage-device-group.mdx
ja: i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-manage-device-group.mdx
```

**변환 예시**:

```mdx
<DocLink docId='platform/biostar_x/settings-manage-device-group' />
```

↓ 변환 후

```html
<a href="#settings-manage-device-group" class="doclink">장치 그룹 관리하기</a>
```

**CSS 클래스**:

- `.doclink`: 정상 링크 (색상: var(--ifm-color-cmd), 밑줄, 굵은 글씨)
- `.doclink-missing`: 문서 미존재 (회색, 취소선, 이탤릭)

**캐싱 메커니즘**:

- `docLinkCache`: Map 객체로 `${docId}:${lang}` 키 사용
- 동일 문서 재방문 시 즉시 반환
- 문서 변환 중 I/O 최소화

**Fallback 처리**:

- 대상 문서 미존재 시: docId를 텍스트로 표시
- 다른 언어 버전이 없으면: 한국어 버전 사용
- 제목 미존재 시: 경고 로그 출력 후 생략

---

### 6. **html.mjs** (HTML 문서 생성)

**책임**:

- 제목 추출
- 목차 생성
- 섹션별 HTML 구성
- 최종 HTML 문서 조립

**주요 함수**:

#### `extractHeadingsFromHtml(htmlContent, maxDepth)`

- 생성된 HTML에서 제목 추출
- 정규식으로 `<h1>` ~ `<h6>` 매칭

**반환값**:

```javascript
[
  { depth: 0, id: 'section-1', text: 'Section 1' },
  { depth: 1, id: 'subsection-1-1', text: 'Subsection 1.1' },
  ...
]
```

#### `generateTocFromHeadings(headings)`

- 제목 배열에서 중첩된 목차 HTML 생성

**반환값**:

```html
<ul>
  <li><a href="#section-1">Section 1</a>
    <ul>
      <li><a href="#subsection-1-1">Subsection 1.1</a></li>
    </ul>
  </li>
</ul>
```

#### `generateTableOfContents(contentHtml, language, maxDepth)`

- 언어별 제목 지정
- 목차 네비게이션 생성

#### `buildHtmlDocument(mdxFiles, title, options)`

- 최종 HTML 문서 조립
- CSS 삽입
- 목차 포함

**옵션**:

```javascript
{
  template: 'professional',      // 템플릿 타입
  toc: true,                     // 목차 생성
  maxDepth: 3,                   // 목차 최대 깊이
  language: 'ko',                // 언어
  product: 'biostation_3',       // 산품 필터
  translations: {...},           // i18n 객체
  basePath: '/path/to/docs',     // 기본 경로
  rn: false                      // 릴리즈 노트 모드
}
```

---

### 7. **config.mjs** (설정 및 i18n)

**책임**:

- i18n 로드
- 문서 기본 경로 결정
- CSS 로드

**주요 함수**:

#### `loadTranslations(language)`

- `i18n/{lang}/code.json` 로드
- 기본값: 한국어

#### `getDocBasePath(language)`

- 문서 경로 결정
- KO: `docs/`
- EN/ES/JA: `i18n/{lang}/docusaurus-plugin-content-docs/current/`

#### `getTemplateCSS(template)`

- `default.css` 로드

---

### 8. **utils.mjs** (유틸리티)

**책임**:

- HTML 이스케이프
- 제목 ID 생성
- AST 노드 처리

**주요 함수**:

| 함수 | 설명 |
|------|------|
| `escapeHtml(text)` | HTML 특수문자 이스케이프 |
| `generateHeadingId(text)` | 제목 텍스트 → ID 변환 |
| `extractText(node)` | AST 노드에서 텍스트 추출 |
| `extractHeadingsFromMarkdown(content)` | 마크다운에서 제목 추출 |

---

## 데이터 흐름

### 일반 모드 (문서 생성)

```
CLI: --sidebar biostation3 --language ko --toc --max-depth 2

↓

[index.mjs] 옵션 파싱
  - sidebar: 'biostation3'
  - language: 'ko'
  - toc: true
  - maxDepth: 2
  - rn: false

↓

[index.mjs] sidebars.js 로드
  - import('./sidebars.js')
  - sidebars['biostation3'] 검증

↓

[index.mjs] i18n 로드
  - loadTranslations('ko')
  - i18n/ko/code.json 파싱

↓

[loader.mjs] extractDocIdsWithDepth() 호출
  - sidebar 구조 순회
  - 깊이 정보 포함하여 ID 추출
  - 릴리즈 노트 제외

반환: [
  { docId: 'device/biostation_3/index', depth: 0 },
  { docId: 'device/biostation_3/safety-instructions', depth: 1 },
  { docId: 'device/biostation_3/getting-started', depth: 1 },
  ...
]

↓

[index.mjs] loadMdxFile() 반복 호출
  - 각 docId마다 파일 로드
  - 깊이 정보 첨부

파일 객체 배열:
[
  {
    docId: 'device/biostation_3/index',
    content: '# BioStation 3\n\n내용...',
    frontmatter: { title: '...' },
    depth: 0,
    ...
  },
  ...
]

↓

[converter-rehype.mjs] markdownToHtml() 호출 (각 파일)
  - Remark 파이프라인 실행
    - 주석 제거
    - 경로 변환
    - Include/Xclude 처리
  - Rehype 파이프라인 실행
    - 깊이 기반 제목 조정 (depth=0 → h1, depth=1 → h2)
    - 컴포넌트 변환
    - 스타일링

↓

[html.mjs] buildHtmlDocument() 호출
  - 모든 파일 HTML 수집
  - 제목 추출
  - 목차 생성 (maxDepth: 2)
  - 최종 HTML 조립:
    - <!DOCTYPE html>
    - <head>CSS</head>
    - <body>
        <header>
        <nav>목차</nav>
        <main>내용</main>
        <footer>
      </body>

↓

[index.mjs] 파일 작성
  - output.html 생성
  - 콘솔 로그 출력

✅ 완료
```

### 릴리즈 노트 모드 (`--rn` 플래그)

```
CLI: --sidebar biostation3 --rn

↓

[loader.mjs] extractReleaseNoteIdsWithDepth() 호출
  - sidebar 구조 순회
  - '릴리스 노트' 레이블 찾음
  - link.id + items 모두 반환

반환: [
  { docId: 'device/biostation_3/release-notes/index', depth: 0 },
  { docId: 'device/biostation_3/release-notes/141', depth: 1 },
  { docId: 'device/biostation_3/release-notes/140', depth: 1 },
  ...
  { docId: 'device/biostation_3/release-notes/100', depth: 1 }
]

↓

[html.mjs] buildHtmlDocument() 호출 시 rn: true 전달
  - 각 <section> 클래스에 'releasenotes' 추가
  - <section class="doc-section releasenotes">

↓

✅ 릴리즈 노트만 HTML로 변환
```

---

## API 문서

### CLI 인터페이스

```bash
node index.mjs [options]
```

**옵션 상세**:

```
-s, --sidebar <key>
  사이드바 키 (sidebars.js의 객체 키)
  기본값: 'bsxplugins'
  예: biostation3, bioentry_p2, corestation

-o, --output <file>
  출력 파일명 (상대 경로)
  기본값: 'output.html'
  예: ./pdf/document.html

-t, --template <type>
  템플릿 타입
  옵션: simple | professional | documentation
  기본값: professional

-p, --product <products>
  산품 필터 (쉼표로 구분)
  예: biostation_3
  예: biostation_3,bioentry_p2
  미지정 시 모든 Include/Xclude 태그 제거

-l, --language <lang>
  문서 언어
  옵션: ko | en | es | ja
  기본값: ko

--toc
  목차 생성 여부
  기본값: true

--max-depth <number>
  목차 최대 깊이 (h1-h6: 0-5)
  기본값: 3
  예: --max-depth 2

--rn
  릴리즈 노트 전용 모드
  플래그 (값 불필요)
  기본값: false
  사용: 릴리즈 노트만 추출 + section에 'releasenotes' 클래스 추가

-h, --help
  도움말 표시
```

**사용 예시**:

```bash
# 기본 설정
node index.mjs

# 커스텀 사이드바
node index.mjs --sidebar biostation3

# 산품 필터링
node index.mjs --sidebar biostation3 --product biostation_3

# 릴리즈 노트
node index.mjs --sidebar biostation3 --rn

# 영어로 생성
node index.mjs --language en --output ./pdf/document-en.html

# 모든 옵션 지정
node index.mjs \
  --sidebar biostation3 \
  --output ./pdf/document.html \
  --template professional \
  --product biostation_3 \
  --language ko \
  --toc \
  --max-depth 2
```

---

## 설정 및 i18n

### 언어 구조

```
i18n/
├── ko/
│   ├── code.json          (번역: 제목, 라벨 등)
│   ├── glossary.json      (용어집)
│   └── docusaurus-plugin-content-docs/
│       └── current/       (KO 문서들)
├── en/
│   ├── code.json
│   ├── glossary.json
│   └── docusaurus-plugin-content-docs/
│       └── current/
├── es/
│   ├── code.json
│   ├── glossary.json
│   └── docusaurus-plugin-content-docs/
│       └── current/
└── ja/
    ├── code.json
    ├── glossary.json
    └── docusaurus-plugin-content-docs/
        └── current/
```

### code.json 구조

```json
{
  "theme.admonition.note": { "message": "참고" },
  "theme.admonition.info": { "message": "정보" },
  "theme.admonition.caution": { "message": "주의" },
  "theme.admonition.warning": { "message": "경고" },
  "theme.admonition.danger": { "message": "위험" },
  "theme.admonition.tip": { "message": "팁" },
  "specs.credentials": { "message": "자격증명" },
  ...
}
```

---

## 플러그인 시스템

### Remark 플러그인 작성 형식

```javascript
export function remarkCustomPlugin(option1, option2) {
  return (tree) => {
    visit(tree, 'nodeType', (node, index, parent) => {
      // 노드 변환 로직
      // tree 구조 수정
    });
  };
}
```

### Rehype 플러그인 작성 형식

```javascript
export function rehypeCustomPlugin() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'custom-element') {
        // HTML 요소 변환
        node.tagName = 'div';
        node.properties.className = ['custom-class'];
      }
    });
  };
}
```

### 플러그인 추가 방법

1. `plugins-remark.mjs` 또는 `plugins-rehype.mjs`에 함수 추가
2. `converter-rehype.mjs`에서 import
3. `createProcessor()` 내 파이프라인에 `.use()` 호출 추가

---

## 확장 가능성

### 새로운 컴포넌트 지원 추가

예: `<NewComponent>` 컴포넌트 지원

**1단계**: `plugins-rehype.mjs`에 플러그인 추가

```javascript
export function rehypeProcessNewComponent() {
  return (tree) => {
    visit(tree, 'mdxJsxFlowElement', (node) => {
      if (node.name === 'NewComponent') {
        node.type = 'element';
        node.tagName = 'div';
        node.properties.className = ['new-component'];
        // 변환 로직
      }
    });
  };
}
```

**2단계**: `converter-rehype.mjs`에서 import

```javascript
import { rehypeProcessNewComponent } from './plugins-rehype.mjs';
```

**3단계**: Processor에 추가

```javascript
.use(rehypeProcessNewComponent)
```

**4단계**: CSS 추가 (`default.css`)

```css
.new-component {
  /* 스타일 정의 */
}
```

### 새로운 마크다운 구문 지원

예: 커스텀 지시문 처리

**1단계**: `plugins-remark.mjs`에 플러그인 추가

```javascript
export function remarkProcessCustomDirective() {
  return (tree) => {
    visit(tree, 'containerDirective', (node) => {
      if (node.name === 'custom') {
        // 처리 로직
      }
    });
  };
}
```

**2단계**: `converter-rehype.mjs`에 통합

---

## 파일 위치 및 크기

| 파일 | 라인 수 | 목적 |
|------|--------|------|
| `index.mjs` | ~166 | CLI 진입점 및 오케스트레이션 |
| `loader.mjs` | ~678 | 파일 로드 및 문서 ID 추출 |
| `converter-rehype.mjs` | ~271 | 마크다운 → HTML 변환 |
| `plugins-remark.mjs` | ~527 | Remark 플러그인 모음 |
| `plugins-rehype.mjs` | ~1808 | Rehype 플러그인 모음 (DocLink, NextStep 포함) |
| `html.mjs` | ~234 | HTML 문서 생성 |
| `config.mjs` | ~66 | 설정 및 i18n |
| `utils.mjs` | ~82 | 유틸리티 함수 |
| `default.css` | ~1170 | CSS 스타일시트 (DocLink, NextStep 스타일 포함) |

**총 코드량**: ~4,802+ 줄

---

## 주요 기능 및 한계

### 지원 기능 ✅

- [x] Docusaurus MDX 파일 수집
- [x] 다중 언어 지원 (KO, EN, ES, JA)
- [x] 자동 목차 생성
- [x] 제목 깊이 기반 조정
- [x] 산품별 필터링
- [x] 릴리즈 노트 전용 모드
- [x] 커스텀 컴포넌트 지원 (Cmd, DocLink, NextStep, BugLists, SpecSection, Columns, etc.)
- [x] Admonition 스타일링
- [x] 외부링크 자동 처리
- [x] 이미지 경로 자동 변환
- [x] Include/Xclude 조건부 포함
- [x] 코드 하이라이팅
- [x] DocLink 컴포넌트 (문서 간 내부 링크)
- [x] NextStep 컴포넌트 (다음 단계 네비게이션)

### 한계 및 주의사항 ⚠️

- PDF 생성은 Prince 등 외부 도구 필요
- 매우 깊은 제목 구조는 제목 레벨 한계로 제한 (h6까지만)
- 이미지 경로는 PDF 생성을 고려한 절대 경로로 변환됨
- MDX 문법 오류는 변환 중 중단
- 매우 큰 문서 집합은 성능 영향 가능

---

## 향후 개선 사항

1. **캐싱**: 자주 변환되는 파일 캐싱
2. **병렬 처리**: 여러 파일 동시 변환
3. **Watch 모드**: 파일 변경 감지 자동 재생성
4. **커스텀 템플릿**: 사용자 정의 템플릿 지원
5. **플러그인 시스템**: 확장 플러그인 동적 로드
6. **성능 최적화**: 큰 문서 집합 처리 속도 개선

---

## 참고 자료

- **Docusaurus**: <https://docusaurus.io/>
- **Remark**: <https://remark.js.org/>
- **Rehype**: <https://github.com/rehypejs/rehype>
- **Unified**: <https://unifiedjs.com/>
- **Gray-matter**: <https://github.com/jonschlinkert/gray-matter>
- **Commander.js**: <https://github.com/tj/commander.js>

---

**문서 작성**: 2026-01-21  
**최종 업데이트**: 2026-01-22 (DocLink, NextStep 기능 추가)  
**버전**: 1.2  
**상태**: 완료
