#!/bin/bash
# Front Cover 페이지 생성 스크립트 (GitHub CI/CD 환경용)
# 사용법: ./generate-front-cover.sh

set -e  # 에러 발생 시 즉시 종료

echo "================================================"
echo "Front Cover 페이지 생성"
echo "================================================"

# 환경 확인
if ! command -v node &> /dev/null; then
    echo "❌ Node.js가 설치되어 있지 않습니다."
    exit 1
fi

if ! command -v prince &> /dev/null; then
    echo "❌ PrinceXML이 설치되어 있지 않습니다."
    exit 1
fi

# PDF 디렉토리 생성
mkdir -p ./pdf

# 1. HTML 생성
echo "📄 HTML 파일 생성 중..."
node generate-cover-local.js \
    --title="BioStar X" \
    --subtitle="ADMINISTRATOR GUIDE" \
    --version="1.0.0" \
    --lang="English" \
    --number="102.00.BSX" \
    --output="./pdf/front-cover.html"

if [ $? -ne 0 ]; then
    echo "❌ HTML 생성 실패"
    exit 1
fi

# 2. PDF 생성
echo "📖 PDF 파일 생성 중..."
prince "./pdf/front-cover.html" -o "./pdf/front-cover.pdf"

if [ $? -ne 0 ]; then
    echo "❌ PDF 생성 실패 - Prince가 설치되어 있는지 확인하세요"
    exit 1
fi

echo "✅ 생성 완료!"
echo "📁 파일 위치: ./pdf/front-cover.pdf"
echo

# 3. 결과 파일 확인
if [ -f "./pdf/front-cover.pdf" ]; then
    echo "🎉 PDF 파일이 성공적으로 생성되었습니다!"
    
    # PDF 파일 크기 확인
    FILE_SIZE=$(stat -c%s "./pdf/front-cover.pdf" 2>/dev/null || stat -f%z "./pdf/front-cover.pdf" 2>/dev/null || echo "알 수 없음")
    echo "📏 파일 크기: ${FILE_SIZE} bytes"
    
    # 파일 권한 설정 (CI 환경에서 필요할 수 있음)
    chmod 644 "./pdf/front-cover.pdf"
else
    echo "❌ PDF 파일 생성에 실패했습니다."
    exit 1
fi

echo
echo "다른 제품의 커버를 만들려면:"
echo "node generate-cover-local.js --title=\"제품명\" --subtitle=\"문서제목\" --version=\"버전\" --lang=\"언어\" --number=\"문서번호\""
echo
echo "작업 완료!"
