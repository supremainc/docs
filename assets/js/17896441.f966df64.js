"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["48"], {
"1106": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocItemLayout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("7026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__("7550");
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__("7097");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Paginator/index.js + 2 modules
var Paginator = __webpack_require__("4813");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBanner/index.js
var DocVersionBanner = __webpack_require__("9548");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBadge/index.js
var DocVersionBadge = __webpack_require__("1987");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Footer/index.js + 4 modules
var Footer = __webpack_require__("2119");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/index.js + 1 modules
var Mobile = __webpack_require__("8070");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Desktop/index.js
var Desktop = __webpack_require__("2456");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__("6171");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__("6055");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
var MDXContent = __webpack_require__("4430");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 15 modules
var Admonition = __webpack_require__("4926");
;// CONCATENATED MODULE: ./src/theme/DocItem/Content/index.js








/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/ function useSyntheticTitle() {
    const { metadata, frontMatter, contentTitle } = (0,doc/* useDoc */.k)();
    const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
    if (!shouldRender) {
        return null;
    }
    return metadata.title;
}
function DocItemContent(param) {
    let { children } = param;
    const { frontMatter } = (0,doc/* useDoc */.k)();
    const syntheticTitle = useSyntheticTitle();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docMarkdown */.k.docs.docMarkdown, 'markdown'),
        children: [
            syntheticTitle && /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                    as: "h1",
                    children: syntheticTitle
                })
            }),
            frontMatter.isTranslationMissing && /*#__PURE__*/ (0,jsx_runtime.jsx)(Admonition/* default */.Z, {
                type: "warning",
                title: "Not translated",
                children: "This page is currently being translated. We will complete the translation as soon as possible."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXContent/* default */.Z, {
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js
var docsUtils = __webpack_require__("6563");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__("3868");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("3367");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("7670");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__("3187");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Home/index.js
var Home = __webpack_require__("2630");
;// CONCATENATED MODULE: ./src/theme/DocBreadcrumbs/Items/Home/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"breadcrumbHomeIcon":"breadcrumbHomeIcon_xK9p"});
;// CONCATENATED MODULE: ./src/theme/DocBreadcrumbs/Items/Home/index.js







function HomeBreadcrumbItem() {
    const homeHref = (0,useBaseUrl/* default */.ZP)('/');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        className: "breadcrumbs__item",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            "aria-label": (0,Translate/* translate */.I)({
                id: 'theme.docs.breadcrumbs.home',
                message: 'Home page',
                description: 'The ARIA label for the home page in the breadcrumbs'
            }),
            className: "breadcrumbs__link",
            href: homeHref,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Home/* default */.Z, {
                className: styles_module.breadcrumbHomeIcon
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/DocBreadcrumOption/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const DocBreadcrumOption_styles_module = ({"btnprint":"btnprint_MOIq","feedback__button":"feedback__button_L4gG"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__("3262");
;// CONCATENATED MODULE: ./src/components/DocBreadcrumOption/index.js




const DocuementButton = ()=>{
    const [isClient, setIsClient] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        if (ExecutionEnvironment/* default,canUseDOM */.Z.canUseDOM) {
            setIsClient(true);
        }
    }, []);
    const handleButtonClick = ()=>{
        if (!isClient) return;
        // 모든 details 요소에 open 속성을 부여하고 하위에 있는 div 요소에 display: block 스타일을 적용
        const detailsElements = document.querySelectorAll('details');
        detailsElements.forEach((detailsElement)=>{
            detailsElement.setAttribute('open', true);
            const childDivs = detailsElement.querySelectorAll('div');
            childDivs.forEach((div)=>{
                div.style.display = 'block';
                div.style.overflow = 'visible';
                div.style.height = 'auto';
            });
        });
        window.print();
    };
    const curLocation = isClient ? window.location.href : '';
    const target = `https://forms.office.com/Pages/ResponsePage.aspx?id=_bYDU8LVnkqxz7A7AWK9TZ3QlIh-_zNBvEgx2mDsll1UQjNOVDhQNEFHUjMyTUw4NUZWWktMTUwwTi4u&r41f093b8508c4bf1996887fab4eb1ad0=${curLocation}`;
    const popupWidth = 600;
    const popupHeight = 800;
    const browserWidth = isClient ? window.innerWidth : 0;
    const browserHeight = isClient ? window.innerHeight : 0;
    const left = isClient ? (browserWidth - popupWidth) / 2 + window.screenX : 0;
    const top = isClient ? (browserHeight - popupHeight) / 2 + window.screenY : 0;
    const popupOptions = `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes,scrollbars=yes`;
    const gotoFeedback = ()=>{
        if (!isClient) return;
        window.open(target, '_blank', popupOptions);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: DocBreadcrumOption_styles_module.btnprint,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: handleButtonClick,
                disabled: !isClient,
                children: "PDF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: gotoFeedback,
                className: DocBreadcrumOption_styles_module.feedback__button,
                disabled: !isClient,
                children: "Feedback"
            })
        ]
    });
};
/* ESM default export */ const DocBreadcrumOption = (DocuementButton);

;// CONCATENATED MODULE: ./src/theme/DocBreadcrumbs/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const DocBreadcrumbs_styles_module = ({"breadcrumbsContainer":"breadcrumbsContainer_Alpn"});
;// CONCATENATED MODULE: ./src/theme/DocBreadcrumbs/index.js











// TODO move to design system folder
function BreadcrumbsItemLink(param) {
    let { children, href, isLast } = param;
    const className = 'breadcrumbs__link';
    if (isLast) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: className,
            itemProp: "name",
            children: children
        });
    }
    return href ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        className: className,
        href: href,
        itemProp: "item",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            itemProp: "name",
            children: children
        })
    }) : // TODO Google search console doesn't like breadcrumb items without href.
    // The schema doesn't seem to require `id` for each `item`, although Google
    // insist to infer one, even if it's invalid. Removing `itemProp="item
    // name"` for now, since I don't know how to properly fix it.
    // See https://github.com/facebook/docusaurus/issues/7241
    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: className,
        children: children
    });
}
// TODO move to design system folder
function BreadcrumbsItem(param) {
    let { children, active, index, addMicrodata } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        ...addMicrodata && {
            itemScope: true,
            itemProp: 'itemListElement',
            itemType: 'https://schema.org/ListItem'
        },
        className: (0,clsx/* default */.Z)('breadcrumbs__item', {
            'breadcrumbs__item--active': active
        }),
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                itemProp: "position",
                content: String(index + 1)
            })
        ]
    });
}
function DocBreadcrumbs() {
    const breadcrumbs = (0,docsUtils/* useSidebarBreadcrumbs */.s1)();
    const homePageRoute = (0,routesUtils/* useHomePageRoute */.Ns)();
    if (!breadcrumbs) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docBreadcrumbs */.k.docs.docBreadcrumbs, DocBreadcrumbs_styles_module.breadcrumbsContainer),
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.breadcrumbs.navAriaLabel',
            message: 'Breadcrumbs',
            description: 'The ARIA label for the breadcrumbs'
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                className: "breadcrumbs",
                itemScope: true,
                itemType: "https://schema.org/BreadcrumbList",
                children: [
                    homePageRoute && /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeBreadcrumbItem, {}),
                    breadcrumbs.map((item, idx)=>{
                        const isLast = idx === breadcrumbs.length - 1;
                        const href = item.type === 'category' && item.linkUnlisted ? undefined : item.href;
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(BreadcrumbsItem, {
                            active: isLast,
                            index: idx,
                            addMicrodata: !!href,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BreadcrumbsItemLink, {
                                href: href,
                                isLast: isLast,
                                children: item.label
                            })
                        }, idx);
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocBreadcrumOption, {})
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/index.js + 3 modules
var ContentVisibility = __webpack_require__("7624");
;// CONCATENATED MODULE: ./src/theme/DocItem/Layout/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Layout_styles_module = ({"docItemContainer":"docItemContainer_c0TR","docItemCol":"docItemCol_z5aJ"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__("6643");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js + 3 modules
var TOCCollapsible = __webpack_require__("8698");
;// CONCATENATED MODULE: ./src/components/GenerateToc/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const GenerateToc_styles_module = ({"tableOfContents":"tableOfContents_pzBX","docItemContainer":"docItemContainer_EhBe","tocMobile":"tocMobile_XdKt"});
;// CONCATENATED MODULE: ./src/components/GenerateToc/index.js








