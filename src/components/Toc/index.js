import React from 'react';
import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const SidebarItem = ({ item }) => {
  if (!item || typeof item !== 'object') {
    // console.error("SidebarItem received an undefined or invalid item:", item);
    return null;
  }

  if (item.type === 'category') {
    return (
      <li>
        {item.href ? <Link to={item.href} className={styles.tocList}>{item.label}</Link> : <span>{item.label}</span>}
        {Array.isArray(item.items) && item.items.length > 0 && (
          <ul>
            {item.items.map((subItem, index) => (
              <SidebarItem key={index} item={subItem} />
            ))}
          </ul>
        )}
      </li>
    );
  } else if (item.type === 'link') {
    return (
      <li>
        {item.href ? <Link to={item.href} className={styles.tocList}>{item.label}</Link> : <span>{item.label}</span>}
      </li>
    );
  }

  // console.warn("Unhandled sidebar item type:", item);
  return null;
};

const DocsSidebar = () => {
  const sidebar = useDocsSidebar();

  // console.log("Sidebar data:", sidebar); // 디버깅용

  if (!sidebar || !Array.isArray(sidebar.items)) {
    console.error("useDocsSidebar() returned undefined or invalid data:", sidebar);
    return null;
  }
  console.log(sidebar.items[0].items);
  return (
    <section id='toc' className={styles.toc}>
      <ul>
        {sidebar.items[0].items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default DocsSidebar;