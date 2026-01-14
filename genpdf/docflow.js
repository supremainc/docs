#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import yaml from 'js-yaml';
import MarkdownIt from 'markdown-it';
import markdownItInclude from 'markdown-it-include';
import { container } from '@mdit/plugin-container';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItTOC from 'markdown-it-table-of-contents';
import markdownItFootnote from 'markdown-it-footnote';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItMultimdTable from 'markdown-it-multimd-table';
import mdCodeBlock from 'markdown-it-code-block';
import { execSync } from 'child_process';
import crypto from 'crypto';

// 커버 페이지 생성 함수들
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
    return subtitleCode;
  }

  return isKorean ? mapping.ko : mapping.en;
}

function generateCoverHTML(config, templateContent) {
  const {
    title = "Document Title",
    docutype = "AG", 
    version = "1.0.0",
    lang = "English",
    docuNum = "101.00.DOC",
    outputName = "Suprema_Document"
  } = config;

  // 언어 감지
  const isKorean = lang === "한국어" || lang === "Korean" || (lang !== "English" && docuNum.startsWith('KO'));
  
  // docutype을 적절한 제목으로 변환
  const processedSubtitle = getLocalizedSubtitle(docutype, isKorean);
  
  // 버전에 언어별 접두사 추가
  const processedVersion = isKorean ? `버전 ${version}` : `Version ${version}`;
  const processedNumber = isKorean ? `KO ${docuNum}` : `EN ${docuNum}`;
  const footNoteTitle = isKorean ? `각주` : `Footnotes`;

  // 제목 길이에 따른 클래스 결정
  const titleClass = title.length > 15 ? ' class="small"' : '';
  
  // 언어 코드 결정
  const langCode = isKorean ? 'ko' : 'en';

  // 템플릿 변수 치환
  return templateContent
    .replace(/\{\{title\}\}/g, title)
    .replace(/\{\{title_class\}\}/g, titleClass)
    .replace(/\{\{subtitle\}\}/g, processedSubtitle)
    .replace(/\{\{version\}\}/g, processedVersion)
    .replace(/\{\{lang\}\}/g, lang)
    .replace(/\{\{docuNum\}\}/g, processedNumber)
    .replace(/\{\{lang_code\}\}/g, langCode);
}

class DocumentBuilder {
  constructor(configFile = 'paxton_book.yml', cssFile = 'templates/default.css', coverTemplate = 'templates/cover.html') {
    this.configFile = configFile;
    this.cssFile = cssFile;
    this.coverTemplate = coverTemplate;
    this.config = null;
    this.md = null;
    this.initMarkdownParser();
  }

