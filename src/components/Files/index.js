import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import OpenFolderIcon from './openFolderIcon';
import CloseFolderIcon from './closeFolderIcon';
import FileIcon from './fileIcon';
import styles from './styles.module.css';

export function Folder({ children, name, type, open = true }) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('print');

    const handlePrintChange = (event) => {
      if (event.matches) {
        setIsOpen(true); 
      }
    };

    mediaQueryList.addListener(handlePrintChange);

    return () => {
      mediaQueryList.removeListener(handlePrintChange);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.filetree}>
      <button className={styles.top} onClick={handleToggle}>
        <span className={styles.type}>
          {isOpen ? <OpenFolderIcon /> : <CloseFolderIcon />}
        </span>
        {name}
      </button>
      {isOpen && (
        <ul className={styles.fileitem} type={type}>
          {children}
        </ul>
      )}
    </div>
  );
}

export function File({ children, name, type }) {
  const renderIcon = () => {
    if (type === 'file') {
      return <FileIcon />;
    } else if (type === 'folder') {
      return <OpenFolderIcon />;
    }
    return null;
  };
  const hasChildFiletreeItems = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === FiletreeItem
  );

  return (
    <li className={styles.fileitem} type={type}>
      <span className={styles.name}>
        <div className={styles.ico}>
          {renderIcon()}
        </div>
        {name}
      </span>
      {type === 'folder' && hasChildFiletreeItems ? (
        <ul>
          {React.Children.map(children, (child, index) => (
            React.isValidElement(child) && child.type === FiletreeItem ? (
              <>{child}</>
            ) : null
          ))}
        </ul>
      ) : (
        <span className={styles.desc}>{children}</span>
      )}
    </li>
  );
}