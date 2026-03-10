"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["73705"], {
47872: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_site_additional_settings_mdx_509_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-site-additional-settings-mdx-509.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_site_additional_settings_mdx_509_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-additional-settings","title":"Configure Additional Features","description":"This guide explains how to enable and configure BioStar Air\'s additional features, such as QR code readers, IP camera integration, and webhooks.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/site-additional-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-additional-settings","permalink":"/docs/en/platform/biostar_air/site-additional-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-additional-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"site-additional-settings","title":"Configure Additional Features","description":"This guide explains how to enable and configure BioStar Air\'s additional features, such as QR code readers, IP camera integration, and webhooks.","keywords":["Additional Site Settings","Additional Settings"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Set Up Security","permalink":"/docs/en/platform/biostar_air/site-security-settings"},"next":{"title":"Manage Administrator Accounts and Roles","permalink":"/docs/en/platform/biostar_air/managing-administrators"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/site-additional-settings.mdx


const frontMatter = {
	id: 'site-additional-settings',
	title: 'Configure Additional Features',
	description: 'This guide explains how to enable and configure BioStar Air\'s additional features, such as QR code readers, IP camera integration, and webhooks.',
	keywords: [
		'Additional Site Settings',
		'Additional Settings'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "You can enable or disable additional features required for site operation, such as support for QR code readers, ONVIF camera integration, and event forwarding to external systems (webhooks)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), " in the left sidebar. Use the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_qr_reader_tab",
        product: "air"
      }), " tab to enable or disable additional features."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-additional-feature.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_qr_label",
            product: "air"
          }), ": Supports QR code readers. Disable this option if you do not use a QR reader."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_video_management",
            product: "air"
          }), ": Supports ONVIF-compliant IP cameras. Enable this feature to integrate BioStar Air with video surveillance. After enabling the feature, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting_label",
            product: "air"
          }), " to set the event log playback time."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about video management, see ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/ip-camera-support-and-configuration"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_webhook_title",
            product: "air"
          }), ": Enable webhooks to send BioStar Air events to external systems. After enabling the feature, configure the fields below."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-additional-feature-webhook.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_webhook_url",
                product: "air"
              }), ": Enter the endpoint address of the external server that will receive events. Example: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "https://example.com/webhook-endpoint"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_webhook_secret",
                product: "air"
              }), ": A security token used to verify that the webhook request originated from a trusted server. The sending server encrypts the payload with the security key using SHA-256 and sends it in the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "X-Signature"
              }), " header."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_webhook_form_send_text",
                product: "air"
              }), ": Verify that the webhook works correctly. Send a test message to confirm that the external server receives and responds to the request."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["After entering all required information, click ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "save_btn",
                  product: "air"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_button_reset",
                  product: "air"
                }), " to initialize the entered information."]
              }), "\n"]
            }), "\n"]
          })
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