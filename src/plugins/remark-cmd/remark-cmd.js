'use strict';

const path = require('path');
const fs = require('fs');
const { getDeviceName, resolveText } = require('./resolve-text');

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

function transformTree(tree, data, filePath) {
  function walk(node) {
    if (!node || !Array.isArray(node.children)) return;

    for (const child of node.children) {
      if (
        (child.type === 'mdxJsxTextElement' || child.type === 'mdxJsxFlowElement') &&
        child.name === 'Cmd'
      ) {
        const sid = getAttrValue(child.attributes, 'sid');
        const code = getAttrValue(child.attributes, 'code');
        const product = getAttrValue(child.attributes, 'product');
        const className = getAttrValue(child.attributes, 'className');
        const replace = getAttrValue(child.attributes, 'replace');
        const clsValue = className ? `cmd ${className}` : 'cmd';

        const spanAttrs = [
          { type: 'mdxJsxAttribute', name: 'className', value: clsValue },
        ];

        if (sid) {
          const deviceName = getDeviceName(filePath);
          const text = resolveText(data, sid, product, deviceName, replace);
          if (!text) {
            console.warn(`[remark-cmd] sid not found: "${sid}" (product=${product || 'x'}, file=${path.basename(filePath)})`);
          }
          child.name = 'span';
          child.attributes = spanAttrs;
          child.children = [{ type: 'text', value: text || sid }];
        } else if (code) {
          const entry = data.code[code];
          const text = entry?.message;
          if (!text) {
            console.warn(`[remark-cmd] code not found: "${code}" (file=${path.basename(filePath)})`);
          }
          child.name = 'span';
          child.attributes = spanAttrs;
          child.children = [{ type: 'text', value: text || code }];
        } else {
          child.name = 'span';
          child.attributes = spanAttrs;
        }

        continue;
      }

      walk(child);
    }
  }

  walk(tree);
}

function remarkCmd(options = {}) {
  const locale = (options.locale && options.locale !== 'undefined') ? options.locale : 'ko';
  // 데이터(JSON 딕셔너리)는 static/data/remark-cmd에 있다 — 브라우저에서 fetch()로도
  // 접근해야 하므로 webpack 처리 대상인 src/ 밖, static/ 아래에 둔다 (useCmdTitle.js 참고).
  const cmdDir = options.cmdDir || path.resolve(__dirname, '../../../static/data/remark-cmd');
  const i18nDir = options.i18nDir || path.resolve(__dirname, '../../../i18n');

  function load(relPath, fallbackPath) {
    const primary = loadJson(path.join(cmdDir, relPath));
    if (Object.keys(primary).length > 0) return primary;
    return loadJson(path.join(cmdDir, fallbackPath));
  }

  const data = {
    x:       load(`x/${locale}.json`,       'x/en.json'),
    bs2:     load(`${locale}.json`,          'en.json'),
    device:  load(`device/${locale}.json`,   'device/en.json'),
    air:     load(`air/${locale}.json`,      'air/en.json'),
    cam:     load(`cam/${locale}.json`,      'cam/en.json'),
    partner: load(`partner/${locale}.json`,  'partner/en.json'),
    code:    loadJson(path.join(i18nDir, locale, 'code.json')),
  };

  return function transformer(tree, vfile) {
    const filePath = vfile.path || (vfile.history && vfile.history[0]) || '';
    transformTree(tree, data, filePath);
  };
}

module.exports = remarkCmd;
