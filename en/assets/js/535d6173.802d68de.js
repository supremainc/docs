"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["8934"], {
"9435": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_biostation_3_authentication_mdx_535_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-biostation-3-authentication-mdx-535.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_biostation_3_authentication_mdx_535_namespaceObject = JSON.parse('{"id":"device/biostation_3/authentication","title":"Authentication","description":"Describes the supported authentication methods and authentication procedures.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/biostation_3/authentication.mdx","sourceDirName":"device/biostation_3","slug":"/device/biostation_3/authentication","permalink":"/docs/en/device/biostation_3/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"Authentication","description":"Describes the supported authentication methods and authentication procedures.","keywords":["Auth Mode","Operation","PIN","Face","T&A Mode"],"isTranslationMissing":false},"sidebar":"bioStation3","previous":{"title":"User","permalink":"/docs/en/device/biostation_3/user"},"next":{"title":"설정","permalink":"/docs/en/device/biostation_3/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/biostation_3/authentication.mdx


const frontMatter = {
	id: 'authentication',
	title: 'Authentication',
	description: 'Describes the supported authentication methods and authentication procedures.',
	keywords: [
		'Auth Mode',
		'Operation',
		'PIN',
		'Face',
		'T&A Mode'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Auth Mode",
  "id": "auth-mode",
  "level": 2
}, {
  "value": "Registering Auth Mode",
  "id": "registering-auth-mode",
  "level": 3
}, {
  "value": "Modifying Auth Mode",
  "id": "modifying-auth-mode",
  "level": 3
}, {
  "value": "Delete Auth Mode",
  "id": "delete-auth-mode",
  "level": 3
}, {
  "value": "Operation",
  "id": "operation",
  "level": 2
}, {
  "value": "Server Matching",
  "id": "server-matching",
  "level": 3
}, {
  "value": "QR Authentication",
  "id": "qr-authentication",
  "level": 3
}, {
  "value": "PIN",
  "id": "pin",
  "level": 2
}, {
  "value": "Auth Result Display Option",
  "id": "auth-result-display-option",
  "level": 2
}, {
  "value": "Face",
  "id": "face",
  "level": 2
}, {
  "value": "근태",
  "id": "근태",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Describes the supported authentication methods and authentication procedures."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "auth-mode",
      children: "Auth Mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set the authentication mode. You can make a combination of ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Face"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        children: "PIN"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Card / QR Code"
      }), ", or ", (0,jsx_runtime.jsx)(Cmd, {
        children: "ID"
      }), " and you can also set a schedule for each authentication mode."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registering-auth-mode",
      children: "Registering Auth Mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-menu.svg",
            ico: true
          }), " and authenticate with the Admin level credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            children: "AUTHENTICATION"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Auth Mode"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-add.svg",
            ico: true
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pressing ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-add1.svg",
            ico: true
          }), " will display the credential that can be added on the screen. Select the credentials to add. Press the ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-cancel.svg",
            ico: true
          }), " while the credential is added, and the added credential will be deleted."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-authmode.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the authentication mode as desired and configure the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Schedule"
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
                  children: ["- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-face.png",
                    ico: true
                  }), ": Mode to use a face only.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-face.png",
                    ico: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-pin.png",
                    ico: true
                  }), ": Mode to authenticate with a face and then enter PIN."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "Card / QR Code"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-card.png",
                    ico: true
                  }), ": Mode to use a card / QR code only.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-card.png",
                    ico: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-face.png",
                    ico: true
                  }), ": Mode to authenticate with a card / QR code and then authenticate with a face.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-card.png",
                    ico: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-pin.png",
                    ico: true
                  }), ": Mode to authenticate with a card / QR code and then enter PIN.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-card.png",
                    ico: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-face.png",
                    ico: true
                  }), " / ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-pin.png",
                    ico: true
                  }), ": Mode to authenticate with a card / QR code and then authenticate with a face or enter PIN.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-card.png",
                    ico: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-face.png",
                    ico: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-pin.png",
                    ico: true
                  }), ": Mode to authenticate with a card / QR code and then use both face authentication and PIN input."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "ID"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-id.png",
                    ico: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-face.png",
                    ico: true
                  }), ": Mode to enter ID and then authenticate with a face.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-id.png",
                    ico: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-pin.png",
                    ico: true
                  }), ": Mode to enter ID and then enter PIN.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-id.png",
                    ico: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-face.png",
                    ico: true
                  }), " / ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-pin.png",
                    ico: true
                  }), ": Mode to enter ID and then authenticate with a face or enter PIN.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-id.png",
                    ico: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-face.png",
                    ico: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/device/ico-authmode-pin.png",
                    ico: true
                  }), ": Mode to enter ID and then use both face authentication and PIN input."]
                })]
              })]
            })]
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "Schedule"
                }), " can be set in BioStar 2. If there is no set schedule, only ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "Always"
                }), " can be selected."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["For detailed contents regarding setting a ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "Schedule"
                }), ", refer to the BioStar 2 Administrator Guide."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["To use ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "QR Code"
                }), " authentication, ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "QR Authentication"
                }), " must be activated in ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "AUTHENTICATION"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "Operation"
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
            children: "OK"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modifying-auth-mode",
      children: "Modifying Auth Mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-menu.svg",
            ico: true
          }), " and authenticate with the Admin level credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            children: "AUTHENTICATION"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Auth Mode"
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
            children: "Registering Auth Mode"
          }), " and press ", (0,jsx_runtime.jsx)(Cmd, {
            children: "OK"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-auth-mode",
      children: "Delete Auth Mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-menu.svg",
            ico: true
          }), " and authenticate with the Admin level credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            children: "AUTHENTICATION"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Auth Mode"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-delete.svg",
            ico: true
          }), " and select the authentication mode to delete. You can select multiple options."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To delete the selected option, press ", (0,jsx_runtime.jsx)(Cmd, {
            children: "OK"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operation",
      children: "Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "server-matching",
      children: "Server Matching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set up server matching."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-menu.svg",
            ico: true
          }), " and authenticate with the Admin level credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            children: "AUTHENTICATION"
          }), " and activate ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Server Matching (Card, ID)"
          }), " in ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Operation"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-auth-option.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "Server Matching (Card, ID)"
            }), ": When this option is activated, it performs user authentication matching in BioStar 2, not in the device. It can be used when the device has too much user information or when the device is installed outside."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "Server Matching"
                }), " is only available for card and ID options."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["When you use the ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "Server Matching"
                }), " option, you need to activate the option in both Biostar 2 and the device. Refer to the Administrator Guide of BioStar 2 to learn how to set the server matching settings in BioStar 2."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qr-authentication",
      children: "QR Authentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can activate QR code authentication."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-menu.svg",
            ico: true
          }), " and authenticate with the Admin level credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            children: "AUTHENTICATION"
          }), " and activate ", (0,jsx_runtime.jsx)(Cmd, {
            children: "QR Authentication"
          }), " in ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Operation"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-auth-option-qr.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "QR Authentication"
              }), ": Set whether to use QR Code authentication through the device's camera."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Use QR as Card"
              }), ": Allows authentication with a QR code of the same data as the issued CSN card or Wiegand card. It can be set only when ", (0,jsx_runtime.jsx)(Cmd, {
                children: "QR Authentication"
              }), " is activated."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Using the ", (0,jsx_runtime.jsx)(Cmd, {
              children: "QR Authentication"
            }), " requires a separate device license. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
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
            src: "/img/device/ico-menu.svg",
            ico: true
          }), " and authenticate with the Admin level credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            children: "AUTHENTICATION"
          }), ", and set whether to use the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Scramble Keypad"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "PIN"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-pin.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "Scramble Keypad"
            }), ": When entering a password, the positions of the number keys are randomly shuffled to prevent password leakage."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "auth-result-display-option",
      children: "Auth Result Display Option"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set the auth result display option."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-menu.svg",
            ico: true
          }), " and authenticate with the Admin level credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            children: "AUTHENTICATION"
          }), " and set the desired item in the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Auth Result Display Option"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-auth-result-display-option.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "User ID Display"
              }), ": You can select how the user ID is displayed on the authentication result screen of the device."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Display All"
                  }), ": Displays the entire user ID."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Mask All but First Letter"
                  }), ": Displays only the first letter of the user ID."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Hide All"
                  }), ": Do not display the user ID."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "User Name Display"
              }), ": You can select how the user name is displayed on the authentication result screen of the device."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Display All"
                  }), ": Displays the entire user name."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Mask All but First Letter"
                  }), ": Displays only the first letter of the user name."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "Hide All"
                  }), ": Do not display the user name."]
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
      children: "얼굴 인증에 대한 설정을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-menu.svg",
            ico: true
          }), " and authenticate with the Admin level credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "AUTHENTICATION"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "얼굴"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 항목을 변경하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-auth.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "모션 센서 감도"
              }), ": 장치 주변에 움직임을 감지하는 감도를 설정합니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "모션 센서 감도"
              }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "끔"
              }), "으로 설정한 경우, 얼굴을 인증하려면 화면을 터치한 뒤 인증을 진행하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "등록 대기 시간"
              }), ": 설정한 시간 동안 얼굴을 등록하지 못하면 얼굴 등록이 취소됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "인증 대기 시간"
              }), ": 설정한 시간 동안 인증을 완료하지 못하면 인증에 실패합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "등록얼굴 중복검사"
              }), ": 얼굴 등록 시 중복 얼굴 여부를 검사할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "얼굴 검출 설정"
              }), ": 얼굴 인증 시 장치가 얼굴을 검출할 영역의 위치와 크기를 설정할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "info",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: "최적의 성능을 위해 얼굴 검출 설정의 하위 옵션은 기본 설정 값 사용을 권장합니다. 각 옵션의 기본 값은 다음과 같습니다."
              }), (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "최대 얼굴 회전 각도: 15"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "얼굴 인식 거리: 최소 30 cm, 최대 100 cm"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "얼굴 인식 영역 넓히기: 비활성화"
                  }), "\n"]
                }), "\n"]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "ToM 등록"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                children: "ToM 등록"
              }), "을 활성화하면 BioStar 2에서 발급받은 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "템플릿 온 모바일"
              }), "을 등록할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "템플릿 온 모바일"
              }), "은 사용자의 바이오메트릭 템플릿을 모바일 기기에 저장하는 모바일 액세스 카드로 BioStar 2 서버, Airfob Portal과 장치에 사용자 데이터를 저장하지 않고도 바이오메트릭으로 인증할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "템플릿 온 모바일"
                }), "에 대한 자세한 내용은 BioStar 2 관리자 설명서를 참고하세요."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "비주얼 페이스 이미지 저장하기"
              }), ": 비주얼 페이스에 실제 이미지와 템플릿을 모두 저장하도록 하거나 실제 이미지는 저장하지 않고 템플릿만 저장하도록 설정할 수 있습니다. 비활성화할 경우 저장된 비주얼 페이스의 이미지가 모두 삭제되며, 앞으로 등록되는 비주얼 페이스도 이미지를 제외한 템플릿만을 저장합니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "이 설정을 비활성화한 후에는 BioStar 2 v2.9.7 이상에 연결하여 사용하세요."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "보안 등급"
              }), ": 1", ":N", " 인증을 위한 보안 등급을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "작동 모드"
              }), ": 얼굴 인증 시 장치의 작동 모드를 설정할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "퓨전 매칭"
                  }), ": 비주얼 및 적외선 매칭이 모두 동작하여 얼굴 인증의 정확도를 높일 수 있습니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "빠른 인증"
                  }), ": 사용자는 장치의 인증 범위 안에서 걸어가면서도 얼굴을 인증하는 등 빠르게 인증을 수행할 수 있습니다."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "위조 얼굴 검출"
              }), ": 사진 등의 위조 얼굴을 이용한 사용자 인증을 방지할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "작동 모드"
              }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "퓨전 매칭"
              }), "으로 설정할 때 활성화됩니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "위조 얼굴 검출 성능을 개선하여 iBeta Level 1 ISO 30107-3 제시형 공격 탐지 시험에 통과하였습니다."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["햇빛이 강한 환경에서는 ", (0,jsx_runtime.jsx)(Cmd, {
                      children: "위조 얼굴 검출"
                    }), " 기능을 ", (0,jsx_runtime.jsx)(Cmd, {
                      children: "보통"
                    }), "으로 사용하는 것을 권장합니다."]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "고급 설정"
              }), ": 마스크 검출 등 얼굴 인증에 대한 고급 설정을 변경할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "마스크 검출"
                  }), ": 마스크 검출 사용 여부를 설정할 수 있습니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "검출 모드"
                  }), ": 마스크 착용 여부를 확인하는 방식을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                    children: "마스크 검출"
                  }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
                    children: "사용"
                  }), "으로 설정할 경우 활성화됩니다."]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "마스크 착용 (하드)"
                    }), ": 마스크를 착용하지 않은 사용자는 인증이 거부되며, 마스크 미착용 이벤트가 로그로 기록됩니다."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "마스크 착용 (소프트)"
                    }), ": 마스크를 착용하지 않은 사용자도 인증할 수 있으나 마스크 미착용 이벤트가 로그로 기록됩니다."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "마스크 미착용"
                    }), ": 마스크를 착용하지 않은 사용자만 인증할 수 있으며, 이 모드를 사용할 경우 마스크 확인 모드가 인증 전 확인으로 고정됩니다."]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "마스크 검출 등급"
              }), ": 마스크 착용을 감지하는 감도를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "마스크 검출"
              }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "사용"
              }), "으로 설정할 경우 활성화됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "확인 모드"
              }), ": 장치의 용도에 따라 확인 모드를 설정할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "인증 후 확인"
                    }), ": 인증을 수행한 뒤 사용자의 마스크 착용 여부를 확인합니다."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "인증 전 확인"
                    }), ": 사용자의 마스크 착용 여부를 확인한 뒤 인증을 수행합니다."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "확인만"
                    }), ": 장치를 마스크 착용 여부를 확인하는 용도로만 사용할 수 있습니다. 이 모드를 사용할 경우 인증과 관계없이 마스크를 착용한 사용자는 모두 출입할 수 있습니다."]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "근태",
      children: "근태"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "근태 모드 등록 방법을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-menu.svg",
            ico: true
          }), " and authenticate with the Admin level credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "AUTHENTICATION"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "근태"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 항목을 설정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-auth2.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "근태 모드"
              }), ": 근태 모드를 사용할 방법을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "근태 코드"
              }), ": 근태 이벤트를 등록할 수 있습니다. 근태 이벤트를 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "근태 코드"
              }), " → ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/device/ico-add.svg",
                ico: true
              }), "을 선택한 뒤 화면에 표시할 아이콘, ", (0,jsx_runtime.jsx)(Cmd, {
                children: "근태 이벤트 이름"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                children: "스케줄"
              }), "을 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "근태 등록 필요"
              }), ": 사용자가 인증할 때 근태 이벤트를 반드시 선택하도록 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "근태 모드"
              }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "수동변경"
              }), "으로 설정했을 때 사용할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "근태 고정 키"
              }), ": 관리자가 선택한 근태 이벤트만 사용하도록 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "근태 모드"
              }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "고정"
              }), "으로 설정했을 때 사용할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "작업 코드"
              }), ": 작업 코드 사용 여부를 선택할 수 있습니다."]
            }), "\n"]
          }), "\n"]
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
"65": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
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