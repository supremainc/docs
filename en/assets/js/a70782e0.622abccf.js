"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["73366"], {
57436: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_fingerprint_mdx_a70_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-fingerprint-mdx-a70.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_fingerprint_mdx_a70_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-fingerprint","title":"Enroll Fingerprint","description":"You can enroll the user\'s fingerprint as a means of authentication for access control. Enroll the user\'s fingerprint information through a device that supports fingerprint authentication.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-fingerprint.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-fingerprint","permalink":"/docs/en/platform/biostar_x/enroll-credential-fingerprint","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-fingerprint.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-fingerprint","title":"Enroll Fingerprint","description":"You can enroll the user\'s fingerprint as a means of authentication for access control. Enroll the user\'s fingerprint information through a device that supports fingerprint authentication.","keywords":["Fingerprint","Enrollment","Credentials","Certifications","Biometric"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Authentication Mode Settings","permalink":"/docs/en/platform/biostar_x/enroll-credential-authmode"},"next":{"title":"Enroll Face","permalink":"/docs/en/platform/biostar_x/enroll-credential-face"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-fingerprint.mdx


const frontMatter = {
	id: 'enroll-credential-fingerprint',
	title: 'Enroll Fingerprint',
	description: 'You can enroll the user\'s fingerprint as a means of authentication for access control. Enroll the user\'s fingerprint information through a device that supports fingerprint authentication.',
	keywords: [
		'Fingerprint',
		'Enrollment',
		'Credentials',
		'Certifications',
		'Biometric'
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
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Num} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Num) _missingMdxReference("Num", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "You can enroll the user's fingerprint as a means of authentication for access control. Enroll the user's fingerprint information through a device that supports fingerprint authentication. Fingerprints can be scanned on devices equipped with fingerprint scanners."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Before enrolling fingerprints..."
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Ensure that the user's fingerprint is clean and dry."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Do not enroll fingerprints that are injured or blurry."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.credential",
        product: "2"
      }), " section, click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addFingerprint",
        product: "2"
      }), " button. When the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.header.fingerprint",
        product: "2"
      }), " window appears, configure each item and click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.enroll",
        product: "2"
      }), " button."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-finger.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device",
            product: "2"
          }), ": Select the device for enrolling the fingerprint."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quality",
            product: "2"
          }), ": You can adjust the fingerprint enrollment quality. Cannot enroll fingerprint information if it does not meet the configured quality level."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.viewImage",
            product: "2"
          }), ": The original image of the scanned fingerprint can be viewed in area ", (0,jsx_runtime.jsx)(Num, {
            num: "1"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus",
            product: "2"
          }), ": Click the button to add a fingerprint. A maximum of 10 fingerprints can be enrolled."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.scan",
            product: "2"
          }), ": Select the added fingerprint number and click the button. Place your finger on the fingerprint scanner or device sensor to scan the fingerprint."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-finger-nth.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.delete",
            product: "2"
          }), ": This allows deleting an enrolled fingerprint. Select the fingerprint number to delete and click the button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.chkDuplicated",
            product: "2"
          }), ": You can check if it is a previously enrolled fingerprint."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.duress",
            product: "2"
          }), ": To enroll a fingerprint as a ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#duress",
            children: "duress fingerprint"
          }), ", select this option and scan the fingerprint. If you are threatened or forced to open the door, you can use that fingerprint to send a notification."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Do not use the fingerprint you use for everyday access as a threat fingerprint."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When activating the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.viewImage",
              product: "2"
            }), " option, you can view the fingerprint image, but it is not stored in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If the fingerprint authentication rate is low, delete the fingerprint and enroll a new fingerprint."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "To achieve good quality fingerprint, ensure your finger covers the entire surface of the fingerprint recognition sensor. Use the fingerprints of the index or middle finger."
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(32830)/* ["default"] */.A) + "",
              width: "400",
              height: "98"
            })
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
32830: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/biostarx-enroll-fingerprint-caution-98024b8eaea33e83eea204e7e06a1e0f.png");

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