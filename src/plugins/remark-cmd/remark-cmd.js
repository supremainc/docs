'use strict';

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

function getDeviceName(filePath) {
  // docs/device/biostation_3/settings.mdx -> biostation_3
  // i18n/en/.../device/biostation_3/settings.mdx -> biostation_3
  const normalized = filePath.replace(/\\/g, '/');
  const match = normalized.match(/\/device\/([^/]+)\//);
  return match ? match[1] : null;
}

function resolveText(data, sid, product, deviceName) {
  if (!sid) return null;
  let text = null;

  if (product === '2') {
    const raw = data.bs2[sid];
    if (raw) {
      if (
        sid === 'biostar.login' ||
        sid === 'audit.setting.server.server_addr' ||
        sid === 'audit.setting.server.server_port'
      ) {
        text = raw.replace('2', 'X');
      } else {
        text = raw
          .replace(' <br/><br/> ', ' ')
          .replace(' <br/><br/>', ' ')
          .replace('<br/><br/> ', ' ')
          .replace(' </br> ', ' ')
          .replace(' <br />', ' ')
          .replace(' <br>', ' ')
          .replace('<br> ', ' ')
          .replace('<br/>', ' ')
          .replace('<br />', ' ')
          .replace(' <br> ', ' ')
          .replace(' </br> ', ' ')
          .replace('<br>', ' ')
          .replace('</br>', ' ')
          .replace('<BR>', '')
          .replace('&sol;', '/')
          .replace('\\xB0\\x43', '℃')
          .replace('\\xB0\\x46', '℉')
          .replace(' <font size="1">※ｵﾝ時 ﾘﾚｰ非動作</font>', '');
      }
    }
  } else if (product === 'dev') {
    const sidValue = data.device[sid];
    if (sidValue) {
      const isGroupType = typeof sidValue === 'object' && !Array.isArray(sidValue);
      text = isGroupType
        ? (deviceName && sidValue[deviceName]) || sidValue['common'] || null
        : sidValue;
      if (text) text = text.replace('<br>', '');
    }
  } else if (product === 'air') {
    const raw = data.air[sid];
    if (raw) text = raw.replace('<br/>', '');
  } else if (product === 'cam') {
    const raw = data.cam[sid];
    if (raw) text = raw.replace('<br/>', '');
  } else {
    const raw = data.x[sid];
    if (raw) text = raw.replace('<br>', '').replace('{{value}}', 'N');
  }

  return text ? text.trim() : null;
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
        const clsValue = className ? `cmd ${className}` : 'cmd';

        const spanAttrs = [
          { type: 'mdxJsxAttribute', name: 'className', value: clsValue },
        ];

        if (sid) {
          const deviceName = getDeviceName(filePath);
          const text = resolveText(data, sid, product, deviceName);
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
  const cmdDir = __dirname;
  const i18nDir = options.i18nDir || path.resolve(__dirname, '../../../i18n');

  function load(relPath, fallbackPath) {
    const primary = loadJson(path.join(cmdDir, relPath));
    if (Object.keys(primary).length > 0) return primary;
    return loadJson(path.join(cmdDir, fallbackPath));
  }

  const data = {
    x:      load(`x/${locale}.json`,      'x/en.json'),
    bs2:    load(`${locale}.json`,         'en.json'),
    device: load(`device/${locale}.json`,  'device/en.json'),
    air:    load(`air/${locale}.json`,     'air/en.json'),
    cam:    load(`cam/${locale}.json`,     'cam/en.json'),
    code:   loadJson(path.join(i18nDir, locale, 'code.json')),
  };

  return function transformer(tree, vfile) {
    const filePath = vfile.path || (vfile.history && vfile.history[0]) || '';
    transformTree(tree, data, filePath);
  };
}

module.exports = remarkCmd;
