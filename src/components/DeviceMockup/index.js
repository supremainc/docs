import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Dashboard from './ico-dashboard.svg';
import User from './ico-user.svg';
import Auth from './ico-auth.svg';
import Settings from './ico-settings.svg';
import Exit from './ico-exit.svg';
import AddUser from './func-add-user.svg';
import Regulatory from './ico-regulatory.svg';

const MockupContext = createContext(null);

function pathKey(pathNames) {
  return pathNames.join(' > ');
}

// 현재 활성화된 화면(탭 선택을 따라 내려간 가장 깊은 화면)의 header 배치 항목을 찾는다.
// ScreenBody의 탭 활성화 로직과 동일한 방식으로 계산해야 한다.
function collectHeaderItems(node, path, values) {
  const children = node.children || [];
  const bottomTabs = children.filter((c) => c.position === 'bottom' && (c.type === 'tab' || c.type === 'list'));
  const topTabs = children.filter((c) => c.position === 'top' && c.type === 'tab');
  const bottomKey = pathKey([...path, node.name, '__bottomTab']);
  const topKey = pathKey([...path, node.name, '__topTab']);
  const activeBottomNode = bottomTabs[values[bottomKey] ?? 0];
  const activeTopNode = topTabs[values[topKey] ?? 0];
  const fullPath = [...path, node.name];

  const deeper = activeBottomNode
    ? collectHeaderItems(activeBottomNode, fullPath, values)
    : activeTopNode
    ? collectHeaderItems(activeTopNode, fullPath, values)
    : null;
  if (deeper && deeper.items.length > 0) return deeper;

  return { items: children.filter((c) => c.area === 'header'), path: fullPath };
}

