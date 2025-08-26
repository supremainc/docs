#!/bin/bash
# 최소 의존성 Front Cover 생성 스크립트 (CI 환경용)
# 사용법: ./generate-cover-simple.sh "제품명" "문서제목" "버전" "언어" "문서번호"

set -e

# 파라미터 확인
if [ $# -lt 5 ]; then
    echo "사용법: $0 \"제품명\" \"문서제목\" \"버전\" \"언어\" \"문서번호\""
    echo "예시: $0 \"BioStation 3\" \"설치 가이드\" \"버전 1.08\" \"한국어\" \"KO 101.00.853\""
    exit 1
fi

TITLE="$1"
SUBTITLE="$2"
VERSION="$3"
LANG="$4"
NUMBER="$5"

echo "📄 PDF 커버 생성 중..."
echo "제품: $TITLE"
echo "문서: $SUBTITLE"

# PDF 디렉토리 생성
mkdir -p ./pdf

# Node.js 스크립트 직접 실행
node generate-cover-local.js \
    --title="$TITLE" \
    --subtitle="$SUBTITLE" \
    --version="$VERSION" \
    --lang="$LANG" \
    --number="$NUMBER" \
    --output="./pdf/front-cover.html"

# PDF 생성
prince "./pdf/front-cover.html" -o "./pdf/front-cover.pdf"

echo "✅ 완료: ./pdf/front-cover.pdf"
