"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["493"], {
"3219": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("7026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__("9258");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__("6171");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 69 modules
var Layout = __webpack_require__("35");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js + 63 modules
var MDXContent = __webpack_require__("512");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__("9521");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/index.js + 3 modules
var ContentVisibility = __webpack_require__("7624");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js + 6 modules
var EditMetaRow = __webpack_require__("8042");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"mdxPageWrapper":"mdxPageWrapper_j9I6"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 









function MDXPage(props) {
    const { content: MDXPageContent } = props;
    const { metadata, assets } = MDXPageContent;
    const { title, editUrl, description, frontMatter, lastUpdatedBy, lastUpdatedAt } = metadata;
    const { keywords, wrapperClassName, hide_table_of_contents: hideTableOfContents } = frontMatter;
    const image = assets.image ?? frontMatter.image;
    const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* HtmlClassNameProvider */.FG, {
        className: (0,clsx/* default */.Z)(wrapperClassName ?? ThemeClassNames/* ThemeClassNames,wrapper,mdxPages */.k.wrapper.mdxPages, ThemeClassNames/* ThemeClassNames,page,mdxPage */.k.page.mdxPage),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.d, {
                    title: title,
                    description: description,
                    keywords: keywords,
                    image: image
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                    className: "container container--fluid margin-vert--lg",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (0,clsx/* default */.Z)('row', styles_module.mdxPageWrapper),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (0,clsx/* default */.Z)('col', !hideTableOfContents && 'col--8'),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentVisibility/* default */.Z, {
                                        metadata: metadata
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("article", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXContent/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXPageContent, {})
                                        })
                                    }),
                                    canDisplayEditMetaRow && /*#__PURE__*/ (0,jsx_runtime.jsx)(EditMetaRow/* default */.Z, {
                                        className: (0,clsx/* default */.Z)('margin-top--sm', ThemeClassNames/* ThemeClassNames,pages,pageFooterEditMetaRow */.k.pages.pageFooterEditMetaRow),
                                        editUrl: editUrl,
                                        lastUpdatedAt: lastUpdatedAt,
                                        lastUpdatedBy: lastUpdatedBy
                                    })
                                ]
                            }),
                            !hideTableOfContents && MDXPageContent.toc.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col col--2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TOC/* default */.Z, {
                                    toc: MDXPageContent.toc,
                                    minHeadingLevel: frontMatter.toc_min_heading_level,
                                    maxHeadingLevel: frontMatter.toc_max_heading_level
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}


}),

}]);