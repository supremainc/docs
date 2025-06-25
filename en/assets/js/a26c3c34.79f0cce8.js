"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3088"], {
3377: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_security_mdx_a26_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-system-security-mdx-a26.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_security_mdx_a26_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-security","title":"Security","description":"Provides various configuration methods to enhance the security of the BioStar X system.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-security.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-security","permalink":"/docs/en/platform/biostar_x/settings-system-security","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-security.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-security","title":"Security","description":"Provides various configuration methods to enhance the security of the BioStar X system.","keywords":["System Security","Encryption"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"System Restore","permalink":"/docs/en/platform/biostar_x/settings-system-system-restore"},"next":{"title":"Daylight Saving Time","permalink":"/docs/en/platform/biostar_x/settings-system-daylight-saving-time"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-security.mdx


const frontMatter = {
	id: 'settings-system-security',
	title: 'Security',
	description: 'Provides various configuration methods to enhance the security of the BioStar X system.',
	keywords: [
		'System Security',
		'Encryption'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*
:::info

If you use <Cmd>Cloud</Cmd>, only <Cmd sid="setting.server.passwordLevelMedium" product='2' /> and <Cmd sid="setting.server.passwordLevelStrong" product='2' /> are available.

:::
*/


const toc = [{
  "value": "Login Password",
  "id": "login-password",
  "level": 2
}, {
  "value": "Advanced Security Settings",
  "id": "advanced-security-settings",
  "level": 2
}, {
  "value": "Session Security",
  "id": "session-security",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Provides various configuration methods to enhance the security of the BioStar X system."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the left sidebar, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.systemSecurity",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set each field as needed."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "login-password",
      children: "Login Password"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set the complexity level and change cycle for login passwords."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-password.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.passwordLevel",
            product: "2"
          }), ": Set the policy for the password complexity for BioStar X login."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.passwordLevelDefault",
                product: "2"
              }), ": You can enter up to 32 characters."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.passwordLevelMedium",
                product: "2"
              }), ": You must combine 8 to 32 alphabetic characters (uppercase or lowercase), and numbers."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.passwordLevelStrong",
                product: "2"
              }), ": You must combine 10 to 32 alphabetic characters (uppercase and lowercase, at least one alphabetic capital), numbers, and  symbols."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.systemSecurity.passwordUpdateCycle",
            product: "2"
          }), ": You can set the period for which you want to use the password. If the Maximum Password Age is exceeded, a password change request message is displayed at login."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can set the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.systemSecurity.passwordUpdateCycle",
              product: "2"
            }), " from 1 day to 180 days."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.systemSecurity.allowLoginFailed",
            product: "2"
          }), ": You can set the Maximum Invalid Attempts and the time limit. If you enter the wrong password more than the set number of times, you will not be able to log in for the time limit."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The default value for ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.systemSecurity.allowLoginFailed",
              product: "2"
            }), " is ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.active",
              product: "2"
            }), " (max 100 time(s) / 10 minutes of login limit)."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.systemSecurity.allowPasswordChange",
            product: "2"
          }), ": You can set the Maximum Password Change Limit."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can set the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.systemSecurity.allowPasswordChange",
              product: "2"
            }), " up to 10 times."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advanced-security-settings",
      children: "Advanced Security Settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Encrypt communication between BioStar X and devices, and enhance session security."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-advanced.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.encrypt.db",
            product: "2"
          }), ": When ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), " is set for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.encrypt.db",
            product: "2"
          }), ", all sensitive data including credential data and personal information will be stored in the database as encrypted. If this option is set as ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.notUse",
            product: "2"
          }), ", the encrypted data will be decrypted and the user's personal information will be stored in an unencrypted state."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsxs)("summary", {
              children: ["Items to be encrypted when using ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.sever.secure.comm.encrypt.db",
                product: "2"
              }), " are as follows."]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Profile image"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "User ID"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Name"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Phone number"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "User IP"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Email information for sender ans recipients"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Login ID"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Login password"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Face template"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Fingerprint template"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Card ID"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Smart card layout key"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Custom information for user and visitor"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Image log files"
                }), "\n"]
              }), "\n"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Do not force start the server while ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.sever.secure.comm.encrypt.db",
                product: "2"
              }), ". Errors such as failure to log in to BioStar X may occur."]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.encryption_key_db",
            product: "2"
          }), ": You can set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.encryption_key_db",
            product: "2"
          }), ". Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.key_change",
            product: "2"
          }), " and set a new encryption key. If changing the encryption key, the existing data will be re-encrypted."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "You can enter the encryption key with 32 characters using letters, numbers, and symbols."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.menu",
            product: "2"
          }), ": The communication between BioStar X and a device can be protected using a certificate.", (0,jsx_runtime.jsx)("br", {}), "When ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), " is set for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.menu",
            product: "2"
          }), ", BioStar X creates and sends a certificate to the device. The device can use a secure channel for exchanging data with BioStar X using this certificate. In order to use an external certificate, Root certificate, Public key certificate, and Private key files must be uploaded.", (0,jsx_runtime.jsx)("br", {}), "If ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.data_encryption",
            product: "2"
          }), " set to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), ", you can set a new data encryption key and administrator password."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsxs)("summary", {
              children: ["The devices and firmware versions where ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.sever.secure.comm.menu",
                product: "2"
              }), " can be set are as follows."]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "FaceStation 2 FW 1.1.0 or later"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation A2 FW 1.5.0 or later"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 2 FW 1.6.0 or later"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation L2 FW 1.3.0 or later"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioLite N2 FW 1.0.0 or later"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry P2 FW 1.1.0 or later"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry W2 FW 1.2.0 or later"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "FaceLite FW 1.0.0 or later"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "XPass 2 FW 1.0.0 or later"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "CoreStation FW 1.1.0 or later"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "X-Station 2 FW 1.0.0 or later"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 3 FW 1.0.0 or later"
                }), "\n"]
              }), "\n"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["BioStar X creates or deletes a certificate according to the setting status of Secure communication with device, and the same certificate as the previous certificate will not be created. For example, if the setting of Secure communication with device is changed in the order of ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.use",
                  product: "2"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.notUse",
                  product: "2"
                }), ", the created certificate will be deleted automatically. When the setting is changed in the order of ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.use",
                  product: "2"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.notUse",
                  product: "2"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.use",
                  product: "2"
                }), ", the operation of ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Create A certificate"
                }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Delete A certificate"
                }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Create B certificate"
                }), " is carried out."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "If the device is disconnected from the network physically while using the secure communication of BioStar X, do not turn off the secure communication option. In such a case, the certificate of BioStar X will be deleted, and the device will not be able to connect again. To connect it again, the certificate saved in the device must be deleted or the device must be reset to factory default. For more details, refer to the manual of the device."
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.secure.comm.title",
          product: "2"
        }), " tab is only active when you log in as the initial administrator."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "session-security",
      children: "Session Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enhance session security."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-session.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.systemSecurity.useSimultaneousConnection",
          product: "2"
        }), ": You can set whether to allow simultaneous connections using the same account. If you set Simultaneous Connection Allow to ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.inactive",
          product: "2"
        }), ", a previously logged in user will be logged out when attempting to connect to the same account simultaneously."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " to save the settings."]
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