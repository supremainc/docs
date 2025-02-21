import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx'; 
import koLocale from './ko.json';
import enLocale from './en.json';

const ReplacementLocaleText = ({sid, className }) => {
  const { i18n: {currentLocale} } = useDocusaurusContext();
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
    let localeText = locale[sid]
    return <span className={clsx('cmd', className)}>{localeText}</span>;

  } catch (e) {
    console.error(`Error rendering locale text for SID: ${sid}`, e);
    return null;
  }
};

export default ReplacementLocaleText;