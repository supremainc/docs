"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8947"], {
68729: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  _: () => (DocProvider),
  u: () => (useDoc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* ESM import */var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16545);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


const Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);
/**
 * Note: we don't use `PropDoc` as context value on purpose. Metadata is
 * currently stored inside the MDX component, but we may want to change that in
 * the future. This layer is a good opportunity to decouple storage from
 * consuming API, potentially allowing us to provide metadata as both props and
 * route context without duplicating the chunks in the future.
 */ function useContextValue(content) {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            metadata: content.metadata,
            frontMatter: content.frontMatter,
            assets: content.assets,
            contentTitle: content.contentTitle,
            toc: content.toc
        }), [
        content
    ]);
}
/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the doc to the children tree.
 */ function DocProvider({ children, content }) {
    const contextValue = useContextValue(content);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {
        value: contextValue,
        children: children
    });
}
/**
 * Returns the data of the currently browsed doc. Gives access to the doc's MDX
 * Component, front matter, metadata, TOC, etc. When swizzling a low-level
 * component (e.g. the "Edit this page" link) and you need some extra metadata,
 * you don't have to drill the props all the way through the component tree:
 * simply use this hook instead.
 */ function useDoc() {
    const doc = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);
    if (doc === null) {
        throw new _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .ReactContextError */.dV('DocProvider');
    }
    return doc;
}


}),
92131: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  D: () => (useBreadcrumbsStructuredData)
});
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13341);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function useBreadcrumbsStructuredData({ breadcrumbs }) {
    const { siteConfig } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */.A)();
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs// We filter breadcrumb items without links, they are not allowed
        // See also https://github.com/facebook/docusaurus/issues/9319#issuecomment-2643560845
        .filter((breadcrumb)=>breadcrumb.href).map((breadcrumb, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: breadcrumb.label,
                item: `${siteConfig.url}${breadcrumb.href}`
            }))
    };
}


}),
63718: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ContentVisibility)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(39836);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(43789);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(25895);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/translations/contentVisibilityTranslations.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function UnlistedBannerTitle() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* ["default"] */.A, {
        id: "theme.contentVisibility.unlistedBanner.title",
        description: "The unlisted content banner title",
        children: "Unlisted page"
    });
}
function UnlistedBannerMessage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* ["default"] */.A, {
        id: "theme.contentVisibility.unlistedBanner.message",
        description: "The unlisted content banner message",
        children: "This page is unlisted. Search engines will not index it, and only users having a direct link can access it."
    });
}
// TODO Docusaurus v4 breaking change (since it's v3 public theme-common API :/)
//  Move this to theme/ContentVisibility/Unlisted
function UnlistedMetadata() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Head/* ["default"] */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
            name: "robots",
            content: "noindex, nofollow"
        })
    });
}
function DraftBannerTitle() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* ["default"] */.A, {
        id: "theme.contentVisibility.draftBanner.title",
        description: "The draft content banner title",
        children: "Draft page"
    });
}
function DraftBannerMessage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* ["default"] */.A, {
        id: "theme.contentVisibility.draftBanner.message",
        description: "The draft content banner message",
        children: "This page is a draft. It will only be visible in dev and be excluded from the production build."
    });
} //# sourceMappingURL=contentVisibilityTranslations.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(16364);
// EXTERNAL MODULE: ./src/theme/Admonition/index.js + 14 modules
var Admonition = __webpack_require__(71008);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/Draft/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function Draft({ className }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Admonition/* ["default"] */.A, {
        type: "caution",
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(DraftBannerTitle, {}),
        className: (0,clsx/* ["default"] */.A)(className, ThemeClassNames/* .ThemeClassNames.common.draftBanner */.G.common.draftBanner),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DraftBannerMessage, {})
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/Unlisted/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function UnlistedBanner({ className }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Admonition/* ["default"] */.A, {
        type: "caution",
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlistedBannerTitle, {}),
        className: (0,clsx/* ["default"] */.A)(className, ThemeClassNames/* .ThemeClassNames.common.unlistedBanner */.G.common.unlistedBanner),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlistedBannerMessage, {})
    });
}
function Unlisted(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlistedMetadata, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlistedBanner, {
                ...props
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function ContentVisibility({ metadata }) {
    const { unlisted, frontMatter } = metadata;
    // Reading draft/unlisted status from frontMatter is useful to display
    // the banners in dev mode (in dev, metadata.unlisted is always false)
    // See https://github.com/facebook/docusaurus/issues/8285
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            (unlisted || frontMatter.unlisted) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Unlisted, {}),
            frontMatter.draft && /*#__PURE__*/ (0,jsx_runtime.jsx)(Draft, {})
        ]
    });
}


}),
35544: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocItemPaginator)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(68729);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(39836);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(43789);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(12801);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function PaginatorNavLink(props) {
    const { permalink, title, subLabel, isNext } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* ["default"] */.A, {
        className: (0,clsx/* ["default"] */.A)('pagination-nav__link', isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'),
        to: permalink,
        children: [
            subLabel && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "pagination-nav__sublabel",
                children: subLabel
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "pagination-nav__label",
                children: title
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocPaginator(props) {
    const { className, previous, next } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: (0,clsx/* ["default"] */.A)(className, 'pagination-nav'),
        "aria-label": (0,Translate/* .translate */.T)({
            id: 'theme.docs.paginator.navAriaLabel',
            message: 'Docs pages',
            description: 'The ARIA label for the docs pagination'
        }),
        children: [
            previous && /*#__PURE__*/ (0,jsx_runtime.jsx)(PaginatorNavLink, {
                ...previous,
                subLabel: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* ["default"] */.A, {
                    id: "theme.docs.paginator.previous",
                    description: "The label used to navigate to the previous doc",
                    children: "Previous"
                })
            }),
            next && /*#__PURE__*/ (0,jsx_runtime.jsx)(PaginatorNavLink, {
                ...next,
                subLabel: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* ["default"] */.A, {
                    id: "theme.docs.paginator.next",
                    description: "The label used to navigate to the next doc",
                    children: "Next"
                }),
                isNext: true
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Paginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



/**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */ function DocItemPaginator() {
    const { metadata } = (0,doc/* .useDoc */.u)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocPaginator, {
        className: "docusaurus-mt-lg",
        previous: metadata.previous,
        next: metadata.next
    });
}


}),
7177: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocItemTOCDesktop)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(68729);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(39836);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(19333);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tableOfContents":"tableOfContents_bqdL","docItemContainer":"docItemContainer_F8PC"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';
function TOC({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* ["default"] */.A)(styles_module.tableOfContents, 'thin-scrollbar', className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCItems/* ["default"] */.A, {
            ...props,
            linkClassName: LINK_CLASS_NAME,
            linkActiveClassName: LINK_ACTIVE_CLASS_NAME
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocItemTOCDesktop() {
    const { toc, frontMatter } = (0,doc/* .useDoc */.u)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TOC, {
        toc: toc,
        minHeadingLevel: frontMatter.toc_min_heading_level,
        maxHeadingLevel: frontMatter.toc_max_heading_level,
        className: ThemeClassNames/* .ThemeClassNames.docs.docTocDesktop */.G.docs.docTocDesktop
    });
}


}),
22295: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocItemTOCMobile)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(39836);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(68729);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js + 3 modules
var TOCCollapsible = __webpack_require__(29135);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tocMobile":"tocMobile_ITEo"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocItemTOCMobile() {
    const { toc, frontMatter } = (0,doc/* .useDoc */.u)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCCollapsible/* ["default"] */.A, {
        toc: toc,
        minHeadingLevel: frontMatter.toc_min_heading_level,
        maxHeadingLevel: frontMatter.toc_max_heading_level,
        className: (0,clsx/* ["default"] */.A)(ThemeClassNames/* .ThemeClassNames.docs.docTocMobile */.G.docs.docTocMobile, styles_module.tocMobile)
    });
}


}),
51912: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(99727);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(68729);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Metadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocItemMetadata() {
    const { metadata, frontMatter, assets } = (0,doc/* .useDoc */.u)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* .PageMetadata */.be, {
        title: metadata.title,
        description: metadata.description,
        keywords: frontMatter.keywords,
        image: assets.image ?? frontMatter.image
    });
}

