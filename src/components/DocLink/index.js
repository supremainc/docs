import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { useDocById } from '@docusaurus/plugin-content-docs/client';

export default function DocLink({ docId, inner }) {
    const [anchorText, setAnchorText] = useState(null);
    
    useEffect(() => {
        if (inner && inner.startsWith('#')) {
            // 현재 페이지에서 앵커에 해당하는 요소 찾기
            const anchorId = inner.substring(1); // '#' 제거
            const element = document.getElementById(anchorId);
            if (element) {
                // 제목 텍스트 추출 (h1, h2, h3 등)
                const text = element.textContent?.trim();
                setAnchorText(text);
            }
        }
    }, [inner]);
    
    // 현재 문서 내 앵커 링크인 경우
    if (inner && inner.startsWith('#')) {
        const targetLink = useBaseUrl(inner);
        return (
            <Link to={targetLink}>
                {anchorText || inner}
            </Link>
        );
    } else if (docId) {
        const dId = docId.split('#')[0];
        const doc = useDocById(dId);
        // docId 기반 링크 (기존 방식)
        const targetLink = useBaseUrl(doc?.permalink || docId);
        return (
            <Link to={targetLink}>
                {doc?.title || docId}
            </Link>
        );
    }
    
}