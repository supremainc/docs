# Azure Blob Storage 이미지 업로드 스크립트

Docusaurus 빌드 전에 `static/img` 폴더의 모든 이미지를 Azure Blob Storage에 업로드하는 스크립트입니다.

## 🚀 사용법

### 1. 환경변수 설정

`.env.example` 파일을 `.env`로 복사하고 Azure Storage 정보를 입력하세요:

```bash
cp .env.example .env
```

`.env` 파일 내용:
```
AZURE_STORAGE_ACCOUNT_NAME=your-storage-account-name
AZURE_STORAGE_ACCOUNT_KEY=your-storage-account-key
AZURE_STORAGE_CONTAINER_NAME=images
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 이미지 업로드

#### 방법 1: 직접 실행
```bash
npm run upload-images
```

#### 방법 2: 빌드 시 자동 실행 (prebuild 스크립트)
```bash
npm run build
```

빌드 명령 실행 시 자동으로 이미지가 먼저 업로드된 후 Docusaurus 빌드가 시작됩니다.

## 📁 파일 구조

```
docs/
├── uploadImage.js          # 이미지 업로드 스크립트
├── .env.example           # 환경변수 예제 파일
├── .env                   # 실제 환경변수 파일 (직접 생성)
├── image-url-mapping.json # 생성되는 URL 매핑 파일
└── static/
    └── img/               # 업로드 대상 이미지 폴더
        ├── image1.jpg
        ├── subfolder/
        │   └── image2.png
        └── ...
```

## ⚙️ 동작 방식

1. `static/img` 폴더를 재귀적으로 탐색
2. 이미지 파일들을 찾아 Azure Blob Storage에 업로드
3. 로컬 경로와 Azure URL 매핑 정보를 `image-url-mapping.json`에 저장
4. 업로드 결과를 콘솔에 출력

## 📋 지원하는 이미지 형식

- `.jpg`, `.jpeg`
- `.png`
- `.gif`
- `.webp`
- `.svg`
- `.bmp`
- `.ico`

## 🔧 Azure Storage 설정

### 1. Storage Account 생성
1. Azure Portal에서 Storage Account 생성
2. 컨테이너 생성 (예: `images`)
3. 컨테이너 공용 액세스 수준을 `Blob`로 설정

### 2. 액세스 키 확인
1. Storage Account → 액세스 키
2. 계정 이름과 키를 복사하여 `.env` 파일에 입력

## 📊 출력 예제

```
🔍 이미지 파일 검색 중... (C:\workspace\main\docs\static\img)
📊 총 15개의 이미지 파일을 발견했습니다.
🚀 Azure Blob Storage 업로드 시작... (컨테이너: images)

[1/15] biostar-logo.png
✅ 업로드 완료: biostar-logo.png → https://yourstorage.blob.core.windows.net/images/biostar-logo.png

[2/15] subfolder/device-image.jpg  
✅ 업로드 완료: subfolder/device-image.jpg → https://yourstorage.blob.core.windows.net/images/subfolder/device-image.jpg

...

📋 업로드 결과 요약:
   ✅ 성공: 15개
   ❌ 실패: 0개

📝 URL 매핑 파일 생성: C:\workspace\main\docs\image-url-mapping.json

🎉 이미지 업로드 완료!
```

## 🔍 URL 매핑 파일

업로드 완료 후 `image-url-mapping.json` 파일이 생성됩니다:

```json
{
  "biostar-logo.png": "https://yourstorage.blob.core.windows.net/images/biostar-logo.png",
  "subfolder/device-image.jpg": "https://yourstorage.blob.core.windows.net/images/subfolder/device-image.jpg"
}
```

이 파일을 사용하여 Docusaurus 설정에서 이미지 URL을 자동으로 교체할 수 있습니다.

## ❌ 문제 해결

### 환경변수 오류
```
AZURE_STORAGE_ACCOUNT_NAME과 AZURE_STORAGE_ACCOUNT_KEY 환경변수가 필요합니다.
```
→ `.env` 파일이 올바르게 설정되었는지 확인하세요.

### 경로 없음 오류
```
경로가 존재하지 않습니다: C:\workspace\main\docs\static\img
```
→ `static/img` 폴더가 존재하는지 확인하세요.

### 업로드 실패
- Azure Storage 계정 이름과 키가 정확한지 확인
- 컨테이너가 존재하고 적절한 권한이 설정되었는지 확인
- 네트워크 연결 상태 확인

## 📝 참고사항

- 동일한 파일명이 있으면 덮어씌워집니다
- 대용량 파일의 경우 업로드 시간이 오래 걸릴 수 있습니다
- Azure Storage 요금이 발생할 수 있으니 주의하세요