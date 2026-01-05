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
    return `<svg xmlns="http://www.w3.org/2000/svg" width="170.079" height="36.85" viewBox="0 0 113.39 24.57">
        <defs>
        <style>
            .cls-1 {
            fill: #a32343;
            }

            .cls-2 {
            fill: #717071;
            }
        </style>
        </defs>
        <g>
        <g>
            <path class="cls-2" d="M81.98,20.49h2.45s0,.63,0,.63h-1.66s0,.99,0,.99h1.53s0,.63,0,.63h-1.53s0,1.13,0,1.13h1.67s0,.63,0,.63h-2.46s0-4,0-4Z"/>
            <path class="cls-2" d="M58.67,20.48h1.5c.16,0,.32.01.47.04.16.03.3.08.44.15.14.08.25.18.34.32s.13.31.13.52c0,.23-.08.43-.23.59-.16.16-.36.26-.62.31h0c.29.04.53.14.71.3.18.17.27.38.27.62,0,.24-.05.44-.15.59-.1.16-.23.28-.38.36-.15.08-.31.14-.48.17-.17.03-.33.05-.5.05h-1.5s0-4.01,0-4.01ZM59.53,22.1h.35c.1,0,.2,0,.29-.02.09-.01.18-.04.26-.07.08-.03.14-.08.19-.15.05-.06.07-.15.07-.25,0-.11-.02-.2-.07-.27-.05-.07-.11-.12-.19-.15s-.16-.05-.26-.06c-.09,0-.2-.01-.32-.01h-.33s0,.99,0,.99ZM59.53,23.86h.41c.11,0,.22,0,.32-.02.1-.02.19-.04.28-.09.09-.04.15-.1.21-.17.05-.07.08-.17.08-.28,0-.13-.02-.23-.07-.31-.05-.08-.12-.14-.2-.18-.08-.04-.18-.07-.28-.09-.1-.01-.21-.02-.34-.02h-.41s0,1.16,0,1.16Z"/>
            <path class="cls-2" d="M64.28,20.48h.86s0,4.01,0,4.01h-.86s0-4.01,0-4.01Z"/>
            <path class="cls-2" d="M68.25,20.98c.36-.37.87-.56,1.53-.56.33,0,.62.05.88.15s.48.24.65.43c.18.18.31.4.4.65.09.25.14.53.14.83,0,.31-.05.59-.14.84-.09.25-.22.47-.4.66-.18.19-.39.33-.65.43-.26.1-.55.15-.89.15-.66,0-1.18-.19-1.54-.57-.36-.38-.54-.89-.54-1.52,0-.63.18-1.13.54-1.5ZM68.66,23.02c.04.17.11.33.21.47.1.14.22.25.37.33.15.08.33.12.54.12.21,0,.39-.04.54-.12.15-.08.27-.19.37-.33.1-.14.16-.29.21-.47.04-.17.07-.35.07-.54,0-.18-.02-.36-.07-.53-.05-.17-.12-.32-.22-.46-.1-.14-.22-.24-.37-.32-.15-.08-.33-.12-.53-.12-.2,0-.38.04-.53.12-.15.08-.28.19-.37.33-.1.14-.17.29-.22.46-.05.17-.07.35-.07.53,0,.19.02.37.07.54Z"/>
            <path class="cls-2" d="M74.31,20.49h1.38s1.02,3.04,1.02,3.04h.01l1.02-3.04h1.38s0,4.01,0,4.01h-.82s0-3.31,0-3.31h-.01l-1.15,3.31h-.82s-1.16-3.31-1.16-3.31h-.01s0,3.31,0,3.31h-.82s0-4.01,0-4.01Z"/>
            <path class="cls-2" d="M88.21,21.12h-1.23s0-.63,0-.63h3.32s0,.63,0,.63h-1.23s0,3.38,0,3.38h-.86s0-3.38,0-3.38Z"/>
            <path class="cls-2" d="M92.74,20.48h.93c.33,0,.6,0,.82.02.22.02.42.06.6.13.18.07.33.18.44.33.11.15.16.35.16.6,0,.24-.08.45-.24.62-.16.17-.38.28-.65.31h0c.1.02.19.06.26.14.07.08.14.17.19.29l.69,1.57h-.96s-.52-1.25-.52-1.25c-.07-.16-.14-.27-.22-.33-.08-.06-.21-.09-.38-.09h-.28s0,1.67,0,1.67h-.86s0-4.01,0-4.01ZM93.6,22.19h.28c.13,0,.24,0,.34-.02.1-.01.19-.04.28-.08.09-.04.16-.1.21-.17.05-.07.08-.17.08-.29,0-.11-.03-.21-.08-.28-.05-.07-.12-.12-.21-.16-.09-.03-.18-.06-.28-.07-.1-.01-.22-.02-.35-.02h-.28s0,1.08,0,1.08Z"/>
            <path class="cls-2" d="M98.6,20.48h.86s0,4.01,0,4.01h-.86s0-4.01,0-4.01Z"/>
            <path class="cls-2" d="M105.46,24.37c-.17.04-.33.07-.49.09-.16.02-.31.03-.45.03-.7,0-1.24-.16-1.64-.48-.21-.16-.36-.37-.47-.61-.11-.24-.16-.53-.16-.85,0-.66.2-1.17.6-1.53s.96-.54,1.67-.54c.15,0,.3.01.47.04.17.03.32.07.47.12l-.06.66c-.15-.08-.29-.13-.43-.16-.14-.03-.3-.04-.46-.04-.21,0-.4.04-.57.11-.17.07-.32.17-.44.3-.12.13-.21.28-.28.45-.07.17-.1.36-.1.56,0,.4.13.74.38.99.25.26.6.39,1.03.39.17,0,.33-.02.51-.05.17-.03.3-.07.4-.12l.04.65Z"/>
            <path class="cls-2" d="M110.51,21.26c-.28-.11-.57-.17-.87-.17-.08,0-.16,0-.24.03-.08.02-.15.05-.22.09-.07.04-.12.1-.16.17-.04.07-.06.16-.06.26,0,.13.06.22.17.3.12.07.3.15.54.23.18.06.33.12.45.17.12.05.24.12.35.21.11.09.2.19.27.32.07.13.1.28.1.47,0,.2-.04.38-.13.54-.08.15-.2.28-.35.37-.15.09-.32.16-.51.21-.19.05-.4.07-.63.07-.2,0-.36,0-.49-.03-.13-.02-.3-.05-.52-.1l-.09-.02.08-.7c.15.07.31.13.48.18.17.04.33.06.5.06.19,0,.36-.04.52-.13.16-.09.24-.21.24-.37,0-.14-.06-.26-.18-.33-.12-.08-.31-.16-.57-.25-.17-.06-.32-.12-.44-.17-.12-.05-.23-.12-.34-.2-.11-.08-.19-.19-.26-.31-.07-.12-.1-.27-.1-.45,0-.21.04-.39.12-.54.08-.15.19-.28.34-.37.14-.1.3-.16.48-.21.18-.04.36-.07.57-.07.38,0,.72.05,1.03.14l-.08.64Z"/>
        </g>
        <g>
            <path class="cls-2" d="M8.36,20.49h2.45s0,.63,0,.63h-1.66s0,.99,0,.99h1.53s0,.63,0,.63h-1.53s0,1.13,0,1.13h1.67s0,.63,0,.63h-2.46s0-4,0-4Z"/>
            <path class="cls-2" d="M19.36,20.48h.78s0,2.31,0,2.31c0,.36.06.64.19.83.13.2.33.29.62.29.29,0,.49-.1.62-.3.13-.2.19-.47.19-.83v-2.31s.78,0,.78,0v2.56c0,.52-.13.9-.4,1.15-.27.25-.67.37-1.19.37-.51,0-.91-.12-1.18-.37-.27-.24-.41-.63-.41-1.15v-2.56Z"/>
            <path class="cls-2" d="M41.5,22.91l-1.43-2.45h.92s.92,1.7.92,1.7l.94-1.7h.83s-1.4,2.45-1.4,2.45v1.6s-.78,0-.78,0v-1.6Z"/>
            <path class="cls-2" d="M36.09,21.12h-1.23s0-.63,0-.63h3.32s0,.63,0,.63h-1.23s0,3.38,0,3.38h-.86s0-3.38,0-3.38Z"/>
            <path class="cls-2" d="M25.38,20.48h.93c.33,0,.6,0,.82.02.22.02.42.06.6.13.18.07.33.18.44.33.11.15.16.35.16.6,0,.24-.08.45-.24.62-.16.17-.38.28-.65.31h0c.1.02.19.06.26.14.07.08.14.17.19.29l.69,1.57h-.96s-.52-1.25-.52-1.25c-.07-.16-.14-.27-.22-.33-.08-.06-.21-.09-.38-.09h-.28s0,1.67,0,1.67h-.86s0-4.01,0-4.01ZM26.24,22.19h.28c.13,0,.24,0,.34-.02s.19-.04.28-.08c.09-.04.16-.1.21-.17.05-.07.08-.17.08-.29,0-.11-.03-.21-.08-.28-.05-.07-.12-.12-.21-.16-.09-.03-.18-.06-.28-.07-.1-.01-.22-.02-.35-.02h-.28s0,1.08,0,1.08Z"/>
            <path class="cls-2" d="M31.19,20.48h.86s0,4.01,0,4.01h-.86s0-4.01,0-4.01Z"/>
            <path class="cls-2" d="M16.7,24.37c-.17.04-.33.07-.49.09-.16.02-.31.03-.45.03-.7,0-1.24-.16-1.64-.48-.21-.16-.36-.37-.47-.61-.11-.24-.16-.53-.16-.85,0-.66.2-1.17.6-1.53.4-.36.96-.54,1.67-.54.15,0,.3.01.47.04.17.03.32.07.47.12l-.06.66c-.15-.08-.29-.13-.43-.16-.14-.03-.3-.04-.46-.04-.21,0-.4.04-.57.11-.17.07-.32.17-.44.3-.12.13-.21.28-.28.45-.07.17-.1.36-.1.56,0,.4.13.74.38.99.25.26.6.39,1.03.39.17,0,.33-.02.51-.05.17-.03.3-.07.4-.12l.04.65Z"/>
            <path class="cls-2" d="M4.75,21.26c-.28-.11-.57-.17-.87-.17-.08,0-.16,0-.24.03-.08.02-.15.05-.22.09-.07.04-.12.1-.16.17-.04.07-.06.16-.06.26,0,.13.06.22.17.3.12.07.3.15.54.23.18.06.33.12.45.17.12.05.24.12.35.21.11.09.2.19.27.32.07.13.1.28.1.47,0,.2-.04.38-.13.54-.08.15-.2.28-.35.37-.15.09-.32.16-.51.21-.19.05-.4.07-.63.07-.2,0-.36,0-.49-.03-.13-.02-.3-.05-.52-.1l-.09-.02.08-.7c.15.07.31.13.48.18.17.04.33.06.5.06.19,0,.36-.04.52-.13.16-.09.24-.21.24-.37,0-.14-.06-.26-.18-.33-.12-.08-.31-.16-.57-.25-.17-.06-.32-.12-.44-.17-.12-.05-.23-.12-.34-.2-.11-.08-.19-.19-.26-.31-.07-.12-.1-.27-.1-.45,0-.21.04-.39.12-.54.08-.15.19-.28.34-.37.14-.1.3-.16.48-.21.18-.04.36-.07.57-.07.38,0,.72.05,1.03.14l-.08.64Z"/>
        </g>
        <path class="cls-2" d="M52.28,23.62c.22-.27.39-.65.51-1.11l.03-.1h-.64l-.02.06c-.07.31-.17.56-.3.73l-.87-.84c.23-.14.4-.29.51-.44.13-.17.19-.36.19-.57,0-.28-.09-.5-.27-.66-.18-.16-.42-.24-.73-.24-.33,0-.59.08-.77.24-.19.16-.28.39-.28.67,0,.11.02.22.05.32.03.1.08.19.14.29.05.08.12.17.22.29-.27.17-.47.33-.58.5-.12.18-.19.4-.19.64,0,.35.12.63.35.83.23.19.54.29.93.29.26,0,.5-.04.72-.12.2-.07.39-.19.58-.34l.43.41h.87l-.86-.84ZM51.43,23.64c-.24.2-.53.3-.87.3-.19,0-.35-.05-.46-.15-.11-.1-.17-.23-.17-.4,0-.14.04-.26.11-.36.07-.1.2-.21.4-.33l.99.96ZM50.25,21.36c0-.11.04-.19.11-.26.07-.07.18-.1.31-.1.12,0,.21.03.28.1.07.06.1.15.1.25,0,.12-.04.23-.11.32-.07.09-.2.19-.37.29-.11-.11-.19-.22-.24-.31-.05-.1-.08-.2-.08-.3Z"/>
        </g>
        <g>
        <path class="cls-1" d="M25.69.73v9.41c.01.62.02,1.55-.5,2.06-.36.36-.93.54-1.72.54h-2.51c-.42,0-1.13,0-1.64-.5-.42-.42-.63-1.12-.64-2.08V.73s-3.15,0-3.15,0v9.46c.01.94.24,5.65,4.68,5.65h4.14c1.68,0,4.5-.75,4.5-5.66V.72s-3.17,0-3.17,0Z"/>
        <path class="cls-1" d="M8.22,6.27l-3.43-.43c-.83-.13-1.56-.33-1.56-1.21,0-1.39.4-1.77,3.2-1.77h.7c1.65.08,3.18.23,5.06.74l.23.06V1.51s-.02-.04-.02-.04C12.11.92,9.53.03,7.01.04h-.7C2.06.04,0,1.62,0,4.87c0,3.12,2.62,3.79,5.07,4.17l1.52.21c1.11.14,1.76.23,2.15.39.66.26,1.03.49,1.01,1.53-.02,1.73-1.17,1.92-3.66,1.92h-.7c-1.47,0-3.24-.41-5.14-1.19l-.25-.11v2.12c0,.86,2.6,1.95,5.51,1.94h.64c4.75,0,6.96-1.61,6.96-5.04,0-3.33-2.48-4.15-4.89-4.53"/>
        <path class="cls-1" d="M39.61.02h-.46c-5.74,0-7.87,2.17-7.87,7.98v7.85s3.36,0,3.36,0v-7.83c-.01-4.41.97-5.15,3.93-5.16h.75c2.85,0,3.38.83,3.38,2.86,0,1.26-.41,2.71-1.57,2.71l-5.28-.09v2.3s.15.02.15.02c1.06.18,2.94.31,4.38.31,4.93,0,5.74-2.71,5.74-4.98,0-3.75-2.44-5.98-6.5-5.97"/>
        <path class="cls-1" d="M57.4.21C56.53.07,54.49,0,53.46,0c-1.84,0-4.92.75-4.92,5.76v10.09s3.3,0,3.3,0V5.97c-.01-2.66.47-2.93,2.55-2.93h3.01V.21Z"/>
        <path class="cls-1" d="M67.56,12.95h-.64c-2.79,0-4.48-.33-4.48-4.93,0-4.4.98-5.14,3.96-5.14h.75c2.78,0,3.38.45,3.38,2.55,0,1.05-.47,1.5-1.57,1.5h-5.29s0,2.21,0,2.21l.15.03c1.05.18,2.93.31,4.38.31,2.14,0,5.73-.41,5.73-4.52S70.39.03,67.43.04h-.47c-5.75,0-7.89,2.17-7.88,7.98,0,5.56,2.19,7.83,7.55,7.82h.41c3.39,0,6.26-.9,6.26-1.96v-1.83s-.23.06-.23.06c-1.97.52-3.51.83-5.51.83"/>
        <path class="cls-1" d="M96.09,5.86c0-2.73-1.03-4.14-2.15-4.86h0s-1.21-.91-3.36-.91c-1.05,0-1.87.14-2.51.35-.89.25-1.44.68-1.72.95-.1.09-.14.15-.14.15,0,0-1.14-1.47-4.38-1.45-1.41,0-2.42.39-2.94.66-.02,0-.04.02-.05.03-.03.02-.06.03-.08.04-2.12,1.15-2.4,3.76-2.4,5.06v9.97s3,0,3,0V5.88c-.01-1.5.3-2.89,2.54-2.89,2.33,0,2.78,1.06,2.79,2.89v9.97s3.09,0,3.09,0V5.87c-.01-1.99.81-2.92,2.56-2.92,1.9,0,2.75.9,2.76,2.92v9.97s3.01,0,3.01,0V5.86Z"/>
        <path class="cls-1" d="M104.91,2.94h.64c2.79,0,4.48.33,4.48,4.93,0,4.4-.98,5.14-3.96,5.14h-.75c-2.78,0-3.38-.45-3.38-2.55,0-1.05.47-1.5,1.57-1.5h5.29s0-2.21,0-2.21l-.15-.03c-1.05-.18-2.93-.31-4.38-.31-2.14,0-5.73.41-5.73,4.52s3.53,4.91,6.49,4.9h.47c5.75,0,7.89-2.17,7.88-7.98,0-5.56-2.19-7.83-7.55-7.82h-.41c-3.39,0-6.26.9-6.26,1.96v1.83s.23-.06.23-.06c1.97-.52,3.51-.83,5.51-.83"/>
        </g>
    </svg>`;
}

