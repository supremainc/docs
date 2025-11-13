import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import FeedbackWidget from '@site/src/components/Feedback';

const DocuementButton = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      setIsClient(true);
    }
  }, []);

  const handleButtonClick = () => {
    if (!isClient) return;
    // 모든 details 요소에 open 속성을 부여하고 하위에 있는 div 요소에 display: block 스타일을 적용
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

  const curLocation = isClient ? window.location.href : '';
  const destURL = encodeURIComponent(curLocation);
  const target = `https://forms.office.com/Pages/ResponsePage.aspx?id=_bYDU8LVnkqxz7A7AWK9TZ3QlIh-_zNBvEgx2mDsll1UQjNOVDhQNEFHUjMyTUw4NUZWWktMTUwwTi4u&r41f093b8508c4bf1996887fab4eb1ad0=${destURL}`;

  // 팝업 창의 크기와 위치 설정 
  const popupWidth = 600;
  const popupHeight = 800;
  const browserWidth = isClient ? window.innerWidth : 0;
  const browserHeight = isClient ? window.innerHeight : 0;
  const left = isClient ? (browserWidth - popupWidth) / 2 + window.screenX : 0;
  const top = isClient ? (browserHeight - popupHeight) / 2 + window.screenY : 0;
  const popupOptions = `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes,scrollbars=yes`;

  const gotoFeedback = () => {
    if (!isClient) return;
    window.open(target, '_blank', popupOptions);
  };

  return (
    <div className={styles.btnprint}>
      <button onClick={handleButtonClick} disabled={!isClient} className={styles.printbtn}>
        PDF
      </button>

      {/* <button onClick={gotoFeedback} className={styles.feedback__button} disabled={!isClient}>
        Feedback
      </button> */}

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
