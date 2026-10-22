import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {AskAiPanelHost} from '@site/src/components/AskAi';

// Root는 페이지를 이동해도 다시 그려지지 않으므로, 채팅 패널(대화 내용)을 여기서 유지한다.
export default function Root({children}) {
  return (
    <>
      {children}
      <BrowserOnly>{() => <AskAiPanelHost />}</BrowserOnly>
    </>
  );
}
