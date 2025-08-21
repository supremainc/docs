module.exports = function () {
    return {
        name: 'msal-auth-plugin',
        injectHtmlTags() {
            return {
                headTags: [
                    // MSAL.js 라이브러리 로드 (공식 CDN 사용)
                    {
                        tagName: 'script',
                        attributes: {
                            src: 'https://cdn.jsdelivr.net/npm/@azure/msal-browser@4.21.0/lib/msal-browser.min.js',
                            crossorigin: 'anonymous'
                        }
                    }
                ],
                postBodyTags: [
                    // MSAL 설정 및 초기화 스크립트
                    {
                        tagName: 'script',
                        innerHTML: `
                            // MSAL 라이브러리가 로드될 때까지 대기
                            (function() {
                                function waitForMSAL() {
                                    if (typeof window.msal === 'undefined') {
                                        console.log('Waiting for MSAL library to load...');
                                        setTimeout(waitForMSAL, 100);
                                        return;
                                    }
                                    
                                    console.log('MSAL library loaded successfully');
                                    initializeMSAL();
                                }
                                
                                function initializeMSAL() {
                                    // 항상 인증 활성화 (테스트용)
                                    console.log('MSAL Auth Plugin - Environment info:', {
                                        hostname: window.location.hostname,
                                        pathname: window.location.pathname,
                                        port: window.location.port,
                                        protocol: window.location.protocol,
                                        userAgent: navigator.userAgent
                                    });
                                    
                                    // Bot/Crawler 감지 함수
                                    function isAlgoliaCrawler() {
                                        if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
                                        
                                        const userAgent = window.navigator.userAgent;
                                        const isAlgolia = userAgent.includes('Algolia Crawler');
                                        
                                        if (isAlgolia) {
                                            console.log('Algolia Crawler detected - Authentication disabled');
                                        }
                                        
                                        return isAlgolia;
                                    }
                                    
                                    // 브라우저 호환성 체크
                                    function getBrowserInfo() {
                                        const ua = window.navigator.userAgent;
                                        const msie = ua.indexOf("MSIE ");
                                        const msie11 = ua.indexOf("Trident/");
                                        const isIE = msie > 0 || msie11 > 0;
                                        
                                        if (isIE) {
                                            return { 
                                                isSupported: false, 
                                                reason: 'Internet Explorer is not fully supported. Please use a modern browser.'
                                            };
                                        }
                                        
                                        return { isSupported: true };
                                    }
                                    
                                    // 인증 활성화 여부 확인 (항상 활성화로 단순화)
                                    function shouldEnableAuth() {
                                        // Algolia Crawler 감지 시에만 인증 비활성화
                                        if (isAlgoliaCrawler()) {
                                            return false;
                                        }
                                        
                                        // 그 외 모든 경우에 인증 활성화
                                        console.log('Authentication enabled for all environments');
                                        return true;
                                    }
                                    
                                    // MSAL 설정
                                    const msalConfig = {
                                        auth: {
                                            clientId: "b6f96dc8-bf6f-40b7-9b85-fc996090bc67",
                                            authority: "https://login.microsoftonline.com/5303b6fd-d5c2-4a9e-b1cf-b03b0162bd4d",
                                            redirectUri: "https://supremainc.github.io/docs",
                                            postLogoutRedirectUri: "https://supremainc.github.io/docs",
                                            navigateToLoginRequestUrl: true
                                        },
                                        cache: {
                                            cacheLocation: "sessionStorage",
                                            storeAuthStateInCookie: false
                                        },
                                        system: {
                                            loggerOptions: {
                                                loggerCallback: (level, message, containsPii) => {
                                                    if (containsPii) return;
                                                    switch (level) {
                                                        case window.msal.LogLevel.Error:
                                                            console.error(message);
                                                            return;
                                                        case window.msal.LogLevel.Info:
                                                            console.info(message);
                                                            return;
                                                        case window.msal.LogLevel.Verbose:
                                                            console.debug(message);
                                                            return;
                                                        case window.msal.LogLevel.Warning:
                                                            console.warn(message);
                                                            return;
                                                    }
                                                }
                                            }
                                        }
                                    };
                                    
                                    const loginRequest = {
                                        scopes: ["User.Read"]
                                    };
                                    
                                    // MSAL 인스턴스 초기화 및 인증 처리
                                    function initializeAuth() {
                                        // 인증이 비활성화된 경우 스킵
                                        if (!shouldEnableAuth()) {
                                            return;
                                        }
                                        
                                        // 브라우저 호환성 체크
                                        const browserInfo = getBrowserInfo();
                                        if (!browserInfo.isSupported) {
                                            document.body.innerHTML = \`
                                                <div style="
                                                    display: flex;
                                                    flex-direction: column;
                                                    justify-content: center;
                                                    align-items: center;
                                                    height: 100vh;
                                                    background-color: #333;
                                                    color: #fff;
                                                    font-family: Arial, sans-serif;
                                                    text-align: center;
                                                    padding: 20px;
                                                ">
                                                    <h2>브라우저 호환성 알림</h2>
                                                    <p>\${browserInfo.reason}</p>
                                                    <p>Chrome, Firefox, Safari, 또는 Edge 브라우저를 사용해주세요.</p>
                                                </div>
                                            \`;
                                            return;
                                        }
                                        
                                        // MSAL 인스턴스 생성
                                        const msalInstance = new window.msal.PublicClientApplication(msalConfig);
                                        
                                        // MSAL 초기화
                                        msalInstance.initialize().then(() => {
                                            // 리다이렉트 처리
                                            msalInstance.handleRedirectPromise().then(handleResponse).catch(err => {
                                                console.error('Redirect handling error:', err);
                                            });
                                            
                                            // 기존 계정 체크
                                            selectAccount();
                                        }).catch(err => {
                                            console.error('MSAL initialization error:', err);
                                        });
                                        
                                        function selectAccount() {
                                            const currentAccounts = msalInstance.getAllAccounts();
                                            
                                            if (!currentAccounts || currentAccounts.length === 0) {
                                                // 인증되지 않은 상태 - 로그인 화면 표시
                                                showLoginScreen();
                                            } else if (currentAccounts.length === 1) {
                                                // 단일 계정 - 자동 설정
                                                msalInstance.setActiveAccount(currentAccounts[0]);
                                                console.log('User authenticated:', currentAccounts[0].username);
                                            } else {
                                                // 다중 계정 - 첫 번째 계정 사용
                                                console.warn('Multiple accounts detected. Using first account.');
                                                msalInstance.setActiveAccount(currentAccounts[0]);
                                            }
                                        }
                                        
                                        function handleResponse(resp) {
                                            if (resp !== null) {
                                                msalInstance.setActiveAccount(resp.account);
                                                console.log('Authentication successful:', resp.account.username);
                                                // 페이지 새로고침으로 인증된 상태로 전환
                                                window.location.reload();
                                            } else {
                                                selectAccount();
                                            }
                                        }
                                        
                                        function showLoginScreen() {
                                            // 로그인 화면 HTML 생성
                                            const loginHTML = \`
                                                <div style="
                                                    display: flex;
                                                    flex-direction: column;
                                                    justify-content: center;
                                                    align-items: center;
                                                    height: 100vh;
                                                    background-color: #333;
                                                    color: #fff;
                                                    font-family: Arial, sans-serif;
                                                ">
                                                    <div style="
                                                        background-color: #A32343;
                                                        color: #fff;
                                                        padding: 15px 30px;
                                                        border-radius: 5px;
                                                        cursor: pointer;
                                                        font-weight: bold;
                                                        border: none;
                                                        font-size: 16px;
                                                    " onclick="signIn()">
                                                        Microsoft 계정으로 로그인
                                                    </div>
                                                </div>
                                            \`;
                                            
                                            document.body.innerHTML = loginHTML;
                                        }
                                        
                                        // 글로벌 로그인 함수
                                        window.signIn = function() {
                                            msalInstance.loginPopup(loginRequest)
                                                .then(handleResponse)
                                                .catch(function (error) {
                                                    console.error('Login error:', error);
                                                    // 팝업이 차단된 경우 리다이렉트로 fallback
                                                    if (error.errorCode === 'popup_window_error' || error.errorCode === 'empty_window_error') {
                                                        msalInstance.loginRedirect(loginRequest);
                                                    }
                                                });
                                        };
                                    }
                                    
                                    // DOM이 로드된 후 초기화
                                    if (document.readyState === 'loading') {
                                        document.addEventListener('DOMContentLoaded', initializeAuth);
                                    } else {
                                        initializeAuth();
                                    }
                                }
                                
                                // 즉시 실행하거나 DOM 로드 후 실행
                                if (document.readyState === 'loading') {
                                    document.addEventListener('DOMContentLoaded', waitForMSAL);
                                } else {
                                    waitForMSAL();
                                }
                            })();
                        `
                    }
                ]
            };
        },
    };
};
