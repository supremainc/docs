// static/specs/vionyx_api_docs.html에 임베딩된 OpenAPI 스펙(<script id="openapi-spec">)을 추출해
// static/specs/vionyx-api-postman-collection.json Postman 컬렉션으로 변환
//
// openapi-to-postmanv2로 요청/응답 예시(schemaFaker)를 생성한 뒤, clue-api-postman-collection.json과
// 같은 스타일(#### 표 형식 설명, {{변수}} 경로, 컬렉션 레벨 Bearer 인증, 폴더별 description)로 후처리한다.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const cheerio = require('cheerio');
const Converter = require('openapi-to-postmanv2');

const HTML_INPUT = path.resolve(__dirname, 'static/specs/vionyx_api_docs.html');
const OUTPUT = path.resolve(__dirname, 'static/specs/vionyx-api-postman-collection.json');

const NOAUTH = { type: 'noauth' };

function extractSpec(html) {
  const match = html.match(/<script type="application\/json" id="openapi-spec">([\s\S]*?)<\/script>/);
  if (!match) {
    throw new Error('vionyx_api_docs.html에서 openapi-spec 스크립트를 찾을 수 없습니다.');
  }
  return JSON.parse(match[1]);
}

function resolveSchema(schema, schemas, seen) {
  seen = seen || new Set();
  if (!schema) return {};
  if (schema.$ref) {
    const key = schema.$ref.replace('#/components/schemas/', '');
    if (seen.has(key)) return {};
    return resolveSchema(schemas[key], schemas, new Set(seen).add(key));
  }
  if (schema.allOf) {
    return schema.allOf.reduce((acc, part) => {
      const resolved = resolveSchema(part, schemas, seen);
      return {
        ...acc,
        ...resolved,
        properties: { ...(acc.properties || {}), ...(resolved.properties || {}) },
        required: [...new Set([...(acc.required || []), ...(resolved.required || [])])],
      };
    }, {});
  }
  return schema;
}

// openapi-to-postmanv2가 내부적으로 쓰는 json-schema-merge-allof는 allOf 분기끼리
// 같은 프로퍼티(예: ApiResponse.data)를 서로 다른 타입(placeholder vs 구체 타입)으로
// 정의하면 병합하지 못하고 "<Error: Could not resolve allOf schema>"를 example에 그대로
// 찍어버린다. Converter에 넘기기 전에 response 스키마의 allOf를 미리 직접 병합해서
// (뒤 분기가 우선) 애초에 allOf가 남아있지 않도록 만든다.
function flattenResponseAllOf(spec) {
  const clone = JSON.parse(JSON.stringify(spec));
  const schemas = clone.components.schemas;
  for (const methods of Object.values(clone.paths)) {
    for (const op of Object.values(methods)) {
      if (!op || !op.responses) continue;
      for (const resp of Object.values(op.responses)) {
        const content = resp && resp.content;
        if (!content) continue;
        for (const media of Object.values(content)) {
          if (media.schema && media.schema.allOf) {
            media.schema = resolveSchema(media.schema, schemas);
          }
        }
      }
    }
  }
  return clone;
}

function firstLine(text) {
  return (text || '').split('\n')[0].trim();
}

function mdEscapeCell(text) {
  return (text || '').replace(/\n/g, ' ').replace(/\|/g, '\\|').trim();
}

function paramsTable(params, location, title) {
  const rows = (params || []).filter((p) => p.in === location);
  if (!rows.length) return '';
  const body = rows
    .map((p) => `| \`${p.name}\`${p.required ? '' : ' (optional)'} | ${mdEscapeCell(p.description) || '-'} |`)
    .join('\n');
  return `#### ${title}\n\n| Parameter | Description |\n| --- | --- |\n${body}\n`;
}

