const { app } = require('@azure/functions');

const SUPPORTED_LOCALES = ['en', 'es', 'ja'];

// staticwebapp.config.json에서 /en|es|ja/api/bsxapi를 /api/bsxapi로 rewrite하면
// SWA가 원본 요청 URL을 x-ms-original-url 헤더로 전달해 준다
function detectLocaleFromOriginalUrl(originalUrl) {
  if (!originalUrl) {
    return null;
  }
  const locale = new URL(originalUrl).pathname.split('/')[1];
  return SUPPORTED_LOCALES.includes(locale) ? locale : null;
}

app.http('bsxapiRedirect', {
  methods: ['GET', 'HEAD'],
  authLevel: 'anonymous',
  route: 'bsxapi',
  handler: async (request) => {
    const search = new URL(request.url).search;
    const locale = detectLocaleFromOriginalUrl(request.headers.get('x-ms-original-url'));
    const target = locale ? `/${locale}/developer/bsxapi` : '/developer/bsxapi';
    return {
      status: 301,
      headers: { Location: `${target}${search}` },
    };
  },
});
