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
20. Glossary 처리 (rehypeProcessGlossaryComponent)
21. Treeview 처리 (rehypeProcessTreeviewComponent)
22. MDX 요소 변환 (rehypeProcessMdxElements)
23. Cmd 컴포넌트 처리 (rehypeProcessCmdComponent)
24. Columns 컴포넌트 처리 (rehypeProcessColumnsComponent)
25. BugLists 컴포넌트 처리 (rehypeProcessBugListsComponent)
26. Admonition 아이콘 추가 (rehypeAddCalloutIcons)
27. Note 표시 제거 (rehypeRemoveNoteIndicator)
28. MDX 요소 변환 (rehypeMdxElements)
29. HTML 문자열로 변환 (rehypeStringify)
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
| `rehypeProcessDocLink(basePath, language)` | `<DocLink>` 처리 (inner/docId) | `<DocLink inner="#anchor" />` 또는 `<DocLink docId="..." />` | `<a href="#id">텍스트</a>` |
| `rehypeProcessTreeviewComponent(language)` | `<Treeview>` 처리 | `<Treeview data={...} />` | `<div class="treeview-container">트리</div>` |
| `rehypeProcessGlossaryComponent(language)` | `<Glossary>` 처리 (용어집) | `<Glossary termid="key" />` | `<span class="glossary-term">용어 설명</span>` |
| `rehypeProcessFaqsComponent(docPath, language)` | `<FaqsItems>` 처리 (FAQ) | `<FaqsItems data="IssuesData" />` | `<details><summary>질문</summary>답변</details>` |
| `rehypeProcessMdxElements(translations, basePath, language)` | MDX 요소 변환 (Image 등) | JSX 요소 | HTML 요소 |
| `rehypeProcessColumnsComponent()` | Columns 처리 | `<Columns>` | `<div class="columns">` |
| `rehypeAddAdmonitionIcons(translations)` | Admonition 아이콘 추가 | `<div class="admonition-*">` | 아이콘 + 색상 포함 |
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

1. **`inner` 속성 처리** (현재 문서 내 앵커 링크)
   - 현재 문서의 AST에서 해당 ID를 찾음
   - ID와 일치하는 요소의 텍스트 자동 추출
   - 예: `<DocLink inner="#changeAccountInfo" />` → `<a href="#changeAccountInfo">계정 정보 변경</a>`

2. **`docId` 속성 처리** (타 문서 링크)
   - MDX JSX 요소 `<DocLink docId="..." />`를 감지
   - `#`로 구분되는 앵커 ID 분리 처리
   - 대상 문서의 frontmatter에서 `title` 메타데이터 추출
   - 파일 ID 기반 해시 링크 생성
   - 메타데이터 캐싱으로 I/O 성능 최적화

**처리 흐름**:

```
1. 사전 처리: AST 순회하여 모든 ID와 해당 텍스트 맵핑 (headingMap 구성)
2. 각 <DocLink> 컴포넌트 감지 (flow-level, text-level 모두)
3. inner 속성이 있으면 headingMap에서 텍스트 조회
4. inner 없으면 docId로 다른 문서의 제목 로드
```

**다국어 처리**:

```javascript
// 언어별 문서 경로
ko: docs/platform/biostar_x/settings-manage-device-group.mdx
en: i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-manage-device-group.mdx
es: i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-manage-device-group.mdx
ja: i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-manage-device-group.mdx
```

**변환 예시**:

**1) inner 속성 (현재 페이지 내 앵커)**:

```mdx
## 계정 정보 변경 {#changeAccountInfo}

사용자 이름, 비밀번호, 전화번호를 변경할 수 있습니다. 자세한 내용은 <DocLink inner='#changeAccountInfo' />를 참조하세요.
```

↓ 변환 후

```html
<h2 id="changeAccountInfo">계정 정보 변경</h2>
<p>사용자 이름, 비밀번호, 전화번호를 변경할 수 있습니다. 자세한 내용은 
  <a href="#changeAccountInfo" class="doclink doclink-inner">계정 정보 변경</a>를 참조하세요.</p>
```

**2) docId 속성 (타 문서 링크)**:

```mdx
<DocLink docId='platform/biostar_x/settings-manage-device-group' />
```

