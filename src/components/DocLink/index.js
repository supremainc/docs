import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useDocById } from '@docusaurus/plugin-content-docs/client';

export default function DocLink({ docId }) {
    const doc = useDocById(docId);

    return (
        <Link to={docId}>
            {doc?.title || docId}
        </Link>
    )
}