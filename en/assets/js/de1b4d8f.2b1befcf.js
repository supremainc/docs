"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["69526"], {
69510: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_card_mdx_de1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-card-mdx-de1.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_card_mdx_de1_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-card","title":"Enroll Access Card","description":"Guide users on how to enroll CSN, Wiegand, and smart cards.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-card.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-card","permalink":"/docs/en/platform/biostar_x/enroll-credential-card","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-card.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-card","title":"Enroll Access Card","description":"Guide users on how to enroll CSN, Wiegand, and smart cards.","keywords":["Access card","Enrollment","Credentials","Authentication","card"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Enroll Face","permalink":"/docs/en/platform/biostar_x/enroll-credential-face"},"next":{"title":"Enroll Mobile Access Cards","permalink":"/docs/en/platform/biostar_x/enroll-credential-mobile"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-card.mdx


const frontMatter = {
	id: 'enroll-credential-card',
	title: 'Enroll Access Card',
	description: 'Guide users on how to enroll CSN, Wiegand, and smart cards.',
	keywords: [
		'Access card',
		'Enrollment',
		'Credentials',
		'Authentication',
		'card'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "CSN card",
  "id": "csncard",
  "level": 2
}, {
  "value": "Wiegand card",
  "id": "wiegandcard",
  "level": 2
}, {
  "value": "Smart card",
  "id": "smardcard",
  "level": 2
}, {
  "value": "Reading card/format",
  "id": "readformatcard",
  "level": 2
}, {
  "value": "Assigned card information confirmation",
  "id": "assigned-card-information-confirmation",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Guide users on how to enroll access cards. Explain the enrollment methods for CSN cards, Wiegand cards, and smart cards, as well as the card reading/formatting features. Refer to the manual of the device for the types of cards supported by the device."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Card enrollment using a USB agent"
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: "table-fixed",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Card Type"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "CSN"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "Wiegand"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "Smart Card"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "EM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MIFARE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DESFire"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "FeliCa"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HID Prox"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HID iCLASS"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csncard",
      children: "CSN card"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " section, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCard",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.card",
            product: "2"
          }), " window appears, select ", (0,jsx_runtime.jsx)(Cmd, {
            children: "CSN"
          }), " from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " options."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-card-csn.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select your desired card enrollment method from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), " field."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.registerByCardReader",
                product: "2"
              }), ": Select the device from the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device",
                product: "2"
              }), " list to scan the card and click the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.readCard",
                product: "2"
              }), " button."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.assignCard",
                product: "2"
              }), ": Select the card you want to assign to the user from the list. You can search through the input field."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.enterManually",
                product: "2"
              }), ": Enter the card number manually or click the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.useUserId",
                product: "2"
              }), " button."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiegandcard",
      children: "Wiegand card"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " section, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCard",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.card",
            product: "2"
          }), " window appears, select ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Wiegand"
          }), " from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " options."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-card-wiegand.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired format from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnrol.cardFormat",
            product: "2"
          }), " field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select your desired card enrollment method from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), " field."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.registerByCardReader",
                product: "2"
              }), ": Select the device from the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device",
                product: "2"
              }), " list to scan the card and click the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.readCard",
                product: "2"
              }), " button."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.assignCard",
                product: "2"
              }), ": Select the card you want to assign to the user from the list. You can search through the input field."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.enterManually",
                product: "2"
              }), ": Enter the facility code and card ID manually."]
            }), "\n"]
          }), "\n"]
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
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If the desired card data format is not available in the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user.cardEnrol.cardFormat",
          product: "2"
        }), " options, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-credential-wiegand-format",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "smardcard",
      children: "Smart card"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enroll a security credential card, access-on card, or custom smart card."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " section, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCard",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.card",
            product: "2"
          }), " window appears, select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.smartCard",
            product: "2"
          }), " from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " options."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-card-smartcard.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the device for card enrollment from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device",
            product: "2"
          }), " field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once selected, the card layout format set in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardLayoutFormatName",
            product: "2"
          }), " field will be displayed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired card type from ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardMode",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.secureCredentialCard",
                product: "2"
              }), ": User information (card ID, PIN, access group, duration, fingerprint template, face template, private authentication mode) can be stored on the card."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.accessOnCard",
                product: "2"
              }), ": User information (card ID, PIN, fingerprint template, face template) can be stored on the card."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.customSmartCard",
                product: "2"
              }), ": Enroll a smart card issued by a third party. Click the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.readCard",
                product: "2"
              }), " button to enroll the card ID."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the desired fingerprint template."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.writeCard",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To issue a smart card, the correct card type must be set. For more information about card types, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-credential-smart-format",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The user information stored on the smart card uses information stored in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ". Failure to store updated user information may result in incorrect information being stored on the smart card. Additionally, if the updated user information is not synchronized with the device, the device may fail to perform authentication."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To use a face template, select ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.useFace",
              product: "2"
            }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.layout",
              product: "2"
            }), " section when adding a new smart card in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.credential.root"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.credential.cardFormat"
            }), " menu. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-credential-smart-format#layout",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user.accessOnCard",
              product: "2",
              className: "normal"
            }), " cannot set the card ID manually."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "For devices and firmware versions supporting Custom Smart Card, refer to the list below."
          }), "\n", (0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsx)("summary", {
              children: "View devices and firmware versions that support custom smart cards"
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "XPass D2 firmware version 1.7.1 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry P2 firmware version 1.5.1 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry W2 firmware version 1.8.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 2a firmware version 1.1.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "X-Station 2 firmware version 1.3.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 3 firmware version 1.3.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry W3 firmware version 1.0.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioLite N2 firmware version 1.6.2 or higher"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To set up the smart card layout, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-details-auth",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To format the smart card and rewrite information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#readformatcard",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "readformatcard",
      children: "Reading card/format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can format smart cards and rewrite information."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " section, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCard",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.card",
            product: "2"
          }), " window appears, select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.readCard",
            product: "2"
          }), " from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " options."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-card-readcard.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the device capable of reading smart cards from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device",
            product: "2"
          }), " field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardModeLong",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.readCard",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verify the card information and click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.formatCard",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The list of devices in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.device",
              product: "2"
            }), " field will only display devices with the smart card layout set. For more information about setting this up, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-details-auth",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Custom smart cards cannot be formatted."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "assigned-card-information-confirmation",
      children: "Assigned card information confirmation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To view the assigned card information for the user, click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.cardHistory",
        product: "2"
      }), " button in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.credential",
        product: "2"
      }), " section. You can check the date of card assignment, card type, card ID, and status."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-card-assign-info.png"
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