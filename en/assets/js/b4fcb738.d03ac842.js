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
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_sip_intercom_for_biostaion_3_mdx_b4f_namespaceObject = JSON.parse('{"id":"platform/biostar_air/sip-intercom-for-biostation3","title":"BioStation 3 SIP Intercom","description":"Learn how to configure the SIP intercom feature on BioStation 3 for two-way audio calls, remote door control via DTMF commands, and call reception through the BioStar Air web and mobile apps.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/sip-intercom-for-biostaion3.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/sip-intercom-for-biostation3","permalink":"/docs/en/platform/biostar_air/sip-intercom-for-biostation3","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/sip-intercom-for-biostaion3.mdx","tags":[],"version":"current","frontMatter":{"id":"sip-intercom-for-biostation3","title":"BioStation 3 SIP Intercom","description":"Learn how to configure the SIP intercom feature on BioStation 3 for two-way audio calls, remote door control via DTMF commands, and call reception through the BioStar Air web and mobile apps.","keywords":["SIP","Intercom","BioStation 3"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configure Time and Attendance Report","permalink":"/docs/en/platform/biostar_air/reports-time-attendance-reports"},"next":{"title":"Wire and Configure E200 QR Scanner","permalink":"/docs/en/platform/biostar_air/e200-qr-scanner"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/sip-intercom-for-biostaion3.mdx


const frontMatter = {
	id: 'sip-intercom-for-biostation3',
	title: 'BioStation 3 SIP Intercom',
	description: 'Learn how to configure the SIP intercom feature on BioStation 3 for two-way audio calls, remote door control via DTMF commands, and call reception through the BioStar Air web and mobile apps.',
	keywords: [
		'SIP',
		'Intercom',
		'BioStation 3'
	],
	isTranslationMissing: false
};
const contentTitle = 'Configure SIP intercom';

const assets = {

};



const toc = [{
  "value": "SIP",
  "id": "sip",
  "level": 2
}, {
  "value": "Receive calls",
  "id": "receive-calls",
  "level": 2
}, {
  "value": "Remote door control",
  "id": "remote-door-control",
  "level": 2
}, {
  "value": "Configuration steps",
  "id": "configuration-steps",
  "level": 2
}, {
  "value": "Device Settings",
  "id": "device-settings",
  "level": 3
}, {
  "value": "Account settings",
  "id": "account-settings",
  "level": 3
}, {
  "value": "Verified SIP providers",
  "id": "verified-sip-providers",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
  }, {Cmd, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "configure-sip-intercom",
        children: "Configure SIP intercom"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar Air v2.10"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStation 3"
      }), " (BS3) supports the SIP intercom feature. This enables two-way voice calls between the reader and administrators and remote door unlocking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "A SIP server is required to use this feature; purchase and configure it separately. Suprema does not provide SIP services."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sip",
      children: "SIP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Session Initiation Protocol"
      }), " (SIP) is a communication protocol widely used to initiate, maintain, and terminate real-time voice and video calls over IP networks. In this context, SIP lets BioStation 3 act as an intercom endpoint that can place and receive calls through a compatible SIP service."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "receive-calls",
      children: "Receive calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Answer calls received from BioStation 3 in the following ways."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Web"
          }), ": Receive calls directly in a web browser"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Mobile App"
          }), " (iOS / Android): Receive calls on the go"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "remote-door-control",
      children: "Remote door control"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When answering a SIP call, use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DTMF commands"
      }), " to unlock the door:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hardware SIP phone"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air mobile app"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air Web interface"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-steps",
      children: "Configuration steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure this in device settings and administrator account settings."
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "device-settings",
          children: "Device Settings"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Log in to the ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://admin.biostarair.com",
                children: "BioStar Air portal"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_submenu",
                product: "air"
              }), " in the left sidebar."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In the device list, click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStation 3"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Go to the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_intercom_title",
                product: "air"
              }), " section and enable the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_intercom_txt_use_intercom",
                product: "air"
              }), " option."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Enter the SIP server information."
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/air-intercom-configuration-edit-device.png",
              alone: true,
              className: "none",
              caption: true
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_intercom_txt_sip_server_address",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_intercom_txt_sip_server_port",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "device_intercom_txt_sip_username",
                    product: "air"
                  }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "login_password",
                    product: "air"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " to save the changes."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "account-settings",
          children: "Account settings"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Route calls from BioStation 3 to a browser or app."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "For each administrator who needs to receive calls, log in to the BioStar Air portal or mobile app."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Account settings"
              }), "."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["In the ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://admin.biostarair.com",
                    children: "BioStar Air portal"
                  }), ", click the user profile icon in the upper-right corner and select ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "settings_menu",
                    product: "air"
                  }), "."]
                }), "\n", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-device-bs3-sip-account-settings.png"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["BioStar Air mobile app: On the home screen, tap ", (0,jsx_runtime.jsx)(Cmd, {
                    children: "All Menu"
                  }), " at the bottom, then tap the user profile area."]
                }), "\n", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-app-bs3-sip-account-settings.png",
                  width: "38%",
                  className: "none"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), " window appears, click the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_intercom_title",
                product: "air"
              }), " tab and add the SIP server login information."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-bs3-sip-account-settings-intercom.png",
              className: "none"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " to save the settings."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verified-sip-providers",
      children: "Verified SIP providers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStation 3 has been tested and confirmed to work properly with the providers below."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.ringcentral.com/",
            children: "RingCentral"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.freepbx.org/",
            children: "FreePBX"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.linphone.org/",
            children: "Linphone"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.linhome.org/",
            children: "Linhome"
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