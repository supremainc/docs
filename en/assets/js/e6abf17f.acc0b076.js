"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["70996"], {
56572: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_register_manage_mdx_e6a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-visitor-register-manage-mdx-e6a.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_register_manage_mdx_e6a_namespaceObject = JSON.parse('{"id":"platform/biostar_x/visitor-register-manage","title":"Manage Visitors","description":"You can approve, modify, add, or delete visitor requests.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor-register-manage.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/visitor-register-manage","permalink":"/en/platform/biostar_x/visitor-register-manage","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/visitor-register-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"visitor-register-manage","title":"Manage Visitors","description":"You can approve, modify, add, or delete visitor requests.","keywords":["Visitor Application","Manage"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Apply to Visit","permalink":"/en/platform/biostar_x/visitor-register"},"next":{"title":"Manage Check-In Visitors","permalink":"/en/platform/biostar_x/visitor-register-checkin-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor-register-manage.mdx


const frontMatter = {
	id: 'visitor-register-manage',
	title: 'Manage Visitors',
	description: 'You can approve, modify, add, or delete visitor requests.',
	keywords: [
		'Visitor Application',
		'Manage'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Visitor approval",
  "id": "visitor-approval",
  "level": 2
}, {
  "value": "Approve and enroll card",
  "id": "approve-and-register-card",
  "level": 3
}, {
  "value": "Fingerprint search for visitor approval",
  "id": "fingerprint-search-for-visitor-approval",
  "level": 2
}, {
  "value": "Add visitor",
  "id": "add-visitor",
  "level": 2
}, {
  "value": "Delete visitor",
  "id": "delete-visitor",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "You can approve or modify visitor requests. Administrators can also add or delete visitors directly."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visitor-approval",
      children: "Visitor approval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide shows how to check visitor requests and approve their access."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the visitor you want to approve in the visitor list."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After checking the visitor's information, correct any required items and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.edit",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.status.checkIn",
            product: "2"
          }), " button at the bottom right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the contents of ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.visitRegisterInfo",
            product: "2"
          }), " and to approve the visit, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.checkin",
            product: "2"
          }), " button at the bottom right of the screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the applicant has not agreed to the visitor access terms, the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.checkin",
              product: "2"
            }), " button will be disabled. Click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "visitor.term.watch",
              product: "2"
            }), " button to provide the access terms to the visitor and obtain agreement. If the visitor does not agree to the access terms, the visit will be restricted."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/visitor-register-manage-view-term.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If a card registration device is set up on the visitor PC, the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "visitor.button.approveAndRegisterCard",
              product: "2"
            }), " button will be activated. Click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "visitor.button.approveAndRegisterCard",
              product: "2"
            }), " button to approve the visitor and issue an access card. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#approve-and-register-card",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To set up card usage on the visitor PC, go to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.visitor"
            }), " menu and the following minimum settings are required. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor",
              children: "the following"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-visitor-settings-use-card.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "visitor.site",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.setting",
                  product: "2"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.card",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.use",
                  product: "2"
                }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "user.cardType",
                  product: "2"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "visitor.pc.management",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "visitor.pc.setting",
                  product: "2"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.card",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.server.enrollment_device.device_name",
                  product: "2"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "approve-and-register-card",
      children: "Approve and enroll card"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide shows how to approve visitor requests and issue access cards."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.visitRegisterInfo",
            product: "2"
          }), " screen, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.button.approveAndRegisterCard",
            product: "2"
          }), " button at the bottom right of the screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved-card.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the card registration window appears, select your desired registration method."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.registerByCardReader",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enterManually",
              product: "2"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.registerByCardReader",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can scan card information with a device connected to the visitor PC."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registerByCardReader",
            product: "2"
          }), " for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved-card-reader.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To scan the card to enroll, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.readCard",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To enroll the card, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.enterManually",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can enroll by directly entering the card number."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.enterManually",
            product: "2"
          }), " for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved-card-manual.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Directly enter ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardId",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To enroll the card, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fingerprint-search-for-visitor-approval",
      children: "Fingerprint search for visitor approval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can search for visitors with enrolled fingerprints and process their approval."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.button.searchVisitorByFingerprint",
            product: "2"
          }), " button in the upper left of the visitor request list."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-list-search-fingerprint.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Scan the visitor's fingerprint on the fingerprint scanning device."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If a visitor matching the fingerprint is found, a confirmation message will appear. Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.button.registerInformation",
            product: "2"
          }), " button."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-list-search-fingerprint-confirm.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After checking the visitor's information, correct any required items and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.edit",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.status.checkIn",
            product: "2"
          }), " button at the bottom right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the contents of ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.visitRegisterInfo",
            product: "2"
          }), " and to approve the visit, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.checkin",
            product: "2"
          }), " button at the bottom right of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-visitor",
      children: "Add visitor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide shows how an administrator can add visitors directly."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addVisitor",
            product: "2"
          }), " button in the upper left of the visitor list."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the visitor's name and phone number in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.visitor",
            product: "2"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-visitor-info.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the name and phone number of the responsible person for the visit in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.host",
            product: "2"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-admin-info.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When you enter a name or phone number, a list of users matching the entered information will be displayed. To designate the desired user, click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.choose",
              product: "2"
            }), " button."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the access group and visit duration in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.accessInfo",
            product: "2"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-access-info.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can only select access groups assigned to the visiting department for the visit PC. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-site",
              children: "the following"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the means of access in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-credential.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.card",
                product: "2"
              }), ": To use card authentication, set it to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.request",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.fingerPrint",
                product: "2"
              }), ": To use fingerprint authentication, click the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.addFingerprint",
                product: "2"
              }), " button and then enroll the visitor's fingerprint."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To complete adding the visitor, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.register",
            product: "2"
          }), " button at the bottom right of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The name can be entered up to 48 characters long."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To add custom fields to visitor information input, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-custom-field",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-visitor",
      children: "Delete visitor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the checkbox of the visitor you want to delete from the visitor request list."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-remove-visitor.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.deleteVisitor",
            product: "2"
          }), " button at the top right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the confirmation message appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.func.deleteVisitor",
              product: "2"
            }), " button will be activated when a visitor's checkbox is clicked."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Visitors can only be deleted from the visitor request list."
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