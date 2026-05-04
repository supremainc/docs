---
name: 영어 번역 기술
description: 영어 문서 번역 시 따르는 스타일 가이드 및 선호 표현
type: skill
applyTo: i18n/*/docusaurus-plugin-content-docs/current/**
---

# 영어 번역 기술 가이드

Suprema 문서의 영어 버전 작성 시 일관된 스타일과 표현을 유지하기 위한 상세 가이드입니다.

## 기본 원칙

- Microsoft Technical Writing Style을 기반으로 함
- 사용자 중심의 명확하고 간결한 표현 우선
- Suprema 제품/기능의 영어 표현 일관성 유지

## 지양해야 할 표현

| 표현 | 이유 | 대체 표현 |
|------|------|---------|
| "you can" | 선택지가 아닌 한 절차형이 명확함 | 절차형 표현 (예: "Click", "Select") |
| "item" | 너무 일반적, 구체적 용어 사용 | context에 맞는 구체적 단어 |
| "even" | 불필요한 강조 | 생략하거나 다시 구성 |
| "display" | 표시되다의 수동형 | "appears" 사용 |
| "want" | 필요 없으면 삭제 | 생략하거나 다른 동사 사용 |
| "There is an issue where" | 부자연스러운 표현 | 사실 중심의 서술형으로 변경 |
| "An issue" | 구체성 부족 | 구체적인 문제 설명 |
| "logic", "register" | 개발자 용어 | context에 맞는 일반 용어 사용 |

## 선호하는 표현

### 생체 인식 관련 용어

- **"Facial Recognition"** → **"Facial Authentication"** ✅
- **credential 등록**: "register" → **"enroll"** ✅
- Credential 종류: Fingerprint, Face, Visual Face, Card, QR/Barcode

### 일반 용어

| 한국어 | 지양 | 선호 | 예시 |
|--------|------|------|------|
| 인증하다 | correctly recognizes | authenticates | "The system authenticates users" |
| 재시작 | has an abnormal restart | restarts abnormally | "The device restarts abnormally" |
| 틀리게 표현 | differently | incorrectly | "The value appears incorrectly" |
| 향상시키다 | facilitate | enhance | "This feature enhances performance" |
| 초기화 | reset | initialize | "Initialize the settings" |
| 속도 | speed | performance | "Improve system performance" |
| 포트 | terminal | port | "Connect via RS-485 port" |
| 큰 데이터 | complex structure | large data | "Handle large data efficiently" |
| 특정 | some | certain | "Certain devices require configuration" |

### 기술 표현

| 한국어 표현 | 지양 | 선호 | 예시 |
|-----------|------|------|------|
| 연결 | OSDP connection | connect via OSDP | "Connect via OSDP protocol" |
| 시도하다 | attempting to | trying to | "Attempting to connect" |
| 기능 | function, ability | feature | "Enable this feature" |
| 설정 | Configuration | Setting | "Access the Settings menu" |
| 출력됨 | is output as | outputs | "The log outputs to file" |
| 검색 | retrieve | get | "Get the device ID" |
| 기록 안 됨 | not getting uploaded | not recorded | "Logs are not recorded" |
| 수행 | performed | executes (기계적 작동) | "The system executes commands" |
| 지원 뒤에 위치 | support (문장 끝) | support (문장 처음) | "Support for X" (not "X support") |
| block | prevent, block | 문맥에 따라 선택 | "Block unauthorized access" |

## 상황별 표현 가이드

### 선택권 표시 시

- **한국어**: "~할 수 있습니다"
- **영어**: "You can" 사용 가능

```markdown
❌ Bad: You can enable optional features
✅ Good: Enable optional features (절차 중심)
✅ Good: You can enable optional features for advanced users (선택권 명시 시)
```

### 기능 설명

- **절차형**: 명령형 사용 (사용자가 수행하는 작업)
- **설명형**: "feature" 사용 (기능 소개)

```markdown
❌ Bad: This function allows authentication
✅ Good: This feature enables authentication
✅ Good: Authenticate users with this feature
```

### Device/Configuration 표현

- 한국어: "{장치명} 장치", "{기능명} 기능", "{항목명} 설정"
- 영어: 단어 생략 (redundancy 제거)

```markdown
❌ Bad: Configure the facial recognition device setting
✅ Good: Configure facial recognition

❌ Bad: Access the authentication feature configuration
✅ Good: Configure authentication

❌ Bad: The biometric device port
✅ Good: The biometric port
```

**규칙 상세:**
- "{function name} 기능" → 영문에서 "configuration" 생략 (redundancy)
- "{device name} 장치" → 영문에서 "device" 생략
- "option feature" → "option" 또는 "feature" 중 하나만 사용

### 문제 상황 설명

- 수동형 지양, 사실 중심의 서술형 사용

```markdown
❌ Bad: There is an issue where logs are not getting uploaded
✅ Good: Logs are not recorded to the server
✅ Good: Check your network connection if logs fail to upload
```

## 실무 체크리스트

번역 완료 후 다음을 확인하세요:

- [ ] "you can"은 선택권을 나타낼 때만 사용했는가?
- [ ] "item", "even" 표현을 피했는가?
- [ ] "Facial Authentication" (X Recognition)을 사용했는가?
- [ ] credential 등록에 "enroll"을 사용했는가?
- [ ] "feature", "setting"을 "function", "configuration"보다 우선했는가?
- [ ] redundant한 단어(device, configuration, feature 중복)를 제거했는가?
- [ ] "retrieve" 대신 "get"을 사용했는가?
- [ ] 수동형을 피하고 명확한 사실 표현을 사용했는가?
- [ ] "logic", "register" 같은 개발자 용어를 피했는가?
- [ ] "support"를 문장 첫 단어로 배치했는가?
- [ ] 기계적 작동 설명에 "executes"를 사용했는가? (X "performed")
- [ ] "block"을 명확한 맥락에서 사용했는가?
- [ ] 로그/이벤트 누락 시 "not getting uploaded" 대신 "not recorded"를 사용했는가?

---

**마지막 업데이트**: 2026-05-04
