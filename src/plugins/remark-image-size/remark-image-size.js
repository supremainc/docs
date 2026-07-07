'use strict';

// <Image>/<ProdImg>에 width/height가 없으면 sizeOfimages.json을 참조해
// 빌드 타임(Node)에 실제 픽셀 크기를 JSX 속성으로 박아 넣는다.
// 이렇게 하면 Image/ProdImg 컴포넌트가 이 딕셔너리를 브라우저로 보낼 필요가 없어진다.

const path = require('path');
const fs = require('fs');

function loadJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return {};
  }
}

function getAttrValue(attributes, name) {
  const attr = (attributes || []).find(
    (a) => a.type === 'mdxJsxAttribute' && a.name === name
  );
  return attr ? attr.value : undefined;
}

function hasAttr(attributes, name) {
  return getAttrValue(attributes, name) !== undefined;
}

// Image: 다국어 이미지가 준비되지 않은 경우 → ko 외 로케일은 항상 /img/en/ 사용
// ProdImg: 다국어 이미지가 준비된 경우 → ko 외 로케일은 /img/{locale}/ 사용
function resolveLocalizedSrc(tagName, src, locale, alone) {
  if (locale === 'ko' || alone) return src;
  if (tagName === 'Image') return src.replace('/img/', '/img/en/');
  return src.replace('/img/', `/img/${locale}/`);
}

function transformTree(tree, sizeMap, locale, filePath) {
  function walk(node) {
    if (!node || !Array.isArray(node.children)) return;

    for (const child of node.children) {
      if (
        (child.type === 'mdxJsxTextElement' || child.type === 'mdxJsxFlowElement') &&
        (child.name === 'Image' || child.name === 'ProdImg')
      ) {
        if (!hasAttr(child.attributes, 'width') && !hasAttr(child.attributes, 'height')) {
          const src = getAttrValue(child.attributes, 'src');
          // src={`/img/${expr}`} 처럼 동적 표현식인 경우는 빌드 타임에 알 수 없으니 건너뛴다.
          if (typeof src === 'string') {
            const alone = hasAttr(child.attributes, 'alone');
            const localizedSrc = resolveLocalizedSrc(child.name, src, locale, alone);
            const size = sizeMap[localizedSrc];

            if (size) {
              // width={1269} 같은 표현식 속성은 estree AST를 별도로 붙여야 해서(mdast-util-mdx-jsx),
              // 여기서는 단순히 문자열 속성(width="1269")으로 넣는다 — HTML/컴포넌트 쪽에서는 동일하게 동작한다.
              child.attributes.push(
                { type: 'mdxJsxAttribute', name: 'width', value: String(size.width) },
                { type: 'mdxJsxAttribute', name: 'height', value: String(size.height) }
              );
            } else {
              console.warn(`[remark-image-size] size not found: "${localizedSrc}" (file=${path.basename(filePath)})`);
            }
          }
        }
      }

      walk(child);
    }
  }

  walk(tree);
}

function remarkImageSize(options = {}) {
  const locale = (options.locale && options.locale !== 'undefined') ? options.locale : 'ko';
  const sizeMapPath = options.sizeMapPath || path.resolve(__dirname, '../../components/Image/sizeOfimages.json');
  const sizeMap = loadJson(sizeMapPath);

  return function transformer(tree, vfile) {
    const filePath = vfile.path || (vfile.history && vfile.history[0]) || '';
    transformTree(tree, sizeMap, locale, filePath);
  };
}

module.exports = remarkImageSize;
