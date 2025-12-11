"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["90935"], {
47005: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_card_manage_mdx_ed6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-credential-card-manage-mdx-ed6.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_card_manage_mdx_ed6_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-credential-card-manage","title":"Manage Cards","description":"This guide explains how to check card issuance status, change Wiegand card data format, and manage the deletion history for CSN mobile cards.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-card-manage.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-credential-card-manage","permalink":"/en/platform/biostar_x/settings-credential-card-manage","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-credential-card-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-credential-card-manage","title":"Manage Cards","description":"This guide explains how to check card issuance status, change Wiegand card data format, and manage the deletion history for CSN mobile cards.","keywords":["card","Manage"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Manage Credentials","permalink":"/en/platform/biostar_x/settings-credential-manage"},"next":{"title":"Set Wiegand Card Format","permalink":"/en/platform/biostar_x/settings-credential-wiegand-format"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-card-manage.mdx


const frontMatter = {
	id: 'settings-credential-card-manage',
	title: 'Manage Cards',
	description: 'This guide explains how to check card issuance status, change Wiegand card data format, and manage the deletion history for CSN mobile cards.',
	keywords: [
		'card',
		'Manage'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Card Management",
  "id": "card-management",
  "level": 2
}, {
  "value": "Change Wiegand card data format",
  "id": "change-wiegand-card-data-format",
  "level": 2
}, {
  "value": "CSN Mobile Card Deletion Management Guidelines",
  "id": "csn-mobile-card-deletion-management-guidelines",
  "level": 2
}, {
  "value": "Separate management of deleted CSN mobile cards",
  "id": "separate-management-of-deleted-csn-mobile-cards",
  "level": 3
}, {
  "value": "Preventing reissuance of deleted card IDs",
  "id": "preventing-reissuance-of-deleted-card-ids",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "You can check the issuance status of the card, change the Wiegand card data format, and manage the deletion history of CSN mobile cards."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "card-management",
      children: "Card Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.card"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You can see the enrolled cards on the card list screen."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-credentail-card.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Click the issuance status on the left side of the screen to filter by card issuance status. The card issuance statuses are as follows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.unassignedCard",
            product: "2"
          }), ": Card that is not assigned to any user."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.assignedCard",
            product: "2"
          }), ": Card assigned to a specific user. You can check the ID and name of the assigned user on the card list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.blacklistCard",
            product: "2"
          }), ": Card registered on the blacklist. The cardholder cannot authenticate for access."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.deletedCsnMobileCard",
            product: "2"
          }), ": Deleted mobile access card."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you have blocked a user's card, you can check the card information in the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.blacklistCard",
          product: "2"
        }), " list. To unblock, select the desired card and click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.unblocked",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "change-wiegand-card-data-format",
      children: "Change Wiegand card data format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the Wiegand card data format in use all at once."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Changing the data format of cards already assigned to users will also occur, so be cautious."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.card"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcMoreW, {}), " at the top right of the card list and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.more.changeDataFormat",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-card-change-card-type-btn.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.changeDataFormat.title",
            product: "2"
          }), " window appears, select the card data format you want to change from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.changeDataFormat.currentType",
            product: "2"
          }), " list."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-card-change-data-format.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired card data format from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.changeDataFormat.targetType",
            product: "2"
          }), " list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " to change the card data format."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csn-mobile-card-deletion-management-guidelines",
      children: "CSN Mobile Card Deletion Management Guidelines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When using CSN mobile cards integrated with the Airfob Portal Regular Site in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", if a user deletes a card, the same card ID could be reissued to another user. However, this could lead to an issue where the original cardholder could still access the premises even after the card has been reissued."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To address this issue, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " provides the feature to manage deletion history after deleting CSN mobile cards."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "separate-management-of-deleted-csn-mobile-cards",
      children: "Separate management of deleted CSN mobile cards"
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
      src: "/img/biostarx-settings-credentail-mobile-removed-card.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "preventing-reissuance-of-deleted-card-ids",
      children: "Preventing reissuance of deleted card IDs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If there is a history of deletion for a CSN mobile card, the system will prevent that card ID from being reissued to another user."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you wish to issue a card with a deleted card ID, you can only do so after excluding the corresponding CSN mobile card from the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.deletedCsnMobileCard",
        product: "2"
      }), " list."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-credentail-mobile-card-exclude.png"
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
    ...(0,lib/* .useMDXComponents */.R)(),
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
84429: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
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