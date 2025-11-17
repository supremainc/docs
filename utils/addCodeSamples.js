const OpenAPISnippet = require('openapi-snippet');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// 입력 및 출력 파일 경로
const inputFile = path.join(__dirname, '../openapi/bsxapi.yaml');
const outputFile = path.join(__dirname, '../openapi/bsxapi-with-samples.yaml');

console.log('📖 Reading OpenAPI specification...');
const yamlContent = fs.readFileSync(inputFile, 'utf8');
const spec = yaml.load(yamlContent);

// OpenAPI Snippet이 지원하는 모든 타겟 언어
const targets = [
  'shell_curl',           // cURL
  'shell_httpie',         // HTTPie
  'shell_wget',           // wget
  'node_native',          // Node.js (http 모듈)
  'node_request',         // Node.js (request)
  'node_unirest',         // Node.js (unirest)
  'node_axios',           // Node.js (axios)
  'node_fetch',           // Node.js (node-fetch)
  'javascript_fetch',     // JavaScript (fetch)
  'javascript_jquery',    // JavaScript (jQuery)
  'javascript_xhr',       // JavaScript (XMLHttpRequest)
  'python_python3',       // Python 3 (http.client)
  'python_requests',      // Python (requests)
  'ruby_native',          // Ruby (net/http)
  'php_curl',             // PHP (cURL)
  'php_http1',            // PHP (pecl/http v1)
  'php_http2',            // PHP (pecl/http v2)
  'java_okhttp',          // Java (OkHttp)
  'java_unirest',         // Java (Unirest)
  'go_native',            // Go (net/http)
  'c_libcurl',            // C (libcurl)
  'objc_nsurlsession',    // Objective-C (NSURLSession)
  'swift_nsurlsession',   // Swift (NSURLSession)
  'csharp_restsharp',     // C# (RestSharp)
  'csharp_httpclient',    // C# (HttpClient)
  'powershell_webrequest',// PowerShell (Invoke-WebRequest)
  'powershell_restmethod',// PowerShell (Invoke-RestMethod)
  'r_httr',               // R (httr)
  'ocaml_cohttp',         // OCaml (cohttp)
  'kotlin',               // Kotlin
];

let totalOperations = 0;
let processedOperations = 0;

// 먼저 총 작업 수 계산
Object.keys(spec.paths).forEach(path => {
  Object.keys(spec.paths[path]).forEach(method => {
    if (['get', 'post', 'put', 'delete', 'patch', 'options', 'head'].includes(method)) {
      totalOperations++;
    }
  });
});

console.log(`🔍 Found ${totalOperations} API operations to process`);
console.log('🔧 Generating code samples...\n');

// 각 path와 method에 대해 코드 샘플 생성
Object.keys(spec.paths).forEach(path => {
  Object.keys(spec.paths[path]).forEach(method => {
    // HTTP 메서드만 처리
    if (['get', 'post', 'put', 'delete', 'patch', 'options', 'head'].includes(method)) {
      const operation = spec.paths[path][method];
      
      try {
        // /api/login 디버깅
        if (path === '/api/login' && method === 'post') {
          console.log('\n🔍 DEBUG /api/login:');
          console.log('Full operation:', JSON.stringify(operation, null, 2).substring(0, 500));
          console.log('\nHeaders:', JSON.stringify(operation.responses?.['200']?.headers, null, 2));
          
          try {
            const result = OpenAPISnippet.getEndpointSnippets(spec, path, method, targets);
            console.log('✅ Success! Generated snippets:', result.snippets.length);
          } catch (err) {
            console.log('❌ Error details:');
            console.log('  Message:', err.message);
            console.log('  Stack:', err.stack.split('\n').slice(0, 5).join('\n'));
            
            // 헤더 제거하고 재시도
            console.log('\n🔧 Attempting without response headers...');
            const operationWithoutHeaders = JSON.parse(JSON.stringify(operation));
            if (operationWithoutHeaders.responses?.['200']?.headers) {
              delete operationWithoutHeaders.responses['200'].headers;
            }
            
            // 임시로 spec에 수정된 operation 적용
            const tempSpec = JSON.parse(JSON.stringify(spec));
            tempSpec.paths[path][method] = operationWithoutHeaders;
            
            try {
              const result2 = OpenAPISnippet.getEndpointSnippets(tempSpec, path, method, targets);
              console.log('✅ Success without headers! Generated snippets:', result2.snippets.length);
              
              // 성공하면 원본에도 적용
              operation['x-codeSamples'] = result2.snippets.map(snippet => ({
                lang: snippet.id,
                label: snippet.title,
                source: snippet.content
              }));
              processedOperations++;
              console.log(`✅ [${processedOperations}/${totalOperations}] ${method.toUpperCase()} ${path} - ${result2.snippets.length} samples generated (without headers)`);
            } catch (err2) {
              console.log('❌ Still failed:', err2.message);
            }
            
            return;
          }
        }
        
        // 코드 샘플 생성
        const result = OpenAPISnippet.getEndpointSnippets(spec, path, method, targets);
        
        if (result && result.snippets && result.snippets.length > 0) {
          // x-codeSamples 형식으로 변환하고 URL 인코딩 해제
          operation['x-codeSamples'] = result.snippets.map(snippet => ({
            lang: snippet.id,
            label: snippet.title,
            source: snippet.content
              .replace(/%7B/g, '{')
              .replace(/%7D/g, '}')
              .replace('https:///', 'https://')
          }));
          
          processedOperations++;
          console.log(`✅ [${processedOperations}/${totalOperations}] ${method.toUpperCase()} ${path} - ${result.snippets.length} samples generated`);
        } else {
          console.log(`⚠️  [${processedOperations}/${totalOperations}] ${method.toUpperCase()} ${path} - No samples generated`);
        }
      } catch (error) {
        console.error(`❌ Error processing ${method.toUpperCase()} ${path}:`, error.message);
        console.error('Full error:', error);
      }
    }
  });
});

// 업데이트된 스펙을 YAML 파일로 저장
console.log('\n💾 Saving updated specification...');
const yamlOutput = yaml.dump(spec, {
  lineWidth: -1,  // 줄바꿈 제한 없음
  noRefs: true,   // 참조 사용 안 함
  quotingType: '"', // 쌍따옴표 사용
  forceQuotes: false,
  flowLevel: -1
});

fs.writeFileSync(outputFile, yamlOutput, 'utf8');

console.log(`\n✨ Success! Code samples added to ${processedOperations}/${totalOperations} operations`);
console.log(`📄 Output file: ${outputFile}`);
console.log(`\n📊 Statistics:`);
console.log(`   - Total operations: ${totalOperations}`);
console.log(`   - Successfully processed: ${processedOperations}`);
console.log(`   - Languages per operation: ${targets.length}`);
console.log(`   - Total code samples generated: ${processedOperations * targets.length}`);
