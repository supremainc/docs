import MarkdownIt from 'markdown-it';

export const md = new MarkdownIt({ html: true, breaks: true, linkify: false, typographer: false });

export function toDisplayUrl(url) {
  if (!url?.raw) return '';
  return url.raw
    .replace(/\{\{baseUrl\}\}/g, '{server_url}')
    .replace(/\{\{([^}]+)\}\}/g, '{$1}');
}

export function toSnippetUrl(url) {
  if (!url?.raw) return 'https://your-server.com';
  return url.raw
    .replace(/\{\{baseUrl\}\}/g, 'https://your-server.com')
    .replace(/\{\{([^}]+)\}\}/g, '{$1}');
}

export function prettyJson(raw) {
  if (!raw) return '';
  try { return JSON.stringify(JSON.parse(raw.replace(/\r\n/g, '\n')), null, 2); }
  catch { return raw.replace(/\r\n/g, '\n'); }
}

export function toSlug(name) {
  return (name || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function findParentKeys(selected, folders) {
  if (!selected) return null;
  for (const folder of folders || []) {
    if (selected._folder?.name === folder.name) return { folder: folder.name };
    for (const child of folder.item || []) {
      if (child.item?.length > 0) {
        if (selected._folder?.name === child.name) return { folder: folder.name, sub: `${folder.name}::${child.name}` };
        for (const req of child.item) {
          if (req.name === selected.name) return { folder: folder.name, sub: `${folder.name}::${child.name}` };
        }
      } else if (child.name === selected.name) {
        return { folder: folder.name };
      }
    }
  }
  return null;
}

export function getAuthHeader(auth) {
  if (!auth) return null;
  if (auth.type === 'bearer') {
    const token = auth.bearer?.find(e => e.key === 'token')?.value || '{token}';
    return { key: 'Authorization', value: `Bearer ${token}` };
  }
  if (auth.type === 'apikey') {
    const entries = auth.apikey || [];
    const at = entries.find(e => e.key === 'in')?.value;
    if (at && at !== 'header') return null;
    const key = entries.find(e => e.key === 'key')?.value || 'Authorization';
    const value = entries.find(e => e.key === 'value')?.value || '{value}';
    return { key, value };
  }
  return null;
}

export function makeSnippets(req, auth) {
  const method = req.method || 'GET';
  const url = toSnippetUrl(req.url);
  const isLogin = req.url?.raw?.includes('/api/login');

  const hdrs = [...(req.header || [])];
  const authHeader = !isLogin ? getAuthHeader(auth) : null;
  const hasAuthHeader = authHeader && hdrs.some(h => h.key?.toLowerCase() === authHeader.key.toLowerCase());
  if (authHeader && !hasAuthHeader) hdrs.unshift(authHeader);

  const bodyRaw = req.body?.raw;
  const hasBody = !!bodyRaw;
  const body = hasBody ? prettyJson(bodyRaw) : '';

  if (hasBody && !hdrs.some(h => h.key?.toLowerCase() === 'content-type'))
    hdrs.push({ key: 'Content-Type', value: 'application/json' });

  const hCurl = hdrs.map(h => `     -H '${h.key}: ${h.value}'`).join(' \\\n');
  const hDict = hdrs.map(h => `    '${h.key}': '${h.value}'`).join(',\n');
  const hGo   = hdrs.map(h => `\treq.Header.Add("${h.key}", "${h.value}")`).join('\n');
  const hJava = hdrs.map(h => `    .addHeader("${h.key}", "${h.value}")`).join('\n');

  return {
    Shell: [
      `curl -s -k -X ${method} \\`,
      `${hCurl} \\`,
      hasBody ? `     -d '${body}' \\` : null,
      `     '${url}'`,
    ].filter(Boolean).join('\n'),

    Python: [
      'import requests\n',
      `url = "${url}"`,
      `headers = {\n${hDict}\n}`,
      hasBody
        ? `payload = ${body}\n\nresponse = requests.${method.toLowerCase()}(url, headers=headers, json=payload)`
        : `response = requests.${method.toLowerCase()}(url, headers=headers)`,
      'print(response.json())',
    ].join('\n'),

    JavaScript: [
      `const response = await fetch('${url}', {`,
      `  method: '${method}',`,
      `  headers: {\n${hDict}\n  },`,
      hasBody ? `  body: JSON.stringify(${body}),` : null,
      '});\n',
      'const data = await response.json();',
      'console.log(data);',
    ].filter(Boolean).join('\n'),

    'Node.js': [
      "const axios = require('axios');\n",
      'const { data } = await axios({',
      `  method: '${method.toLowerCase()}',`,
      `  url: '${url}',`,
      `  headers: {\n${hDict}\n  },`,
      hasBody ? `  data: ${body},` : null,
      '});\n',
      'console.log(data);',
    ].filter(Boolean).join('\n'),

    Go: [
      'package main\n',
      'import (',
      '\t"fmt"',
      '\t"net/http"',
      '\t"io/ioutil"',
      hasBody ? '\t"strings"' : null,
      ')\n',
      'func main() {',
      hasBody
        ? `\tpayload := strings.NewReader(\`${body}\`)\n\treq, _ := http.NewRequest("${method}", "${url}", payload)`
        : `\treq, _ := http.NewRequest("${method}", "${url}", nil)`,
      hGo,
      '\n\tres, _ := http.DefaultClient.Do(req)',
      '\tdefer res.Body.Close()',
      '\tbody, _ := ioutil.ReadAll(res.Body)',
      '\tfmt.Println(string(body))',
      '}',
    ].filter(Boolean).join('\n'),

    Java: [
      'OkHttpClient client = new OkHttpClient();\n',
      hasBody
        ? `RequestBody body = RequestBody.create(\n  MediaType.parse("application/json"),\n  ${JSON.stringify(body)}\n);`
        : 'RequestBody body = RequestBody.create(null, new byte[0]);',
      '\nRequest request = new Request.Builder()',
      `  .url("${url}")`,
      `  .method("${method}", body)`,
      hJava,
      '  .build();\n',
      'Response response = client.newCall(request).execute();',
      'System.out.println(response.body().string());',
    ].join('\n'),
  };
}
