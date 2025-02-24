import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';
import clsx from 'clsx'; 
import koLocale from './ko.json';
import enLocale from './en.json';

const ReplacementLocaleText = ({sid, code, className }) => {
  const { i18n: {currentLocale} } = useDocusaurusContext();
  if (sid) {
    let locale;
    switch (currentLocale) {
      case "ko":
        locale = koLocale;
        break;
      case "en":
        locale = enLocale;
        break;
    }
    try {
      let localeText = locale[sid].replace('<br>', '');
      return <span className={clsx('cmd', className)}>{localeText}</span>;
  
    } catch (e) {
      console.error(`Error rendering locale text for SID: ${sid}`, e);
      return null;
    }
  } else if (code) {
    try {
      let localeText = translate({
        id: `${code}`
      });
      return <span className={clsx('cmd', className)}>{localeText}</span>;
  
    } catch (e) {
      console.error(`Error rendering locale text for code: ${code}`, e);
      return null;
    }
  }
};

export default ReplacementLocaleText;