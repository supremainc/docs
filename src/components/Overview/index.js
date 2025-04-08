import React from 'react';
import clsx from 'clsx';
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from '@docusaurus/plugin-content-docs/client';
import OverviewItem from './overviewitem';
import styles from './styles.module.css';

function DocCardListForCurrentSidebarCategory({className}) {
  const category = useCurrentSidebarCategory();
  return <Overview items={category.items} className={className} />;
}

export default function Overview(props) {
  const {items, className} = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section>
      {filteredItems.map((item, index) => (
        <article key={index} className={styles.overviewItems}>
          <OverviewItem item={item} />
        </article>
      ))}
    </section>
  );
}