"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9294"], {
56973: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_visitor_mdx_90f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-visitor-mdx-90f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_visitor_mdx_90f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-visitor","title":"Visitor","description":"You can configure visiting sites and PCs. You can also set the terms and conditions for visitors. And You can create the information fields that you want to know from the visitors by using the Custom Visitor Field.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-visitor.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-visitor","permalink":"/docs/en/platform/biostar_x/settings-visitor","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-visitor.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-visitor","title":"Visitor","description":"You can configure visiting sites and PCs. You can also set the terms and conditions for visitors. And You can create the information fields that you want to know from the visitors by using the Custom Visitor Field.","keywords":["Visitor Management","Custom Field"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Card Printer","permalink":"/docs/en/platform/biostar_x/settings-card-printer"},"next":{"title":"Email Setting","permalink":"/docs/en/platform/biostar_x/settings-email-setting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-visitor.mdx


const frontMatter = {
	id: 'settings-visitor',
	title: 'Visitor',
	description: 'You can configure visiting sites and PCs. You can also set the terms and conditions for visitors. And You can create the information fields that you want to know from the visitors by using the Custom Visitor Field.',
	keywords: [
		'Visitor Management',
		'Custom Field'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Site settings",
  "id": "site-settings",
  "level": 2
}, {
  "value": "Visit PC settings",
  "id": "visit-pc-settings",
  "level": 2
}, {
  "value": "Visit PC select",
  "id": "visit-pc-select",
  "level": 2
}, {
  "value": "Terms &amp; Visitor settings",
  "id": "terms--visitor-settings",
  "level": 2
}, {
  "value": "Custom visitor field",
  "id": "custom-visitor-field",
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
  }, {Cmd, IcEdit, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "You can configure visiting sites and PCs. You can also set the terms and conditions for visitors. And You can create the information fields that you want to know from the visitors by using the Custom Visitor Field."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.visitor",
              product: "2"
            }), " setting will appear when the Visitor license is activated."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Activate the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.automaticUserSync",
              product: "2"
            }), " or ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.serverMatching.use",
              product: "2"
            }), " option to use the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.visitor",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the left sidebar, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.visitor",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Edit the necessary fields."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "site-settings",
      children: "Site settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set the access group to use in the visiting PC and managing PC of each site. You can also set whether or not to use cards. If you are using a card, you can also set Card Type and Card Data Format."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-visitor-site-settings.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.name",
            product: "2"
          }), ": You can set the name of site."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Up to 48 characters may be entered for a site name."
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.accessGroup",
            product: "2"
          }), ": You can select the access group to assign to the visitor."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.card",
            product: "2"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), ": You can set whether or not to use a card."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), ": You can select the type of card to use in the site. The card type is activated only when you select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.card",
            product: "2"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnrol.cardFormat",
            product: "2"
          }), ": You can configure the format for reading card data. The ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnrol.cardFormat",
            product: "2"
          }), " is activated only when you set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnrol.cardTypeWiegand",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "visitor.setting.button.apply",
        product: "2"
      }), " to save the setting of the site."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visit-pc-settings",
      children: "Visit PC settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set the visiting PC and managing PC."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-visitor-visit-pc-settings.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": You can set the name of the visiting PC and managing PC."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.fingerPrint",
            product: "2"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.enrollment_device.device_name",
            product: "2"
          }), ": Select a device to enroll visitors' fingerprints when visitors access the site using the fingerprint authentication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.card",
            product: "2"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.enrollment_device.device_name",
            product: "2"
          }), ": Select a device to issue the card to visitors when visitors access the site using the card authentication. The card device name is only activated if you have set a visit where you have selected to use the card."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.site",
            product: "2"
          }), ": Select a site to manage the visit on the visiting PC."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Up to 48 characters may be entered for a name of the visiting PC."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can use the fingerprint and card device at the same time. You can select only one for each."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can only select one site per PC."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "visitor.setting.button.apply",
        product: "2"
      }), " to save the setting of the Visit PC Setting."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "visitor.link.visitPCKIOSK",
          product: "2"
        }), ": You can create a shortcut icon of Visit application page on the desktop of the visiting PC. Drag and drop the link to the desktop of the visiting PC."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visit-pc-select",
      children: "Visit PC select"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can select the PC set in ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "visitor.pc.setting",
        product: "2"
      }), " and assign it to the current PC."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-visitor-visit-pc-select.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "visitor.setting.button.apply",
        product: "2"
      }), " to save the settings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "terms--visitor-settings",
      children: "Terms & Visitor settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can manage key visitor settings such as terms of entry, privacy policy, and guidance messages."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-visitor-terms-visitor-settings.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Terms and Conditions"
          }), ": You can set the terms and conditions for visitors. Click ", (0,jsx_runtime.jsx)(IcEdit, {}), " to activate the input field and enter the contents of terms and conditions."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Up to 65,535 characters may be entered for the sentence of terms and conditions."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Up to 64 characters may be entered for the sentence of accept terms and conditions."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Privacy Policy"
          }), ": You can set the privacy policy for visitors. Click ", (0,jsx_runtime.jsx)(IcEdit, {}), " to activate the input field and enter the privacy policy."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Up to 65,535 characters may be entered for the sentence of privacy policy."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Up to 64 characters may be entered for the sentence of accept privacy policy."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.periodKeepSensitive",
            product: "2"
          }), ": You can set the period for keeping personal data that visitors provide when they visit. Click ", (0,jsx_runtime.jsx)(IcEdit, {}), " to activate the input field and enter the number of days to keep personal data."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["You can delete the visitors that have the personal data expired in ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.visitor",
                product: "2"
              }), " menu."]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.guideAfterRegister",
            product: "2"
          }), ": You can set the guide to appear on the screen as a pop-up when a visitor completes an application for a visit. Click ", (0,jsx_runtime.jsx)(IcEdit, {}), " to activate the input field and enter the guide for visitors."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Up to 65,535 characters may be entered for the sentence of guide."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "If you do not enter the sentence of a guide, nothing will be displayed on the screen when visitors complete their visit application."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.defaultActivePeriod",
            product: "2"
          }), ": You can set the access period for visitors. Click ", (0,jsx_runtime.jsx)(IcEdit, {}), " to activate the input field and enter the default access period for visitors."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "custom-visitor-field",
      children: "Custom visitor field"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can add custom visitor fields for extra visitor information and these fields appear on the visit application page."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-visitor-custom-visitor-field.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.order",
            product: "2"
          }), ": You can set the order of the Custom Visitor Field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.name",
            product: "2"
          }), ": You can set the name of the Custom Visitor Field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.type",
            product: "2"
          }), ": You can choose the Text Input Box, Number Input Box or Combo Box."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.data",
            product: "2"
          }), ": Enter the options to appear in the combo boxes. Each item is separated by a semicolon (;). Data is only activated when ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.type",
            product: "2"
          }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.combobox",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.textbox",
              product: "2"
            }), ", characters and numbers are allowed."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.numericbox",
              product: "2"
            }), ", numbers are allowed and characters are not allowed."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.combobox",
              product: "2"
            }), ", the items that have been set to the field are displayed as item. If you want to configure a combo box field as shown in the screenshot below, you need to enter ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 1"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 2"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 3"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 4"
            }), " in the data field."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "visitor.setting.button.apply",
        product: "2"
      }), " to save the settings."]
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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