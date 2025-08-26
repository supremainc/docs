// PrinceXML 동적 콘텐츠 로딩 대기 스크립트 (커버 페이지 특화)
(function() {
    'use strict';
    
    // 로딩 완료를 기다리는 최대 시간 (밀리초)
    const TIMEOUT = 10000;
    
    // 로딩 완료 조건을 확인하는 함수들
    const loadingChecks = [
        // 이미지 로딩 완료 확인
        function checkImages() {
            const images = document.querySelectorAll('img');
            return Array.from(images).every(img => img.complete && img.naturalHeight > 0);
        },
        
        // 로딩 완료 표시 확인
        function checkLoadingIndicators() {
            // data-loaded 속성이나 content-loaded 클래스 확인
            return document.body.hasAttribute('data-loaded') || 
                   document.body.classList.contains('content-loaded');
        },
        
        // URL 파라미터 기반 콘텐츠 로딩 확인
        function checkDynamicContent() {
            // 제목이 기본값이 아닌지 확인 (URL 파라미터가 적용되었는지)
            const titleElements = document.querySelectorAll('h1');
            const hasValidTitle = Array.from(titleElements).some(el => 
                el.textContent && el.textContent.trim() !== '' && el.textContent !== 'Suprema'
            );
            
            // 또는 기본값이라도 렌더링이 완료되었는지 확인
            return titleElements.length > 0 && document.readyState === 'complete';
        },
        
        // 폰트 로딩 완료 확인
        function checkFonts() {
            if ('fonts' in document) {
                return document.fonts.ready.then(() => true).catch(() => true);
            }
            return true;
        }
    ];
    
    // 모든 로딩 조건이 충족되었는지 확인
    async function isLoadingComplete() {
        try {
            const results = await Promise.all(loadingChecks.map(async (check) => {
                try {
                    return await check();
                } catch (e) {
                    console.warn('Loading check failed:', e);
                    return true; // 에러 발생 시 로딩 완료로 간주
                }
            }));
            return results.every(result => result === true);
        } catch (e) {
            console.warn('Error in loading check:', e);
            return true;
        }
    }
    
    // 주기적으로 로딩 상태 확인
    function waitForLoading() {
        return new Promise((resolve) => {
            const startTime = Date.now();
            
            async function checkLoading() {
                const loadingComplete = await isLoadingComplete();
                
                if (loadingComplete) {
                    console.log('Dynamic content loading completed for cover page');
                    resolve();
                    return;
                }
                
                if (Date.now() - startTime > TIMEOUT) {
                    console.warn('Loading timeout reached, proceeding with PDF generation');
                    resolve();
                    return;
                }
                
                setTimeout(checkLoading, 200);
            }
            
            checkLoading();
        });
    }
    
    // DOM이 준비되면 로딩 대기 시작
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForLoading);
    } else {
        waitForLoading();
    }
    
    // URL 변경 감지 (SPA에서 라우팅 변경 시)
    let currentURL = window.location.href;
    const observer = new MutationObserver(function() {
        if (window.location.href !== currentURL) {
            currentURL = window.location.href;
            console.log('URL changed, waiting for new content...');
            waitForLoading();
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-loaded', 'class']
    });
    
})();
