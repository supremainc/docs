REM -u PDF로 변환할 URL 주소를 입력하세요. 커버 페이지를 기준으로 입력하면 됩니다.
REM -o PDF로 출력할 파일명을 입력하세요.

node generatepdf -u "https://docs.supremainc.com/en/platform/biostar_x/release-notes" --prince-args="--page-size='a4' --page-margin='0mm' --style=./print.css --javascript" -o ./pdf/document.pdf --include-index

REM PDF에서 주석을 제거하는 명령어
REM 마지막 파일명은 위 -o 옵션과 동일하게 설정하세요.

pdfcpu annot remove -pages 1 ./pdf/document.pdf Popup Text

REM 프론트 커버 생성
node generate-cover-local.js --title="BioStar X" --subtitle="RN" --version="1.0.0" --lang="English" --number="301.00.BSX" --output="./pdf/front-cover.html"

prince "./pdf/front-cover.html" -o "./pdf/front-cover.pdf"

pdfcpu annot remove -pages 1 ./pdf/front-cover.pdf Popup Text

REM PDF의 마지막 페이지에 백 커버를 추가하는 명령어

pdfcpu merge ./pdf/BioStarX_Release_Notes_1.0.0_EN_251106.pdf ./pdf/front-cover.pdf ./pdf/document.pdf back-cover-en.pdf
