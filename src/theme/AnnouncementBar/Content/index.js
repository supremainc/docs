import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
export default function AnnouncementBarContent(props) {
  const {announcementBar} = useThemeConfig();
  const location = useLocation();
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const currentPath = location.pathname.replace('/docs/', '');
  const {content} = announcementBar;
  const currentURL = 'https://docs.supremainc.com';
  return (
    <div
      {...props}
      className={clsx(styles.content, props.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: content.replace(`${currentURL}`, `${currentURL}/${currentPath}`)}}
    />
  );
}
