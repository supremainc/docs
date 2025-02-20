import React, { useState } from 'react';
import styles from './styles.module.css';

const PrintPDFButton = () => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const curLocation = window.location.href;
  const target = `https://forms.office.com/Pages/ResponsePage.aspx?id=_bYDU8LVnkqxz7A7AWK9TZ3QlIh-_zNBvEgx2mDsll1UQjNOVDhQNEFHUjMyTUw4NUZWWktMTUwwTi4u&r41f093b8508c4bf1996887fab4eb1ad0=${curLocation}`

  const handleButtonClick = () => {
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

    // 상태 업데이트
    setDetailsOpen(true);
  };
  const popupWidth = 600;
  const popupHeight = 800;
  const browserWidth = window.innerWidth;
  const browserHeight = window.innerHeight;
  const left = (browserWidth - popupWidth) / 2 + window.screenX;
  const top = (browserHeight - popupHeight) / 2 + window.screenY;
  const popupOptions = `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes,scrollbars=yes`;

  const gotoFeedback = () => {
    window.open(target, '_blank', popupOptions);
  }

  return (
    <div className={styles.btnprint}>
        <button onClick={handleButtonClick}>
          PDF
        </button>

        <button onClick={gotoFeedback} className={styles.feedback__button}>
          Feedback
        </button>
    </div>
  );
};

export default PrintPDFButton;