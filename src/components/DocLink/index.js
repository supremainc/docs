import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { useDocById } from '@docusaurus/plugin-content-docs/client';

export default function DocLink({ docId }) {
    const doc = useDocById(docId);
    const targetLink = useBaseUrl(doc?.permalink || docId);
    return (
        <Link to={targetLink}>
            {doc?.title || docId}
        </Link>
    )
}