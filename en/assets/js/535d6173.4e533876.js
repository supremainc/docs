"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["55002"], {
95253: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_biostation_3_authentication_mdx_535_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-biostation-3-authentication-mdx-535.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_biostation_3_authentication_mdx_535_namespaceObject = JSON.parse('{"id":"device/biostation_3/authentication","title":"Certifications","description":"Describes the supported authentication methods and authentication procedures.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/biostation_3/authentication.mdx","sourceDirName":"device/biostation_3","slug":"/device/biostation_3/authentication","permalink":"/docs/en/device/biostation_3/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"Certifications","description":"Describes the supported authentication methods and authentication procedures.","keywords":["Authentication mode","Operation","PIN","Face","T&A (Time and Attendance)"],"isTranslationMissing":false},"sidebar":"biostation3","previous":{"title":"User","permalink":"/docs/en/device/biostation_3/user"},"next":{"title":"Settings","permalink":"/docs/en/device/biostation_3/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/biostation_3/authentication.mdx


const frontMatter = {
	id: 'authentication',
	title: 'Certifications',
	description: 'Describes the supported authentication methods and authentication procedures.',
	keywords: [
		'Authentication mode',
		'Operation',
		'PIN',
		'Face',
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
  "value": "Server matching",
  "id": "server-matching",
  "level": 3
}, {
  "value": "QR authentication",
  "id": "qr-authentication",
  "level": 3
}, {
  "value": "PIN",
  "id": "pin",
  "level": 2
}, {
  "value": "Auth result display option",
  "id": "auth-result-display-option",
  "level": 2
}, {
  "value": "Face",
  "id": "face",
  "level": 2
}, {
  "value": "T&amp;A (Time and Attendance)",
  "id": "ta-time-and-attendance",
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
  }, {Cmd, Image} = _components;
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
        sid: "ui_228",
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
      }), " in combination as authentication modes, and you can set the schedule for each authentication mode."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registering-auth-mode",
      children: "Registering auth mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " and authenticate with the Admin level credential."]
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
            src: "/img/common/ico-add.svg",
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
          src: "/img/device/bs3-authmode.png"
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
                  children: "Face"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["* ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode uses only facial authentication.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode requires facial authentication followed by PIN entry."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "Card / QR Code"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["* ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode uses only card / QR code authentication.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode requires card / QR code authentication followed by facial authentication.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
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
                    src: "/img/common/ico-authmode-face-bs3.png",
                    ico: true,
                    alone: true
                  }), " / ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode requires card / QR code authentication followed by either facial authentication or PIN entry.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode uses both facial authentication and PIN entry after card / QR code authentication."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "ID"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["* ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode requires ID entry followed by facial authentication.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
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
                    src: "/img/common/ico-authmode-face-bs3.png",
                    ico: true,
                    alone: true
                  }), " / ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode requires ID entry followed by either facial authentication or PIN entry.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-bs3.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs3.png",
                    ico: true,
                    alone: true
                  }), ": This mode uses both facial authentication and PIN entry after ID entry."]
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
                }), " settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/settings-schedule",
                  children: "the following"
                }), " BioStar X Administrator Manual."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["To use ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_042",
                  product: "dev"
                }), " authentication, ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_256",
                  product: "dev"
                }), " must be clicked and ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_265",
                  product: "dev"
                }), " must have ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_041",
                  product: "dev"
                }), " activated, and a separate device license is required. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
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
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " and authenticate with the Admin level credential."]
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
          children: ["Refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#registering-auth-mode",
            children: "registering auth mode"
          }), " to modify the authentication mode, then press ", (0,jsx_runtime.jsx)(Cmd, {
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
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " and authenticate with the Admin level credential."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "server-matching",
      children: "Server matching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set up server matching."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " and authenticate with the Admin level credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After pressing ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", activate ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_265",
            product: "dev"
          }), " in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_187",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3-auth-option.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_187",
              product: "dev"
            }), ": When server matching is set, user authentication is performed by BioStar X without the device performing user authentication. It can be used when the device has too much user information or when the device is installed outside."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_185",
                  product: "dev"
                }), " can only use cards and IDs."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["If you use ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_185",
                  product: "dev"
                }), ", you must enable server matching on both the device and BioStar X. For more information about BioStar X server matching settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/settings-server-server#servermatching",
                  children: "the following"
                }), " BioStar X Administrator Manual."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qr-authentication",
      children: "QR authentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can activate QR code authentication."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " and authenticate with the Admin level credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After pressing ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", activate ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_265",
            product: "dev"
          }), " for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_041",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3-auth-option-qr.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_041",
                product: "dev"
              }), ": Set whether to use QR code authentication through the device's camera."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_329",
                product: "dev"
              }), ": You can set up authentication with a QR code that has the same data as the CSN card or Wiegand card issued to the user. This can only be set when ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_041",
                product: "dev"
              }), " is activated."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["A separate device license is required to use ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_041",
              product: "dev"
            }), ". For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings#license",
              children: "License"
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
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " and authenticate with the Admin level credential."]
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
          src: "/img/device/bs3-pin.png"
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
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " and authenticate with the Admin level credential."]
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
          src: "/img/device/bs3-auth-result-display-option.png"
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
      id: "face",
      children: "Face"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the configuration for facial authentication."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " and authenticate with the Admin level credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_228",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Change the desired item."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3-auth.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_140",
                product: "dev"
              }), ": Set the sensitivity to detect motion around the device. When ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_140",
                product: "dev"
              }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_091",
                product: "dev"
              }), ", touch the screen to authenticate your face."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_115",
                product: "dev"
              }), ": If the face is not enrolled within the set time, the face registration will be canceled."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_260",
                product: "dev"
              }), ": If authentication is not completed within the set time, authentication fails."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_117",
                product: "dev"
              }), ": You can check for duplicate faces during face registration."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_229",
                product: "dev"
              }), ": Set the position and size of the area where the device detects faces during face authentication."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "info",
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: ["For optimal performance, it is recommended to use default settings for the sub-options of ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_229",
                  product: "dev"
                }), ". The default values of each option are as follows:"]
              }), (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Maximum Head Pose Angle: 15"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Detection Distance: Min 30 cm, Max 100 cm"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Wide Search: Deactivated"
                  }), "\n"]
                }), "\n"]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_060",
                product: "dev"
              }), ": By activating ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_060",
                product: "dev"
              }), ", you can enroll the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_340",
                product: "dev"
              }), " issued by BioStar X. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_340",
                product: "dev"
              }), " allows biometric authentication without storing user data on the BioStar X server, Airfob Portal, or device by storing the user's biometric template on a mobile access card."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: ["For more information about ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_340",
                  product: "dev"
                }), ", refer to ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/enroll-credential-mobile#template-on-mobile",
                  children: "the following"
                }), " BioStar X Administrator Manual."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_157",
                product: "dev"
              }), ": You can set to store both the actual images and templates in Visual Face, or to store only the templates without saving the actual images. If disabled, all stored images of visual faces will be deleted, and newly enrolled visual faces will store templates excluding images."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "After disabling this setting, use BioStar 2 v2.9.7 or higher."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_149",
                product: "dev"
              }), ": You can set the security level for 1", ":N", " authentication."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_278",
                product: "dev"
              }), ": You can set the operating mode of the device for face authentication."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_359",
                    product: "dev"
                  }), ": Both visual and infrared matching work to increase the accuracy of face authentication."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_159",
                    product: "dev"
                  }), ": Users can perform rapid authentication while walking within the device's authentication range."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_247",
                product: "dev"
              }), ": You can prevent user authentication with spoofed faces such as photos. Activated when ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_278",
                product: "dev"
              }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_359",
                product: "dev"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Face anti-spoofing performance has been improved to pass the iBeta Level 1 ISO 30107-3 Presentation Attack Detection Test."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["In strong sunlight, it is recommended to use the ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_247",
                      product: "dev"
                    }), " function as ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_152",
                      product: "dev"
                    }), "."]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_070",
                product: "dev"
              }), ": You can change advanced settings for facial authentication, such as mask detection."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_123",
                    product: "dev"
                  }), ": You can set whether to use mask detection."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_067",
                    product: "dev"
                  }), ": You can set the method to check if a mask is worn. This will be activated if set to ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_123",
                    product: "dev"
                  }), "."]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_127",
                      product: "dev"
                    }), ": Users without masks will be denied authentication, and non-mask wearing events will be logged."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_126",
                      product: "dev"
                    }), ": Users without masks can still authenticate, but non-mask wearing events will be logged."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_125",
                      product: "dev"
                    }), ": Only users without masks can authenticate, and if this mode is used, the mask verification mode will be fixed to ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_369",
                      product: "dev"
                    }), "."]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_124",
                product: "dev"
              }), ": Set the sensitivity for detecting mask usage. This will be activated if set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_123",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_368",
                product: "dev"
              }), ": Set the confirmation mode according to the purpose of the device."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_267",
                      product: "dev"
                    }), ": After authentication, check whether the user is wearing a mask."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_369",
                      product: "dev"
                    }), ": Authenticate after checking whether the user is wearing a mask."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_370",
                      product: "dev"
                    }), ": The device can only be used to check if a mask is worn. When this mode is activated, any user wearing a mask can access it regardless of authentication."]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ta-time-and-attendance",
      children: "T&A (Time and Attendance)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set how to register T&A mode."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " and authenticate with the Admin level credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_079",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Change the desired item."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3-auth2.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083",
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
                src: "/img/common/ico-add.svg",
                ico: true,
                alone: true
              }), " and then set the icon to display on the screen, ", (0,jsx_runtime.jsx)(Cmd, {
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
                sid: "ui_083",
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
                sid: "ui_083",
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