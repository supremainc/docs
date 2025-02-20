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
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
var MDXContent = __webpack_require__("4430");
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
"2475": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Admonition)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/admonitionUtils.js
var admonitionUtils = __webpack_require__("1899");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("7026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("7670");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__("6171");
;// CONCATENATED MODULE: ./src/theme/Admonition/Layout/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"admonition":"admonition_Gfwi","admonitionHeading":"admonitionHeading_f1Ed","admonitionIcon":"admonitionIcon_kpSf","admonitionContent":"admonitionContent_UjKb"});
;// CONCATENATED MODULE: ./src/theme/Admonition/Layout/index.js





function AdmonitionContainer(param) {
    let { type, className, children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,common,admonition */.k.common.admonition, ThemeClassNames/* ThemeClassNames,common,admonitionType */.k.common.admonitionType(type), styles_module.admonition, className),
        children: children
    });
}
function AdmonitionHeading(param) {
    let { icon, title } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: styles_module.admonitionHeading,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: styles_module.admonitionIcon,
                children: icon
            }),
            title
        ]
    });
}
function AdmonitionContent(param) {
    let { children } = param;
    return children ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: styles_module.admonitionContent,
        children: children
    }) : null;
}
function AdmonitionLayout(props) {
    const { type, icon, title, children, className } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(AdmonitionContainer, {
        type: type,
        className: className,
        children: [
            title || icon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionHeading, {
                title: title,
                icon: icon
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionContent, {
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/theme/Admonition/Icon/Note.js


function AdmonitionIconNote(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 14 16",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
        })
    });
}

;// CONCATENATED MODULE: ./src/theme/Admonition/Type/Note.js






const infimaClassName = 'alert alert--secondary';
const defaultProps = {
    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionIconNote, {}),
    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.admonition.note",
        description: "The default label used for the Note admonition (:::note)",
        children: "note"
    })
};
function AdmonitionTypeNote(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionLayout, {
        ...defaultProps,
        ...props,
        className: (0,clsx/* default */.Z)(infimaClassName, props.className),
        children: props.children
    });
}

;// CONCATENATED MODULE: ./src/theme/Admonition/Icon/Tip.js


function AdmonitionIconTip(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 12 16",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
        })
    });
}

;// CONCATENATED MODULE: ./src/theme/Admonition/Type/Tip.js






const Tip_infimaClassName = 'alert alert--success';
const Tip_defaultProps = {
    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionIconTip, {}),
    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.admonition.tip",
        description: "The default label used for the Tip admonition (:::tip)",
        children: "tip"
    })
};
function AdmonitionTypeTip(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionLayout, {
        ...Tip_defaultProps,
        ...props,
        className: (0,clsx/* default */.Z)(Tip_infimaClassName, props.className),
        children: props.children
    });
}

;// CONCATENATED MODULE: ./src/theme/Admonition/Icon/Info.js


function AdmonitionIconInfo(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 14 16",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
        })
    });
}

;// CONCATENATED MODULE: ./src/theme/Admonition/Type/Info.js






const Info_infimaClassName = 'alert alert--info';
const Info_defaultProps = {
    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionIconInfo, {}),
    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.admonition.info",
        description: "The default label used for the Info admonition (:::info)",
        children: "info"
    })
};
function AdmonitionTypeInfo(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionLayout, {
        ...Info_defaultProps,
        ...props,
        className: (0,clsx/* default */.Z)(Info_infimaClassName, props.className),
        children: props.children
    });
}

;// CONCATENATED MODULE: ./src/theme/Admonition/Icon/Danger.js


function AdmonitionIconDanger(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 12 16",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
        })
    });
}

;// CONCATENATED MODULE: ./src/theme/Admonition/Type/Warning.js






