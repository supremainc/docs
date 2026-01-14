# MDX to HTML Converter 사용 설명서

여러 개의 MDX 파일을 하나의 HTML 파일로 변환하는 Node.js 스크립트입니다. Docusaurus의 `sidebars.js` 설정에서 문서 구조를 읽어 통합 HTML 문서를 생성합니다.

## 📋 개요

- **목적**: MDX 파일들을 하나의 통합된 HTML 문서로 변환
- **구성 방식**: `sidebars.js`의 객체 구조를 읽어 문서 구성 결정
- **장점**:
  - Docusaurus 컴포넌트 지원
  - 자동 목차 생성
  - 반응형 디자인
  - 문서 메타데이터 활용

## 📦 필요한 의존성

다음 패키지들이 이미 설치되어 있거나 설치해야 합니다:

```bash
yarn add -D gray-matter commander remark-parse remark-mdx remark-gfm unified unist-util-visit
```

또는 `package.json`에 추가:

```json
{
  "devDependencies": {
    "gray-matter": "^4.0.3",
    "commander": "^11.1.0",
    "remark-parse": "^10.0.1",
    "remark-mdx": "^2.2.4",
    "remark-gfm": "^3.0.1",
    "unified": "^10.1.2",
    "unist-util-visit": "^4.1.2"
  }
}
```

## 🚀 사용법

### 기본 스크립트 (간단한 버전)

```bash
node mdx-to-html.js [sidebar-key] [output-file]
```

**예시:**
```bash
# bsxplugins 사이드바를 output.html로 변환
node mdx-to-html.js bsxplugins output.html

# 다른 사이드바 사용
node mdx-to-html.js platform documentation.html
```

### 고급 스크립트 (향상된 버전)

```bash
node mdx-to-html-advanced.js [options]
```

**옵션:**
```
-s, --sidebar <key>        사이드바 키 (기본값: bsxplugins)
-o, --output <file>        출력 파일명 (기본값: output.html)
-t, --template <type>      템플릿 타입: simple, professional, documentation
--toc                      목차 생성 (기본값: true)
--max-depth <number>       목차의 최대 제목 깊이 (기본값: 3)
-h, --help                 도움말 표시
```

**예시:**
```bash
# 기본 설정 사용
node mdx-to-html-advanced.js

# 커스텀 사이드바와 출력 파일
node mdx-to-html-advanced.js --sidebar bsxplugins --output my-docs.html

# 전문적인 템플릿으로 생성
node mdx-to-html-advanced.js --sidebar platform --template professional --toc --max-depth 2

# 도움말 보기
node mdx-to-html-advanced.js --help
```

## 📁 파일 구조

스크립트가 작동하기 위한 디렉토리 구조:

```
workspace/
├── sidebars.js                    # Docusaurus 사이드바 설정 파일
├── docs/                          # 문서 디렉토리
│   ├── platform/
│   │   ├── plugins/
│   │   │   ├── index.mdx
│   │   │   ├── plugins-overview.mdx
│   │   │   ├── getting-started.mdx
│   │   │   └── ...
│   │   └── ...
│   └── ...
├── mdx-to-html.js                 # 기본 변환 스크립트
└── mdx-to-html-advanced.js        # 고급 변환 스크립트
```

## 🔧 sidebars.js 구조 이해

### 지원되는 형식

**형식 1: 문자열 배열**
```javascript
const sidebars = {
  myDocs: [
    'intro',
    'getting-started',
    'installation',
    'usage'
  ]
};
```

**형식 2: 카테고리 구조**
```javascript
const sidebars = {
  myDocs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'intro',
        'installation'
      ]
    },
    {
      type: 'category',
      label: 'Guide',
      items: [
        'usage',
        'advanced'
      ]
    }
  ]
};
```

**형식 3: 링크 객체**
```javascript
const sidebars = {
  myDocs: [
    {
      type: 'doc',
      id: 'overview'
    },
    {
      type: 'category',
      label: 'Documentation',
      link: {
        type: 'doc',
        id: 'guide/index'
      },
      items: [
        'guide/chapter1',
        'guide/chapter2'
      ]
    }
  ]
};
```

