"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["60182"], {
177: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_device_manager_initial_setup_mdx_fdd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-device-manager-initial-setup-mdx-fdd.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_device_manager_initial_setup_mdx_fdd_namespaceObject = JSON.parse('{"id":"device/device_manager/initial-setup","title":"Initial Setup of the Device","description":"Guidance on how to select a device and manage app settings.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/device_manager/initial-setup.mdx","sourceDirName":"device/device_manager","slug":"/device/device_manager/initial-setup","permalink":"/en/device/device_manager/initial-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/device_manager/initial-setup.mdx","tags":[],"version":"current","frontMatter":{"id":"initial-setup","title":"Initial Setup of the Device","description":"Guidance on how to select a device and manage app settings.","keywords":["Device selection","App settings"],"isTranslationMissing":false},"sidebar":"device_manager","previous":{"title":"Getting Started","permalink":"/en/device/device_manager/getting-started"},"next":{"title":"Set Up IP Device","permalink":"/en/device/device_manager/ip-device-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/device_manager/initial-setup.mdx


const frontMatter = {
	id: 'initial-setup',
	title: 'Initial Setup of the Device',
	description: 'Guidance on how to select a device and manage app settings.',
	keywords: [
		'Device selection',
		'App settings'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Select device",
  "id": "select-device",
  "level": 2
}, {
  "value": "Configuring app settings",
  "id": "app-settings",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcSet, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSet) _missingMdxReference("IcSet", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Guidance on how to select a device and manage app settings."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "select-device",
      children: "Select device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select the device to configure using Suprema Device Manager."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can select an IP device or XPass D2, and the options available for configuration will vary depending on the selected device."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Install the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Suprema Device Manager"
          }), " application on the mobile device of the device manager. Suprema Device Manager is available for download from the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "App Store"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Play Store"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run the Suprema Device Manager on your mobile device."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the device to configure."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-manager-main.png",
          width: 250
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "app-settings",
      children: "Configuring app settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can configure the automatic device connection feature or check the app version information."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run the Suprema Device Manager on your mobile device."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(IcSet, {}), " on the main screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-manager-app-setting.png",
          className: "none",
          width: 540
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_276",
                product: "dev"
              }), ": You can enable or disable the automatic device connection feature."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_226",
                product: "dev"
              }), ": You can check the current app version and license information."]
            }), "\n"]
          }), "\n"]
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