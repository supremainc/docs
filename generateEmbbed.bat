@echo off
@REM 사전 설정
@REM PRODUCT_NAME : 제품명
@REM LANGUAGE : 언어 코드 (예: ko, en, ja, es)
@REM PRODUCT_TYPE : 문서 종류 (예: UG, RN 등) IG: 설치 가이드, UG: 사용자 가이드, AG: 관리자 가이드, RN: 릴리즈 노트, 그 외에는 입력한 내용 그대로 출력됩니다.
@REM VERSION : 문서 버전 (예: 1.0, 1.0.1 등)
@REM DOCUMENT_NUMBER : 문서 번호 (예: IG 101.00.BS3 / UG 102.00.XXX / RN 301.00.XXX)
@REM SIDEBAR : sidebar.js 파일에 적용된 키 값을 입력하세요.
@REM FILTER : 문서가 저장된 경로를 입력하세요. Include, Xclude 컴포넌트에서 사용하기 위한 값입니다.
@REM RELEASE: 문서의 배포 날짜를 입력하세요.
@REM CONTEXT: preview

set PRODUCT_NAME=Vionyx-Web-Server
set LANGUAGE=ko
set PRODUCT_TYPE=UG
set VERSION=1.0.0
set DOCUMENT_NUMBER=102.00
set SIDEBAR=aicamwebserver
set FILTER=vionyx_webserver
set RELEASE=260414
set CONTEXT=preview

@REM SVG 파일 맵핑 파일 생성
node ./genpdf/generateSvgMap.js

if %LANGUAGE%==ko (
  set LANG=KO
) else if %LANGUAGE%==en (
  set LANG=EN
) else if %LANGUAGE%==ja (
  set LANG=JA
) else if %LANGUAGE%==es (
    set LANG=ES
) else (
  set LANG=KO
)

@REM 문서 생성 단계
set OUTPUT=%PRODUCT_NAME%_%PRODUCT_TYPE%_%VERSION%_%LANG%.html
echo %OUTPUT%

echo Generating HTML: %OUTPUT%
node genpdf/index.mjs --sidebar %SIDEBAR% --product %FILTER% --language %LANGUAGE% --toc --output ./pdf/%OUTPUT% --max-depth 2 --template embedded

echo image to base64
node genpdf/convert-images-to-base64.mjs ./pdf/%OUTPUT%