  initMarkdownParser() {
    this.md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true
    });

    // markdown-it-include 플러그인 설정
    this.md.use(markdownItInclude, {
      root: path.dirname(this.configFile)
    });

    // markdown-it-multimd-table 플러그인 설정 - 고급 테이블 기능
    this.md.use(markdownItMultimdTable, {
      multiline: true,
      rowspan: true,
      headerless: true,
      multibody: true
    });

    // markdown-it-table-of-contents 플러그인 설정
    this.md.use(markdownItTOC, {
      includeLevel: [1, 2], // h1, h2, h3까지만 포함
      containerClass: 'table-of-contents',
      slugify: (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-가-힣]/g, ''),
      markerPattern: /^\[\[toc\]\]/im,
      listType: 'ul',
      format: function(content, md) {
        return md.renderInline(content);
      }
    });

    // markdown-it-anchor 플러그인 설정 - heading에 앵커 추가
    this.md.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: 'after',
        class: 'header-anchor',
        symbol: ' '
      }),
      slugify: (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-가-힣]/g, '')
    });

    // markdown-it-footnote 플러그인 설정 - 각주 지원
    this.md.use(markdownItFootnote);

    // 기본 각주 렌더러 설정 (언어별로 나중에 업데이트됨)
    this.md.renderer.rules.footnote_block_open = () => (
      '<h2 class="footnotes-title">Footnotes</h2>\n' +
      '<section class="footnotes">\n' +
      '<ol class="footnotes-list">\n'
    );

    // markdown-it-attrs 플러그인 설정 - HTML 속성 지원
    this.md.use(markdownItAttrs);

    // code block 플러그인 설정
    this.md.use(mdCodeBlock);

    // @mdit/plugin-container 플러그인 설정 - info, caution, note 등의 컨테이너
    this.md.use(container, {
      name: 'info',
      openRender: (tokens, index) => {
        const info = tokens[index].info.trim().slice(4).trim();
        return '<div class="info container"><div class="info icon"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3306 15.0593C12.1894 15.0593 12.0481 14.9907 11.9617 14.8615C11.8205 14.6515 11.8675 14.3649 12.0716 14.2155C13.9671 12.8468 15.1013 10.6101 15.1013 8.23215C15.1013 4.20288 11.9146 0.928589 8.00196 0.928589C4.08928 0.928589 0.902624 4.20288 0.902624 8.23215C0.902624 10.6101 2.03287 12.8468 3.92838 14.2155C4.13245 14.3608 4.17954 14.6515 4.03826 14.8615C3.89306 15.0714 3.61442 15.1239 3.41035 14.9745C1.27545 13.4322 0 10.9129 0 8.23215C0 3.69417 3.59088 0 8.00196 0C12.413 0 16.0039 3.69417 16.0039 8.23215C16.0039 10.9129 14.7285 13.4322 12.5936 14.9745C12.5151 15.031 12.4248 15.0593 12.3346 15.0593H12.3306Z" fill="#717071"/><path d="M5.85533 16V15.136H5.98484C6.236 15.136 6.43615 15.0593 6.58136 14.9139C6.72656 14.7646 6.7972 14.4739 6.7972 14.0459V9.85111C6.7972 9.4716 6.71871 9.21321 6.56566 9.07594C6.4126 8.93867 6.21638 8.866 5.98484 8.866H5.7533V8.00201H9.29315V14.0903C9.29315 14.4981 9.36772 14.7726 9.51685 14.918C9.66598 15.0633 9.8622 15.136 10.1055 15.136H10.2507V16H5.85533ZM9.11263 5.9147C9.11263 6.6172 8.55928 7.18243 7.88035 7.18243C7.20142 7.18243 6.64807 6.61316 6.64807 5.9147C6.64807 5.21624 7.20142 4.64697 7.88035 4.64697C8.55928 4.64697 9.11263 5.21624 9.11263 5.9147Z" fill="#717071"/></svg></div>' + (info ? '<div class="info-title">' + info + '</div>' : '') + '\n<div class="content">';
      },
      closeRender: () => '</div></div>\n'
    });

    this.md.use(container, {
      name: 'warning',
      openRender: (tokens, index) => {
        const info = tokens[index].info.trim().slice(7).trim();
        return '<div class="warning container"><div class="warning icon"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5606 15.5499H11.7892C11.549 15.5499 11.3506 15.3554 11.3506 15.1113C11.3506 14.8672 11.5451 14.6727 11.7892 14.6727H16.5606C16.717 14.6727 16.7971 14.5583 16.8276 14.5087C16.8963 14.3905 16.8963 14.2455 16.8276 14.1273L9.13847 1.03361C9.05456 0.888677 8.92488 0.873421 8.8753 0.873421C8.82571 0.873421 8.69604 0.888677 8.61213 1.03361L0.926787 14.1311C0.858134 14.2493 0.858134 14.3943 0.926787 14.5125C0.953486 14.5621 1.0374 14.6765 1.19377 14.6765H6.26648C6.50676 14.6765 6.70509 14.871 6.70509 15.1151C6.70509 15.3592 6.51058 15.5538 6.26648 15.5538H1.18996C0.762782 15.5538 0.381376 15.3287 0.163974 14.9511C-0.0610556 14.5621 -0.0572416 14.0777 0.171602 13.6925L7.85694 0.59118C8.07434 0.221216 8.45575 0 8.8753 0C9.29484 0 9.67625 0.221216 9.89365 0.59118L17.579 13.6887C17.8078 14.0739 17.8078 14.5583 17.5866 14.9473C17.3692 15.3249 16.9878 15.5499 16.5606 15.5499Z" fill="#A32343"/><path d="M8.87531 13.8336C8.2765 13.8336 7.79211 14.318 7.79211 14.9168C7.79211 15.5156 8.2765 16 8.87531 16C9.47412 16 9.9585 15.5156 9.9585 14.9168C9.9585 14.318 9.47412 13.8336 8.87531 13.8336Z" fill="#A32343"/><path d="M8.87536 12.8802C9.37119 12.8802 9.6725 12.6094 9.78692 12.1974C9.90134 11.7855 10.1721 8.93641 10.2446 7.45655C10.2827 6.62509 9.63054 6.03772 8.87536 6.03772C8.12017 6.03772 7.46797 6.62509 7.50611 7.45655C7.57476 8.93259 7.84938 11.7817 7.9638 12.1974C8.07822 12.6094 8.37953 12.8802 8.87536 12.8802Z" fill="#A32343"/></svg></div>' + (info ? '<div class="warinig-title">' + info + '</div>' : '') + '\n<div class="content">';
      },
      closeRender: () => '</div></div>\n'
    });

    this.md.use(container, {
      name: 'caution',
      openRender: (tokens, index) => {
        const info = tokens[index].info.trim().slice(7).trim();
        return '<div class="caution container"><div class="caution icon"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_630_8)"><path d="M10.8977 14.529C10.7469 14.529 10.6034 14.4458 10.5261 14.3021C10.4157 14.0903 10.4893 13.8294 10.6917 13.7121C12.8256 12.5096 14.1538 10.2104 14.1538 7.70692C14.1538 3.93288 11.1663 0.865989 7.49816 0.865989C3.83002 0.865989 0.84621 3.93666 0.84621 7.71071C0.84621 10.2104 2.17071 12.5096 4.30831 13.7121C4.51435 13.8256 4.58793 14.0903 4.47388 14.3021C4.35982 14.5138 4.10596 14.5895 3.89993 14.4722C1.49375 13.1184 0 10.5242 0 7.71071C0 3.46017 3.36645 0 7.50184 0C11.6372 0 15.0037 3.46017 15.0037 7.71071C15.0037 10.528 13.5099 13.1184 11.1038 14.476C11.0412 14.5138 10.9713 14.529 10.9014 14.529H10.8977Z" fill="#F9BE00"/><path d="M7.50189 13.5948C6.85435 13.5948 6.33191 14.1318 6.33191 14.7974C6.33191 15.463 6.85435 16 7.50189 16C8.14942 16 8.67187 15.463 8.67187 14.7974C8.67187 14.1318 8.14942 13.5948 7.50189 13.5948Z" fill="#F9BE00"/><path d="M7.50183 12.5398C8.03531 12.5398 8.36276 12.241 8.48785 11.7797C8.60927 11.3221 8.9036 8.16066 8.98086 6.52322C9.02133 5.60051 8.31861 4.95007 7.50551 4.95007C6.69241 4.95007 5.98601 5.60429 6.03016 6.52322C6.10375 8.16066 6.39808 11.3221 6.52317 11.7797C6.64459 12.2372 6.97203 12.5398 7.50919 12.5398H7.50183Z" fill="#F9BE00"/></g><defs><clipPath id="clip0_630_8"><rect width="15" height="16" fill="white"/></clipPath></defs></svg></div>' + (info ? '<div class="caution-title">' + info + '</div>' : '') + '\n<div class="content">';
      },
      closeRender: () => '</div></div>\n'
    });

    this.md.use(container, {
      name: 'annot',
      openRender: (tokens, index) => {
        const info = tokens[index].info.trim().slice(5).trim();
        return '<div class="annot container">' + (info ? '<div class="annot-title">' + info + '</div>' : '') + '\n<div class="content">';
      },
      closeRender: () => '</div></div>\n'
    });

    // 이미지를 base64로 변환하는 커스텀 렌더러
    this.md.renderer.rules.image = (tokens, idx, options, env, renderer) => {
      const token = tokens[idx];
      const src = token.attrGet('src');
      const alt = token.content || '';
      const title = token.attrGet('title') || '';
      
      // 모든 속성들을 수집 (src, alt, title 제외)
      const attrs = [];
      if (token.attrs) {
        token.attrs.forEach(([name, value]) => {
          if (name !== 'src' && name !== 'alt' && name !== 'title') {
            attrs.push(`${name}="${value}"`);
          }
        });
      }
      
      // 기본 속성들 구성
      const altAttr = `alt="${alt}"`;
      const titleAttr = title ? ` title="${title}"` : '';
      const additionalAttrs = attrs.length > 0 ? ` ${attrs.join(' ')}` : '';
      
      // 상대 경로인 경우 절대 경로로 변환
      let imagePath = src;
      if (!path.isAbsolute(src) && !src.startsWith('http')) {
        imagePath = path.resolve(path.dirname(this.configFile), src);
      }
      
      try {
        // HTTP/HTTPS URL인 경우 그대로 반환
        if (src.startsWith('http')) {
          return `<img src="${src}" ${altAttr}${titleAttr}${additionalAttrs} />`;
        }
        
        // 로컬 파일을 base64로 변환
        if (fs.existsSync(imagePath)) {
          const imageBuffer = fs.readFileSync(imagePath);
          const ext = path.extname(imagePath).toLowerCase();
          
          // MIME 타입 결정
          let mimeType;
          switch (ext) {
            case '.png':
              mimeType = 'image/png';
              break;
            case '.jpg':
            case '.jpeg':
              mimeType = 'image/jpeg';
              break;
            case '.gif':
              mimeType = 'image/gif';
              break;
            case '.svg':
              mimeType = 'image/svg+xml';
              break;
            case '.webp':
              mimeType = 'image/webp';
              break;
            default:
              mimeType = 'image/png'; // 기본값
          }
          
          const base64Data = imageBuffer.toString('base64');
          const dataUri = `data:${mimeType};base64,${base64Data}`;
          
          // console.log(`🖼️  Image converted to base64: ${path.basename(imagePath)}`);
          return `<img src="${dataUri}" ${altAttr}${titleAttr}${additionalAttrs} />`;
        } else {
          console.warn(`⚠️  Image file not found: ${imagePath}`);
          return `<img src="${src}" ${altAttr} (NOT FOUND)${titleAttr}${additionalAttrs} />`;
        }
      } catch (error) {
        console.warn(`⚠️  Failed to convert image to base64: ${imagePath}`, error.message);
        return `<img src="${src}" ${altAttr}${titleAttr}${additionalAttrs} />`;
      }
    };
  }

  // 언어에 따라 각주 렌더러를 업데이트하는 메서드
  updateFootnoteRenderer() {
    if (!this.config) return;
    
    // 언어 감지 로직 (generateCoverHTML과 동일)
    const isKorean = this.config.lang === "한국어" || 
                     this.config.lang === "Korean" || 
                     (this.config.lang !== "English" && this.config.docuNum?.startsWith('KO'));
    
    const footNoteTitle = isKorean ? '각주' : 'Footnotes';
    
    // 각주 렌더러 업데이트
    this.md.renderer.rules.footnote_block_open = () => (
      `<h2 class="footnotes-title">${footNoteTitle}</h2>\n` +
      '<section class="footnotes">\n' +
      '<ol class="footnotes-list">\n'
    );
  }

  async loadConfig() {
    try {
      const configContent = await fs.readFile(this.configFile, 'utf8');
      this.config = yaml.load(configContent);
      console.log('📋 Configuration loaded:', this.config.title);
      return this.config;
    } catch (error) {
      throw new Error(`Failed to load config file ${this.configFile}: ${error.message}`);
    }
  }

  async loadCSS() {
    try {
      const cssContent = await fs.readFile(this.cssFile, 'utf8');
      console.log('🎨 CSS template loaded:', path.basename(this.cssFile));
      return cssContent;
    } catch (error) {
      console.warn(`⚠️  CSS file not found: ${this.cssFile}, using minimal styles`);
      return `
        body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
      `;
    }
  }

  async loadCoverTemplate() {
    try {
      const templateContent = await fs.readFile(this.coverTemplate, 'utf8');
      console.log('📄 Cover template loaded:', path.basename(this.coverTemplate));
      return templateContent;
    } catch (error) {
      console.warn(`⚠️  Cover template not found: ${this.coverTemplate}, using fallback template`);
      // 기본 템플릿 반환 (기존 generateCoverHTML의 템플릿)
      return this.getFallbackCoverTemplate();
    }
  }

  getFallbackCoverTemplate() {
    return `<!DOCTYPE html>
<html lang="{{lang_code}}">
<head>
    <meta charset="utf-8">
    <title>커버 - {{title}}</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        .title { font-size: 2em; margin-bottom: 20px; }
        .subtitle { font-size: 1.2em; margin-bottom: 10px; }
        .info { margin: 10px 0; }
    </style>
</head>
<body>
    <div class="title">{{title}}</div>
    <div class="subtitle">{{subtitle}}</div>
    <div class="info">{{version}}</div>
    <div class="info">{{lang}}</div>
    <div class="info">{{docuNum}}</div>
</body>
</html>`;
  }

  async buildMarkdown() {
    if (!this.config) {
      await this.loadConfig();
    }

    console.log('📝 Building markdown document...');
    
    // 문서 헤더 생성
    let mergedContent = this.generateDocumentHeader();
    
    // documents 배열의 각 파일을 include 형태로 추가
    for (const doc of this.config.documents) {
      mergedContent += `\n!!!include(${doc})!!!\n`;
    }

    // 출력 파일명 생성
    const outputFileName = this.generateOutputFileName('md');
    
    // 파일 저장
    await fs.writeFile(outputFileName, mergedContent, 'utf8');
    console.log(`✅ Merged markdown saved: ${outputFileName}`);
    
    return outputFileName;
  }

  generateDocumentHeader() {
    const config = this.config;
    return `---
title: ${config.title}
docutype: ${config.docutype}
version: ${config.version}
lang: ${config.lang}
docuNum: ${config.docuNum}
generated: ${new Date().toISOString()}
---
`;
  }

  generateOutputFileName(extension) {
    const baseName = this.config.outputName
    .replace(/\s+/g, '_');
    // .replace(/[^a-zA-Z0-9_-]/g, '');
    const version = this.config.version
    let lang;
    if (this.config.lang === "English") {
      lang = "EN";
    } else if (this.config.lang === "한국어") {
      lang = "KO";
    }
    
    // YYMMDD 형식의 날짜 suffix 생성
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2); // 마지막 2자리
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const dateSuffix = `${year}${month}${day}`;
    
    // 설정 파일과 같은 디렉터리에 저장
    const configDir = path.dirname(this.configFile);
    return path.join(configDir, `${baseName}_${version}_${lang}_${dateSuffix}.${extension}`);
  }

  async buildHTML(includeTOC = true) {
    console.log('🌐 Building HTML document...');
    
    if (!this.config) {
      await this.loadConfig();
    }

    // CSS 로드
    const cssContent = await this.loadCSS();

    // HTML용 markdown 내용 생성 (헤더 제외)
    let mergedContent = '';
    let tocTitle;
    if (this.config.lang === "English") {
      tocTitle = "Contents";
    } else if (this.config.lang === "한국어") {
      tocTitle = "목차";
    }
    // TOC 마커 추가 (기본값으로 포함, 옵션에 따라 제외)
    if (includeTOC) {
      mergedContent += `<div class='toc-title'>${tocTitle}</div>\n\n[[toc]]\n\n`;
      console.log('📑 Table of Contents included (levels 1-3)');
    } else {
      console.log('📑 Table of Contents excluded');
    }
    
    // documents 배열의 각 파일을 include 형태로 추가
    for (const doc of this.config.documents) {
      mergedContent += `\n!!!include(${doc})!!!\n`;
    }
    
    // 언어에 따라 각주 렌더러 업데이트
    this.updateFootnoteRenderer();
    
    // HTML로 변환
    const htmlContent = this.md.render(mergedContent);
    
    // HTML 템플릿 생성
    const fullHTML = this.generateHTMLTemplate(htmlContent, cssContent);
    
    // 출력 파일명 생성
    const outputFileName = this.generateOutputFileName('html');
    
    // 파일 저장
    await fs.writeFile(outputFileName, fullHTML, 'utf8');
    console.log(`✅ HTML document saved: ${outputFileName}`);
    
    return outputFileName;
  }

  generateHTMLTemplate(content, cssContent) {
    let langCode;
    if (this.config.lang === "English") {
      langCode = "en-US"
    } else if (this.config.lang === "한국어") {
      langCode = "ko-KR"
    }
    
    return `<!DOCTYPE html>
<html lang="${langCode}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${this.config.title}</title>
    <style>
${cssContent}
    </style>
</head>
<body>
${content}
</body>
</html>`;
  }

  async buildPDF(includeTOC = true, includeCover = false) {
    console.log('📄 Building PDF document...');
    
    // 먼저 HTML 파일 빌드
    const htmlFile = await this.buildHTML(includeTOC);
    
    // PDF 파일명 생성
    const pdfFileName = this.generateOutputFileName('pdf');
    
    try {
      let command;
      
      if (includeCover && this.config) {
        // 커버 페이지 생성
        console.log('📖 Generating cover page...');
        const coverTemplate = await this.loadCoverTemplate();
        const coverHTML = generateCoverHTML(this.config, coverTemplate);
        const coverFileName = path.join(path.dirname(this.configFile), 'cover.html');
        const backFileName = this.config.lang == 'English' ? 'templates/en-back.html' : 'templates/back.html';
        await fs.writeFile(coverFileName, coverHTML, 'utf8');
        console.log('✅ Cover page generated:', path.basename(coverFileName));
        
        // 커버와 본문을 결합하여 PDF 생성
        command = `prince "${coverFileName}" "${htmlFile}" "${backFileName}" -o "${pdfFileName}" --style=templates/print.css`;
      } else {
        // 커버 없이 PDF 생성
        command = `prince "${htmlFile}" -o "${pdfFileName}"`;
      }
      // 주석 제거
      console.log(`🔄 Running: ${command}`);
      execSync(command, { stdio: 'inherit' });
      console.log(`✅ PDF document saved: ${pdfFileName}`);
      execSync(`pdfcpu annot remove -pages 1 "${pdfFileName}"`);
      
      // 임시 커버 파일 삭제
      if (includeCover && this.config) {
        const coverFileName = path.join(path.dirname(this.configFile), 'cover.html');
        if (await fs.pathExists(coverFileName)) {
          await fs.remove(coverFileName);
        }
      }
      
      return pdfFileName;
    } catch (error) {
      console.error('❌ Failed to generate PDF with Prince XML:', error.message);
      console.log('💡 Make sure Prince XML is installed and available in PATH');
      throw error;
    }
  }

  async buildAll(includeTOC = true, includeCover = false) {
    console.log('🚀 Building all document formats...');
    
    const results = {
      markdown: await this.buildMarkdown(),
      html: await this.buildHTML(includeTOC),
    };

    try {
      results.pdf = await this.buildPDF(includeTOC, includeCover);
    } catch (error) {
      console.warn('⚠️  PDF generation failed, but other formats were successful');
      results.pdfError = error.message;
    }

    return results;
  }
}