↓ 변환 후

```html
<a href="#settings-manage-device-group" class="doclink">장치 그룹 관리하기</a>
```

**3) docId + 앵커 ID (타 문서의 특정 섹션)**:

```mdx
<DocLink docId='platform/biostar_air/adding-individual-users#addingUsersWithMobileApp' />
```

↓ 변환 후

```html
<a href="#addingUsersWithMobileApp" class="doclink">모바일 앱으로 사용자 추가하기</a>
```

(대상 문서의 제목은 로드되지만, href는 `#addingUsersWithMobileApp`으로 현재 문서 내 앵커로 지정)

**CSS 클래스**:

- `.doclink`: 정상 링크 (색상: var(--ifm-color-cmd), 밑줄, 굵은 글씨)
- `.doclink-inner`: 현재 페이지 내 링크 (추가 스타일링 가능)
- `.doclink-missing`: 문서 미존재 (회색, 취소선, 이탤릭)

**캐싱 메커니즘**:

- `docLinkCache`: Map 객체로 `${docId}:${lang}` 키 사용
- 동일 문서 재방문 시 즉시 반환
- 문서 변환 중 I/O 최소화
- headingMap: 현재 문서 AST 기반 ID → 텍스트 맵핑 (매 문서마다 재구성)

**Fallback 처리**:

- **inner 속성**: headingMap에 ID 없으면 anchorId를 텍스트로 사용
- **docId 속성**:
  - 대상 문서 미존재 시: docId를 텍스트로 표시
  - 다른 언어 버전이 없으면: 한국어 버전 사용
  - 제목 미존재 시: 경고 로그 출력 후 docId 사용

**구현 상세**:

```javascript
// headingMap 사전 구성 (tree 순회 시작 전)
const headingMap = new Map();
visit(tree, 'element', (node) => {
  if (node.properties?.id && node.children) {
    const text = extractText(node);
    if (text) {
      headingMap.set(node.properties.id, text);
    }
  }
});

// inner 속성 처리
const innerValue = innerAttr.value;  // "#changeAccountInfo"
const anchorId = innerValue.startsWith('#') ? innerValue.substring(1) : innerValue;
const headingText = headingMap.get(anchorId);  // "계정 정보 변경"

// docId 속성에서 앵커 분리
if (docId.includes('#')) {
  [docId, anchorId] = docId.split('#');
  // docId: "platform/biostar_air/adding-individual-users"
  // anchorId: "addingUsersWithMobileApp"
}
```

**주의사항**:

- `inner` 속성은 **항상 현재 문서 내** 링크만 처리
- `docId` 속성의 `#` 이후는 별도 문서의 앵커이므로, href는 `#anchorId`로 지정됨
- AST 기반 처리이므로 마크다운 파일 읽기 없음 (성능 향상)
- flow-level과 text-level 두 가지 모두 처리 (문장 내 inline 사용 지원)

---

#### `rehypeProcessTreeviewComponent(language)` 상세 설명

**목적**: `<Treeview>` 컴포넌트를 계층 구조의 트리 HTML로 변환

**기능**:

- 기본 데이터셋 로드 (한국어/영어)
- 외부 JSON 데이터 지원 (base64 인코딩)
- 재귀적 트리 노드 생성
- SVG 아이콘 자동 통합

**데이터 로딩 우선순위**:

1. **_jsonData 속성** (loader.mjs에서 인코딩한 JSON)
2. **기본 데이터셋** (언어별 내장 데이터)

**변환 예시**:

```mdx
<Treeview />
```

↓ 변환 후 (기본 데이터)

```html
<div class="treeview-container">
  <div class="tree-node">
    <div class="tree-item level0">
      <span class="tree-label">모든 출입 그룹</span>
    </div>
    <div class="tree-children">
      <div class="tree-node">
        <div class="tree-item level1">
          <span class="tree-toggle">▼</span>
          <span class="tree-label">출입 그룹</span>
        </div>
        <!-- 자식 노드들... -->
      </div>
    </div>
  </div>
</div>
```

**SVG 아이콘 통합**:

- 12개 노드 타입용 SVG 파일 자동 로드 (`static/img/menus/`)
- rehype-parse로 SVG를 HTML AST로 변환
- 각 아이콘에 `height='25'`, `width='auto'` 속성 적용
- elevator-floor는 CSS 스타일링된 원형 div로 렌더링