function bodyNotes(requestBody, schemas) {
  if (!requestBody) return '';
  const content = requestBody.content || {};
  const jsonContent = content['application/json'] || Object.values(content)[0];
  if (!jsonContent || !jsonContent.schema) return '';
  const schema = resolveSchema(jsonContent.schema, schemas);
  const props = schema.properties || {};
  const required = new Set(schema.required || []);
  const keys = Object.keys(props);
  if (!keys.length) return '';
  const lines = keys.map((key) => {
    const resolved = resolveSchema(props[key], schemas);
    const desc = firstLine(resolved.description || props[key].description);
    const reqLabel = required.has(key) ? 'required' : 'optional';
    return `- \`${key}\`: ${reqLabel}${desc ? ` — ${desc}` : ''}`;
  });
  const contentTypes = Object.keys(content);
  const extra =
    contentTypes.length > 1
      ? `\n\n지원하는 Content-Type: ${contentTypes.map((t) => `\`${t}\``).join(', ')}`
      : '';
  return `#### Body notes\n\n${lines.join('\n')}${extra}\n`;
}

// RequestDetail의 FIELD/TYPE/DESCRIPTION 표에서 쓸 구조화된 요청 본문 필드 목록
function bodyFieldsData(requestBody, schemas) {
  if (!requestBody) return null;
  const content = requestBody.content || {};
  const jsonContent = content['application/json'] || Object.values(content)[0];
  if (!jsonContent || !jsonContent.schema) return null;
  if (jsonContent.schema.oneOf) {
    // oneOf 요청 본문(예: 일반 Rule vs Relay Rule)은 분기별로 서로 다른 필드 집합을 가져
    // 하나의 FIELD/TYPE/DESCRIPTION 표로 합칠 수 없다. 원본 문서와 동일하게
    // "(variant N)" 자리표시자 행으로 표시한다.
    const fields = jsonContent.schema.oneOf.map((_, i) => ({
      name: `(variant ${i + 1})`,
      type: 'object',
      required: false,
      description: '',
    }));
    return { fields, contentType: Object.keys(content)[0] };
  }
  const schema = resolveSchema(jsonContent.schema, schemas);
  const props = schema.properties || {};
  const required = new Set(schema.required || []);
  const keys = Object.keys(props);
  if (!keys.length) return null;
  const fields = keys.map((key) => {
    const resolved = resolveSchema(props[key], schemas);
    const itemType = resolved.type === 'array' ? resolveSchema(resolved.items, schemas).type || 'any' : null;
    return {
      name: key,
      type: itemType ? `${itemType}[]` : resolved.type || 'object',
      required: required.has(key),
      description: firstLine(resolved.description || props[key].description) || '',
    };
  });
  return { fields, contentType: Object.keys(content)[0] };
}

// RequestDetail의 FIELD/TYPE/DESCRIPTION 표에서 쓸 path 파라미터 목록 (OpenAPI parameters 기준)
function pathParamsData(parameters, schemas) {
  const params = (parameters || []).filter((p) => p.in === 'path');
  if (!params.length) return null;
  return params.map((p) => {
    const resolved = resolveSchema(p.schema, schemas);
    const itemType = resolved.type === 'array' ? resolveSchema(resolved.items, schemas).type || 'any' : null;
    return {
      name: p.name,
      type: itemType ? `${itemType}[]` : resolved.type || 'string',
      required: p.required !== false,
      description: firstLine(p.description) || '',
    };
  });
}

function responsesTable(responses) {
  const rows = Object.entries(responses || {})
    .filter(([code]) => code !== 'default')
    .map(([code, res]) => `| ${code} | ${mdEscapeCell(firstLine(res.description)) || '-'} |`);
  if (!rows.length) return '';
  return `#### Responses\n\n| Status | Description |\n| --- | --- |\n${rows.join('\n')}\n`;
}

function buildDescription(operation, schemas) {
  const parts = [];
  if (operation.description) parts.push(operation.description.trim());
  const pathTable = paramsTable(operation.parameters, 'path', 'Path parameters');
  if (pathTable) parts.push(pathTable);
  const queryTable = paramsTable(operation.parameters, 'query', 'Query parameters');
  if (queryTable) parts.push(queryTable);
  const notes = bodyNotes(operation.requestBody, schemas);
  if (notes) parts.push(notes);
  const table = responsesTable(operation.responses);
  if (table) parts.push(table);
  return parts.join('\n\n');
}

function pathKeyFromSegments(segments) {
  return '/' + segments.map((seg) => (seg.startsWith(':') ? `{${seg.slice(1)}}` : seg)).join('/');
}

