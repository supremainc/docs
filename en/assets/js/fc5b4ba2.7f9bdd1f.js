"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["35729"], {
8945: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ settings_credential_smart_format_frontMatter),
  toc: () => (/* binding */ settings_credential_smart_format_toc),
  "default": () => (/* binding */ settings_credential_smart_format_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_smart_format_mdx_fc5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ settings_credential_smart_format_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-credential-smart-format-mdx-fc5.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_smart_format_mdx_fc5_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-credential-smart-format","title":"Set Smart Card Format","description":"Set layout of smart cards such as MIFARE, iCLASS, DESFire, iCLASS Seos.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-smart-format.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-credential-smart-format","permalink":"/en/platform/biostar_x/settings-credential-smart-format","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-credential-smart-format.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-credential-smart-format","title":"Set Smart Card Format","description":"Set layout of smart cards such as MIFARE, iCLASS, DESFire, iCLASS Seos.","keywords":["Smart Card","Card format","Settings"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Set Wiegand Card Format","permalink":"/en/platform/biostar_x/settings-credential-wiegand-format"},"next":{"title":"Manage Mobile Access Cards","permalink":"/en/platform/biostar_x/settings-credential-mobile-access-card"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_smart-cardtype.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Include} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "mifare,custom-mifare",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.encryptionType",
            product: "2"
          }), ": Set encryption type to ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SL1"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SL3"
          }), "."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "desfire,custom-desfire",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.format.desfireAvd",
            product: "2"
          }), ": You can use DESFire cards issued by third parties. Only DESCire can be configured."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "mifare,custom-mifare,iclass,desfire,custom-desfire,iclassseos",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.primaryKey",
              product: "2"
            }), ": The key that encrypts communications between the smart card and the card reader."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), ": Used for authentication when the card's primary site key does not match. The secondary site key can only be entered after activating the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), " option at the top of the section."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "mifare,iclass",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.startBlockIndex",
            product: "2"
          }), ": Select the starting block where each template will be saved. This block is the index of the block where user information is stored; set it to a storable block if the user is already using the smart card."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "custom-mifare,custom-iclass",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.blockIndex",
            product: "2"
          }), ": Select the starting block where each template will be saved. This block is the index of the block where user information is stored; set it to a storable block if the user is already using the smart card."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "desfire,custom-desfire",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.idField",
              product: "2"
            }), ": Configure to read a specific area on the card. Acts as a directory containing ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.fileId",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.fileId",
              product: "2"
            }), ": Set the file ID."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.encryptionType",
              product: "2"
            }), ": Set the encryption type to ", (0,jsx_runtime.jsx)(Cmd, {
              children: "DES/3DES"
            }), " or ", (0,jsx_runtime.jsx)(Cmd, {
              children: "AES"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "custom-mifare,custom-iclass,custom-desfire",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.skipBytes",
              product: "2"
            }), ": Set the starting point for reading the card number."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.dataSize",
              product: "2"
            }), ": (When the set ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.primaryKey",
              product: "2"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), " values are the same as the card's configuration) Configure the data size of the card to be read."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "iclassseos",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.ADF",
            product: "2"
          }), ": The ADF address where digital credentials are stored."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "felica",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.systemCode",
              product: "2"
            }), ": Enter the system code to read FeliCa cards in hexadecimal, with a maximum of 4 characters."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.serviceCode",
              product: "2"
            }), ": Enter the service code to read FeliCa cards in hexadecimal, with a maximum of 4 characters."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.idField",
              product: "2"
            }), ": Set to read a certain area on the card. You can set up to 8 blocks to read by clicking ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.addplus",
              product: "2"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.blockNumber",
              product: "2"
            }), ": Set the block to read from the card. (0-150)"]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-smart-format.mdx


const settings_credential_smart_format_frontMatter = {
	id: 'settings-credential-smart-format',
	title: 'Set Smart Card Format',
	description: 'Set layout of smart cards such as MIFARE, iCLASS, DESFire, iCLASS Seos.',
	keywords: [
		'Smart Card',
		'Card format',
		'Settings'
	],
	isTranslationMissing: false
};
const settings_credential_smart_format_contentTitle = undefined;

const assets = {

};




