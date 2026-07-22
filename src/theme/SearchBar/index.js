import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useHistory, useLocation} from '@docusaurus/router';
import {useSearchResultUrlProcessor} from '@docusaurus/theme-search-algolia/client';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  RefinementList,
  Configure,
  ClearRefinements,
  Stats,
  useSearchBox,
  useRelatedProducts,
} from 'react-instantsearch';
import {liteClient as algoliasearch} from 'algoliasearch/lite';
import { isWindows, isMacOs, isMobile } from 'react-device-detect';
import './styles.css';

function getPropertyByPath(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

// 구글 애널리틱스(GA4, gtag.js)로 검색 이벤트 전송
// gtag는 docusaurus.config.js의 @docusaurus/plugin-google-gtag 플러그인이 전역에 로드함
// (preview 환경 등 플러그인이 비활성화된 경우 window.gtag가 없을 수 있으므로 가드 필요)
function trackSearchEvent(eventName, params) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

// <mark> 태그가 HTML 엔티티 중간을 쪼개는 경우를 처리하면서 엔티티를 디코딩
// 예: <mark>T&amp;a</mark>mp;<mark>A</mark> → <mark>T&amp;A</mark>
function decodeHighlightHtml(str) {
  if (!str) return '';

  // 1. 문자 단위로 파싱하며 mark 여부 추적
  const chars = [];
  const marks = [];
  let inMark = false;
  for (const part of str.split(/(<\/?mark>)/)) {
    if (part === '<mark>') { inMark = true; continue; }
    if (part === '</mark>') { inMark = false; continue; }
    for (const ch of part) {
      chars.push(ch);
      marks.push(inMark);
    }
  }

  // 2. 엔티티 디코딩 반복 (중첩 인코딩 처리), mark 상태 유지
  const entityMap = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'" };
  let cur = { chars, marks };
  let changed = true;
  while (changed) {
    changed = false;
    const next = { chars: [], marks: [] };
    let i = 0;
    while (i < cur.chars.length) {
      if (cur.chars[i] === '&') {
        let j = i + 1;
        while (j < cur.chars.length && j <= i + 8 && cur.chars[j] !== ';') j++;
        if (j < cur.chars.length && cur.chars[j] === ';') {
          const name = cur.chars.slice(i + 1, j).join('');
          if (entityMap[name] !== undefined) {
            // 엔티티를 구성하는 문자 중 하나라도 mark면 결과도 mark
            next.chars.push(entityMap[name]);
            next.marks.push(cur.marks.slice(i, j + 1).some(Boolean));
            i = j + 1;
            changed = true;
            continue;
          }
        }
      }
      next.chars.push(cur.chars[i]);
      next.marks.push(cur.marks[i]);
      i++;
    }
    cur = next;
  }

  // 3. HTML 재조립: 디코딩된 특수문자 재이스케이프, mark 구간 복원
  const esc = (ch) => ch === '&' ? '&amp;' : ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : ch;
  let html = '';
  let inMarkHtml = false;
  for (let i = 0; i < cur.chars.length; i++) {
    if (cur.marks[i] && !inMarkHtml) { html += '<mark>'; inMarkHtml = true; }
    else if (!cur.marks[i] && inMarkHtml) { html += '</mark>'; inMarkHtml = false; }
    html += esc(cur.chars[i]);
  }
  if (inMarkHtml) html += '</mark>';
  return html;
}

function CustomHighlight({ attribute, hit }) {
  const highlightResult = getPropertyByPath(hit._highlightResult, attribute);
  const value = highlightResult?.value || getPropertyByPath(hit, attribute) || '';
  return <span dangerouslySetInnerHTML={{ __html: decodeHighlightHtml(value) }} />;
}

function CustomSnippet({ attribute, hit }) {
  const snippetResult = getPropertyByPath(hit._snippetResult, attribute);
  const raw = snippetResult?.value || getPropertyByPath(hit, attribute) || '';
  return <span dangerouslySetInnerHTML={{ __html: decodeHighlightHtml(raw) }} />;
}

function Hit({hit, query, sendEvent}) {
  const {siteConfig} = useDocusaurusContext();
  const {indexName} = siteConfig.themeConfig.algolia || {};
  // hierarchy에서 마지막 null이 아닌 레벨 찾기
  const getLastHierarchyLevel = () => {
    for (let i = 6; i >= 0; i--) {
      const level = hit.hierarchy?.[`lvl${i}`];
      if (level) {
        return `hierarchy.lvl${i}`;
      }
    }
    return 'hierarchy.lvl0';
  };

  const lastLevel = getLastHierarchyLevel();

  // 최근 검색 저장
  const handleHitClick = () => {
    const key = `__DOCSEARCH_RECENT_SEARCHES__${indexName}`;
    const stored = localStorage.getItem(key);
    let recentSearches = [];

    try {
      recentSearches = JSON.parse(stored || '[]');
    } catch (e) {
      console.error('Failed to parse recent searches:', e);
    }

    // 중복 제거 및 새 항목 추가
    recentSearches = recentSearches.filter(item => item.objectID !== hit.objectID);
    recentSearches.unshift(hit);

    // 최대 10개까지만 유지
    recentSearches = recentSearches.slice(0, 10);

    localStorage.setItem(key, JSON.stringify(recentSearches));

    // Algolia Insights로 클릭 이벤트 전송 (Analytics, Personalization 등에 활용)
    sendEvent?.('click', hit, 'Hit Clicked');

    // GA4로 검색 결과 클릭 이벤트 전송
    trackSearchEvent('select_content', {
      content_type: 'search_result',
      item_id: hit.objectID,
      search_term: query,
      link_url: hit.url,
    });
  };

  return (
    <Link
      to={hit.url}
      className="search-pop-hit"
      onClick={handleHitClick}
      style={{
        outline: 'none',
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = '2px solid #3578e5';
        e.currentTarget.style.outlineOffset = '2px';
        e.currentTarget.style.borderRadius = '4px';
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none';
      }}
    >
      <div className="search-pop-hit-title">
        <CustomHighlight attribute={lastLevel} hit={hit} />
      </div>
      <div className="search-pop-hit-breadcrumb">
        <span>{hit.hierarchy?.lvl0}</span>
        {/* {hit.hierarchy?.lvl1 && (
          <span>
            {' › '}
            <Highlight attribute="hierarchy.lvl1" hit={hit} />
          </span>
        )} */}
        {hit.sidelvl2 && (
          <>
            { ' › ' }
            <span dangerouslySetInnerHTML={{__html: hit.sidelvl2}} />
          </>
        )}
        {hit.sidelvl3 && (
          <>
            { ' › ' }
            <span dangerouslySetInnerHTML={{__html: hit.sidelvl3}} />
          </>
        )}
        {hit.sidelvl4 && (
          <>
            { ' › ' }
            <span dangerouslySetInnerHTML={{__html: hit.sidelvl4}} />
          </>
        )}
        {hit.sidelvl5 && (
          <>
            { ' › ' }
            <span dangerouslySetInnerHTML={{__html: hit.sidelvl5}} />
          </>
        )}
      </div>
      {hit.content && (
        <div className="search-pop-hit-snippet">
          <CustomSnippet attribute="content" hit={hit} />
        </div>
      )}
    </Link>
  );
}

function useTransformItems() {
  const processSearchResultUrl = useSearchResultUrlProcessor();
  const [transformItems] = useState(() => {
    return (items) =>
      items.map((item) => ({
        ...item,
        url: processSearchResultUrl(item.url),
      }));
  });
  return transformItems;
}

function useRecentSearches(indexName) {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    // localStorage에서 DocSearch 검색 기록 가져오기
    // indexName을 통해 동적으로 키 생성
    const key = `__DOCSEARCH_RECENT_SEARCHES__${indexName}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored).slice(0, 5)); // 최근 5개만
      } catch (e) {
        console.error('Failed to parse recent searches:', e);
      }
    }
  }, [indexName]);

  return recentSearches;
}

const MAX_RELATED_IN_SEARCH = 4;

// 네브바, 홈페이지 히어로 등 여러 곳에 <SearchBar/>가 동시에 마운트될 수 있어,
// 인스턴스별 상태만으로는 두 모달이 동시에 열려 오버레이가 중첩될 수 있다.
// 모듈 스코프 잠금으로 한 번에 하나의 모달만 열리도록 보장한다.
let isAnyModalOpen = false;

// 인덱스 레코드의 objectID는 "{n}-{url}" 형태이며 n(청크 번호)은 페이지마다 다르다.
// 페이지의 대표 레코드(type: "lvl1")는 항상 낮은 번호(0~4)에 있으므로 후보를 한 번에 조회해 찾는다.
async function resolvePageObjectId(appId, apiKey, indexName, url) {
  const candidates = [0, 1, 2, 3, 4].map((n) => `${n}-${url}`);
  const res = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/*/objects`, {
    method: 'POST',
    headers: {
      'X-Algolia-API-Key': apiKey,
      'X-Algolia-Application-Id': appId,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      requests: candidates.map((objectID) => ({indexName, objectID})),
    }),
  });
  if (!res.ok) return null;
  const {results} = await res.json();
  return results.find((r) => r?.type === 'lvl1')?.objectID ?? null;
}

