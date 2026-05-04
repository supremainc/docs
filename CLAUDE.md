# Suprema Docs — AI Agent Guidelines

이 저장소는 슈프리마(Suprema)의 공식 제품 문서 사이트입니다. <https://docs.supremainc.com>

이 저장소를 사용하는 사용자는 슈프리마(<https://www.suprema.co.kr/)의> 모든 제품에 대한 사용자 가이드 및 기술 문서를 만드는 테크니컬 라이터입니다.

Docusaurus 기반의 정적 사이트 생성기를 사용하며, 다국어 지원과 PDF 생성 기능을 포함합니다.

## 문서 작성 및 개발 지침

사용자의 질문을 바탕으로 가장 적절한 전문가 역할을 식별하고 채택하여 철저하게 답변하세요. 그런 다음 답변시, 'Role:[선택한 역할]' 형식으로 선택한 역할을 명시하고, 해당 역할로서 답변하세요.

우리는 당신으로부터 문장에 대한 논리적인 적합성, 한국어 문법에 맞는 문장 구조, 사용자 친화적인 문장 작성법 등 테크니컬 라이터 관점으로 대화하길 원합니다.

## 시작하기 전에

### 슈프리마 소개

## 회사 소개

슈프리마는 출입 통제, 근태 관리, 생체 인식 솔루션 분야의 세계적인 선도 기업입니다. 슈프리마는 세계적으로 인정받는 생체 인식 알고리즘과 탁월한 엔지니어링 기술을 결합하여 지난 수십 년간 보안 업계에 혁신을 가져왔습니다. 슈프리마의 광범위한 포트폴리오에는 생체 인식 출입 통제 시스템, 근태 관리 솔루션, 지문 라이브 스캐너, 모바일 인증 솔루션, 내장형 지문 모듈이 포함됩니다. 슈프리마는 세계 50대 보안 제조업체로 선정되었으며, 140여 개국에 글로벌 판매 네트워크를 구축하고 있으며, EMEA 지역에서 생체 인식 출입 통제 시장 점유율 1위를 기록하고 있습니다.

## 프로젝트 개요

**스택**

- Docusaurus 3.9.2 (정적 사이트 생성기)
- React 19 + TypeScript
- Tailwind CSS 3.4.3
- Node.js 20+ (yarn 패키지 매니저)

**주요 기능**

- 다국어 문서 (한국어, 영어, 일본어, 스페인어)
- 검색 (Algolia)
- PDF 생성 (princexml 기반)
- OpenAPI 문서 (Redocusaurus)
- 이미지 줌, 유튜브 임베드 등

## 개발 환경 구축

```bash
# 의존성 설치
yarn

# 로컬 개발 서버 시작 (기본값: http://localhost:3000)
yarn start

# preview 컨텍스트로 시작
yarn start:preview

# 빌드
yarn build

# 빌드 (preview)
yarn build:preview
```

## 디렉토리 구조

```
.
├── docs/              # 문서 콘텐츠 (MDX)
├── i18n/              # 다국어 문서 콘텐츠 (MDX)
├── src/               # 커스텀 컴포넌트, 플러그인, 테마 오버라이드
│   ├── components/    # 재사용 React 컴포넌트
│   ├── plugins/       # Docusaurus 플러그인 (번역 등)
│   └── css/           # 글로벌 스타일
├── blog/              # 블로그 콘텐츠
├── static/            # 정적 자산 (로고, 이미지 등)
├── docusaurus.config.js  # Docusaurus 설정
├── sidebars.js        # 사이드바 구조
└── package.json
```

## 주요 규칙 및 관례

### 1. 문서 작성 스타일

- **기준**: Microsoft Technical Writing Style Guide
- **원칙**: 명확성, 간결성, 능동태, 사용자 중심 표현
- **언어**: 한국어 (ko), 영어 (en), 일본어 (ja), 스페인어 (es)

#### 문서 유형

기술 문서는 다음 세 가지 유형으로 작성합니다:

1. **Tutorial** - 기초 개념 학습
2. **How-to guide** - 특정 작업 수행
3. **Reference guide** - 상세 정보 및 참조

#### 문체 및 표현 규칙

- "~경우" 표현을 자제하고 "~때", "~시" 등 자연스러운 표현 사용
- 기술 용어는 사용자가 이해하기 쉬운 표현으로 풀어서 설명
- 명령형 문체 사용 ("하세요", "클릭하세요")

### 2. How-to Guide 구조

설정 변경, 기능 사용법 등 실행 중심 문서는 다음 구조를 따르세요:

1. **상황/목적 (Why)** - 언제, 왜 이 작업이 필요한지
2. **실행 방법 (How)** - 단계별 실행 방법
3. **상세 정보 (What)** - 각 구성 요소에 대한 참조 정보

**구조 선택 기준:**

- 사용자 중심 설계: 실제 업무 흐름과 일치하는 순서
- 인지 부하 최소화: 필요한 정보만 단계적으로 제시
- 실용성 우선: 즉시 실행 가능한 정보를 앞에 배치
- 스캔 가능성: 급한 사용자가 원하는 정보만 빠르게 찾을 수 있도록

### 3. MDX 작성

- 파일명: kebab-case (예: `getting-started.mdx`)
- 제목: yaml 구성의 title 값
- 코드 블록: 언어 지정 필수 (예: ` ```typescript `)
- 이미지: 상대 경로 사용: Image 컴포넌트 사용할 것

### 4. 브랜치 관리

- `main`: 프로덕션 문서 (배포 대상: https://docs.supremainc.com)
- `preview`: 개발/테스트 버전 (배포 대상: https://supremainc.github.io/docs)
- PR은 preview → main 순서로 진행
- 브랜치명: descriptive (예: `fix/typo-auth-guide`)

### 5. 다국어 지원 (국제화)

- `docs/**/*.md` → 기본 (한국어)
- `/i18n/en/` → 영어 버전
- `/i18n/es/` → 스페인어 버전
- `/i18n/ja/` → 일본어 버전
- 번역 관련 스크립트: `yarn translate`, `yarn translate:file`
- 영어 번역 시 주의사항은 [SKILL_ENGLISH_TRANSLATION.md](.github/SKILL_ENGLISH_TRANSLATION.md) 참조

### 6. PDF 생성

- 프린트 스타일: `./genpdf/default.css`
- 생성 명령어: `generatepdf.bat` (CMD 환경에서 실행, 설정 필요)

## 일반적인 개발 작업

### 새 페이지 추가

1. `docs/` 또는 `/i18n/en/` 에 MDX 파일 생성
2. `sidebars.js` 에 항목 추가
3. `yarn start` 에서 미리보기 확인

### 컴포넌트 수정 또는 추가

1. `src/components/` 또는 `src/css/` 에서 수정
2. Docusaurus 테마 오버라이드: `src/theme/` (필요시)
3. Docusaurus 캐시 초기화: `yarn clear` (필요시)

### 이미지/자산 최적화

- `yarn sizeOfimages` / `yarn sizeOfimages:preview`

### 번역/국제화

- Crowdin에 업로드하여 번역 작업 진행 후 해당 언어 파일을 다운로드하기
- Crowdin 업로드 명령어:
  - 영어/일본어: `crowdin upload --config=./crowdin.yml`
  - 스페인어: `crowdin upload --config=./crowdin-13.yml`
- Crowdin 다운로드 명령어:
  - 영어/일본어: `crowdin download --config=./crowdin.yml`, `crowdin download --config=./crowdin.yml -l en-US`, `crowdin download --config=./crowdin.yml -l ja`
  - 스페인어: `crowdin download --config=./crowdin-13.yml`

## 배포 및 서빙

```bash
# main 사이트(docs.supremain.com) 배포, main 브랜치에서
sh main-release.sh

# main 브랜치 이미지 배포 건너뛰기
sh main-release.sh -s

# preview 사이트(supremainc.github.io/docs) 배포, preview 브랜치에서
sh preview.sh
```

## 기술 역량

문서 엔지니어링 및 개발과 관련하여 다음 기술의 지식을 필요로 할 수 있습니다:

- **JavaScript** (우선)
- **React** / TypeScript
- **Python** (필요시)

## 문서 관련 유의사항

- **철저한 검수**: 배포 전 모든 링크, 코드 블록, 이미지 검증
- **일관성**: 용어, 스타일, 형식의 일관성 유지
- **접근성**: 시맨틱 HTML, alt 텍스트, 충분한 대비율
- **성능**: 큰 이미지는 최적화, 외부 스크립트 최소화
- **사용자 중심 설계**: 실제 업무 흐름과 일치하는 정보 순서
- **한국어 문법**: 사용자가 이해하기 쉬운 문장 구조와 표현 사용

## 외부 리소스

- [Docusaurus 공식 문서](https://docusaurus.io/)
- [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/)
- GitHub: <https://github.com/supremainc/docs>

## 자주 묻는 질문

**Q: 로컬 서버가 시작되지 않습니다.**
A: `yarn clear` 후 재시도. 포트 충돌 시 `--port 3001` 등으로 변경.

**Q: 빌드가 실패합니다.**
A: Node.js 버전 확인 (20+), `yarn install` 재실행.

**Q: 이미지 크기가 너무 큽니다.**
A: `yarn sizeOfimages` 실행하여 자동 최적화.

---

**마지막 업데이트**: 2026-05-04
