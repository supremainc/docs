const fs = require('fs');
const path = require('path');

/**
 * 로컬 커버 페이지 HTML 생성기
 * 명령줄 예시: node generate-cover-local.js --title="BioStation 3" --subtitle="IG" --version="1.08" --lang="한국어" --number="KO 101.00.853"
 */

// 명령줄 인수 파싱
function parseArgs() {
    const args = process.argv.slice(2);
    const params = {};
    
    args.forEach(arg => {
        if (arg.startsWith('--')) {
            const [key, value] = arg.substring(2).split('=');
            params[key] = decodeURIComponent(value || '');
        }
    });
    
    return params;
}

// Suprema 로고 SVG (base64로 인코딩)
function getSupremaLogoSVG() {
    // 실제 로고가 있다면 파일에서 읽어옴
    const logoPath = path.join(__dirname, 'static', 'img', 'suprema-logo-bottom.svg');
    
    if (fs.existsSync(logoPath)) {
        try {
            return fs.readFileSync(logoPath, 'utf-8');
        } catch (e) {
            console.warn('로고 파일을 읽을 수 없습니다:', e.message);
        }
    }
    
    // 기본 Suprema 로고 SVG
    return `<svg width="113" height="28" viewBox="0 0 113 28" xmlns="http://www.w3.org/2000/svg">
        <text x="56.5" y="18" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#a42444">suprema</text>
        <text x="56.5" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" fill="#666">SECURITY & BIOMETRICS</text>
    </svg>`;
}

// 언어 감지 함수
function detectLanguage(lang, number) {
    const isKorean = lang === "한국어" || (lang !== "English" && lang !== "日本語" && number.startsWith('KO'));
    const isJapanese = lang === "日本語" || number.startsWith('JA');
    return { isKorean, isJapanese };
}

// 언어별 버전 및 번호 레이블 매핑
function getLocalizedVersionAndNumber() {
    return {
        version: {
            ko: '버전',
            en: 'Version',
            ja: 'バージョン'
        },
        number: {
            ko: 'KO',
            en: 'EN',
            ja: 'JA'
        }
    };
}

// 언어에 따른 버전 및 번호 처리
function getProcessedVersionAndNumber(version, number, isKorean, isJapanese) {
    const langCode = isKorean ? 'ko' : isJapanese ? 'ja' : 'en';
    const { version: versionLabel, number: numberLabel } = getLocalizedVersionAndNumber();
    
    const processedVersion = `${versionLabel[langCode]} ${version}`;
    const processedNumber = `${numberLabel[langCode]} ${number}`;
    return { processedVersion, processedNumber };
}

// subtitle 값에 따른 언어별 제목 매핑
function getLocalizedSubtitle(subtitleCode, isKorean = true, isJapanese = false) {
    const subtitleMap = {
        'IG': {
            ko: '설치 가이드',
            en: 'INSTALLATION GUIDE',
            ja: '設置ガイド'
        },
        'UG': {
            ko: '사용자 가이드',
            en: 'USER GUIDE',
            ja: 'ユーザーガイド'
        },
        'AG': {
            ko: '관리자 가이드',
            en: 'Administrator Guide',
            ja: '管理者ガイド'
        },
        'RN': {
            ko: 'Release Notes',
            en: 'Release Notes',
            ja: 'Release Notes'
        }
    };

    const mapping = subtitleMap[subtitleCode];
    if (!mapping) {
        // 코드가 없으면 원본 값을 그대로 반환
        return subtitleCode;
    }

    const langCode = isKorean ? 'ko' : isJapanese ? 'ja' : 'en';
    return mapping[langCode];
}

// HTML 템플릿 생성
function generateCoverHTML(params) {
    const {
        title = "BioStation 3",
        subtitle = "IG", 
        version = "1.08",
        lang = "한국어",
        number = "101.00.BS3"
    } = params;

    // 언어 감지
    const { isKorean, isJapanese } = detectLanguage(lang, number);
    
    // subtitle이 코드(IG, UG, AG)인지 확인하고 적절한 제목으로 변환
    const processedSubtitle = getLocalizedSubtitle(subtitle, isKorean, isJapanese);
    
    // 버전과 번호 처리
    const { processedVersion, processedNumber } = getProcessedVersionAndNumber(version, number, isKorean, isJapanese);

    const logoSVG = getSupremaLogoSVG();
    const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSVG).toString('base64')}`;

    // coverpage 클래스 결정
    const coverpageClass = title === 'BioStar X' ? 'coverpage bsx' : 'coverpage';

    return `<!DOCTYPE html>
