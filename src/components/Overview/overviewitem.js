import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  useDocById,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import {usePluralForm} from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function useCategoryItemsPlural() {
  const {selectMessage} = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.docs.DocCard.categoryDescription.plurals',
        },
        {count},
      ),
    );
}

function MoreIcon() {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="css-l1p2hr" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></svg>
  )
}

function renderSubItems(items, parentLink) {
  return (
    <ul className={styles.ovSubitems}>
      {items.slice(0, 3).map((subItem) => { // 최대 3개 항목만 렌더링
        const subItemHref = findFirstSidebarItemLink(subItem);
        const isInternal = isInternalUrl(subItemHref);
        return (
          <li key={subItem.label} className={styles.ovSubitem}>
            <Link
              className={clsx(
                styles.overviewLink,
                isInternal && styles.overviewLinkInternal,
              )}
              to={subItemHref}>
              {subItem.label}
            </Link>
          </li>
        );
      })}
      <Link className={styles.ovMoreitems} to={parentLink}>
        <MoreIcon /> {useCategoryItemsPlural()(items.length)}
      </Link>
    </ul>
  );
}

function OverviewLink({item}) {
  const {siteConfig} = useDocusaurusContext();
  const href = findFirstSidebarItemLink(item);

  if (!href) {
    return null;
  }

  const docId = item.href?.replace(siteConfig.baseUrl, '') ?? item.docId;
  const doc = useDocById(docId);
  const docStyle = docId?.replace('platform/biostar_x/', '');
  return (
    <section className={styles.ovItem}>
      <article className={clsx('margin-bottom--lg')}>
        <Heading as='h2' className={styles.ovHeading}>
          <Link to={item.href}>
            <span className={clsx(styles.Heading, docStyle)}>{item.label}</span>
            {item.type === 'category' ? (
              <>
                <span className={styles.linkarrow}>→</span>
                <span className={styles.subItemslength}>
                  {useCategoryItemsPlural()(item.items.length)}
                </span>
              </>
            ) : (
              <span className={styles.linkarrow}>
                → {translate({
                    id: 'theme.docs.overview.viewContent',
                    message: "둘러보기"
                  })}
              </span>
            )}
          </Link>
        </Heading>
        
        {item.type === 'category' ? (
          <div className={styles.griddesc}>
            {doc?.description && (
                <p dangerouslySetInnerHTML={{__html: doc.description}} />
            )}
            {item.type === 'category' && (
              <>
                {renderSubItems(item.items, item.href)}
              </>
            )}
          </div>
        ) : (
          <div className={styles.desc}>
            {doc?.description && (
              <p dangerouslySetInnerHTML={{__html: doc.description.replace(/Release(\d\d)/g, 'Release $1')}} />
            )}
          </div>
        )}
      </article>
    </section>
  );
}

export default function OverviewItem({item}) {
  return <OverviewLink item={item} />;
}