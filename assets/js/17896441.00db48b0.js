"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["48"], {
"7548": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js + 63 modules
var MDXContent = __webpack_require__("512");
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

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js + 4 modules
var DocBreadcrumbs = __webpack_require__("5872");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/index.js + 3 modules
var ContentVisibility = __webpack_require__("7624");
;// CONCATENATED MODULE: ./src/theme/DocItem/Layout/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"docItemContainer":"docItemContainer_c0TR","docItemCol":"docItemCol_z5aJ"});
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
                className: (0,clsx/* default */.Z)('col', !docTOC.hidden && styles_module.docItemCol),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentVisibility/* default */.Z, {
                        metadata: metadata
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocVersionBanner/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.docItemContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocBreadcrumbs/* default */.Z, {}),
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

}]);