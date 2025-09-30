import React from 'react';
import {Redirect, useLocation} from '@docusaurus/router';

export default function Redirect2Product() {
    const location = useLocation();
    const search = location.search;
    // example: ?name=xpassq2
    const product = search ? `${new URLSearchParams(search).get('name')}` : '';
    switch (product) {
        case 'bs3':
            return <Redirect to={`/device/biostation_3`} />;
        default:
            return <Redirect to={`/`} />;
    }
}