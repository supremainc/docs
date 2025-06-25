"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1356"], {
9940: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_qrbarcode_mdx_4d8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-qrbarcode-mdx-4d8.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_qrbarcode_mdx_4d8_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-qrbarcode","title":"Enrolling QR/Barcode","description":"This document provides guidance on how to enroll QR codes or barcodes as user authentication methods.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-qrbarcode.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-qrbarcode","permalink":"/docs/en/platform/biostar_x/enroll-credential-qrbarcode","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-qrbarcode.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-qrbarcode","title":"Enrolling QR/Barcode","description":"This document provides guidance on how to enroll QR codes or barcodes as user authentication methods.","keywords":["QR code","barcode","enrollment","credential","authentication"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Enrolling Mobile Access Cards","permalink":"/docs/en/platform/biostar_x/enroll-credential-mobile"},"next":{"title":"Enrolling PIN","permalink":"/docs/en/platform/biostar_x/enroll-credential-pin"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-qrbarcode.mdx


const frontMatter = {
	id: 'enroll-credential-qrbarcode',
	title: 'Enrolling QR/Barcode',
	description: 'This document provides guidance on how to enroll QR codes or barcodes as user authentication methods.',
	keywords: [
		'QR code',
		'barcode',
		'enrollment',
		'credential',
		'authentication'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcAdd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "QR codes or barcodes can be used as user authentication methods."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Devices that include scanners capable of QR/Barcode authentication are as follows:"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "X-Station 2 (XS2-QDPB, XS2-QAPB)"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Devices that include cameras capable of QR/Barcode authentication are as follows:"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "X-Station 2 (XS2-ODPB, XS2-OAPB, XS2-DPB, XS2-APB) firmware version 1.2.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 (BS3-DB, BS3-APWB) firmware version 1.1.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["A separate device license is required to use QR/Barcode authentication with the camera. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#",
                  children: "this document"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "biostarxqr",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.biostarQr",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can issue a QR code containing an encrypted PIN to allow user access."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.title"
          }), " section, click the ", (0,jsx_runtime.jsx)(IcAdd, {}), " button in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.qrBarcode.title"
          }), " field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.qrBarcode.enrollQrBarcode"
          }), " window appears, select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.qrBarcode.qrBarcodeType"
          }), " as ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.biostarQr"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-biostarqr.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To enter a card ID directly or automatically generate a card ID, activate the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.qrBarcode.useRandomId"
          }), " option."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A QR code issued to the user will be sent to the email address registered with their information. The user can scan the QR code included in the email with the device to gain access."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To prevent duplicate card ID generation, it is recommended to activate the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.credential.qrBarcode.useRandomId"
            }), " option in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.credential.qrBarcode.inputType"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Before using ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.biostarQr"
            }), ", complete the email configuration including SMTP settings. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "this document"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To issue ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.biostarQr"
            }), ", the user's email address must be registered in their information."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qrbarcode",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.credential.qrBarcode.title",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can register QR/barcodes issued by other entities for users."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.title"
          }), " section, click the ", (0,jsx_runtime.jsx)(IcAdd, {}), " button in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.qrBarcode.title"
          }), " field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.qrBarcode.enrollQrBarcode"
          }), " window appears, select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.qrBarcode.qrBarcodeType"
          }), " as ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.qrBarcode.title"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-qrbarcode.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Input the previously issued QR/barcode in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.cardId"
          }), " field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The card ID can be up to 32 characters long and can include letters, numbers, and special characters."
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