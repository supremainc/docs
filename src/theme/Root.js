import React, { useState } from 'react';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from "@azure/msal-react";
import { msalConfig, authEnabled } from '@site/AuthConfig';
import { translate } from '@docusaurus/Translate';

const isDev = process.env.NODE_ENV === 'development';

/**
 * MSAL should be instantiated outside of the component tree to prevent it from being re-instantiated on re-renders.
 * Only instantiate in production environment and when authentication is enabled.
 */
const msalInstance = (!isDev && authEnabled && msalConfig) ? new PublicClientApplication(msalConfig) : null;

// Default to using the first account if no account is active on page load
// Only in production environment and when authentication is enabled
if (!isDev && authEnabled && msalInstance && !msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    // Account selection logic is app dependent. Adjust as needed for different use cases.
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

// Listen for sign-in event and set active account
// Only in production environment and when authentication is enabled
if (!isDev && authEnabled && msalInstance) {
    msalInstance.addEventCallback((event) => {
        if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
            const account = event.payload.account;
            msalInstance.setActiveAccount(account);
        }
    });
}

// Default implementation, that you can customize
export default function Root({children}) {
    // Don't show authentication in development environment or when auth is disabled
    if (isDev || !authEnabled) {
        return <>{children}</>;
    }

    const activeAccount = msalInstance?.getActiveAccount();
    const claims = activeAccount ? activeAccount.idTokenClaims : null;

    const handleRedirect = () => {
        if (!msalInstance) return;
        
        //instance.loginRedirect()
        msalInstance.loginPopup({
            ...msalConfig,
            prompt: 'create',
        }).catch((error) => console.log(error));
    };

    return (
        <MsalProvider instance={msalInstance}>
            <AuthenticatedTemplate>
                <>{children}</>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <div style={{margin:'auto', backgroundColor: '#333', width: '100vw', height: '100vh', alignContent: 'center'}}>
                    <div onClick={handleRedirect} style={{
                        width: '340px', 
                        margin: '0 auto', 
                        textAlign: 'center',
                        cursor: 'pointer',
                        backgroundColor: '#A32343',
                        borderRadius: '5px',
                        color: '#fff',
                        fontWeight: 'bold',
                        padding: '10px',
                        alignContent: 'center',
                        }}>
                        <p style={{ margin: 0 }}>
                            {translate({ id: 'theme.mslogin.buttonText' })}
                        </p>
                    </div>
                </div>
            </UnauthenticatedTemplate>
        </MsalProvider>
    );
}