function GenerateTOC(param) {
    let { className, device, ...props } = param;
    const [tocItems, setTocItems] = (0,react.useState)([]);
    const { frontMatter } = (0,doc/* useDoc */.k)();
    (0,react.useEffect)(()=>{
        // 페이지가 렌더링된 후에 TOC를 생성합니다.
        const headers = document.querySelectorAll('h2:not(.margin-bottom--lg h2), h3:not(.margin-bottom--lg h3), h4:not(.margin-bottom--lg h4)');
        const collectedToc = Array.from(headers).map((header)=>({
                value: header.innerText,
                id: header.id,
                level: parseInt(header.tagName[1], 10)
            }));
        // TOC 데이터 수집
        setTocItems(collectedToc);
    }, []);
    const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
    const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';
    if (device === 'desktop') {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (0,clsx/* default */.Z)(GenerateToc_styles_module.tableOfContents, 'thin-scrollbar', className),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCItems/* default */.Z, {
                toc: tocItems,
                linkClassName: LINK_CLASS_NAME,
                linkActiveClassName: LINK_ACTIVE_CLASS_NAME,
                minHeadingLevel: frontMatter.toc_min_heading_level,
                maxHeadingLevel: frontMatter.toc_max_heading_level,
                ...props
            })
        });
    } else if (device === 'mobile') {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCCollapsible/* default */.Z, {
            toc: tocItems,
            minHeadingLevel: frontMatter.toc_min_heading_level,
            maxHeadingLevel: frontMatter.toc_max_heading_level,
            className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docTocMobile */.k.docs.docTocMobile, GenerateToc_styles_module.tocMobile)
        });
    }
}