<html lang="${isKorean ? 'ko' : isJapanese ? 'ja' : 'en'}">
<head>
    <meta charset="utf-8">
    <title>커버 - ${title}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+KR:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
            width: 8.27in;
            height: 11.693in;
            margin: 0;
            padding: 0;
        }
        
        .coverpage {
            height: 11.693in;
            width: 8.27in;
            background-color: rgb(255,255,255);
            background-image: radial-gradient(circle, rgba(255,255,255,1) 84%, rgba(217,224,229,1) 100%);
            position: relative;
            overflow: hidden;
            /* Prince XML 렌더링 최적화 */
            -prince-background-image-resolution: 300dpi;
        }

        .bsx {
            background: #ffffff;
            background-image: none;
        }
        
        .title {
            position: absolute;
            top: 2.0276in;
            height: 3.7795in;
            width: 100%;
            background-color: #a42444;
            padding: 3% 0.785in;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .bsx .title {
            background: linear-gradient(163deg, #01AAEB, #D8007F);
            background: -webkit-linear-gradient(163deg, #01AAEB, #D8007F);
            border: none;
        }
        
        .title h1 {
            font-family: "Montserrat", sans-serif;
            font-weight: bold;
            font-size: 50pt;
            margin-bottom: 0;
            line-height: 1.1;
        }
        .bsx .title h1 {
            font-size: 42pt;
            border-bottom: 0.5pt solid #fff;
            padding-bottom: 1.5rem;
        }
        
        .title h1.small {
            font-size: 37pt;
            line-height: 1.1;
        }
        
        .title .subtitle {
            position: relative;
            font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
            font-weight: 200;
            font-size: 26pt;
            margin-bottom: 0;
            line-height: 1.2;
            left: 4px;
            text-transform: uppercase;
        }

        .bsx .title .subtitle {
            font-size: 24pt;
            font-weight: 500;
            margin-top: 1.5rem;
            margin-bottom: .5rem;
            text-transform: none;
        }
        
        .title .ver {
            font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
            font-weight: 500;
            font-size: 10pt;
            position: relative;
            margin-top: 0.2rem;
            left: 4px;
        }

        .bsx .title .ver {
            font-weight: normal;
        }
        
        .title .lang,
        .title .number {
            font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
            font-weight: 500;
            font-size: 10pt;
            position: relative;
            text-align: right;
        }
        .bsx .title .lang, .bsx .title .number {
            font-weight: normal;
        }
        
        .title .lang {
            margin-top: 4.7rem;
        }
        .bsx .title .lang {
            margin-top: .8rem;
            margin-bottom: 1rem;
        }
        
        .footer {
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 0.6037in;
        }
        
        .logo {
            width: 113px;
            height: auto;
        }

        .bsx .logo {
            width: 150px;
        }
        
        @page {
            margin: 0;
            size: A4;
        }
        
        @media print {
            body {
                width: 8.27in;
                height: 11.693in;
            }
            
            .coverpage {
                height: 11.693in;
                width: 8.27in;
            }
        }
    </style>
</head>
<body>
    <div class="${coverpageClass}">
        <div class="title">
            <h1${title.length > 15 ? ' class="small"' : ''}>${title}</h1>
            <div class="subtitle">${processedSubtitle}</div>
            <div class="ver">${processedVersion}</div>
            <div class="lang">${lang}</div>
            <div class="number">${processedNumber}</div>
        </div>
        <div class="footer">
            <img src="${logoDataUri}" class="logo" alt="Suprema Logo" />
        </div>
    </div>
</body>
</html>`;
}

// 메인 실행 함수
function main() {
    const args = parseArgs();
    
    if (args.help || Object.keys(args).length === 0) {
        console.log(`
사용법:
  node generate-cover-local.js --title="제품명" --subtitle="문서 제목" --version="1.0.0" --lang="언어" --number="문서 번호" [--output="파일경로"]

예시:
  node generate-cover-local.js --title="BioStation 3" --subtitle="IG" --version="1.08" --lang="한국어" --number="101.00.BS3"
  node generate-cover-local.js --title="BioStation 3" --subtitle="UG" --version="1.08" --lang="English" --number="101.00.BS3"

옵션:
  --title     제품명 (기본값: "BioStation 3")
  --subtitle  문서 제목 코드 또는 직접 입력 
              - IG: 설치 가이드 (한국어) / INSTALLATION GUIDE (영어)
              - UG: 사용자 가이드 (한국어) / USER GUIDE (영어)
              - AG: 관리자 가이드 (한국어) / ADMINISTRATOR GUIDE (영어)
              - 또는 직접 제목 입력 (기본값: "IG")
  --version   버전 번호 (예: "1.08") - 언어에 따라 자동으로 "버전 1.08" 또는 "Version 1.08"로 표시됩니다 (기본값: "1.08")
  --lang      언어 (기본값: "한국어")
  --number    문서 번호 (기본값: "101.00.BS3")
  --output    출력 파일 경로 (기본값: "./cover.html")
        `);
        return;
    }
    
    const html = generateCoverHTML(args);
    const outputPath = args.output || './cover.html';
    
    // 디렉토리 생성
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, html, 'utf-8');
    console.log(`✅ 커버 HTML 생성 완료: ${outputPath}`);
    console.log(`📄 PDF 생성 명령어: prince "${outputPath}" -o "${outputPath.replace('.html', '.pdf')}"`);
    
    // 사용된 파라미터 출력을 위해 동일한 로직 적용
    const lang = args.lang || '한국어';
    const number = args.number || 'KO 101.00.853';
    const version = args.version || '1.08';
    const { isKorean, isJapanese } = detectLanguage(lang, number);
    const processedSubtitle = getLocalizedSubtitle(args.subtitle || 'IG', isKorean, isJapanese);
    const { processedVersion } = getProcessedVersionAndNumber(version, number, isKorean, isJapanese);
    
    console.log('\n📋 사용된 파라미터:');
    console.log(`  제품명: ${args.title || 'BioStation 3'}`);
    console.log(`  문서 제목: ${processedSubtitle} (입력값: ${args.subtitle || 'IG'})`);
    console.log(`  버전: ${processedVersion} (입력값: ${version})`);
    console.log(`  언어: ${lang}`);
    console.log(`  문서 번호: ${number}`);
}

if (require.main === module) {
    main();
}

module.exports = { generateCoverHTML, parseArgs };
