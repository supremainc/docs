"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3669"], {
63712: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  b: () => (DocProvider),
  k: () => (useDoc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85346);
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
82488: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  o: () => (useBreadcrumbsStructuredData)
});
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2933);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function useBreadcrumbsStructuredData(param) {
    let { breadcrumbs } = param;
    const { siteConfig } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */.Z)();
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
45427: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ContentVisibility)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(67026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(96025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(94819);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/translations/contentVisibilityTranslations.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function UnlistedBannerTitle() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.contentVisibility.unlistedBanner.title",
        description: "The unlisted content banner title",
        children: "Unlisted page"
    });
}
function UnlistedBannerMessage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.contentVisibility.unlistedBanner.message",
        description: "The unlisted content banner message",
        children: "This page is unlisted. Search engines will not index it, and only users having a direct link can access it."
    });
}
// TODO Docusaurus v4 breaking change (since it's v3 public theme-common API :/)
//  Move this to theme/ContentVisibility/Unlisted
function UnlistedMetadata() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Head/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
            name: "robots",
            content: "noindex, nofollow"
        })
    });
}
function DraftBannerTitle() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.contentVisibility.draftBanner.title",
        description: "The draft content banner title",
        children: "Draft page"
    });
}
function DraftBannerMessage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.contentVisibility.draftBanner.message",
        description: "The draft content banner message",
        children: "This page is a draft. It will only be visible in dev and be excluded from the production build."
    });
} //# sourceMappingURL=contentVisibilityTranslations.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(84681);
// EXTERNAL MODULE: ./src/theme/Admonition/index.js + 14 modules
var Admonition = __webpack_require__(79954);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/Draft/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function Draft(param) {
    let { className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Admonition/* default */.Z, {
        type: "caution",
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(DraftBannerTitle, {}),
        className: (0,clsx/* default */.Z)(className, ThemeClassNames/* ThemeClassNames,common,draftBanner */.k.common.draftBanner),
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




function UnlistedBanner(param) {
    let { className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Admonition/* default */.Z, {
        type: "caution",
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlistedBannerTitle, {}),
        className: (0,clsx/* default */.Z)(className, ThemeClassNames/* ThemeClassNames,common,unlistedBanner */.k.common.unlistedBanner),
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



function ContentVisibility(param) {
    let { metadata } = param;
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
27222: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocItemFooter)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(67026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(84681);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(63712);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(96025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(83012);
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
        rel: "tag",
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

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Edit_styles_module = ({"iconEdit":"iconEdit_Z9Sw"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function IconEdit(param) {
    let { className, ...restProps } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        fill: "currentColor",
        height: "20",
        width: "20",
        viewBox: "0 0 40 40",
        className: (0,clsx/* default */.Z)(Edit_styles_module.iconEdit, className),
        "aria-hidden": "true",
        ...restProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"
            })
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function EditThisPage(param) {
    let { editUrl } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
        to: editUrl,
        className: ThemeClassNames/* ThemeClassNames,common,editThisPage */.k.common.editThisPage,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconEdit, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
                id: "theme.common.editThisPage",
                description: "The link label to edit the current page",
                children: "Edit this page"
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2933);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function useCalendar() {
    const { i18n: { currentLocale, localeConfigs } } = (0,useDocusaurusContext/* default */.Z)();
    return localeConfigs[currentLocale].calendar;
}
function useDateTimeFormat() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.Z)();
    const calendar = useCalendar();
    return new Intl.DateTimeFormat(currentLocale, {
        calendar,
        ...options
    });
} //# sourceMappingURL=IntlUtils.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function LastUpdatedAtDate(param) {
    let { lastUpdatedAt } = param;
    const atDate = new Date(lastUpdatedAt);
    const dateTimeFormat = useDateTimeFormat({
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC'
    });
    const formattedLastUpdatedAt = dateTimeFormat.format(atDate);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.lastUpdated.atDate",
        description: "The words used to describe on which date a page has been last updated",
        values: {
            date: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("time", {
                    dateTime: atDate.toISOString(),
                    itemProp: "dateModified",
                    children: formattedLastUpdatedAt
                })
            })
        },
        children: ' on {date}'
    });
}
function LastUpdatedByUser(param) {
    let { lastUpdatedBy } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.lastUpdated.byUser",
        description: "The words used to describe by who the page has been last updated",
        values: {
            user: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                children: lastUpdatedBy
            })
        },
        children: ' by {user}'
    });
}
function LastUpdated(param) {
    let { lastUpdatedAt, lastUpdatedBy } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        className: ThemeClassNames/* ThemeClassNames,common,lastUpdated */.k.common.lastUpdated,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
                id: "theme.lastUpdated.lastUpdatedAtBy",
                description: "The sentence used to display when a page has been last updated, and by who",
                values: {
                    atDate: lastUpdatedAt ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LastUpdatedAtDate, {
                        lastUpdatedAt: lastUpdatedAt
                    }) : '',
                    byUser: lastUpdatedBy ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LastUpdatedByUser, {
                        lastUpdatedBy: lastUpdatedBy
                    }) : ''
                },
                children: 'Last updated{atDate}{byUser}'
            }),
             false && /*#__PURE__*/ 0
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const EditMetaRow_styles_module = ({"lastUpdated":"lastUpdated_JAkA"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function EditMetaRow(param) {
    let { className, editUrl, lastUpdatedAt, lastUpdatedBy } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.Z)('row', className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "col",
                children: editUrl && /*#__PURE__*/ (0,jsx_runtime.jsx)(EditThisPage, {
                    editUrl: editUrl
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (0,clsx/* default */.Z)('col', EditMetaRow_styles_module.lastUpdated),
                children: (lastUpdatedAt || lastUpdatedBy) && /*#__PURE__*/ (0,jsx_runtime.jsx)(LastUpdated, {
                    lastUpdatedAt: lastUpdatedAt,
                    lastUpdatedBy: lastUpdatedBy
                })
            })
        ]
    });
}

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
            canDisplayEditMetaRow && /*#__PURE__*/ (0,jsx_runtime.jsx)(EditMetaRow, {
                className: (0,clsx/* default */.Z)('margin-top--sm', ThemeClassNames/* ThemeClassNames,docs,docFooterEditMetaRow */.k.docs.docFooterEditMetaRow),
                editUrl: editUrl,
                lastUpdatedAt: lastUpdatedAt,
                lastUpdatedBy: lastUpdatedBy
            })
        ]
    });
}


}),
42223: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocItemPaginator)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(63712);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(67026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(96025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(83012);
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
    const { className, previous, next } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: (0,clsx/* default */.Z)(className, 'pagination-nav'),
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
        className: "docusaurus-mt-lg",
        previous: metadata.previous,
        next: metadata.next
    });
}


}),
39809: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocItemTOCDesktop)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(84681);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(63712);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(67026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(76365);
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
function TOC(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.Z)(styles_module.tableOfContents, 'thin-scrollbar', className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCItems/* default */.Z, {
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
    const { toc, frontMatter } = (0,doc/* useDoc */.k)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TOC, {
        toc: toc,
        minHeadingLevel: frontMatter.toc_min_heading_level,
        maxHeadingLevel: frontMatter.toc_max_heading_level,
        className: ThemeClassNames/* ThemeClassNames,docs,docTocDesktop */.k.docs.docTocDesktop
    });
}


}),
90097: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocItemTOCMobile)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(67026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(84681);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(63712);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js + 3 modules
var TOCCollapsible = __webpack_require__(35434);
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
52963: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(79741);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/doc.js
var doc = __webpack_require__(63712);
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

// EXTERNAL MODULE: ./src/theme/DocItem/Layout/index.js + 11 modules
var Layout = __webpack_require__(87028);
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
46035: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (DocVersionBadge)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67026);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96025);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84681);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68529);
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
59580: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (DocVersionBanner)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67026);
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2933);
/* ESM import */var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83012);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96025);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98057);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84681);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93896);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68529);
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
24244: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (IconHome)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
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
35434: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TOCCollapsible)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(67026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(57455);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(76365);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(96025);
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
76365: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TOCItems)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(30140);
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
function filterTOC(param) {
    let { toc, minHeadingLevel, maxHeadingLevel } = param;
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
 */ function useFilteredAndTreeifiedTOC(param) {
    let { toc, minHeadingLevel, maxHeadingLevel } = param;
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
function getAnchors(param) {
    let { minHeadingLevel, maxHeadingLevel } = param;
    const selectors = [];
    for(let i = minHeadingLevel; i <= maxHeadingLevel; i += 1){
        selectors.push(`h${i}.anchor`);
    }
    return Array.from(document.querySelectorAll(selectors.join()));
}
function getActiveAnchor(anchors, param) {
    let { anchorTopOffset } = param;
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
    const { navbar: { hideOnScroll } } = (0,useThemeConfig/* useThemeConfig */.L)();
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
var Link = __webpack_require__(83012);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/Tree.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


// Recursive component rendering the toc tree
function TOCItemTree(param) {
    let { toc, className, linkClassName, isChild } = param;
    if (!toc.length) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        className: isChild ? undefined : className,
        children: toc.map((heading)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
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




function TOCItems(param) {
    let { toc, className = 'table-of-contents table-of-contents__left-border', linkClassName = 'table-of-contents__link', linkActiveClassName = undefined, minHeadingLevel: minHeadingLevelOption, maxHeadingLevel: maxHeadingLevelOption, ...props } = param;
    const themeConfig = (0,useThemeConfig/* useThemeConfig */.L)();
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