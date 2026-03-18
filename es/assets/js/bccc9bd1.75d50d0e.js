"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6269"], {
35371: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_opening_doors_with_mobile_credentials_mdx_bcc_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-opening-doors-with-mobile-credentials-mdx-bcc.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_opening_doors_with_mobile_credentials_mdx_bcc_namespaceObject = JSON.parse('{"id":"platform/biostar_air/opening-doors-with-mobile-credentials","title":"Using Mobile Credentials","description":"Learn how to open doors with Suprema Pass mobile credentials via Bluetooth or NFC, set the app\'s operating mode, and use various authentication methods (tag, press and hold, QR code).","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/opening-doors-with-mobile-credentials.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/opening-doors-with-mobile-credentials","permalink":"/docs/es/platform/biostar_air/opening-doors-with-mobile-credentials","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/opening-doors-with-mobile-credentials.mdx","tags":[],"version":"current","frontMatter":{"id":"opening-doors-with-mobile-credentials","title":"Using Mobile Credentials","description":"Learn how to open doors with Suprema Pass mobile credentials via Bluetooth or NFC, set the app\'s operating mode, and use various authentication methods (tag, press and hold, QR code).","keywords":["Mobile Credential","Suprema Pass","Opening doors","Bluetooth","NFC"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Credential User","permalink":"/docs/es/platform/biostar_air/credential-users-guide"},"next":{"title":"Set Up Advanced Features","permalink":"/docs/es/platform/biostar_air/suprema-pass-app-advanced-features"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/opening-doors-with-mobile-credentials.mdx


const frontMatter = {
	id: 'opening-doors-with-mobile-credentials',
	title: 'Using Mobile Credentials',
	description: 'Learn how to open doors with Suprema Pass mobile credentials via Bluetooth or NFC, set the app\'s operating mode, and use various authentication methods (tag, press and hold, QR code).',
	keywords: [
		'Mobile Credential',
		'Suprema Pass',
		'Opening doors',
		'Bluetooth',
		'NFC'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Requirements and preparation",
  "id": "requirements-and-preparation",
  "level": 2
}, {
  "value": "Set connection method",
  "id": "setCoonection",
  "level": 2
}, {
  "value": "Open doors",
  "id": "open-doors",
  "level": 2
}, {
  "value": "Tag your mobile device to a reader",
  "id": "tag-your-mobile-device-to-a-reader",
  "level": 3
}, {
  "value": "Press and hold mobile card",
  "id": "press-and-hold-mobile-card",
  "level": 3
}, {
  "value": "QR authentication",
  "id": "qr-authentication",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
  }, {Cmd, Column, Columns, DocLink, IcHamberg, IcSpqr, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!IcSpqr) _missingMdxReference("IcSpqr", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Use mobile credentials instead of plastic RFID cards to open doors with the Suprema Pass app. Tag the mobile device via Bluetooth or NFC, press and hold the card, or scan a QR code to open doors."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The Suprema Pass app serves as the user interface for the BioStar Air system and primarily acts as a digital wallet for mobile credentials. Users issue and store mobile access cards in the app to enter secure areas with their mobile devices."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements-and-preparation",
      children: "Requirements and preparation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Meet the following requirements to open doors with mobile credentials."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "An access control device compatible with Suprema Pass mobile credentials must be installed."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Install the Suprema Pass app on the mobile device."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://apps.apple.com/kr/app/suprema-pass/id6745057639",
                children: "iOS"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://play.google.com/store/apps/details?id=com.supremainc.supremapass",
                children: "Android"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enable Bluetooth or NFC on the mobile device."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enabling two-step authentication disables ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Background Mode"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The administrator must enable QR authentication in the BioStar Air portal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verify that the site supports the hands-free access method."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Location services are required to authenticate with the mobile access card in Suprema Pass. See the related FAQ at ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/location-services-issues"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Follow the provided guidance to troubleshoot the issue if the mobile card authenticates with the device but the door does not open. See the related FAQ at ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/troubleshooting-suprema-pass-app"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "mt--50",
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--20",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-sp-app-menus.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l20",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "setCoonection",
          children: "Set connection method"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select between two operating modes in the Suprema Pass app. On the Suprema Pass app home screen, tap ", (0,jsx_runtime.jsx)(IcHamberg, {}), " in the upper right corner, then select the desired mode in ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Connection Method"
          }), "."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Only while App is on Screen"
              }), ": Open the door only when the app appears on the screen and the mobile card is visible."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Background Mode"
              }), ": Open the door even if the phone is locked when the app is running in the background."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Regardless of the mode, tag the mobile device on the reader to authenticate."
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-doors",
      children: "Open doors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the Suprema Pass app to open doors in several ways."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tag-your-mobile-device-to-a-reader",
      children: "Tag your mobile device to a reader"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bring the mobile device close to a reader compatible with BioStar Air and authenticate via Bluetooth or NFC to open the door."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Make sure the Suprema Pass app is running."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hold the Bluetooth or NFC antenna area of the mobile device close to the reader."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The door opens when the mobile credential authenticates."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Choose between two communication modes. For more information, see ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/suprema-pass-app-advanced-features"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Bluetooth mode"
                }), ": The mobile device communicates wirelessly with the reader."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "NFC mode"
                }), ": Available only on Android devices; tag the mobile device on the reader to authenticate."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The Bluetooth or NFC antenna location varies by model. Refer to the device specifications for the optimal touch point."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "press-and-hold-mobile-card",
      children: "Press and hold mobile card"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Press and hold the mobile card in the Suprema Pass app to open the door."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Display the home screen of the Suprema Pass app."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Press and hold the mobile card near a reader compatible with BioStar Air for 2–3 seconds."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The door opens when the mobile credential authenticates."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Background Mode"
            }), " in ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Connection Method"
            }), " to use this feature. For more information, see ", (0,jsx_runtime.jsx)(DocLink, {
              inner: "#setCoonection"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For security reasons, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "the site administrator may disable this feature"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Effective range"
            }), " varies depending on mobile device Bluetooth strength."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Nearby access control readers may trigger unintended authentication."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qr-authentication",
      children: "QR authentication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the administrator enables the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_qr_label",
        product: "air"
      }), " option in the BioStar Air portal, you can open the door by scanning the QR code in the Suprema Pass app with a QR reader. On the home screen of the Suprema Pass app, tap the ", (0,jsx_runtime.jsx)(IcSpqr, {
        title: "QR Scan"
      }), " icon under the mobile card."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-contact-qrcode.png",
      width: "50%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_setting_qr_label",
              product: "air"
            }), " option, see ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/site-additional-settings"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "QR authentication is available only at doors equipped with a QR reader."
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