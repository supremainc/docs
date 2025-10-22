"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7274"], {
15620: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ enroll_credential_mobile_frontMatter),
  toc: () => (/* binding */ enroll_credential_mobile_toc),
  "default": () => (/* binding */ enroll_credential_mobile_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_mobile_mdx_034_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ enroll_credential_mobile_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-mobile-mdx-034.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_mobile_mdx_034_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-mobile","title":"Enroll Mobile Access Cards","description":"Integrating with Suprema\'s Airfob Portal enables issuing mobile access cards to users.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-mobile.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-mobile","permalink":"/docs/en/platform/biostar_x/enroll-credential-mobile","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-mobile.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-mobile","title":"Enroll Mobile Access Cards","description":"Integrating with Suprema\'s Airfob Portal enables issuing mobile access cards to users.","keywords":["Mobile access card","Enrollment","Credentials","Certifications","card"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Enroll Access Card","permalink":"/docs/en/platform/biostar_x/enroll-credential-card"},"next":{"title":"Enroll QR/Barcode","permalink":"/docs/en/platform/biostar_x/enroll-credential-qrbarcode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_enroll-credential-mobile-notes.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you have enabled the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.photo",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.department",
          product: "2"
        }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "team.user.detail.title",
          product: "2"
        }), " options in the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.info",
          product: "2"
        }), " section, that information can be displayed on the user's mobile access card."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.validPeriod",
          product: "2"
        }), " field is activated when the site is created as a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic"
        }), " site in the Airfob Portal. You can set the expiration duration and usage period for the mobile access cards. For more information about the Airfob Portal, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://airfob.zohodesk.com/portal",
          children: "following link"
        }), "."]
      }), "\n"]
    }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-mobile.mdx


const enroll_credential_mobile_frontMatter = {
	id: 'enroll-credential-mobile',
	title: 'Enroll Mobile Access Cards',
	description: 'Integrating with Suprema\'s Airfob Portal enables issuing mobile access cards to users.',
	keywords: [
		'Mobile access card',
		'Enrollment',
		'Credentials',
		'Certifications',
		'card'
	],
	isTranslationMissing: false
};
const enroll_credential_mobile_contentTitle = undefined;

const assets = {

};




const enroll_credential_mobile_toc = [{
  "value": "CSN mobile",
  "id": "csnmobilecard",
  "level": 2
}, {
  "value": "Card assignment",
  "id": "card-assignment",
  "level": 3
}, ...toc, {
  "value": "Enter manually",
  "id": "enter-manually",
  "level": 3
}, ...toc, ...toc];
function enroll_credential_mobile_createMdxContent(props) {
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
  }, {Cmd, Image} = _components;
  if (!Cmd) enroll_credential_mobile_missingMdxReference("Cmd", true);
  if (!Image) enroll_credential_mobile_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Integrating with Suprema's Airfob Portal enables issuing mobile access cards to users. Users can enroll mobile access cards individually or use the CSV import feature to enroll multiple users at once."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You need to enter the user's email according to the method of sending mobile access cards set up in the AirPop portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Only one of the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSN Mobile Card"
            }), " or the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template on Mobile"
            }), " can be used."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This feature can only be used when linked with the Airfob portal. For more information regarding the Airfob Portal and mobile access card use, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-credential-mobile-access-card",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csnmobilecard",
      children: "CSN mobile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can issue CSN mobile access cards to users."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "card-assignment",
      children: "Card assignment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.mobileCredential",
            product: "2"
          }), " button in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.mobile",
            product: "2"
          }), " window appears, select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " option and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnrol.cardTypeCsnMobile",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), " options, select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.assignCard",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-mobile-csn-assign.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select or search for the card desired to assign from the card list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.validPeriod",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(MDXContent, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enter-manually",
      children: "Enter manually"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.mobileCredential",
            product: "2"
          }), " button in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.mobile",
            product: "2"
          }), " window appears, select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " option and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnrol.cardTypeCsnMobile",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.enterManually",
            product: "2"
          }), " from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), " options."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-mobile-csn.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.inputType",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.random.cardid",
                product: "2"
              }), ": Automatically generate a card ID."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.useUserId",
                product: "2"
              }), ": Uses the user ID as the card ID."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.manual.input",
                product: "2"
              }), ": Allows manual entry of the card ID."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.validPeriod",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the user has lost or deleted the activation link sent via email, click the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "resend"
            }), " button to reissue the activation link."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about the CSN mobile application, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.csn.edu/csn-mobile-apps",
              children: "following link"
            }), "."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "template-on-mobile",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.tom",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Template on Mobile"
      }), " is a mobile access card that stores the user's biometric template on a mobile device. It can authenticate biometrically without storing user data on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " server or the AirPop portal (Airfob Portal) and device."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This feature is useful for environments that want to use biometrics as credentials but cannot store biometric information on the server and device due to privacy concerns. Since the issuance of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template on Mobile"
      }), " and the biometric template registration process are conducted separately, users can enroll their face directly on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template on Mobile"
      }), " supported devices without facing an administrator."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.mobileCredential",
            product: "2"
          }), " button in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.mobile",
            product: "2"
          }), " window appears, select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " option and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnroll.cardTypeTemplateOnMobile",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-mobile-tom.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired card type from ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardModeLong",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.accessOnCard",
                product: "2"
              }), ": User information (card ID, PIN, access group, duration, private authentication mode) can be stored on the card."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.secureCredentialCard",
                product: "2"
              }), ": Secure credential card. User card ID and PIN data can be stored."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.validPeriod",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An issuance email will be sent to the registered user's email address. The user must install the Airfob Pass application through the link in the email to complete the issuance of the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template on Mobile"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "How to Template on Mobile Authentication"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The user tags the mobile device that issued the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Template on Mobile"
        }), " against the auth device and follows the on-screen prompts to authenticate their face."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For devices and firmware versions that support ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template on Mobile"
            }), ", refer to the list below."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 firmware version 1.2.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W3 firmware version 1.0.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2 Firmware version 2.2.0 or higher"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Only one mobile access card can be issued: either ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSN mobile card"
            }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template on Mobile"
            }), "."]
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function enroll_credential_mobile_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(enroll_credential_mobile_createMdxContent, {
      ...props
    })
  }) : enroll_credential_mobile_createMdxContent(props);
}
function enroll_credential_mobile_missingMdxReference(id, component) {
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