;// CONCATENATED MODULE: ./src/theme/DocItem/Layout/index.js
















/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */ function useDocTOC() {
    const { frontMatter, toc } = (0,doc/* useDoc */.k)();
    const windowSize = (0,useWindowSize/* useWindowSize */.i)();
    const hidden = frontMatter.hide_table_of_contents;
    const canRender = !hidden && toc.length > 0;
    const mobile = canRender ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Mobile/* default */.Z, {}) : undefined;
    const desktop = canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Desktop/* default */.Z, {}) : undefined;
    return {
        hidden,
        mobile,
        desktop
    };
}
function DocItemLayout(param) {
    let { children } = param;
    const docTOC = useDocTOC();
    const { metadata } = (0,doc/* useDoc */.k)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,clsx/* default */.Z)('col', !docTOC.hidden && Layout_styles_module.docItemCol),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentVisibility/* default */.Z, {
                        metadata: metadata
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocVersionBanner/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: Layout_styles_module.docItemContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocBreadcrumbs, {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocVersionBadge/* default */.Z, {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GenerateTOC, {
                                        device: "mobile"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocItemContent, {
                                        children: children
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer/* default */.Z, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paginator/* default */.Z, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "col col--3",
                children: !docTOC.hidden ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GenerateTOC, {
                    device: "desktop"
                }) : null
            })
        ]
    });
}


}),
"937": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ theme_MDXComponents)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/index.js + 35 modules
var MDXComponents = __webpack_require__("8169");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
var MDXContent = __webpack_require__("4430");
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__("6550");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__("7262");
;// CONCATENATED MODULE: ./src/components/Include/index.js





function InDoc(param) {
    let { children, product, pages } = param;
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.Z)();
    const location = (0,react_router/* useLocation */.TH)();
    if (product) {
        const prods = Array.isArray(product) ? product : product.split(',');
        const cProd = currentLocale === "ko" ? location.pathname.split("/")[1] : location.pathname.split("/")[2];
        const isProduct = prods.includes(cProd);
        return isProduct ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                children: children
            })
        }) : null;
    } else if (pages) {
        const Pages = Array.isArray(pages) ? pages : pages.split(',');
        const cPage = location.pathname.split("/");
        const lastPath = cPage[cPage.length - 1] !== "" ? cPage.length - 1 : cPage.length - 2;
        const isPage = Pages.includes(cPage[lastPath]);
        return isPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                children: children
            })
        }) : null;
    }
}

