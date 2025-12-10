"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["18757"], {
99997: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_xstation_2_authentication_mdx_5cd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-xstation-2-authentication-mdx-5cd.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_xstation_2_authentication_mdx_5cd_namespaceObject = JSON.parse('{"id":"device/xstation_2/authentication","title":"Certifications","description":"Describes the supported authentication methods and authentication procedures.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/xstation_2/authentication.mdx","sourceDirName":"device/xstation_2","slug":"/device/xstation_2/authentication","permalink":"/docs/en/device/xstation_2/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/xstation_2/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"Certifications","description":"Describes the supported authentication methods and authentication procedures.","keywords":["Authentication mode","Operation","PIN","Fingerprint","T&A (Time and Attendance)"],"isTranslationMissing":false},"sidebar":"xstation2","previous":{"title":"User","permalink":"/docs/en/device/xstation_2/user"},"next":{"title":"Settings","permalink":"/docs/en/device/xstation_2/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/xstation_2/authentication.mdx


const frontMatter = {
	id: 'authentication',
	title: 'Certifications',
	description: 'Describes the supported authentication methods and authentication procedures.',
	keywords: [
		'Authentication mode',
		'Operation',
		'PIN',
		'Fingerprint',
		'T&A (Time and Attendance)'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Authentication mode",
  "id": "authentication-mode",
  "level": 2
}, {
  "value": "Registering auth mode",
  "id": "registering-auth-mode",
  "level": 3
}, {
  "value": "Modifying auth mode",
  "id": "modifying-auth-mode",
  "level": 3
}, {
  "value": "Delete auth mode",
  "id": "delete-auth-mode",
  "level": 3
}, {
  "value": "Operation",
  "id": "operation",
  "level": 2
}, {
  "value": "PIN",
  "id": "pin",
  "level": 2
}, {
  "value": "Auth result display option",
  "id": "auth-result-display-option",
  "level": 2
}, {
  "value": "QR/Barcode Authentication Options",
  "id": "qrbarcode-authentication-options",
  "level": 2
}, {
  "value": "Fingerprint settings <Badge>XS2-ODPB, XS2-OAPB</Badge>",
  "id": "fingerprint-settings-xs2-odpb-xs2-oapb",
  "level": 2
}, {
  "value": "Attendance Mode",
  "id": "attendance-mode",
  "level": 2
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, Cmd, Image} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Describes the supported authentication methods and authentication procedures."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authentication-mode",
      children: "Authentication mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set the authentication mode. You can use ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_312",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_040",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_323",
        product: "dev"
      }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_020",
        product: "dev"
      }), " in combination for authentication modes, and you can also set a schedule for each authentication mode."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Fingerprint authentication is only available for the XS2-ODPB and XS2-OAPB products."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registering-auth-mode",
      children: "Registering auth mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add2.svg",
            ico: true,
            alone: true
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pressing ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add1.svg",
            ico: true,
            alone: true
          }), " will display the credential that can be added on the screen. Select the credentials to add. Press the ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-cancel.svg",
            ico: true,
            alone: true
          }), " while the credential is added, and the added credential will be deleted."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-auth-authmode.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After setting the desired authentication mode, set ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_203",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)("div", {
          className: "overflow-x",
          children: (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "center"
                  },
                  children: "Category"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Description"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "Fingerprint"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-fingerprint.png",
                    ico: true,
                    alone: true
                  }), ": This mode uses only fingerprint.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-fingerprint.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode requires entering a PIN after authenticating via fingerprint."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "Card / QR Code"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode uses only card / QR code authentication.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-fingerprint.png",
                    ico: true,
                    alone: true
                  }), ": This mode requires authentication via card/QR code followed by fingerprint authentication.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode requires card / QR code authentication followed by PIN entry.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-fingerprint.png",
                    ico: true,
                    alone: true
                  }), " / ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode allows for authentication via card/QR code followed by either fingerprint or PIN entry.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-fingerprint.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode uses both fingerprint authentication and PIN entry after authentication via card/QR code."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "ID"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-fingerprint.png",
                    ico: true,
                    alone: true
                  }), ": This mode requires entering an ID followed by fingerprint authentication.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode requires ID entry followed by PIN entry.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-fingerprint.png",
                    ico: true,
                    alone: true
                  }), " / ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode allows for entering an ID followed by either fingerprint authentication or entering a PIN.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-fingerprint.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode uses both fingerprint authentication and PIN entry after entering an ID."]
                })]
              })]
            })]
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_203",
                  product: "dev"
                }), " can be set in BioStar X. If no schedule is set, only ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_361",
                  product: "dev"
                }), " can be selected."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["For more information about ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_203",
                  product: "dev"
                }), " settings, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/settings-schedule",
                  children: "BioStar X Administrator Guide"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["To use ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_043",
                  product: "dev"
                }), " authentication on XS2-DPB, XS2-APB, XS2-ODPB, and XS2-OAPB models, ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_043",
                  product: "dev"
                }), " must be activated in ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_256",
                  product: "dev"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_044",
                  product: "dev"
                }), ", and a separate device license is required. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings#license",
                  children: "License"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To save the settings, press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modifying-auth-mode",
      children: "Modifying auth mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the authentication mode to modify."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Modify the authentication mode by referring to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#registering-auth-mode",
            children: "Registering auth mode"
          }), " and press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-auth-mode",
      children: "Delete auth mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-delete.svg",
            ico: true,
            alone: true
          }), " and select the authentication mode to delete. You can select multiple options."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To delete the selected item, press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operation",
      children: "Operation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After pressing ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", change the desired item in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_265",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-auth.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_260",
                product: "dev"
              }), ": If authentication is not completed within the set time, authentication will fail. It can be set to 3 to 20 seconds."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_185",
                product: "dev"
              }), ": When server matching is set, the device does not perform user authentication; BioStar X performs user authentication. It can be used when the device has too much user information or when the device is installed outside."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you use ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_185",
              product: "dev"
            }), ", you must enable server matching on both the device and BioStar X. For more information about BioStar X server matching settings, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-server-server#servermatching",
              children: "BioStar X Administrator Guide"
            }), "."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pin",
      children: "PIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set whether to use the scramble keypad when entering passwords."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After pressing ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", set whether to use ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_040",
            product: "dev"
          }), " in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_204",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-auth1.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_204",
              product: "dev"
            }), ": The positions of numeric keys can be scrambled randomly when entering a password to prevent password leaks."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "auth-result-display-option",
      children: "Auth result display option"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set the auth result display option."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After pressing ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", change the desired items in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_259",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-auth2.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_169",
                product: "dev"
              }), ": Select how the user ID appears on the device's authentication result screen."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_307",
                    product: "dev"
                  }), ": Show the entire user ID."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_316",
                    product: "dev"
                  }), ": Show only the first character of the user ID."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_357",
                    product: "dev"
                  }), ": Do not show the user ID."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_177",
                product: "dev"
              }), ": Select how the user name appears on the device's authentication result screen."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_307",
                    product: "dev"
                  }), ": Show the entire user name."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_316",
                    product: "dev"
                  }), ": Show only the first character of the user name."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_357",
                    product: "dev"
                  }), ": Do not show the user name."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qrbarcode-authentication-options",
      children: "QR/Barcode Authentication Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set QR/Barcode authentication."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After pressing ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", enable ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_043",
            product: "dev"
          }), " in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_044",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Badge, {
      only: true,
      children: "XS2-QDPB, XS2-QAPB"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xs2-auth3.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_043",
            product: "dev"
          }), ": You can choose whether to use QR/Barcode authentication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_374",
            product: "dev"
          }), ": If a QR/Barcode is not scanned within the set time, recognition will fail. It can be set to 4 to 10 seconds."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_329",
            product: "dev"
          }), ": You can set it to authenticate using a QR code that has the same data as the CSN card or Wiegand card issued to the user."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Badge, {
      only: true,
      children: "XS2-DPB, XS2-APB, XS2-ODPB, XS2-OAPB"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xs2-auth3-1.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_043",
            product: "dev"
          }), ": You can choose whether to use QR/Barcode authentication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_375",
            product: "dev"
          }), ": If a QR/Barcode is not scanned within the set time, recognition will fail. It can be set to 3 to 20 seconds. Can only be set when ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_043",
            product: "dev"
          }), " is enabled."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_140",
            product: "dev"
          }), ": Set the sensitivity that detects movement around the device. Can only be set when ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_043",
            product: "dev"
          }), " is enabled."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_329",
            product: "dev"
          }), ": You can set it to authenticate using a QR code that has the same data as the CSN card or Wiegand card issued to the user. Can only be set when ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_043",
            product: "dev"
          }), " is enabled."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To use ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_043",
          product: "dev"
        }), " authentication on XS2-DPB, XS2-APB, XS2-ODPB, and XS2-OAPB models, ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_043",
          product: "dev"
        }), " must be activated in ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_256",
          product: "dev"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_044",
          product: "dev"
        }), ", and a separate device license is required. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings#license",
          children: "License"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "fingerprint-settings-xs2-odpb-xs2-oapb",
      children: ["Fingerprint settings ", (0,jsx_runtime.jsx)(Badge, {
        only: true,
        children: "XS2-ODPB, XS2-OAPB"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the settings for fingerprint authentication."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After pressing ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", change the desired items in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_312",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-auth4.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_149",
                product: "dev"
              }), ": You can set the security level for 1", ":N", " authentication."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_130",
                product: "dev"
              }), ": Set the wait time for fingerprint matching. If authentication is not completed within the set time, it fails."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_254",
                product: "dev"
              }), ": View the raw image when scanning a fingerprint."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_197",
                product: "dev"
              }), ": Set the fingerprint sensor sensitivity. Set the sensitivity higher to obtain precise fingerprint information."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_003",
                product: "dev"
              }), ": Set the fingerprint authentication performance. When you select ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_275",
                product: "dev"
              }), ", authentication speed is set according to the total number of fingerprint templates enrolled in the device."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_342",
                product: "dev"
              }), ": Set the fingerprint template format. The default is ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_057",
                product: "dev"
              }), ". Changing the template format blocks the use of all previously stored fingerprints, so proceed with caution."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "Delete all user fingerprint information and then change the template format. If user fingerprint information is enrolled, you cannot change the template format."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_198",
                product: "dev"
              }), ": Set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_277",
                product: "dev"
              }), " to turn on the fingerprint sensor when it detects the user’s finger. Set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_362",
                product: "dev"
              }), " to keep the sensor always on, even when not scanning fingerprints."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_249",
                product: "dev"
              }), ": Set the fake fingerprint detection level. Higher levels for fake fingerprint detection may also increase rejection rates for actual people’s fingerprints."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_116",
                product: "dev"
              }), ": Inspect the quality of the scanned fingerprint to save high-quality fingerprint data. When enabled, the device notifies the user if the fingerprint quality is low, helping them scan correctly."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_118",
                product: "dev"
              }), ": Check for duplicate fingerprints during enrollment."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attendance-mode",
      children: "Attendance Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set how to register T&A mode."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After pressing ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", change the desired item in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_083_list",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-auth5.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083_list",
                product: "dev"
              }), ": Set how to use time and attendance mode."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_086",
                product: "dev"
              }), ": Add time and attendance events. To register attendance events, select ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_086",
                product: "dev"
              }), " → ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-add2.svg",
                ico: true,
                alone: true
              }), " and set the icons to be displayed on the screen, ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_085",
                product: "dev"
              }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_203",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_082",
                product: "dev"
              }), ": Require users to select a time and attendance event during authentication. Available when ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083_list",
                product: "dev"
              }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_199",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_081",
                product: "dev"
              }), ": Allow users to use only time and attendance events selected by the administrator. Available when ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083_list",
                product: "dev"
              }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_071",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_279",
                product: "dev"
              }), ": Select whether to use job codes."]
            }), "\n"]
          }), "\n"]
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