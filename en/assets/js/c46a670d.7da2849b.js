"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["19481"], {
18563: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_linkpass_credentials_mdx_c46_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-linkpass-credentials-mdx-c46.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_linkpass_credentials_mdx_c46_namespaceObject = JSON.parse('{"id":"platform/biostar_air/linkpass-credentials","title":"LinkPass Credentials","description":"Learn how to issue and manage LinkPass credentials for temporary users without the app, such as guest access and deliveries, through BioStar Air\'s cloud-based door control.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/linkpass-credentials.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/linkpass-credentials","permalink":"/docs/en/platform/biostar_air/linkpass-credentials","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/linkpass-credentials.mdx","tags":[],"version":"current","frontMatter":{"id":"linkpass-credentials","title":"LinkPass Credentials","description":"Learn how to issue and manage LinkPass credentials for temporary users without the app, such as guest access and deliveries, through BioStar Air\'s cloud-based door control.","keywords":["LinkPass","Credentials","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"User Card and Credential Types","permalink":"/docs/en/platform/biostar_air/user-card-types"},"next":{"title":"Device Management","permalink":"/docs/en/platform/biostar_air/manage-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/linkpass-credentials.mdx


const frontMatter = {
	id: 'linkpass-credentials',
	title: 'LinkPass Credentials',
	description: 'Learn how to issue and manage LinkPass credentials for temporary users without the app, such as guest access and deliveries, through BioStar Air\'s cloud-based door control.',
	keywords: [
		'LinkPass',
		'Credentials',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Step-by-step guide",
  "id": "stepBystepGuide",
  "level": 2
}, {
  "value": "How users use LinkPass",
  "id": "how-users-use-linkpass",
  "level": 2
}, {
  "value": "Notes",
  "id": "reference",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirEdit, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "LinkPass is a mobile credential that can be used in BioStar Air without an app. Administrators can grant users access without installing an app or using BLE or NFC. Because LinkPass operates through the BioStar Air cloud and is activated via a secure web link, it is ideal for customer entry, deliveries, or low-security entrances such as parking gates and lobbies."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stepBystepGuide",
      children: "Step-by-step guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Log in to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com/login",
            children: "BioStar Air website"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Navigate to the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_edit_header",
            product: "air"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_form_header",
            product: "air"
          }), " screen using one of the following methods."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select an existing user in the list, and then click ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " at the top right."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_btn",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_btn",
                product: "air"
              }), " at the top right of the screen."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "credential_detail",
            product: "air"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enable the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input20",
            product: "air"
          }), " option."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-user-credential-credential-type-web.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_option4",
            product: "air"
          }), " checkbox."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter a unique ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "email address"
          }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "phone number"
          }), " in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input8",
            product: "air"
          }), " where the user can receive the credential link."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-linkpass-credential.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the appropriate ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column6",
            product: "air"
          }), ", and set the user's ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column3",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_card_activate_btn",
            product: "air"
          }), " to issue the credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Send the user an invitation containing the unique LinkPass URL by email or SMS."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-users-use-linkpass",
      children: "How users use LinkPass"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "On a mobile device, open the LinkPass URL in the email or SMS."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The web page displays all doors assigned to the user, and each door has ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "web_card_preview_button1",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "web_card_preview_button1",
            product: "air"
          }), " to open the door by sending a cloud-based unlock command to the reader."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "LinkPass does not require Bluetooth or NFC communication."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reference",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Credential scope"
          }), ": A LinkPass credential grants access to the same doors as the user's other assigned credentials. Therefore, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "do not issue a LinkPass credential to users with access to secure areas"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No app required"
          }), ": LinkPass works through a web browser, so it does not need a mobile app, Bluetooth, or NFC communication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cloud-based access"
          }), ": LinkPass commands are sent through the BioStar Air cloud and can be activated from anywhere with an internet connection. It does not share or track location."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reader connectivity"
          }), ": The door reader must be online and connected to BioStar Air for LinkPass to work properly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Recommended use cases"
          }), ": LinkPass is suitable for temporary visitors, deliveries, and low-security areas such as lobbies or parking gates."]
        }), "\n"]
      }), "\n"]
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