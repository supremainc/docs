import React from 'react';
import clsx from 'clsx';
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from '@docusaurus/plugin-content-docs/client';
import OverviewItem from './overviewitem';
import styles from './styles.module.css';

function DocCardListForCurrentSidebarCategory(props) {
  const {className, all} = props;
  const category = useCurrentSidebarCategory();
  return <Overview items={category.items} className={className} all={all} />;
}

export default function Overview(props) {
  const {items, className, all} = props;
  let renderAll = false;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  if (all === true) {
    renderAll = true;
  }
  const filteredItems = filterDocCardListItems(items);
  // console.log(renderAll);
  return (
    <section>
      {filteredItems.map((item, index) => (
        <article key={index} className={styles.overviewItems}>
          <OverviewItem item={item} renderAll={renderAll} />
        </article>
      ))}
    </section>
  );
}