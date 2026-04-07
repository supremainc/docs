import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useHistory} from '@docusaurus/router';
import {useSearchResultUrlProcessor} from '@docusaurus/theme-search-algolia/client';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Snippet,
  Pagination,
  RefinementList,
  Configure,
  ClearRefinements,
  Stats,
  useSearchBox,
} from 'react-instantsearch';
import {liteClient as algoliasearch} from 'algoliasearch/lite';
import './styles.css';

function Hit({hit}) {
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
        <Highlight attribute={lastLevel} hit={hit} />
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
          <Snippet attribute="content" hit={hit} />
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

  // 검색어가 없고 최근 검색이 있으면 최근 검색 표시
  if (!query && recentSearches.length > 0) {
    return (
      <RecentSearches onClose={onClose} indexName={indexName} />
    );
  }

  // 검색어가 없으면 메시지 표시
  if (!query) {
    return (
    <div className="search-pop-empty">
      <Translate id='theme.SearchPage.inputPlaceholder' />
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
        hitComponent={Hit}
        transformItems={transformItems}
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

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => {
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