function toMustachePath(segments) {
  return segments.map((seg) => (seg.startsWith(':') ? `{{${seg.slice(1)}}}` : seg));
}

function buildRaw(host, pathSegments, query) {
  const qs = (query || [])
    .map((q) => `${q.key}=${q.value === undefined ? '' : q.value}`)
    .join('&');
  return `${host.join('')}/${pathSegments.join('/')}${qs ? `?${qs}` : ''}`;
}

function cleanHeaders(headers) {
  return (headers || []).filter(
    (h) => !['content-type', 'accept'].includes(String(h.key).toLowerCase()) || h.value === 'application/octet-stream'
  );
}

function autoFolderDescription(summaries) {
  const list = summaries.filter(Boolean);
  if (!list.length) return '';
  if (list.length <= 4) return `${list.join(', ')}.`;
  return `${list.slice(0, 4).join(', ')}, and ${list.length - 4} more endpoint(s).`;
}

// ─── HTML 가이드 섹션(689~2752줄, 스펙 밖의 서술형 문서) → Markdown 변환 ──────
// 스펙에 없는 Quickstart/Recipes/Relay Rule·Control 가이드를 컬렉션 설명에 포함시키기 위해
// 정적 HTML을 직접 파싱한다. data-lang-content="en" 스팬은 버리고 "ko" 스팬만 살린다
// (본문 자체가 no-span 구조인 relay-rule/relay-control 가이드는 영향받지 않음).

function inlineMd($, $node) {
  let out = '';
  $node.contents().each((_, n) => {
    if (n.type === 'text') {
      out += n.data;
      return;
    }
    if (n.type !== 'tag') return;
    const $n = $(n);
    switch (n.tagName) {
      case 'span': {
        const lang = $n.attr('data-lang-content');
        if (lang === 'en') return;
        out += inlineMd($, $n);
        return;
      }
      case 'code':
        out += `\`${$n.text()}\``;
        return;
      case 'strong':
      case 'b':
        out += `**${inlineMd($, $n)}**`;
        return;
      case 'em':
      case 'i':
        out += `*${inlineMd($, $n)}*`;
        return;
      case 'a': {
        const href = $n.attr('href') || '';
        const txt = inlineMd($, $n);
        out += href.startsWith('http') ? `[${txt}](${href})` : txt;
        return;
      }
      case 'br':
        out += '\n';
        return;
      default:
        out += inlineMd($, $n);
    }
  });
  return out;
}

function blockMd($, $container) {
  const parts = [];
  $container.children().each((_, el) => {
    const $el = $(el);
    switch (el.tagName) {
      case 'h1':
        parts.push(`# ${inlineMd($, $el).trim()}`);
        break;
      case 'h2':
        parts.push(`## ${inlineMd($, $el).trim()}`);
        break;
      case 'h3':
        parts.push(`### ${inlineMd($, $el).trim()}`);
        break;
      case 'p':
        parts.push(inlineMd($, $el).trim());
        break;
      case 'blockquote': {
        const inner = blockMd($, $el);
        parts.push(inner.split('\n').map((l) => (l ? `> ${l}` : '>')).join('\n'));
        break;
      }
      case 'ul':
      case 'ol': {
        const items = [];
        $el.children('li').each((i, li) => {
          const marker = el.tagName === 'ul' ? '-' : `${i + 1}.`;
          items.push(`${marker} ${inlineMd($, $(li)).trim()}`);
        });
        parts.push(items.join('\n'));
        break;
      }
      case 'pre': {
        const codeEl = $el.children('code').first();
        const langMatch = /language-(\w+)|lang-(\w+)/.exec(codeEl.attr('class') || '');
        const lang = langMatch ? langMatch[1] || langMatch[2] : '';
        const code = (codeEl.length ? codeEl.text() : $el.text()).replace(/\n$/, '');
        parts.push('```' + lang + '\n' + code + '\n```');
        break;
      }
      case 'table': {
        const headers = [];
        $el.find('thead th').each((_, th) => headers.push(inlineMd($, $(th)).trim()));
        const rows = [];
        $el.find('tbody tr').each((_, tr) => {
          const cells = [];
          $(tr)
            .children('td')
            .each((_, td) => cells.push(inlineMd($, $(td)).trim().replace(/\|/g, '\\|').replace(/\n/g, ' ')));
          rows.push(cells);
        });
        const headerRow = `| ${headers.join(' | ')} |`;
        const sepRow = `| ${headers.map(() => '---').join(' | ')} |`;
        const bodyRows = rows.map((r) => `| ${r.join(' | ')} |`);
        parts.push([headerRow, sepRow, ...bodyRows].join('\n'));
        break;
      }
      case 'div':
      case 'section': {
        const nested = blockMd($, $el);
        if (nested) parts.push(nested);
        break;
      }
      default:
        break;
    }
  });
  return parts.join('\n\n');
}

