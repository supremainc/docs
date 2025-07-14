"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9921"], {
6712: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_integration_paxton_2_0_enrollment_helper_client_mdx_d37_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-integration-paxton-2-0-enrollment-helper-client-mdx-d37.json
var site_docs_integration_paxton_2_0_enrollment_helper_client_mdx_d37_namespaceObject = JSON.parse('{"id":"integration/paxton_2.0/enrollment-helper-client","title":"Enrollment Helper Client","description":"The Enrollment Helper provides an enrollment window for fingerprints and faces on the Net2 Access Control system. If you install the Enrollment Helper, you can enroll fingerprints and faces by opening a window for enrollment directly from the Net2 Access Control system.","source":"@site/docs/integration/paxton_2.0/enrollment-helper-client.mdx","sourceDirName":"integration/paxton_2.0","slug":"/integration/paxton_2.0/enrollment-helper-client","permalink":"/docs/integration/paxton_2.0/enrollment-helper-client","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/integration/paxton_2.0/enrollment-helper-client.mdx","tags":[],"version":"current","frontMatter":{"id":"enrollment-helper-client","title":"Enrollment Helper Client","isTranslationMissing":false},"sidebar":"paxton","previous":{"title":"Settings","permalink":"/docs/integration/paxton_2.0/settings"},"next":{"title":"Troubleshooting","permalink":"/docs/integration/paxton_2.0/troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/integration/paxton_2.0/enrollment-helper-client.mdx


const frontMatter = {
	id: 'enrollment-helper-client',
	title: 'Enrollment Helper Client',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Enroll Credentials with Enrollment Helper",
  "id": "enroll-credentials-with-enrollment-helper",
  "level": 2
}, {
  "value": "Enroll Credentials to Existing User",
  "id": "enroll-credentials-to-existing-user",
  "level": 3
}, {
  "value": "Enroll Credentials to New User",
  "id": "enroll-credentials-to-new-user",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "The Enrollment Helper provides an enrollment window for fingerprints and faces on the Net2 Access Control system. If you install the Enrollment Helper, you can enroll fingerprints and faces by opening a window for enrollment directly from the Net2 Access Control system."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The enrollment helper is automatically installed with the installation of the integration."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enroll-credentials-with-enrollment-helper",
      children: "Enroll Credentials with Enrollment Helper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can enroll fingerprints and faces for both existing and new users."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enroll-credentials-to-existing-user",
      children: "Enroll Credentials to Existing User"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Run ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Net2 Access Control"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Users"
          }), " menu and select the user to enroll fingerprints or faces on the user list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Tokens"
          }), " and then click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Biometric"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/enroll-credential-existing-user3.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Login"
          }), " after entering the Username and Password for BioStar 2."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/enroll-credential-existing-user4.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "A user can login with an account that exists in BioStar 2. A login session is remembered, so you will not have to continuously log in, this uses the session timeout value from BioStar 2."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Click ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/integration/ico-enroll-credential-existing-user-setting.png",
                  ico: true,
                  alone: true
                }), " to change the BioStar 2 Address and port. You can also enter an SMTP password if QR email is used. There is also an option if IR face is being used (FS2/FL devices)."]
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/enroll-credential-existing-user-setting4-1.png",
            alone: true
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Fingerprints can be enrolled from the first section, faces from the second section. User information will automatically populate below the Suprema logo. There will also be a prompt at bottom if user has existing enrollments."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/enroll-credential-existing-user-setting5.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can select either a USB device or Network connected device (Devices in BioStar 2) to complete the fingerprint enrollment, you can also select a Quality limit on the received fingerprint, any existing fingerprints will appear in the list before ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "New"
          }), ", selecting ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "New"
          }), " will enroll a new fingerprint, selecting any of the numbers will remove and re-enroll that fingerprint."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/enroll-credential-existing-user-setting6.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Once scanned, fingerprint view will show a live version of the fingerprint, then turns green if accepted, press confirm to register to the user."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/enroll-credential-existing-user-setting7.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["There are two options for the facial enrollment, a device connected to BioStar 2 can be used, or a visual email can be sent. For device enrollment, selecting from list and then ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Scan Face"
          }), " will prompt for a scan. With output displayed in the middle. Pressing ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Confirm"
          }), " will complete the enrollment."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/enroll-credential-existing-user-setting8.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For visual email, this requires email setup previously done in BioStar 2/Settings Editor, if setup correctly, this will prompt ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Successfully sent enrollment email"
          }), ", you can press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Exit"
          }), " after email has been sent."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/enroll-credential-existing-user-setting9.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Lastly, there is ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Send QR Email"
          }), ", this uses an SMTP client within the enrollment helper itself, so will need a copy of the SMTP password (Mentioned in tip earlier), this also requires an existing token number to be registered to the user in Net2. If successful, QR will prompt as sent, you can then press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Exit"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/enroll-credential-existing-user-setting10.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/enroll-credential-existing-user-setting10-1.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enroll-credentials-to-new-user",
      children: "Enroll Credentials to New User"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Run ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Net2 Access Control"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Users"
          }), " menu and double-click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/ico-enroll-credentials-new-user.png",
            ico: true,
            alone: true
          }), " New user."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the user information to add and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Biometric"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/enroll-credentials-new-user3.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The rest of enrollment is similar to above, but because the user is a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "New User"
          }), ", the user will not have an email within BioStar 2, so both email options are disabled, if email is required, first add user in Net2 with Email then wait for sync to BioStar 2."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/enroll-credentials-new-user4.png",
          alone: true
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