**지원 노드 타입 및 아이콘**:

| 타입 | SVG 파일 | 설명 |
|------|---------|------|
| `access-level` | ico-aclevel.svg | 출입 등급 📋 |
| `door` | ico-acdoor.svg | 출입문 🚪 |
| `door-device` | ico-door-close.svg | 출입 장치 🔧 |
| `door-sensor` | ico-door-sensor.svg | 센서 📡 |
| `door-relay` | ico-relay-lock.svg | 릴레이 🔌 |
| `door-arm` | ico-arms.svg | 무장 🛡️ |
| `door-camera` | ico-camera-ok.svg | 카메라 📹 |
| `floor-level` | ico-floorlv.svg | 층 등급 📐 |
| `access-zone` | ico-zone.svg | 접근 영역 🗂️ |
| `elevator` | ico-flelev.svg | 엘리베이터 ⬆️ |
| `elevator-device` | ico-elevator.svg | 엘리베이터 장치 ⚙️ |
| `elevator-schedule` | ico-flelevfl.svg | 엘리베이터 스케줄 📅 |

**CSS 클래스**:

- `.treeview-container`: 트리 전체 컨테이너
- `.tree-node`: 각 트리 노드 래퍼
- `.tree-item`: 노드 아이템 (토글/아이콘/라벨 포함)
- `.tree-toggle`: 레벨 1 토글 버튼 (▼)
- `.tree-icon`: 아이콘 컨테이너
- `.tree-svg-icon`: SVG 아이콘 전용 클래스
- `.tree-label`: 노드 라벨 텍스트
- `.tree-children`: 자식 노드 래퍼
- `.level0`, `.level1`, `.level2`, ...`: 깊이 기반 클래스

**데이터 구조**:

```javascript
// 기본 데이터 구조
[
  {
    name: "모든 출입 그룹",
    children: [
      {
        name: "출입 그룹",
        type: "access-group",
        children: [
          {
            name: "출입 등급 A",
            type: "access-level",
            children: [
              {
                name: "출입문 1 - 스케줄",
                type: "door"
              }
            ]
          }
        ]
      }
    ]
  }
]
```

**JSON 데이터 로드 (loader.mjs)**:

```javascript
// MDX 파일에서
import doorTree from '../data/doors.json'
<Treeview data={doorTree} />

// loader.mjs 처리
// JSON을 추출 → base64 인코딩 → _jsonData 속성으로 변환
// <Treeview _jsonData="base64EncodedJson" />

// plugins-rehype.mjs에서 디코딩 → 트리 렌더링
```

---

#### `rehypeProcessGlossaryComponent(language)` 상세 설명

**목적**: Docusaurus의 `<Glossary>` 컴포넌트를 용어집 조회 기능으로 변환

**기능**:

- 용어 ID를 기반으로 `glossary.json`에서 용어 정보 검색
- 용어 설명을 스타일링된 스팬으로 렌더링
- 다국어 용어집 지원 (ko, en, es, ja)
- 없는 용어는 경고 로그 출력

**변환 예시**:

```mdx
계좌를 등록하려면 먼저 <Glossary termid="credential" />를 생성해야 합니다.
```

↓ 변환 후

```html
<p>계좌를 등록하려면 먼저 
  <span class="glossary-term" title="인증에 사용되는 생체 정보, 카드 등">
    증명서
  </span>를 생성해야 합니다.</p>
