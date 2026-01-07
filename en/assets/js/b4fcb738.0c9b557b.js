"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["69197"], {
98717: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_sip_intercom_for_biostaion_3_mdx_b4f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-sip-intercom-for-biostaion-3-mdx-b4f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_sip_intercom_for_biostaion_3_mdx_b4f_namespaceObject = JSON.parse('{"id":"platform/biostar_air/sip-intercom-for-biostation3","title":"SIP Intercom for BioStation 3","description":"Learn how to configure SIP intercom functionality in BioStation 3 for two-way audio calls, remote door control via DTMF commands, and call reception through BioStar Air Web and mobile app.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/sip-intercom-for-biostaion3.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/sip-intercom-for-biostation3","permalink":"/docs/en/platform/biostar_air/sip-intercom-for-biostation3","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/sip-intercom-for-biostaion3.mdx","tags":[],"version":"current","frontMatter":{"id":"sip-intercom-for-biostation3","title":"SIP Intercom for BioStation 3","description":"Learn how to configure SIP intercom functionality in BioStation 3 for two-way audio calls, remote door control via DTMF commands, and call reception through BioStar Air Web and mobile app.","keywords":["SIP","Intercom","BioStation 3"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Time and Attendance Reports","permalink":"/docs/en/platform/biostar_air/reports-time-attendance-reports"},"next":{"title":"E200 QR Scanner 배선 및 구성","permalink":"/docs/en/platform/biostar_air/e200-qr-scanner"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/sip-intercom-for-biostaion3.mdx


const frontMatter = {
	id: 'sip-intercom-for-biostation3',
	title: 'SIP Intercom for BioStation 3',
	description: 'Learn how to configure SIP intercom functionality in BioStation 3 for two-way audio calls, remote door control via DTMF commands, and call reception through BioStar Air Web and mobile app.',
	keywords: [
		'SIP',
		'Intercom',
		'BioStation 3'
	],
	isTranslationMissing: false
};
const contentTitle = 'SIP Intercom Configuration';

const assets = {

};



const toc = [{
  "value": "About SIP",
  "id": "about-sip",
  "level": 2
}, {
  "value": "Receiving Calls",
  "id": "receiving-calls",
  "level": 2
}, {
  "value": "Remote Door Control",
  "id": "remote-door-control",
  "level": 2
}, {
  "value": "Configuration Steps",
  "id": "configuration-steps",
  "level": 2
}, {
  "value": "Device Settings",
  "id": "device-settings",
  "level": 3
}, {
  "value": "Account Settings",
  "id": "account-settings",
  "level": 3
}, {
  "value": "Tested SIP Providers",
  "id": "tested-sip-providers",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Step, Steps} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "sip-intercom-configuration",
        children: "SIP Intercom Configuration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Starting from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar Air v2.10"
      }), ", SIP intercom functionality is supported on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStation 3"
      }), " (BS3). This enables two-way audio calls between the reader and administrators, as well as remote door unlocking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This feature requires a SIP server, which must be purchased and configured separately. Suprema does not provide SIP service."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "about-sip",
      children: "About SIP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Session Initiation Protocol"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SIP"
      }), ") is a communication protocol widely used for initiating, maintaining, and terminating real-time voice and video calls over IP networks. In this case, SIP enables the BioStation 3 to act as an intercom endpoint, making and receiving calls through a compatible SIP service."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "receiving-calls",
      children: "Receiving Calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Incoming calls from the BioStation 3 can be received via:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Web"
          }), ": Receive calls directly in your web browser."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Mobile App"
          }), " (iOS / Android): Receive calls on the go."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "remote-door-control",
      children: "Remote Door Control"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When answering a SIP call, doors can be opened using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DTMF commands"
      }), " from:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A physical SIP phone"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The BioStar Air Mobile App"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The BioStar Air Web interface"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-steps",
      children: "Configuration Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configuration is required in two places: device settings and administrator account settings."
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "device-settings",
          children: "Device Settings"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device Management"
              }), " in the BioStar Air Portal."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select your ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStation 3"
              }), " from the device list."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Enter the following SIP server details:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Server Address"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Port"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Login Credentials"
                  }), " (username and password)"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/air-intercom-configuration-edit-device.png",
          alone: true,
          className: "none"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "account-settings",
          children: "Account Settings"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Each administrator who needs to receive calls must log in to the BioStar Air Portal or Mobile App."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Account Settings"
              }), ", add the same SIP login information used in the device configuration."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "This allows calls from the BioStation 3 to be routed to their browser or app."
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/air-intercom-configuration-account-setting.png",
          alone: true,
          className: "none"
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/air-intercom-configuration-edit-device.png",
          alone: true,
          className: "none"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tested-sip-providers",
      children: "Tested SIP Providers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The BioStation 3 has been tested and confirmed to work well with the following providers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RingCentral"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FreePBX"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Linphone"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Linhome"
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