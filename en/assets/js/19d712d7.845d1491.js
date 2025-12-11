"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["98529"], {
89226: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_interphone_mdx_19d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-interphone-mdx-19d.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_interphone_mdx_19d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-interphone","title":"Intercom Settings","description":"This provides guidance on setting detailed items for intercom use.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-interphone.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-interphone","permalink":"/en/platform/biostar_x/settings-device-details-interphone","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-interphone.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-interphone","title":"Intercom Settings","description":"This provides guidance on setting detailed items for intercom use.","keywords":["Device","IP Intercom"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Thermal and Mask Settings","permalink":"/en/platform/biostar_x/settings-device-details-thermal-mask"},"next":{"title":"RTSP Settings","permalink":"/en/platform/biostar_x/settings-device-details-rtsp"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-interphone.mdx


const frontMatter = {
	id: 'settings-device-details-interphone',
	title: 'Intercom Settings',
	description: 'This provides guidance on setting detailed items for intercom use.',
	keywords: [
		'Device',
		'IP Intercom'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Intercom settings",
  "id": "ip-interphone-settings",
  "level": 2
}, {
  "value": "Edit extension numbers",
  "id": "edit-extension",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.interphone",
        product: "2"
      }), " section, you can set detailed options for using the intercom."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "This feature is supported on the BioStation 3, FaceStation 2, and BioStation A2."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the user has made any arbitrary changes, click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " button. Changes will not be applied to the device if not saved."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ip-interphone-settings",
      children: "Intercom settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set each option to register the device with the Session Initiation Protocol (SIP) server."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-ipinterphone.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.interphone",
            product: "2"
          }), ": To use the device as an intercom, set to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.ipAddr",
            product: "2"
          }), ": Enter the address of the SIP server."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.port",
            product: "2"
          }), ": Enter the port of the SIP server. The default is 5060."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.account.new",
            product: "2"
          }), ": Enter the username for the SIP account."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.password.new",
            product: "2"
          }), ": Enter the password for the SIP account."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.authorization.id",
            product: "2"
          }), ": Enter the authorization ID for the SIP account."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.registration.duration",
            product: "2"
          }), ": Enter the registration duration in seconds. The device attempts to register with the SIP server every time the registration duration expires."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.doorOpenButton",
            product: "2"
          }), ": Specify a button to open the entrance door during a call."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.transport",
            product: "2"
          }), ": Choose the SIP transport method when configuring the intercom's SIP server settings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.outbound.proxy.server",
            product: "2"
          }), ": Set to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), " if using SIP services via a separate outbound proxy server."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.intercom.outbound.proxy.server.ipAddress",
                product: "2"
              }), ": Enter the address of the outbound proxy server."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.intercom.outbound.proxy.server.port",
                product: "2"
              }), ": Enter the port of the outbound proxy server."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.resolution",
            product: "2"
          }), ": Select the resolution of the video output when using the intercom. The default is ", (0,jsx_runtime.jsx)(Cmd, {
            children: "360 x 640"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.display",
            product: "2"
          }), ": Set to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.disable",
            product: "2"
          }), " to prevent the device from displaying the extension number. Without displaying the extension number, you cannot distinguish the recipient on the calling screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension",
            product: "2"
          }), ": You can register up to 128 extension numbers. To add or edit extension numbers, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.editBtn",
            product: "2"
          }), " button. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#edit-extension",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The options ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.account.new",
              product: "2"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.authorization.id",
              product: "2"
            }), " can only include numbers, English letters (case sensitive), and special characters."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.registration.duration",
              product: "2"
            }), " option can be set between 60 and 600 seconds."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.transport",
              product: "2"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.resolution",
              product: "2"
            }), " options are supported on firmware version 1.3.0 and above of BioStation 3."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Initiation Protocol"
            }), " (SIP) is a communication protocol based on internet protocols for various multimedia communications, such as VoIP and video conferencing. The SIP server manages such communications and establishes connections."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edit-extension",
      children: "Edit extension numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Guidance on the features provided in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.intercom.extension.popup.title",
        product: "2"
      }), " window."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-ipinterphone-extension.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.sendToTop",
            product: "2"
          }), ": Move the selected extension number to the top of the list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.csvImport",
            product: "2"
          }), ": Import a CSV file that contains the extension numbers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.csvExport",
            product: "2"
          }), ": Export the saved extension numbers to a CSV file."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.add",
            product: "2"
          }), ": Add an extension number."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.delete",
            product: "2"
          }), ": Delete an extension number."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.list.reorder",
            product: "2"
          }), ": Change the order of the extension numbers by dragging them with the mouse."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The FaceStation 2 and BioStation A2 models can save up to 16 extension numbers."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You cannot import a CSV file that contains more extension numbers than the maximum supported."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Extension numbers can only include numbers, English letters (case sensitive), and special characters."
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