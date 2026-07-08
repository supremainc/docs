const { app } = require('@azure/functions');
const fs = require('fs');
const path = require('path');

const SUPPORTED_LOCALES = ['ko', 'en', 'es', 'ja'];
const DEFAULT_LOCALE = 'ko';
// 지원하지 않는 언어(fr, zh, de 등)가 감지되면 국제 공통어인 영어로 대체
const FALLBACK_LOCALE = 'en';
const HOME_HTML_PATH = path.join(__dirname, '../../assets/home.html');
const NO_CACHE_HEADERS = { 'Cache-Control': 'private, no-store' };

function parseCookieLocale(cookieHeader) {
  if (!cookieHeader) {
    return null;
  }
  const match = cookieHeader.match(/(?:^|;\s*)preferredLanguage=([^;]+)/);
  const value = match ? decodeURIComponent(match[1]) : null;
  return SUPPORTED_LOCALES.includes(value) ? value : null;
}

function detectFromAcceptLanguage(header) {
  if (!header) {
    return DEFAULT_LOCALE;
  }
  const candidates = header
    .split(',')
    .map((part) => {
      const [tag, qPart] = part.trim().split(';q=');
      return { tag: tag.toLowerCase(), q: qPart ? parseFloat(qPart) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of candidates) {
    const primary = tag.split('-')[0];
    if (SUPPORTED_LOCALES.includes(primary)) {
      return primary;
    }
  }
  return FALLBACK_LOCALE;
}

app.http('detectLanguage', {
  methods: ['GET', 'HEAD'],
  authLevel: 'anonymous',
  route: 'detect-language',
  handler: async (request, context) => {
    const cookieLocale = parseCookieLocale(request.headers.get('cookie'));
    const locale = cookieLocale || detectFromAcceptLanguage(request.headers.get('accept-language'));

    if (locale === DEFAULT_LOCALE) {
      try {
        const html = fs.readFileSync(HOME_HTML_PATH, 'utf-8');
        return {
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8', ...NO_CACHE_HEADERS },
          body: html,
        };
      } catch (error) {
        context.error('Failed to read home.html asset:', error);
        return {
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8', ...NO_CACHE_HEADERS },
          body: '<!doctype html><html><body><a href="/en/">English</a> | <a href="/es/">Español</a> | <a href="/ja/">日本語</a></body></html>',
        };
      }
    }

    const search = new URL(request.url).search;
    return {
      status: 302,
      headers: { Location: `/${locale}/${search}`, ...NO_CACHE_HEADERS },
    };
  },
});
