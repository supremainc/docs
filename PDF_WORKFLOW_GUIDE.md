# PDF 문서 자동 생성 워크플로우 사용 가이드

## 개요

이 워크플로우는 사용자 입력을 기반으로 완전한 PDF 문서를 자동으로 생성합니다. 프론트 커버, 메인 문서, 백 커버를 모두 포함한 통합 PDF를 만들고 GitHub Release로 자동 배포합니다.

## 주요 기능

1. **동적 프론트 커버 생성**: 제품명, 문서 유형, 버전 등을 기반으로 커스텀 커버 생성
2. **웹페이지를 PDF로 변환**: 지정된 URL의 콘텐츠를 PDF로 변환
3. **PDF 주석 제거**: 생성된 PDF에서 불필요한 주석 제거
4. **PDF 통합**: 프론트 커버 + 메인 문서 + 백 커버를 하나의 PDF로 병합
5. **자동 릴리스**: GitHub Release로 최종 PDF 자동 업로드

## 사용 방법

### 1. GitHub Actions에서 실행

1. GitHub 저장소의 **Actions** 탭으로 이동
2. **Generate PDF Document with Cover** 워크플로우 선택
3. **Run workflow** 버튼 클릭
4. 필요한 정보 입력:

#### 입력 필드 설명

| 필드 | 설명 | 예시 |
|------|------|------|
| **제품명** | PDF에 표시될 제품 이름 | `BioStation 3`, `BioStar 2` |
| **문서 유형** | 문서의 종류 | `설치 가이드`, `사용자 가이드`, `관리자 가이드` |
| **문서 버전** | 문서의 버전 번호 | `1.0.0`, `2.3.1` |
| **언어** | 문서 언어 선택 | `한국어` 또는 `English` |
| **문서 번호** | 고유 문서 식별 번호 | `KO 101.00.853`, `EN 102.00.945` |
| **대상 URL** | PDF로 변환할 웹사이트 주소 | `https://supremainc.github.io/docs/device/biostation_3` |
| **릴리스 날짜** | YYMMDD 형식의 날짜 | `250826` (2025년 8월 26일) |

### 2. 실행 과정

워크플로우는 다음 순서로 진행됩니다:

1. **환경 설정**: Node.js, PrinceXML, pdfcpu, GitHub CLI 설치
2. **프론트 커버 생성**: 입력값을 기반으로 HTML 템플릿 생성 → PDF 변환
3. **메인 문서 생성**: 지정된 URL을 PrinceXML로 PDF 변환
4. **주석 제거**: pdfcpu를 사용하여 PDF 주석 제거
5. **PDF 병합**: 프론트 커버 + 메인 문서 + 백 커버 통합
6. **릴리스 생성**: GitHub Release 생성 및 PDF 업로드

### 3. 출력 결과

* **태그명**: `v{버전}-{릴리스날짜}` (예: `v1.0.0-250826`)
* **파일명**: `{제품명}_{문서유형}_{버전}_{언어코드}_{릴리스날짜}_Final.pdf`
* **예시**: `BioStation_3_설치_가이드_1.0.0_KO_250826_Final.pdf`

## 지원되는 환경

* **운영체제**: macOS (GitHub Actions)
* **Node.js**: 버전 20
* **PrinceXML**: 버전 16
* **필요한 파일**:
  * `generate-cover-local.js` (프론트 커버 생성 스크립트)
  * `generatepdf.js` (메인 PDF 생성 스크립트)
  * `back-cover.pdf` (한국어 백 커버)
  * `back-cover-en.pdf` (영어 백 커버)
  * `print.css` (PDF 스타일시트)

## 문제 해결

### 일반적인 오류

1. **URL 접근 불가**:
   * 대상 URL이 공개적으로 접근 가능한지 확인
   * HTTPS 프로토콜 사용 권장

2. **백 커버 파일 없음**:
   * `back-cover.pdf`와 `back-cover-en.pdf` 파일이 저장소 루트에 있는지 확인

3. **스크립트 파일 없음**:
   * `generate-cover-local.js`와 `generatepdf.js` 파일 존재 확인

### 디버깅

워크플로우 실행 중 오류가 발생하면:

1. GitHub Actions 로그에서 상세한 오류 메시지 확인
2. 각 단계별로 생성된 파일 확인
3. 입력값 형식이 올바른지 검토

## 사용 예시

### BioStation 3 설치 가이드 (한국어)

```
제품명: BioStation 3
문서 유형: 설치 가이드  
문서 버전: 1.0.8
언어: 한국어
문서 번호: KO 101.00.853
대상 URL: https://supremainc.github.io/docs/device/biostation_3
릴리스 날짜: 250826
```

### BioStar 2 User Guide (English)

```
제품명: BioStar 2
문서 유형: User Guide
문서 버전: 2.9.5
언어: English  
문서 번호: EN 102.00.945
대상 URL: https://supremainc.github.io/docs/en/platform/biostar2
릴리스 날짜: 250826
```

이 워크플로우를 통해 일관된 형식의 전문적인 PDF 문서를 자동으로 생성할 수 있습니다.