// EXTERNAL MODULE: ./src/theme/DocItem/Layout/index.js + 11 modules
var Layout = __webpack_require__(92608);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocItem(props) {
    const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
    const MDXComponent = props.content;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(doc/* .DocProvider */._, {
        content: props.content,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(metadataUtils/* .HtmlClassNameProvider */.e3, {
            className: docHtmlClassName,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DocItemMetadata, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* ["default"] */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXComponent, {})
                })
            ]
        })
    });
}


}),
50514: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocVersionBadge)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39836);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43789);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16364);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82370);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocVersionBadge({ className }) {
    const versionMetadata = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useDocsVersion */.r)();
    if (versionMetadata.badge) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.A)(className, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ThemeClassNames.docs.docVersionBadge */.G.docs.docVersionBadge, 'badge badge--secondary'),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.A, {
                id: "theme.docs.versionBadge.label",
                values: {
                    versionLabel: versionMetadata.label
                },
                children: 'Version: {versionLabel}'
            })
        });
    }
    return null;
}


}),
4825: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocVersionBanner)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39836);
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13341);
/* ESM import */var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12801);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43789);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31049);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16364);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73311);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82370);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 








function UnreleasedVersionLabel({ siteTitle, versionMetadata }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.A, {
        id: "theme.docs.versions.unreleasedVersionLabel",
        description: "The label used to tell the user that he's browsing an unreleased doc version",
        values: {
            siteTitle,
            versionLabel: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                children: versionMetadata.label
            })
        },
        children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.'
    });
}
function UnmaintainedVersionLabel({ siteTitle, versionMetadata }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.A, {
        id: "theme.docs.versions.unmaintainedVersionLabel",
        description: "The label used to tell the user that he's browsing an unmaintained doc version",
        values: {
            siteTitle,
            versionLabel: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                children: versionMetadata.label
            })
        },
        children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'
    });
}
const BannerLabelComponents = {
    unreleased: UnreleasedVersionLabel,
    unmaintained: UnmaintainedVersionLabel
};
function BannerLabel(props) {
    const BannerLabelComponent = BannerLabelComponents[props.versionMetadata.banner];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BannerLabelComponent, {
        ...props
    });
}
function LatestVersionSuggestionLabel({ versionLabel, to, onClick }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.A, {
        id: "theme.docs.versions.latestVersionSuggestionLabel",
        description: "The label used to tell the user to check the latest version",
        values: {
            versionLabel,
            latestVersionLink: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.A, {
                    to: to,
                    onClick: onClick,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.A, {
                        id: "theme.docs.versions.latestVersionLinkLabel",
                        description: "The label used for the latest version suggestion link label",
                        children: "latest version"
                    })
                })
            })
        },
        children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'
    });
}
function DocVersionBannerEnabled({ className, versionMetadata }) {
    const { siteConfig: { title: siteTitle } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.A)();
    const { pluginId } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useActivePlugin */.vT)({
        failfast: true
    });
    const getVersionMainDoc = (version)=>version.docs.find((doc)=>doc.id === version.mainDocId);
    const { savePreferredVersionName } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__/* .useDocsPreferredVersion */.g1)(pluginId);
    const { latestDocSuggestion, latestVersionSuggestion } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useDocVersionSuggestions */.HW)(pluginId);
    // Try to link to same doc in latest version (not always possible), falling
    // back to main doc of latest version
    const latestVersionSuggestedDoc = latestDocSuggestion ?? getVersionMainDoc(latestVersionSuggestion);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */.A)(className, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ThemeClassNames.docs.docVersionBanner */.G.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'),
        role: "alert",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BannerLabel, {
                    siteTitle: siteTitle,
                    versionMetadata: versionMetadata
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "margin-top--md",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LatestVersionSuggestionLabel, {
                    versionLabel: latestVersionSuggestion.label,
                    to: latestVersionSuggestedDoc.path,
                    onClick: ()=>savePreferredVersionName(latestVersionSuggestion.name)
                })
            })
        ]
    });
}
function DocVersionBanner({ className }) {
    const versionMetadata = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_9__/* .useDocsVersion */.r)();
    if (versionMetadata.banner) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocVersionBannerEnabled, {
            className: className,
            versionMetadata: versionMetadata
        });
    }
    return null;
}


}),
6122: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconHome)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function IconHome(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
            fill: "currentColor"
        })
    });
}


}),
29135: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TOCCollapsible)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(39836);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(87935);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(19333);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(43789);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tocCollapsibleButton":"tocCollapsibleButton_TO0P","tocCollapsibleButtonExpanded":"tocCollapsibleButtonExpanded_MG3E"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TOCCollapsibleCollapseButton({ collapsed, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        ...props,
        className: (0,clsx/* ["default"] */.A)('clean-btn', styles_module.tocCollapsibleButton, !collapsed && styles_module.tocCollapsibleButtonExpanded, props.className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* ["default"] */.A, {
            id: "theme.TOCCollapsible.toggleButtonLabel",
            description: "The label used by the button on the collapsible TOC component",
            children: "On this page"
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const TOCCollapsible_styles_module = ({"tocCollapsible":"tocCollapsible_ETCw","tocCollapsibleContent":"tocCollapsibleContent_vkbj","tocCollapsibleExpanded":"tocCollapsibleExpanded_sAul"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function TOCCollapsible({ toc, className, minHeadingLevel, maxHeadingLevel }) {
    const { collapsed, toggleCollapsed } = (0,Collapsible/* .useCollapsible */.u)({
        initialState: true
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* ["default"] */.A)(TOCCollapsible_styles_module.tocCollapsible, !collapsed && TOCCollapsible_styles_module.tocCollapsibleExpanded, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCCollapsibleCollapseButton, {
                collapsed: collapsed,
                onClick: toggleCollapsed
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapsible/* .Collapsible */.N, {
                lazy: true,
                className: TOCCollapsible_styles_module.tocCollapsibleContent,
                collapsed: collapsed,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCItems/* ["default"] */.A, {
                    toc: toc,
                    minHeadingLevel: minHeadingLevel,
                    maxHeadingLevel: maxHeadingLevel
                })
            })
        ]
    });
}


}),
19333: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TOCItems)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(77499);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function treeifyTOC(flatTOC) {
    const headings = flatTOC.map((heading)=>({
            ...heading,
            parentIndex: -1,
            children: []
        }));
    // Keep track of which previous index would be the current heading's direct
    // parent. Each entry <i> is the last index of the `headings` array at heading
    // level <i>. We will modify these indices as we iterate through all headings.
    // e.g. if an ### H3 was last seen at index 2, then prevIndexForLevel[3] === 2
    // indices 0 and 1 will remain unused.
    const prevIndexForLevel = Array(7).fill(-1);
    headings.forEach((curr, currIndex)=>{
        // Take the last seen index for each ancestor level. the highest index will
        // be the direct ancestor of the current heading.
        const ancestorLevelIndexes = prevIndexForLevel.slice(2, curr.level);
        curr.parentIndex = Math.max(...ancestorLevelIndexes);
        // Mark that curr.level was last seen at the current index.
        prevIndexForLevel[curr.level] = currIndex;
    });
    const rootNodes = [];
    // For a given parentIndex, add each Node into that parent's `children` array
    headings.forEach((heading)=>{
        const { parentIndex, ...rest } = heading;
        if (parentIndex >= 0) {
            headings[parentIndex].children.push(rest);
        } else {
            rootNodes.push(rest);
        }
    });
    return rootNodes;
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect. Memoized for performance.
 */ function useTreeifiedTOC(toc) {
    return useMemo(()=>treeifyTOC(toc), [
        toc
    ]);
}
function filterTOC({ toc, minHeadingLevel, maxHeadingLevel }) {
    function isValid(item) {
        return item.level >= minHeadingLevel && item.level <= maxHeadingLevel;
    }
    return toc.flatMap((item)=>{
        const filteredChildren = filterTOC({
            toc: item.children,
            minHeadingLevel,
            maxHeadingLevel
        });
        if (isValid(item)) {
            return [
                {
                    ...item,
                    children: filteredChildren
                }
            ];
        }
        return filteredChildren;
    });
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect, applying the `minHeadingLevel` and `maxHeadingLevel`.
 * Memoized for performance.
 *
 * **Important**: this is not the same as `useTreeifiedTOC(toc.filter(...))`,
 * because we have to filter the TOC after it has been treeified. This is mostly
 * to ensure that weird TOC structures preserve their semantics. For example, an
 * h3-h2-h4 sequence should not be treeified as an "h3 > h4" hierarchy with
 * min=3, max=4, but should rather be "[h3, h4]" (since the h2 heading has split
 * the two headings and they are not parent-children)
 */ function useFilteredAndTreeifiedTOC({ toc, minHeadingLevel, maxHeadingLevel }) {
    return (0,react.useMemo)(()=>filterTOC({
            toc: treeifyTOC(toc),
            minHeadingLevel,
            maxHeadingLevel
        }), [
        toc,
        minHeadingLevel,
        maxHeadingLevel
    ]);
} //# sourceMappingURL=tocUtils.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// TODO make the hardcoded theme-classic classnames configurable (or add them
// to ThemeClassNames?)
/**
 * If the anchor has no height and is just a "marker" in the DOM; we'll use the
 * parent (normally the link text) rect boundaries instead
 */ function getVisibleBoundingClientRect(element) {
    const rect = element.getBoundingClientRect();
    const hasNoHeight = rect.top === rect.bottom;
    if (hasNoHeight) {
        return getVisibleBoundingClientRect(element.parentNode);
    }
    return rect;
}
/**
 * Considering we divide viewport into 2 zones of each 50vh, this returns true
 * if an element is in the first zone (i.e., appear in viewport, near the top)
 */ function isInViewportTopHalf(boundingRect) {
    return boundingRect.top > 0 && boundingRect.bottom < window.innerHeight / 2;
}
function getAnchors({ minHeadingLevel, maxHeadingLevel }) {
    const selectors = [];
    for(let i = minHeadingLevel; i <= maxHeadingLevel; i += 1){
        selectors.push(`h${i}.anchor`);
    }
    return Array.from(document.querySelectorAll(selectors.join()));
}
function getActiveAnchor(anchors, { anchorTopOffset }) {
    // Naming is hard: The "nextVisibleAnchor" is the first anchor that appear
    // under the viewport top boundary. It does not mean this anchor is visible
    // yet, but if user continues scrolling down, it will be the first to become
    // visible
    const nextVisibleAnchor = anchors.find((anchor)=>{
        const boundingRect = getVisibleBoundingClientRect(anchor);
        return boundingRect.top >= anchorTopOffset;
    });
    if (nextVisibleAnchor) {
        const boundingRect = getVisibleBoundingClientRect(nextVisibleAnchor);
        // If anchor is in the top half of the viewport: it is the one we consider
        // "active" (unless it's too close to the top and and soon to be scrolled
        // outside viewport)
        if (isInViewportTopHalf(boundingRect)) {
            return nextVisibleAnchor;
        }
        // If anchor is in the bottom half of the viewport, or under the viewport,
        // we consider the active anchor is the previous one. This is because the
        // main text appearing in the user screen mostly belong to the previous
        // anchor. Returns null for the first anchor, see
        // https://github.com/facebook/docusaurus/issues/5318
        return anchors[anchors.indexOf(nextVisibleAnchor) - 1] ?? null;
    }
    // No anchor under viewport top (i.e. we are at the bottom of the page),
    // highlight the last anchor found
    return anchors[anchors.length - 1] ?? null;
}
function getLinkAnchorValue(link) {
    return decodeURIComponent(link.href.substring(link.href.indexOf('#') + 1));
}
function getLinks(linkClassName) {
    return Array.from(document.getElementsByClassName(linkClassName));
}
function getNavbarHeight() {
    // Not ideal to obtain actual height this way
    // Using TS ! (not ?) because otherwise a bad selector would be un-noticed
    return document.querySelector('.navbar').clientHeight;
}
function useAnchorTopOffsetRef() {
    const anchorTopOffsetRef = (0,react.useRef)(0);
    const { navbar: { hideOnScroll } } = (0,useThemeConfig/* .useThemeConfig */.p)();
    (0,react.useEffect)(()=>{
        anchorTopOffsetRef.current = hideOnScroll ? 0 : getNavbarHeight();
    }, [
        hideOnScroll
    ]);
    return anchorTopOffsetRef;
}
/**
 * Side-effect that applies the active class name to the TOC heading that the
 * user is currently viewing. Disabled when `config` is undefined.
 */ function useTOCHighlight(config) {
    const lastActiveLinkRef = (0,react.useRef)(undefined);
    const anchorTopOffsetRef = useAnchorTopOffsetRef();
    (0,react.useEffect)(()=>{
        if (!config) {
            // No-op, highlighting is disabled
            return ()=>{};
        }
        const { linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel } = config;
        function updateLinkActiveClass(link, active) {
            if (active) {
                if (lastActiveLinkRef.current && lastActiveLinkRef.current !== link) {
                    lastActiveLinkRef.current.classList.remove(linkActiveClassName);
                }
                link.classList.add(linkActiveClassName);
                lastActiveLinkRef.current = link;
            // link.scrollIntoView({block: 'nearest'});
            } else {
                link.classList.remove(linkActiveClassName);
            }
        }
        function updateActiveLink() {
            const links = getLinks(linkClassName);
            const anchors = getAnchors({
                minHeadingLevel,
                maxHeadingLevel
            });
            const activeAnchor = getActiveAnchor(anchors, {
                anchorTopOffset: anchorTopOffsetRef.current
            });
            const activeLink = links.find((link)=>activeAnchor && activeAnchor.id === getLinkAnchorValue(link));
            links.forEach((link)=>{
                updateLinkActiveClass(link, link === activeLink);
            });
        }
        document.addEventListener('scroll', updateActiveLink);
        document.addEventListener('resize', updateActiveLink);
        updateActiveLink();
        return ()=>{
            document.removeEventListener('scroll', updateActiveLink);
            document.removeEventListener('resize', updateActiveLink);
        };
    }, [
        config,
        anchorTopOffsetRef
    ]);
} //# sourceMappingURL=useTOCHighlight.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(12801);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/Tree.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


// Recursive component rendering the toc tree
function TOCItemTree({ toc, className, linkClassName, isChild }) {
    if (!toc.length) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        className: isChild ? undefined : className,
        children: toc.map((heading)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                        to: `#${heading.id}`,
                        className: linkClassName ?? undefined,
                        // Developer provided the HTML, so assume it's safe.
                        dangerouslySetInnerHTML: {
                            __html: heading.value
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCItemTree, {
                        isChild: true,
                        toc: heading.children,
                        className: className,
                        linkClassName: linkClassName
                    })
                ]
            }, heading.id))
    });
}
// Memo only the tree root is enough
/* ESM default export */ const Tree = (/*#__PURE__*/react.memo(TOCItemTree));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TOCItems({ toc, className = 'table-of-contents table-of-contents__left-border', linkClassName = 'table-of-contents__link', linkActiveClassName = undefined, minHeadingLevel: minHeadingLevelOption, maxHeadingLevel: maxHeadingLevelOption, ...props }) {
    const themeConfig = (0,useThemeConfig/* .useThemeConfig */.p)();
    const minHeadingLevel = minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
    const maxHeadingLevel = maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;
    const tocTree = useFilteredAndTreeifiedTOC({
        toc,
        minHeadingLevel,
        maxHeadingLevel
    });
    const tocHighlightConfig = (0,react.useMemo)(()=>{
        if (linkClassName && linkActiveClassName) {
            return {
                linkClassName,
                linkActiveClassName,
                minHeadingLevel,
                maxHeadingLevel
            };
        }
        return undefined;
    }, [
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel
    ]);
    useTOCHighlight(tocHighlightConfig);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tree, {
        toc: tocTree,
        className: className,
        linkClassName: linkClassName,
        ...props
    });
}


}),

}]);