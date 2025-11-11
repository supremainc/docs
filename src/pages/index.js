import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Redirect2Bsx() {
  return <Redirect to={useBaseUrl('/platform/biostar_x')} />
}