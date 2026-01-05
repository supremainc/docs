@echo off
REM BioStation 3 커버 페이지 생성 스크립트
REM 사용법: generate-front-cover.bat

echo ================================================
echo BioStation 3 커버 페이지 생성
echo ================================================

REM 1. HTML 생성
echo 📄 HTML 파일 생성 중...
node generate-cover-local.js --title="BioStartion 3 Max" --subtitle="IG" --version="1.0.0" --lang="Español" --number="101.00.BS3" --output="./pdf/front-cover.html"

if %ERRORLEVEL% NEQ 0 (
    echo ❌ HTML 생성 실패
    pause
    exit /b 1
)

REM 2. PDF 생성
echo 📖 PDF 파일 생성 중...
prince "./pdf/front-cover.html" -o "./pdf/front-cover.pdf"

if %ERRORLEVEL% NEQ 0 (
    echo ❌ PDF 생성 실패 - Prince가 설치되어 있는지 확인하세요
    pause
    exit /b 1
)

echo ✅ 생성 완료!
echo 📁 파일 위치: ./pdf/front-cover.pdf
echo.

REM 3. 결과 파일 확인
if exist "./pdf/front-cover.pdf" (
    echo 🎉 PDF 파일이 성공적으로 생성되었습니다!
    
    REM PDF 파일 크기 확인
    for %%I in ("./pdf/front-cover.pdf") do echo 📏 파일 크기: %%~zI bytes
) else (
    echo ❌ PDF 파일 생성에 실패했습니다.
)

echo.
echo 다른 제품의 커버를 만들려면:
echo node generate-cover-local.js --title="제품명" --subtitle="문서제목" --version="버전" --lang="언어" --number="문서번호"
echo.
pause