// 언어 감지 함수
function detectLanguage(lang, number) {
    const isKorean = lang === "한국어" || (lang !== "English" && lang !== "日本語" && lang !== "Español" && number.startsWith('KO'));
    const isJapanese = lang === "日本語" || number.startsWith('JA');
    const isSpanish = lang === "Español" || number.startsWith('ES');
    return { isKorean, isJapanese, isSpanish };
}

// 언어별 버전 및 번호 레이블 매핑
function getLocalizedVersionAndNumber() {
    return {
        version: {
            ko: '버전',
            en: 'Version',
            ja: 'バージョン',
            es: 'Versión'
        },
        number: {
            ko: 'KO',
            en: 'EN',
            ja: 'JA',
            es: 'ES'
        }
    };
}

// 언어에 따른 버전 및 번호 처리
function getProcessedVersionAndNumber(version, number, isKorean, isJapanese, isSpanish) {
    const langCode = isKorean ? 'ko' : isJapanese ? 'ja' : isSpanish ? 'es' : 'en';
    const { version: versionLabel, number: numberLabel } = getLocalizedVersionAndNumber();
    
    const processedVersion = `${versionLabel[langCode]} ${version}`;
    const processedNumber = `${numberLabel[langCode]} ${number}`;
    return { processedVersion, processedNumber };
}

