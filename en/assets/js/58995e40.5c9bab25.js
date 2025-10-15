"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1873"], {
61399: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_authmode_mdx_589_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-authmode-mdx-589.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_authmode_mdx_589_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-authmode","title":"Authentication Mode Settings","description":"Set the device default or individual private authentication mode to apply different authentication methods for each user.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-authmode.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-authmode","permalink":"/docs/en/platform/biostar_x/enroll-credential-authmode","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-authmode.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-authmode","title":"Authentication Mode Settings","description":"Set the device default or individual private authentication mode to apply different authentication methods for each user.","keywords":["Authentication mode","Settings","Private Authentication","Extended Authentication","Device defaults"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Set Security Level","permalink":"/docs/en/platform/biostar_x/enroll-credential-securitylevel"},"next":{"title":"Enroll Fingerprint","permalink":"/docs/en/platform/biostar_x/enroll-credential-fingerprint"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-authmode.mdx


const frontMatter = {
	id: 'enroll-credential-authmode',
	title: 'Authentication Mode Settings',
	description: 'Set the device default or individual private authentication mode to apply different authentication methods for each user.',
	keywords: [
		'Authentication mode',
		'Settings',
		'Private Authentication',
		'Extended Authentication',
		'Device defaults'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Device defaults",
  "id": "device-defaults",
  "level": 2
}, {
  "value": "Private authentication mode",
  "id": "private-authentication-mode",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Users can flexibly set authentication methods. You can use the default authentication method set on the device or designate individual authentication modes tailored to each user. Additionally, the extended authentication mode, which includes both facial and fingerprint authentication, enhances security levels."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device-defaults",
      children: "Device defaults"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Setting the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.authMode",
        product: "2"
      }), " option to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.deviceDefault",
        product: "2"
      }), " allows for authentication based on the method configured on the device."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-authmod-default.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "private-authentication-mode",
      children: "Private authentication mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Setting the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.authMode",
        product: "2"
      }), " option to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.privateMode",
        product: "2"
      }), " enables different authentication methods for each user."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-authmod-private.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addplus",
        product: "2"
      }), " button to open the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.addNewAuthMode",
        product: "2"
      }), " window. Configure the desired authentication methods."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-authmod-private-add.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.authMode.toggle",
            product: "2"
          }), ": Set whether to use the extended authentication mode. The extended authentication mode allows for a combination of facial and fingerprint authentication methods."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.authMode",
            product: "2"
          }), ": Set the authentication methods using drag and drop."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-authmod-private-join.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To enroll the configured authentication methods, click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " button."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.authMode.toggle",
              product: "2"
            }), " option is supported on the FaceStation F2, BioStation 3, and BioEntry W3."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Setting ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.includeDeviceDefaultAuthMode",
              product: "2"
            }), " allows the use of both the authentication modes set on the device and the private authentication modes configured in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-new-user-credential-authmod-note-image.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Setting ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.excludeDeviceDefaultAuthMode",
              product: "2"
            }), " allows only the private authentication modes set in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " to be used."]
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