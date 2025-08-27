const fs = require('fs');
const path = require('path');

/**
 * 로컬 커버 페이지 HTML 생성기
 * 명령줄 예시: node generate-cover-local.js --title="BioStation 3" --subtitle="IG" --version="버전 1.08" --lang="한국어" --number="KO 101.00.853"
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

// subtitle 값에 따른 언어별 제목 매핑
function getLocalizedSubtitle(subtitleCode, isKorean = true) {
    const subtitleMap = {
        'IG': {
            ko: '설치 가이드',
            en: 'INSTALLATION GUIDE'
        },
        'UG': {
            ko: '사용자 가이드',
            en: 'USER GUIDE'
        },
        'AG': {
            ko: '관리자 가이드',
            en: 'ADMINISTRATOR GUIDE'
        }
    };

    const mapping = subtitleMap[subtitleCode];
    if (!mapping) {
        // 코드가 없으면 원본 값을 그대로 반환
        return subtitleCode;
    }

    return isKorean ? mapping.ko : mapping.en;
}

// HTML 템플릿 생성
function generateCoverHTML(params) {
    const {
        title = "BioStation 3",
        subtitle = "IG", 
        version = "버전 1.08",
        lang = "한국어",
        number = "KO 101.00.BS3"
    } = params;

    // 언어 감지 (문서 번호나 lang 파라미터로 판단)
    const isKorean = number.startsWith('KO') || lang === "한국어";
    
    // subtitle이 코드(IG, UG, AG)인지 확인하고 적절한 제목으로 변환
    const processedSubtitle = getLocalizedSubtitle(subtitle, isKorean);

    const logoSVG = getSupremaLogoSVG();
    const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSVG).toString('base64')}`;

    return `<!DOCTYPE html>
<html lang="${isKorean ? 'ko' : 'en'}">
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
            background: rgb(255,255,255);
            background: radial-gradient(circle, rgba(255,255,255,1) 84%, rgba(217,224,229,1) 100%);
            position: relative;
            overflow: hidden;
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
        
        .title h1 {
            font-family: "Montserrat", sans-serif;
            font-weight: bold;
            font-size: 50pt;
            margin-bottom: 0;
            line-height: 1.1;
        }
        
        .title h1.small {
            font-size: 37pt;
            line-height: 1.1;
        }
        
        .title h2 {
            font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
            font-weight: 300;
            font-size: 26pt;
            margin-bottom: 0;
            line-height: 1.2;
        }
        
        .title .ver {
            font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
            font-weight: 500;
            font-size: 10pt;
            position: relative;
            margin-top: 0.2rem;
            left: 4px;
        }
        
        .title .lang,
        .title .number {
            font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
            font-weight: 500;
            font-size: 10pt;
            position: relative;
            text-align: right;
        }
        
        .title .lang {
            margin-top: 4.7rem;
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
    <div class="coverpage">
        <div class="title">
            <h1${title.length > 15 ? ' class="small"' : ''}>${title}</h1>
            <h2>${processedSubtitle}</h2>
            <div class="ver">${version}</div>
            <div class="lang">${lang}</div>
            <div class="number">${number}</div>
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
  node generate-cover-local.js --title="제품명" --subtitle="문서 제목" --version="버전" --lang="언어" --number="문서 번호" [--output="파일경로"]

예시:
  node generate-cover-local.js --title="BioStation 3" --subtitle="IG" --version="버전 1.08" --lang="한국어" --number="KO 101.00.853"
  node generate-cover-local.js --title="BioStation 3" --subtitle="UG" --version="Version 1.08" --lang="English" --number="EN 101.00.853"

옵션:
  --title     제품명 (기본값: "BioStation 3")
  --subtitle  문서 제목 코드 또는 직접 입력 
              - IG: 설치 가이드 (한국어) / INSTALLATION GUIDE (영어)
              - UG: 사용자 가이드 (한국어) / USER GUIDE (영어)
              - AG: 관리자 가이드 (한국어) / ADMINISTRATOR GUIDE (영어)
              - 또는 직접 제목 입력 (기본값: "IG")
  --version   버전 정보 (기본값: "버전 1.08")
  --lang      언어 (기본값: "한국어")
  --number    문서 번호 (기본값: "KO 101.00.853")
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
    const isKorean = (args.number || 'KO 101.00.853').startsWith('KO') || (args.lang || '한국어') === "한국어";
    const processedSubtitle = getLocalizedSubtitle(args.subtitle || 'IG', isKorean);
    
    console.log('\n📋 사용된 파라미터:');
    console.log(`  제품명: ${args.title || 'BioStation 3'}`);
    console.log(`  문서 제목: ${processedSubtitle} (입력값: ${args.subtitle || 'IG'})`);
    console.log(`  버전: ${args.version || '버전 1.08'}`);
    console.log(`  언어: ${args.lang || '한국어'}`);
    console.log(`  문서 번호: ${args.number || 'KO 101.00.853'}`);
}

if (require.main === module) {
    main();
}

module.exports = { generateCoverHTML, parseArgs };
