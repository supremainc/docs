"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5847"], {
11189: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SearchPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(39836);
// EXTERNAL MODULE: ./node_modules/algoliasearch-helper/index.js
var algoliasearch_helper = __webpack_require__(74103);
var algoliasearch_helper_default = /*#__PURE__*/__webpack_require__.n(algoliasearch_helper);
// EXTERNAL MODULE: ./node_modules/algoliasearch/dist/lite/builds/browser.js + 2 modules
var browser = __webpack_require__(21761);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(69774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(25895);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(12801);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js + 2 modules
var client = __webpack_require__(31049);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(90134);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useSearchPage.js
var useSearchPage = __webpack_require__(57400);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(16545);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(99727);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(43789);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(13341);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-search-algolia/lib/client/useAlgoliaThemeConfig.js
var useAlgoliaThemeConfig = __webpack_require__(52955);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-search-algolia/lib/client/useSearchResultUrlProcessor.js
var useSearchResultUrlProcessor = __webpack_require__(71191);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 79 modules
var Layout = __webpack_require__(10584);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var Heading = __webpack_require__(3381);
;// CONCATENATED MODULE: ./src/theme/SearchPage/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"searchQueryInput":"searchQueryInput_cpyO","searchVersionInput":"searchVersionInput_wf2r","searchResultsColumn":"searchResultsColumn_PLpb","searchLogoColumn":"searchLogoColumn_Mj_0","searchResultItem":"searchResultItem_AlWU","searchResultItemHeading":"searchResultItemHeading_HJFH","searchResultItemPath":"searchResultItemPath_x9Ef","searchResultItemSummary":"searchResultItemSummary_jej3","searchQueryColumn":"searchQueryColumn_hQFc","searchVersionColumn":"searchVersionColumn_GkmC","loadingSpinner":"loadingSpinner_E_zt","loading-spin":"loading-spin_hlTL","loader":"loader_ujSQ"});
;// CONCATENATED MODULE: ./src/theme/SearchPage/index.js
/* eslint-disable jsx-a11y/no-autofocus */ 















// Very simple pluralization: probably good enough for now
function useDocumentsFoundPlural() {
    const { selectMessage } = (0,usePluralForm/* .usePluralForm */.W)();
    return (count)=>selectMessage(count, (0,Translate/* .translate */.T)({
            id: 'theme.SearchPage.documentsFound.plurals',
            description: 'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
            message: 'One document found|{count} documents found'
        }, {
            count
        }));
}
function useDocsSearchVersionsHelpers() {
    const allDocsData = (0,client/* .useAllDocsData */.Gy)();
    // State of the version select menus / algolia facet filters
    // docsPluginId -> versionName map
    const [searchVersions, setSearchVersions] = (0,react.useState)(()=>Object.entries(allDocsData).reduce((acc, [pluginId, pluginData])=>({
                ...acc,
                [pluginId]: pluginData.versions[0].name
            }), {}));
    // Set the value of a single select menu
    const setSearchVersion = (pluginId, searchVersion)=>setSearchVersions((s)=>({
                ...s,
                [pluginId]: searchVersion
            }));
    const versioningEnabled = Object.values(allDocsData).some((docsData)=>docsData.versions.length > 1);
    return {
        allDocsData,
        versioningEnabled,
        searchVersions,
        setSearchVersion
    };
}
// We want to display one select per versioned docs plugin instance
function SearchVersionSelectList({ docsSearchVersionsHelpers }) {
    const versionedPluginEntries = Object.entries(docsSearchVersionsHelpers.allDocsData)// Do not show a version select for unversioned docs plugin instances
    .filter(([, docsData])=>docsData.versions.length > 1);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* ["default"] */.A)('col', 'col--3', 'padding-left--none', styles_module.searchVersionColumn),
        children: versionedPluginEntries.map(([pluginId, docsData])=>{
            const labelPrefix = versionedPluginEntries.length > 1 ? `${pluginId}: ` : '';
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("select", {
                onChange: (e)=>docsSearchVersionsHelpers.setSearchVersion(pluginId, e.target.value),
                defaultValue: docsSearchVersionsHelpers.searchVersions[pluginId],
                className: styles_module.searchVersionInput,
                children: docsData.versions.map((version, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                        label: `${labelPrefix}${version.label}`,
                        value: version.name
                    }, i))
            }, pluginId);
        })
    });
}
function AlgoliaLogo() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "80",
        height: "24",
        "aria-label": "Algolia",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 2196.2 500",
        style: {
            maxWidth: '150px'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("style", {
                    children: `.cls-1,.cls-2{fill:#003dff}.cls-2{fill-rule:evenodd}`
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                className: "cls-2",
                d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                className: "cls-1",
                x: "1845.88",
                y: "104.73",
                width: "62.58",
                height: "277.9",
                rx: "5.9",
                ry: "5.9"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                className: "cls-2",
                d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                className: "cls-2",
                d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                className: "cls-2",
                d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                className: "cls-2",
                d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                className: "cls-2",
                d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                className: "cls-2",
                d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                className: "cls-1",
                d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z"
            })
        ]
    });
}
function getSearchPageTitle(searchQuery) {
    return searchQuery ? (0,Translate/* .translate */.T)({
        id: 'theme.SearchPage.existingResultsTitle',
        message: 'Search results for "{query}"',
        description: 'The search page title for non-empty query'
    }, {
        query: searchQuery
    }) : (0,Translate/* .translate */.T)({
        id: 'theme.SearchPage.emptyResultsTitle',
        message: 'Search the documentation',
        description: 'The search page title for empty query'
    });
}
function SearchPageContent() {
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* ["default"] */.A)();
    const { algolia: { appId, apiKey, indexName, contextualSearch } } = (0,useAlgoliaThemeConfig/* .useAlgoliaThemeConfig */.c)();
    const processSearchResultUrl = (0,useSearchResultUrlProcessor/* .useSearchResultUrlProcessor */.C)();
    const documentsFoundPlural = useDocumentsFoundPlural();
    const docsSearchVersionsHelpers = useDocsSearchVersionsHelpers();
    const [searchQuery, setSearchQuery] = (0,useSearchPage/* .useSearchQueryString */.b)();
    const pageTitle = getSearchPageTitle(searchQuery);
    const initialSearchResultState = {
        items: [],
        query: null,
        totalResults: null,
        totalPages: null,
        lastPage: null,
        hasMore: null,
        loading: null
    };
    const [searchResultState, searchResultStateDispatcher] = (0,react.useReducer)((prevState, data)=>{
        switch(data.type){
            case 'reset':
                {
                    return initialSearchResultState;
                }
            case 'loading':
                {
                    return {
                        ...prevState,
                        loading: true
                    };
                }
            case 'update':
                {
                    if (searchQuery !== data.value.query) {
                        return prevState;
                    }
                    return {
                        ...data.value,
                        items: data.value.lastPage === 0 ? data.value.items : prevState.items.concat(data.value.items)
                    };
                }
            case 'advance':
                {
                    const hasMore = prevState.totalPages > prevState.lastPage + 1;
                    return {
                        ...prevState,
                        lastPage: hasMore ? prevState.lastPage + 1 : prevState.lastPage,
                        hasMore
                    };
                }
            default:
                return prevState;
        }
    }, initialSearchResultState);
    // respect settings from the theme config for facets
    const disjunctiveFacets = contextualSearch ? [
        'language',
        'docusaurus_tag'
    ] : [];
    const algoliaClient = (0,browser/* .liteClient */.p)(appId, apiKey);
    const algoliaHelper = algoliasearch_helper_default()(algoliaClient, indexName, {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: why errors happens after upgrading to TS 5.5 ?
        hitsPerPage: 15,
        advancedSyntax: true,
        disjunctiveFacets
    });
    algoliaHelper.on('result', ({ results: { query, hits, page, nbHits, nbPages } })=>{
        if (query === '' || !Array.isArray(hits)) {
            searchResultStateDispatcher({
                type: 'reset'
            });
            return;
        }
        const sanitizeValue = (value)=>value.replace(/algolia-docsearch-suggestion--highlight/g, 'search-result-match');
        const items = hits.map(({ url, _highlightResult: { hierarchy }, _snippetResult: snippet = {} })=>{
            const titles = Object.keys(hierarchy).map((key)=>sanitizeValue(hierarchy[key].value));
            return {
                title: titles.pop(),
                url: processSearchResultUrl(url),
                summary: snippet.content ? `${sanitizeValue(snippet.content.value)}...` : '',
                breadcrumbs: titles
            };
        });
        searchResultStateDispatcher({
            type: 'update',
            value: {
                items,
                query,
                totalResults: nbHits,
                totalPages: nbPages,
                lastPage: page,
                hasMore: nbPages > page + 1,
                loading: false
            }
        });
    });
    const [loaderRef, setLoaderRef] = (0,react.useState)(null);
    const prevY = (0,react.useRef)(0);
    const observer = (0,react.useRef)(ExecutionEnvironment/* ["default"].canUseIntersectionObserver */.A.canUseIntersectionObserver && new IntersectionObserver(// TODO need to fix this React Compiler lint error
    // eslint-disable-next-line react-compiler/react-compiler
    (entries)=>{
        const { isIntersecting, boundingClientRect: { y: currentY } } = entries[0];
        if (isIntersecting && prevY.current > currentY) {
            searchResultStateDispatcher({
                type: 'advance'
            });
        }
        prevY.current = currentY;
    }, {
        threshold: 1
    }));
    const makeSearch = (0,reactUtils/* .useEvent */._q)((page = 0)=>{
        if (contextualSearch) {
            algoliaHelper.addDisjunctiveFacetRefinement('docusaurus_tag', 'default');
            algoliaHelper.addDisjunctiveFacetRefinement('language', currentLocale);
            Object.entries(docsSearchVersionsHelpers.searchVersions).forEach(([pluginId, searchVersion])=>{
                algoliaHelper.addDisjunctiveFacetRefinement('docusaurus_tag', `docs-${pluginId}-${searchVersion}`);
            });
        }
        algoliaHelper.setQueryParameter('attributesToSnippet', [
            'content: 60'
        ]);
        algoliaHelper.setQuery(searchQuery).setPage(page).search();
    });
    (0,react.useEffect)(()=>{
        if (!loaderRef) {
            return undefined;
        }
        const currentObserver = observer.current;
        if (currentObserver) {
            currentObserver.observe(loaderRef);
            return ()=>currentObserver.unobserve(loaderRef);
        }
        return ()=>true;
    }, [
        loaderRef
    ]);
    (0,react.useEffect)(()=>{
        searchResultStateDispatcher({
            type: 'reset'
        });
        if (searchQuery) {
            searchResultStateDispatcher({
                type: 'loading'
            });
            setTimeout(()=>{
                makeSearch();
            }, 300);
        }
    }, [
        searchQuery,
        docsSearchVersionsHelpers.searchVersions,
        makeSearch
    ]);
    (0,react.useEffect)(()=>{
        if (!searchResultState.lastPage || searchResultState.lastPage === 0) {
            return;
        }
        makeSearch(searchResultState.lastPage);
    }, [
        makeSearch,
        searchResultState.lastPage
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* .PageMetadata */.be, {
                title: pageTitle
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Head/* ["default"] */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                    property: "robots",
                    content: "noindex, follow"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container margin-vert--lg",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* ["default"] */.A, {
                        as: "h1",
                        children: pageTitle
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                        className: "row",
                        onSubmit: (e)=>e.preventDefault(),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (0,clsx/* ["default"] */.A)('col', styles_module.searchQueryColumn, {
                                    'col--9': docsSearchVersionsHelpers.versioningEnabled,
                                    'col--12': !docsSearchVersionsHelpers.versioningEnabled
                                }),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                    type: "search",
                                    name: "q",
                                    className: styles_module.searchQueryInput,
                                    placeholder: (0,Translate/* .translate */.T)({
                                        id: 'theme.SearchPage.inputPlaceholder',
                                        message: 'Type your search here',
                                        description: 'The placeholder for search page input'
                                    }),
                                    "aria-label": (0,Translate/* .translate */.T)({
                                        id: 'theme.SearchPage.inputLabel',
                                        message: 'Search',
                                        description: 'The ARIA label for search page input'
                                    }),
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    value: searchQuery,
                                    autoComplete: "off",
                                    autoFocus: true
                                })
                            }),
                            contextualSearch && docsSearchVersionsHelpers.versioningEnabled && /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchVersionSelectList, {
                                docsSearchVersionsHelpers: docsSearchVersionsHelpers
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (0,clsx/* ["default"] */.A)('col', 'col--8', styles_module.searchResultsColumn),
                                children: !!searchResultState.totalResults && documentsFoundPlural(searchResultState.totalResults)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (0,clsx/* ["default"] */.A)('col', 'col--4', styles_module.searchLogoColumn),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: (0,Translate/* .translate */.T)({
                                            id: 'theme.SearchPage.algoliaLabel',
                                            message: 'Powered by',
                                            description: 'The text explain that the search powered by Algolia'
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                                        to: "https://www.algolia.com/",
                                        "aria-label": (0,Translate/* .translate */.T)({
                                            id: 'theme.SearchPage.algoliaLabel',
                                            message: 'Powered by Algolia',
                                            description: 'The description label for Algolia mention'
                                        }),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AlgoliaLogo, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    searchResultState.items.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                        children: searchResultState.items.map(({ title, url, summary, breadcrumbs }, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                                className: styles_module.searchResultItem,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* ["default"] */.A, {
                                        as: "h2",
                                        className: styles_module.searchResultItemHeading,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                                            to: url,
                                            dangerouslySetInnerHTML: {
                                                __html: title
                                            }
                                        })
                                    }),
                                    breadcrumbs.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                                        "aria-label": "breadcrumbs",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                            className: (0,clsx/* ["default"] */.A)('breadcrumbs', styles_module.searchResultItemPath),
                                            children: breadcrumbs.map((html, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    className: "breadcrumbs__item",
                                                    // Developer provided the HTML, so assume it's safe.
                                                    // eslint-disable-next-line react/no-danger
                                                    dangerouslySetInnerHTML: {
                                                        __html: html
                                                    }
                                                }, index))
                                        })
                                    }),
                                    summary && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: styles_module.searchResultItemSummary,
                                        // Developer provided the HTML, so assume it's safe.
                                        // eslint-disable-next-line react/no-danger
                                        dangerouslySetInnerHTML: {
                                            __html: summary
                                        }
                                    })
                                ]
                            }, i))
                    }) : [
                        searchQuery && !searchResultState.loading && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* ["default"] */.A, {
                                id: "theme.SearchPage.noResultsText",
                                description: "The paragraph for empty search result",
                                children: "No results were found"
                            })
                        }, "no-results"),
                        !!searchResultState.loading && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: styles_module.loadingSpinner
                        }, "spinner")
                    ],
                    searchResultState.hasMore && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.loader,
                        ref: setLoaderRef,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* ["default"] */.A, {
                            id: "theme.SearchPage.fetchingNewResults",
                            description: "The paragraph for fetching new search results",
                            children: "Fetching new results..."
                        })
                    })
                ]
            })
        ]
    });
}
function SearchPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* .HtmlClassNameProvider */.e3, {
        className: "search-page-wrapper",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchPageContent, {})
    });
}


}),

}]);