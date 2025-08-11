import { LogLevel } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */

// 안전한 환경 변수 접근을 위한 함수
const getEnvVar = (key, fallback = '') => {
    if (typeof process !== 'undefined' && process.env) {
        return process.env[key] || fallback;
    }
    return fallback;
};

export const msalConfig = {
    auth: {
        clientId: getEnvVar('REACT_APP_AZURE_CLIENT_ID', ''),
        authority: `https://login.microsoftonline.com/${getEnvVar('REACT_APP_AZURE_TENANT_ID', '')}`,
        redirectUri: getEnvVar('REACT_APP_REDIRECT_URI', 'https://supremainc.github.io/docs'),
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