;// CONCATENATED MODULE: ./src/components/Xclude/index.js





function XcludeDoc(param) {
    let { children, product, pages } = param;
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.Z)();
    const location = (0,react_router/* useLocation */.TH)();
    if (product) {
        const prods = Array.isArray(product) ? product : product.split(',');
        const cProd = currentLocale === "ko" ? location.pathname.split("/")[1] : location.pathname.split("/")[2];
        const isProduct = prods.includes(cProd);
        return isProduct ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXContent/* default */.Z, {
            children: children
        });
    } else if (pages) {
        const Pages = Array.isArray(pages) ? pages : pages.split(',');
        const cPage = location.pathname.split("/");
        const lastPath = cPage[cPage.length - 1] !== "" ? cPage.length - 1 : cPage.length - 2;
        const isPage = Pages.includes(cPage[lastPath]);
        return isPage ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXContent/* default */.Z, {
            children: children
        });
    }
}

;// CONCATENATED MODULE: ./src/components/Steps/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"fdsteps":"fdsteps_tUGx","fdstep":"fdstep_hOfH"});
;// CONCATENATED MODULE: ./src/components/Steps/index.tsx


function Steps(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: styles_module.fdsteps,
        children: children
    });
}
function Step(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: styles_module.fdstep,
        children: children
    });
}

;// CONCATENATED MODULE: ./src/components/Files/openFolderIcon.js


function OpenFolderIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            class: "type",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2Z"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Files/closeFolderIcon.js


function CloseFolderIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            class: "type",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Files/fileIcon.js


function FileIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            class: "type",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Files/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Files_styles_module = ({"filetree":"filetree_c6T4","top":"top_ZAYt","type":"type_n_WQ","fileitem":"fileitem_PWvV","name":"name_iojM","ico":"ico_i25q","desc":"desc_hq9n"});
;// CONCATENATED MODULE: ./src/components/Files/index.js