// 크롤러가 같은 페이지를 트레일링 슬래시 유무로 다르게 색인하는 경우가 있어 비교 전 정규화
function normalizeUrl(url) {
  return url?.replace(/\/$/, '');
}

function dedupeByUrl(hits, excludeUrl, max) {
  const excludeNormalized = normalizeUrl(excludeUrl);
  const seen = new Set();
  const unique = [];
  for (const hit of hits) {
    const normalized = normalizeUrl(hit.url_without_anchor);
    if (normalized === excludeNormalized) continue;
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    unique.push(hit);
    if (unique.length >= max) break;
  }
  return unique;
}

// content는 보통 "{카테고리}\r\n...\r\n{페이지 제목}"처럼 경로를 줄바꿈으로 나열한 짧은 텍스트지만,
// 본문 문단 전체가 그대로 들어있는 청크도 있어 마지막 줄이 지나치게 길면(문장일 가능성) 제목으로 쓰지 않는다.
function getLastLineOfContent(content) {
  if (!content) return null;
  const lines = content.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const last = lines[lines.length - 1];
  if (!last || last.length > 40) return null;
  return last;
}

// 추천 결과는 본문 청크(type: "content")일 수 있어 hierarchy.lvl1이 비어 있는 경우가 많다.
// 이때는 사이드바 경로(sidelvl2~5)의 마지막 항목, 그다음 content의 마지막 줄,
// 그마저 없으면 카테고리(hierarchy.lvl0)를 제목으로 사용한다.
function getFallbackTitle(hit) {
  return (
    [hit.sidelvl2, hit.sidelvl3, hit.sidelvl4, hit.sidelvl5].filter(Boolean).pop() ||
    getLastLineOfContent(hit.content) ||
    hit.hierarchy?.lvl0 ||
    hit.url
  );
}

