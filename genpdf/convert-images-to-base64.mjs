#!/usr/bin/env node

/**
 * HTML 파일의 모든 이미지를 base64로 변환
 * - <img> 태그의 src 속성
 * - CSS background-image url()
 * - <link> 태그의 href 속성
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 이미지 파일을 base64 문자열로 변환
 * @param {string} imagePath - 이미지 파일 경로
 * @returns {string|null} base64 data URI 또는 null (파일 없으면)
 */
function imageToBase64(imagePath) {
  try {
    if (!fs.existsSync(imagePath)) {
      console.warn(`⚠️  이미지 파일 없음: ${imagePath}`);
      return null;
    }

    const fileExtension = path.extname(imagePath).toLowerCase().slice(1);
    const mimeTypes = {
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'svg': 'image/svg+xml',
      'gif': 'image/gif',
      'webp': 'image/webp'
    };

    const mimeType = mimeTypes[fileExtension] || 'image/png';
    const buffer = fs.readFileSync(imagePath);
    const base64 = buffer.toString('base64');

    return `data:${mimeType};base64,${base64}`;
  } catch (error) {
    console.error(`❌ 이미지 변환 실패: ${imagePath}`, error.message);
    return null;
  }
}

/**
 * HTML 파일의 모든 이미지를 base64로 변환
 * @param {string} htmlFilePath - HTML 파일 경로
 */
function convertHtmlImagesToBase64(htmlFilePath) {
  try {
    if (!fs.existsSync(htmlFilePath)) {
      console.error(`❌ HTML 파일 없음: ${htmlFilePath}`);
      return;
    }

    console.log(`📄 HTML 파일 처리 중: ${htmlFilePath}`);
    const dir = path.dirname(htmlFilePath);
    let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

    const conversions = {
      imgTags: 0,
      cssUrls: 0,
      failed: 0
    };

    // 1. <img> 태그의 src 속성 변환
    htmlContent = htmlContent.replace(/<img([^>]*?)src=["']([^"']+)["']([^>]*)>/gi, (match, before, src, after) => {
      // data: URI는 스킵
      if (src.startsWith('data:')) {
        return match;
      }

      // 상대 경로를 절대 경로로 변환
      let imagePath = src;
      if (!path.isAbsolute(imagePath)) {
        imagePath = path.resolve(dir, imagePath);
      }

      const base64 = imageToBase64(imagePath);
      if (base64) {
        console.log(`✓ img src: ${src}`);
        conversions.imgTags++;
        return `<img${before}src="${base64}"${after}>`;
      } else {
        conversions.failed++;
        return match;
      }
    });

    // 2. CSS url() 패턴 변환
    htmlContent = htmlContent.replace(/url\(["']?([^"')]+)["']?\)/g, (match, url) => {
      // data: URI와 외부 URL은 스킵
      if (url.startsWith('data:') || url.startsWith('http') || url.startsWith('//')) {
        return match;
      }

      let imagePath = url.trim();
      // CSS에서의 경로는 HTML 파일 기준으로 변환
      if (!path.isAbsolute(imagePath)) {
        imagePath = path.resolve(dir, imagePath);
      }

      const base64 = imageToBase64(imagePath);
      if (base64) {
        console.log(`✓ CSS url(): ${url}`);
        conversions.cssUrls++;
        return `url("${base64}")`;
      } else {
        conversions.failed++;
        return match;
      }
    });

    // 3. <link> 태그의 href (favicon 등)
    htmlContent = htmlContent.replace(/<link([^>]*?)href=["']([^"']+)["']([^>]*)>/gi, (match, before, href, after) => {
      // data: URI와 외부 리소스는 스킵
      if (href.startsWith('data:') || href.startsWith('http') || href.startsWith('//') || href.includes('fonts.googleapis')) {
        return match;
      }

      // 이미지 파일만 처리 (favicon, png, jpg 등)
      const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp'];
      if (!imageExtensions.some(ext => href.toLowerCase().endsWith(ext))) {
        return match;
      }

      let imagePath = href;
      if (!path.isAbsolute(imagePath)) {
        imagePath = path.resolve(dir, imagePath);
      }

      const base64 = imageToBase64(imagePath);
      if (base64) {
        console.log(`✓ link href: ${href}`);
        conversions.cssUrls++;
        return `<link${before}href="${base64}"${after}>`;
      } else {
        conversions.failed++;
        return match;
      }
    });

    // 수정된 HTML 저장
    fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');

    console.log(`\n✅ 변환 완료!`);
    console.log(`- <img> 태그 src: ${conversions.imgTags}개`);
    console.log(`- CSS url(): ${conversions.cssUrls}개`);
    if (conversions.failed > 0) {
      console.log(`- 실패: ${conversions.failed}개`);
    }
  } catch (error) {
    console.error('❌ 오류:', error.message);
  }
}

/**
 * 메인 함수
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('사용법: node convert-images-to-base64.mjs <HTML파일경로>');
    console.log('\n예제:');
    console.log('  node convert-images-to-base64.mjs output.html');
    console.log('  node convert-images-to-base64.mjs ../output.html');
    process.exit(1);
  }

  const htmlFile = path.resolve(args[0]);
  convertHtmlImagesToBase64(htmlFile);
}

main();
