"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["958"], {
"7097": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  b: function() { return DocProvider; },
  k: function() { return useDoc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* ESM import */var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1934);
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
 */ function DocProvider(param) {
    let { children, content } = param;
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
        throw new _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .ReactContextError */.i6('DocProvider');
    }
    return doc;
}


}),
"5872": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocBreadcrumbs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("7026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__("6171");
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
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Home/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function IconHome(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
            fill: "currentColor"
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"breadcrumbHomeIcon":"breadcrumbHomeIcon_YNFT"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






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
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconHome, {
                className: styles_module.breadcrumbHomeIcon
            })
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const DocBreadcrumbs_styles_module = ({"breadcrumbsContainer":"breadcrumbsContainer_Z_bl"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 









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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docBreadcrumbs */.k.docs.docBreadcrumbs, DocBreadcrumbs_styles_module.breadcrumbsContainer),
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.breadcrumbs.navAriaLabel',
            message: 'Breadcrumbs',
            description: 'The ARIA label for the breadcrumbs'
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
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
        })
    });
}


}),
"2119": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocItemFooter)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("7026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__("6171");
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__("7097");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("7670");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("3367");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function Tag(param) {
    let { permalink, label, count, description } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
        href: permalink,
        title: description,
        className: (0,clsx/* default */.Z)(styles_module.tag, count ? styles_module.tagWithCount : styles_module.tagRegular),
        children: [
            label,
            count && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: count
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const TagsListInline_styles_module = ({"tags":"tags_jXut","tag":"tag_QGVx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function TagsListInline(param) {
    let { tags } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
                    id: "theme.tags.tagsListLabel",
                    description: "The label alongside a tag list",
                    children: "Tags:"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: (0,clsx/* default */.Z)(TagsListInline_styles_module.tags, 'padding--none', 'margin-left--sm'),
                children: tags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        className: TagsListInline_styles_module.tag,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tag, {
                            ...tag
                        })
                    }, tag.permalink))
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js + 6 modules
var EditMetaRow = __webpack_require__("8042");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocItemFooter() {
    const { metadata } = (0,doc/* useDoc */.k)();
    const { editUrl, lastUpdatedAt, lastUpdatedBy, tags } = metadata;
    const canDisplayTagsRow = tags.length > 0;
    const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
    const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
    if (!canDisplayFooter) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docFooter */.k.docs.docFooter, 'docusaurus-mt-lg'),
        children: [
            canDisplayTagsRow && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (0,clsx/* default */.Z)('row margin-top--sm', ThemeClassNames/* ThemeClassNames,docs,docFooterTagsRow */.k.docs.docFooterTagsRow),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "col",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsListInline, {
                        tags: tags
                    })
                })
            }),
            canDisplayEditMetaRow && /*#__PURE__*/ (0,jsx_runtime.jsx)(EditMetaRow/* default */.Z, {
                className: (0,clsx/* default */.Z)('margin-top--sm', ThemeClassNames/* ThemeClassNames,docs,docFooterEditMetaRow */.k.docs.docFooterEditMetaRow),
                editUrl: editUrl,
                lastUpdatedAt: lastUpdatedAt,
                lastUpdatedBy: lastUpdatedBy
            })
        ]
    });
}


}),
"4813": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocItemPaginator)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__("7097");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("7670");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("7026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("3367");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function PaginatorNavLink(props) {
    const { permalink, title, subLabel, isNext } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
        className: (0,clsx/* default */.Z)('pagination-nav__link', isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'),
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
    const { previous, next } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: "pagination-nav docusaurus-mt-lg",
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.paginator.navAriaLabel',
            message: 'Docs pages',
            description: 'The ARIA label for the docs pagination'
        }),
        children: [
            previous && /*#__PURE__*/ (0,jsx_runtime.jsx)(PaginatorNavLink, {
                ...previous,
                subLabel: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
                    id: "theme.docs.paginator.previous",
                    description: "The label used to navigate to the previous doc",
                    children: "Previous"
                })
            }),
            next && /*#__PURE__*/ (0,jsx_runtime.jsx)(PaginatorNavLink, {
                ...next,
                subLabel: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
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
    const { metadata } = (0,doc/* useDoc */.k)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocPaginator, {
        previous: metadata.previous,
        next: metadata.next
    });
}


}),
"2456": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return DocItemTOCDesktop; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6171);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7097);
/* ESM import */var _theme_TOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9521);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocItemTOCDesktop() {
    const { toc, frontMatter } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useDoc */.k)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TOC__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
        toc: toc,
        minHeadingLevel: frontMatter.toc_min_heading_level,
        maxHeadingLevel: frontMatter.toc_max_heading_level,
        className: _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .ThemeClassNames.docs.docTocDesktop */.k.docs.docTocDesktop
    });
}


}),
"8070": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocItemTOCMobile)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("7026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__("6171");
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__("7097");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js + 3 modules
var TOCCollapsible = __webpack_require__("8698");
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
    const { toc, frontMatter } = (0,doc/* useDoc */.k)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCCollapsible/* default */.Z, {
        toc: toc,
        minHeadingLevel: frontMatter.toc_min_heading_level,
        maxHeadingLevel: frontMatter.toc_max_heading_level,
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docTocMobile */.k.docs.docTocMobile, styles_module.tocMobile)
    });
}


}),
"7509": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__("9258");
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__("7097");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Metadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocItemMetadata() {
    const { metadata, frontMatter, assets } = (0,doc/* useDoc */.k)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.d, {
        title: metadata.title,
        description: metadata.description,
        keywords: frontMatter.keywords,
        image: assets.image ?? frontMatter.image
    });
}