const settings_credential_smart_format_toc = [{
  "value": "Add smart card",
  "id": "addSmartformat",
  "level": 2
}, {
  "value": "Smart card types",
  "id": "smartCardType",
  "level": 2
}, {
  "value": "Setting options guide",
  "id": "setting",
  "level": 2
}, {
  "value": "Set basic information",
  "id": "set-basic-information",
  "level": 3
}, {
  "value": "Set smart card",
  "id": "set-smart-card",
  "level": 3
}, {
  "value": "Suprema smart card",
  "id": "suprema-smart-card",
  "level": 4
}, ...toc, ...toc, ...toc, ...toc, {
  "value": "Layout",
  "id": "layout",
  "level": 5
}, {
  "value": "Custom smart card",
  "id": "custom-smart-card",
  "level": 4
}, ...toc, ...toc, ...toc];
function settings_credential_smart_format_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) settings_credential_smart_format_missingMdxReference("Cmd", true);
  if (!Details) settings_credential_smart_format_missingMdxReference("Details", true);
  if (!Image) settings_credential_smart_format_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Set layout of smart cards such as MIFARE, iCLASS, DESFire, iCLASS Seos."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addSmartformat",
      children: "Add smart card"
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
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.cardFormat"
          }), " on the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.smartCard",
            product: "2"
          }), " in the left card format list."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-card-smart.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addSmartCard",
            product: "2"
          }), " in the top left of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.addNewSmartCard",
            product: "2"
          }), " screen appears, configure each item. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#smartCardType",
            children: "the following"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-smart-format-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once all settings are completed, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "smartCardType",
      children: "Smart card types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set the desired smart card type in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.smartCardType",
        product: "2"
      }), " option."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.supremaSmartCard",
          product: "2"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-smart-format-type.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.customSmartCard",
          product: "2"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-custom-smart-format-type.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Custom smart cards only support MIFARE, DESFire, and FeliCa."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FeliCa is only supported on BioStation 3 firmware version 1.3.0 or higher."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "Setting options guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set the card layout in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.info",
        product: "2"
      }), " section."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-credentail-smart-format-info.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.primaryKey",
              product: "2"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), " support only hexadecimal. Enter the key values to be used in the right field and click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.convertToHex",
              product: "2"
            }), ". Use the converted value as the site key."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.convertToHex",
              product: "2"
            }), " is only available when the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.smartCardType",
              product: "2"
            }), " option is ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.supremaSmartCard",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-basic-information",
      children: "Set basic information"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": Enter the smart card name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.secondaryKey",
            product: "2"
          }), ": Configure whether to use a secondary site key. Set to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.active",
            product: "2"
          }), " to enable secondary site key configuration. When a secondary site key is set, it will be used for authentication when the card's primary site key does not match."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credential-cart-secondary-key.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-smart-card",
      children: "Set smart card"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set the structure of the smart card."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "suprema-smart-card",
      children: "Suprema smart card"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.primaryKey",
        product: "2"
      }), " and ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.secondaryKey",
        product: "2"
      }), " support only hexadecimal. Enter the key value for each input field and click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.convertToHex",
        product: "2"
      }), ". Use the converted value as the site key."]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "MIFARE"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-mifare.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "mifare"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "iCLASS"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-iclass.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "iclass"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "DESFire"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-desfire.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "desfire"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "iClass Seos"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-iclassseos.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "iclassseos"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "layout",
      children: "Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can modify the layout that records user information, facial, and fingerprint information."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.numberOfTemplate",
            product: "2"
          }), ": Set the number of fingerprint templates to include in the layout."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.templateSize",
            product: "2"
          }), ": Set the number of bytes used by each fingerprint template."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.useFace",
            product: "2"
          }), ": Choose whether to use the face template."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.faceTemplateSize",
            product: "2"
          }), ": Set the number of bytes used by the face template."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.cardFormat.useFace",
          product: "2"
        }), " is available on FaceStation F2, BioStation 3, and BioEntry W3 models."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "custom-smart-card",
      children: "Custom smart card"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Custom smart cards only support MIFARE, DESFire, and FeliCa."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "FeliCa is only supported on BioStation 3 firmware version 1.3.0 or higher."
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "MIFARE"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-custom-card-mifare.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "custom-mifare"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "DesFire"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-custom-card-desfire.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "custom-desfire"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "Felica"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-custom-card-felica.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "felica"
      })]
    })]
  });
}
function settings_credential_smart_format_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(settings_credential_smart_format_createMdxContent, {
      ...props
    })
  }) : settings_credential_smart_format_createMdxContent(props);
}
function settings_credential_smart_format_missingMdxReference(id, component) {
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