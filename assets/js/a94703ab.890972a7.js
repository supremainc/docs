"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["9297"], {
"928": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocRoot)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("7026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__("5231");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__("6171");
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js
var docsUtils = __webpack_require__("6563");
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsSidebar.js
var docsSidebar = __webpack_require__("4684");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("7670");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__("4718");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__("7339");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useBackToTopButton.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


/** Wires the logic for the back to top button. */ function useBackToTopButton(param) {
    let { threshold } = param;
    const [shown, setShown] = (0,react.useState)(false);
    const isFocusedAnchor = (0,react.useRef)(false);
    const { startScroll, cancelScroll } = (0,scrollUtils/* useSmoothScrollTo */.Ct)();
    (0,scrollUtils/* useScrollPosition */.RF)((param, lastPosition)=>{
        let { scrollY: scrollTop } = param;
        const lastScrollTop = lastPosition?.scrollY;
        // Component is just being mounted. Not really a scroll event from the user.
        // Ignore it.
        if (!lastScrollTop) {
            return;
        }
        if (isFocusedAnchor.current) {
            // This scroll position change is triggered by navigating to an anchor.
            // Ignore it.
            isFocusedAnchor.current = false;
        } else if (scrollTop >= lastScrollTop) {
            // The user has scrolled down to "fight against" the animation. Cancel any
            // animation under progress.
            cancelScroll();
            setShown(false);
        } else if (scrollTop < threshold) {
            // Scrolled to the minimum position; hide the button.
            setShown(false);
        } else if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
            setShown(true);
        }
    });
    (0,useLocationChange/* useLocationChange */.S)((locationChangeEvent)=>{
        if (locationChangeEvent.location.hash) {
            isFocusedAnchor.current = true;
            setShown(false);
        }
    });
    return {
        shown,
        scrollToTop: ()=>startScroll(0)
    };
} //# sourceMappingURL=useBackToTopButton.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"backToTopButton":"backToTopButton_sjWU","backToTopButtonShow":"backToTopButtonShow_xfvO"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function BackToTopButton() {
    const { shown, scrollToTop } = useBackToTopButton({
        threshold: 300
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.BackToTopButton.buttonAriaLabel',
            message: 'Scroll back to top',
            description: 'The ARIA label for the back to top button'
        }),
        className: (0,clsx/* default */.Z)('clean-btn', ThemeClassNames/* ThemeClassNames,common,backToTopButton */.k.common.backToTopButton, styles_module.backToTopButton, shown && styles_module.backToTopButtonShow),
        type: "button",
        onClick: scrollToTop
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/accessibilityUtils.js
var accessibilityUtils = __webpack_require__("1481");
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__("6550");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__("7550");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__("6009");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js
var Logo = __webpack_require__("1660");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Arrow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function IconArrow(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "20",
        height: "20",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            fill: "#7a7a7a",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const CollapseButton_styles_module = ({"collapseSidebarButton":"collapseSidebarButton_PEFL","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_kv0_"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function CollapseButton(param) {
    let { onClick } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        title: (0,Translate/* translate */.I)({
            id: 'theme.docs.sidebar.collapseButtonTitle',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.sidebar.collapseButtonAriaLabel',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        className: (0,clsx/* default */.Z)('button button--secondary button--outline', CollapseButton_styles_module.collapseSidebarButton),
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconArrow, {
            className: CollapseButton_styles_module.collapseSidebarButtonIcon
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var announcementBar = __webpack_require__("1333");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__("1934");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docSidebarItemsExpandedState.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


const EmptyContext = Symbol('EmptyContext');
const Context = /*#__PURE__*/ react.createContext(EmptyContext);
/**
 * Should be used to wrap one sidebar category level. This provider syncs the
 * expanded states of all sibling categories, and categories can choose to
 * collapse itself if another one is expanded.
 */ function DocSidebarItemsExpandedStateProvider(param) {
    let { children } = param;
    const [expandedItem, setExpandedItem] = (0,react.useState)(null);
    const contextValue = (0,react.useMemo)(()=>({
            expandedItem,
            setExpandedItem
        }), [
        expandedItem
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Context.Provider, {
        value: contextValue,
        children: children
    });
}
function useDocSidebarItemsExpandedState() {
    const value = (0,react.useContext)(Context);
    if (value === EmptyContext) {
        throw new reactUtils/* ReactContextError */.i6('DocSidebarItemsExpandedStateProvider');
    }
    return value;
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__("6850");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__("3868");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("3367");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__("6735");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Category/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 









// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory(param) {
    let { isActive, collapsed, updateCollapsed } = param;
    const wasActive = (0,reactUtils/* usePrevious */.D9)(isActive);
    (0,react.useEffect)(()=>{
        const justBecameActive = isActive && !wasActive;
        if (justBecameActive && collapsed) {
            updateCollapsed(false);
        }
    }, [
        isActive,
        wasActive,
        collapsed,
        updateCollapsed
    ]);
}
/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */ function useCategoryHrefWithSSRFallback(item) {
    const isBrowser = (0,useIsBrowser/* default */.Z)();
    return (0,react.useMemo)(()=>{
        if (item.href && !item.linkUnlisted) {
            return item.href;
        }
        // In these cases, it's not necessary to render a fallback
        // We skip the "findFirstCategoryLink" computation
        if (isBrowser || !item.collapsible) {
            return undefined;
        }
        return (0,docsUtils/* findFirstSidebarItemLink */.LM)(item);
    }, [
        item,
        isBrowser
    ]);
}
function Category_CollapseButton(param) {
    let { collapsed, categoryLabel, onClick } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        "aria-label": collapsed ? (0,Translate/* translate */.I)({
            id: 'theme.DocSidebarItem.expandCategoryAriaLabel',
            message: "Expand sidebar category '{label}'",
            description: 'The ARIA label to expand the sidebar category'
        }, {
            label: categoryLabel
        }) : (0,Translate/* translate */.I)({
            id: 'theme.DocSidebarItem.collapseCategoryAriaLabel',
            message: "Collapse sidebar category '{label}'",
            description: 'The ARIA label to collapse the sidebar category'
        }, {
            label: categoryLabel
        }),
        "aria-expanded": !collapsed,
        type: "button",
        className: "clean-btn menu__caret",
        onClick: onClick
    });
}
function DocSidebarItemCategory(param) {
    let { item, onItemClick, activePath, level, index, ...props } = param;
    const { items, label, collapsible, className, href } = item;
    const { docs: { sidebar: { autoCollapseCategories } } } = (0,useThemeConfig/* useThemeConfig */.L)();
    const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
    const isActive = (0,docsUtils/* isActiveSidebarItem */._F)(item, activePath);
    const isCurrentPage = (0,routesUtils/* isSamePath */.Mg)(href, activePath);
    const { collapsed, setCollapsed } = (0,Collapsible/* useCollapsible */.u)({
        // Active categories are always initialized as expanded. The default
        // (`item.collapsed`) is only used for non-active categories.
        initialState: ()=>{
            if (!collapsible) {
                return false;
            }
            return isActive ? false : item.collapsed;
        }
    });
    const { expandedItem, setExpandedItem } = useDocSidebarItemsExpandedState();
    // Use this instead of `setCollapsed`, because it is also reactive
    const updateCollapsed = function() {
        let toCollapsed = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !collapsed;
        setExpandedItem(toCollapsed ? null : index);
        setCollapsed(toCollapsed);
    };
    useAutoExpandActiveCategory({
        isActive,
        collapsed,
        updateCollapsed
    });
    (0,react.useEffect)(()=>{
        if (collapsible && expandedItem != null && expandedItem !== index && autoCollapseCategories) {
            setCollapsed(true);
        }
    }, [
        collapsible,
        expandedItem,
        index,
        setCollapsed,
        autoCollapseCategories
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docSidebarItemCategory */.k.docs.docSidebarItemCategory, ThemeClassNames/* ThemeClassNames,docs,docSidebarItemCategoryLevel */.k.docs.docSidebarItemCategoryLevel(level), 'menu__list-item', {
            'menu__list-item--collapsed': collapsed
        }, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,clsx/* default */.Z)('menu__list-item-collapsible', {
                    'menu__list-item-collapsible--active': isCurrentPage
                }),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        className: (0,clsx/* default */.Z)('menu__link', {
                            'menu__link--sublist': collapsible,
                            'menu__link--sublist-caret': !href && collapsible,
                            'menu__link--active': isActive
                        }),
                        onClick: collapsible ? (e)=>{
                            onItemClick?.(item);
                            if (href) {
                                updateCollapsed(false);
                            } else {
                                e.preventDefault();
                                updateCollapsed();
                            }
                        } : ()=>{
                            onItemClick?.(item);
                        },
                        "aria-current": isCurrentPage ? 'page' : undefined,
                        role: collapsible && !href ? 'button' : undefined,
                        "aria-expanded": collapsible && !href ? !collapsed : undefined,
                        href: collapsible ? hrefWithSSRFallback ?? '#' : hrefWithSSRFallback,
                        ...props,
                        children: label
                    }),
                    href && collapsible && /*#__PURE__*/ (0,jsx_runtime.jsx)(Category_CollapseButton, {
                        collapsed: collapsed,
                        categoryLabel: label,
                        onClick: (e)=>{
                            e.preventDefault();
                            updateCollapsed();
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapsible/* Collapsible */.z, {
                lazy: true,
                as: "ul",
                className: "menu__list",
                collapsed: collapsed,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItems, {
                    items: items,
                    tabIndex: collapsed ? -1 : 0,
                    onItemClick: onItemClick,
                    activePath: activePath,
                    level: level + 1
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__("9999");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/index.js + 1 modules
var ExternalLink = __webpack_require__("9011");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Link_styles_module = ({"menuExternalLink":"menuExternalLink_NmtK"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 








function DocSidebarItemLink(param) {
    let { item, onItemClick, activePath, level, index, ...props } = param;
    const { href, label, className, autoAddBaseUrl } = item;
    const isActive = (0,docsUtils/* isActiveSidebarItem */._F)(item, activePath);
    const isInternalLink = (0,isInternalUrl/* default */.Z)(href);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docSidebarItemLink */.k.docs.docSidebarItemLink, ThemeClassNames/* ThemeClassNames,docs,docSidebarItemLinkLevel */.k.docs.docSidebarItemLinkLevel(level), 'menu__list-item', className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
            className: (0,clsx/* default */.Z)('menu__link', !isInternalLink && Link_styles_module.menuExternalLink, {
                'menu__link--active': isActive
            }),
            autoAddBaseUrl: autoAddBaseUrl,
            "aria-current": isActive ? 'page' : undefined,
            to: href,
            ...isInternalLink && {
                onClick: onItemClick ? ()=>onItemClick(item) : undefined
            },
            ...props,
            children: [
                label,
                !isInternalLink && /*#__PURE__*/ (0,jsx_runtime.jsx)(ExternalLink/* default */.Z, {})
            ]
        })
    }, label);
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Html_styles_module = ({"menuHtmlItem":"menuHtmlItem_M9Kj"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocSidebarItemHtml(param) {
    let { item, level, index } = param;
    const { value, defaultStyle, className } = item;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docSidebarItemLink */.k.docs.docSidebarItemLink, ThemeClassNames/* ThemeClassNames,docs,docSidebarItemLinkLevel */.k.docs.docSidebarItemLinkLevel(level), defaultStyle && [
            Html_styles_module.menuHtmlItem,
            'menu__list-item'
        ], className),
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: {
            __html: value
        }
    }, index);
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocSidebarItem(param) {
    let { item, ...props } = param;
    switch(item.type){
        case 'category':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItemCategory, {
                item: item,
                ...props
            });
        case 'html':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItemHtml, {
                item: item,
                ...props
            });
        case 'link':
        default:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItemLink, {
                item: item,
                ...props
            });
    }
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocSidebarItems_DocSidebarItems(param) {
    let { items, ...props } = param;
    const visibleItems = (0,docsUtils/* useVisibleSidebarItems */.f)(items, props.activePath);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItemsExpandedStateProvider, {
        children: visibleItems.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItem, {
                item: item,
                index: index,
                ...props
            }, index))
    });
}
// Optimize sidebar at each "level"
/* ESM default export */ const DocSidebarItems = (/*#__PURE__*/(0,react.memo)(DocSidebarItems_DocSidebarItems));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Content_styles_module = ({"menu":"menu_SIkG","menuWithAnnouncementBar":"menuWithAnnouncementBar_GW3s"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function useShowAnnouncementBar() {
    const { isActive } = (0,announcementBar/* useAnnouncementBar */.n)();
    const [showAnnouncementBar, setShowAnnouncementBar] = (0,react.useState)(isActive);
    (0,scrollUtils/* useScrollPosition */.RF)((param)=>{
        let { scrollY } = param;
        if (isActive) {
            setShowAnnouncementBar(scrollY === 0);
        }
    }, [
        isActive
    ]);
    return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent(param) {
    let { path, sidebar, className } = param;
    const showAnnouncementBar = useShowAnnouncementBar();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.sidebar.navAriaLabel',
            message: 'Docs sidebar',
            description: 'The ARIA label for the sidebar navigation'
        }),
        className: (0,clsx/* default */.Z)('menu thin-scrollbar', Content_styles_module.menu, showAnnouncementBar && Content_styles_module.menuWithAnnouncementBar, className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docSidebarMenu */.k.docs.docSidebarMenu, 'menu__list'),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItems, {
                items: sidebar,
                activePath: path,
                level: 1
            })
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Desktop_styles_module = ({"sidebar":"sidebar_njMd","sidebarWithHideableNavbar":"sidebarWithHideableNavbar_wUlq","sidebarHidden":"sidebarHidden_VK0M","sidebarLogo":"sidebarLogo_isFc"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function DocSidebarDesktop(param) {
    let { path, sidebar, onCollapse, isHidden } = param;
    const { navbar: { hideOnScroll }, docs: { sidebar: { hideable } } } = (0,useThemeConfig/* useThemeConfig */.L)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.Z)(Desktop_styles_module.sidebar, hideOnScroll && Desktop_styles_module.sidebarWithHideableNavbar, isHidden && Desktop_styles_module.sidebarHidden),
        children: [
            hideOnScroll && /*#__PURE__*/ (0,jsx_runtime.jsx)(Logo/* default */.Z, {
                tabIndex: -1,
                className: Desktop_styles_module.sidebarLogo
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarDesktopContent, {
                path: path,
                sidebar: sidebar
            }),
            hideable && /*#__PURE__*/ (0,jsx_runtime.jsx)(CollapseButton, {
                onClick: onCollapse
            })
        ]
    });
}
/* ESM default export */ const Desktop = (/*#__PURE__*/react.memo(DocSidebarDesktop));

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__("9018");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js
var navbarMobileSidebar = __webpack_require__("5870");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu = (param)=>{
    let { sidebar, path } = param;
    const mobileSidebar = (0,navbarMobileSidebar/* useNavbarMobileSidebar */.e)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docSidebarMenu */.k.docs.docSidebarMenu, 'menu__list'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItems, {
            items: sidebar,
            activePath: path,
            onItemClick: (item)=>{
                // Mobile sidebar should only be closed if the category has a link
                if (item.type === 'category' && item.href) {
                    mobileSidebar.toggle();
                }
                if (item.type === 'link') {
                    mobileSidebar.toggle();
                }
            },
            level: 1
        })
    });
};
function DocSidebarMobile(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(content/* NavbarSecondaryMenuFiller */.Zo, {
        component: DocSidebarMobileSecondaryMenu,
        props: props
    });
}
/* ESM default export */ const Mobile = (/*#__PURE__*/react.memo(DocSidebarMobile));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocSidebar(props) {
    const windowSize = (0,useWindowSize/* useWindowSize */.i)();
    // Desktop sidebar visible on hydration: need SSR rendering
    const shouldRenderSidebarDesktop = windowSize === 'desktop' || windowSize === 'ssr';
    // Mobile sidebar not visible on hydration: can avoid SSR rendering
    const shouldRenderSidebarMobile = windowSize === 'mobile';
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            shouldRenderSidebarDesktop && /*#__PURE__*/ (0,jsx_runtime.jsx)(Desktop, {
                ...props
            }),
            shouldRenderSidebarMobile && /*#__PURE__*/ (0,jsx_runtime.jsx)(Mobile, {
                ...props
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/ExpandButton/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const ExpandButton_styles_module = ({"expandButton":"expandButton_TmdG","expandButtonIcon":"expandButtonIcon_i1dp"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/ExpandButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocRootLayoutSidebarExpandButton(param) {
    let { toggleSidebar } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: ExpandButton_styles_module.expandButton,
        title: (0,Translate/* translate */.I)({
            id: 'theme.docs.sidebar.expandButtonTitle',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar'
        }),
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.sidebar.expandButtonAriaLabel',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar'
        }),
        tabIndex: 0,
        role: "button",
        onKeyDown: toggleSidebar,
        onClick: toggleSidebar,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconArrow, {
            className: ExpandButton_styles_module.expandButtonIcon
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Sidebar_styles_module = ({"docSidebarContainer":"docSidebarContainer_YfHR","docSidebarContainerHidden":"docSidebarContainerHidden_DPk8","sidebarViewport":"sidebarViewport_aRkj"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 








// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange(param) {
    let { children } = param;
    const sidebar = (0,docsSidebar/* useDocsSidebar */.V)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
        children: children
    }, sidebar?.name ?? 'noSidebar');
}
function DocRootLayoutSidebar(param) {
    let { sidebar, hiddenSidebarContainer, setHiddenSidebarContainer } = param;
    const { pathname } = (0,react_router/* useLocation */.TH)();
    const [hiddenSidebar, setHiddenSidebar] = (0,react.useState)(false);
    const toggleSidebar = (0,react.useCallback)(()=>{
        if (hiddenSidebar) {
            setHiddenSidebar(false);
        }
        // onTransitionEnd won't fire when sidebar animation is disabled
        // fixes https://github.com/facebook/docusaurus/issues/8918
        if (!hiddenSidebar && (0,accessibilityUtils/* prefersReducedMotion */.n)()) {
            setHiddenSidebar(true);
        }
        setHiddenSidebarContainer((value)=>!value);
    }, [
        setHiddenSidebarContainer,
        hiddenSidebar
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("aside", {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docSidebarContainer */.k.docs.docSidebarContainer, Sidebar_styles_module.docSidebarContainer, hiddenSidebarContainer && Sidebar_styles_module.docSidebarContainerHidden),
        onTransitionEnd: (e)=>{
            if (!e.currentTarget.classList.contains(Sidebar_styles_module.docSidebarContainer)) {
                return;
            }
            if (hiddenSidebarContainer) {
                setHiddenSidebar(true);
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ResetOnSidebarChange, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,clsx/* default */.Z)(Sidebar_styles_module.sidebarViewport, hiddenSidebar && Sidebar_styles_module.sidebarViewportHidden),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebar, {
                        sidebar: sidebar,
                        path: pathname,
                        onCollapse: toggleSidebar,
                        isHidden: hiddenSidebar
                    }),
                    hiddenSidebar && /*#__PURE__*/ (0,jsx_runtime.jsx)(DocRootLayoutSidebarExpandButton, {
                        toggleSidebar: toggleSidebar
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Main_styles_module = ({"docMainContainer":"docMainContainer_TBSr","docMainContainerEnhanced":"docMainContainerEnhanced_lQrH","docItemWrapperEnhanced":"docItemWrapperEnhanced_JWYK"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocRootLayoutMain(param) {
    let { hiddenSidebarContainer, children } = param;
    const sidebar = (0,docsSidebar/* useDocsSidebar */.V)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
        className: (0,clsx/* default */.Z)(Main_styles_module.docMainContainer, (hiddenSidebarContainer || !sidebar) && Main_styles_module.docMainContainerEnhanced),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (0,clsx/* default */.Z)('container padding-top--md padding-bottom--lg', Main_styles_module.docItemWrapper, hiddenSidebarContainer && Main_styles_module.docItemWrapperEnhanced),
            children: children
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Layout_styles_module = ({"docRoot":"docRoot_UBD9","docsWrapper":"docsWrapper_hBAB"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocRootLayout(param) {
    let { children } = param;
    const sidebar = (0,docsSidebar/* useDocsSidebar */.V)();
    const [hiddenSidebarContainer, setHiddenSidebarContainer] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: Layout_styles_module.docsWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BackToTopButton, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: Layout_styles_module.docRoot,
                children: [
                    sidebar && /*#__PURE__*/ (0,jsx_runtime.jsx)(DocRootLayoutSidebar, {
                        sidebar: sidebar.items,
                        hiddenSidebarContainer: hiddenSidebarContainer,
                        setHiddenSidebarContainer: setHiddenSidebarContainer
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocRootLayoutMain, {
                        hiddenSidebarContainer: hiddenSidebarContainer,
                        children: children
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NotFound/Content/index.js
var Content = __webpack_require__("1694");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocRoot(props) {
    const currentDocRouteMetadata = (0,docsUtils/* useDocRootMetadata */.SN)(props);
    if (!currentDocRouteMetadata) {
        // We only render the not found content to avoid a double layout
        // see https://github.com/facebook/docusaurus/pull/7966#pullrequestreview-1077276692
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Content/* default */.Z, {});
    }
    const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* HtmlClassNameProvider */.FG, {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,page,docsDocPage */.k.page.docsDocPage),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(docsSidebar/* DocsSidebarProvider */.b, {
            name: sidebarName,
            items: sidebarItems,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DocRootLayout, {
                children: docElement
            })
        })
    });
}


}),
"1694": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return NotFoundContent; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7026);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7670);
/* ESM import */var _theme_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6055);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function NotFoundContent(param) {
    let { className } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z)('container margin-vert--xl', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "row",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col col--6 col--offset-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z, {
                        as: "h1",
                        className: "hero__title",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
                            id: "theme.NotFound.title",
                            description: "The title of the 404 page",
                            children: "Page Not Found"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
                            id: "theme.NotFound.p1",
                            description: "The first paragraph of the 404 page",
                            children: "We could not find what you were looking for."
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
                            id: "theme.NotFound.p2",
                            description: "The 2nd paragraph of the 404 page",
                            children: "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."
                        })
                    })
                ]
            })
        })
    });
}


}),

}]);