function Folder(param) {
    let { children, name, type, open = true } = param;
    const [isOpen, setIsOpen] = (0,react.useState)(open);
    (0,react.useEffect)(()=>{
        const mediaQueryList = window.matchMedia('print');
        const handlePrintChange = (event)=>{
            if (event.matches) {
                setIsOpen(true);
            }
        };
        mediaQueryList.addListener(handlePrintChange);
        return ()=>{
            mediaQueryList.removeListener(handlePrintChange);
        };
    }, []);
    const handleToggle = ()=>{
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: Files_styles_module.filetree,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                className: Files_styles_module.top,
                onClick: handleToggle,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: Files_styles_module.type,
                        children: isOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenFolderIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CloseFolderIcon, {})
                    }),
                    name
                ]
            }),
            isOpen && /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: Files_styles_module.fileitem,
                type: type,
                children: children
            })
        ]
    });
}
function File(param) {
    let { children, name, type } = param;
    const renderIcon = ()=>{
        if (type === 'file') {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(FileIcon, {});
        } else if (type === 'folder') {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenFolderIcon, {});
        }
        return null;
    };
    const hasChildFiletreeItems = react.Children.toArray(children).some((child)=>/*#__PURE__*/ react.isValidElement(child) && child.type === FiletreeItem);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        className: Files_styles_module.fileitem,
        type: type,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: Files_styles_module.name,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: Files_styles_module.ico,
                        children: renderIcon()
                    }),
                    name
                ]
            }),
            type === 'folder' && hasChildFiletreeItems ? /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                children: react.Children.map(children, (child, index)=>/*#__PURE__*/ react.isValidElement(child) && child.type === FiletreeItem ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: child
                    }) : null)
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: Files_styles_module.desc,
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("7026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__("6009");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("3367");
;// CONCATENATED MODULE: ./src/components/Head/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Head_styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_Kz00","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_WDcu"});
;// CONCATENATED MODULE: ./src/components/Head/index.js






function Head(param) {
    let { level, hashid, children, className } = param;
    const Headertag = `h${level}`;
    let hid;
    const { navbar: { hideOnScroll } } = (0,useThemeConfig/* useThemeConfig */.L)();
    if (level === 'none') {
        return null;
    }
    if (!hashid) {
        hid = children.replace(/\s/g, "_");
    } else {
        hid = hashid;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Headertag, {
        className: (0,clsx/* default */.Z)('anchor', hideOnScroll ? Head_styles_module.anchorWithHideOnScrollNavbar : Head_styles_module.anchorWithStickyNavbar, className),
        id: hid,
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                className: "hash-link",
                to: `#${hid}`,
                children: "​"
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__("3187");
;// CONCATENATED MODULE: ./src/components/Image/index.js





function Image(param) {
    let { src, alt, className, alone } = param;
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.Z)();
    const imagePath = currentLocale === 'ko' || alone ? (0,useBaseUrl/* default */.ZP)(src) : (0,useBaseUrl/* default */.ZP)(src.replace('/img/', `/img/${currentLocale}/`));
    const errTarget = (0,useBaseUrl/* default */.ZP)('/img/default-placeholder-image.webp');
    // Handle image loading errors
    function onError(e) {
        e.target.src = errTarget;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXContent/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
            className: "hasimg",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                loading: "lazy",
                src: imagePath,
                alt: alt,
                className: (0,clsx/* default */.Z)('container', className),
                onError: onError
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsSidebar.js
var docsSidebar = __webpack_require__("4684");
;// CONCATENATED MODULE: ./src/components/Toc/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Toc_styles_module = ({"tocList":"tocList_VIMH"});
;// CONCATENATED MODULE: ./src/components/Toc/index.js





const SidebarItem = (param)=>{
    let { item } = param;
    if (!item || typeof item !== 'object') {
        // console.error("SidebarItem received an undefined or invalid item:", item);
        return null;
    }
    if (item.type === 'category') {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
            children: [
                item.href ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    to: item.href,
                    className: Toc_styles_module.tocList,
                    children: item.label
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: item.label
                }),
                Array.isArray(item.items) && item.items.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                    children: item.items.map((subItem, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SidebarItem, {
                            item: subItem
                        }, index))
                })
            ]
        });
    } else if (item.type === 'link') {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
            children: item.href ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                to: item.href,
                className: Toc_styles_module.tocList,
                children: item.label
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: item.label
            })
        });
    }
    // console.warn("Unhandled sidebar item type:", item);
    return null;
};
const DocsSidebar = ()=>{
    const sidebar = (0,docsSidebar/* useDocsSidebar */.V)();
    // console.log("Sidebar data:", sidebar); // 디버깅용
    if (!sidebar || !Array.isArray(sidebar.items)) {
        console.error("useDocsSidebar() returned undefined or invalid data:", sidebar);
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        id: "toc",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            children: sidebar.items.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SidebarItem, {
                    item: item
                }, index))
        })
    });
};
/* ESM default export */ const Toc = (DocsSidebar);

;// CONCATENATED MODULE: ./src/components/Collection/index.js


const Collection = (param)=>{
    let { docs } = param;
    if (!docs || docs.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
            children: "No documents to display."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: docs.map((param, index)=>{
            let { Topic, props } = param;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Topic, {
                ...props || {}
            }, index);
        })
    });
};
/* ESM default export */ const components_Collection = (Collection);

;// CONCATENATED MODULE: ./src/components/Kbd/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Kbd_styles_module = ({"kbd":"kbd_QsL_"});
;// CONCATENATED MODULE: ./src/components/Kbd/index.js


function Kbd(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: Kbd_styles_module.kbd,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__("8168");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__("7645");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js + 3 modules
var DocCardList = __webpack_require__("1552");
;// CONCATENATED MODULE: ./src/theme/MDXComponents.js













/* ESM default export */ const theme_MDXComponents = ({
    ...MDXComponents/* default */.Z,
    Include: InDoc,
    Xclude: XcludeDoc,
    Steps: Steps,
    Step: Step,
    Folder: Folder,
    File: File,
    Head: Head,
    Image: Image,
    DocsSidebar: Toc,
    Collection: components_Collection,
    Kbd: Kbd,
    Tabs: Tabs/* default */.Z,
    TabItem: TabItem/* default */.Z,
    DocCardList: DocCardList/* default */.Z
});


}),

}]);