## 📊 생성되는 HTML의 특징

### 기본 스크립트 (mdx-to-html.js)

- 간단한 디자인
- 자동 목차 생성
- 기본 마크다운 변환
- 가벼운 파일 크기

### 고급 스크립트 (mdx-to-html-advanced.js)

- **반응형 디자인**: 모바일/태블릿/데스크톱 최적화
- **목차 (TOC)**: 
  - 자동 생성
  - 깊이 조절 가능
  - 스티키 네비게이션 (데스크톱)
  
- **스타일링**:
  - 전문적인 색상 스키마
  - 코드 블록 하이라이팅
  - 표 스타일링
  - 링크 호버 효과

- **상호작용성**:
  - 스무스 스크롤
  - "맨 위로" 버튼
  - 문서 간 네비게이션

## 🎨 템플릿 타입

고급 스크립트에서 선택 가능:

- **simple**: 기본 스타일, 빠른 로딩
- **professional** (기본값): 전문적인 디자인, 완전한 기능
- **documentation**: 기술 문서 중심 디자인

## 📝 Frontmatter 지원

MDX 파일의 frontmatter는 다음과 같이 지원됩니다:

```mdx
---
title: 문서 제목
description: 문서 설명
sidebar_label: 사이드바에 표시될 레이블
id: 문서ID
---

# 문서 내용
```

## 🔍 예제

### 예제 1: BioStar X Plugins 문서 생성

```bash
node mdx-to-html-advanced.js \
  --sidebar bsxplugins \
  --output bsx-plugins-guide.html \
  --template professional \
  --toc \
  --max-depth 3
```

결과: `bsx-plugins-guide.html` 파일이 생성됩니다.

### 예제 2: Platform 문서 생성

```bash
node mdx-to-html-advanced.js \
  --sidebar platform \
  --output platform-docs.html \
  --max-depth 2
```

## 🐛 문제 해결

### Q: "Sidebar key not found" 오류
**A**: `sidebars.js`의 올바른 키를 사용하는지 확인하세요.
```bash
# 사용 가능한 키 확인
node mdx-to-html.js --help
```

### Q: 파일을 찾을 수 없다는 오류
**A**: 파일이 `docs/` 디렉토리 아래 올바른 경로에 있는지 확인하세요.

### Q: 특수 문자가 제대로 표시되지 않음
**A**: MDX 파일이 UTF-8 인코딩으로 저장되어 있는지 확인하세요.

### Q: HTML이 너무 크다
**A**: `--max-depth` 옵션으로 목차 깊이를 줄이면 파일 크기가 감소합니다.

## ⚙️ 커스터마이징

### CSS 수정

고급 스크립트의 `getTemplateCSS()` 함수를 수정하여 스타일을 사용자 정의할 수 있습니다.

### 마크다운 변환 커스터마이징

`markdownToHtml()` 함수에서 마크다운 처리 로직을 수정할 수 있습니다.

### 문서 구조 변경

`buildHtmlDocument()` 함수에서 최종 HTML 구조를 조정할 수 있습니다.

## 📌 주의사항

1. **MDX 컴포넌트**: 일부 Docusaurus 고유 컴포넌트(예: `<Tabs>`, `<Admonition>`)는 현재 기본 HTML로 변환됩니다.

2. **이미지 경로**: 상대 경로의 이미지는 생성된 HTML에서 제대로 작동하지 않을 수 있습니다. 절대 URL을 사용하는 것이 좋습니다.

3. **외부 링크**: 상대 링크는 생성된 HTML 맥락에서 수정이 필요할 수 있습니다.

## 📚 참고 자료

- [Docusaurus Sidebars 문서](https://docusaurus.io/docs/sidebar)
- [참조 프로젝트: mdx-to-email](https://github.com/getvero/mdx-to-email)

## 🔄 버전 기록

- **v1.0**: 초기 버전 (mdx-to-html.js)
- **v2.0**: 고급 기능 추가 (mdx-to-html-advanced.js)

## 📄 라이선스

프로젝트의 라이선스를 따릅니다.
