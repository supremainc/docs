import React, { useState } from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {useAnchorTargetClassName} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import {useLocation} from '@docusaurus/router';
import './styles.module.css';
export default function Heading({as: As, id, ...props}) {
  const [copied, setCopied] = useState(false);
  const brokenLinks = useBrokenLinks();
  const anchorTargetClassName = useAnchorTargetClassName(id);
  const location = useLocation();
  // H1 headings do not need an id because they don't appear in the TOC.
  if (As === 'h1' || !id) {
    return <As {...props} id={undefined} />;
  }
  brokenLinks.collectAnchor(id);
  const anchorTitle = translate(
    {
      id: 'theme.common.headingLinkTitle',
      message: 'Direct link to {heading}',
      description: 'Title for link to heading',
    },
    {
      heading: typeof props.children === 'string' ? props.children : id,
    },
  );
  const handleCopy = (e) => {
    const currentUrl = `${window.location.origin}${location.pathname}${location.search}#${id}`;
    try {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  return (
    <As
      {...props}
      className={clsx('anchor', anchorTargetClassName, props.className)}
      id={id}>
      {props.children}
      <Link
        className="hash-link"
        to={`#${id}`}
        aria-label={anchorTitle}
        title={anchorTitle}
        translate="no"
        onClick={handleCopy}>
        &#8203;
      </Link>
      {copied ? (
        <div className="hash-link-copied">
          Link copied!
        </div>
      ) : null}
    </As>
  );
}
