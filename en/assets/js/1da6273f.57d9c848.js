"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6340"], {
87711: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_biometric_readers_and_credentials_mdx_1da_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-biometric-readers-and-credentials-mdx-1da.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_biometric_readers_and_credentials_mdx_1da_namespaceObject = JSON.parse('{"id":"platform/biostar_air/biometric-readers-and-credentials","title":"Biometric Readers and Credentials","description":"Learn how to register and configure biometric devices in BioStar Air, enroll facial authentication credentials, and set up single or two-factor authentication for BioStation 3 and BioEntry W3.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/biometric-readers-and-credentials.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/biometric-readers-and-credentials","permalink":"/docs/en/platform/biostar_air/biometric-readers-and-credentials","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/biometric-readers-and-credentials.mdx","tags":[],"version":"current","frontMatter":{"id":"biometric-readers-and-credentials","title":"Biometric Readers and Credentials","description":"Learn how to register and configure biometric devices in BioStar Air, enroll facial authentication credentials, and set up single or two-factor authentication for BioStation 3 and BioEntry W3.","keywords":["biometric readers","credentials","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Firmware upgrade","permalink":"/docs/en/platform/biostar_air/how-to-upgrade-firmware"},"next":{"title":"Door Management","permalink":"/docs/en/platform/biostar_air/manage-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/biometric-readers-and-credentials.mdx


const frontMatter = {
	id: 'biometric-readers-and-credentials',
	title: 'Biometric Readers and Credentials',
	description: 'Learn how to register and configure biometric devices in BioStar Air, enroll facial authentication credentials, and set up single or two-factor authentication for BioStation 3 and BioEntry W3.',
	keywords: [
		'biometric readers',
		'credentials',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Step-by-step instructions",
  "id": "step-by-step-instructions",
  "level": 2
}, {
  "value": "Register biometric device",
  "id": "registerBiometricReader",
  "level": 3
}, {
  "value": "Configure reader",
  "id": "configureDevice",
  "level": 3
}, {
  "value": "Enroll user faces",
  "id": "add-or-edit-user-and-enroll-face",
  "level": 3
}, {
  "value": "Notes",
  "id": "notes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, IcAirEdit, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air now supports biometric readers and biometric credentials to enhance secure access control. Register and configure compatible biometric devices, such as BioStation 3 (BS3) and BioEntry W3 (W3), to authenticate users via facial authentication. The feature supports both single and two\nfactor authentication, enhancing flexibility and security."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Register readers"
          }), ": Use the BioStar Air mobile app to register biometric readers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Device setting"
          }), ": Go to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "BioStar Air Portal"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " to configure the device facial authentication setting."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Face credential setting"
          }), ": Go to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "BioStar Air Portal"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " to add or edit users. Activate the facial credential in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "credential_detail",
            product: "air"
          }), " section."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-by-step-instructions",
      children: "Step-by-step instructions"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "registerBiometricReader",
          children: "Register biometric device"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verify that BioStar Air-compatible firmware is installed on the BioEntry W3 or BioStation 3. Models whose names end with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-AIR"
          }), " already include the default firmware supplied by Suprema."]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Launch the BioStar Air app on the mobile device and sign in with the administrator ID and password. Register the device in the same way as any other reader."
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on device registration, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "register-device",
              children: "the following"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "configureDevice",
          children: "Configure reader"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Log in to the ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://admin.biostarair.com",
                children: "BioStar Air Portal"
              }), " with an administrator account."]
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
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Click the biometric reader in the device list."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_edit_title",
                product: "air"
              }), " window appears, go to the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication",
                product: "air"
              }), " section."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-bs3-info-edit.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Set ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication_txt1",
                product: "air"
              }), "."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Single-factor"
                  }), ": Authenticate with either an RF card or facial authentication."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Two-factor"
                  }), ": Delete either the RF card or facial authentication factor, then re-enroll both to enable two-factor authentication. Click ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "add_btn",
                    product: "air"
                  }), " and combine desired authentication methods."]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-two-fator-auth.png",
              width: "30%"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Set ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication_auth_timeout",
                product: "air"
              }), ". If the credential is not authenticated within the specified time, authentication will fail."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Configure the following options in the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_face",
                product: "air"
              }), " section."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_7_title",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_2_title",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_3_title",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_4_title",
                  product: "air"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Configure additional options."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_7_text2",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_title",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_1_text",
                  product: "air"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on the settings in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_nav_title_authentication",
              product: "air"
            }), " section, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "managing-registered-devices#faceAuthentication",
              children: "the following"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "add-or-edit-user-and-enroll-face",
          children: "Enroll user faces"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), " in the left sidebar."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Open the window to add a new user or edit an existing user."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Add a new user"
                  }), ": Click ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "add_user_btn",
                    product: "air"
                  }), " in the upper right of the user list."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Edit an existing user"
                  }), ": Select the user in the list, then click ", (0,jsx_runtime.jsx)(IcAirEdit, {}), "."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["From the user information window, go to the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "credential_detail",
                product: "air"
              }), " section and enable the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_type_option5",
                product: "air"
              }), " credential."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-info-credential-face.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(IcAdd, {}), " and add the facial template."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-info-credential-face-add.png"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "select_file",
                    product: "air"
                  }), ": Select a photo file stored locally"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "register_on_device",
                    product: "air"
                  }), ": Use the connected biometric reader (BioEntry W3 or BioStation 3)"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "register_on_mobile",
                    product: "air"
                  }), ": Scan the QR code sent to the user’s mobile device and enroll the face from the mobile device"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "Only two face photos can be uploaded per user. Generally, one photo is sufficient."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " to complete face enrollment."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on uploading user face photos in bulk, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "adding-users-in-bulk#uploadProfileImages",
              children: "the following"
            }), "."]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air-compatible firmware must be installed for the biometric reader to operate normally."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Up to two face templates can be used per user."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For advanced configuration, refer to the BioEntry W3 or BioStation 3 user guide."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enroll at least two credentials to use two-factor authentication. For example, enroll both RF card and face credentials."
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