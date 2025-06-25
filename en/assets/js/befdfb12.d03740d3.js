"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1774"], {
675: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_usb_agent_mdx_bef_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-usb-agent-mdx-bef.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_usb_agent_mdx_bef_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-usb-agent","title":"USB Agent Settings","description":"This document provides instructions for using the USB fingerprint enrollment device and card enrollment device when accessing BioStar X on the client PC.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-usb-agent.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-usb-agent","permalink":"/docs/en/platform/biostar_x/settings-device-usb-agent","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-usb-agent.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-usb-agent","title":"USB Agent Settings","description":"This document provides instructions for using the USB fingerprint enrollment device and card enrollment device when accessing BioStar X on the client PC.","keywords":["USB Agent"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Image Log Settings","permalink":"/docs/en/platform/biostar_x/settings-device-image-log"},"next":{"title":"Device Connection Management Settings","permalink":"/docs/en/platform/biostar_x/settings-device-connection-manager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-usb-agent.mdx


const frontMatter = {
	id: 'settings-device-usb-agent',
	title: 'USB Agent Settings',
	description: 'This document provides instructions for using the USB fingerprint enrollment device and card enrollment device when accessing BioStar X on the client PC.',
	keywords: [
		'USB Agent'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Install the USB Device Agent",
  "id": "install-usb-agent",
  "level": 2
}, {
  "value": "Set the USB Card Device Byte Order",
  "id": "usb-card-device-byte-order",
  "level": 2
}, {
  "value": "Set the USB Agent Port",
  "id": "set-the-usb-agent-port",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["When accessing ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " from a client PC, ensure the USB fingerprint and card enrollment devices are available. To do this, install the USB Device Agent. This document provides guidance on how to install and set up the USB Device Agent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "install-usb-agent",
      children: "Install the USB Device Agent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To access ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " from a client PC and use the USB fingerprint and card enrollment devices, the USB Device Agent must be installed."]
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
          children: ["In the left sidebar, click ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Device"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "USB Agent"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.download",
            product: "2"
          }), " button in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.usgAgent.lable",
            product: "2"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run the downloaded file and follow the on-screen instructions to complete the installation."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "User Account Control"
        }), " is enabled in Windows, the USB Agent cannot be auto-launched. Disable User Account Control or run it directly with administrative privileges."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usb-card-device-byte-order",
      children: "Set the USB Card Device Byte Order"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set the byte order for the USB card device."
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
          children: ["In the left sidebar, click ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Device"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "USB Agent"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Setting the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.usbAgent.byteOrder.title",
            product: "2"
          }), " option in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.usbAgent.byteOrder",
            product: "2"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": Processes card data in order from large byte units to small byte units, storing the card serial number (CSN) sequentially from left to right."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": Processes card data in order from small byte units to large byte units, storing the card serial number (CSN)."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once all settings are complete, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button at the bottom of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.usbAgent.byteOrder",
          product: "2"
        }), " option applies only to CSN cards."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "set-the-usb-agent-port",
      children: "Set the USB Agent Port"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set the port used by the USB Agent."
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
          children: ["In the left sidebar, click ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Device"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "USB Agent"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the port number in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.usbAgent.port",
            product: "2"
          }), " input field in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.usbAgent.port.title",
            product: "2"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once all settings are complete, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button at the bottom of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The port number setting for the USB Agent operates per client program and is used for server communication through that port number."
      })
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