// subtitle 값에 따른 언어별 제목 매핑
function getLocalizedSubtitle(subtitleCode, isKorean = true, isJapanese = false, isSpanish = false) {
    const subtitleMap = {
        'IG': {
            ko: '설치 가이드',
            en: 'INSTALLATION GUIDE',
            ja: '設置ガイド',
            es: 'Guía de instalación de'
        },
        'UG': {
            ko: '사용자 가이드',
            en: 'USER GUIDE',
            ja: 'ユーザーガイド',
            es: 'Guía de usuario de'
        },
        'AG': {
            ko: '관리자 가이드',
            en: 'Administrator Guide',
            ja: '管理者ガイド',
            es: 'Guía del administrador de'
        },
        'RN': {
            ko: 'Release Notes',
            en: 'Release Notes',
            ja: 'Release Notes',
            es: 'Release Notes'
        }
    };

    const mapping = subtitleMap[subtitleCode];
    if (!mapping) {
        // 코드가 없으면 원본 값을 그대로 반환
        return subtitleCode;
    }

    const langCode = isKorean ? 'ko' : isJapanese ? 'ja' : isSpanish ? 'es' : 'en';
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
    const { isKorean, isJapanese, isSpanish } = detectLanguage(lang, number);
    
    // subtitle이 코드(IG, UG, AG)인지 확인하고 적절한 제목으로 변환
    const processedSubtitle = getLocalizedSubtitle(subtitle, isKorean, isJapanese, isSpanish);
    
    // 버전과 번호 처리
    const { processedVersion, processedNumber } = getProcessedVersionAndNumber(version, number, isKorean, isJapanese, isSpanish);

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
            width: 170.079px;
            height: 36.85px;
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
    const { isKorean, isJapanese, isSpanish } = detectLanguage(lang, number);
    const processedSubtitle = getLocalizedSubtitle(args.subtitle || 'IG', isKorean, isJapanese, isSpanish);
    const { processedVersion } = getProcessedVersionAndNumber(version, number, isKorean, isJapanese, isSpanish);
    
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
