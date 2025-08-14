import { LogLevel } from "@azure/msal-browser";

/**
 * Check if the current request is from Algolia Crawler
 */
const isAlgoliaCrawler = () => {
    if (typeof window === 'undefined') return false;
    const userAgent = window.navigator.userAgent.toLowerCase();
    return userAgent.includes('algolia') || userAgent.includes('crawler');
};

/**
 * Check if authentication should be enabled
 * Disable auth for Algolia Crawler and in certain environments
 */
const shouldEnableAuth = () => {
    // Disable auth for Algolia Crawler
    if (isAlgoliaCrawler()) return false;
    
    // Disable auth if DISABLE_AUTH environment variable is set
    // if (process.env.REACT_APP_DISABLE_AUTH === 'true') return false;
    
    return true;
};

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */

export const msalConfig = shouldEnableAuth() ? {
    auth: {
        clientId: "b6f96dc8-bf6f-40b7-9b85-fc996090bc67",
        authority: "https://login.microsoftonline.com/5303b6fd-d5c2-4a9e-b1cf-b03b0162bd4d",
        redirectUri: "https://supremainc.github.io/docs",
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
} : null;

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 */
export const loginRequest = shouldEnableAuth() ? {
    scopes: []
} : null;

/**
 * Export flag to check if authentication is enabled
 */
export const authEnabled = shouldEnableAuth();