function ChevronRight() {
  return (
    <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.42431 0.213965C6.80368 -0.086549 7.397 -0.0683624 7.74951 0.254981C8.10186 0.578686 8.07996 1.08516 7.70068 1.38584L3.13915 5.0001H12.0005C12.5527 5.00012 13.0005 5.44784 13.0005 6.0001C13.0005 6.55238 12.5528 7.00008 12.0005 7.0001H3.13915L7.70068 10.6144C8.07996 10.915 8.10186 11.4215 7.74951 11.7452C7.397 12.0686 6.80369 12.0867 6.42431 11.7862L0.599116 7.17295C-0.199702 6.53994 -0.199709 5.46025 0.599116 4.82725L6.42431 0.213965Z" fill="white"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 12.5l5 5L19 7" />
    </svg>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      className={`${styles.toggle} ${checked ? styles.toggleOn : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onChange(!checked);
      }}
      aria-pressed={checked}
    >
      <span className={styles.toggleKnob} />
    </button>
  );
}

function defaultOptionName(node) {
  const def = (node.children || []).find((c) => c.default);
  return def ? def.name : node.children && node.children[0] ? node.children[0].name : '';
}

// 하나의 목록 행(row)을 타입에 따라 렌더링한다. category/이미지 화면 전환은 상위에서 처리한다.
function Row({ node, path }) {
  const ctx = useContext(MockupContext);
  const key = pathKey([...path, node.name]);
  const [localValue, setLocalValue] = useState(() => ctx.values[key]);

  const select = () => ctx.select(node, path);

  if (node.type === 'category') {
    return (
      <div className={clsx(styles.section, node.className)}>
        <div className={styles.sectionTitle}>{node.name}</div>
        {(node.children || []).map((child, i) => (
          <Row key={i} node={child} path={[...path, node.name]} />
        ))}
      </div>
    );
  }

  if (node.type === 'toggle') {
    const checked = localValue !== undefined ? localValue : !!node.default;
    return (
      <div className={clsx(styles.row, node.className)} onClick={select}>
        <span className={styles.rowTitle}>{node.name}</span>
        <Toggle
          checked={checked}
          onChange={(v) => {
            setLocalValue(v);
            ctx.setValue(key, v);
          }}
        />
      </div>
    );
  }

  if (node.type === 'select') {
    const current = ctx.values[key] !== undefined ? ctx.values[key] : defaultOptionName(node);
    return (
      <div
        className={clsx(styles.row, node.className)}
        onClick={() => {
          select();
          ctx.openSelectPopup(node, path);
        }}
      >
        <span className={styles.rowTitle}>{node.name}</span>
        <span className={styles.rowValue}>{current}</span>
        <ChevronRight />
      </div>
    );
  }

  if (node.type === 'slide') {
    const isRange = !!node.range;
    const def = isRange ? '' : node.default;
    const numeric = typeof def === 'number' ? def : parseFloat(def) || 0;
    const current = ctx.values[key] !== undefined ? ctx.values[key] : numeric;
    return (
      <div
        className={clsx(styles.row, node.className)}
        onClick={() => {
          select();
          ctx.openSlidePopup(node, path);
        }}
      >
        <span className={styles.rowTitle}>{node.name}</span>
        <span className={styles.rowValue}>{isRange ? `${node.default.min} ~ ${node.default.max}` : current}</span>
      </div>
    );
  }

  if (node.type === 'string') {
    return (
      <div className={clsx(styles.row, node.className)} onClick={select}>
        <span className={styles.rowTitle}>{node.name}</span>
        <span className={styles.rowValue}>{node.value}</span>
      </div>
    );
  }

  if (node.type === 'input') {
    const current = localValue !== undefined ? localValue : node.value;
    return (
      <div className={clsx(styles.row, node.className)} onClick={select}>
        <span className={styles.rowTitle}>{node.name}</span>
        <input
          className={styles.textInput}
          value={current}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => {
            setLocalValue(e.target.value);
            ctx.setValue(key, e.target.value);
          }}
        />
      </div>
    );
  }

  if (node.type === 'item') {
    return (
      <div className={clsx(styles.row, node.className)} onClick={select}>
        <span className={styles.rowTitle}>{node.name}</span>
      </div>
    );
  }

  if (node.type === 'popup') {
    return (
      <div
        className={clsx(styles.row, node.className)}
        onClick={() => {
          select();
          ctx.openPopup(node);
        }}
      >
        <span className={styles.rowTitle}>{node.name}</span>
      </div>
    );
  }

  // parent / list / title / function / icon(좌표 없음) / tab 등: 하위 화면으로 드릴다운
  const hasChildren = node.children && node.children.length > 0;
  const hasDestFunc = node.type === 'function' && !!node.destFunc;
  return (
    <div
      className={clsx(styles.row, node.className)}
      onClick={() => {
        select();
        if (node.target === 'home') {
          ctx.resetToRoot();
        } else if (hasDestFunc) {
          ctx.openFunction(node, path);
        } else if (hasChildren) {
          ctx.push(node, path);
        }
      }}
    >
      {node.id === 'addUserWizard' && <AddUser />}
      <span className={styles.rowTitle}>{node.name}</span>
      {(hasChildren || hasDestFunc) && <ChevronRight />}
    </div>
  );
}

function Hotspot({ node, path }) {
  const ctx = useContext(MockupContext);
  const { x, y, width, height } = node.coords;
  const style = {
    left: `${(x / 800) * 100}%`,
    top: `${(y / 1280) * 100}%`,
    width: `${(width / 800) * 100}%`,
    height: `${(height / 1280) * 100}%`,
  };
  const hasChildren = node.children && node.children.length > 0;
  const hasDestFunc = node.type === 'function' && !!node.destFunc;
  return (
    <button
      type="button"
      className={clsx(styles.hotspot, node.className)}
      style={style}
      onClick={() => {
        ctx.select(node, path);
        if (node.target === 'home') {
          ctx.resetToRoot();
        } else if (hasDestFunc) {
          ctx.openFunction(node, path);
        } else if (hasChildren) {
          ctx.push(node, path);
        }
      }}
      aria-label={node.name}
    >
      {node.icoContent && <img src={node.icoContent} alt="" className={styles.tzindex} />}
    </button>
  );
}

const HOME_ICONS = {
  grid: (
    <svg fill="none" viewBox="0 0 20 20">
      <path d="M3.68241 0.5H1.33489C0.873794 0.5 0.5 0.873794 0.5 1.33489V3.68241C0.5 4.14351 0.873794 4.51731 1.33489 4.51731H3.68241C4.14351 4.51731 4.51731 4.14351 4.51731 3.68241V1.33489C4.51731 0.873794 4.14351 0.5 3.68241 0.5Z" stroke="currentColor" stroke-miterlimit="10"/>
      <path d="M9.18286 0.5H6.83534C6.37424 0.5 6.00045 0.873794 6.00045 1.33489V3.68241C6.00045 4.14351 6.37424 4.51731 6.83534 4.51731H9.18286C9.64396 4.51731 10.0178 4.14351 10.0178 3.68241V1.33489C10.0178 0.873794 9.64396 0.5 9.18286 0.5Z" stroke="currentColor" stroke-miterlimit="10"/>
      <path d="M3.68241 5.97107H1.33489C0.873794 5.97107 0.5 6.34486 0.5 6.80596V9.15348C0.5 9.61458 0.873794 9.98838 1.33489 9.98838H3.68241C4.14351 9.98838 4.51731 9.61458 4.51731 9.15348V6.80596C4.51731 6.34486 4.14351 5.97107 3.68241 5.97107Z" stroke="currentColor" stroke-miterlimit="10"/>
      <path d="M9.18286 5.97107H6.83534C6.37424 5.97107 6.00045 6.34486 6.00045 6.80596V9.15348C6.00045 9.61458 6.37424 9.98838 6.83534 9.98838H9.18286C9.64396 9.98838 10.0178 9.61458 10.0178 9.15348V6.80596C10.0178 6.34486 9.64396 5.97107 9.18286 5.97107Z" stroke="currentColor" stroke-miterlimit="10"/>
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.5-3.6 4.5-5.5 7.5-5.5s6 1.9 7.5 5.5" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  ),
  door: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <circle cx="14.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
};

// 홈(잠금) 화면 전용 레이아웃. 시계/날짜는 정적 텍스트로 고정 표시한다.
function HomeScreen({ node, path }) {
  const ctx = useContext(MockupContext);
  const children = node.children || [];
  const find = (name) => children.find((c) => c.name === name);
  const allMenu = find('모든 메뉴');
  const userId = find('사용자 ID');
  const tna = find('근태 코드');
  const door = find('출입문');

  const handleClick = (child) => {
    if (!child) return;
    ctx.select(child, path);
    if (child.target === 'home') ctx.resetToRoot();
    else if (child.children && child.children.length > 0) ctx.push(child, [...path, node.name]);
  };

  // "모든 메뉴" 진입 시 이전에 선택했던 탭이 남아있을 수 있으므로, 항상 대시보드 탭이 보이도록 초기화한다.
  const goToAllMenu = () => {
    if (!allMenu) return;
    ctx.select(allMenu, path);
    const bottomTabs = (allMenu.children || []).filter(
      (c) => c.position === 'bottom' && (c.type === 'tab' || c.type === 'list')
    );
    const dashboardIndex = bottomTabs.findIndex((c) => c.id === 'dashboard');
    const fullPath = [...path, node.name];
    ctx.setValue(pathKey([...fullPath, allMenu.name, '__bottomTab']), dashboardIndex >= 0 ? dashboardIndex : 0);
    if (allMenu.children && allMenu.children.length > 0) ctx.push(allMenu, fullPath);
  };

  return (
    <div className={styles.homeScreen}>
      <div className={styles.homeTopBar}>
        {allMenu && (
          <button className={styles.homeIconBtn} onClick={goToAllMenu} aria-label={allMenu.name}>
            {HOME_ICONS.grid}
          </button>
        )}
        <span />
      </div>

      <div className={styles.homeCenter}>
        <div className={styles.homeTime}>
          <span className={styles.homeTimeAmpm}>오전</span> 01:03
        </div>
        <div className={styles.homeDate}>수요일, 03/25</div>
      </div>

      <div className={styles.homeBottomRow}>
        {userId && (
          <button className={styles.homeBottomItem} onClick={() => handleClick(userId)}>
            <span className={`${styles.homeBottomCircle} ${styles.homeCircleBlue}`}>{HOME_ICONS.user}</span>
            <span className={styles.homeBottomLabel}>{userId.name}</span>
          </button>
        )}
        {tna && (
          <button className={styles.homeBottomItem} onClick={() => handleClick(tna)}>
            <span className={`${styles.homeBottomCircle} ${styles.homeCirclePurple}`}>{HOME_ICONS.clock}</span>
            <span className={styles.homeBottomLabel}>{tna.name}</span>
          </button>
        )}
        {door && (
          <button className={styles.homeBottomItem} onClick={() => handleClick(door)}>
            <span className={`${styles.homeBottomCircle} ${styles.homeCircleOrange}`}>{HOME_ICONS.door}</span>
            <span className={styles.homeBottomLabel}>{door.name}</span>
          </button>
        )}
      </div>
    </div>
  );
}

function TabBar({ tabs, active, onChange, kind }) {
  return (
    <div className={kind === 'bottom' ? styles.bottomTabBar : styles.topTabBar}>
      {tabs.map((t, i) => (
        <button
          key={i}
          type="button"
          className={`${kind === 'bottom' ? styles.bottomTabItem : styles.topTabItem} ${i === active ? styles.tabActive : ''}`}
          onClick={() => onChange(i)}
        >
          {t.id === 'dashboard' &&  <Dashboard />}
          {t.id === 'users' &&  <User />}
          {t.id === 'auth' &&  <Auth />}
          {t.id === 'settings' &&  <Settings />}
          {t.id === 'exit' &&  <Exit />}
          {t.name}
        </button>
      ))}
    </div>
  );
}

// 현재 화면(node)의 내용을 렌더링한다. children을 bottom-tab / top-tab / 일반 항목으로 분류해서 처리한다.
function ScreenBody({ node, path, onTitleChange }) {
  const ctx = useContext(MockupContext);
  const children = node.children || [];
  const bottomTabs = children.filter((c) => c.position === 'bottom' && (c.type === 'tab' || c.type === 'list'));
  const topTabs = children.filter((c) => c.position === 'top' && c.type === 'tab');
  const headerItems = children.filter((c) => c.area === 'header');
  const rest = children.filter((c) => !bottomTabs.includes(c) && !topTabs.includes(c) && !headerItems.includes(c));

  // 탭 선택 상태는 스택 push/pop으로 이 화면이 다시 마운트되어도 유지되어야 하므로
  // 컴포넌트 로컬 state가 아니라 공용 values 저장소(경로 기반 key)에 둔다.
  const bottomKey = pathKey([...path, node.name, '__bottomTab']);
  const topKey = pathKey([...path, node.name, '__topTab']);
  const activeBottom = ctx.values[bottomKey] ?? 0;
  const activeTop = ctx.values[topKey] ?? 0;
  const setActiveBottom = (i) => ctx.setValue(bottomKey, i);
  const setActiveTop = (i) => ctx.setValue(topKey, i);

  const activeBottomNode = bottomTabs[activeBottom];
  const activeTopNode = topTabs[activeTop];

  useEffect(() => {
    if (activeBottomNode) onTitleChange && onTitleChange(activeBottomNode.name);
    else if (activeTopNode) onTitleChange && onTitleChange(activeTopNode.name);
    else onTitleChange && onTitleChange(node.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBottom, activeTop, node]);

  if (node.type === 'home') {
    return <HomeScreen node={node} path={path} />;
  }

  if (node.type === 'image') {
    return (
      <div className={styles.imageScreen}>
        <img src={node.content} alt={node.name} className={styles.screenImage} />
      </div>
    );
  }

  const hasImage = node['content-type'] === 'image' && node.content;

  return (
    <div className={styles.screen}>
      {topTabs.length > 0 && (
        <TabBar
          kind="top"
          tabs={topTabs}
          active={activeTop}
          onChange={(i) => {
            const tab = topTabs[i];
            ctx.select(tab, [...path, node.name]);
            if (tab.target === 'home') ctx.resetToRoot();
            else setActiveTop(i);
          }}
        />
      )}

      {hasImage ? (
        <div className={styles.imageScreen}>
          <div className={styles.imageScrollArea}>
            <img src={node.content} alt={node.name} className={styles.screenImage} />
            {rest.some((c) => !(c.type === 'icon' && c.coords)) && (
              <div className={styles.imageOverlayList}>
                {rest
                  .filter((c) => !(c.type === 'icon' && c.coords))
                  .map((child, i) => (
                    <Row key={i} node={child} path={[...path, node.name]} />
                  ))}
              </div>
            )}
          </div>
          {rest.map((child, i) =>
            child.type === 'icon' && child.coords ? (
              <Hotspot key={i} node={child} path={[...path, node.name]} />
            ) : null
          )}
        </div>
      ) : (
        rest.length > 0 && (
          <div className={styles.list}>
            {rest.map((child, i) => (
              <Row key={i} node={child} path={[...path, node.name]} />
            ))}
          </div>
        )
      )}

      {activeTopNode && (
        <ScreenBody node={activeTopNode} path={[...path, node.name]} onTitleChange={onTitleChange} />
      )}

      {bottomTabs.length > 0 && (
        <>
          <div className={styles.bottomBody}>
            {activeBottomNode && (
              <ScreenBody node={activeBottomNode} path={[...path, node.name]} onTitleChange={onTitleChange} />
            )}
          </div>
          <TabBar
            kind="bottom"
            tabs={bottomTabs}
            active={activeBottom}
            onChange={(i) => {
              const tab = bottomTabs[i];
              ctx.select(tab, [...path, node.name]);
              if (tab.target === 'home') ctx.resetToRoot();
              else setActiveBottom(i);
            }}
          />
        </>
      )}
    </div>
  );
}

export default function DeviceMockup({ data }) {
  const root = data.menu || data;
  const [stack, setStack] = useState([{ node: root, path: [] }]);
  const [selected, setSelected] = useState({ node: root, path: [] });
  const [values, setValuesState] = useState({});
  const [popup, setPopup] = useState(null);
  const [slidePopup, setSlidePopup] = useState(null);
  const [selectPopup, setSelectPopup] = useState(null);
  const [title, setTitle] = useState(root.name);

  const current = stack[stack.length - 1];
  const headerContext = collectHeaderItems(current.node, current.path, values);

  const push = (node, path) => setStack((s) => [...s, { node, path }]);
  const pop = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s));
  const resetToRoot = () => setStack([{ node: root, path: [] }]);
  const select = (node, path) => setSelected({ node, path });
  const setValue = (key, value) => setValuesState((v) => ({ ...v, [key]: value }));
  const openPopup = (node) => setPopup(node);
  const openFunction = (node, path) => {
    const func = (data.functions || []).find((f) => f.id === node.destFunc);
    if (!func) return;
    push({ ...func, __isFunctionScreen: true }, path);
  };
  const openSlidePopup = (node, path) => setSlidePopup({ node, path });
  const openSelectPopup = (node, path) => setSelectPopup({ node, path });

  const ctxValue = {
    push,
    pop,
    resetToRoot,
    select,
    values,
    setValue,
    openPopup,
    openFunction,
    openSlidePopup,
    openSelectPopup,
  };

  let slideKey = null;
  let slideCurrent = 0;
  let slideIsRange = false;
  if (slidePopup) {
    slideIsRange = !!slidePopup.node.range;
    slideKey = pathKey([...slidePopup.path, slidePopup.node.name]);
    const def = slideIsRange ? 0 : slidePopup.node.default;
    const numeric = typeof def === 'number' ? def : parseFloat(def) || 0;
    slideCurrent = values[slideKey] !== undefined ? values[slideKey] : numeric;
  }

  let selectKey = null;
  let selectCurrent = null;
  if (selectPopup) {
    selectKey = pathKey([...selectPopup.path, selectPopup.node.name]);
    selectCurrent = values[selectKey] !== undefined ? values[selectKey] : defaultOptionName(selectPopup.node);
  }

  return (
    <MockupContext.Provider value={ctxValue}>
      <div className={styles.wrapper}>
        <div className={styles.device}>
          {current.node.type !== 'home' && (
            <div className={styles.header}>
              {stack.length > 2 ? (
                <button className={styles.backBtn} onClick={pop} aria-label="뒤로가기">
                  <ChevronLeft />
                </button>
              ) : null}
              <span className={styles.headerTitle}>{title}</span>
              {current.node.__isFunctionScreen ? (
                <button className={styles.backBtn} onClick={pop} aria-label="닫기">
                  <CloseIcon />
                </button>
              ) : headerContext.items.length > 0 ? (
                <div className={styles.headerActions}>
                  {headerContext.items.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      className={styles.headerIconBtn}
                      aria-label={item.name}
                      onClick={() => {
                        select(item, headerContext.path);
                        if (item.target === 'home') {
                          resetToRoot();
                        } else if (item.children && item.children.length > 0) {
                          push(item, headerContext.path);
                        }
                      }}
                    >
                      {item.id === 'regulatory' && <Regulatory />}
                    </button>
                  ))}
                </div>
              ) : (
                <span className={styles.backBtnPlaceholder} />
              )}
            </div>
          )}
          <div className={styles.body}>
            <ScreenBody node={current.node} path={current.path} onTitleChange={setTitle} />
          </div>

          {popup && (
            <div className={styles.popupOverlay} onClick={() => setPopup(null)}>
              <div className={styles.popupBox} onClick={(e) => e.stopPropagation()}>
                <div className={styles.popupTitle}>{popup.name}</div>
                <p className={styles.popupText}>{popup.description || '아직 작성된 설명이 없습니다.'}</p>
                <button className={styles.popupClose} onClick={() => setPopup(null)}>
                  닫기
                </button>
              </div>
            </div>
          )}

          {slidePopup && (
            <div className={styles.popupOverlay} onClick={() => setSlidePopup(null)}>
              <div className={styles.slidePopupBox} onClick={(e) => e.stopPropagation()}>
                <div className={styles.slidePopupHeader}>
                  <span className={styles.slidePopupTitle}>{slidePopup.node.name}</span>
                  <button className={styles.slidePopupClose} onClick={() => setSlidePopup(null)} aria-label="닫기">
                    <CloseIcon />
                  </button>
                </div>
                {slideIsRange ? (
                  <div className={styles.slidePopupValue}>
                    {`${slidePopup.node.default.min} ~ ${slidePopup.node.default.max}`}
                  </div>
                ) : (
                  <div className={styles.slidePopupSliderWrap}>
                    <div
                      className={styles.slidePopupValue}
                      style={{ left: `${Math.min(96, Math.max(4, slideCurrent))}%` }}
                    >
                      {slideCurrent}
                    </div>
                    <input
                      type="range"
                      className={styles.slidePopupSlider}
                      min="0"
                      max="100"
                      value={slideCurrent}
                      onChange={(e) => setValue(slideKey, Number(e.target.value))}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {selectPopup && (
            <div className={styles.popupOverlay} onClick={() => setSelectPopup(null)}>
              <div className={styles.selectPopupBox} onClick={(e) => e.stopPropagation()}>
                <div className={styles.selectPopupHeader}>
                  <span className={styles.selectPopupTitle}>{selectPopup.node.name}</span>
                  <button className={styles.selectPopupClose} onClick={() => setSelectPopup(null)} aria-label="닫기">
                    <CloseIcon />
                  </button>
                </div>
                <div className={styles.selectPopupList}>
                  {(selectPopup.node.children || []).map((opt, i) => {
                    const isActive = opt.name === selectCurrent;
                    return (
                      <div
                        key={i}
                        className={clsx(styles.selectPopupOption, isActive && styles.selectPopupOptionActive)}
                        onClick={() => {
                          select(opt, selectPopup.path);
                          setValue(selectKey, opt.name);
                          setSelectPopup(null);
                        }}
                      >
                        <span>{opt.name}</span>
                        {isActive && (
                          <span className={styles.selectPopupCheck}>
                            <CheckIcon />
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.descriptionPanel}>
          <div className={styles.descriptionTitle}>{selected.node.name}</div>
          <p className={styles.descriptionText}>
            {selected.node.description ? selected.node.description : '아직 작성된 설명이 없습니다.'}
          </p>
        </div>
      </div>
    </MockupContext.Provider>
  );
}
