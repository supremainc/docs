import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Heading from '@theme/DocCard/Heading';
import Description from '@theme/DocCard/Description';
import styles from './styles.module.css';
import {translate} from '@docusaurus/Translate';
function Container({className, href, children}) {
  return (
    <Link
      href={href}
      className={clsx(
        'card padding--lg',
        ThemeClassNames.docs.docCard.container,
        styles.cardContainer,
        className,
      )}>
      {children}
    </Link>
  );
}
export default function DocCardLayout({
  item,
  className,
  href,
  icon,
  title,
  description,
  prefix
}) {
  let prefixTitle;
  if (prefix) {
    prefixTitle = translate({id: prefix});
  }
  return (
    <Container href={href} className={className}>
      <Heading item={item} icon={icon} title={title} />
      {description && <Description item={item} description={description} prefix={prefixTitle} />}
    </Container>
  );
}
