"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["90521"], {
49169: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Customers who began using BioStar Air access control before May 2025 may still be using the Airfob Space app, which has since been rebranded as the Suprema Pass app. Both apps offer identical functionality and are fully compatible. There is no need for existing users to switch — mobile credentials work seamlessly across both."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
57361: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_suprema_pass_app_sensitivity_settings_mdx_a4d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-suprema-pass-app-sensitivity-settings-mdx-a4d.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_suprema_pass_app_sensitivity_settings_mdx_a4d_namespaceObject = JSON.parse('{"id":"platform/biostar_air/suprema-pass-app-sensitivity-settings","title":"Set Sensitivity","description":"Learn how to adjust Bluetooth detection sensitivity in the Suprema Pass app to prevent unintended authentication, improve detection range, and resolve Apple Pay interference issues.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/suprema-pass-app-sensitivity-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/suprema-pass-app-sensitivity-settings","permalink":"/docs/en/platform/biostar_air/suprema-pass-app-sensitivity-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/suprema-pass-app-sensitivity-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"suprema-pass-app-sensitivity-settings","title":"Set Sensitivity","description":"Learn how to adjust Bluetooth detection sensitivity in the Suprema Pass app to prevent unintended authentication, improve detection range, and resolve Apple Pay interference issues.","keywords":["sensitivity settings","Bluetooth","Airfob"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Advanced Features","permalink":"/docs/en/platform/biostar_air/suprema-pass-app-advanced-features"},"next":{"title":"Configure Reports","permalink":"/docs/en/platform/biostar_air/configuring-reports"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/suprema-pass-app-sensitivity-settings.mdx


const frontMatter = {
	id: 'suprema-pass-app-sensitivity-settings',
	title: 'Set Sensitivity',
	description: 'Learn how to adjust Bluetooth detection sensitivity in the Suprema Pass app to prevent unintended authentication, improve detection range, and resolve Apple Pay interference issues.',
	keywords: [
		'sensitivity settings',
		'Bluetooth',
		'Airfob'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "Adjust the sensitivity setting",
  "id": "how-to-adjust-the-sensitivity-setting",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, IcHamberg, IcMinus, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!IcMinus) _missingMdxReference("IcMinus", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["With the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sensitivity Settings"
      }), " feature, users can adjust the Bluetooth detection sensitivity between the mobile device and Airfob. This customization helps ensure smooth authentication and reduce unwanted access attempts or authentication failures."]
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Because Bluetooth signal strength varies by mobile device model, users may experience different detection ranges. Environmental factors such as walls, interference, or the placement of Airfob can also affect Bluetooth detection."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-adjust-the-sensitivity-setting",
      children: "Adjust the sensitivity setting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users can fine-tune Bluetooth authentication sensitivity based on the mobile device’s Bluetooth strength and personal preference."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-advanced-sensitivity.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On the Suprema Pass app home screen, tap ", (0,jsx_runtime.jsx)(IcHamberg, {}), " in the upper right corner."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            children: "More"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Advanced Settings"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Sensitivity Settings"
          }), ", then move the slider to adjust sensitivity."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Move the slider toward ", (0,jsx_runtime.jsx)(IcMinus, {}), " to lower the sensitivity and block unintended authentication."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "For example, when the mobile device is on a desk"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If authentication fails, move the slider toward ", (0,jsx_runtime.jsx)(IcAdd, {}), " to increase the sensitivity. However, the mobile device must be very close to Airfob."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "iOS user tips"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Bringing an iPhone with Apple Pay close to Airfob triggers Apple Pay. This occurs because the device’s NFC area is detected along with Airfob mobile card authentication."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": Adjust the sensitivity setting toward ", (0,jsx_runtime.jsx)(IcAdd, {}), " so that Airfob detects the mobile device’s Bluetooth signal earlier, eliminating the need for physical contact with the device. This allows smooth access while blocking Apple Pay from being triggered."]
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