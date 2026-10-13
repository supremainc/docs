// API 레퍼런스 페이지 설정.
// api-docs-routes 플러그인이 이 목록으로 라우트를 만들고, 각 항목을 페이지 컴포넌트에 props로 넘긴다.
// 빌드(Node)에서도 읽으므로 외부 의존성을 두지 않는다.

const SITE_URL = 'https://docs.supremainc.com';

export const API_DOCS = [
  {
    id: 'bsxapi',
    path: 'developer/bsxapi',
    collection: 'static/specs/bsxapi-postman-collection.json',
    name: 'BioStar X API',
    title: 'BioStar X API Reference',
    description: 'BioStar X REST API documentation. Manage users, access control, doors, devices, and credentials with JSON-based endpoints.',
    ogDescription: 'Complete REST API documentation for BioStar X access control system. Manage users, doors, devices, and biometric credentials.',
    keywords: 'BioStar X API, Suprema API, access control API, biometric API, REST API, user management API, door control API, device management API',
    datePublished: '2025-11-11',
  },
  {
    id: 'clue',
    path: 'developer/clue',
    collection: 'static/specs/clue-api-postman-collection.json',
    name: 'CLUe API',
    title: 'CLUe API',
    description: 'CLUe REST API documentation. Manage users, access control, doors, devices, and credentials with JSON-based endpoints.',
    ogDescription: 'Complete REST API documentation for CLUe access control system. Manage users, doors, devices, and credentials.',
    keywords: 'CLUe API, Suprema API, access control API, REST API, user management API, door control API, device management API',
    datePublished: '2025-11-11',
  },
  {
    id: 'vionyx',
    path: 'developer/vionyx',
    collection: 'static/specs/vionyx-api-postman-collection.json',
    name: 'ViOnyx AI Camera API',
    title: 'ViOnyx AI Camera API Reference',
    description: 'ViOnyx AI Camera REST API documentation. Manage live video, AI events, face authentication, and device configuration with JSON-based endpoints.',
    ogDescription: 'Complete REST API documentation for the ViOnyx AI camera. Manage live video, AI events, face authentication, and device configuration.',
    keywords: 'ViOnyx API, Suprema API, AI camera API, REST API, face authentication API, AI event API, device management API',
    datePublished: '2026-08-10',
    serverUrl: 'https://{{your-vionyx-ip}}/v1/api',
  },
].map(api => ({ ...api, canonicalUrl: `${SITE_URL}/${api.path}` }));
