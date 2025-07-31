import React, { useState } from 'react';

import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from "@azure/msal-react";
import { msalConfig } from '@site/authConfig';

/**
 * MSAL should be instantiated outside of the component tree to prevent it from being re-instantiated on re-renders.
 */
const msalInstance = new PublicClientApplication(msalConfig);

// Default to using the first account if no account is active on page load
if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    // Account selection logic is app dependent. Adjust as needed for different use cases.
    msalInstance.setActiveAccount(msalInstance.getActiveAccount()[0]);
}

// Listen for sign-in event and set active account
msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
        const account = event.payload.account;
        msalInstance.setActiveAccount(account);
    }
});

// Default implementation, that you can customize
export default function Root({children}) {
    const activeAccount = msalInstance.getActiveAccount();
    const claims = activeAccount ? activeAccount.idTokenClaims : null;

    const handleRedirect = () => {
        //instance.loginRedirect()
        msalInstance.loginPopup({
                ...msalConfig,
                prompt: 'create',
            })
            .catch((error) => console.log(error));
    };

    return (
        <MsalProvider instance={msalInstance}>            
            <AuthenticatedTemplate>
                <>{children}</>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <div style={{margin:'auto'}}>
                    <button onClick={handleRedirect}>
                        Sign in
                    </button>
                </div>
            </UnauthenticatedTemplate>
        </MsalProvider>
    );
}