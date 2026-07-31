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
      case 'xpq2':
         return <Redirect to={useBaseUrl(`/device/xpass_q2`)} />;
      case 'bs3m':
         return <Redirect to={useBaseUrl(`/device/biostation_3_max`)} />;
      case 'vqf12r':
         return <Redirect to={useBaseUrl(`/device/vionyx`)} />;
      case 'bew3':
         return <Redirect to={useBaseUrl(`/device/bioentry_w3`)} />;
      case 'cs20':
         return <Redirect to={useBaseUrl(`/device/corestation_20`)} />;
      case 'di24':
         return <Redirect to={useBaseUrl(`/device/doorinterface`)} />;
      case 'xp2':
         return <Redirect to={useBaseUrl(`/device/xpass_2`)} />;
      case 'xpd2':
         return <Redirect to={useBaseUrl(`/device/xpass_d2`)} />;
      case 'bs2a':
         return <Redirect to={useBaseUrl(`/device/biostation_2a`)} />;
      case 'bs3':
         return <Redirect to={useBaseUrl(`/device/biostation_3`)} />;
      case 'xs2':
         return <Redirect to={useBaseUrl(`/device/xstation_2`)} />;
      case 'bep2':
         return <Redirect to={useBaseUrl(`/device/bioentry_p2`)} />;
      case 'ber2':
         return <Redirect to={useBaseUrl(`/device/bioentry_r2`)} />;
      case 'bew2':
         return <Redirect to={useBaseUrl(`/device/bioentry_w2`)} />;
      case 'cs40':
         return <Redirect to={useBaseUrl(`/device/corestation_40`)} />;
      case 'im120':
         return <Redirect to={useBaseUrl(`/device/inputmodule`)} />;
      case 'om120':
         return <Redirect to={useBaseUrl(`/device/outputmodule`)} />;
      case 'bln2':
         return <Redirect to={useBaseUrl(`/device/biolite_n2`)} />;
      case 'fs2':
         return <Redirect to={useBaseUrl(`/device/facestation_2`)} />;
      case 'fsf2':
         return <Redirect to={useBaseUrl(`/device/facestation_f2`)} />;
      case 'xps2':
         return <Redirect to={useBaseUrl(`/device/xpass_s2`)} />;
      default:
         return <Redirect to={useBaseUrl(`/`)} />;
   }
}