// 검색어가 없을 때, 현재 보고 있는 문서를 기준으로 Algolia Recommend(Related items)를 호출해
// "최근" 검색 목록 위에 관련 문서를 보여준다.
// objectIDs로 현재 페이지의 대표 레코드를 알아야 하는데, 이는 InstantSearch/Recommend의 어떤
// 위젯도 대신해주지 않는 이 인덱스(URL당 여러 청크 레코드) 특유의 조회라 raw API로 직접 해결한다.
// (일반적인 이커머스라면 "지금 보고 있는 상품의 objectID"를 이미 알고 있어 이 단계가 필요 없다.)
function RelatedDocsInSearch({onClose, indexName}) {
  const {siteConfig} = useDocusaurusContext();
  const {appId, apiKey} = siteConfig.themeConfig.algolia || {};
  const location = useLocation();
  const [sourceObjectId, setSourceObjectId] = useState(null);

  useEffect(() => {
    if (!appId || !apiKey || !indexName) return;
    let cancelled = false;
    const currentUrl = `${siteConfig.url}${location.pathname}`;

    resolvePageObjectId(appId, apiKey, indexName, currentUrl)
      .then((id) => {
        if (!cancelled) setSourceObjectId(id);
      })
      .catch((e) => console.error('Failed to resolve current page objectID:', e));

    return () => {
      cancelled = true;
    };
  }, [appId, apiKey, indexName, location.pathname, siteConfig.url]);

  if (!sourceObjectId) return null;

  return (
    <RelatedDocsList
      // 페이지 이동 시 이전 페이지의 추천 상태가 남지 않도록 objectID가 바뀌면 완전히 새로 마운트
      key={sourceObjectId}
      onClose={onClose}
      currentUrl={`${siteConfig.url}${location.pathname}`}
      sourceObjectId={sourceObjectId}
    />
  );
}

