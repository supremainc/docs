import React from 'react';
import clsx from 'clsx';
import SNS from '@site/src/components/SNS';
import DropdownMenu from '@site/src/components/FamilySite';
export default function FooterLayout({style, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        {(logo) && (
          <div className="footer__bottom text--left">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
          </div>
        )}
        <div className='footer__bottom sns--right'>
          <ul className='sns__list'>
            <SNS />
          </ul>
          <DropdownMenu />
        </div>
      </div>
      {(copyright) && (
        <div className="container text--left">
          {copyright}
        </div>
      )}
    </footer>
  );
}