// EXTERNAL MODULE: ./src/theme/DocItem/Layout/index.js + 4 modules
var Layout = __webpack_require__("7548");
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(doc/* DocProvider */.b, {
        content: props.content,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.FG, {
            className: docHtmlClassName,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DocItemMetadata, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXComponent, {})
                })
            ]
        })
    });
}


}),
"1987": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return DocVersionBadge; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7026);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7670);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6171);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9873);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocVersionBadge(param) {
    let { className } = param;
    const versionMetadata = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useDocsVersion */.E)();
    if (versionMetadata.badge) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z)(className, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ThemeClassNames.docs.docVersionBadge */.k.docs.docVersionBadge, 'badge badge--secondary'),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
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
"9548": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return DocVersionBanner; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7026);
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7262);
/* ESM import */var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3367);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7670);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8854);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6171);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7137);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9873);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 








function UnreleasedVersionLabel(param) {
    let { siteTitle, versionMetadata } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z, {
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
function UnmaintainedVersionLabel(param) {
    let { siteTitle, versionMetadata } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z, {
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
function LatestVersionSuggestionLabel(param) {
    let { versionLabel, to, onClick } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z, {
        id: "theme.docs.versions.latestVersionSuggestionLabel",
        description: "The label used to tell the user to check the latest version",
        values: {
            versionLabel,
            latestVersionLink: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z, {
                    to: to,
                    onClick: onClick,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z, {
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
function DocVersionBannerEnabled(param) {
    let { className, versionMetadata } = param;
    const { siteConfig: { title: siteTitle } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z)();
    const { pluginId } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useActivePlugin */.gA)({
        failfast: true
    });
    const getVersionMainDoc = (version)=>version.docs.find((doc)=>doc.id === version.mainDocId);
    const { savePreferredVersionName } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__/* .useDocsPreferredVersion */.J)(pluginId);
    const { latestDocSuggestion, latestVersionSuggestion } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useDocVersionSuggestions */.Jo)(pluginId);
    // Try to link to same doc in latest version (not always possible), falling
    // back to main doc of latest version
    const latestVersionSuggestedDoc = latestDocSuggestion ?? getVersionMainDoc(latestVersionSuggestion);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */.Z)(className, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ThemeClassNames.docs.docVersionBanner */.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'),
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
function DocVersionBanner(param) {
    let { className } = param;
    const versionMetadata = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_9__/* .useDocsVersion */.E)();
    if (versionMetadata.banner) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocVersionBannerEnabled, {
            className: className,
            versionMetadata: versionMetadata
        });
    }
    return null;
}


}),
"8698": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TOCCollapsible)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("7026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__("6850");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__("6643");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("7670");
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




function TOCCollapsibleCollapseButton(param) {
    let { collapsed, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        ...props,
        className: (0,clsx/* default */.Z)('clean-btn', styles_module.tocCollapsibleButton, !collapsed && styles_module.tocCollapsibleButtonExpanded, props.className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
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






function TOCCollapsible(param) {
    let { toc, className, minHeadingLevel, maxHeadingLevel } = param;
    const { collapsed, toggleCollapsed } = (0,Collapsible/* useCollapsible */.u)({
        initialState: true
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.Z)(TOCCollapsible_styles_module.tocCollapsible, !collapsed && TOCCollapsible_styles_module.tocCollapsibleExpanded, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCCollapsibleCollapseButton, {
                collapsed: collapsed,
                onClick: toggleCollapsed
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapsible/* Collapsible */.z, {
                lazy: true,
                className: TOCCollapsible_styles_module.tocCollapsibleContent,
                collapsed: collapsed,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCItems/* default */.Z, {
                    toc: toc,
                    minHeadingLevel: minHeadingLevel,
                    maxHeadingLevel: maxHeadingLevel
                })
            })
        ]
    });
}


}),

}]);