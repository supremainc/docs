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