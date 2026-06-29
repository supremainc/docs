import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {translate} from '@docusaurus/Translate';
import FeedbackWidget from '@site/src/components/Feedback';
import IcoDown from '@site/static/img/menus/ico-down-arrow.svg';
import DocPrint from './dochub-print.svg';
import DocHubLink from './dochub-down.svg';

const DocuementButton = () => {
  const [isClient, setIsClient] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isClient]);

  const handlePrint = () => {
    if (!isClient) return;
    setIsDropdownOpen(false);
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach((detailsElement) => {
      detailsElement.setAttribute('open', true);
      const childDivs = detailsElement.querySelectorAll('div');
      childDivs.forEach((div) => {
        div.style.display = 'block';
        div.style.overflow = 'visible';
        div.style.height = 'auto';
      });
    });
    window.print();
  };

  const handleDownload = () => {
    if (!isClient) return;
    setIsDropdownOpen(false);
    window.location.href = '/dochub';
  };

  const curLocation = isClient ? window.location.href : '';
  const destURL = encodeURIComponent(curLocation);

  const popupWidth = 600;
  const popupHeight = 800;
  const browserWidth = isClient ? window.innerWidth : 0;
  const browserHeight = isClient ? window.innerHeight : 0;
  const left = isClient ? (browserWidth - popupWidth) / 2 + window.screenX : 0;
  const top = isClient ? (browserHeight - popupHeight) / 2 + window.screenY : 0;

  return (
    <div className={styles.btnprint}>
      <div className={styles.pdfDropdown} ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          disabled={!isClient}
          className={styles.printbtn}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          <IcoDown /> PDF
        </button>
        {isDropdownOpen && (
          <ul className={styles.dropdownMenu} role="menu">
            <li role="menuitem">
              <button onClick={handlePrint} className={styles.dropdownItem}>
                <DocPrint width='18' height='18' /> {translate({ message: 'component.DocbreadcrumOption.print' })}
              </button>
            </li>
            <li role="menuitem">
              <button onClick={handleDownload} className={styles.dropdownItem}>
                <DocHubLink width='18' height='18' /> {translate({ message: 'component.DocbreadcrumOption.download' })}
              </button>
            </li>
          </ul>
        )}
      </div>

      <FeedbackWidget
        googleFormId="1FAIpQLSc80m8XWDnKO3XJ9ZZ_hJ9iZVcYocu6XjdsGgOwC1vvh_IuxA"
        feedbackTypeEntryId="entry.1129679087"
        pageUrlEntryId="entry.23458126"
        detailEntryId="entry.1070297166"
      />
    </div>
  );
};

export default DocuementButton;
