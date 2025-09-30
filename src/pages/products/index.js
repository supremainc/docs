import React from 'react';
import {Redirect, useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Redirect2Product() {
    const location = useLocation();
    const search = location.search;
    // example: ?name=xpassq2
    const product = search ? `${new URLSearchParams(search).get('name')}` : '';
    switch (product) {
        case 'bs3':
            return <Redirect to={useBaseUrl(`/device/biostation_3`)} />;
        default:
            return <Redirect to={useBaseUrl(`/`)} />;
    }
}