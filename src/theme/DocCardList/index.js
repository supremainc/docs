import React from 'react';
import clsx from 'clsx';
import {
  useCurrentSidebarSiblings,
  filterDocCardListItems,
} from '@docusaurus/plugin-content-docs/client';
import DocCard from '@theme/DocCard';
import styles from './styles.module.css';
function DocCardListForCurrentSidebarCategory({className, prefix}) {
  const items = useCurrentSidebarSiblings();
  return <DocCardList items={items} className={className} prefix={prefix} />;
}
function DocCardListItem({item, prefix}) {
  return (
    <article className={clsx(styles.docCardListItem, 'col col--6')}>
      <DocCard item={item} prefix={prefix} />
    </article>
  );
}
export default function DocCardList(props) {
  const {items, className, prefix} = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section className={clsx('row', className)}>
      {filteredItems.map((item, index) => (
        <DocCardListItem key={index} item={item} prefix={prefix} />
      ))}
    </section>
  );
}
