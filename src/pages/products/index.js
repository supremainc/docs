import React, { useEffect } from 'react';
import {Redirect, useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Redirect2Product() {
    const location = useLocation();
    const search = location.search;
    // example: ?name=xpassq2
    const product = search ? `${new URLSearchParams(search).get('name')}` : '';
    
    // 외부 URL로 새창에서 열리게 하는 함수
    const redirectToExternal = (url) => {
        useEffect(() => {
            window.open(url, '_blank', 'noopener,noreferrer');
        }, []);
        return <div>Opening in new window...</div>;
    };
    
    switch (product) {
        case 'bs3':
            return <Redirect to={useBaseUrl(`/device/biostation_3`)} />;
        case 'bs3m':
            return <Redirect to={useBaseUrl(`/device/biostation_3_max`)} />;
        case 'xpq2':
            return <Redirect to={useBaseUrl(`/device/xpass_q2`)} />;
        default:
            return <Redirect to={useBaseUrl(`/`)} />;
    }
}