const Warning_infimaClassName = 'alert alert--danger';
const Warning_defaultProps = {
    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionIconDanger, {}),
    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.admonition.warning",
        description: "The default label used for the Warning admonition (:::warning)",
        children: "warning"
    })
};
function AdmonitionTypeWarning(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionLayout, {
        ...Warning_defaultProps,
        ...props,
        className: (0,clsx/* default */.Z)(Warning_infimaClassName, props.className),
        children: props.children
    });
}

;// CONCATENATED MODULE: ./src/theme/Admonition/Type/Danger.js






const Danger_infimaClassName = 'alert alert--danger';
const Danger_defaultProps = {
    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionIconDanger, {}),
    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.admonition.danger",
        description: "The default label used for the Danger admonition (:::danger)",
        children: "danger"
    })
};
function AdmonitionTypeDanger(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionLayout, {
        ...Danger_defaultProps,
        ...props,
        className: (0,clsx/* default */.Z)(Danger_infimaClassName, props.className),
        children: props.children
    });
}

;// CONCATENATED MODULE: ./src/theme/Admonition/Icon/Warning.js


function AdmonitionIconCaution(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
        })
    });
}

;// CONCATENATED MODULE: ./src/theme/Admonition/Type/Caution.js






const Caution_infimaClassName = 'alert alert--warning';
const Caution_defaultProps = {
    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionIconCaution, {}),
    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
        id: "theme.admonition.caution",
        description: "The default label used for the Caution admonition (:::caution)",
        children: "caution"
    })
};
// TODO remove before v4: Caution replaced by Warning
// see https://github.com/facebook/docusaurus/issues/7558
function AdmonitionTypeCaution(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionLayout, {
        ...Caution_defaultProps,
        ...props,
        className: (0,clsx/* default */.Z)(Caution_infimaClassName, props.className),
        children: props.children
    });
}

;// CONCATENATED MODULE: ./src/theme/Admonition/Types.js








const admonitionTypes = {
    note: AdmonitionTypeNote,
    tip: AdmonitionTypeTip,
    info: AdmonitionTypeInfo,
    warning: AdmonitionTypeWarning,
    danger: AdmonitionTypeDanger
};
// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases = {
    secondary: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionTypeNote, {
            title: "secondary",
            ...props
        }),
    important: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionTypeInfo, {
            title: "important",
            ...props
        }),
    success: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionTypeTip, {
            title: "success",
            ...props
        }),
    caution: AdmonitionTypeCaution
};
/* ESM default export */ const Types = ({
    ...admonitionTypes,
    ...admonitionAliases
});

;// CONCATENATED MODULE: ./src/theme/Admonition/index.js




function getAdmonitionTypeComponent(type) {
    const component = Types[type];
    if (component) {
        return component;
    }
    console.warn(`No admonition component found for admonition type "${type}". Using Info as fallback.`);
    return Types.info;
}
function Admonition(unprocessedProps) {
    const props = (0,admonitionUtils/* processAdmonitionProps */.X)(unprocessedProps);
    const AdmonitionTypeComponent = getAdmonitionTypeComponent(props.type);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AdmonitionTypeComponent, {
        ...props
    });
}


}),
"7457": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ theme_MDXComponents)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/index.js + 15 modules
var MDXComponents = __webpack_require__("5055");
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

;// CONCATENATED MODULE: ./src/components/Files/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Files_styles_module = ({"filetree":"filetree_c6T4","top":"top_ZAYt","type":"type_n_WQ","fileitem":"fileitem_PWvV","name":"name_iojM","ico":"ico_i25q","desc":"desc_hq9n"});
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
                className: className,
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
;// CONCATENATED MODULE: ./src/components/Columns/index.js


function Columns(param) {
    let { children, className, style } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "container center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (0,clsx/* default */.Z)('row', className),
            style: style,
            children: children
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Column/index.js


function Column(param) {
    let { children, className, style } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.Z)('col', className),
        style: style,
        children: children
    });
}

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
    DocCardList: DocCardList/* default */.Z,
    Columns: Columns,
    Column: Column
});


}),

}]);