```

**용어집 데이터 구조** (`i18n/{lang}/glossary.json`):

```json
{
  "credential": {
    "term": "증명서",
    "description": "인증에 사용되는 생체 정보, 카드 등"
  },
  "authentication": {
    "term": "인증",
    "description": "사용자의 신원을 확인하는 과정"
  }
}
```

**CSS 클래스**:

- `.glossary-term`: 용어 스팬 (점선 밑줄, 호버 시 배경색)
- `title` 속성: 용어 설명 (마우스 호버 시 표시)

**다국어 처리**:

- KO: `i18n/ko/glossary.json`
- EN: `i18n/en/glossary.json`
- ES: `i18n/es/glossary.json`
- JA: `i18n/ja/glossary.json`

**Fallback 처리**:

- 언어별 용어집이 없으면 한국어 버전 사용
- 용어가 없으면 경고 로그 출력 및 자리표시자 표시

---

#### `rehypeProcessFaqsComponent(docPath, language)` 상세 설명

**목적**: Docusaurus의 `<FaqsItems>` 컴포넌트를 확장/축약 가능한 FAQ 구조로 변환

**기능**:

- 문서 디렉토리의 JSON 파일에서 FAQ 데이터 로드
- 각 FAQ를 `<details>/<summary>` HTML로 렌더링
- HTML 마크업이 있는 답변 지원 (htmlToAst 헬퍼 사용)
- 다국어 패스 자동 조정
- 캐싱을 통한 중복 로드 방지

**변환 예시**:

```mdx
## FAQ 섹션

<FaqsItems data="CommonIssues" />
```

**JSON 데이터 파일** (예: `platform/biostar_x/faqs/common-issues.json`):

```json
{
  "CommonIssues": [
    {
      "q": "비밀번호를 잊었어요",
      "a": "관리자에게 문의하여 <strong>비밀번호를 재설정</strong>하세요."
    },
    {
      "q": "로그인이 안 되어요",
      "a": "다음을 확인하세요:\n<ul><li>인터넷 연결</li><li>사용자명 확인</li></ul>"
    }
  ]
}
```

↓ 변환 후

```html
<details>
  <summary>비밀번호를 잊었어요</summary>
  <div class="faq-answer">
    관리자에게 문의하여 <strong>비밀번호를 재설정</strong>하세요.
  </div>
</details>

<details>
  <summary>로그인이 안 되어요</summary>
  <div class="faq-answer">
    다음을 확인하세요:
    <ul>
      <li>인터넷 연결</li>
      <li>사용자명 확인</li>
    </ul>
  </div>
</details>
```

**패스 분석**:

- **KO**: `docs/{docDir}/{dataName}.json`
  - 예: `docs/platform/biostar_x/faqs/common-issues.json`
  
- **EN/ES/JA**: `i18n/{lang}/docusaurus-plugin-content-docs/current/{docDir}/{dataName}.json`
  - 예: `i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/faqs/common-issues.json`

**CSS 클래스**:

- `.faq-container`: FAQ 컨테이너 (전체 래퍼)
- `details`: 확장/축약 요소
- `summary`: 질문 제목 (클릭 가능)
- `.faq-answer`: 답변 콘텐츠 영역

**스타일링**:

- 기본: 축약 상태
- 호버: 배경색 변경
- 클릭: 상세 내용 펼침
- 답변에 HTML 마크업 지원 (강조, 리스트 등)

**구현 상세**:

```javascript
// htmlToAst 헬퍼: HTML 문자열을 rehype AST로 변환
function htmlToAst(htmlString) {
  const parser = unified().use(rehypeParse, { fragment: true });
  const ast = parser.parse(htmlString);
  return ast.children || [];
}

// JSON 파일 로드 및 FAQ 렌더링
const dataAttr = node.attributes?.find(attr => attr.name === 'data');
const dataName = dataAttr?.value;  // 예: 'CommonIssues'

// 다국어 경로 구성
const fullDocDir = language === 'ko' 
  ? `./docs/${docDir}`
  : `./i18n/${language}/docusaurus-plugin-content-docs/current/${docDir}`;

// JSON 파일 읽기
const jsonPath = `${fullDocDir}/${dataName}.json`;
const faqData = JSON.parse(readFileSync(jsonPath, 'utf-8'));

