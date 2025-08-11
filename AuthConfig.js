import { LogLevel } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */

// 빌드 시점에 환경 변수를 직접 주입
const AZURE_CLIENT_ID = process.env.REACT_APP_AZURE_CLIENT_ID || '';
const AZURE_TENANT_ID = process.env.REACT_APP_AZURE_TENANT_ID || '';
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI || 'https://supremainc.github.io/docs';

// 디버깅을 위한 로그
console.log('AuthConfig.js Environment Variables:', {
    REACT_APP_AZURE_CLIENT_ID: AZURE_CLIENT_ID ? '***' : 'undefined',
    REACT_APP_AZURE_TENANT_ID: AZURE_TENANT_ID ? '***' : 'undefined',
    REACT_APP_REDIRECT_URI: REDIRECT_URI || 'undefined'
});

export const msalConfig = {
    auth: {
        clientId: AZURE_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${AZURE_TENANT_ID}`,
        redirectUri: REDIRECT_URI,
        postLogoutRedirectUri: '/',
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {   
        loggerOptions: {    
            loggerCallback: (level, message, containsPii) => {  
                if (containsPii) {      
                    return;     
                }       
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }   
            }   
        }   
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 */
export const loginRequest = {
    scopes: []
};