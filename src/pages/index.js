import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function RedirectComponent() {
  useEffect(() => {
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
      window.location.replace('/en/platform/biostar_x/');
    } else {
      window.location.replace('/platform/biostar_x/');
    }
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <div>Redirecting...</div>
    </div>
  );
}

export default function Redirect2Bsx() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => <RedirectComponent />}
    </BrowserOnly>
  );
}