// FAQ 항목 렌더링
faqData[dataName].forEach(faq => {
  const summary = { type: 'element', tagName: 'summary', children: [{ type: 'text', value: faq.q }] };
  const answer = { type: 'element', tagName: 'div', properties: { className: 'faq-answer' }, children: htmlToAst(faq.a) };
  
  // <details> 요소 생성
  parent.children.splice(index, 1, { type: 'element', tagName: 'details', children: [summary, answer] });
});
```

**주의사항**:

- JSON 파일명은 `data` 속성 값과 정확히 일치해야 함 (`.json` 제외)
- 답변은 HTML 문자열로 작성 (마크다운 불가)
- 특수문자는 HTML 이스케이프 필요
- 파일 미존재 시 오류 로그 출력 및 컴포넌트 생략

---

#### `rehypeProcessMdxElements(translations, basePath, language)` 상세 설명

**목적**: Docusaurus의 다양한 MDX 요소(Image, SpecSection, Include/Xclude 등)를 정적 HTML 요소로 변환

**기능**:

- **Image 컴포넌트**: `<Image>` → 최적화된 `<img>` 태그
- **SpecSection 컴포넌트**: 제품 특화 섹션 렌더링
- **Include 컴포넌트**: 조건부 콘텐츠 포함/제외
- **Xclude 컴포넌트**: 특정 제품 제외 처리
- **Tabs 컴포넌트**: 탭 인터페이스 변환
- 속성 매핑 및 클래스 적용

**Image 컴포넌트 변환 예시**:

```mdx
<Image src="/img/biostation_3/device-view.png" alt="장치 뷰" width={500} />
```

↓ 변환 후

```html
<figure>
  <img src="/img/biostation_3/device-view.png" alt="장치 뷰" width="500" class="mdx-image" />
  <figcaption>장치 뷰</figcaption>
</figure>
```

**SpecSection 컴포넌트 변환 예시**:

```mdx
<SpecSection>
  <SpecItem label="프로세서" value="ARM Cortex-A53" />
  <SpecItem label="RAM" value="2GB" />
</SpecSection>
```

↓ 변환 후

```html
<div class="spec-section">
  <div class="spec-item">
    <span class="spec-label">프로세서</span>
    <span class="spec-value">ARM Cortex-A53</span>
  </div>
  <div class="spec-item">
    <span class="spec-label">RAM</span>
    <span class="spec-value">2GB</span>
  </div>
</div>
```

**CSS 클래스**:

- `.mdx-image`: 이미지 래퍼
- `.spec-section`: 사양 섹션 컨테이너
- `.spec-item`: 각 사양 항목
- `.spec-label`: 사양 라벨
- `.spec-value`: 사양 값

**지원 컴포넌트 목록**:

| 컴포넌트 | 입력 | 출력 |
|---------|------|------|
| Image | `<Image src="..." alt="..." />` | `<figure><img /></figure>` |
| SpecSection | `<SpecSection><SpecItem /></SpecSection>` | `<div class="spec-section">` |
| Tabs | `<Tabs><TabItem>...</TabItem></Tabs>` | `<div class="tabs-container">` |
| Include | `<Include product="biostation_3" />` | 조건에 따라 표시/숨김 |
| Xclude | `<Xclude product="biostation_3" />` | 해당 제품 제외 시 표시 |

**Fallback 처리**:

- 알 수 없는 컴포넌트는 경고 로그만 출력 (HTML 그대로 유지)
- 필수 속성 부재 시: 자리표시자 값 또는 공백 사용

---

#### `rehypeAddAdmonitionIcons(translations)` 상세 설명

**목적**: Docusaurus의 경고/주의사항(Admonition) 블록에 아이콘과 색상을 추가

**기능**:

- 다섯 가지 Admonition 타입 지원 (note, info, warning, danger, tip)
- 각 타입별 고유 색상 및 SVG 아이콘 자동 삽입
- 다국어 라벨 지원
- CSS 클래스 기반 스타일링

**변환 예시**:

```markdown
:::note
이것은 참고 사항입니다.
:::

:::warning
주의가 필요합니다!
:::
```

↓ 변환 후

```html
<div class="admonition admonition-note">
  <div class="admonition-heading">
    <svg class="admonition-icon" ...><!-- 정보 아이콘 --></svg>
    <h5>노트</h5>
  </div>
  <div class="admonition-content">
    <p>이것은 참고 사항입니다.</p>
  </div>
</div>

<div class="admonition admonition-warning">
  <div class="admonition-heading">
    <svg class="admonition-icon" ...><!-- 경고 아이콘 --></svg>
    <h5>경고</h5>
  </div>
  <div class="admonition-content">
    <p>주의가 필요합니다!</p>
  </div>
