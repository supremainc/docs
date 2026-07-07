import { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { getDeviceName, resolveText } from './resolve-text';

// locale+baseUrl별로 한 번만 로드하도록 캐시 (동일 로케일을 쓰는 모든 아이콘이 공유)
const localeDataCache = new Map();

async function fetchJson(url, fallbackUrl) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    return await res.json();
  } catch {
    const res = await fetch(fallbackUrl);
    return await res.json();
  }
}

function loadLocaleData(dataBaseUrl, locale) {
  const cacheKey = `${dataBaseUrl}:${locale}`;
  if (localeDataCache.has(cacheKey)) return localeDataCache.get(cacheKey);

  const promise = Promise.all([
    fetchJson(`${dataBaseUrl}/x/${locale}.json`, `${dataBaseUrl}/x/en.json`),
    fetchJson(`${dataBaseUrl}/${locale}.json`, `${dataBaseUrl}/en.json`),
    fetchJson(`${dataBaseUrl}/device/${locale}.json`, `${dataBaseUrl}/device/en.json`),
    fetchJson(`${dataBaseUrl}/air/${locale}.json`, `${dataBaseUrl}/air/en.json`),
    fetchJson(`${dataBaseUrl}/cam/${locale}.json`, `${dataBaseUrl}/cam/en.json`),
    fetchJson(`${dataBaseUrl}/partner/${locale}.json`, `${dataBaseUrl}/partner/en.json`),
  ]).then(([x, bs2, device, air, cam, partner]) => ({ x, bs2, device, air, cam, partner }));

  localeDataCache.set(cacheKey, promise);
  return promise;
}

// remark-cmd 플러그인과 동일한 JSON 데이터(static/data/remark-cmd)를 fetch로 참조해,
// sid/product 조합으로 SVG 아이콘의 title(<title> 엘리먼트) 텍스트를 런타임에 구해온다.
// 예) <SVG sid="audit.system.logout" product="2" />
export function useCmdTitle({ sid, product, replace, device }) {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const dataBaseUrl = useBaseUrl('/data/remark-cmd');
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (!sid) {
      setTitle(null);
      return undefined;
    }

    let cancelled = false;
    const deviceName =
      device ||
      (typeof window !== 'undefined' ? getDeviceName(window.location.pathname) : null);

    loadLocaleData(dataBaseUrl, locale).then((data) => {
      if (cancelled) return;
      const text = resolveText(data, sid, product, deviceName, replace);
      if (!text && process.env.NODE_ENV !== 'production') {
        console.warn(`[useCmdTitle] sid not found: "${sid}" (product=${product || 'x'})`);
      }
      setTitle(text);
    });

    return () => {
      cancelled = true;
    };
  }, [sid, product, replace, device, locale, dataBaseUrl]);

  return title;
}