function extractQuickstart($) {
  const $section = $('section#quickstart');
  const parts = [];
  $section.children('h2, p, div.code-block').each((_, el) => {
    const $el = $(el);
    if (el.tagName === 'h2') parts.push(`### ${inlineMd($, $el).trim()}`);
    else if (el.tagName === 'p') parts.push(inlineMd($, $el).trim());
    else if (el.tagName === 'div') {
      const $pre = $el.find('pre.code-pre code').first();
      if ($pre.length) {
        const langMatch = /lang-(\w+)/.exec($pre.attr('class') || '');
        parts.push('```' + (langMatch ? langMatch[1] : '') + '\n' + $pre.text().replace(/\n$/, '') + '\n```');
      }
    }
  });
  return parts.join('\n\n');
}

function extractAuthGuide($) {
  const $section = $('section#auth');
  const parts = [];
  $section.children('h2, p, ul').each((_, el) => {
    const $el = $(el);
    if (el.tagName === 'h2') parts.push(`### ${inlineMd($, $el).trim()}`);
    else if (el.tagName === 'p') parts.push(inlineMd($, $el).trim());
    else if (el.tagName === 'ul') {
      const items = [];
      $el.children('li').each((_, li) => items.push(`- ${inlineMd($, $(li)).trim()}`));
      parts.push(items.join('\n'));
    }
  });
  return parts.join('\n\n');
}

function extractRecipes($) {
  const $section = $('section#recipes');
  const parts = [];
  $section.children('h2, p, ul, div.code-block').each((_, el) => {
    const $el = $(el);
    if (el.tagName === 'h2') parts.push(`### ${inlineMd($, $el).trim()}`);
    else if (el.tagName === 'p') parts.push(inlineMd($, $el).trim());
    else if (el.tagName === 'ul') {
      const items = [];
      $el.children('li').each((_, li) => items.push(`- ${inlineMd($, $(li)).trim()}`));
      parts.push(items.join('\n'));
    } else if (el.tagName === 'div') {
      const title = $el.find('.code-block-title').text().trim();
      const $pre = $el.find('pre.code-pre code').first();
      if ($pre.length) {
        const langMatch = /lang-(\w+)/.exec($pre.attr('class') || '');
        parts.push(
          (title ? `_${title}_\n` : '') + '```' + (langMatch ? langMatch[1] : '') + '\n' + $pre.text().replace(/\n$/, '') + '\n```'
        );
      }
    }
  });
  return parts.join('\n\n');
}

function extractStabilityLevels($) {
  const $koDiv = $('section#stability-levels div[data-lang-content="ko"]');
  return blockMd($, $koDiv);
}

function extractUserCudCodes($) {
  const $target = $('section#errors h2:contains("사용자 CUD")').nextAll('table.md-table').first();
  if (!$target.length) return '';
  const headers = [];
  $target.find('thead th').each((_, th) => headers.push(inlineMd($, $(th)).trim()));
  const rows = [];
  $target.find('tbody tr').each((_, tr) => {
    const cells = [];
    $(tr)
      .children('td')
      .each((_, td) => cells.push(inlineMd($, $(td)).trim().replace(/\|/g, '\\|')));
    rows.push(cells);
  });
  const headerRow = `| ${headers.join(' | ')} |`;
  const sepRow = `| ${headers.map(() => '---').join(' | ')} |`;
  const bodyRows = rows.map((r) => `| ${r.join(' | ')} |`);
  return [headerRow, sepRow, ...bodyRows].join('\n');
}

