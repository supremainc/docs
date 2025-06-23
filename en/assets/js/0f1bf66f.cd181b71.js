"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4793"], {
1362: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_ad_encrypt_mdx_0f1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-ad-encrypt-mdx-0f1.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_ad_encrypt_mdx_0f1_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ad-encrypt","title":"Active Directory Encryption","description":"You can use the encryption when communicating with a Windows Active Directory server.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/ad-encrypt.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ad-encrypt","permalink":"/docs/en/platform/biostar_x/ad-encrypt","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ad-encrypt.mdx","tags":[],"version":"current","frontMatter":{"id":"ad-encrypt","title":"Active Directory Encryption","description":"You can use the encryption when communicating with a Windows Active Directory server.","displayed_sidebar":"biostarx","isTranslationMissing":false},"sidebar":"biostarx"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/ad-encrypt.mdx


const frontMatter = {
	id: 'ad-encrypt',
	title: 'Active Directory Encryption',
	description: 'You can use the encryption when communicating with a Windows Active Directory server.',
	displayed_sidebar: 'biostarx',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Step 1. Installing Active Directory Certificate Services",
  "id": "step-1-installing-active-directory-certificate-services",
  "level": 2
}, {
  "value": "Step 2. Connecting LDAPS (LDAP over SSL/TLS)",
  "id": "step-2-connecting-ldaps-ldap-over-ssltls",
  "level": 2
}, {
  "value": "Step 3. Copying the root certificate",
  "id": "step-3-copying-the-root-certificate",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "You can use the encryption when communicating with a Windows Active Directory server. Set according to the following order when using the encryption for the first time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-1-installing-active-directory-certificate-services",
      children: "Step 1. Installing Active Directory Certificate Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To use Windows Active Directory server encryption communication, you must install the Active Directory Certificate Services. The Active Directory Certificate Services can be installed as follows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On the PC where the Windows Active Directory server is installed, run ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Server Manager"
          }), ", and then click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manage"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Roles and Features"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Before You Begin"
          }), ", click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Select Installation Type"
          }), ", select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Role-Based or feature-based installation"
          }), " and then click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Select destination server"
          }), ", select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Select a server from the server pool"
          }), ", check the server,and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Select Server Roles"
          }), ", select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory Certificate Services"
          }), " and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When a pop-up window appears, view the details and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Features"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["View the details of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory Certificate Services"
          }), " and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Confirm installation selections"
          }), ", click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install"
          }), ". When installation is complete, click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure Active Directory Certificate Services on the destination server"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "AD CS Configuration wizard"
          }), " appears, view the details and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Role Services"
          }), ", click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Certification Authority"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Setup Type"
          }), " page, select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enterprise CA"
          }), " and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Specify the type of the CA"
          }), " page, select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Root CA"
          }), " and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Specify the type of the private key"
          }), " page, select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a new private key"
          }), " and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cryptography for CA"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CA Name"
          }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Validity Period"
          }), ", and then click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CA Database"
          }), " page, set the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "folder location for the certificate database"
          }), " and the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "certificate database log"
          }), " and then click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Confirmation"
          }), " page, view the details of Active Directory Certificate Services and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-2-connecting-ldaps-ldap-over-ssltls",
      children: "Step 2. Connecting LDAPS (LDAP over SSL/TLS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Start"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ldp"
          }), " in the input field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ldp-disconnected"
          }), " window appears, click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Connect"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Fill in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Server"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Port"
          }), " fields and select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SSL"
          }), ". And then click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-3-copying-the-root-certificate",
      children: "Step 3. Copying the root certificate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run Command Prompt on the PC where the Windows Active Directory server is installed."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter ", (0,jsx_runtime.jsx)(_components.code, {
            children: "certutil -ca.cert client.crt"
          }), " command to copy the root certificate."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter ", (0,jsx_runtime.jsx)(_components.code, {
            children: "keytool -import -keystore ad.jks -file client.crt"
          }), " command to convert the server certificate to ", (0,jsx_runtime.jsx)(_components.em, {
            children: ".jks"
          }), " format."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Save the ", (0,jsx_runtime.jsx)(_components.em, {
            children: ".jks"
          }), "-formatted server certificate to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2"
          }), " installation path."]
        }), "\n"]
      }), "\n"]
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