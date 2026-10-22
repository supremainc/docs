import React, {Suspense, lazy, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {setAskAiOpen, useAskAiOpen} from './store';
import {SparklesIcon} from 'lucide-react';
import styles from './navbar.module.css';

// assistant-ui 번들은 사용자가 처음 패널을 열 때만 내려받는다.
const ChatPanel = lazy(() => import('./ChatPanel'));

const label = () => translate({id: 'askAi.button', message: 'Ask AI'});

/** navbar의 `custom-askAi` 항목. 데스크톱 navbar와 모바일 사이드바에 각각 렌더링된다. */
export default function AskAiNavbarItem({mobile}) {
  return mobile ? <MobileItem /> : <DesktopItem />;
}

function DesktopItem() {
  const open = useAskAiOpen();
  return (
    <>
      <button
        type="button"
        className={clsx(styles.navButton, open && styles.navButtonActive)}
        onClick={() => setAskAiOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="ask-ai-panel">
        <SparklesIcon aria-hidden />
        <span>{label()}</span>
      </button>
    </>
  );
}

function MobileItem() {
  const sidebar = useNavbarMobileSidebar();
  return (
    <li className="menu__list-item">
      <button
        type="button"
        className={clsx('menu__link', styles.mobileButton)}
        onClick={() => {
          sidebar.toggle();
          setAskAiOpen(true);
        }}>
        <SparklesIcon aria-hidden />
        <span>{label()}</span>
      </button>
    </li>
  );
}

/**
 * 채팅 패널. 페이지를 이동해도 대화와 열림 상태가 유지되도록 navbar가 아닌
 * src/theme/Root.js(페이지 이동 시 다시 그려지지 않는 최상위 컴포넌트)에서 한 번만 렌더링한다.
 */
export function AskAiPanelHost() {
  const open = useAskAiOpen();
  // 한 번 연 뒤에는 닫아도 언마운트하지 않아, 다시 열었을 때 대화가 남아 있게 한다.
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (open) setLoaded(true);
    // Docusaurus가 페이지 이동 때마다 <html>의 class를 다시 쓰므로, 클래스 대신 data 속성을 쓴다.
    document.documentElement.toggleAttribute('data-ask-ai-open', open);
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setAskAiOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  if (!loaded) return null;
  return createPortal(
    <div id="ask-ai-panel" className={styles.panelHost} hidden={!open}>
      <Suspense fallback={null}>
        <ChatPanel onClose={() => setAskAiOpen(false)} />
      </Suspense>
    </div>,
    document.body,
  );
}