function extractRelayGuide($, sectionId) {
  const $section = $(`section#${sectionId}`);
  const $koDiv = $section.children('div[data-lang-content="ko"]');
  const $target = $koDiv.length ? $koDiv : $section.children('div').first();
  if (!$target.length) return '';
  return blockMd($, $target);
}

function main() {
  const html = fs.readFileSync(HTML_INPUT, 'utf8');
  const spec = extractSpec(html);
  const schemas = spec.components.schemas;
  const tagDescriptions = {};
  (spec.tags || []).forEach((t) => {
    if (t.description) tagDescriptions[t.name] = firstLine(t.description) === t.description.trim() ? t.description.trim() : t.description.trim();
  });

  // HTML의 서술형 가이드 섹션(스펙 밖 콘텐츠) 추출
  const $ = cheerio.load(html);
  const guides = {
    quickstart: extractQuickstart($),
    auth: extractAuthGuide($),
    recipes: extractRecipes($),
    stabilityLevels: extractStabilityLevels($),
    userCudCodes: extractUserCudCodes($),
    relayRule: extractRelayGuide($, 'relay-rule'),
    relayControl: extractRelayGuide($, 'relay-control'),
  };

  const options = {
    folderStrategy: 'Tags',
    collapseFolders: true,
    requestParametersResolution: 'Example',
    exampleParametersResolution: 'Example',
    // 기본 stackLimit(10)으로는 설정 스키마처럼 깊게 중첩된 객체에서
    // schemaFaker가 "Too many levels of nesting to fake this schema" 에러를 낸다.
    // optimizeConversion을 꺼야 stackLimit 상향이 실제로 적용된다.
    stackLimit: 25,
    optimizeConversion: false,
  };

  const specForConversion = flattenResponseAllOf(spec);

  Converter.convert({ type: 'json', data: specForConversion }, options, (err, result) => {
    if (err || !result.result) {
      console.error('변환 실패:', err || result.reason);
      process.exit(1);
    }

    const raw = result.output[0].data;

    // 스펙 밖 서술형 가이드를 해당 폴더의 description으로 이식
    const GUIDE_FOLDER_OVERRIDES = {
      'Settings/AI & Event/Rule Settings': guides.relayRule,
      'Relay Control': guides.relayControl,
    };

    // 폴더별 후처리
    const folders = raw.item.map((folder) => {
      const summaries = [];
      const items = (folder.item || []).map((item) => {
        const method = item.request.method;
        const segments = item.request.url.path || [];
        const pathKey = pathKeyFromSegments(segments);
        const operation = (spec.paths[pathKey] || {})[method.toLowerCase()];

        if (!operation) {
          console.warn(`경고: 스펙에서 대응하는 operation을 찾지 못했습니다 - ${method} ${pathKey}`);
          return item;
        }

        summaries.push(operation.summary);

        const mustacheSegments = toMustachePath(segments);
        const query = item.request.url.query || [];
        item.request.url = {
          raw: buildRaw(item.request.url.host, mustacheSegments, query),
          host: item.request.url.host,
          path: mustacheSegments,
          ...(query.length ? { query } : {}),
        };

        item.name = operation.summary || item.name;
        if (operation['x-stability']) item.stability = operation['x-stability'];
        item.request.description = buildDescription(operation, schemas);
        item.request.header = cleanHeaders(item.request.header);
        // body.options(raw.language 힌트)는 Postman 자체 에디터 전용이라 우리 뷰어는 안 쓴다
        if (item.request.body) delete item.request.body.options;

        const bodyFields = bodyFieldsData(operation.requestBody, schemas);
        if (bodyFields) {
          item.request.bodyFields = bodyFields.fields;
          item.request.bodyContentType = bodyFields.contentType;
        }
        // oneOf 요청 본문은 schemaFaker가 그중 한 분기만 임의로 골라 예시를 만드는데,
        // 그게 유일한 유효 형태인 것처럼 오해를 줄 수 있어 원본 문서처럼 예시 body를 비운다.
        if (operation.requestBody?.content?.['application/json']?.schema?.oneOf) {
          delete item.request.body;
        }

        const pathParams = pathParamsData(operation.parameters, schemas);
        if (pathParams) item.request.pathParams = pathParams;

        if (Array.isArray(operation.security) && operation.security.length === 0) {
          item.request.auth = NOAUTH;
        } else {
          delete item.request.auth;
        }

        item.response = (item.response || []).map((resp) => {
          // originalRequest/status/cookie/_postman_previewlanguage/header는 ApiDocs 뷰어(ResponseExamples.js)가
          // code/name/body만 읽고 전혀 참조하지 않는 필드라 파일 용량만 키운다. Postman 앱에 직접
          // 임포트해 쓰는 용도가 아니라면 불필요해서 제거한다.
          const { originalRequest, status, cookie, _postman_previewlanguage, header, ...rest } = resp;
          const name = firstLine(resp.name);
          return { ...rest, name: name || resp.name };
        });

        return item;
      });

      const description =
        GUIDE_FOLDER_OVERRIDES[folder.name] || tagDescriptions[folder.name] || autoFolderDescription(summaries);
      return { name: folder.name, description, item: items };
    });

    // 경로 파라미터 이름 수집 (컬렉션 변수로 등록)
    const pathVarNames = new Set();
    Object.keys(spec.paths).forEach((p) => {
      (p.match(/\{([^}]+)\}/g) || []).forEach((m) => pathVarNames.add(m.slice(1, -1)));
    });

    const collectionDescription = [
      `All requests use the \`{{baseUrl}}\` (default: \`https://{{device-host}}/v1/api\`) and \`{{accessToken}}\` collection variables. Set \`device-host\` to the target ViOnyx camera's IP address or hostname, and set \`accessToken\` to the \`access_token\` issued by \`POST /auth/login\`. This value is sent as a Bearer token through the collection-level Authorization setting and is inherited by every request below.`,
      `## Getting started\n\n${guides.quickstart}`,
      spec.info.description.trim(),
      `## 세션 · 역할 · 계정 잠금\n\n${guides.auth}`,
      `## 사용자 생성/수정/삭제 서브 코드 (90xxx)\n\n${guides.userCudCodes}`,
      `## Recipes\n\n${guides.recipes}`,
      `## API Stability Levels\n\n${guides.stabilityLevels}`,
    ].join('\n\n');

    const pathVariables = [...pathVarNames].map((name) => ({ key: name, value: '', type: 'string' }));

    const collection = {
      info: {
        _postman_id: crypto.randomUUID(),
        name: 'ViOnyx AI Camera API',
        description: collectionDescription,
        schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
      },
      // 원본 문서 사이드바는 태그를 중첩 없이 스펙에 처음 등장한 순서 그대로 나열하므로
      // (예: "Settings/Face"가 "Settings/Camera" 바로 뒤가 아니라 한참 뒤, Relay Control 다음에 나옴),
      // "/"로 그룹핑하지 않고 flat하게 그 순서를 그대로 유지한다.
      item: folders.map(({ name, description, item }) => ({ name, description, item })),
      auth: {
        type: 'bearer',
        bearer: [{ key: 'token', value: '{{accessToken}}', type: 'string' }],
      },
      variable: [
        { key: 'device-host', value: 'vionyx.local', type: 'string' },
        { key: 'baseUrl', value: 'https://{{device-host}}/v1/api', type: 'string' },
        { key: 'accessToken', value: '', type: 'string' },
        ...pathVariables,
      ],
    };

    const totalRequests = collection.item.reduce(
      (n, f) => n + (f.item || []).reduce((m, i) => m + (i.item ? i.item.length : 1), 0),
      0
    );

    fs.writeFileSync(OUTPUT, JSON.stringify(collection, null, 2));
    console.log(`Postman 컬렉션 생성 완료: ${path.relative(process.cwd(), OUTPUT)}`);
    console.log(`최상위 폴더 수: ${collection.item.length} (원본 태그 ${folders.length}개), 총 요청 수: ${totalRequests}`);
  });
}

main();