// CLI 인터페이스
async function main() {
  const args = process.argv.slice(2);
  
  // CLI 옵션 파싱
  let configFile = 'paxton_book.yml';
  let cssFile = 'templates/default.css';
  let coverTemplate = 'templates/cover.html';
  
  // --config 옵션 처리
  const configIndex = args.findIndex(arg => arg.startsWith('--config='));
  if (configIndex !== -1) {
    configFile = args[configIndex].split('=')[1];
    args.splice(configIndex, 1);
  }
  
  // --css 옵션 처리
  const cssIndex = args.findIndex(arg => arg.startsWith('--css='));
  if (cssIndex !== -1) {
    cssFile = args[cssIndex].split('=')[1];
    args.splice(cssIndex, 1);
  }
  
  // --cover-template 옵션 처리
  const coverIndex = args.findIndex(arg => arg.startsWith('--cover-template='));
  if (coverIndex !== -1) {
    coverTemplate = args[coverIndex].split('=')[1];
    args.splice(coverIndex, 1);
  }
  
  const builder = new DocumentBuilder(configFile, cssFile, coverTemplate);
  
  // TOC 옵션 확인 (기본값: true, --no-toc로 제외)
  const includeTOC = !args.includes('--no-toc');
  
  // Cover 옵션 확인 (기본값: false, --cover로 포함)
  const includeCover = args.includes('--cover');

  try {
    if (args.includes('--html')) {
      await builder.buildHTML(includeTOC);
    } else if (args.includes('--pdf')) {
      await builder.buildPDF(includeTOC, includeCover);
    } else if (args.includes('--all')) {
      await builder.buildAll(includeTOC, includeCover);
    } else {
      // 기본값: markdown만 빌드
      await builder.buildMarkdown();
    }
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

// ES Module에서 메인 모듈인지 확인하는 방법
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const isMainModule = process.argv[1] === __filename;

// 스크립트가 직접 실행될 때만 main 함수 호출
if (isMainModule) {
  main();
}

export default DocumentBuilder;
