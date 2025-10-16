REM -u PDF로 변환할 URL 주소를 입력하세요. 커버 페이지를 기준으로 입력하면 됩니다.
REM -o PDF로 출력할 파일명을 입력하세요.

node generatepdf -u "http://localhost:3000/platform/biostar_x" --prince-args="--page-size='a4' --page-margin='0mm' --style=./print.css --javascript" -o ./pdf/document.pdf --include-index

REM PDF에서 주석을 제거하는 명령어
REM 마지막 파일명은 위 -o 옵션과 동일하게 설정하세요.

pdfcpu annot remove -pages 1 ./pdf/biostarx.pdf

REM PDF의 마지막 페이지에 백 커버를 추가하는 명령어

pdfcpu merge -mode append -bookmarks=false ./pdf/biostarx.pdf back-cover-en.pdf


@REM prince --no-warn-css http://localhost:3000/device/bioentry_w3/getting-started -o ./pdf/test.pdf --page-size='a4' --page-margin='0mm' --style=./print.css