</div>
```

**Admonition 타입 및 색상**:

| 타입 | 한국어 라벨 | 색상 | 용도 |
|------|-----------|------|------|
| `note` | 노트 | #8b5cf6 (자주색) | 일반 참고 사항 |
| `info` | 정보 | #0ea5e9 (파랑) | 보충 정보 |
| `tip` | 팁 | #009400 (초록) | 도움이 되는 팁 |
| `warning` | 경고 | #a32343 (어두운 빨강) | 주의 필요 |
| `danger` | 위험 | #ef4444 (빨강) | 중요한 경고 |

**CSS 클래스**:

- `.admonition`: 전체 컨테이너
- `.admonition-{type}`: 타입별 클래스 (note, info, tip, warning, danger)
- `.admonition-heading`: 헤더 영역 (아이콘 + 라벨)
- `.admonition-icon`: SVG 아이콘 (높이 24px)
- `.admonition-content`: 콘텐츠 영역

**스타일링**:

```css
.admonition {
  border-left: 4px solid;
  border-color: var(--admonition-color);
  background-color: rgba(var(--admonition-color-rgb), 0.1);
  padding: 12px 16px;
  margin: 16px 0;
  border-radius: 4px;
}

.admonition-note { border-color: #8b5cf6; }
.admonition-info { border-color: #0ea5e9; }
.admonition-warning { border-color: #a32343; }
.admonition-danger { border-color: #ef4444; }
.admonition-tip { border-color: #009400; }
```

**구현 상세**:

```javascript
const colorMap = {
  info: '#0ea5e9',
  note: '#8b5cf6',
  tip: '#009400',
  warning: '#a32343',
  danger: '#ef4444',
  caution: '#f59e0b'
};

// Admonition 타입 감지 및 아이콘 추가
visit(tree, 'element', (node, index, parent) => {
  if (node.className?.includes('admonition')) {
    const admonitionType = node.className.find(c => c.startsWith('admonition-'));
    const type = admonitionType?.replace('admonition-', '');
    const color = colorMap[type];
    
    // 헤더에 아이콘 삽입
    const heading = node.children.find(child => child.className?.includes('admonition-heading'));
    if (heading) {
      const icon = createSvgIcon(type, color);
      heading.children.unshift(icon);
    }
  }
});
```

**주의사항**:

- Admonition 블록은 Remark 단계에서 처리되고, 이 플러그인은 Rehype 단계에서 아이콘만 추가
- 다국어 라벨은 i18n 설정에서 자동으로 로드되어야 함
- SVG 아이콘 파일은 `static/img/admonition/` 디렉토리에 있어야 함

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
| `loader.mjs` | ~848 | 파일 로드, 문서 ID 추출, Treeview JSON 처리 |
| `converter-rehype.mjs` | ~275 | 마크다운 → HTML 변환 |
| `plugins-remark.mjs` | ~527 | Remark 플러그인 모음 |
| `plugins-rehype.mjs` | ~2519 | Rehype 플러그인 모음 (DocLink, NextStep, Treeview 포함) |
| `html.mjs` | ~234 | HTML 문서 생성 |
| `config.mjs` | ~66 | 설정 및 i18n |
| `utils.mjs` | ~82 | 유틸리티 함수 |
| `default.css` | ~1170 | CSS 스타일시트 (DocLink, NextStep, Treeview 스타일 포함) |

**총 코드량**: ~5,887+ 줄

---

## 주요 기능 및 한계

### 지원 기능 ✅

- [x] Docusaurus MDX 파일 수집
- [x] 다중 언어 지원 (KO, EN, ES, JA)
- [x] 자동 목차 생성
- [x] 제목 깊이 기반 조정
- [x] 산품별 필터링
- [x] 릴리즈 노트 전용 모드
- [x] 커스텀 컴포넌트 지원 (Cmd, DocLink, NextStep, BugLists, SpecSection, Treeview, Columns, etc.)
- [x] Admonition 스타일링
- [x] 외부링크 자동 처리
- [x] 이미지 경로 자동 변환
- [x] Include/Xclude 조건부 포함
- [x] 코드 하이라이팅
- [x] DocLink 컴포넌트 (문서 간 내부 링크)
- [x] NextStep 컴포넌트 (다음 단계 네비게이션)
- [x] Treeview 컴포넌트 (계층 구조 시각화 + SVG 아이콘)

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
