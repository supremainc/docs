"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2921"], {
1652: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_card_csn_mobile_mdx_085_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-credential-card-csn-mobile-mdx-085.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_card_csn_mobile_mdx_085_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-credential-card-csn-mobile","title":"CSN Mobile Card Deletion Management Guidelines","description":"Provides the feature to manage deletion history after deleting CSN mobile cards.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-card-csn-mobile.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-credential-card-csn-mobile","permalink":"/docs/en/platform/biostar_x/settings-credential-card-csn-mobile","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-credential-card-csn-mobile.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-credential-card-csn-mobile","title":"CSN Mobile Card Deletion Management Guidelines","description":"Provides the feature to manage deletion history after deleting CSN mobile cards.","keywords":["Mobile","CSN","Card","Settings"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Wiegand 카드 데이터 형식 변경하기","permalink":"/docs/en/platform/biostar_x/settings-credential-card-change-data-format"},"next":{"title":"Directory Integration Settings","permalink":"/docs/en/platform/biostar_x/settings-diretory-integration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-card-csn-mobile.mdx


const frontMatter = {
	id: 'settings-credential-card-csn-mobile',
	title: 'CSN Mobile Card Deletion Management Guidelines',
	description: 'Provides the feature to manage deletion history after deleting CSN mobile cards.',
	keywords: [
		'Mobile',
		'CSN',
		'Card',
		'Settings'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Separate Management of Deleted CSN Mobile Cards",
  "id": "separate-management-of-deleted-csn-mobile-cards",
  "level": 2
}, {
  "value": "Preventing Reissuance of Deleted Card IDs",
  "id": "preventing-reissuance-of-deleted-card-ids",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    p: "p",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "When using CSN mobile cards integrated with the Airpop Portal Regular Site in BioStar 2, if a user deletes a card, the same card ID could be reissued to another user. However, this could lead to an issue where the original cardholder could still access the premises even after the card has been reissued."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To address this issue, provides the feature to manage deletion history after deleting CSN mobile cards."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "separate-management-of-deleted-csn-mobile-cards",
      children: "Separate Management of Deleted CSN Mobile Cards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deleted CSN mobile cards are recorded in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.setting",
        product: "2"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.card",
        product: "2"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.deletedCsnMobileCard",
        product: "2"
      }), " list. In this list, you can view the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.cardType",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.cardList.th.cardFormat",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.cardId",
        product: "2"
      }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.lastCardHolder",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-298-deleted-csn-mobile-card.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preventing-reissuance-of-deleted-card-ids",
      children: "Preventing Reissuance of Deleted Card IDs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If there is a history of deletion for a CSN mobile card, the system will prevent that card ID from being reissued to another user."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-298-deleted-csn-mobile-card-1.png",
      className: "none",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To reissue a card with a deleted card ID, the corresponding CSN mobile card must first be removed from the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.deletedCsnMobileCard",
        product: "2"
      }), " list."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-deleted-csn-mobile-card-2.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["CSN mobile cards included in the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.deletedCsnMobileCard",
          product: "2"
        }), " list cannot be deleted from the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.unassignedCard",
          product: "2"
        }), " list."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To delete a card from the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.unassignedCard",
          product: "2"
        }), " list, first remove the card from the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.deletedCsnMobileCard",
          product: "2"
        }), " list and then proceed with the deletion."]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


}),

}]);