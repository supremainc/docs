import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Redirect2Bsx() {
  const detectBrowserLanguage = () => {
    const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
    
    for (const lang of browserLanguages) {
      const langCode = lang.toLowerCase().split('-')[0];
      if (langCode === 'en') {
        return 'en';
      } else if (langCode === 'ko') {
        return 'ko';
      }
    }
    return 'ko'; // 기본값
  };

  const detectedLanguage = detectBrowserLanguage();
      
  // 첫 방문 시에만 브라우저 언어에 따라 자동 리다이렉트
  if (detectedLanguage !== 'ko') {
    return <Redirect to={useBaseUrl(`/${detectedLanguage}/platform/biostar_x`)} />
  } else {
    return <Redirect to={useBaseUrl('/platform/biostar_x')} />
  }
}