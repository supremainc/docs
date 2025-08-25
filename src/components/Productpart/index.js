import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';

export function Productpart({ src, maxHeight, maxWidth, children }) {
  return (
    <div className={styles.overflowX}>
      <div className={styles.product_parts}>
        <img src={useBaseUrl(src)} className='none' style={{maxHeight: maxHeight, maxWidth: maxWidth}} />
        { children }
      </div>
    </div>
  )
}

export function Callout({ children, width, position}) {
  return (
    <>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { width, position })
          : child
      )}
    </>
  )
}

export function Item({children, width, position, top}) {
  let aligndir;
  if (position === 'left') aligndir = 'right';
  if (position === 'right') aligndir = 'left';

  return (
    <div 
      className={clsx(styles.absolute, styles.desc)}
      style={{
        width: width, 
        top: top, 
        ...(position === 'left' ? {left: 0} : {right: 0}), 
        textAlign: aligndir
      }}
    >
      {children}
    </div>

  )
}