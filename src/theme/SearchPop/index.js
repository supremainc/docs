import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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
  return (
    <Link to={hit.url} className="search-pop-hit">
      <div className="search-pop-hit-title">
        {hit.hierarchy?.lvl1 ? (
          <Highlight attribute="hierarchy.lvl1" hit={hit} />
        ) : (
          <Highlight attribute="hierarchy.lvl0" hit={hit} />
        )}
      </div>
      <div className="search-pop-hit-breadcrumb">
        <span>{hit.hierarchy?.lvl0}</span>
        {hit.hierarchy?.lvl1 && (
          <span>
            {' › '}
            <Highlight attribute="hierarchy.lvl1" hit={hit} />
          </span>
        )}
        {hit.hierarchy?.lvl2 && (
          <span>
            {' › '}
            <Highlight attribute="hierarchy.lvl2" hit={hit} />
          </span>
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

function HitsWithQuery() {
  const {query} = useSearchBox();

  if (!query) {
    return <div className="search-pop-empty">검색어를 입력해주세요.</div>;
  }

  return (
    <>
      <Stats
        classNames={{
          root: 'search-pop-stats',
        }}
      />
      <Hits
        hitComponent={Hit}
        classNames={{
          root: 'search-pop-hits',
          list: 'search-pop-hits-list',
          item: 'search-pop-hits-item',
        }}
      />
    </>
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
        aria-label={Translate({id: 'theme.SearchBar.label', message: 'Search'})}
      >
        🔍
      </button>

      {isOpen &&
        createPortal(
          <div className="search-pop-overlay" onClick={closeModal}>
            <div className="search-pop-modal" onClick={(e) => e.stopPropagation()}>
              <InstantSearch searchClient={searchClient} indexName={indexName}>
                <Configure
                  hitsPerPage={10}
                  snippetEllipsisText="…"
                  attributesToSnippet={[
                    'content:35',
                    'hierarchy.lvl0',
                    'hierarchy.lvl1',
                    'hierarchy.lvl2',
                    'hierarchy.lvl3',
                  ]}
                  filters={`language:${currentLocale}`}
                />

                <div className="search-pop-header">
                  <SearchBox
                    placeholder="검색어를 입력하세요..."
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
                    <h4>카테고리</h4>
                    <ClearRefinements
                      classNames={{
                        root: 'search-pop-clear-refinements',
                      }}
                    />
                    <RefinementList
                      attribute="hierarchy.lvl0"
                      sortBy={['count:desc', 'name:asc']}
                      classNames={{
                        root: 'search-pop-refinement-list',
                        list: 'search-pop-refinement-list-list',
                        item: 'search-pop-refinement-list-item',
                        selectedItem: 'search-pop-refinement-list-item--selected',
                        label: 'search-pop-refinement-list-label',
                        checkbox: 'search-pop-refinement-list-checkbox',
                        count: 'search-pop-refinement-list-count',
                      }}
                      showMore={true}
                    />
                  </aside>

                  <div className="search-pop-results">
                    <HitsWithQuery />
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
