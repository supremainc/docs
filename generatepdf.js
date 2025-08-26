const { exec } = require('child_process');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch').default;
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const buffer = new Set();
const baseDir = __dirname;

// 명령줄 옵션 파싱
const argv = yargs(hideBin(process.argv))
  .option('url', { type: 'string', alias: 'u', description: 'Index URL' })
  .option('selector', { type: 'string', alias: 's', description: 'CSS selector for next page' })
  .option('dest', { type: 'string', alias: 'd', default: './pdf', description: 'Working directory' })
  .option('file', { type: 'string', alias: 'f', description: 'Output list filename' })
  .option('output', { type: 'string', alias: 'o', description: 'PDF output filename' })
  .option('include-index', { type: 'boolean', description: 'Include index page in PDF' })
  .option('prepend', { type: 'string', description: 'Comma-separated pages to prepend' })
  .option('append', { type: 'string', description: 'Comma-separated pages to append' })
  .option('prince-args', { type: 'string', description: 'Additional Prince arguments' })
  .option('prince-docker', { type: 'boolean', description: 'Use Prince Docker for PDF generation' })
  .option('list-only', { type: 'boolean', description: 'Fetch list without generating PDF' })
  .option('pdf-only', { type: 'boolean', description: 'Generate PDF without fetching list' })
  .option('cookie', { type: 'string', description: 'Specify cookie for requests' })
  .option('enable-js', { type: 'boolean', description: 'Enable JavaScript execution for dynamic content' })
  .option('wait-script', { type: 'string', description: 'Path to JavaScript file for waiting dynamic content' })
  .option('http-timeout', { type: 'number', description: 'HTTP timeout in seconds' })
  .strict()
  .argv;

// URL 설정
const url = argv.url ? argv.url.replace(/\/$/, '') : 'https://dev.openbayes.com/docs';
const parsedUrl = new URL(url);
const baseUrl = parsedUrl.origin;
// const baseUrl = argv.base;
// console.log(`Base URL: ${baseUrl}`);
const scope = parsedUrl.pathname;
const scopeName =
  scope !== '/' ? `-${scope.replace(/\/$/, '').replace(/^\//, '').replace(/\//g, '-')}` : '';

const dest = argv.dest;
const listFile = argv.file || `${dest}/${parsedUrl.hostname}${scopeName}.txt`;
const pdfFile = argv.output || `${dest}/${parsedUrl.hostname}${scopeName}.pdf`;

const fetchOptions = {};

// 명령 실행 함수
function execute(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) return reject(error);
      resolve({ stdout: stdout.trim(), stderr: stderr.trim() });
    });
  });
}

// PDF 생성 함수
async function generatePdf(list, filename, cookie) {
  console.log(`Generating PDF ${filename}`);

  const args = argv['prince-args'] || '';
  const cookieArg = cookie ? `--cookie "${cookie}"` : '';
  
  // 실제 PrinceXML 옵션들
  const jsOptions = argv['enable-js'] ? '--javascript' : '';
  const scriptOption = argv['wait-script'] ? `--script=${argv['wait-script']}` : '';
  const httpTimeout = argv['http-timeout'] ? `--http-timeout=${argv['http-timeout']}` : '';
  
  const princeCmd = argv['prince-docker']
    ? `docker run --rm -i -v ${baseDir}:/config sparanoid/prince --no-warn-css --style=/config/print.css ${cookieArg} ${jsOptions} ${scriptOption} ${httpTimeout} --input-list=/config/${list} -o /config/${filename} ${args}`
    : `prince --no-warn-css ${cookieArg} ${jsOptions} ${scriptOption} ${httpTimeout} --input-list=${list} -o ${filename} ${args}`;

  console.log(`Executing command: ${princeCmd}`);

  try {
    const resp = await execute(princeCmd);
    console.log(resp.stdout);
    console.log('Done');
  } catch (err) {
    console.error('Error generating PDF:', err);
  }
}

// 페이지 요청 및 크롤링 함수
async function requestPage(url) {
  try {
    const resp = await fetch(url, fetchOptions);
    const body = await resp.text();
    const dom = new JSDOM(body).window;
    const nextLinkEl = dom.document.body.querySelector(argv.selector || '.pagination-nav__link--next');

    const nextLink = nextLinkEl && 'href' in nextLinkEl ? `${baseUrl}${nextLinkEl.href}` : null;
    const cycle = buffer.has(nextLink);

    if (!cycle && nextLink) {
      console.log(`Got link: ${nextLink}`);
      buffer.add(nextLink);
      await requestPage(nextLink);
    } else {
      if (cycle) {
        console.log(`Pagination cycle detected on ${url}`);
      } else {
        console.log('No next link found!');
      }

      if (argv.append) {
        argv.append.split(',').forEach((item) => {
          const url = item.match(/^https?:\/\//) ? item : `${baseUrl}${scope}${item}`;
          buffer.add(url);
          console.log(`Got link: ${url} [append]`);
        });
      }

      // 파일을 저장하기 전에 디렉터리가 존재하는지 확인하고 생성하는 코드 추가
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }

      if (buffer.size > 0) {
        console.log(`Writing buffer (${buffer.size} links) to ${listFile}`);
        fs.writeFileSync(listFile, [...buffer].join('\n'), 'utf-8');
        // console.log('Back cover 페이지 추가');
        // fs.appendFileSync(listFile, '\nhttp://localhost:4000/docs/back', 'utf-8');

        if (!argv['list-only']) {
          await generatePdf(listFile, pdfFile, argv.cookie);
        }
      } else {
        console.log('No buffer to write!');
      }
    }
  } catch (err) {
    console.error('Error fetching page:', err);
  }
}

// 실행 로직
if (argv['pdf-only']) {
  generatePdf(listFile, pdfFile, argv.cookie);
} else {
  if (argv.prepend) {
    argv.prepend.split(',').forEach((item) => {
      const url = item.match(/^https?:\/\//) ? item : `${baseUrl}${scope}${item}`;
      buffer.add(url);
      console.log(`Got link: ${url} [prepend]`);
    });
  }

  if (argv['include-index']) {
    console.log(`Got link: ${baseUrl}${scope} [index]`);
    buffer.add(`${baseUrl}${scope}`);
  }

  requestPage(`${baseUrl}${scope}`);
}
