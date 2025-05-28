"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9914"], {
4100: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (DocSidebarItemCategory)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7026);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5346);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(140);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7455);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4681);
/* ESM import */var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9246);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9369);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1298);
/* ESM import */var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3012);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6025);
/* ESM import */var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7227);
/* ESM import */var _theme_DocSidebarItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9818);










// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory(param) {
    let { isActive, collapsed, updateCollapsed } = param;
    const wasActive = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .usePrevious */.D9)(isActive);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
    const isBrowser = (0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (item.href && !item.linkUnlisted) {
            return item.href;
        }
        // In these cases, it's not necessary to render a fallback
        // We skip the "findFirstCategoryLink" computation
        if (isBrowser || !item.collapsible) {
            return undefined;
        }
        return (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_7__/* .findFirstSidebarItemLink */.LM)(item);
    }, [
        item,
        isBrowser
    ]);
}
function CollapseButton(param) {
    let { collapsed, categoryLabel, onClick } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        "aria-label": collapsed ? (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */.I)({
            id: 'theme.DocSidebarItem.expandCategoryAriaLabel',
            message: "Expand sidebar category '{label}'",
            description: 'The ARIA label to expand the sidebar category'
        }, {
            label: categoryLabel
        }) : (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */.I)({
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
    const { docs: { sidebar: { autoCollapseCategories } } } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .useThemeConfig */.L)();
    const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
    const isActive = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_7__/* .isActiveSidebarItem */._F)(item, activePath);
    const isCurrentPage = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_9__/* .isSamePath */.Mg)(href, activePath);
    const { collapsed, setCollapsed } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .useCollapsible */.u)({
        // Active categories are always initialized as expanded. The default
        // (`item.collapsed`) is only used for non-active categories.
        initialState: ()=>{
            if (!collapsible) {
                return false;
            }
            return isActive ? false : item.collapsed;
        }
    });
    const { expandedItem, setExpandedItem } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_11__/* .useDocSidebarItemsExpandedState */.f)();
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */.Z)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_13__/* .ThemeClassNames.docs.docSidebarItemCategory */.k.docs.docSidebarItemCategory, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_13__/* .ThemeClassNames.docs.docSidebarItemCategoryLevel */.k.docs.docSidebarItemCategoryLevel(level), 'menu__list-item', {
            'menu__list-item--collapsed': collapsed
        }, className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */.Z)('menu__list-item-collapsible', {
                    'menu__list-item-collapsible--active': isCurrentPage
                }),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */.Z)('menu__link', {
                            'menu__link--sublist': collapsible,
                            'menu__link--sublist-caret': !href && collapsible,
                            'menu__link--active': isActive
                        }),
                        onClick: collapsible ? (e)=>{
                            onItemClick?.(item);
                            if (href) {
                                // if (isActive) {
                                //   e.preventDefault();
                                //   updateCollapsed();
                                // } else {
                                //   // When navigating to a new category, we always expand
                                //   // see https://github.com/facebook/docusaurus/issues/10854#issuecomment-2609616182
                                //   updateCollapsed(false);
                                // }
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
                    href && collapsible && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CollapseButton, {
                        collapsed: collapsed,
                        categoryLabel: label,
                        onClick: (e)=>{
                            e.preventDefault();
                            updateCollapsed();
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .Collapsible */.z, {
                lazy: true,
                as: "ul",
                className: "menu__list",
                collapsed: collapsed,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_DocSidebarItems__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */.Z, {
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


}),

}]);