// 실제 추천 호출은 이미 <InstantSearch> 트리 안에 있으므로 react-instantsearch의
// useRelatedProducts 내장 훅을 사용한다(raw fetch 대신).
function RelatedDocsList({onClose, currentUrl, sourceObjectId}) {
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const processSearchResultUrl = useSearchResultUrlProcessor();
  const {items: rawItems} = useRelatedProducts({
    objectIDs: [sourceObjectId],
    // 같은 문서의 청크가 여러 개 섞여 반환될 수 있어 넉넉히 받아 중복 제거 후 상위 N개만 사용
    limit: MAX_RELATED_IN_SEARCH * 3,
    threshold: 0,
    queryParameters: {filters: `language:${currentLocale}`},
  });

  const items = dedupeByUrl(rawItems, currentUrl, MAX_RELATED_IN_SEARCH).map((hit) => ({
    ...hit,
    displayTitle: getFallbackTitle(hit),
    displayCategory: hit.hierarchy?.lvl0,
  }));

  if (items.length === 0) return null;

  return (
    <div className="search-pop-related">
      <h4>
        <Translate id='theme.SearchBar.relatedDocs.title' />
      </h4>
      <ul className="search-pop-related-list">
        {items.map((hit) => (
          <li key={hit.objectID} className="search-pop-related-item-wrapper">
            <Link
              to={processSearchResultUrl(hit.url)}
              className="search-pop-related-item"
              onClick={onClose}
            >
              <div className="search-pop-related-title">{hit.displayTitle}</div>
              {hit.displayCategory && (
                <div className="search-pop-related-category">{hit.displayCategory}</div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RecentSearches({onClose, indexName}) {
  const useRecentSearchesData = useRecentSearches(indexName);
  const [recentSearches, setRecentSearches] = useState(useRecentSearchesData);

  useEffect(() => {
    const key = `__DOCSEARCH_RECENT_SEARCHES__${indexName}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored).slice(0, 5));
      } catch (e) {
        console.error('Failed to parse recent searches:', e);
      }
    }
  }, [indexName]);

  const handleDeleteRecent = (objectId, e) => {
    e.preventDefault();
    e.stopPropagation();

    const key = `__DOCSEARCH_RECENT_SEARCHES__${indexName}`;
    const stored = localStorage.getItem(key);
    let searchHistory = [];

    try {
      searchHistory = JSON.parse(stored || '[]');
    } catch (err) {
      console.error('Failed to parse recent searches:', err);
    }

    // 해당 항목 제거
    searchHistory = searchHistory.filter(item => item.objectID !== objectId);
    localStorage.setItem(key, JSON.stringify(searchHistory));

    // 상태 업데이트로 리렌더링 트리거
    setRecentSearches(searchHistory.slice(0, 5));
  };

  return (
    <div className="search-pop-recent">
      <h4>
        <Translate id='theme.SearchModal.startScreen.recentSearchesTitle' />
      </h4>
      {recentSearches.length > 0 ? (
        <ul className="search-pop-recent-list">
          {recentSearches.map((item) => (
            <li key={item.objectID} className="search-pop-recent-item-wrapper">
              <Link
                to={item.url}
                className="search-pop-recent-item"
                onClick={onClose}
              >
                <div className="search-pop-recent-title">
                  {item.hierarchy?.lvl1 || item.hierarchy?.lvl0} 
                  ({item.hierarchy?.lvl0})
                </div>
              </Link>
              <button
                className="search-pop-recent-delete"
                onClick={(e) => handleDeleteRecent(item.objectID, e)}
                aria-label={translate({ id: 'searchBox.recentList.clearButton' })}
                title={translate({ id: 'searchBox.recentList.clearButton' })}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="search-pop-no-recent">
          <Translate id='theme.SearchModal.startScreen.noRecentSearchesText' />
        </div>
      )}
    </div>
  );
}

function HitsWithQuery({onClose, indexName}) {
  const {query} = useSearchBox();
  const transformItems = useTransformItems();
  const recentSearches = useRecentSearches(indexName);
  const hitsContainerRef = useRef(null);

  // 검색어 입력이 멈춘 뒤 GA4로 search 이벤트 전송 (타이핑 중 매 글자마다 전송되는 것 방지)
  useEffect(() => {
    if (!query) return;
    const timer = setTimeout(() => {
      trackSearchEvent('search', { search_term: query });
    }, 800);
    return () => clearTimeout(timer);
  }, [query]);

  // 검색 결과 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!query) return;

      const hitLinks = hitsContainerRef.current?.querySelectorAll('a.search-pop-hit');
      if (!hitLinks || hitLinks.length === 0) return;

      const activeElement = document.activeElement;
      const isSearchBoxActive = activeElement?.className?.includes('search-pop-searchbox-input');

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        // SearchBox에서 아래 화살표 시 첫 번째 결과로 이동
        if (isSearchBoxActive) {
          hitLinks[0]?.focus();
          return;
        }

        // 결과 항목 간 네비게이션
        const currentIndex = Array.from(hitLinks).indexOf(activeElement);
        if (currentIndex < hitLinks.length - 1) {
          hitLinks[currentIndex + 1]?.focus();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const currentIndex = Array.from(hitLinks).indexOf(activeElement);
        if (currentIndex > 0) {
          hitLinks[currentIndex - 1]?.focus();
        } else if (currentIndex === 0) {
          // 첫 번째 항목에서 위 화살표 시 SearchBox로 돌아가기
          document.querySelector('.search-pop-searchbox-input')?.focus();
        }
      }
    };

    const searchInput = document.querySelector('.search-pop-searchbox-input');
    if (searchInput) {
      searchInput.addEventListener('keydown', handleKeyDown);
      hitsContainerRef.current?.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      searchInput?.removeEventListener('keydown', handleKeyDown);
      hitsContainerRef.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, [query]);

  // 검색어가 없으면 관련 문서(있을 때만) + 최근 검색 또는 안내 메시지 표시
  if (!query) {
    return (
      <div className="search-pop-start">
        <RelatedDocsInSearch onClose={onClose} indexName={indexName} />
        {recentSearches.length > 0 ? (
          <RecentSearches onClose={onClose} indexName={indexName} />
        ) : (
          <div className="search-pop-empty">
            <Translate id='theme.SearchPage.inputPlaceholder' />
          </div>
        )}
      </div>
    );
  }

  // 검색어가 있으면 검색 결과 표시
  return (
    <div ref={hitsContainerRef}>
      <Stats
        classNames={{
          root: 'search-pop-stats',
        }}
      />
      <Hits
        hitComponent={(props) => <Hit {...props} query={query} />}
        transformItems={transformItems}
        escapeHTML={true}
        classNames={{
          root: 'search-pop-hits',
          list: 'search-pop-hits-list',
          item: 'search-pop-hits-item',
        }}
      />
    </div>
  );
}

function PaginationWithQuery() {
  const {query} = useSearchBox();

  if (!query) {
    return null;
  }

  return (
    <Pagination
      classNames={{
        root: 'search-pop-pagination',
        list: 'search-pop-pagination-list',
        item: 'search-pop-pagination-item',
        selectedItem: 'search-pop-pagination-item--selected',
        disabledItem: 'search-pop-pagination-item--disabled',
      }}
    />
  );
}

export default function SearchPop() {
  const {siteConfig, i18n: { currentLocale }} = useDocusaurusContext();
  const {appId, apiKey, indexName} = siteConfig.themeConfig.algolia || {};
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const history = useHistory();
  const previousLocationRef = useRef(history.location);

  const searchClient = useMemo(() => {
    if (!appId || !apiKey) return null;
    return algoliasearch(appId, apiKey);
  }, [appId, apiKey]);

  const openModal = useCallback(() => {
    // 다른 인스턴스의 모달이 이미 열려 있으면 중복으로 열지 않음
    if (isAnyModalOpen) return;
    isAnyModalOpen = true;
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    isAnyModalOpen = false;
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  // ESC 키로 닫기
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  // 모달 열릴 때 body 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 페이지 이동 시 모달 자동 닫기
  useEffect(() => {
    if (!isOpen) return;

    const unlistenHistory = history.listen((location) => {
      if (previousLocationRef.current.pathname !== location.pathname) {
        closeModal();
      }
      previousLocationRef.current = location;
    });

    return () => unlistenHistory();
  }, [isOpen, closeModal, history]);

  // 키보드 단축키로 모달 열기 (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K (Windows/Linux) 또는 Cmd+K (Mac)
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [openModal]);

  if (!searchClient || !indexName) {
    return null;
  }
  const shortCut = isMacOs ? '⌘K' : isWindows ? 'Ctrl+K' : isMobile ? '' : 'Ctrl+K';

  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href={`https://${appId}-dsn.algolia.net`}
          crossOrigin="anonymous"
        />
      </Head>

      <button
        ref={triggerRef}
        className="search-pop-trigger"
        onClick={openModal}
        aria-label={translate({id: 'theme.SearchPage.inputLabel'})}
      >
        <svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8" stroke="currentColor" fill="none" stroke-width="1.4"></circle><path d="m21 21-4.3-4.3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <span className="shortCut">{shortCut}</span>
      </button>

      {isOpen &&
        createPortal(
          <div className="search-pop-overlay" onClick={closeModal}>
            <div className="search-pop-modal" onClick={(e) => e.stopPropagation()}>
              <InstantSearch 
                searchClient={searchClient} 
                indexName={indexName}
                insights={true}
                indexSettings={{
                  searchableAttributes: [
                    'content',
                    'hierarchy.lvl0',
                    'hierarchy.lvl1',
                    'hierarchy.lvl2',
                    'hierarchy.lvl3',
                    'hierarchy.lvl4',
                    'sidelvl2',
                    'sidelvl3',
                    'sidelvl4',
                    'sidelvl5'
                  ]
                }}
                >
                <Configure
                  hitsPerPage={10}
                  snippetEllipsisText="…"
                  attributesToSnippet={[
                    'content:60',
                    'hierarchy.lvl0',
                    'hierarchy.lvl1',
                    'hierarchy.lvl2',
                    'hierarchy.lvl3',
                    'hierarchy.lvl4',
                    'sidelvl2',
                    'sidelvl3',
                    'sidelvl4',
                    'sidelvl5'
                  ]}
                  filters={`language:${currentLocale}`}
                />

                <div className="search-pop-header">
                  <SearchBox
                    placeholder={translate({ id: 'theme.SearchPage.inputPlaceholder' })}
                    autoFocus
                    classNames={{
                      root: 'search-pop-searchbox-root',
                      form: 'search-pop-searchbox-form',
                      input: 'search-pop-searchbox-input',
                    }}
                  />
                  <button
                    className="search-pop-close"
                    onClick={closeModal}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                <div className="search-pop-body">
                  <aside className="search-pop-sidebar">
                    <h4>{translate({ id: 'theme.SearchBar.product.label' })}</h4>
                    <ClearRefinements
                      classNames={{
                        root: 'search-pop-clear-refinements',
                      }}
                      translations={{
                        resetButtonText: translate({ id: 'searchBox.refinementList.clearAll' }),
                      }}
                    />
                    <RefinementList
                      attribute="hierarchy.lvl0"
                      sortBy={['count:desc', 'name:asc']}
                      limit={40}
                      classNames={{
                        root: 'search-pop-refinement-list',
                        list: 'search-pop-refinement-list-list',
                        item: 'search-pop-refinement-list-item',
                        selectedItem: 'search-pop-refinement-list-item--selected',
                        label: 'search-pop-refinement-list-label',
                        checkbox: 'search-pop-refinement-list-checkbox',
                        count: 'search-pop-refinement-list-count',
                      }}
                      showMore={false}
                    />
                  </aside>

                  <div className="search-pop-results">
                    <HitsWithQuery onClose={closeModal} indexName={indexName} />
                  </div>
                </div>

                <div className="search-pop-footer">
                  <PaginationWithQuery />
                </div>
              </InstantSearch>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
