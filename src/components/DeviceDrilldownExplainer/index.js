import React, { useState } from 'react';
import styles from './styles.module.css';

const ICONS = {
  settings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 13a7.97 7.97 0 0 0 0-2l2.02-1.56-2-3.46-2.38.96a8.07 8.07 0 0 0-1.73-1L14.9 3h-4l-.4 2.94a8.07 8.07 0 0 0-1.73 1l-2.38-.96-2 3.46L6.4 11a7.97 7.97 0 0 0 0 2l-2.02 1.56 2 3.46 2.38-.96c.53.43 1.11.77 1.73 1l.4 2.94h4l.4-2.94c.62-.23 1.2-.57 1.73-1l2.38.96 2-3.46L19.4 13z" />
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 8.5a15.5 15.5 0 0 1 20 0" />
      <path d="M5.5 12a10.5 10.5 0 0 1 13 0" />
      <path d="M9 15.5a5.5 5.5 0 0 1 6 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  cable: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 4v3a4 4 0 0 0 4 4" />
      <path d="M20 4v3a4 4 0 0 1-4 4" />
      <path d="M8 11v3a4 4 0 0 0 4 4" />
      <path d="M8 11h8" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <circle cx="7" cy="7" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.5-3.6 4.5-5.5 7.5-5.5s6 1.9 7.5 5.5" />
    </svg>
  ),
  door: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <circle cx="14.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
    </svg>
  ),
};

function Icon({ name }) {
  return <span className={styles.icon}>{ICONS[name] || ICONS.default}</span>;
}

function ChevronRight() {
  return (
    <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

export default function DeviceDrilldownExplainer({ screenTitle, items }) {
  const [stack, setStack] = useState([{ title: screenTitle, items }]);
  const current = stack[stack.length - 1];

  const openItem = (item) => {
    if (item.children && item.children.length > 0) {
      setStack((prev) => [...prev, { title: item.title, items: item.children }]);
    } else {
      setStack((prev) => [...prev, { title: item.title, body: item.body, isLeaf: true }]);
    }
  };

  const goBack = () => setStack((prev) => prev.slice(0, -1));

  return (
    <div className={styles.device}>
      <div className={styles.header}>
        {stack.length > 1 ? (
          <button className={styles.backBtn} onClick={goBack} aria-label="뒤로가기">
            <ChevronLeft />
          </button>
        ) : (
          <span className={styles.backBtnPlaceholder} />
        )}
        <span className={styles.headerTitle}>{current.title}</span>
        <span className={styles.backBtnPlaceholder} />
      </div>

      <div className={styles.body}>
        {current.isLeaf ? (
          <p className={styles.bodyText}>{current.body}</p>
        ) : (
          <ul className={styles.list}>
            {current.items.map((item, index) => (
              <li key={index} className={styles.listItem} onClick={() => openItem(item)}>
                <Icon name={item.icon} />
                <span className={styles.listItemTitle}>{item.title}</span>
                {(item.children || item.body) && <ChevronRight />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
