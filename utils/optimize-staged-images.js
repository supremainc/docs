/**
 * git commit 시 lint-staged가 스테이징된 static/img 내 PNG/SVG 파일 목록을
 * 인자로 넘겨주면, 그 파일들만 압축한다. 이미 압축된 파일을 다시 넣어도
 * 결과가 원본보다 크면 그대로 두므로 안전하다 (반복 실행 가능).
 *
 * PNG: 완전 불투명 이미지는 팔레트 압축(quality 90), 실제 투명 픽셀이 있는
 * 이미지는 색상 오차 리스크를 피해 무손실 재압축만 적용한다.
 * SVG: svgo 무손실 최적화만 적용한다.
 */
const sharp = require('sharp');
const { optimize } = require('svgo');
const fs = require('fs');
const path = require('path');

const files = process.argv.slice(2);

async function optimizePng(file) {
  const before = fs.statSync(file).size;
  const img = sharp(file);
  const meta = await img.metadata();
  let hasRealAlpha = false;
  if (meta.hasAlpha) {
    const s = await sharp(file).stats();
    const alphaChannel = s.channels[s.channels.length - 1];
    hasRealAlpha = alphaChannel.min < 255;
  }
  const tmp = file + '.tmp';
  if (hasRealAlpha) {
    await sharp(file).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(tmp);
  } else {
    await sharp(file).png({ compressionLevel: 9, palette: true, quality: 90, effort: 6 }).toFile(tmp);
  }
  const after = fs.statSync(tmp).size;
  if (after < before) {
    fs.renameSync(tmp, file);
    console.log(`[optimize-images] ${file}: ${before} -> ${after}`);
  } else {
    fs.unlinkSync(tmp);
  }
}

function optimizeSvg(file) {
  const before = fs.statSync(file).size;
  const input = fs.readFileSync(file, 'utf8');
  const result = optimize(input, { path: file });
  if (!result.data) return;
  const after = Buffer.byteLength(result.data, 'utf8');
  if (after < before) {
    fs.writeFileSync(file, result.data, 'utf8');
    console.log(`[optimize-images] ${file}: ${before} -> ${after}`);
  }
}

(async () => {
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    try {
      if (ext === '.png') await optimizePng(file);
      else if (ext === '.svg') optimizeSvg(file);
    } catch (e) {
      console.error(`[optimize-images] ${file} 처리 실패: ${e.message}`);
      process.exitCode = 1;
    }
  }
})();
