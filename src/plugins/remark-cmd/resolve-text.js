'use strict';

// remark-cmd.js(빌드 타임)와 useCmdTitle.js(브라우저 런타임)가 공유하는
// sid/product 텍스트 조회 로직. fs 등 Node 전용 API에 의존하지 않는다.

function getDeviceName(filePath) {
  // docs/device/biostation_3/settings.mdx -> biostation_3
  // i18n/en/.../device/biostation_3/settings.mdx -> biostation_3
  if (!filePath) return null;
  const normalized = filePath.replace(/\\/g, '/');
  const match = normalized.match(/\/device\/([^/]+)\//);
  return match ? match[1] : null;
}

function resolveText(data, sid, product, deviceName, replace) {
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
  } else if (product === 'pn') {
    const raw = data.partner[sid];
    if (raw) text = raw.replace('<br/>', '');
  } else if (product === 'cam') {
    const raw = data.cam[sid];
    if (raw) {
      if (sid === 'ntp_address_n' || sid === 'dns_n') {
        text = raw.replace('{n}', replace || '1');
      } else {
        text = raw.replace('<br/>', '');
      }
    }
  } else {
    const raw = data.x[sid];
    if (raw) text = raw.replace('<br>', '').replace('{{value}}', 'N');
  }

  return text ? text.trim() : null;
}

module.exports = { getDeviceName, resolveText };
