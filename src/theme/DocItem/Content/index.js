import React, { useEffect } from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import Admonition from '@theme/Admonition';
import { useLocation } from '@docusaurus/router';

/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}
export default function DocItemContent({children}) {
  const { frontMatter } = useDoc();
  const syntheticTitle = useSyntheticTitle();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const decodedTargetId = decodeURI(targetId);
      const targetElement = document.getElementById(decodedTargetId);

      if (targetElement) {
        const offset = 160; // 원하는 offset 값 (예: 네비게이션 높이)
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [location.hash]);

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      {frontMatter.isTranslationMissing && (
        <Admonition type="note">
          <b>Not translated</b><br/>
          This page is currently being translated. We will complete the translation as soon as possible.
        </Admonition>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
