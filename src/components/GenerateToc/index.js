import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import TOCItems from '@theme/TOCItems';
import TOCCollapsible from '@theme/TOCCollapsible';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

export default function GenerateTOC({ className, device, ...props }) {
  const [tocItems, setTocItems] = useState([]);
  const {frontMatter} = useDoc();

  useEffect(() => {
    // 페이지가 렌더링된 후에 TOC를 생성합니다.
    const headers = document.querySelectorAll('h2:not(.padding--lg h2, .margin-bottom--lg h2), h3:not(.padding--lg h3, .margin-bottom--lg h2), h4:not(.padding--lg h4, .margin-bottom--lg h2)');
    const collectedToc = Array.from(headers).map(header => ({
      value: header.innerText,
      id: header.id,
      level: parseInt(header.tagName[1], 10),
    }));

    // TOC 데이터 수집
    setTocItems(collectedToc);
  }, []);

  const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
  const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

  if (device === 'desktop') {
    return (
      <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
        <TOCItems
          toc={tocItems}
          linkClassName={LINK_CLASS_NAME}
          linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
          minHeadingLevel={frontMatter.toc_min_heading_level}
          maxHeadingLevel={frontMatter.toc_max_heading_level}
          {...props}
        />
      </div>
    );
  } else if (device === 'mobile') {
    return (
      <TOCCollapsible
        toc={tocItems}
        minHeadingLevel={frontMatter.toc_min_heading_level}
        maxHeadingLevel={frontMatter.toc_max_heading_level}
        className={clsx(ThemeClassNames.docs.docTocMobile, styles.tocMobile)}
      />
    );
  }
}