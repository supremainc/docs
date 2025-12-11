"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["82871"], {
48627: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_device_manager_getting_started_mdx_20d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-device-manager-getting-started-mdx-20d.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_device_manager_getting_started_mdx_20d_namespaceObject = JSON.parse('{"id":"device/device_manager/getting-started","title":"Getting Started","description":"Guidelines for minimum requirements for using Device Manager.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/device_manager/getting-started.mdx","sourceDirName":"device/device_manager","slug":"/device/device_manager/getting-started","permalink":"/en/device/device_manager/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/device_manager/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"Getting Started","description":"Guidelines for minimum requirements for using Device Manager.","keywords":["Introduction","Minimum requirements"],"isTranslationMissing":false},"sidebar":"device_manager","previous":{"title":"Device Manager","permalink":"/en/device/device_manager/"},"next":{"title":"Initial Setup of the Device","permalink":"/en/device/device_manager/initial-setup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/device_manager/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: 'Getting Started',
	description: 'Guidelines for minimum requirements for using Device Manager.',
	keywords: [
		'Introduction',
		'Minimum requirements'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Minimum requirements",
  "id": "minimum-requirements",
  "level": 2
}, {
  "value": "Mobile Device",
  "id": "mobile-device",
  "level": 3
}, {
  "value": "Device and Firmware",
  "id": "device-and-firmware",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema Device Manager is a mobile application that allows configuration of Suprema's XPass D2, XPass 2, and BioEntry W3 using BLE communication."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/device-manager-system-diagram1.svg",
      className: "none",
      width: 650,
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Administrators can connect to the server from a PC or set the device's network, server, RS-485 communication, card format, keypad settings, PIN, LED, and buzzer from a mobile device without physically disconnecting it, and can also use functions such as device restart, firmware upgrade, and device setting initialization."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For XPass D2, values set once can be saved as a template for quick and easy application to multiple devices."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Using Suprema Device Manager allows on-site modification of the settings of XPass D2 configured with third-party controllers."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/device/device-manager-system-diagram2.svg",
        className: "none",
        width: 900,
        alone: true
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "minimum-requirements",
      children: "Minimum requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mobile-device",
      children: "Mobile Device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check if the mobile device supports BLE communication."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Android 5.0 Lollipop or later"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "iOS 9.0 or later"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-and-firmware",
      children: "Device and Firmware"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check compatible devices and firmware versions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/en/device/xpass_d2/",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "XPass D2"
            })
          }), " firmware version 1.1.0 or later"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/en/device/xpass_2/",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "XPass 2"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-MDPB, XP2-GDPB, XP2-GKDPB: firmware version 1.0.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-MAPB: firmware version 1.4.1 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-MAPB-H: firmware version 1.4.3 or later"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/en/device/bioentry_w3/",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioEntry W3"
            })
          }), " firmware version 1.0.1 or later"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Compatible devices and firmware are subject to change."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If the device firmware version is lower than the versions listed above, upgrade the device firmware in BioStar X. When using the device as a slave, the connected master's firmware must also be the latest version compatible with BioStar 2 2.7.0 or later."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about upgrading device firmware, please refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "ip-device-settings#device-firmware-upgrade",
              children: "IP Device (Upgrade device firmware)"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "xpd2-settings#device-firmware-upgrade",
              children: "XPass D2 (Upgrade device firmware)"
            }), ", or the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-device-upgrade-firmware",
              children: "BioStar X Administrator Guide"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
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