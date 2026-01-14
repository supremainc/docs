# 코드 블락 변환 로직 추가

## 📝 개요

MDX 문서의 코드 블락을 HTML로 변환하는 로직이 추가되었습니다. 

## ✨ 추가된 기능

### 1. `processCodeBlocks()` 함수
코드 블락을 HTML로 변환하며 다음 기능을 지원합니다:

#### 지원하는 형식
```markdown
```language title="파일명" {1,3-5}
code content
```
```

#### 특징
- **언어 지정**: `python`, `javascript`, `bash` 등
- **제목(Title)**: 파일명이나 설명 표시 (선택사항)
- **라인 강조**: 특정 라인 번호 강조 (선택사항)
  - `{1}` - 1번 라인만 강조
  - `{1,3-5}` - 1, 3, 4, 5번 라인 강조
  - `{2-4}` - 2~4번 라인 강조

#### HTML 출력
```html
<div class="code-block">
  <div class="code-block-title">파일명</div>
  <div class="code-block-content">
    <div class="code-language">python</div>
    <pre><code class="language-python">
      <div>코드 라인 1</div>
      <div class="highlight">코드 라인 2 (강조)</div>
    </code></pre>
  </div>
</div>
```

### 2. `processApiBlocks()` 함수
API 문서용 특수 코드 블락 처리:

#### HTTP 요청 블락
```markdown
```http title="요청"
GET /api/endpoint
Headers:
    X-Token: value
```
```

#### cURL 예시
```markdown
```bash title="테스트"
curl -X POST http://localhost:8000/api
```
```

#### 특징
- HTTP 블락은 파란색(#0366d6) 헤더
- Bash(cURL) 블락은 보라색(#6f42c1) 헤더
- API 문서에 최적화된 스타일링

### 3. `parseLineHighlight()` 헬퍼 함수
라인 번호 문자열을 파싱하여 배열로 변환

```javascript
parseLineHighlight("1,3-5") // → [1, 3, 4, 5]
parseLineHighlight("2-4")   // → [2, 3, 4]
```

## 🎨 CSS 스타일

### 코드 블락 스타일
- 밝은 배경색 (#f6f8fa)
- 테두리 및 그림자 효과
- 강조 라인: 노란색 배경 + 왼쪽 보더
- 언어 표시: 우상단 표시

### API 블락 스타일
- HTTP: 파란색 헤더
- cURL/Bash: 보라색 헤더
- 복사하기 쉬운 고정폭 글꼴

## 🚀 사용 예시

### Python 코드 강조
```markdown
```python title="fastapi/main.py" {5-7}
from fastapi import FastAPI

app = FastAPI()

@app.get("/api")
async def get_data():
    return {"status": "ok"}
```
```

### API 문서
```markdown
### 요청 형식

```http title="요청"
POST /api/session/bridge
Content-Type: application/json

{
  "user_id": "user123",
  "plugin_id": "plugin456"
}
```

### 테스트 명령
```bash title="cURL"
curl -X POST http://localhost:8000/api \
  -H "Content-Type: application/json" \
  -d '{"user_id":"user123"}'
```
```

## 📊 변환 로직 흐름

```
MDX Content
    ↓
1. Include/Xclude 처리 (제품 필터)
    ↓
2. 코드 블락 임시 보존 (placeholder 사용)
    ↓
3. HTML Escape
    ↓
4. Headers, Links 등 마크다운 변환
    ↓
5. Lists 처리
    ↓
6. Admonitions 처리
    ↓
7. 코드 블락 변환 (언어, 제목, 라인 강조)
    ↓
8. API 블락 변환
    ↓
9. 최종 HTML 출력
```

## 📁 수정된 파일

### `genpdf/converter.mjs`
- `processCodeBlocks()` 함수 추가
- `processApiBlocks()` 함수 추가
- `parseLineHighlight()` 헬퍼 함수 추가
- `markdownToHtml()` 함수에 코드 블락 처리 통합

### `mdx-to-html-styles.css`
- `.code-block` 클래스 스타일
- `.code-block-title` 스타일
- `.code-block-content` 스타일
- `.code-language` 스타일
- `.api-block` 클래스 스타일
- `.api-block-title` 스타일
- 라인 강조 스타일

## ✅ 테스트

```bash
# 생성된 HTML에서 코드 블락 확인
node genpdf/index.mjs --sidebar bsxplugins --output test.html
```

## 🔄 호환성

- 기존 코드 블락 형식: 그대로 작동
- 제목/강조 없는 블락: 기본 스타일 적용
- 지원되지 않는 언어: 'text' 로 처리
